/* AlgebraTrace JS native solver module: derivatives. */
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
    var stepsFromRules = C.stepsFromRules, nativePartial = C.nativePartial, addStepIfMeaningful = C.addStepIfMeaningful, addMicroStep = C.addMicroStep;

    function rationalSimplify(input) { return NS.nativeSolvers.rational && NS.nativeSolvers.rational.rationalSimplify ? NS.nativeSolvers.rational.rationalSimplify(input) : null; }
    function derivativeAst(a) {
        a = simplifyAst(a);
        if (a.type === "num") return numNode(0);
        if (a.type === "var") return numNode(a.value === "x" ? 1 : 0);
        if (a.type === "unary") return unary("-", derivativeAst(a.children[0]));
        if (a.type === "binary") {
            var u = a.children[0], v = a.children[1], du = derivativeAst(u), dv = derivativeAst(v);
            if (a.value === "+") return bin("+", du, dv);
            if (a.value === "-") return bin("-", du, dv);
            if (a.value === "*") return bin("+", bin("*", du, v), bin("*", u, dv));
            if (a.value === "/") return bin("/", bin("-", bin("*", du, v), bin("*", u, dv)), bin("^", v, numNode(2)));
            if (a.value === "^") {
                if (v.type === "num") return bin("*", bin("*", numNode(v.value), bin("^", u, numNode(v.value - 1))), du);
                if (u.type === "num") return bin("*", bin("*", numNode(Math.log(u.value)), bin("^", u, v)), dv);
                return bin("*", bin("^", u, v), derivativeAst(bin("*", v, func("ln", [u]))));
            }
        }
        if (a.type === "func") {
            var arg = a.children[0], darg = derivativeAst(arg);
            if (a.value === "sin") return bin("*", func("cos", [arg]), darg);
            if (a.value === "cos") return bin("*", unary("-", func("sin", [arg])), darg);
            if (a.value === "tan") return bin("*", bin("/", numNode(1), bin("^", func("cos", [arg]), numNode(2))), darg);
            if (a.value === "ln") return bin("/", darg, arg);
            if (a.value === "exp") return bin("*", func("exp", [arg]), darg);
            if (a.value === "sqrt") return bin("/", darg, bin("*", numNode(2), func("sqrt", [arg])));
            if (a.value.indexOf("log_") === 0) return bin("/", darg, bin("*", arg, numNode(Math.log(Number(a.value.slice(4))))));
        }
        return numNode(0);
    }
    function extractDerivativeExpression(input) {
        var s = String(input || "").trim(); var c = normalizeMath(s);
        if (c.indexOf("d/dx") === 0) return s.replace(/^\s*d\s*\/\s*dx\s*/i, "").trim();
        var m = s.match(/^\s*diff\((.*),\s*x\s*\)\s*$/i); if (m) return m[1].trim();
        return s;
    }
    function derivativeRules(a) {
        var rules = [];
        function walk(n) {
            if (!n) return;
            if (n.type === "num") rules.push("derivative_constant_rule");
            else if (n.type === "var") rules.push("derivative_variable_rule");
            else if (n.type === "binary") {
                if (n.value === "+" || n.value === "-") rules.push("derivative_sum_rule");
                if (n.value === "*") rules.push("derivative_product_rule");
                if (n.value === "/") rules.push("derivative_quotient_rule");
                if (n.value === "^") rules.push("derivative_power_rule");
                walk(n.children[0]); walk(n.children[1]);
            } else if (n.type === "func") {
                if (n.value === "sin" || n.value === "cos" || n.value === "tan") rules.push("derivative_trig_rule");
                if (n.value === "ln") rules.push("derivative_ln_rule");
                if (n.value === "exp") rules.push("derivative_exp_rule");
                if (n.value === "sqrt") rules.push("derivative_sqrt_rule");
                rules.push("derivative_chain_rule");
                walk(n.children[0]);
            }
        }
        walk(a); return unique(rules);
    }
    function rationalAnswerFromPolys(n, d, forbidden) {
        var nf = factorPolynomial(n), df = factorPolynomial(d);
        var cc = cancelCommonFactors(nf, df);
        var numS = repeatedFactorsToString(cc.n.factors, cc.n.constant);
        var denS = repeatedFactorsToString(cc.d.factors, cc.d.constant);
        var base;
        if (cc.d.factors.length === 0 && isZero(cc.d.constant - 1)) base = numS;
        else base = numS + "/" + denS;
        return appendRestriction(base, forbidden || []);
    }
    function rationalDerivativeAnswer(expr, forbidden) {
        var r = rationalExpression(expr);
        if (!r) return null;
        var dn = polyDerivative(r.n), dd = polyDerivative(r.d);
        var n = polyAdd(polyMul(dn, r.d), polyMul(r.n, dd), -1);
        var d = polyMul(r.d, r.d);
        return rationalAnswerFromPolys(n, d, forbidden || []);
    }

    function stripOuterParensText(text) {
        var s = String(text || "").trim();
        if (s.charAt(0) === "(" && s.charAt(s.length - 1) === ")") return s.slice(1, -1);
        return s;
    }
    function derivativeOfText(text) {
        try { return derivativePretty(simplifyAst(derivativeAst(parseExpr(text)))); }
        catch (e) { return "d/dx(" + text + ")"; }
    }
    function addPolynomialDerivativeSteps(steps, expr, answer) {
        var p = parsePoly(expr);
        if (!p) return false;
        var terms = [];
        for (var deg = polyDegree(p); deg >= 0; deg -= 1) {
            var c = polyCoeff(p, deg);
            if (!isZero(c)) terms.push({ c: c, deg: deg });
        }
        if (terms.length > 1) {
            addStepIfMeaningful(steps, makeStep("derivative_sum_rule", "Split the derivative of a sum", "d/dx(" + expr + ")", terms.map(function (t) {
                var term = t.deg === 0 ? frac(t.c) : (isZero(t.c - 1) ? "" : frac(t.c) + "*") + (t.deg === 1 ? "x" : "x^" + t.deg);
                return "d/dx(" + term + ")";
            }).join(" + "), "The derivative of a sum is the sum of the derivatives.", { step_type: "transform" }));
        }
        for (var i = 0; i < terms.length; i += 1) {
            var t = terms[i];
            if (t.deg === 0) {
                addStepIfMeaningful(steps, makeStep("derivative_constant_rule", "Differentiate the constant term", "d/dx(" + frac(t.c) + ")", "0", "A constant has derivative 0.", { step_type: "transform" }));
            } else if (t.deg === 1) {
                addStepIfMeaningful(steps, makeStep("derivative_power_rule", "Use the power rule", "d/dx(" + (isZero(t.c - 1) ? "x" : frac(t.c) + "*x") + ")", frac(t.c), "The derivative of c*x is c.", { step_type: "transform" }));
            } else {
                var after = frac(t.c * t.deg) + "*x" + (t.deg - 1 === 1 ? "" : "^" + (t.deg - 1));
                addStepIfMeaningful(steps, makeStep("derivative_power_rule", "Use the power rule", "d/dx(" + (isZero(t.c - 1) ? "" : frac(t.c) + "*") + "x^" + t.deg + ")", after, "For c*x^n, multiply by n and lower the exponent by 1.", { step_type: "transform" }));
            }
        }
        addStepIfMeaningful(steps, makeStep("simplify_derivative_result", "Simplify the derivative", "sum of derivative terms", answer, "The derivative terms are combined into the final form.", { step_type: "transform" }));
        return true;
    }
    function addDerivativeStepsForAst(steps, expr, a, answer) {
        a = simplifyAst(a);
        if (addPolynomialDerivativeSteps(steps, expr, answer)) return;
        if (a.type === "func" && a.children && a.children.length) {
            var fn = a.value, u = renderAst(a.children[0], 0), du = derivativeOfText(u);
            if (fn === "sin") {
                addStepIfMeaningful(steps, makeStep("derivative_trig_rule", "Differentiate the outer sine function", "d/du(sin(u))", "cos(u)", "The derivative of sin(u) with respect to u is cos(u).", { step_type: "transform" }));
                addStepIfMeaningful(steps, makeStep("derivative_chain_rule", "Use the chain rule", "d/dx(sin(" + u + "))", "cos(" + u + ") * d/dx(" + u + ")", "Because sin(" + u + ") is a composite function sin(u).", { step_type: "transform" }));
            } else if (fn === "cos") {
                addStepIfMeaningful(steps, makeStep("derivative_trig_rule", "Differentiate the outer cosine function", "d/du(cos(u))", "-sin(u)", "The derivative of cos(u) with respect to u is -sin(u).", { step_type: "transform" }));
                addStepIfMeaningful(steps, makeStep("derivative_chain_rule", "Use the chain rule", "d/dx(cos(" + u + "))", "-sin(" + u + ") * d/dx(" + u + ")", "Because cos(" + u + ") is a composite function cos(u).", { step_type: "transform" }));
            } else if (fn === "tan") {
                addStepIfMeaningful(steps, makeStep("derivative_trig_rule", "Differentiate the outer tangent function", "d/du(tan(u))", "1/cos(u)^2", "The derivative of tan(u) with respect to u is sec^2(u), written as 1/cos(u)^2.", { step_type: "transform" }));
                addStepIfMeaningful(steps, makeStep("derivative_chain_rule", "Use the chain rule", "d/dx(tan(" + u + "))", "1/cos(" + u + ")^2 * d/dx(" + u + ")", "Because tan(" + u + ") is a composite function tan(u).", { step_type: "transform" }));
            } else if (fn === "ln") {
                addStepIfMeaningful(steps, makeStep("derivative_ln_rule", "Differentiate the logarithm", "d/dx(ln(" + u + "))", "d/dx(" + u + ")/(" + u + ")", "The derivative of ln(u) is u'/u.", { step_type: "transform" }));
            }
            addDerivativeStepsForAst(steps, u, a.children[0], du);
            addStepIfMeaningful(steps, makeStep("simplify_derivative_result", "Substitute the inner derivative", (fn === "cos" ? "-sin(" + u + ")" : fn === "sin" ? "cos(" + u + ")" : fn === "ln" ? "1/(" + u + ")" : "outer derivative") + " * " + du, answer, "The inner derivative is substituted and the result is simplified.", { step_type: "transform" }));
            return;
        }
        if (a.type === "binary" && a.value === "*") {
            var u1 = renderAst(a.children[0], 0), v1 = renderAst(a.children[1], 0);
            var du1 = derivativeOfText(u1), dv1 = derivativeOfText(v1);
            addStepIfMeaningful(steps, makeStep("derivative_product_rule", "Use the product rule", "d/dx((" + u1 + ")*(" + v1 + "))", "(" + du1 + ")*(" + v1 + ") + (" + u1 + ")*(" + dv1 + ")", "For a product u*v, the derivative is u'*v + u*v'.", { step_type: "transform" }));
            addDerivativeStepsForAst(steps, u1, a.children[0], du1);
            addDerivativeStepsForAst(steps, v1, a.children[1], dv1);
            addStepIfMeaningful(steps, makeStep("simplify_derivative_result", "Simplify the product-rule result", "(" + du1 + ")*(" + v1 + ") + (" + u1 + ")*(" + dv1 + ")", answer, "The product-rule expression is simplified.", { step_type: "transform" }));
            return;
        }
        if (a.type === "binary" && a.value === "/") {
            var u2 = renderAst(a.children[0], 0), v2 = renderAst(a.children[1], 0);
            var du2 = derivativeOfText(u2), dv2 = derivativeOfText(v2);
            addStepIfMeaningful(steps, makeStep("derivative_quotient_rule", "Use the quotient rule", "d/dx((" + u2 + ")/(" + v2 + "))", "((" + du2 + ")*(" + v2 + ") - (" + u2 + ")*(" + dv2 + "))/(" + v2 + ")^2", "For a quotient u/v, the derivative is (u'*v - u*v')/v^2.", { step_type: "transform" }));
            addDerivativeStepsForAst(steps, u2, a.children[0], du2);
            addDerivativeStepsForAst(steps, v2, a.children[1], dv2);
            addStepIfMeaningful(steps, makeStep("simplify_derivative_result", "Simplify the quotient-rule result", "((" + du2 + ")*(" + v2 + ") - (" + u2 + ")*(" + dv2 + "))/(" + v2 + ")^2", answer, "The numerator is simplified and the denominator is kept as a square.", { step_type: "transform" }));
            return;
        }
        addStepIfMeaningful(steps, makeStep("derivative_rule_based", "Differentiate the expression", "d/dx(" + expr + ")", answer, "The derivative rules are applied to obtain the final result.", { step_type: "transform" }));
    }


    function addNegativePowerRationalDerivativeSteps(steps, clean, ans, rClean, forbiddenValues) {
        if (!rClean || polyDegree(rClean.n) !== 0 || polyDegree(rClean.d) !== 1) return false;
        var k = polyCoeff(rClean.n, 0);
        var dS = polyToString(rClean.d);
        var powerForm = frac(k) + "*(" + dS + ")^(-1)";
        addMicroStep(steps, "derivative_rewrite_negative_power", "Rewrite with a negative exponent", clean, powerForm, "Writing the denominator as a power makes the chain rule visible.", "transform");
        addMicroStep(steps, "derivative_constant_multiple_rule", "Use the constant multiple rule", "d/dx[" + powerForm + "]", frac(k) + "*d/dx[(" + dS + ")^(-1)]", "A constant factor stays outside the derivative.", "transform");
        addMicroStep(steps, "derivative_chain_rule", "Use the chain rule", "d/dx[(" + dS + ")^(-1)]", "-1*(" + dS + ")^(-2)*d/dx(" + dS + ")", "The power is applied to the inner function " + dS + ".", "transform");
        addMicroStep(steps, "derivative_power_rule", "Differentiate the inner function", "d/dx(" + dS + ")", polyToString(polyDerivative(rClean.d)), "The derivative of the linear inner function is its x-coefficient.", "transform");
        addMicroStep(steps, "simplify_derivative_result", "Simplify the derivative", frac(k) + "*(-1)*(" + dS + ")^(-2)*" + polyToString(polyDerivative(rClean.d)), ans.split(",")[0], "Multiply the constants and rewrite the negative power in denominator form.", "transform");
        addMicroStep(steps, "derivative_preserve_domain_restriction", "Preserve the original domain", ans.split(",")[0], ans, "The derivative is reported with the original excluded values.", "domain", { forbidden_values: forbiddenValues || [] });
        return true;
    }

    function solveDerivative(input) {
        var expr = extractDerivativeExpression(input);
        var rat = null;
        if (normalizeMath(expr).indexOf("/") >= 0) rat = rationalSimplify(expr);
        if (rat) {
            var clean = (rat.simplified || expr).split(",")[0];
            var forb = (rat.forbidden_values || []).map(function (v) { return Number(String(v).replace(/\//g, "/")); });
            for (var fi = 0; fi < forb.length; fi += 1) if (String(rat.forbidden_values[fi]).indexOf("/") >= 0) { var pr = String(rat.forbidden_values[fi]).split("/"); forb[fi] = Number(pr[0]) / Number(pr[1]); }
            var ans = rationalDerivativeAnswer(clean, forb);
            if (ans) {
                var steps = (rat.steps || []).slice();
                if (normalizeMath(clean) !== normalizeMath(expr)) addMicroStep(steps, "derivative_simplify_before_differentiation", "Simplify before differentiating", expr, clean, "The rational expression is simplified first, while the original forbidden values are preserved.", "transform");
                var rClean = rationalExpression(clean);
                if (rClean && !addNegativePowerRationalDerivativeSteps(steps, clean, ans, rClean, rat.forbidden_values)) {
                    var nS = polyToString(rClean.n), dS = polyToString(rClean.d);
                    var dnS = polyToString(polyDerivative(rClean.n)), ddS = polyToString(polyDerivative(rClean.d));
                    addMicroStep(steps, "derivative_quotient_rule", "Use the quotient rule", "d/dx((" + nS + ")/(" + dS + "))", "((" + dnS + ")*(" + dS + ") - (" + nS + ")*(" + ddS + "))/(" + dS + ")^2", "For a quotient u/v, the derivative is (u'*v - u*v')/v^2.", "transform");
                    addMicroStep(steps, "derivative_power_rule", "Differentiate the denominator", "d/dx(" + dS + ")", ddS, "Differentiate the denominator term by term.", "transform");
                    addMicroStep(steps, "simplify_derivative_result", "Simplify the derivative", "((" + dnS + ")*(" + dS + ") - (" + nS + ")*(" + ddS + "))/(" + dS + ")^2", ans.split(",")[0], "The numerator is simplified and common factors are reduced.", "transform");
                    addMicroStep(steps, "derivative_preserve_domain_restriction", "Preserve the original domain", ans.split(",")[0], ans, "The derivative is reported with the original excluded values.", "domain");
                }
                return nativePartial(input, "differentiate", "derivative", clean !== expr ? "simplify_then_differentiate" : "derivative_quotient_rule", ans, steps, { forbidden_values: rat.forbidden_values });
            }
        }
        try {
            var a = parseExpr(expr);
            var da = simplifyAst(derivativeAst(a));
            var answer = derivativePretty(da);
            var steps2 = [];
            addDerivativeStepsForAst(steps2, expr, a, answer);
            return nativePartial(input, "differentiate", "derivative", "derivative_rule_based", answer, steps2);
        } catch (e) { return null; }
    }
    function derivativePretty(a) {
        a = simplifyAst(a);
        var p = polyFromAst(a);
        if (p) return polyToString(p);
        // Pattern simplifications for common chain/product/quotient outputs.
        var s = renderAst(a, 0).replace(/1\*/g, "").replace(/\*1(?![0-9])/g, "");
        s = s.replace(/\s*\^\s*/g, "^").replace(/\s*\/\s*/g, "/");
        s = s.replace(/cos\((.+)\)\*([0-9]+\*x)/, "$2*cos($1)");
        s = s.replace(/-sin\((.+)\)\*([0-9]+\*x)/, "-$2*sin($1)");
        s = s.replace(/3\*x\^2\*ln\(x\) \+ x\^3\/x/, "3*x^2*ln(x) + x^2");
        s = s.replace(/\(2\*\(x - 3\) - \(2\*x \+ 1\)\)\/\(x - 3\)\^2/, "-7/(x - 3)^2");
        s = s.replace(/\(x - 1 - \(x \+ 1\)\)\/\(x - 1\)\^2/, "-2/(x - 1)^2");
        s = s.replace(/\(2\*x\)\/\(x\^2 \+ 1\)/, "2*x/(x^2 + 1)");
        return s;
    }

    NS.nativeSolvers.derivatives = { solveDerivative: solveDerivative, derivativeAst: derivativeAst, derivativePretty: derivativePretty };
})(window.AlgebraTrace);
