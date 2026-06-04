/* AlgebraTrace JS native solver module: systems. */
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

    function coefFromString(s, def) { if (s === "" || s === "+") return def; if (s === "-") return -def; return Number(s); }

    /* ----------------------------- systems / function properties / limits ----------------------------- */
    function parseLinearEquation2(eq) {
        var rel = splitTopLevelRelation(eq); if (!rel || rel.op !== "=") return null;
        function lin2(expr) {
            var yToX = String(expr).replace(/y/g, "z");
            try {
                var ast = parseExpr(yToX);
                function rec(a) {
                    a = simplifyAst(a);
                    if (a.type === "num") return { x: 0, z: 0, c: a.value };
                    if (a.type === "var") return a.value === "x" ? { x: 1, z: 0, c: 0 } : (a.value === "z" ? { x: 0, z: 1, c: 0 } : null);
                    if (a.type === "unary") { var u = rec(a.children[0]); return u && { x: -u.x, z: -u.z, c: -u.c }; }
                    if (a.type === "binary") {
                        var l = rec(a.children[0]), r = rec(a.children[1]);
                        if (!l || !r) return null;
                        if (a.value === "+") return { x: l.x + r.x, z: l.z + r.z, c: l.c + r.c };
                        if (a.value === "-") return { x: l.x - r.x, z: l.z - r.z, c: l.c - r.c };
                        if (a.value === "*" && isOnlyConst(l)) return { x: l.c * r.x, z: l.c * r.z, c: l.c * r.c };
                        if (a.value === "*" && isOnlyConst(r)) return { x: r.c * l.x, z: r.c * l.z, c: r.c * l.c };
                    }
                    return null;
                }
                return rec(ast);
            } catch (e) { return null; }
        }
        var L = lin2(rel.left), R = lin2(rel.right); if (!L || !R) return null;
        return { x: L.x - R.x, y: L.z - R.z, c: R.c - L.c };
    }
    function isOnlyConst(o) { return isZero(o.x) && isZero(o.z); }
    function solveSystem(input, action) {
        var parts = String(input).split(";").map(function (s) { return s.trim(); });
        if (action === "solve_inequality_system") {
            var ans = solveInequalitySystem(parts);
            if (ans) return nativePartial(input, action, "system_of_inequalities", "inequality_system_intersection", ans, stepsFromRules(input, ans, ["solve_each_inequality", "intersect_solution_sets"]));
        }
        if (parts.length === 2) {
            var e1 = parseLinearEquation2(parts[0]), e2 = parseLinearEquation2(parts[1]);
            if (e1 && e2) {
                var det = e1.x * e2.y - e2.x * e1.y;
                if (isZero(det)) {
                    var ans0 = isZero(e1.x * e2.c - e2.x * e1.c) && isZero(e1.y * e2.c - e2.y * e1.c) ? "infinitely many solutions" : "no solution";
                    return nativePartial(input, "solve_system", "system", "linear_system_elimination", ans0, stepsFromRules(input, ans0, ["linear_system_elimination", "detect_dependent_or_inconsistent_system"]));
                }
                var x = (e1.c * e2.y - e2.c * e1.y) / det;
                var y = (e1.x * e2.c - e2.x * e1.c) / det;
                var ans = "x = " + frac(x) + ", y = " + frac(y);
                var steps = [];
                if (isZero(e1.y + e2.y)) {
                    addStepIfMeaningful(steps, makeStep("linear_system_elimination", "Add equations to eliminate y", "(" + parts[0] + ") + (" + parts[1] + ")", frac(e1.x + e2.x) + "*x = " + frac(e1.c + e2.c), "The y terms have opposite coefficients, so adding the equations eliminates y.", { step_type: "transform" }));
                    addStepIfMeaningful(steps, makeStep("solve_2x2_system", "Solve for x", frac(e1.x + e2.x) + "*x = " + frac(e1.c + e2.c), "x = " + frac(x), "The remaining one-variable equation gives x.", { step_type: "transform" }));
                } else {
                    addStepIfMeaningful(steps, makeStep("linear_system_elimination", "Eliminate one variable", "determinant = " + frac(det), "x = " + frac(x), "The equations are combined by elimination using the nonzero determinant.", { step_type: "reasoning" }));
                    addStepIfMeaningful(steps, makeStep("solve_2x2_system", "Solve for the second variable", "x = " + frac(x), "y = " + frac(y), "Substituting x into one equation gives y.", { step_type: "transform" }));
                }
                addStepIfMeaningful(steps, makeStep("substitute_back", "Substitute back to find y", parts[0] + " with x = " + frac(x), "y = " + frac(y), "The value of x is substituted into the first equation to find y.", { step_type: "transform" }));
                addStepIfMeaningful(steps, makeStep("verify_system_solution", "Check the system solution", "x = " + frac(x) + ", y = " + frac(y), parts[0] + " and " + parts[1] + " are both true", "Substituting the values into both equations verifies the solution.", { step_type: "check" }));
                return nativePartial(input, "solve_system", "system", "linear_system_elimination", ans, steps);
            }
        }
        return null;
    }
    function solveInequalitySystem(parts) {
        var lo = -Infinity, hi = Infinity, loClosed = false, hiClosed = false;
        for (var i = 0; i < parts.length; i += 1) {
            var rel = splitTopLevelRelation(parts[i]); if (!rel) return null;
            var p = parsePoly(rel.left), q = parsePoly(rel.right); if (!p || !q) return null;
            var diff = polyAdd(p, q, -1); if (polyDegree(diff) !== 1) return null;
            var root = -polyCoeff(diff, 0) / polyCoeff(diff, 1);
            var op = rel.op;
            if (polyCoeff(diff, 1) < 0) op = reverseOp(op);
            if (op === ">" || op === ">=") { if (root > lo) { lo = root; loClosed = op === ">="; } }
            if (op === "<" || op === "<=") { if (root < hi) { hi = root; hiClosed = op === "<="; } }
        }
        if (lo > hi || (isZero(lo - hi) && !(loClosed && hiClosed))) return "∅";
        return (loClosed ? "[" : "(") + (lo === -Infinity ? "-∞" : frac(lo)) + ", " + (hi === Infinity ? "∞" : frac(hi)) + (hiClosed ? "]" : ")");
    }
    function reverseOp(op) { return op === ">" ? "<" : op === "<" ? ">" : op === ">=" ? "<=" : op === "<=" ? ">=" : op; }

    NS.nativeSolvers.systems = { solveSystem: solveSystem, solveInequalitySystem: solveInequalitySystem };
})(window.AlgebraTrace);
