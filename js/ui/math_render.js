/* AlgebraTrace UI: lightweight offline mathematical renderer.
 * No CDN, no external fonts, safe HTML string output.
 */
window.AlgebraTrace = window.AlgebraTrace || {};
(function (NS) {
    "use strict";

    function escapeHTML(text) {
        if (NS.escapeHTML) return NS.escapeHTML(text);
        return String(text === undefined || text === null ? "" : text)
            .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }

    function trim(text) { return String(text === undefined || text === null ? "" : text).trim(); }

    function normalizeSymbols(text) {
        return String(text === undefined || text === null ? "" : text)
            .replace(/\bpi\b/gi, "π")
            .replace(/\binfinity\b/gi, "∞")
            .replace(/->/g, "→")
            .replace(/<=/g, "≤")
            .replace(/>=/g, "≥");
    }

    function stripOuterParens(s) {
        s = trim(s);
        var changed = true;
        while (changed && s.charAt(0) === "(" && s.charAt(s.length - 1) === ")") {
            changed = false;
            var depth = 0, ok = true;
            for (var i = 0; i < s.length; i += 1) {
                var ch = s.charAt(i);
                if (ch === "(") depth += 1;
                else if (ch === ")") depth -= 1;
                if (depth === 0 && i < s.length - 1) { ok = false; break; }
            }
            if (ok) { s = trim(s.slice(1, -1)); changed = true; }
        }
        return s;
    }

    function matchingParenIndex(s, openIndex) {
        var depth = 0;
        for (var i = openIndex; i < s.length; i += 1) {
            var ch = s.charAt(i);
            if (ch === "(") depth += 1;
            else if (ch === ")") {
                depth -= 1;
                if (depth === 0) return i;
            }
        }
        return -1;
    }

    function splitTopLevelWords(s) {
        var parts = [], start = 0, depth = 0, abs = false;
        for (var i = 0; i < s.length; i += 1) {
            var ch = s.charAt(i);
            if (ch === "(") depth += 1;
            else if (ch === ")") depth -= 1;
            else if (ch === "|") abs = !abs;
            if (depth === 0 && !abs) {
                var tail = s.slice(i);
                var match = tail.match(/^\s+(or|and|where)\s+/i);
                if (match) {
                    parts.push({ type:"math", text:s.slice(start, i) });
                    parts.push({ type:"word", text:match[1] });
                    i += match[0].length - 1;
                    start = i + 1;
                }
            }
        }
        if (start < s.length) parts.push({ type:"math", text:s.slice(start) });
        return parts.length > 1 ? parts : null;
    }

    function findTopLevelRelation(s) {
        var depth = 0, abs = false;
        for (var i = 0; i < s.length; i += 1) {
            var ch = s.charAt(i), two = s.slice(i, i + 2);
            if (ch === "(") depth += 1;
            else if (ch === ")") depth -= 1;
            else if (ch === "|") abs = !abs;
            if (depth === 0 && !abs) {
                if (two === "≤" || two === "≥") return { index:i, op:two, length:1 };
                if (two === "<=" || two === ">=") return { index:i, op:two === "<=" ? "≤" : "≥", length:2 };
                if (ch === "=" || ch === "<" || ch === ">" || ch === "≤" || ch === "≥") return { index:i, op:ch, length:1 };
            }
        }
        return null;
    }

    function findTopLevelChar(s, chars, fromRight) {
        var depth = 0, abs = false, found = -1;
        var start = fromRight ? s.length - 1 : 0;
        var end = fromRight ? -1 : s.length;
        var step = fromRight ? -1 : 1;
        for (var i = start; i !== end; i += step) {
            var ch = s.charAt(i);
            if (fromRight) {
                if (ch === ")") depth += 1;
                else if (ch === "(") depth -= 1;
            } else {
                if (ch === "(") depth += 1;
                else if (ch === ")") depth -= 1;
            }
            if (ch === "|") abs = !abs;
            if (depth === 0 && !abs && chars.indexOf(ch) >= 0) {
                if ((ch === "+" || ch === "-") && i === 0) continue;
                found = i;
                break;
            }
        }
        return found;
    }

    function splitTopLevelList(s, delimiter) {
        var out = [], start = 0, depth = 0, abs = false;
        for (var i = 0; i < s.length; i += 1) {
            var ch = s.charAt(i);
            if (ch === "(") depth += 1;
            else if (ch === ")") depth -= 1;
            else if (ch === "|") abs = !abs;
            if (depth === 0 && !abs && ch === delimiter) {
                out.push(s.slice(start, i));
                start = i + 1;
            }
        }
        out.push(s.slice(start));
        return out;
    }

    function renderAtom(s) {
        s = normalizeSymbols(trim(s));
        if (!s) return "";
        return escapeHTML(s)
            .replace(/\*/g, "·")
            .replace(/\bpi\b/gi, "π")
            .replace(/\binfinity\b/gi, "∞");
    }

    function renderDelimitedParen(content) {
        return '<span class="paren">(</span>' + renderExpression(content) + '<span class="paren">)</span>';
    }

    function renderFunction(name, argText) {
        name = String(name || "");
        var lower = name.toLowerCase();
        if (lower === "sqrt") {
            return '<span class="sqrt"><span class="radical">√</span><span class="radicand">' + renderExpression(argText) + '</span></span>';
        }
        if (lower === "abs") {
            return '<span class="absbar">|</span>' + renderExpression(argText) + '<span class="absbar">|</span>';
        }
        if (lower === "log") {
            var args = splitTopLevelList(argText, ",");
            if (args.length === 2) return '<span class="fn">log<sub>' + renderExpression(args[1]) + '</sub></span>' + renderDelimitedParen(args[0]);
            return '<span class="fn">log</span>' + renderDelimitedParen(argText);
        }
        if (/^log_/.test(lower)) {
            var base = name.slice(4);
            return '<span class="fn">log<sub>' + renderExpression(base) + '</sub></span>' + renderDelimitedParen(argText);
        }
        if (/^log\d+(?:\.\d+)?$/i.test(name)) {
            return '<span class="fn">log<sub>' + escapeHTML(name.replace(/^log/i, "")) + '</sub></span>' + renderDelimitedParen(argText);
        }
        return '<span class="fn">' + escapeHTML(name) + '</span>' + renderDelimitedParen(argText);
    }

    function renderLimitCall(s) {
        var m = s.match(/^limit\s*\((.*)\)$/i);
        if (!m) return null;
        var args = splitTopLevelList(m[1], ",");
        if (args.length >= 3) {
            return '<span class="lim"><span class="lim-main">lim</span><span class="lim-sub">' + escapeHTML(trim(args[1])) + '→' + escapeHTML(trim(args[2])) + '</span></span>' + renderExpression(args[0]);
        }
        return null;
    }

    function renderDerivativeRequest(s) {
        var m = s.match(/^d\s*\/\s*d([a-z])\s+(.+)$/i);
        if (!m) return null;
        return '<span class="frac"><span class="num">d</span><span class="den">d' + escapeHTML(m[1]) + '</span></span>' + renderExpression(m[2]);
    }

    function renderIntegralRequest(s) {
        var m = s.match(/^integrate\s+(.+)$/i);
        if (!m) return null;
        return '<span class="op">∫</span>' + renderExpression(m[1]) + '<span class="op">dx</span>';
    }

    function renderExpression(input) {
        var s = normalizeSymbols(trim(input));
        if (!s) return "";

        var wordParts = splitTopLevelWords(s);
        if (wordParts) {
            return wordParts.map(function (part) {
                if (part.type === "word") return '<span class="mtext">' + escapeHTML(part.text) + '</span>';
                return renderExpression(part.text);
            }).join(" ");
        }

        var pieces = splitTopLevelList(s, ";");
        if (pieces.length > 1) {
            return pieces.map(function (p) { return renderExpression(p); }).join('<span class="op">;</span> ');
        }

        var rel = findTopLevelRelation(s);
        if (rel) {
            return renderExpression(s.slice(0, rel.index)) + '<span class="op">' + escapeHTML(rel.op) + '</span>' + renderExpression(s.slice(rel.index + rel.length));
        }

        var deriv = renderDerivativeRequest(s);
        if (deriv) return deriv;
        var integ = renderIntegralRequest(s);
        if (integ) return integ;
        var lim = renderLimitCall(s);
        if (lim) return lim;

        s = stripOuterParens(s);

        if (s.charAt(0) === "|" && s.charAt(s.length - 1) === "|") {
            return '<span class="absbar">|</span>' + renderExpression(s.slice(1, -1)) + '<span class="absbar">|</span>';
        }

        var addIndex = findTopLevelChar(s, "+-", true);
        if (addIndex > 0) {
            var opAdd = s.charAt(addIndex);
            return renderExpression(s.slice(0, addIndex)) + '<span class="op">' + escapeHTML(opAdd) + '</span>' + renderExpression(s.slice(addIndex + 1));
        }

        var divIndex = findTopLevelChar(s, "/", false);
        if (divIndex > 0) {
            return '<span class="frac"><span class="num">' + renderExpression(s.slice(0, divIndex)) + '</span><span class="den">' + renderExpression(s.slice(divIndex + 1)) + '</span></span>';
        }

        var mulIndex = findTopLevelChar(s, "*", false);
        if (mulIndex > 0) {
            return renderExpression(s.slice(0, mulIndex)) + '<span class="op">·</span>' + renderExpression(s.slice(mulIndex + 1));
        }

        var powIndex = findTopLevelChar(s, "^", false);
        if (powIndex > 0) {
            var base = trim(s.slice(0, powIndex));
            var exponent = s.slice(powIndex + 1);
            exponent = stripOuterParens(exponent);
            var baseHTML = (base.charAt(0) === "(" && base.charAt(base.length - 1) === ")") ? renderDelimitedParen(base.slice(1, -1)) : renderExpression(base);
            return '<span class="power"><span class="power-base">' + baseHTML + '</span><sup class="power-exp">' + renderExpression(exponent) + '</sup></span>';
        }

        var fn = s.match(/^([A-Za-z]+(?:_[0-9A-Za-z.\/]+)?|log\d+(?:\.\d+)?)\s*\(/);
        if (fn) {
            var close = matchingParenIndex(s, fn[0].lastIndexOf("("));
            if (close === s.length - 1) return renderFunction(fn[1], s.slice(fn[0].length, -1));
        }

        return renderAtom(s);
    }

    function renderMath(text) {
        try {
            var content = renderExpression(text);
            return '<span class="math-render">' + (content || escapeHTML(text)) + '</span>';
        } catch (e) {
            return '<span class="math-render">' + escapeHTML(text) + '</span>';
        }
    }

    function renderStepMath(text) { return renderMath(text); }

    function mathToLatex(text) {
        var s = normalizeSymbols(trim(text));
        s = s.replace(/\*/g, "\\cdot ").replace(/π/g, "\\pi").replace(/∞/g, "\\infty");
        s = s.replace(/sqrt\(([^()]*)\)/g, "\\sqrt{$1}");
        s = s.replace(/log_([0-9A-Za-z.\/]+)\(([^()]*)\)/g, "\\log_{$1}($2)");
        s = s.replace(/log\(([^,()]+),([^()]*)\)/g, "\\log_{$2}($1)");
        return s;
    }

    NS.mathToLatex = mathToLatex;
    NS.renderMath = renderMath;
    NS.renderStepMath = renderStepMath;
})(window.AlgebraTrace);
