/* AlgebraTrace JS native solver module: integrals. */
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
    var stepsFromRules = C.stepsFromRules, nativePartial = C.nativePartial, addStepIfMeaningful = C.addStepIfMeaningful;

    function extractIntegralExpression(input) {
        var s = String(input || "").trim();
        var m = s.match(/^\s*integrate\s+(.+)$/i); if (m) return { expr: m[1].trim() };
        m = s.match(/^\s*integral\((.*),\s*x\s*\)\s*$/i); if (m) return { expr: m[1].trim() };
        m = s.match(/^\s*integrate\((.*),\s*x\s*,\s*([^,]+),\s*([^\)]+)\)\s*$/i); if (m) return { expr: m[1].trim(), lower: m[2].trim(), upper: m[3].trim() };
        return { expr: s };
    }
    function polynomialTerms(p) {
        var out = [];
        for (var deg = polyDegree(p); deg >= 0; deg -= 1) {
            var c = polyCoeff(p, deg);
            if (!isZero(c)) out.push({ c: c, deg: deg });
        }
        return out;
    }
    function termText(t) {
        if (t.deg === 0) return frac(t.c);
        var coeff = isZero(t.c - 1) ? "" : (isZero(t.c + 1) ? "-" : frac(t.c) + "*");
        return coeff + (t.deg === 1 ? "x" : "x^" + t.deg);
    }
    function integralTermText(t) {
        if (t.deg === 0) return frac(t.c) + "*x";
        var newCoeff = t.c / (t.deg + 1);
        return (isZero(newCoeff - 1) ? "" : frac(newCoeff) + "*") + "x^" + (t.deg + 1);
    }
    function polynomialIntegralSteps(expr, p, antiderivative, finalAnswer) {
        var steps = [], terms = polynomialTerms(p);
        if (terms.length > 1) {
            addStepIfMeaningful(steps, makeStep("integral_sum_rule", "Split the integral of a sum", "∫(" + expr + ") dx", terms.map(function (t) { return "∫" + termText(t) + " dx"; }).join(" + "), "The integral of a sum is the sum of the integrals.", { step_type: "transform" }));
        }
        var integrated = [];
        for (var i = 0; i < terms.length; i += 1) {
            var t = terms[i];
            if (t.deg === 0) {
                addStepIfMeaningful(steps, makeStep("integral_constant_rule", "Integrate the constant term", "∫" + termText(t) + " dx", integralTermText(t), "The integral of a constant c is c*x.", { step_type: "transform" }));
            } else {
                addStepIfMeaningful(steps, makeStep("integral_power_rule", "Use the power rule for integrals", "∫" + termText(t) + " dx", integralTermText(t), "Increase the exponent by 1 and divide by the new exponent.", { step_type: "transform" }));
            }
            integrated.push(integralTermText(t));
        }
        addStepIfMeaningful(steps, makeStep("integral_add_constant_C", "Add the integration constant", integrated.join(" + "), finalAnswer, "An indefinite integral represents a family of antiderivatives, so + C is added.", { step_type: "transform" }));
        addStepIfMeaningful(steps, makeStep("integral_check_by_differentiation", "Check by differentiating", "d/dx(" + antiderivative + ")", expr, "Differentiating the antiderivative gives the original integrand.", { step_type: "check" }));
        return steps;
    }

    function solveIntegral(input, options) {
        var info = extractIntegralExpression(input); var expr = info.expr;
        var lower = options && options.lower !== undefined && options.lower !== null && options.lower !== "" ? Number(options.lower) : (info.lower !== undefined ? Number(info.lower) : null);
        var upper = options && options.upper !== undefined && options.upper !== null && options.upper !== "" ? Number(options.upper) : (info.upper !== undefined ? Number(info.upper) : null);
        var p = parsePoly(expr);
        if (p) {
            var ip = polyIntegral(p);
            if (lower !== null && upper !== null && !isNaN(lower) && !isNaN(upper)) {
                var val = polyEval(ip, upper) - polyEval(ip, lower);
                var ansD = frac(val);
                var stepsD = polynomialIntegralSteps(expr, p, polyToString(ip), polyToString(ip) + " + C");
                addStepIfMeaningful(stepsD, makeStep("fundamental_theorem_of_calculus", "Apply the fundamental theorem of calculus", "F(" + frac(upper) + ") - F(" + frac(lower) + ")", ansD, "The definite integral is the change in an antiderivative over the interval.", { step_type: "evaluation" }));
                addStepIfMeaningful(stepsD, makeStep("evaluate_bounds", "Evaluate the bounds", "F(" + frac(upper) + ") - F(" + frac(lower) + ")", ansD, "The upper and lower bound values are substituted and subtracted.", { step_type: "evaluation" }));
                return nativePartial(input, "integrate_definite", "integrate_definite", "definite_integral_power_rule", ansD, stepsD);
            }
            var antiderivative = polyToString(ip);
            var ans = antiderivative + " + C";
            return nativePartial(input, "integrate", "integral", "power_rule_integration", ans, polynomialIntegralSteps(expr, p, antiderivative, ans));
        }
        var c = normalizeMath(expr), m, ans2 = null, rules = [];
        if (c === "1/x") { ans2 = "ln|x| + C"; rules = ["integral_one_over_x_rule", "integral_ln_abs_rule"]; }
        else if ((m = c.match(/^sin\(([-+]?\d*)\*?x\)$/))) { var k = coefFromString(m[1], 1); ans2 = "-cos(" + (k === 1 ? "x" : frac(k) + "*x") + ")/" + frac(k) + " + C"; rules = ["integral_sin_linear_argument", "linear_substitution"]; }
        else if ((m = c.match(/^cos\(([-+]?\d*)\*?x\)$/))) { var kc = coefFromString(m[1], 1); ans2 = "sin(" + (kc === 1 ? "x" : frac(kc) + "*x") + ")/" + frac(kc) + " + C"; rules = ["integral_cos_linear_argument", "linear_substitution"]; }
        else if ((m = c.match(/^exp\(([-+]?\d*)\*?x\)$/))) { var ke = coefFromString(m[1], 1); ans2 = "exp(" + (ke === 1 ? "x" : frac(ke) + "*x") + ")/" + frac(ke) + " + C"; rules = ["integral_exp_linear_argument", "linear_substitution"]; }
        else if ((m = c.match(/^([-+]?\d*)\*?x\/\(x\^2([+-]\d+)\)$/))) { var kk = coefFromString(m[1], 1); ans2 = frac(kk / 2) + "*ln(x^2 " + (Number(m[2]) >= 0 ? "+ " + Number(m[2]) : "- " + Math.abs(Number(m[2]))) + ") + C"; rules = ["integral_inner_derivative_substitution", "integral_ln_rule"]; }
        else if (c === "sqrt(x)") { ans2 = "2*x^(3/2)/3 + C"; rules = ["integral_power_rule", "radical_to_rational_exponent"]; }
        if (ans2) return nativePartial(input, "integrate", "integral", rules.indexOf("integral_inner_derivative_substitution") >= 0 ? "inner_derivative_substitution" : "basic_antiderivative_rules", ans2, stepsFromRules(input, ans2, rules.concat(["integral_add_constant_C"])));
        return null;
    }
    function solveArea(input, action, options) {
        if (action !== "find_area_under_curve") return null;
        var p = parsePoly(input), lower = Number(options && options.lower), upper = Number(options && options.upper);
        if (!p || isNaN(lower) || isNaN(upper)) return null;
        var ip = polyIntegral(p); var val = Math.abs(polyEval(ip, upper) - polyEval(ip, lower));
        var ans = frac(val);
        return nativePartial(input, action, "find_area_under_curve", "area_by_definite_integral", ans, stepsFromRules(input, ans, ["set_up_definite_integral", "integral_power_rule", "evaluate_bounds", "absolute_area"]));
    }

    NS.nativeSolvers.integrals = { solveIntegral: solveIntegral, solveArea: solveArea };
})(window.AlgebraTrace);
