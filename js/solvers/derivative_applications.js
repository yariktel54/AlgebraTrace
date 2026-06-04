/* AlgebraTrace JS native solver module: derivative_applications. */
window.AlgebraTrace = window.AlgebraTrace || {};
(function (NS) {
    "use strict";
    var C = NS.nativeCore;
    if (!C) throw new Error("AlgebraTrace native core must be loaded before solver modules.");
    NS.nativeSolvers = NS.nativeSolvers || {};
    var EPS = C.EPS;
    var isZero = C.isZero, isInt = C.isInt, round = C.round, gcd = C.gcd, lcm = C.lcm;
    var normalizeMath = C.normalizeMath, displayNumber = C.displayNumber, frac = C.frac, wrapNegative = C.wrapNegative;
    var makeStep = C.makeStep, unique = C.unique, containsRule = C.containsRule;
    var parseExpr = C.parseExpr, astEqual = C.astEqual, astNumber = C.astNumber, isNum = C.isNum, isVar = C.isVar;
    var node = C.node, numNode = C.numNode, varNode = C.varNode, bin = C.bin, unary = C.unary, func = C.func;
    var simplifyAst = C.simplifyAst, renderAst = C.renderAst, evalAst = C.evalAst;
    var polyClean = C.polyClean, polyConst = C.polyConst, polyVar = C.polyVar, polyDegree = C.polyDegree, polyCoeff = C.polyCoeff;
    var polyAdd = C.polyAdd, polyScale = C.polyScale, polyMul = C.polyMul, polyPow = C.polyPow, polyEval = C.polyEval;
    var polyDerivative = C.polyDerivative, polyIntegral = C.polyIntegral, polyFromAst = C.polyFromAst, polyToString = C.polyToString, parsePoly = C.parsePoly;
    var rationalExpression = C.rationalExpression, factorPolynomial = C.factorPolynomial, rootsOfPolynomial = C.rootsOfPolynomial;
    var quadraticRootObjects = C.quadraticRootObjects, polynomialLongDivide = C.polynomialLongDivide;
    var splitTopLevelRelation = C.splitTopLevelRelation, splitFractionTop = C.splitFractionTop, restrictionText = C.restrictionText, appendRestriction = C.appendRestriction;
    var cancelCommonFactors = C.cancelCommonFactors, factorsToString = C.factorsToString, linearFactorText = C.linearFactorText;
    var simplifySqrtInt = C.simplifySqrtInt, termOverDen = C.termOverDen;
    var safeArithmetic = C.safeArithmetic, containsFactorRoot = C.containsFactorRoot, repeatedFactorsToString = C.repeatedFactorsToString, evalSafeNumber = C.evalSafeNumber, coefFromString = C.coefFromString;
    var stepsFromRules = C.stepsFromRules, nativePartial = C.nativePartial;

    function solveDerivativeApplication(input, action, options) {
        var p = parsePoly(input); if (!p) return null;
        var dp = polyDerivative(p), ddp = polyDerivative(dp), ans = null, strategy = null, rules = [];
        if (action === "find_second_derivative") { ans = polyToString(ddp); strategy = "second_derivative_by_differentiating_twice"; rules = ["derivative_power_rule", "differentiate_again"]; }
        else if (action === "find_critical_points") { var roots = rootsOfPolynomial(dp); ans = roots.length ? "x = " + roots.map(frac).join(", x = ") : "none"; strategy = "critical_points_from_first_derivative"; rules = ["derivative_power_rule", "set_derivative_equal_zero", "solve_polynomial_equation"]; }
        else if (action === "find_extrema") {
            var cr = rootsOfPolynomial(dp); var vals = [];
            for (var i = 0; i < cr.length; i += 1) vals.push("(" + frac(cr[i]) + ", " + frac(polyEval(p, cr[i])) + ")");
            ans = vals.length ? vals.join("; ") : "none"; strategy = "extrema_from_critical_points"; rules = ["critical_points", "second_derivative_test", "evaluate_function_at_critical_points"];
        } else if (action === "find_monotonicity") { ans = "use sign chart of f'(x) = " + polyToString(dp); strategy = "monotonicity_from_first_derivative_sign_chart"; rules = ["derivative_power_rule", "sign_chart"]; }
        else if (action === "find_tangent_line") {
            var at = options && options.at !== undefined ? Number(options.at) : NaN; if (isNaN(at)) return null;
            var slope = polyEval(dp, at), y = polyEval(p, at); ans = "y = " + frac(slope) + "*(x - " + frac(at) + ") + " + frac(y); strategy = "tangent_line_from_derivative"; rules = ["evaluate_derivative_at_point", "point_slope_form"];
        } else if (action === "find_normal_line") {
            var atn = options && options.at !== undefined ? Number(options.at) : NaN; if (isNaN(atn)) return null;
            var sl = polyEval(dp, atn), yn = polyEval(p, atn); ans = "y = " + frac(-1 / sl) + "*(x - " + frac(atn) + ") + " + frac(yn); strategy = "normal_line_from_negative_reciprocal_slope"; rules = ["evaluate_derivative_at_point", "negative_reciprocal_slope", "point_slope_form"];
        } else if (action === "find_concavity") { ans = "use sign chart of f''(x) = " + polyToString(ddp); strategy = "concavity_from_second_derivative"; rules = ["second_derivative", "sign_chart"]; }
        else if (action === "find_inflection_points") { var inf = rootsOfPolynomial(ddp); ans = inf.length ? "x = " + inf.map(frac).join(", x = ") : "none"; strategy = "inflection_points_from_second_derivative"; rules = ["second_derivative", "set_second_derivative_equal_zero", "check_concavity_change"]; }
        else if (action === "analyze_function") { ans = "f'(x) = " + polyToString(dp) + "; f''(x) = " + polyToString(ddp); strategy = "combined_derivative_function_analysis"; rules = ["first_derivative", "second_derivative", "critical_points", "concavity"]; }
        if (!ans) return null;
        return nativePartial(input, action, action, strategy, ans, stepsFromRules(input, ans, rules));
    }

    NS.nativeSolvers.derivativeApplications = { solveDerivativeApplication: solveDerivativeApplication };
})(window.AlgebraTrace);
