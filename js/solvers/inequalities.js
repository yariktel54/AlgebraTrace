/* AlgebraTrace JS native solver module: inequalities. */
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

    function solveSignInequality(num, den, op, forbidden) {
        var critical = unique(rootsOfPolynomial(num).concat(rootsOfPolynomial(den))).sort(function (a, b) { return a - b; });
        var points = [-Infinity].concat(critical).concat([Infinity]);
        var intervals = [];
        function testIn(a, b) { if (a === -Infinity && b === Infinity) return 0; if (a === -Infinity) return b - 1; if (b === Infinity) return a + 1; return (a + b) / 2; }
        function ok(v) {
            if (op === ">") return v > 0; if (op === ">=") return v >= -EPS; if (op === "<") return v < 0; if (op === "<=") return v <= EPS; return false;
        }
        for (var i = 0; i < points.length - 1; i += 1) {
            var a = points[i], b = points[i + 1], t = testIn(a, b);
            var v = polyEval(num, t) / polyEval(den, t);
            if (ok(v)) {
                var lc = false, rc = false;
                if (op === ">=" || op === "<=") {
                    lc = (a !== -Infinity && isZero(polyEval(num, a)) && forbidden.indexOf(a) < 0);
                    rc = (b !== Infinity && isZero(polyEval(num, b)) && forbidden.indexOf(b) < 0);
                }
                intervals.push({ a: a, b: b, leftClosed: lc, rightClosed: rc });
            }
        }
        // Endpoints are marked closed above for non-strict inequalities.
        return formatIntervals(intervals);
    }
    function formatIntervals(items) {
        if (!items.length) return "∅";
        var parts = [];
        for (var i = 0; i < items.length; i += 1) {
            var it = items[i];
            if (it.point !== undefined) { parts.push("{" + frac(it.point) + "}"); continue; }
            var left = it.a === -Infinity ? "-∞" : frac(it.a);
            var right = it.b === Infinity ? "∞" : frac(it.b);
            parts.push((it.leftClosed ? "[" : "(") + left + ", " + right + (it.rightClosed ? "]" : ")"));
        }
        return parts.join(" ∪ ");
    }

    function solveAbsRelation(input, rel) {
        var m = normalizeMath(input).match(/^\|(.+)\|([=<>]=?|>=)(.+)$/);
        if (!m) return null;
        var inner = m[1], op = m[2], right = Number(m[3]);
        var p = parsePoly(inner);
        if (!p || polyDegree(p) !== 1 || isNaN(right)) return null;
        var a = polyCoeff(p, 1), b = polyCoeff(p, 0);
        if (op === "=") {
            var r1 = (-right - b) / a, r2 = (right - b) / a;
            var ans = "x = " + [r1, r2].sort(function (x, y) { return x - y; }).map(frac).join(" or x = ");
            return nativePartial(input, "solve", "absolute_value_equation", "absolute_value_split_cases", ans, stepsFromRules(input, ans, ["absolute_value_definition", "solve_two_linear_equations"]));
        }
        var lo = (-right - b) / a, hi = (right - b) / a; if (lo > hi) { var tmp = lo; lo = hi; hi = tmp; }
        var ans2;
        if (op === "<") ans2 = "(" + frac(lo) + ", " + frac(hi) + ")";
        else if (op === "<=") ans2 = "[" + frac(lo) + ", " + frac(hi) + "]";
        else if (op === ">") ans2 = "(-∞, " + frac(lo) + ") ∪ (" + frac(hi) + ", ∞)";
        else ans2 = "(-∞, " + frac(lo) + "] ∪ [" + frac(hi) + ", ∞)";
        return nativePartial(input, "solve", "absolute_value_inequality", "absolute_value_interval_method", ans2, stepsFromRules(input, ans2, ["absolute_value_inequality_definition", "solve_compound_inequality", "interval_solution"]));
    }

    NS.nativeSolvers.inequalities = { solveSignInequality: solveSignInequality, solveAbsRelation: solveAbsRelation };
})(window.AlgebraTrace);
