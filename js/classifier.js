/* AlgebraTrace JS: task classifier. */
window.AlgebraTrace = window.AlgebraTrace || {};
(function (NS) {
    "use strict";

    function containsAny(text, items) {
        for (var i = 0; i < items.length; i += 1) {
            if (text.indexOf(items[i]) >= 0) return true;
        }
        return false;
    }

    function classify(input) {
        var text = String(input || "").trim();
        var compact = text.replace(/\s+/g, "");
        var lower = text.toLowerCase();
        if (text.indexOf(";") >= 0) return containsAny(text, [">", "<", ">=", "<="]) ? "system_of_inequalities" : "system";
        if (lower.indexOf("d/dx") === 0 || lower.indexOf("diff(") === 0) return "derivative_request";
        if (lower.indexOf("integrate") === 0 || lower.indexOf("integral(") === 0) return "integral_request";
        if (lower.indexOf("limit(") === 0 || lower.indexOf("lim ") === 0) return "limit_request";
        if (compact.indexOf("|") >= 0) return compact.indexOf("=") >= 0 ? "absolute_value_equation" : "absolute_value_inequality";
        if (containsAny(compact, ["sin(", "cos(", "tan("])) return containsAny(compact, ["=", ">", "<"]) ? "trigonometric_relation" : "trigonometric_expression";
        if (containsAny(lower, ["log", "ln("])) return containsAny(compact, ["=", ">", "<"]) ? "logarithmic_relation" : "logarithmic_expression";
        if (containsAny(lower, ["sqrt("])) return compact.indexOf("=") >= 0 ? "radical_equation" : "radical_expression";
        if (compact.indexOf("^") >= 0 && compact.indexOf("=") >= 0 && /\d\^|\)\^/.test(compact)) return "exponential_equation";
        if (compact.indexOf("/") >= 0 && containsAny(compact, ["=", ">", "<"])) return containsAny(compact, [">", "<"]) ? "rational_inequality" : "rational_equation";
        if (compact.indexOf("/") >= 0) return "rational_expression";
        if (containsAny(compact, ["<=", ">=", "<", ">"])) return compact.indexOf("x^2") >= 0 ? "quadratic_inequality" : "linear_inequality";
        if (compact.indexOf("=") >= 0) return compact.indexOf("x^2") >= 0 ? "quadratic_equation" : "linear_equation";
        if (/^[0-9+\-*/^().\s]+$/.test(text)) return "arithmetic_expression";
        return "algebraic_expression";
    }

    function problemProfile(input) {
        var task = classify(input);
        var text = String(input || "");
        return {
            input: text,
            task_type: task,
            problem_kind: task.indexOf("equation") >= 0 || task.indexOf("inequality") >= 0 || task === "system" ? "relation" : "expression",
            main_variable: "x",
            is_rational: text.indexOf("/") >= 0,
            has_trigonometric_functions: containsAny(text, ["sin(", "cos(", "tan("]),
            has_exponential_functions: text.indexOf("^") >= 0,
            has_logarithms: containsAny(text.toLowerCase(), ["log", "ln("]),
            has_radicals: text.toLowerCase().indexOf("sqrt(") >= 0,
            has_derivative_request: task === "derivative_request",
            has_integral_request: task === "integral_request",
            domain: "real"
        };
    }

    NS.classify = classify;
    NS.problemProfile = problemProfile;
})(window.AlgebraTrace);
