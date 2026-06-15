/* AlgebraTrace JS native solver module: parameterized school problems.
 * Covers common school tasks with one main variable x and symbolic parameters.
 */
window.AlgebraTrace = window.AlgebraTrace || {};
(function (NS) {
    "use strict";
    var C = NS.nativeCore;
    if (!C) throw new Error("AlgebraTrace native core must be loaded before solver modules.");
    NS.nativeSolvers = NS.nativeSolvers || {};

    var makeStep = C.makeStep, nativePartial = C.nativePartial, cleanSteps = C.cleanSteps;
    var splitTopLevelRelation = C.splitTopLevelRelation;

    function normalize(s) {
        return String(s || "")
            .replace(/−/g, "-")
            .replace(/π/g, "pi")
            .replace(/\\cdot/g, "*")
            .replace(/\s+/g, "")
            .replace(/x\^\(2\)/g, "x^2")
            .replace(/x\^\{2\}/g, "x^2");
    }
    function stripOuter(s) {
        s = normalize(s);
        var changed = true;
        while (changed && s.length >= 2 && s.charAt(0) === "(" && s.charAt(s.length - 1) === ")") {
            changed = false;
            var depth = 0, ok = true;
            for (var i = 0; i < s.length; i += 1) {
                var ch = s.charAt(i);
                if (ch === "(") depth += 1;
                else if (ch === ")") depth -= 1;
                if (depth === 0 && i < s.length - 1) { ok = false; break; }
            }
            if (ok) { s = s.slice(1, -1); changed = true; }
        }
        return s;
    }
    function splitSignedTerms(s) {
        s = normalize(s);
        var out = [], start = 0, depth = 0;
        for (var i = 0; i < s.length; i += 1) {
            var ch = s.charAt(i);
            if (ch === "(") depth += 1;
            else if (ch === ")") depth -= 1;
            if (depth === 0 && i > 0 && (ch === "+" || ch === "-")) {
                out.push(s.slice(start, i)); start = i;
            }
        }
        if (start < s.length) out.push(s.slice(start));
        return out.filter(Boolean);
    }
    function signed(term, sign) {
        term = stripOuter(term);
        if (!term || term === "0") return "0";
        var neg = term.charAt(0) === "-";
        if (neg) term = term.slice(1);
        if (sign < 0) neg = !neg;
        if (term === "1") return neg ? "-1" : "1";
        return neg ? "-" + term : term;
    }
    function negate(s) {
        s = stripOuter(s);
        if (!s || s === "0") return "0";
        if (s.charAt(0) === "-") return s.slice(1);
        if (/^[A-Za-z0-9_.]+$/.test(s)) return "-" + s;
        return "-(" + s + ")";
    }
    function addExpr(parts) {
        parts = (parts || []).map(stripOuter).filter(function (p) { return p && p !== "0"; });
        if (!parts.length) return "0";
        var out = parts[0];
        for (var i = 1; i < parts.length; i += 1) {
            out += parts[i].charAt(0) === "-" ? " - " + parts[i].slice(1) : " + " + parts[i];
        }
        return out.replace(/\+ -/g, "- ");
    }
    function product(a, b) {
        a = stripOuter(a); b = stripOuter(b);
        if (a === "0" || b === "0") return "0";
        if (a === "1") return b;
        if (b === "1") return a;
        if (a === "-1") return negate(b);
        if (b === "-1") return negate(a);
        return a + "*" + b;
    }
    function quotient(n, d) {
        n = stripOuter(n); d = stripOuter(d);
        if (d === "1") return n;
        if (n === "0") return "0";
        return "(" + n + ")/(" + d + ")";
    }
    function hasParameter(input) {
        var s = normalize(input).replace(/sin|cos|tan|cot|ctg|sec|csc|log|ln|sqrt|exp|limit|integrate|infinity|pi|dx|d\//g, "");
        var ids = s.match(/[A-Za-z]+/g) || [];
        for (var i = 0; i < ids.length; i += 1) {
            if (ids[i] !== "x") return true;
        }
        return false;
    }
    function cleanCoeff(s) {
        s = stripOuter(s).replace(/^\*/, "").replace(/\*$/, "");
        if (!s || s === "+") return "1";
        if (s === "-") return "-1";
        if (s === "+1") return "1";
        return s;
    }
    function removeXFactor(term, power) {
        term = stripOuter(term);
        if (power === 2) {
            term = term.replace(/x\^2/g, "").replace(/x\^\(2\)/g, "");
        } else {
            term = term.replace(/x(?![A-Za-z0-9_])/g, "");
        }
        term = term.replace(/\*\*/g, "*").replace(/^\*/, "").replace(/\*$/, "");
        return cleanCoeff(term);
    }
    function classifyTerm(term) {
        term = stripOuter(term);
        var sign = 1;
        if (term.charAt(0) === "+") term = term.slice(1);
        else if (term.charAt(0) === "-") { sign = -1; term = term.slice(1); }
        if (/x\^\(?2\)?/.test(term)) return { degree:2, coeff:signed(removeXFactor(term, 2), sign) };
        if (/x/.test(term)) return { degree:1, coeff:signed(removeXFactor(term, 1), sign) };
        return { degree:0, coeff:signed(term, sign) };
    }
    function collectPolynomial(lhs, rhs) {
        var coeffs = { 2:[], 1:[], 0:[] };
        function addSide(expr, sideSign) {
            splitSignedTerms(expr).forEach(function (term) {
                var c = classifyTerm(term);
                coeffs[c.degree].push(signed(c.coeff, sideSign));
            });
        }
        addSide(lhs, 1);
        addSide(rhs, -1);
        return { A:addExpr(coeffs[2]), B:addExpr(coeffs[1]), C:addExpr(coeffs[0]) };
    }
    function isZeroText(s) { return stripOuter(s) === "0"; }
    function isOneText(s) { return stripOuter(s) === "1"; }
    function linearSolution(A, B) {
        A = stripOuter(A); B = stripOuter(B);
        if (isOneText(A)) return negate(B);
        return quotient(negate(B), A);
    }
    function coefficientSummary(p) {
        var rows = [];
        if (!isZeroText(p.A)) rows.push("A = " + p.A);
        rows.push("B = " + p.B);
        rows.push("C = " + p.C);
        return rows.join("; ");
    }
    function simpleSquareParameter(p) {
        if (!isOneText(p.A) || !isZeroText(p.B)) return null;
        var rhs = negate(p.C);
        if (!/[A-Za-z]/.test(rhs)) return null;
        return rhs;
    }
    function solveParameterized(input, action) {
        action = action || "solve_with_parameters";
        var rel = splitTopLevelRelation(input);
        if (!rel || rel.op !== "=" || !hasParameter(input)) return null;
        var p = collectPolynomial(rel.left, rel.right);
        var steps = [];
        steps.push(makeStep("detect_main_variable_and_parameters", "Detect the main variable and parameters", input, "main variable: x; parameters: all other letters", "The solver treats x as the unknown and the other letters as parameters.", { step_type:"classification" }));
        steps.push(makeStep("move_terms_to_one_side", "Move all terms to one side", input, (isZeroText(p.A) ? "" : p.A + "*x^2 + ") + p.B + "*x + " + p.C + " = 0", "The equation is rewritten as a polynomial in x with parameter-dependent coefficients.", { step_type:"transform" }));

        var answer, strategy;
        if (isZeroText(p.A)) {
            var x = linearSolution(p.B, p.C);
            strategy = "parameterized_linear_equation_cases";
            answer = "if " + p.B + " ≠ 0: x = " + x + "; if " + p.B + " = 0 and " + p.C + " = 0: every real x; if " + p.B + " = 0 and " + p.C + " ≠ 0: no solution";
            steps.push(makeStep("separate_linear_parameter_cases", "Separate the coefficient cases", p.B + "*x + " + p.C + " = 0", answer, "A linear equation with a parameter must distinguish the case when the coefficient of x is zero.", { step_type:"reasoning", coefficient:p.B, constant:p.C }));
            return nativePartial(input, action, "parameterized_linear_equation", strategy, answer, cleanSteps(steps), { parameters:true, coefficient_of_x:p.B, constant_term:p.C });
        }

        var square = simpleSquareParameter(p);
        if (square) {
            strategy = "parameterized_square_equation_cases";
            answer = "if " + square + " > 0: x = -sqrt(" + square + ") or x = sqrt(" + square + "); if " + square + " = 0: x = 0; if " + square + " < 0: no real solution";
            steps.push(makeStep("reduce_to_square_equation", "Isolate x^2", "x^2 + " + p.C + " = 0", "x^2 = " + square, "The equation has the form x^2 = parameter expression.", { step_type:"transform" }));
            steps.push(makeStep("split_parameter_sign_cases", "Split by the sign of the parameter", "x^2 = " + square, answer, "A real square is non-negative, so the number of real roots depends on the sign of the parameter expression.", { step_type:"reasoning", parameter_expression:square }));
            return nativePartial(input, action, "parameterized_quadratic_equation", strategy, answer, cleanSteps(steps), { parameters:true, parameter_expression:square });
        }

        var D = addExpr([product(p.B, p.B), negate(product("4", product(p.A, p.C)))]);
        var denom = product("2", p.A);
        var root1 = quotient(addExpr([negate(p.B), "-sqrt(" + D + ")"]), denom);
        var root2 = quotient(addExpr([negate(p.B), "sqrt(" + D + ")"]), denom);
        strategy = "parameterized_quadratic_discriminant_cases";
        answer = "if " + p.A + " ≠ 0 and D > 0: x = " + root1 + " or x = " + root2 + "; if " + p.A + " ≠ 0 and D = 0: x = " + quotient(negate(p.B), denom) + "; if " + p.A + " ≠ 0 and D < 0: no real solution; where D = " + D + "; if " + p.A + " = 0, solve the linear case " + p.B + "*x + " + p.C + " = 0";
        steps.push(makeStep("identify_parameterized_coefficients", "Identify the coefficients", (isZeroText(p.A) ? "" : p.A + "*x^2 + ") + p.B + "*x + " + p.C + " = 0", coefficientSummary(p), "The coefficients may depend on parameters, so they are kept symbolically.", { step_type:"classification", A:p.A, B:p.B, C:p.C }));
        steps.push(makeStep("compute_discriminant", "Compute the discriminant", "D = B^2 - 4*A*C", "D = " + D, "The discriminant determines the number of real roots of a quadratic equation.", { step_type:"transform", discriminant:D }));
        steps.push(makeStep("split_discriminant_cases", "Split by A and D", "A = " + p.A + "; D = " + D, answer, "A parameterized quadratic also needs the degenerate case A = 0, where the equation becomes linear.", { step_type:"reasoning" }));
        return nativePartial(input, action, "parameterized_quadratic_equation", strategy, answer, cleanSteps(steps), { parameters:true, A:p.A, B:p.B, C:p.C, discriminant:D });
    }

    NS.nativeSolvers.parameters = {
        hasParameter: hasParameter,
        solveParameterized: solveParameterized
    };
})(window.AlgebraTrace);
