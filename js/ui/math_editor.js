/* AlgebraTrace UI: offline LaTeX-first editable math field.
 * The source model is LaTeX. getValue() returns solver-compatible text.
 */
window.AlgebraTrace = window.AlgebraTrace || {};
(function (NS) {
    "use strict";

    function $(id) { return document.getElementById(id); }
    function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }
    function safeText(v) { return String(v === undefined || v === null ? "" : v); }
    function looksLikeLatex(text) { return /\\|\{|\}|\^\{|_\{|\\frac|\\sqrt|\\log|\\sin|\\cos|\\tan/.test(safeText(text)); }
    function normalizeInitialValue(text) {
        text = safeText(text);
        if (!text) return "";
        return looksLikeLatex(text) ? text : (NS.textToLatex ? NS.textToLatex(text) : text);
    }
    function plainValue(latex) { return NS.latexToPlain ? NS.latexToPlain(latex) : latex; }

    function createMathEditor(host, options) {
        options = options || {};
        if (typeof host === "string") host = $(host);
        if (!host) return null;
        var hidden = typeof options.input === "string" ? $(options.input) : options.input;
        var placeholder = options.placeholder || "Enter a LaTeX expression";
        var onChange = typeof options.onChange === "function" ? options.onChange : function () {};
        var onEnter = typeof options.onEnter === "function" ? options.onEnter : function () {};
        var latex = normalizeInitialValue(options.value || (hidden ? hidden.getAttribute("data-latex") || hidden.value : ""));
        var caret = latex.length;

        host.className = (host.className ? host.className + " " : "") + "latex-editor";
        host.setAttribute("tabindex", "0");
        host.setAttribute("role", "textbox");
        host.setAttribute("aria-multiline", "false");
        host.setAttribute("spellcheck", "false");
        host.setAttribute("data-placeholder", placeholder);

        function syncHidden() {
            if (!hidden) return;
            hidden.value = plainValue(latex);
            hidden.setAttribute("data-latex", latex);
        }
        function render() {
            var content = latex ? NS.renderLatexContent(latex, { caret:caret, emptySlot:true }) : '<span class="editor-placeholder">' + (NS.escapeHTML ? NS.escapeHTML(placeholder) : placeholder) + '</span>';
            host.innerHTML = '<span class="editor-render latex-render">' + content + (!latex ? '<span class="editor-caret ghost" aria-hidden="true"></span>' : '') + '</span>';
            syncHidden();
        }
        function notify() { syncHidden(); onChange(plainValue(latex), latex); }
        function setLatex(next, nextCaret, silent) {
            latex = safeText(next);
            caret = clamp(typeof nextCaret === "number" ? nextCaret : latex.length, 0, latex.length);
            render();
            if (!silent) notify();
        }
        function setValue(text, nextCaret) { setLatex(normalizeInitialValue(text), nextCaret, false); }
        function insertText(text, cursorOffset) {
            text = safeText(text);
            var before = latex.slice(0, caret), after = latex.slice(caret);
            latex = before + text + after;
            caret = before.length + (typeof cursorOffset === "number" ? cursorOffset : text.length);
            caret = clamp(caret, 0, latex.length);
            render(); notify(); host.focus();
        }
        function findMatchingOpenBrace(closeIndex) {
            var depth = 0;
            for (var i = closeIndex; i >= 0; i -= 1) {
                var ch = latex.charAt(i);
                if (ch === "}") depth += 1;
                else if (ch === "{") {
                    depth -= 1;
                    if (depth === 0) return i;
                }
            }
            return -1;
        }
        function deleteBack() {
            if (caret <= 0) return;
            // Visual editing rule: when the caret is just after a rendered script
            // like x^{2}, Backspace should edit the visible exponent/base content,
            // not delete the hidden LaTeX closing brace. This keeps the editor
            // Photomath/Desmos-like while preserving LaTeX as the source model.
            if (latex.charAt(caret - 1) === "}") {
                var open = findMatchingOpenBrace(caret - 1);
                if (open > 0 && (latex.charAt(open - 1) === "^" || latex.charAt(open - 1) === "_") && caret - 1 > open + 1) {
                    latex = latex.slice(0, caret - 2) + latex.slice(caret - 1);
                    caret = caret - 2;
                    render(); notify();
                    return;
                }
            }
            latex = latex.slice(0, caret - 1) + latex.slice(caret);
            caret -= 1;
            render(); notify();
        }
        function deleteForward() {
            if (caret >= latex.length) return;
            latex = latex.slice(0, caret) + latex.slice(caret + 1);
            render(); notify();
        }
        function move(delta) { caret = clamp(caret + delta, 0, latex.length); render(); }
        function caretFromElement(node, clientX) {
            var current = node;
            while (current && current !== host) {
                if (current.getAttribute && (current.hasAttribute("data-pos") || current.hasAttribute("data-start"))) {
                    var start = Number(current.getAttribute("data-pos") || current.getAttribute("data-start") || 0);
                    var end = Number(current.getAttribute("data-end") || (start + 1));
                    var rect = current.getBoundingClientRect();
                    if (!rect || !isFinite(rect.left) || rect.width <= 0) return start;
                    var ratio = (clientX - rect.left) / rect.width;
                    return ratio < 0.5 ? start : end;
                }
                current = current.parentNode;
            }
            var box = host.getBoundingClientRect();
            if (!latex || !box.width) return latex.length;
            return clamp(Math.round(((clientX - box.left) / box.width) * latex.length), 0, latex.length);
        }
        function normalizeTypedChar(ch) {
            if (ch === "≤") return "\\le ";
            if (ch === "≥") return "\\ge ";
            if (ch === "π") return "\\pi ";
            if (ch === "∞") return "\\infty ";
            if (ch === "×" || ch === "·") return "\\cdot ";
            if (ch === "÷") return "/";
            return ch;
        }
        host.addEventListener("keydown", function (event) {
            if (event.key === "Enter") { event.preventDefault(); onEnter(plainValue(latex), latex); return; }
            if (event.key === "Backspace") { event.preventDefault(); deleteBack(); return; }
            if (event.key === "Delete") { event.preventDefault(); deleteForward(); return; }
            if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); return; }
            if (event.key === "ArrowRight") { event.preventDefault(); move(1); return; }
            if (event.key === "Home") { event.preventDefault(); caret = 0; render(); return; }
            if (event.key === "End") { event.preventDefault(); caret = latex.length; render(); return; }
            if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "a") {
                // Full selection is not modeled yet; keep browser shortcut from moving focus.
                event.preventDefault(); caret = latex.length; render(); return;
            }
            if (event.ctrlKey || event.metaKey || event.altKey) return;
            if (event.key && event.key.length === 1) {
                event.preventDefault();
                insertText(normalizeTypedChar(event.key));
            }
        });
        host.addEventListener("paste", function (event) {
            event.preventDefault();
            var text = (event.clipboardData || window.clipboardData).getData("text") || "";
            insertText(looksLikeLatex(text) ? text : (NS.textToLatex ? NS.textToLatex(text) : text));
        });
        host.addEventListener("pointerdown", function (event) {
            event.preventDefault();
            caret = caretFromElement(event.target, event.clientX);
            render();
            host.focus();
        });
        host.addEventListener("focus", function () { host.classList.add("focused"); render(); });
        host.addEventListener("blur", function () { host.classList.remove("focused"); render(); });

        render(); notify();
        return {
            focus:function () { host.focus(); },
            getValue:function () { return plainValue(latex); },
            getLatex:function () { return latex; },
            setLatex:setLatex,
            setValue:setValue,
            insertText:insertText,
            moveCaret:function (direction) { move(direction === "left" ? -1 : 1); },
            getCaret:function () { return caret; },
            setCaret:function (pos) { caret = clamp(pos, 0, latex.length); render(); },
            element:host
        };
    }

    NS.createMathEditor = createMathEditor;
    window.getMathEditorLatex = function () { return NS.__activeMathEditor && NS.__activeMathEditor.getLatex ? NS.__activeMathEditor.getLatex() : ""; };
})(window.AlgebraTrace);
