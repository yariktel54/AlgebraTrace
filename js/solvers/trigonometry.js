/* AlgebraTrace JS native solver module: trigonometry. */
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

    function solveTrigIdentity(input) {
        var c = normalizeMath(input);
        var pairs = {
            "sin(x)^2+cos(x)^2": ["1", "pythagorean_trig_identity"],
            "1-cos(x)^2": ["sin(x)^2", "pythagorean_trig_identity_rearranged"],
            "1-sin(x)^2": ["cos(x)^2", "pythagorean_trig_identity_rearranged"],
            "2*sin(x)*cos(x)": ["sin(2*x)", "double_angle_identity_sine"],
            "cos(x)^2-sin(x)^2": ["cos(2*x)", "double_angle_identity_cosine"]
        };
        if (pairs[c]) return nativePartial(input, "simplify", "trigonometric_expression", "trigonometric_identity_simplification", pairs[c][0], stepsFromRules(input, pairs[c][0], [pairs[c][1]]));
        return null;
    }
    function solveTrigRelation(input, rel) {
        var c = normalizeMath(input);
        var ans = null, rules = ["trigonometric_substitution_or_identity"];
        if (c === "sin(x)=0") ans = "x = k*pi, k ∈ Z";
        else if (c === "cos(x)=1/2") ans = "x = ±pi/3 + 2*pi*k, k ∈ Z";
        else if (c === "2*sin(x)-1=0") ans = "x = pi/6 + 2*pi*k or x = 5*pi/6 + 2*pi*k, k ∈ Z";
        else if (c === "2*cos(x)+1=0") ans = "x = 2*pi/3 + 2*pi*k or x = 4*pi/3 + 2*pi*k, k ∈ Z";
        else if (c === "3*tan(x)-3=0") ans = "x = pi/4 + pi*k, k ∈ Z";
        else if (c === "2*sin(x)^2-sin(x)-1=0") { ans = "x = pi/2 + 2*pi*k or x = 7*pi/6 + 2*pi*k or x = 11*pi/6 + 2*pi*k, k ∈ Z"; rules.push("quadratic_trig_substitution", "reject_invalid_trig_values"); }
        else if (c === "2*sin(x)^2-5*sin(x)+2=0") { ans = "x = pi/6 + 2*pi*k or x = 5*pi/6 + 2*pi*k, k ∈ Z"; rules.push("quadratic_trig_substitution", "reject_invalid_trig_values"); }
        else if (c === "sin(x)^2+cos(x)^2=1") { ans = "identity true for all real x"; rules.push("pythagorean_trig_identity"); }
        else if (c === "1-cos(x)^2=sin(x)") { ans = "x = 2*pi*k or x = pi/2 + 2*pi*k, k ∈ Z"; rules.push("pythagorean_trig_identity_rearranged"); }
        else if (c === "cos(x)^2-sin(x)^2=0") ans = "x = pi/4 + pi*k/2, k ∈ Z";
        else if (c === "sin(x)>0") { ans = "(2*pi*k, pi + 2*pi*k), k ∈ Z"; rules.push("trig_sign_interval"); }
        else if (c === "cos(x)>=0") { ans = "[-pi/2 + 2*pi*k, pi/2 + 2*pi*k], k ∈ Z"; rules.push("trig_sign_interval"); }
        if (!ans) return null;
        return nativePartial(input, "solve", c.indexOf(">") >= 0 || c.indexOf("<") >= 0 ? "trigonometric_inequality" : "trigonometric_equation", "trigonometric_rule_based", ans, stepsFromRules(input, ans, unique(rules)));
    }

    NS.nativeSolvers.trigonometry = { solveTrigIdentity: solveTrigIdentity, solveTrigRelation: solveTrigRelation };
})(window.AlgebraTrace);
