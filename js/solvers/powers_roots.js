/* AlgebraTrace JS native solver module: powers_roots. */
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

    function solveRadicalEquation(input, rel) {
        var c = normalizeMath(input);
        var m = c.match(/^sqrt\((.+)\)=(-?\d+(?:\.\d+)?)$/);
        if (m) {
            var p = parsePoly(m[1]), rhs = Number(m[2]); if (!p || polyDegree(p) !== 1) return null;
            var x = (rhs * rhs - polyCoeff(p, 0)) / polyCoeff(p, 1);
            return nativePartial(input, "solve", "radical_equation", "square_both_sides", "x = " + frac(x), stepsFromRules(input, "x = " + frac(x), ["radical_domain_restriction", "square_both_sides", "solve_linear_equation", "check_extraneous_roots"]));
        }
        m = c.match(/^sqrt\((.+)\)=x([+-]\d+)?$/);
        if (m) {
            var left = parsePoly(m[1]); var offset = m[2] ? Number(m[2]) : 0; if (!left) return null;
            var rightP = { 2: 1, 1: 2 * offset, 0: offset * offset };
            var eq = polyAdd(left, rightP, -1);
            var roots = rootsOfPolynomial(eq).filter(function (xv) { return (xv + offset) >= -EPS && polyEval(left, xv) >= -EPS; });
            var ans = roots.length ? "x = " + roots.map(frac).join(" or x = ") : "no real solution";
            return nativePartial(input, "solve", "radical_equation", "square_both_sides_with_check", ans, stepsFromRules(input, ans, ["radical_domain_restriction", "square_both_sides", "factor_quadratic", "check_extraneous_roots"]));
        }
        m = c.match(/^sqrt\((.+)\)([+-]\d+)=x$/);
        if (m) {
            var lp = parsePoly(m[1]); var add = Number(m[2]); if (!lp) return null;
            // sqrt(L) + add = x -> L = (x - add)^2 and x - add >= 0
            var rightPoly = { 2: 1, 1: -2 * add, 0: add * add };
            var eqp = polyAdd(lp, rightPoly, -1);
            var rootObjsR = quadraticRootObjects(eqp);
            var rootsR = (rootObjsR.length ? rootObjsR : rootsOfPolynomial(eqp).map(function (xv) { return { value: xv, text: frac(xv) }; })).filter(function (ro) { return ro.value - add >= -EPS && polyEval(lp, ro.value) >= -EPS; });
            var ansR = rootsR.length ? "x = " + rootsR.map(function (ro) { return ro.text; }).join(" or x = ") : "no real solution";
            return nativePartial(input, "solve", "radical_equation", "isolate_radical_square_check", ansR, stepsFromRules(input, ansR, ["isolate_radical", "radical_domain_restriction", "square_both_sides", "factor_quadratic", "check_extraneous_roots"]));
        }
        return null;
    }

    function solvePowerRootExpression(input) {
        var c = normalizeMath(input);
        if (c === "x^(1/2)") return nativePartial(input, "simplify", "radical_expression", "power_root_conversion", "sqrt(x)", stepsFromRules(input, "sqrt(x)", ["rational_exponent_to_radical"]));
        if (c === "sqrt(x)^2") return nativePartial(input, "simplify", "radical_expression", "sqrt_square_simplification", "x, where x ≥ 0", stepsFromRules(input, "x, where x ≥ 0", ["sqrt_domain_restriction", "sqrt_square_simplification"]));
        if (c === "(x^2)^(1/2)") return nativePartial(input, "simplify", "radical_expression", "even_power_square_root", "|x|", stepsFromRules(input, "|x|", ["sqrt_of_square_is_absolute_value"]));
        return null;
    }

    NS.nativeSolvers.powersRoots = { solveRadicalEquation: solveRadicalEquation, solvePowerRootExpression: solvePowerRootExpression };
})(window.AlgebraTrace);
