/* AlgebraTrace JS: small strategy planner/scorer façade. */
window.AlgebraTrace = window.AlgebraTrace || {};
(function (NS) {
    "use strict";

    function planStrategies(input, action, taskType) {
        var list = [];
        if (action === "simplify" && taskType === "rational_expression") {
            list.push({ id: "rational_expression_factor_cancel", score: 100, reason: "rational expression can be factored and reduced" });
        }
        if (action === "solve" && taskType === "quadratic_equation") {
            list.push({ id: "quadratic_factorization", score: 100, reason: "integer roots detected" });
            list.push({ id: "quadratic_formula", score: 70, reason: "general fallback" });
        }
        if (action === "differentiate") {
            list.push({ id: "derivative_rule_based", score: 90, reason: "apply local derivative rules" });
            list.push({ id: "simplify_then_differentiate", score: 80, reason: "simplify expression before differentiating" });
        }
        if (action === "integrate") {
            list.push({ id: "power_rule_integration", score: 80, reason: "sum/power integral pattern" });
        }
        if (taskType === "logarithmic_expression" || taskType === "logarithmic_relation" || taskType === "logarithmic_equation" || taskType === "logarithmic_inequality") {
            if (action === "simplify") list.push({ id: "logarithm_simplification", score: 100, reason: "native logarithm identities and numeric simplification" });
            if (action === "find_domain") list.push({ id: "logarithm_domain", score: 95, reason: "logarithm arguments must be positive" });
            if (action === "expand_logarithm") list.push({ id: "logarithm_expansion", score: 95, reason: "apply product quotient and power rules" });
            if (action === "combine_logarithms") list.push({ id: "logarithm_combination", score: 95, reason: "combine same-base logarithms" });
            if (action === "solve") list.push({ id: "logarithmic_equation", score: 100, reason: "domain, exponential conversion, and domain check" });
        }
        if (!list.length) list.push({ id: action + "_rule_strategy", score: 50, reason: "selected by action and task type" });
        return list;
    }

    NS.planStrategies = planStrategies;
})(window.AlgebraTrace);
