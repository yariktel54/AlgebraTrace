/* AlgebraTrace JS native solver module: equations. */
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
    var stepsFromRules = C.stepsFromRules, nativePartial = C.nativePartial, addMicroStep = C.addMicroStep, buildCheckRootSteps = C.buildCheckRootSteps;

    function solveAbsRelation(input, rel) { return NS.nativeSolvers.inequalities && NS.nativeSolvers.inequalities.solveAbsRelation ? NS.nativeSolvers.inequalities.solveAbsRelation(input, rel) : null; }
    function solveSignInequality(num, den, op, forbidden) { return NS.nativeSolvers.inequalities && NS.nativeSolvers.inequalities.solveSignInequality ? NS.nativeSolvers.inequalities.solveSignInequality(num, den, op, forbidden) : null; }
    function solveTrigRelation(input, rel) { return NS.nativeSolvers.trigonometry && NS.nativeSolvers.trigonometry.solveTrigRelation ? NS.nativeSolvers.trigonometry.solveTrigRelation(input, rel) : null; }
    function solveLogRelation(input, rel) { return NS.nativeSolvers.logarithms && NS.nativeSolvers.logarithms.solveLogRelation ? NS.nativeSolvers.logarithms.solveLogRelation(input, rel) : null; }
    function solveRadicalEquation(input, rel) { return NS.nativeSolvers.powersRoots && NS.nativeSolvers.powersRoots.solveRadicalEquation ? NS.nativeSolvers.powersRoots.solveRadicalEquation(input, rel) : null; }

    function buildEquationSolveSteps(input, rel, num, roots) {
        var steps = [];
        var polyText = polyToString(num);
        addMicroStep(steps, "start_equation", "Start with the equation", "equation", input, "The equation is prepared for solving by rewriting it as a polynomial equal to zero.", "classification");
        if (normalizeMath(rel.right) !== "0" || normalizeMath(rel.left) !== normalizeMath(polyText)) {
            addMicroStep(steps, "move_terms_to_one_side", "Move all terms to one side", input, polyText + " = 0", "Subtract the right side from the left side so the equation has zero on one side.", "transform");
        }
        if (polyDegree(num) === 2) {
            var f = factorPolynomial(num), factored = factorsToString(f);
            addMicroStep(steps, "factor_quadratic", "Factor the quadratic", polyText, factored, "The quadratic is rewritten as a product of linear factors.", "transform");
            var linearFactors = [];
            for (var i = 0; i < f.factors.length; i += 1) if (f.factors[i].type === "linear") linearFactors.push(f.factors[i]);
            if (linearFactors.length >= 2) {
                var factorEquations = linearFactors.map(function (lf) { return lf.text.replace(/^\((.*)\)$/, "$1") + " = 0"; }).join(" or ");
                addMicroStep(steps, "zero_product_property", "Use the zero product property", factored + " = 0", factorEquations, "A product is zero only when at least one factor is zero.", "reasoning");
                for (var j = 0; j < linearFactors.length; j += 1) {
                    var lf = linearFactors[j];
                    addMicroStep(steps, j === 0 ? "solve_first_linear_factor" : "solve_second_linear_factor", j === 0 ? "Solve the first linear equation" : "Solve the second linear equation", lf.text.replace(/^\((.*)\)$/, "$1") + " = 0", "x = " + frac(lf.root), "Isolate x in this linear factor.", "transform");
                }
            }
        } else if (polyDegree(num) === 1) {
            var a = polyCoeff(num, 1), b = polyCoeff(num, 0);
            var moved = frac(a) + "*x = " + frac(-b);
            addMicroStep(steps, "linear_equation_isolate_variable", "Move the constant term", polyText + " = 0", moved, "Move the constant term to the other side.", "transform");
            if (!isZero(a - 1)) addMicroStep(steps, "divide_by_coefficient", "Divide by the coefficient", moved, "x = " + frac(-b / a), "Divide both sides by " + frac(a) + ".", "transform");
        }
        var ansText = roots.length ? "x = " + roots.map(frac).join(" or x = ") : "no real solution";
        addMicroStep(steps, "write_solution", "Write the solution", roots.map(function (r) { return "x = " + frac(r); }).join("; ") || "no roots", ansText, "Collect the roots into the solution set.", "reasoning", { roots: roots.map(frac) });
        buildCheckRootSteps(steps, input, num, roots);
        return steps;
    }

    function solveEquationOrInequality(input) {
        var rel = splitTopLevelRelation(input);
        if (!rel) return null;
        if (rel.left.indexOf("|") >= 0 || rel.right.indexOf("|") >= 0) return solveAbsRelation(input, rel);
        if (/sin\(|cos\(|tan\(/.test(input)) return solveTrigRelation(input, rel);
        if (/\b(?:log\d*|log_|log\(|ln\()/i.test(input)) return solveLogRelation(input, rel);
        if (/sqrt\(/i.test(input)) return solveRadicalEquation(input, rel);
        if (isExponentialRelation(rel)) return solveExponentialEquation(input, rel);

        var rrLeft = rationalExpression(rel.left), rrRight = rationalExpression(rel.right);
        if (!rrLeft || !rrRight) return null;
        var num = polyAdd(polyMul(rrLeft.n, rrRight.d), polyMul(rrRight.n, rrLeft.d), -1);
        var den = polyMul(rrLeft.d, rrRight.d);
        var forbidden = rootsOfPolynomial(den);
        var task = (rel.op === "=" ? (polyDegree(num) === 2 ? "quadratic_equation" : (polyDegree(num) === 1 ? "linear_equation" : "polynomial_equation")) : (input.indexOf("/") >= 0 ? "rational_inequality" : (polyDegree(num) === 2 ? "quadratic_inequality" : "linear_inequality")));
        if (rel.op === "=") {
            var roots = rootsOfPolynomial(num).filter(function (x) { for (var i = 0; i < forbidden.length; i += 1) if (isZero(x - forbidden[i])) return false; return true; });
            var ans = roots.length ? "x = " + roots.map(frac).join(" or x = ") : "no real solution";
            if (forbidden.length && roots.length) ans += ", " + restrictionText(forbidden);
            var strategy = polyDegree(num) === 2 ? "quadratic_factorization" : (input.indexOf("/") >= 0 ? "rational_equation_clear_denominators" : "linear_equation_isolation");
            if (input.indexOf("/") < 0 && polyDegree(num) <= 2) {
                return nativePartial(input, "solve", task, strategy, ans, buildEquationSolveSteps(input, rel, num, roots), { forbidden_values: forbidden.map(frac) });
            }
            var rules = ["find_forbidden_values", "clear_denominators", "reject_extraneous_roots"];
            return nativePartial(input, "solve", task, strategy, ans, stepsFromRules(input, ans, rules), { forbidden_values: forbidden.map(frac) });
        }
        var solution = solveSignInequality(num, den, rel.op, forbidden);
        var rules2 = [input.indexOf("/") >= 0 ? "find_forbidden_values" : "move_terms_to_one_side", "critical_points", "sign_chart", "interval_solution"];
        return nativePartial(input, "solve", task, input.indexOf("/") >= 0 ? "rational_inequality_sign_chart" : "polynomial_inequality_sign_chart", solution, stepsFromRules(input, solution, rules2), { forbidden_values: forbidden.map(frac) });
    }
    function isExponentialRelation(rel) { return /\^/.test(rel.left) && rel.op === "=" && !/x\^/.test(normalizeMath(rel.left)); }
    function solveExponentialEquation(input, rel) {
        var base, exp;
        try {
            var leftAst = parseExpr(rel.left);
            if (!leftAst || leftAst.type !== "binary" || leftAst.value !== "^" || leftAst.children[0].type !== "num") return null;
            base = leftAst.children[0].value;
            exp = renderAst(leftAst.children[1], 0);
        } catch (e) { return null; }
        var rhs = Number(evalSafeNumber(rel.right));
        if (!base || !rhs) return null;
        var exponentValue = null;
        for (var k = -20; k <= 20; k += 1) if (isZero(Math.pow(base, k) - rhs)) exponentValue = k;
        if (exponentValue === null) exponentValue = Math.log(rhs) / Math.log(base);
        var p = parsePoly(exp);
        if (!p || polyDegree(p) !== 1) return null;
        var x = (exponentValue - polyCoeff(p, 0)) / polyCoeff(p, 1);
        var ans = isInt(exponentValue) ? "x = " + frac(x) : "x = ln(" + displayNumber(rhs) + ")/ln(" + displayNumber(base) + ")";
        return nativePartial(input, "solve", "exponential_equation", isInt(exponentValue) ? "exponential_same_base" : "exponential_logarithmic_solution", ans, stepsFromRules(input, ans, ["rewrite_as_same_base", "equate_exponents", "solve_linear_equation"]));
    }

    NS.nativeSolvers.equations = { solveEquationOrInequality: solveEquationOrInequality, solveExponentialEquation: solveExponentialEquation };
})(window.AlgebraTrace);
