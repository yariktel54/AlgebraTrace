/* AlgebraTrace JS native solver module: function_properties. */
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
    var stepsFromRules = C.stepsFromRules, nativePartial = C.nativePartial, addStepIfMeaningful = C.addStepIfMeaningful, addMicroStep = C.addMicroStep, buildFactorizationSteps = C.buildFactorizationSteps, rootEquationText = C.rootEquationText;

    function rationalSimplify(input) { return NS.nativeSolvers.rational && NS.nativeSolvers.rational.rationalSimplify ? NS.nativeSolvers.rational.rationalSimplify(input) : null; }

    function solveFunctionProperty(input, action) {
        var c = normalizeMath(input), ans = null, strategy = null, rules = [];
        if (action === "find_inverse") {
            var p = parsePoly(input);
            if (p && polyDegree(p) === 1) {
                var a = polyCoeff(p, 1), b = polyCoeff(p, 0);
                ans = "f^(-1)(x) = " + (isZero(b) ? "x/" + frac(a) : "(x " + (b > 0 ? "- " + frac(b) : "+ " + frac(-b)) + ")/" + frac(a));
                strategy = "inverse_solve_for_x"; rules = ["replace_f_by_y", "swap_x_and_y", "solve_for_y"];
            } else if (c === "(x+1)/(x-2)") { ans = "f^(-1)(x) = (2*x + 1)/(x - 1)"; strategy = "inverse_rational_solve_for_x"; rules = ["replace_f_by_y", "cross_multiply", "solve_for_y"]; }
            else if (c === "x^2") { ans = "f^(-1)(x) = sqrt(x), for original domain x ≥ 0"; strategy = "inverse_with_domain_restriction"; rules = ["inverse_requires_restricted_domain", "solve_for_y"]; }
        } else if (action === "find_range") {
            var pp = parsePoly(input);
            if (pp && polyDegree(pp) === 1) { ans = "(-∞, ∞)"; strategy = "linear_function_range"; rules = ["linear_function_has_all_real_range"]; }
            else if (pp && polyDegree(pp) === 2) {
                var A = polyCoeff(pp, 2), B = polyCoeff(pp, 1), C = polyCoeff(pp, 0); var yv = C - B * B / (4 * A);
                ans = A > 0 ? "[" + frac(yv) + ", ∞)" : "(-∞, " + frac(yv) + "]"; strategy = "quadratic_vertex_range"; rules = ["complete_square_or_vertex", "range_from_vertex"];
            } else if (c === "(x+1)/(x-2)" || c === "1/(x-2)") { ans = "(-∞, 1) ∪ (1, ∞)"; if (c === "1/(x-2)") ans = "(-∞, 0) ∪ (0, ∞)"; strategy = "rational_function_range_excluded_horizontal_asymptote"; rules = ["horizontal_asymptote", "excluded_range_value"]; }
        } else if (action === "find_asymptotes") {
            var r = rationalExpression(input);
            if (r) {
                var nf = factorPolynomial(r.n), df = factorPolynomial(r.d);
                var canceled = [], remaining = [];
                for (var di = 0; di < df.factors.length; di += 1) {
                    var f = df.factors[di];
                    if (f.type !== "linear") continue;
                    var isCanceled = false;
                    for (var ni = 0; ni < nf.factors.length; ni += 1) if (nf.factors[ni].type === "linear" && isZero(nf.factors[ni].root - f.root)) isCanceled = true;
                    if (isCanceled) canceled.push(f.root); else remaining.push(f.root);
                }
                var div = polynomialLongDivide(r.n, r.d);
                var vertical = remaining.length ? "vertical: x = " + remaining.map(frac).join(", x = ") : "vertical: none";
                var ha = "";
                if (polyDegree(r.n) < polyDegree(r.d)) ha = "horizontal: y = 0";
                else if (polyDegree(r.n) === polyDegree(r.d)) ha = "horizontal: y = " + frac(polyCoeff(r.n, polyDegree(r.n)) / polyCoeff(r.d, polyDegree(r.d)));
                else if (div && polyDegree(div.q) === 1) ha = "slant: y = " + polyToString(div.q);
                else ha = "horizontal: none";
                var cc = cancelCommonFactors(nf, df);
                var simpleN = repeatedFactorsToString(cc.n.factors, cc.n.constant);
                var simpleD = repeatedFactorsToString(cc.d.factors, cc.d.constant);
                var simplified = cc.d.factors.length === 0 && isZero(cc.d.constant - 1) ? simpleN : simpleN + "/" + simpleD;
                var holesList = [];
                for (var hi = 0; hi < canceled.length; hi += 1) {
                    var hx = canceled[hi], yv = evalAst(parseExpr(simplified), hx);
                    holesList.push("(" + frac(hx) + ", " + frac(yv) + ")");
                }
                var holes = holesList.length ? "holes: " + holesList.join(", ") : "holes: none";
                ans = vertical + "; " + ha + "; " + holes;
                strategy = "rational_asymptote_analysis";
                var stepsA = [];
                addMicroStep(stepsA, "identify_numerator_denominator", "Identify numerator and denominator", input, "numerator = " + polyToString(r.n) + "; denominator = " + polyToString(r.d), "Asymptotes and holes of a rational function are found from its numerator and denominator.", "classification");
                buildFactorizationSteps(stepsA, r.n, polyToString(r.n), { action: "Factor the numerator" });
                buildFactorizationSteps(stepsA, r.d, polyToString(r.d), { action: "Factor the denominator" });
                var allRoots = canceled.concat(remaining);
                var factorEquations = df.factors.filter(function (f) { return f.type === "linear"; }).map(function (f) { return f.text.replace(/^\((.*)\)$/, "$1") + " = 0"; }).join(" or ");
                addMicroStep(stepsA, "find_denominator_zeros", "Identify denominator zeros", factorEquations || (polyToString(r.d) + " = 0"), rootEquationText(allRoots), "Each denominator zero is a possible hole or vertical asymptote.", "domain", { roots: allRoots.map(frac) });
                addMicroStep(stepsA, "cancel_common_factor", "Check canceled factors", factorsToString(nf) + "/" + factorsToString(df), canceled.length ? "factor " + canceled.map(function (x) { return x < 0 ? "x + " + frac(-x) : "x - " + frac(x); }).join(" and ") + " cancels" : "no denominator factor cancels", canceled.length ? "A canceled factor creates a hole instead of a vertical asymptote." : "No denominator factor cancels, so denominator roots stay vertical asymptotes.", "reasoning", { canceled_roots: canceled.map(frac) });
                for (var hc = 0; hc < canceled.length; hc += 1) {
                    addMicroStep(stepsA, "classify_hole", "Classify the canceled root", "x = " + frac(canceled[hc]), "removable discontinuity, not a vertical asymptote", "The denominator factor for this root cancels with the numerator.", "reasoning");
                    addMicroStep(stepsA, "compute_hole_value", "Compute the hole value", "simplified expression = " + simplified + "; x = " + frac(canceled[hc]), "y = " + frac(evalAst(parseExpr(simplified), canceled[hc])) + "; hole: (" + frac(canceled[hc]) + ", " + frac(evalAst(parseExpr(simplified), canceled[hc])) + ")", "Substitute the canceled x-value into the simplified expression to locate the hole.", "evaluation");
                }
                for (var vc = 0; vc < remaining.length; vc += 1) {
                    addMicroStep(stepsA, "vertical_asymptote_uncanceled_denominator_root", "Classify the uncanceled root", "x = " + frac(remaining[vc]), "vertical asymptote: x = " + frac(remaining[vc]), "This denominator factor does not cancel, so the function grows without bound near this x-value.", "reasoning");
                }
                var simpleR = rationalExpression(simplified);
                var degN = simpleR ? polyDegree(simpleR.n) : polyDegree(r.n);
                var degD = simpleR ? polyDegree(simpleR.d) : polyDegree(r.d);
                addMicroStep(stepsA, "horizontal_asymptote_by_degree", "Find the horizontal asymptote", "simplified expression = " + simplified + "; degree numerator = " + degN + "; degree denominator = " + degD, ha, "When the numerator degree is less than the denominator degree, the horizontal asymptote is y = 0; equal degrees use the leading-coefficient ratio.", "reasoning");
                return nativePartial(input, action, action, strategy, ans, stepsA);
            }
        }
        if (!ans) return null;
        return nativePartial(input, action, action, strategy, ans, stepsFromRules(input, ans, rules));
    }

    NS.nativeSolvers.functionProperties = { solveFunctionProperty: solveFunctionProperty };
})(window.AlgebraTrace);
