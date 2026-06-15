/* AlgebraTrace JS: context-aware action registry. */
window.AlgebraTrace = window.AlgebraTrace || {};
(function (NS) {
    "use strict";

    function unique(items) {
        var out = [];
        for (var i = 0; i < items.length; i += 1) {
            if (items[i] && out.indexOf(items[i]) < 0) out.push(items[i]);
        }
        return out;
    }

    function trim(text) { return String(text || "").trim(); }
    function compact(text) { return trim(text).replace(/\u2212/g, "-").replace(/\s+/g, ""); }
    function lower(text) { return trim(text).toLowerCase(); }
    function hasSystemSeparator(text) { return trim(text).indexOf(";") >= 0; }
    function isDerivativeRequest(text) { var s = lower(text); return /^d\s*\/\s*dx/.test(s) || /^diff\s*\(/.test(s); }
    function isIntegralRequest(text) { var s = lower(text); return /^integrate\b/.test(s) || /^integral\s*\(/.test(s); }
    function isLimitRequest(text) { var s = lower(text); return /^limit\s*\(/.test(s) || /^lim\b/.test(s); }
    function hasRelation(text) { return /[=<>≤≥]/.test(trim(text)); }
    function hasInequality(text) { return /<=|>=|<|>|≤|≥/.test(trim(text)); }
    function hasRationalForm(text) { return compact(text).indexOf("/") >= 0; }
    function hasTrig(text) { return /\b(sin|cos|tan)\s*\(/i.test(text); }
    function hasLog(text) { return /\b(?:log\d*|log_|log\(|ln\()/i.test(text); }
    function hasParameter(text) {
        var s = trim(text).replace(/sin|cos|tan|cot|ctg|sec|csc|log|ln|sqrt|exp|limit|integrate|infinity|pi|dx|d\//ig, "");
        var ids = s.match(/[A-Za-z]+/g) || [];
        for (var i = 0; i < ids.length; i += 1) if (ids[i].toLowerCase() !== "x") return true;
        return false;
    }
    function isLikelyPolynomial(text) {
        var s = trim(text);
        if (!s || hasRelation(s) || hasSystemSeparator(s)) return false;
        if (/[a-wyz]/i.test(s.replace(/x/ig, ""))) return false;
        return /^[0-9xX+\-*/^().\s]+$/.test(s);
    }
    function polynomialDegreeHint(text) {
        var s = compact(text).toLowerCase();
        var max = /x/.test(s) ? 1 : 0;
        var matches = s.match(/x\^(\d+)/g) || [];
        for (var i = 0; i < matches.length; i += 1) {
            var n = Number(matches[i].slice(2));
            if (n > max) max = n;
        }
        return max;
    }
    function isLinearPolynomial(text) {
        return isLikelyPolynomial(text) && polynomialDegreeHint(text) <= 1;
    }
    function isGraphable(text) {
        var s = trim(text);
        if (!s || hasSystemSeparator(s)) return false;
        if (isDerivativeRequest(s) || isIntegralRequest(s) || isLimitRequest(s)) return false;
        return /x/i.test(s) || /^y\s*=/.test(s);
    }

    function detectActions(input) {
        var text = trim(input);
        if (!text) return [];
        var actions = [];

        if (hasSystemSeparator(text)) {
            if (hasInequality(text)) actions = ["solve_inequality_system"];
            else actions = ["solve_system", "solve_linear_system"];
            return unique(actions);
        }

        if (isDerivativeRequest(text)) {
            return ["differentiate"];
        }

        if (isIntegralRequest(text)) {
            return ["integrate"];
        }

        if (isLimitRequest(text)) {
            actions = lower(text).indexOf("infinity") >= 0 || lower(text).indexOf("->oo") >= 0 ? ["find_limit_at_infinity"] : ["find_limit"];
            if (isGraphable(text)) actions.push("graph");
            return unique(actions);
        }

        if (hasRelation(text)) {
            if (hasParameter(text)) actions.push("solve_with_parameters", "analyze_parameters");
            actions.push("solve");
            if (isGraphable(text)) actions.push("graph");
            return unique(actions);
        }

        if (hasRationalForm(text)) {
            actions = ["simplify", "find_domain", "differentiate", "find_asymptotes", "find_discontinuities"];
            if (isGraphable(text)) actions.push("graph");
            return unique(actions);
        }

        if (hasTrig(text)) {
            actions = ["simplify", "differentiate"];
            if (isGraphable(text)) actions.push("graph");
            return unique(actions);
        }

        if (hasLog(text)) {
            actions = ["simplify", "find_domain", "expand_logarithm", "combine_logarithms"];
            if (isGraphable(text)) actions.push("graph");
            return unique(actions);
        }

        if (isLikelyPolynomial(text)) {
            actions = ["simplify", "factor", "differentiate", "integrate", "find_critical_points", "find_extrema", "find_monotonicity", "analyze_function"];
            if (isLinearPolynomial(text)) actions.push("find_inverse");
            if (polynomialDegreeHint(text) <= 2) actions.push("find_range");
            if (isGraphable(text)) actions.push("graph");
            return unique(actions);
        }

        actions = ["simplify"];
        if (isGraphable(text)) actions.push("graph");
        return unique(actions);
    }

    function defaultAction(input) {
        var text = trim(input);
        var s = lower(text);
        if (!text) return "simplify";
        if (isDerivativeRequest(text)) return "differentiate";
        if (isIntegralRequest(text)) return "integrate";
        if (isLimitRequest(text)) return s.indexOf("infinity") >= 0 || s.indexOf("->oo") >= 0 ? "find_limit_at_infinity" : "find_limit";
        if (hasSystemSeparator(text)) return hasInequality(text) ? "solve_inequality_system" : "solve_system";
        if (hasRelation(text) && hasParameter(text)) return "solve_with_parameters";
        if (hasRelation(text)) return "solve";
        if (hasLog(text) && /x/i.test(text)) return "find_domain";
        if (hasRationalForm(text)) return "simplify";
        return "simplify";
    }

    NS.detectActions = detectActions;
    NS.defaultAction = defaultAction;
    NS.getDefaultAction = defaultAction;
    window.getDefaultAction = defaultAction;
})(window.AlgebraTrace);
