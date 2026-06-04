/* AlgebraTrace JS native solver module: rational. */
window.AlgebraTrace = window.AlgebraTrace || {};
(function (NS) {
    "use strict";
    var C = NS.nativeCore;
    if (!C) throw new Error("AlgebraTrace native core must be loaded before solver modules.");
    NS.nativeSolvers = NS.nativeSolvers || {};
    var isZero = C.isZero;
    var normalizeMath = C.normalizeMath, frac = C.frac;
    var polyDegree = C.polyDegree, polyCoeff = C.polyCoeff, polyEval = C.polyEval;
    var parsePoly = C.parsePoly, polyToString = C.polyToString;
    var rationalExpression = C.rationalExpression, factorPolynomial = C.factorPolynomial, rootsOfPolynomial = C.rootsOfPolynomial;
    var splitFractionTop = C.splitFractionTop, restrictionText = C.restrictionText, appendRestriction = C.appendRestriction;
    var cancelCommonFactors = C.cancelCommonFactors, factorsToString = C.factorsToString, repeatedFactorsToString = C.repeatedFactorsToString;
    var nativePartial = C.nativePartial, addMicroStep = C.addMicroStep;
    var buildDenominatorRestrictionSteps = C.buildDenominatorRestrictionSteps, buildFactorizationSteps = C.buildFactorizationSteps;

    function rationalParts(input) {
        var r = splitFractionTop(input);
        if (r) return { nText: r.n, dText: r.d, nPoly: parsePoly(r.n), dPoly: parsePoly(r.d) };
        var rr = rationalExpression(input);
        if (!rr) return null;
        return { nText: polyToString(rr.n), dText: polyToString(rr.d), nPoly: rr.n, dPoly: rr.d };
    }
    function formatSimplifiedFromCancel(c) {
        var numString = factorsToString(c.n);
        var denString = factorsToString(c.d);
        if (c.d.factors.length === 0 && isZero(c.d.constant - 1)) return numString;
        if (!c.n.factors.length && isZero(c.n.constant - 1)) numString = "1";
        return (numString + "/" + denString).replace(/\*\(/g, "*(");
    }
    function addRewriteAndCancelSteps(steps, input, nFact, dFact, canceled, simplified) {
        var rewritten = "(" + nFact + ")/(" + dFact + ")";
        addMicroStep(steps, "rewrite_factored_rational_expression", "Rewrite the rational expression with factors", input, rewritten, "The numerator and denominator are replaced by their factored forms.", "transform");
        var cancelText = canceled.length ? canceled.map(function (f) { return f.text; }).join(" and ") : "no common factor";
        addMicroStep(steps, "cancel_common_factor", "Cancel the common factor", rewritten, simplified, canceled.length ? "The factor " + cancelText + " appears in both numerator and denominator, so it cancels for allowed x-values." : "There is no common factor to cancel.", canceled.length ? "transform" : "reasoning", { canceled_factors: canceled.map(function (f) { return f.text; }) });
    }

    function rationalSimplify(input) {
        var parts = rationalParts(input);
        if (!parts || !parts.nPoly || !parts.dPoly || polyDegree(parts.dPoly) < 0) return null;
        var forbidden = rootsOfPolynomial(parts.dPoly);
        var nf = factorPolynomial(parts.nPoly), df = factorPolynomial(parts.dPoly);
        var c = cancelCommonFactors(nf, df);
        var simplified = formatSimplifiedFromCancel(c);
        var finalAnswer = appendRestriction(simplified, forbidden);
        var steps = [];
        var domainSteps = buildDenominatorRestrictionSteps(input, parts.dText, parts.dPoly, { include_domain_step: false });
        for (var ds = 0; ds < domainSteps.length; ds += 1) steps.push(domainSteps[ds]);
        var nFact = factorsToString(nf), dFact = factorsToString(df);
        buildFactorizationSteps(steps, parts.nPoly, parts.nText, { action: "Factor the numerator" });
        buildFactorizationSteps(steps, parts.dPoly, parts.dText, { action: "Factor the denominator" });
        addRewriteAndCancelSteps(steps, input, nFact, dFact, c.canceled, simplified);
        addMicroStep(steps, "preserve_domain_restriction", "Preserve original restrictions", simplified, finalAnswer, "The values excluded by the original denominator remain excluded after cancellation.", "domain", { forbidden_values: forbidden.map(frac) });
        return {
            answer: finalAnswer,
            simplified: simplified,
            forbidden_values: forbidden.map(frac),
            selected_strategy: "rational_expression_factor_cancel",
            rules: ["extract_denominator", "set_denominator_not_zero", "solve_denominator_equation", "write_domain_restriction", "factor_common_term", "difference_of_squares", "rewrite_factored_rational_expression", "cancel_common_factor", "preserve_domain_restriction"],
            steps: steps
        };
    }

    function rationalDomain(input) {
        var parts = rationalParts(input);
        if (!parts || !parts.dPoly || polyDegree(parts.dPoly) < 0) return null;
        var forbidden = rootsOfPolynomial(parts.dPoly);
        var answer = forbidden.length ? "all real x with " + C.restrictionOnly(forbidden) : "all real numbers";
        var steps = buildDenominatorRestrictionSteps(input, parts.dText, parts.dPoly, { include_domain_step: true });
        return nativePartial(input, "find_domain", "domain_analysis", "rational_domain_restrictions", answer, steps, { forbidden_values: forbidden.map(frac) });
    }

    NS.nativeSolvers.rational = { rationalSimplify: rationalSimplify, rationalDomain: rationalDomain };
})(window.AlgebraTrace);
