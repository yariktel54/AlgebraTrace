/* AlgebraTrace JS native solver module: limits_continuity. */
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
    function rationalHoleVerticalData(expr) {
        var r = rationalExpression(expr); if (!r) return null;
        var nf = factorPolynomial(r.n), df = factorPolynomial(r.d);
        var canceled = [], remaining = [];
        for (var di = 0; di < df.factors.length; di += 1) {
            var f = df.factors[di];
            if (f.type !== "linear") continue;
            var isCanceled = false;
            for (var ni = 0; ni < nf.factors.length; ni += 1) if (nf.factors[ni].type === "linear" && isZero(nf.factors[ni].root - f.root)) isCanceled = true;
            if (isCanceled) canceled.push(f.root); else remaining.push(f.root);
        }
        var cc = cancelCommonFactors(nf, df);
        var simpleN = repeatedFactorsToString(cc.n.factors, cc.n.constant);
        var simpleD = repeatedFactorsToString(cc.d.factors, cc.d.constant);
        var simplified = cc.d.factors.length === 0 && isZero(cc.d.constant - 1) ? simpleN : simpleN + "/" + simpleD;
        var holes = [];
        for (var i = 0; i < canceled.length; i += 1) holes.push({ x: canceled[i], y: evalAst(parseExpr(simplified), canceled[i]) });
        return { r: r, nf: nf, df: df, canceled: canceled, remaining: remaining, simplified: simplified, holes: holes };
    }
    function solveLimitContinuity(input, action, options) {
        var expr = null, at = options && options.at !== undefined && options.at !== null && options.at !== "" ? Number(options.at) : null;
        var c = String(input || "").trim();
        var m = c.match(/^\s*limit\((.*),\s*x\s*,\s*([^\)]+)\)\s*$/i);
        if (m) { expr = m[1].trim(); at = Number(m[2]); action = "find_limit"; }
        else if (/^lim\s+x->infinity/i.test(c)) { expr = c.replace(/^\s*lim\s+x->infinity\s*/i, "").trim(); action = "find_limit_at_infinity"; }
        else expr = c;
        if (action === "find_limit_at_infinity") {
            var rInf = rationalExpression(expr); if (!rInf) return null;
            var dn = polyDegree(rInf.n), dd = polyDegree(rInf.d), ansInf;
            if (dn < dd) ansInf = "0";
            else if (dn === dd) ansInf = frac(polyCoeff(rInf.n, dn) / polyCoeff(rInf.d, dd));
            else ansInf = dn === dd + 1 ? "∞ or -∞ depending on direction" : "∞";
            return nativePartial(input, action, "find_limit_at_infinity", "rational_limit_at_infinity", ansInf, stepsFromRules(input, ansInf, ["compare_degrees", "leading_coefficient_ratio"]));
        }
        if (action === "check_continuity") {
            if (at === null || isNaN(at)) return null;
            var rC = rationalExpression(expr); if (!rC) return null;
            var denVal = polyEval(rC.d, at);
            var ansC = !isZero(denVal) ? "continuous at x = " + frac(at) : "not continuous at x = " + frac(at);
            var rulesC = !isZero(denVal) ? ["direct_substitution", "continuity_definition"] : ["denominator_zero", "discontinuity_detected"];
            return nativePartial(input, action, "check_continuity", "continuity_by_direct_substitution", ansC, stepsFromRules(input, ansC, rulesC));
        }
        if (action === "find_discontinuities") {
            var dataD = rationalHoleVerticalData(expr); if (!dataD) return null;
            var holeTexts = dataD.holes.map(function (h) { return "(" + frac(h.x) + ", " + frac(h.y) + ")"; });
            var partsD = [];
            if (holeTexts.length) partsD.push("removable discontinuity at x = " + dataD.canceled.map(frac).join(", x = ") + "; holes: " + holeTexts.join(", "));
            if (dataD.remaining.length) partsD.push("infinite discontinuity / vertical asymptote at x = " + dataD.remaining.map(frac).join(", x = "));
            var ansD = partsD.length ? partsD.join("; ") : "none";
            var stepsD = [];
            addMicroStep(stepsD, "identify_numerator_denominator", "Identify numerator and denominator", expr, "numerator = " + polyToString(dataD.r.n) + "; denominator = " + polyToString(dataD.r.d), "Discontinuities of a rational function can only occur where the denominator is zero.", "classification");
            buildFactorizationSteps(stepsD, dataD.r.n, polyToString(dataD.r.n), { action: "Factor the numerator" });
            buildFactorizationSteps(stepsD, dataD.r.d, polyToString(dataD.r.d), { action: "Factor the denominator" });
            var factorEquationsD = dataD.df.factors.filter(function (f) { return f.type === "linear"; }).map(function (f) { return f.text.replace(/^\((.*)\)$/, "$1") + " = 0"; }).join(" or ");
            addMicroStep(stepsD, "find_denominator_zeros", "Identify denominator zeros", factorEquationsD || (polyToString(dataD.r.d) + " = 0"), rootEquationText(dataD.canceled.concat(dataD.remaining)), "These denominator zeros are the only possible discontinuities.", "domain");
            addMicroStep(stepsD, "cancel_common_factor", "Check canceled factors", factorsToString(dataD.nf) + "/" + factorsToString(dataD.df), dataD.canceled.length ? "canceled roots: " + dataD.canceled.map(frac).join(", ") : "no canceled denominator roots", "Canceled denominator factors become removable discontinuities.", "reasoning");
            for (var rh = 0; rh < dataD.holes.length; rh += 1) {
                addMicroStep(stepsD, "classify_removable_vs_infinite_discontinuity", "Classify the removable discontinuity", "x = " + frac(dataD.holes[rh].x), "removable discontinuity; hole: (" + frac(dataD.holes[rh].x) + ", " + frac(dataD.holes[rh].y) + ")", "The factor cancels, so the graph has a hole instead of a vertical asymptote.", "reasoning");
            }
            for (var iv = 0; iv < dataD.remaining.length; iv += 1) {
                addMicroStep(stepsD, "classify_removable_vs_infinite_discontinuity", "Classify the infinite discontinuity", "x = " + frac(dataD.remaining[iv]), "infinite discontinuity / vertical asymptote at x = " + frac(dataD.remaining[iv]), "The denominator factor does not cancel, so the function is unbounded near this x-value.", "reasoning");
            }
            addMicroStep(stepsD, "write_discontinuities", "Write the discontinuities", "removable and infinite cases", ansD, "Combine the classified discontinuities into the final answer.", "reasoning");
            return nativePartial(input, action, "find_discontinuities", "rational_discontinuity_analysis", ansD, stepsD);
        }
        if (action === "find_left_limit" || action === "find_right_limit") {
            if (at === null || isNaN(at)) return null;
            var rv = rationalExpression(expr); if (!rv) return null;
            var delta = action === "find_left_limit" ? -1e-6 : 1e-6;
            var val = polyEval(rv.n, at + delta) / polyEval(rv.d, at + delta);
            var ansO = val > 0 ? "∞" : "-∞";
            return nativePartial(input, action, action, "one_sided_infinite_limit", ansO, stepsFromRules(input, ansO, ["one_sided_sign_analysis", "infinite_limit"]));
        }
        if (action === "find_limit") {
            if (normalizeMath(expr) === "sin(x)/x" && isZero(at)) return nativePartial(input, action, "find_limit", "standard_trig_limit", "1", stepsFromRules(input, "1", ["standard_limit_sin_x_over_x"]));
            if (at === null || isNaN(at)) return null;
            var rL = rationalExpression(expr); if (!rL) return null;
            var dv = polyEval(rL.d, at), nv = polyEval(rL.n, at), ans;
            if (!isZero(dv)) {
                ans = frac(nv / dv);
                var stepsDirect = [];
                addStepIfMeaningful(stepsDirect, makeStep("direct_substitution", "Substitute the limit point", expr + " at x = " + frac(at), frac(nv) + "/" + frac(dv) + " = " + ans, "The denominator is nonzero, so direct substitution gives the limit.", { step_type: "evaluation" }));
                return nativePartial(input, action, "find_limit", "direct_substitution_limit", ans, stepsDirect);
            } else {
                var rat = rationalSimplify(expr);
                if (rat && rat.simplified) {
                    var clean = rat.simplified.split(",")[0]; var val2 = evalAst(parseExpr(clean), at);
                    ans = frac(val2);
                    var stepsL = [];
                    addStepIfMeaningful(stepsL, makeStep("direct_substitution", "Check direct substitution", expr + " at x = " + frac(at), frac(nv) + "/" + frac(dv), "Direct substitution gives 0/0, so the expression must be transformed before evaluating the limit.", { step_type: "evaluation" }));
                    for (var rs = 0; rs < (rat.steps || []).length; rs += 1) addStepIfMeaningful(stepsL, rat.steps[rs]);
                    addStepIfMeaningful(stepsL, makeStep("factor_and_cancel", "Use the simplified expression for the limit", expr, clean, "The common factor causing 0/0 is canceled for x values near the limit point.", { step_type: "transform" }));
                    addStepIfMeaningful(stepsL, makeStep("removable_discontinuity_limit", "Recognize the removable discontinuity", "x = " + frac(at), clean, "The canceled factor creates a hole at the point, but the nearby values follow the simplified expression.", { step_type: "reasoning" }));
                    addStepIfMeaningful(stepsL, makeStep("direct_substitution_after_cancellation", "Substitute after cancellation", clean + " at x = " + frac(at), ans, "After cancellation, substitution gives the finite limiting value.", { step_type: "evaluation" }));
                    return nativePartial(input, action, "find_limit", "factor_cancel_limit", ans, stepsL);
                } else return null;
            }
        }
        return null;
    }

    NS.nativeSolvers.limitsContinuity = { solveLimitContinuity: solveLimitContinuity };
})(window.AlgebraTrace);
