/* AlgebraTrace UI: lightweight editable math field.
 * The editor keeps one solver-compatible plain-text string and renders it as
 * clickable math HTML. It does not depend on CDN, modules, fetch, or a server.
 */
window.AlgebraTrace = window.AlgebraTrace || {};
(function (NS) {
    "use strict";

    function $(id) { return document.getElementById(id); }
    function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }
    function safeText(v) { return String(v === undefined || v === null ? "" : v); }
    function escapeHTML(text) {
        if (NS.escapeHTML) return NS.escapeHTML(text);
        return safeText(text).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    function normalizeSymbolChar(ch) {
        if (ch === "*") return "·";
        if (ch === "-") return "−";
        return ch;
    }
    function trimRange(text, start, end) {
        while (start < end && /\s/.test(text.charAt(start))) start += 1;
        while (end > start && /\s/.test(text.charAt(end - 1))) end -= 1;
        return { start:start, end:end };
    }
    function matchingParenIndex(text, openIndex, limitEnd) {
        var depth = 0, end = typeof limitEnd === "number" ? limitEnd : text.length;
        for (var i = openIndex; i < end; i += 1) {
            var ch = text.charAt(i);
            if (ch === "(") depth += 1;
            else if (ch === ")") {
                depth -= 1;
                if (depth === 0) return i;
            }
        }
        return -1;
    }
    function isWrapped(text, start, end) {
        if (text.charAt(start) !== "(" || text.charAt(end - 1) !== ")") return false;
        return matchingParenIndex(text, start, end) === end - 1;
    }
    function stripOuter(text, start, end) {
        var r = trimRange(text, start, end), changed = true;
        start = r.start; end = r.end;
        while (changed && end - start >= 2 && isWrapped(text, start, end)) {
            start += 1; end -= 1;
            r = trimRange(text, start, end); start = r.start; end = r.end;
            changed = true;
        }
        return { start:start, end:end };
    }
    function findTopLevel(text, start, end, chars, fromRight) {
        var depth = 0, abs = false;
        var i = fromRight ? end - 1 : start;
        var stop = fromRight ? start - 1 : end;
        var step = fromRight ? -1 : 1;
        for (; i !== stop; i += step) {
            var ch = text.charAt(i);
            if (fromRight) {
                if (ch === ")") depth += 1;
                else if (ch === "(") depth -= 1;
            } else {
                if (ch === "(") depth += 1;
                else if (ch === ")") depth -= 1;
            }
            if (ch === "|") abs = !abs;
            if (depth === 0 && !abs && chars.indexOf(ch) >= 0) {
                if ((ch === "+" || ch === "-") && i === start) continue;
                return i;
            }
        }
        return -1;
    }
    function findRelation(text, start, end) {
        var depth = 0, abs = false;
        for (var i = start; i < end; i += 1) {
            var ch = text.charAt(i), two = text.slice(i, i + 2);
            if (ch === "(") depth += 1;
            else if (ch === ")") depth -= 1;
            else if (ch === "|") abs = !abs;
            if (depth === 0 && !abs) {
                if (two === "<=") return { index:i, length:2, op:"≤" };
                if (two === ">=") return { index:i, length:2, op:"≥" };
                if (ch === "=" || ch === "<" || ch === ">" || ch === "≤" || ch === "≥") return { index:i, length:1, op:ch };
            }
        }
        return null;
    }
    function findFunctionCall(text, start, end) {
        var segment = text.slice(start, end);
        var m = segment.match(/^([A-Za-z]+(?:_[0-9A-Za-z.\/]+)?|log\d+(?:\.\d+)?)\s*\(/);
        if (!m) return null;
        var open = start + m[0].lastIndexOf("(");
        var close = matchingParenIndex(text, open, end);
        if (close !== end - 1) return null;
        return { name:m[1], open:open, close:close, argStart:open + 1, argEnd:close };
    }

    function splitTopLevelRanges(text, start, end, delimiter) {
        var ranges = [], pieceStart = start, depth = 0, abs = false;
        for (var i = start; i < end; i += 1) {
            var ch = text.charAt(i);
            if (ch === "(") depth += 1;
            else if (ch === ")") depth -= 1;
            else if (ch === "|") abs = !abs;
            if (depth === 0 && !abs && ch === delimiter) {
                ranges.push(trimRange(text, pieceStart, i));
                pieceStart = i + 1;
            }
        }
        ranges.push(trimRange(text, pieceStart, end));
        return ranges;
    }

    function createEditableRenderer(text, caret) {
        var caretRendered = false;
        function caretHTML() {
            caretRendered = true;
            return '<span class="editor-caret" aria-hidden="true"></span>';
        }
        function boundary(pos) {
            return (!caretRendered && caret === pos) ? caretHTML() : "";
        }
        function rangeAttrs(start, end) {
            return ' data-start="' + start + '" data-end="' + end + '"';
        }
        function emptySlot(pos, label) {
            return boundary(pos) + '<span class="editor-slot"' + rangeAttrs(pos, pos) + '>' + escapeHTML(label || "□") + '</span>';
        }
        function renderChar(i) {
            var ch = text.charAt(i);
            var shown = ch === "π" ? "π" : normalizeSymbolChar(ch);
            return boundary(i) + '<span class="mchar" data-pos="' + i + '" data-start="' + i + '" data-end="' + (i + 1) + '">' + escapeHTML(shown) + '</span>';
        }
        function renderRaw(start, end) {
            if (start >= end) return emptySlot(start);
            var html = "";
            for (var i = start; i < end; i += 1) html += renderChar(i);
            return html + boundary(end);
        }
        function renderOperator(index, length, op) {
            var html = boundary(index);
            html += '<span class="op editor-op"' + rangeAttrs(index, index + length) + '>' + escapeHTML(op) + '</span>';
            html += boundary(index + length);
            return html;
        }
        function renderDelimited(start, end) {
            return '<span class="paren"' + rangeAttrs(start, start + 1) + '>(</span>' + renderRange(start + 1, end - 1) + '<span class="paren"' + rangeAttrs(end - 1, end) + '>)</span>';
        }
        function renderFunction(call) {
            var lower = call.name.toLowerCase();
            if (lower === "sqrt") {
                return '<span class="sqrt"' + rangeAttrs(call.open - call.name.length, call.close + 1) + '><span class="radical">√</span><span class="radicand">' + renderRange(call.argStart, call.argEnd) + '</span></span>';
            }
            if (lower === "abs") {
                return '<span class="absbar"' + rangeAttrs(call.open - call.name.length, call.open + 1) + '>|</span>' + renderRange(call.argStart, call.argEnd) + '<span class="absbar"' + rangeAttrs(call.close, call.close + 1) + '>|</span>';
            }
            if (lower === "log") {
                var logArgs = splitTopLevelRanges(text, call.argStart, call.argEnd, ",");
                if (logArgs.length === 2) {
                    return '<span class="fn"' + rangeAttrs(call.open - call.name.length, call.open) + '>log<sub class="log-base"' + rangeAttrs(logArgs[1].start, logArgs[1].end) + '>' + renderRange(logArgs[1].start, logArgs[1].end) + '</sub></span><span class="paren"' + rangeAttrs(call.open, call.open + 1) + '>(</span>' + renderRange(logArgs[0].start, logArgs[0].end) + '<span class="paren"' + rangeAttrs(call.close, call.close + 1) + '>)</span>';
                }
                return '<span class="fn"' + rangeAttrs(call.open - call.name.length, call.open) + '>log</span><span class="paren"' + rangeAttrs(call.open, call.open + 1) + '>(</span>' + renderRange(call.argStart, call.argEnd) + '<span class="paren"' + rangeAttrs(call.close, call.close + 1) + '>)</span>';
            }
            if (lower.indexOf("log_") === 0) {
                return '<span class="fn"' + rangeAttrs(call.open - call.name.length, call.open) + '>log<sub class="log-base"' + rangeAttrs(call.open - call.name.length + 4, call.open) + '>' + renderRange(call.open - call.name.length + 4, call.open) + '</sub></span><span class="paren"' + rangeAttrs(call.open, call.open + 1) + '>(</span>' + renderRange(call.argStart, call.argEnd) + '<span class="paren"' + rangeAttrs(call.close, call.close + 1) + '>)</span>';
            }
            if (/^log\d+(?:\.\d+)?$/i.test(call.name)) {
                var baseStart = call.open - call.name.length + 3;
                return '<span class="fn"' + rangeAttrs(call.open - call.name.length, call.open) + '>log<sub class="log-base"' + rangeAttrs(baseStart, call.open) + '>' + renderRange(baseStart, call.open) + '</sub></span><span class="paren"' + rangeAttrs(call.open, call.open + 1) + '>(</span>' + renderRange(call.argStart, call.argEnd) + '<span class="paren"' + rangeAttrs(call.close, call.close + 1) + '>)</span>';
            }
            return '<span class="fn"' + rangeAttrs(call.open - call.name.length, call.open) + '>' + escapeHTML(call.name) + '</span><span class="paren"' + rangeAttrs(call.open, call.open + 1) + '>(</span>' + renderRange(call.argStart, call.argEnd) + '<span class="paren"' + rangeAttrs(call.close, call.close + 1) + '>)</span>';
        }
        function renderRange(start, end) {
            var rr = trimRange(text, start, end);
            start = rr.start; end = rr.end;
            if (start >= end) return emptySlot(start);

            var rel = findRelation(text, start, end);
            if (rel) return renderRange(start, rel.index) + renderOperator(rel.index, rel.length, rel.op) + renderRange(rel.index + rel.length, end);

            var semi = findTopLevel(text, start, end, ";", false);
            if (semi >= 0) return renderRange(start, semi) + renderOperator(semi, 1, ";") + renderRange(semi + 1, end);

            var add = findTopLevel(text, start, end, "+-", true);
            if (add > start) return renderRange(start, add) + renderOperator(add, 1, text.charAt(add) === "-" ? "−" : "+") + renderRange(add + 1, end);

            var div = findTopLevel(text, start, end, "/", false);
            if (div > start) {
                var nRange = stripOuter(text, start, div);
                var dRange = stripOuter(text, div + 1, end);
                return '<span class="frac"' + rangeAttrs(start, end) + '><span class="num"' + rangeAttrs(start, div) + '>' + renderRange(nRange.start, nRange.end) + '</span><span class="den"' + rangeAttrs(div + 1, end) + '>' + renderRange(dRange.start, dRange.end) + '</span></span>';
            }

            var mul = findTopLevel(text, start, end, "*", false);
            if (mul > start) return renderRange(start, mul) + renderOperator(mul, 1, "·") + renderRange(mul + 1, end);

            var pow = findTopLevel(text, start, end, "^", false);
            if (pow > start) {
                var expRange = stripOuter(text, pow + 1, end);
                return '<span class="power"' + rangeAttrs(start, end) + '><span class="power-base"' + rangeAttrs(start, pow) + '>' + renderRange(start, pow) + '</span><sup class="power-exp"' + rangeAttrs(pow + 1, end) + '>' + renderRange(expRange.start, expRange.end) + '</sup></span>';
            }

            var outer = stripOuter(text, start, end);
            if ((outer.start !== start || outer.end !== end) && start < end && text.charAt(start) === "(" && text.charAt(end - 1) === ")") {
                return renderDelimited(start, end);
            }
            if (text.charAt(start) === "|" && text.charAt(end - 1) === "|") {
                return '<span class="absbar"' + rangeAttrs(start, start + 1) + '>|</span>' + renderRange(start + 1, end - 1) + '<span class="absbar"' + rangeAttrs(end - 1, end) + '>|</span>';
            }
            var call = findFunctionCall(text, start, end);
            if (call) return renderFunction(call);
            return renderRaw(start, end);
        }
        var html = renderRange(0, text.length);
        if (!caretRendered) html += boundary(text.length);
        return '<span class="math-render editor-render">' + html + '</span>';
    }

    function createMathEditor(container, options) {
        options = options || {};
        var host = typeof container === "string" ? $(container) : container;
        if (!host) return null;
        var hiddenInput = typeof options.input === "string" ? $(options.input) : options.input;
        var value = safeText(options.value || (hiddenInput ? hiddenInput.value : ""));
        var caret = value.length;
        var onChange = typeof options.onChange === "function" ? options.onChange : function () {};
        var onEnter = typeof options.onEnter === "function" ? options.onEnter : function () {};

        host.className = (host.className ? host.className + " " : "") + "math-editor";
        host.setAttribute("tabindex", "0");
        host.setAttribute("role", "textbox");
        host.setAttribute("aria-label", options.label || "Mathematical input");
        host.setAttribute("aria-multiline", "false");

        function sync() {
            if (hiddenInput) hiddenInput.value = value;
            host.setAttribute("data-empty", value ? "false" : "true");
            host.setAttribute("data-value", value);
        }
        function render() {
            sync();
            if (!value) {
                host.innerHTML = '<span class="math-editor-placeholder">' + escapeHTML(options.placeholder || "Enter a math expression or equation") + '</span><span class="editor-caret" aria-hidden="true"></span>';
                return;
            }
            host.innerHTML = createEditableRenderer(value, caret);
        }
        function notify() {
            sync();
            onChange(value);
        }
        function setValue(next, nextCaret) {
            value = safeText(next);
            caret = clamp(typeof nextCaret === "number" ? nextCaret : value.length, 0, value.length);
            render();
            notify();
        }
        function insertText(text, cursorOffset) {
            text = safeText(text);
            var before = value.slice(0, caret), after = value.slice(caret);
            value = before + text + after;
            caret = clamp(before.length + (typeof cursorOffset === "number" ? cursorOffset : text.length), 0, value.length);
            render();
            notify();
            host.focus();
        }
        function deleteBack() {
            if (caret <= 0) return;
            value = value.slice(0, caret - 1) + value.slice(caret);
            caret -= 1;
            render(); notify();
        }
        function deleteForward() {
            if (caret >= value.length) return;
            value = value.slice(0, caret) + value.slice(caret + 1);
            render(); notify();
        }
        function move(delta) {
            caret = clamp(caret + delta, 0, value.length);
            render();
        }
        function caretFromElement(node, clientX) {
            var current = node;
            while (current && current !== host) {
                if (current.getAttribute && (current.hasAttribute("data-pos") || current.hasAttribute("data-start"))) {
                    var start = Number(current.getAttribute("data-pos") || current.getAttribute("data-start") || 0);
                    var end = Number(current.getAttribute("data-end") || (start + 1));
                    var rect = current.getBoundingClientRect();
                    if (!rect || !isFinite(rect.left) || rect.width <= 0) return start;
                    var ratio = (clientX - rect.left) / rect.width;
                    if (end <= start) return start;
                    return ratio < 0.5 ? start : end;
                }
                current = current.parentNode;
            }
            var box = host.getBoundingClientRect();
            if (!value || !box.width) return value.length;
            return clamp(Math.round(((clientX - box.left) / box.width) * value.length), 0, value.length);
        }
        host.addEventListener("keydown", function (event) {
            if (event.key === "Enter") { event.preventDefault(); onEnter(value); return; }
            if (event.key === "Backspace") { event.preventDefault(); deleteBack(); return; }
            if (event.key === "Delete") { event.preventDefault(); deleteForward(); return; }
            if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); return; }
            if (event.key === "ArrowRight") { event.preventDefault(); move(1); return; }
            if (event.key === "Home") { event.preventDefault(); caret = 0; render(); return; }
            if (event.key === "End") { event.preventDefault(); caret = value.length; render(); return; }
            if (event.ctrlKey || event.metaKey || event.altKey) return;
            if (event.key && event.key.length === 1) {
                event.preventDefault();
                insertText(event.key);
            }
        });
        host.addEventListener("paste", function (event) {
            event.preventDefault();
            var text = (event.clipboardData || window.clipboardData).getData("text") || "";
            insertText(text);
        });
        host.addEventListener("pointerdown", function (event) {
            event.preventDefault();
            caret = caretFromElement(event.target, event.clientX);
            render();
            host.focus();
        });
        host.addEventListener("focus", function () { host.classList.add("focused"); render(); });
        host.addEventListener("blur", function () { host.classList.remove("focused"); render(); });

        render();
        notify();
        return {
            focus:function () { host.focus(); },
            getValue:function () { return value; },
            setValue:setValue,
            insertText:insertText,
            moveCaret:function (direction) { move(direction === "left" ? -1 : 1); },
            getCaret:function () { return caret; },
            setCaret:function (pos) { caret = clamp(pos, 0, value.length); render(); },
            element:host
        };
    }

    NS.createMathEditor = createMathEditor;
})(window.AlgebraTrace);
