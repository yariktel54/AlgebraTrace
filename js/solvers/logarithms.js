/* AlgebraTrace JS native solver module: logarithms.
 * Native, offline, rule-based support for logarithmic expressions,
 * properties, equations, inequalities, and domains.
 */
window.AlgebraTrace = window.AlgebraTrace || {};
(function (NS) {
    "use strict";
    var C = NS.nativeCore;
    if (!C) throw new Error("AlgebraTrace native core must be loaded before solver modules.");
    NS.nativeSolvers = NS.nativeSolvers || {};

    var EPS = C.EPS;
    var isZero = C.isZero, round = C.round, frac = C.frac;
    var normalizeMath = C.normalizeMath, displayNumber = C.displayNumber;
    var makeStep = C.makeStep, nativePartial = C.nativePartial;
    var parsePoly = C.parsePoly, polyDegree = C.polyDegree, polyCoeff = C.polyCoeff, polyEval = C.polyEval, polyMul = C.polyMul, polyAdd = C.polyAdd, polyToString = C.polyToString;
    var quadraticRootObjects = C.quadraticRootObjects, rootsOfPolynomial = C.rootsOfPolynomial;
    var splitTopLevelRelation = C.splitTopLevelRelation;

    function trim(s) { return String(s === undefined || s === null ? "" : s).trim(); }
    function compact(s) { return normalizeLogSyntax(String(s || "")).replace(/\s+/g, ""); }
    function stripOuterParens(s) {
        s = trim(s);
        var changed = true;
        while (changed && s.charAt(0) === "(" && s.charAt(s.length - 1) === ")") {
            changed = false;
            var depth = 0, ok = true;
            for (var i = 0; i < s.length; i += 1) {
                var ch = s.charAt(i);
                if (ch === "(") depth += 1;
                else if (ch === ")") depth -= 1;
                if (depth === 0 && i < s.length - 1) { ok = false; break; }
            }
            if (ok) { s = trim(s.slice(1, -1)); changed = true; }
        }
        return s;
    }
    function matchingParen(s, openIndex) {
        var depth = 0;
        for (var i = openIndex; i < s.length; i += 1) {
            var ch = s.charAt(i);
            if (ch === "(") depth += 1;
            else if (ch === ")") {
                depth -= 1;
                if (depth === 0) return i;
            }
        }
        return -1;
    }
    function splitTopLevelList(s, delimiter) {
        var out = [], start = 0, depth = 0;
        s = String(s || "");
        for (var i = 0; i < s.length; i += 1) {
            var ch = s.charAt(i);
            if (ch === "(") depth += 1;
            else if (ch === ")") depth -= 1;
            else if (depth === 0 && ch === delimiter) { out.push(s.slice(start, i)); start = i + 1; }
        }
        out.push(s.slice(start));
        return out.map(trim);
    }
    function findTopLevelOp(s, ops, fromRight) {
        var depth = 0, start = fromRight ? s.length - 1 : 0, end = fromRight ? -1 : s.length, step = fromRight ? -1 : 1;
        for (var i = start; i !== end; i += step) {
            var ch = s.charAt(i);
            if (fromRight) {
                if (ch === ")") depth += 1;
                else if (ch === "(") depth -= 1;
            } else {
                if (ch === "(") depth += 1;
                else if (ch === ")") depth -= 1;
            }
            if (depth === 0 && ops.indexOf(ch) >= 0) {
                if ((ch === "+" || ch === "-") && i === 0) continue;
                return i;
            }
        }
        return -1;
    }
    function normalizeLogSyntax(text) {
        var s = String(text || "")
            .replace(/\u2212/g, "-")
            .replace(/π/g, "pi")
            .replace(/≤/g, "<=")
            .replace(/≥/g, ">=")
            .replace(/\s+/g, "");
        // log2(x), log10(x), log0.5(x) -> log_2(x), log_10(x), log_0.5(x)
        s = s.replace(/\blog(\d+(?:\.\d+)?)\s*\(/gi, "log_$1(");
        return s;
    }
    function parseBaseValue(baseText) {
        baseText = trim(baseText).replace(/^\+/, "");
        if (/^e$/i.test(baseText)) return Math.E;
        if (/^pi$/i.test(baseText)) return Math.PI;
        var parts = baseText.split("/");
        if (parts.length === 2) return Number(parts[0]) / Number(parts[1]);
        return Number(baseText);
    }
    function baseDisplay(baseText) {
        baseText = trim(baseText);
        if (/^e$/i.test(baseText)) return "e";
        return baseText;
    }
    function powerText(baseText, exponentText) {
        return baseDisplay(baseText) + "^" + (/[+\-*/]/.test(exponentText) ? "(" + exponentText + ")" : exponentText);
    }
    function logText(baseText, argText, natural) {
        if (natural || baseText === "e") return "ln(" + argText + ")";
        return "log_" + baseDisplay(baseText) + "(" + argText + ")";
    }
    function formatPowerValue(baseText, exponentText) {
        var v = Math.pow(parseBaseValue(baseText), Number(exponentText));
        return frac(v);
    }
    function parseLogCall(s) {
        s = stripOuterParens(compact(s));
        var m;
        if ((m = s.match(/^ln\((.*)\)$/i))) {
            return { kind:"log", natural:true, baseText:"e", baseValue:Math.E, arg:m[1], raw:s, normalized:"ln(" + m[1] + ")" };
        }
        if ((m = s.match(/^log_([^()]+)\((.*)\)$/i))) {
            var bv = parseBaseValue(m[1]);
            if (!(bv > 0) || isZero(bv - 1)) return null;
            return { kind:"log", natural:false, baseText:m[1], baseValue:bv, arg:m[2], raw:s, normalized:"log_" + m[1] + "(" + m[2] + ")" };
        }
        if ((m = s.match(/^log\((.*)\)$/i))) {
            var args = splitTopLevelList(m[1], ",");
            if (args.length === 1) return { kind:"log", natural:false, baseText:"10", baseValue:10, arg:args[0], raw:s, normalized:"log_10(" + args[0] + ")" };
            if (args.length === 2) {
                var b = parseBaseValue(args[1]);
                if (!(b > 0) || isZero(b - 1)) return null;
                return { kind:"log", natural:false, baseText:args[1], baseValue:b, arg:args[0], raw:s, normalized:"log_" + args[1] + "(" + args[0] + ")" };
            }
        }
        return null;
    }
    function splitAdditiveLogs(s) {
        s = compact(s);
        var out = [], start = 0, depth = 0, sign = "+";
        for (var i = 0; i < s.length; i += 1) {
            var ch = s.charAt(i);
            if (ch === "(") depth += 1;
            else if (ch === ")") depth -= 1;
            if (depth === 0 && i > 0 && (ch === "+" || ch === "-")) {
                out.push({ sign:sign, text:s.slice(start, i) });
                sign = ch;
                start = i + 1;
            }
        }
        out.push({ sign:sign, text:s.slice(start) });
        return out;
    }
    function findPowerOfBase(arg, baseValue) {
        var raw = trim(arg);
        if (/^e$/i.test(raw) && isZero(baseValue - Math.E)) return { exponent:"1", rewritten:"e^1" };
        var n = Number(raw);
        if (!isFinite(n)) {
            if (/^1$/.test(raw)) n = 1;
            else return null;
        }
        if (!(n > 0)) return null;
        for (var k = -24; k <= 24; k += 1) {
            if (isZero(Math.pow(baseValue, k) - n)) return { exponent:String(k), rewritten:displayNumber(baseValue) + "^" + k };
        }
        var value = Math.log(n) / Math.log(baseValue);
        if (Math.abs(value - Math.round(value)) < 1e-8) return { exponent:String(Math.round(value)), rewritten:displayNumber(baseValue) + "^" + Math.round(value) };
        return null;
    }
    function parseLogArgAsBasePower(call) {
        var arg = stripOuterParens(call.arg);
        var powIndex = findTopLevelOp(arg, "^", false);
        if (powIndex > 0) {
            var base = stripOuterParens(arg.slice(0, powIndex));
            var exp = stripOuterParens(arg.slice(powIndex + 1));
            var baseNum = /^e$/i.test(base) ? Math.E : Number(base);
            if ((isFinite(baseNum) && isZero(baseNum - call.baseValue)) || (call.natural && /^e$/i.test(base))) return { exponent:exp, rewritten:powerText(call.baseText, exp) };
        }
        return null;
    }
    function resultWith(input, action, task, strategy, answer, steps, extra) {
        extra = extra || {};
        extra.available_actions = extra.available_actions || (NS.detectActions ? NS.detectActions(input) : [action]);
        return nativePartial(input, action, task, strategy, answer, steps, extra);
    }
    function step(rule, title, before, after, explanation, type, details) {
        details = details || {};
        details.step_type = type || details.step_type || "transform";
        return makeStep(rule, title, before, after, explanation, details);
    }

    function simplifyLogExpression(input) {
        var s = compact(input);
        var call = parseLogCall(s);
        var steps = [], ans, pwr;
        if (call) {
            var arg = stripOuterParens(call.arg);
            if (arg === "1") {
                ans = "0";
                steps.push(step("log_identity_one", "Use the logarithm identity for 1", call.normalized, ans, "For every valid base a, log_a(1) = 0."));
                steps.push(step("log_simplify_numeric", "Simplify the numeric logarithm", input, ans, "The logarithmic identity gives the final numeric value.", "reasoning"));
                return resultWith(input, "simplify", "logarithmic_expression", "logarithm_simplification", ans, steps);
            }
            if ((call.natural && /^e$/i.test(arg)) || (!call.natural && isZero(Number(arg) - call.baseValue))) {
                ans = "1";
                steps.push(step(call.natural ? "ln_exp_inverse_identity" : "log_identity_base", "Use the logarithm identity for its base", call.normalized, ans, "A logarithm of its own base equals 1."));
                steps.push(step("log_simplify_numeric", "Simplify the numeric logarithm", input, ans, "The logarithmic identity gives the final numeric value.", "reasoning"));
                return resultWith(input, "simplify", "logarithmic_expression", "logarithm_simplification", ans, steps);
            }
            pwr = parseLogArgAsBasePower(call);
            if (pwr) {
                ans = pwr.exponent;
                steps.push(step(call.natural ? "ln_exp_inverse_identity" : "log_power_identity", "Use inverse logarithm and power identity", call.normalized, ans, "The logarithm and the matching exponential base undo each other."));
                return resultWith(input, "simplify", "logarithmic_expression", "logarithm_simplification", ans, steps);
            }
            pwr = findPowerOfBase(arg, call.baseValue);
            if (pwr) {
                var rewrittenPower = powerText(call.baseText, pwr.exponent);
                ans = pwr.exponent;
                steps.push(step("log_rewrite_argument_as_power", "Rewrite the argument as a power of the base", arg, rewrittenPower, "Since " + arg + " = " + rewrittenPower + ", the logarithm can be simplified."));
                steps.push(step("log_same_base_simplification", "Use the logarithm identity", logText(call.baseText, rewrittenPower, call.natural), ans, "For base a > 0 and a ≠ 1, log_a(a^k) = k."));
                steps.push(step("log_simplify_numeric", "Simplify the numeric logarithm", input, ans, "The logarithmic expression has been evaluated exactly.", "reasoning"));
                return resultWith(input, "simplify", "logarithmic_expression", "logarithm_simplification", ans, steps);
            }
        }
        // a^(log_a(x)) and e^(ln(x)) inverse forms.
        var expMatch = s.match(/^([^()^]+)\^\((.+)\)$/);
        if (expMatch) {
            var baseText = expMatch[1], inner = parseLogCall(expMatch[2]);
            if (inner) {
                var baseVal = parseBaseValue(baseText);
                if ((inner.natural && /^e$/i.test(baseText)) || isZero(baseVal - inner.baseValue)) {
                    ans = inner.arg;
                    steps.push(step(inner.natural ? "ln_exp_inverse_identity" : "log_exponential_inverse_identity", "Use inverse exponential and logarithm", s, ans, "An exponential and logarithm with the same base undo each other."));
                    return resultWith(input, "simplify", "logarithmic_expression", "logarithm_simplification", ans, steps);
                }
            }
        }
        var combined = combineLogarithms(input);
        if (combined) return combined;
        var expanded = expandLogarithm(input);
        if (expanded && expanded.answer !== input) return expanded;
        return null;
    }

    function expandLogarithm(input) {
        var s = compact(input);
        var call = parseLogCall(s);
        if (!call) return null;
        var arg = stripOuterParens(call.arg), steps = [], ans;
        var div = findTopLevelOp(arg, "/", false);
        if (div > 0) {
            var n = stripOuterParens(arg.slice(0, div));
            var d = stripOuterParens(arg.slice(div + 1));
            var nExpanded = expandArgLog(call.baseText, n, call.natural);
            var dExpanded = expandArgLog(call.baseText, d, call.natural);
            ans = nExpanded + " - " + dExpanded;
            steps.push(step("log_quotient_rule", "Use the logarithm quotient rule", call.normalized, ans, "The logarithm of a quotient is the difference of the logarithms."));
            if (ans.indexOf("2*") >= 0 || ans.indexOf("^") < 0) steps.push(step("log_power_rule", "Use the logarithm power rule where needed", call.normalized, ans, "A power inside a logarithm can be moved in front as a coefficient.", "reasoning"));
            return resultWith(input, "expand_logarithm", "logarithmic_expression", "logarithm_expansion", ans, steps);
        }
        var mul = findTopLevelOp(arg, "*", false);
        if (mul > 0) {
            var a = stripOuterParens(arg.slice(0, mul));
            var b = stripOuterParens(arg.slice(mul + 1));
            ans = expandArgLog(call.baseText, a, call.natural) + " + " + expandArgLog(call.baseText, b, call.natural);
            steps.push(step("log_product_rule", "Use the logarithm product rule", call.normalized, ans, "The logarithm of a product is the sum of the logarithms."));
            return resultWith(input, "expand_logarithm", "logarithmic_expression", "logarithm_expansion", ans, steps);
        }
        var pow = findTopLevelOp(arg, "^", false);
        if (pow > 0) {
            var base = stripOuterParens(arg.slice(0, pow));
            var exponent = stripOuterParens(arg.slice(pow + 1));
            ans = exponent + "*" + logText(call.baseText, base, call.natural);
            steps.push(step("log_power_rule", "Use the logarithm power rule", call.normalized, ans, "The exponent of the argument becomes a coefficient in front of the logarithm."));
            return resultWith(input, "expand_logarithm", "logarithmic_expression", "logarithm_expansion", ans, steps);
        }
        return null;
    }
    function expandArgLog(baseText, arg, natural) {
        arg = stripOuterParens(arg);
        var pow = findTopLevelOp(arg, "^", false);
        if (pow > 0) return stripOuterParens(arg.slice(pow + 1)) + "*" + logText(baseText, stripOuterParens(arg.slice(0, pow)), natural);
        return logText(baseText, arg, natural);
    }

    function combineLogarithms(input) {
        var terms = splitAdditiveLogs(input);
        if (terms.length < 2) return null;
        var baseText = null, natural = false, args = [], steps = [];
        for (var i = 0; i < terms.length; i += 1) {
            var call = parseLogCall(terms[i].text);
            if (!call) return null;
            if (baseText === null) { baseText = call.baseText; natural = call.natural; }
            if (parseBaseValue(baseText) !== parseBaseValue(call.baseText)) return null;
            args.push({ sign:terms[i].sign, arg:call.arg });
        }
        var numerator = [], denominator = [];
        args.forEach(function (t) { (t.sign === "-" ? denominator : numerator).push(stripOuterParens(t.arg)); });
        var argText = numerator.join("*") || "1";
        if (denominator.length) argText = "(" + argText + ")/(" + denominator.join("*") + ")";
        var ans = logText(baseText, argText, natural);
        steps.push(step("log_same_base_check", "Check that the logarithms have the same base", input, "same base " + baseDisplay(baseText), "Logarithms can be combined only when their bases match.", "reasoning"));
        steps.push(step("log_product_rule_reverse", "Combine logarithms", input, ans, "A sum of logarithms with the same base becomes the logarithm of the product of their arguments."));
        steps.push(step("log_domain_restriction", "Keep logarithm domain restrictions", input, "each logarithm argument must be > 0", "The reverse product rule is valid on the common domain where all log arguments are positive.", "domain"));
        return resultWith(input, "combine_logarithms", "logarithmic_expression", "logarithm_combination", ans, steps);
    }

    function scanLogCalls(text) {
        var s = compact(text), calls = [];
        for (var i = 0; i < s.length; i += 1) {
            var isLn = /^ln\(/i.test(s.slice(i));
            var isLog = /^log(?:_[^()]+)?\(/i.test(s.slice(i));
            if (!isLn && !isLog) continue;
            var open = s.indexOf("(", i);
            var close = matchingParen(s, open);
            if (close < 0) continue;
            var raw = s.slice(i, close + 1);
            var call = parseLogCall(raw);
            if (call) calls.push(call);
            i = close;
        }
        return calls;
    }
    function linearDomainBound(arg) {
        var p = parsePoly(arg);
        if (!p || polyDegree(p) > 1) return null;
        var a = polyCoeff(p, 1), b = polyCoeff(p, 0);
        if (polyDegree(p) === 0) return { kind: polyCoeff(p, 0) > 0 ? "all" : "empty", text: polyToString(p) + " > 0" };
        var root = -b / a;
        return { lower:a > 0 ? root : null, upper:a < 0 ? root : null, inequality:polyToString(p) + " > 0", solution:"x " + (a > 0 ? "> " : "< ") + frac(root), root:root };
    }
    function combineBounds(bounds, intervalMode) {
        var lower = -Infinity, upper = Infinity;
        for (var i = 0; i < bounds.length; i += 1) {
            if (bounds[i].lower !== null && bounds[i].lower !== undefined) lower = Math.max(lower, bounds[i].lower);
            if (bounds[i].upper !== null && bounds[i].upper !== undefined) upper = Math.min(upper, bounds[i].upper);
        }
        if (lower === -Infinity && upper === Infinity) return "all real x";
        if (lower !== -Infinity && upper !== Infinity) return intervalMode ? "x ∈ (" + frac(lower) + ", " + frac(upper) + ")" : frac(lower) + " < x < " + frac(upper);
        if (lower !== -Infinity) return intervalMode ? "x ∈ (" + frac(lower) + ", +∞)" : "x > " + frac(lower);
        return intervalMode ? "x ∈ (-∞, " + frac(upper) + ")" : "x < " + frac(upper);
    }
    function domainForLogExpression(input, explicitAction) {
        var calls = scanLogCalls(input);
        if (!calls.length) return null;
        var bounds = [], steps = [];
        calls.forEach(function (call) {
            var b = linearDomainBound(call.arg);
            steps.push(step("log_domain_restriction", "Set the logarithm argument greater than zero", call.arg, call.arg + " > 0", "A logarithm is defined only when its argument is positive.", "domain"));
            if (b && b.solution) {
                steps.push(step("solve_log_argument_inequality", "Solve the argument inequality", call.arg + " > 0", b.solution, "Solving the inequality gives the allowed values for this logarithm.", "transform"));
                bounds.push(b);
            }
        });
        var answer = combineBounds(bounds, false);
        if (bounds.length > 1) steps.push(step("log_domain_intersection", "Intersect the logarithm domains", bounds.map(function (b) { return b.solution; }).join("; "), answer, "All logarithm arguments must be positive at the same time.", "reasoning"));
        return resultWith(input, explicitAction || "find_domain", "logarithmic_expression", "logarithm_domain", answer, steps);
    }

    function solveLinearEquationFromPolyText(lhs, rhsValue) {
        var p = parsePoly(lhs);
        if (!p || polyDegree(p) !== 1) return null;
        return (rhsValue - polyCoeff(p, 0)) / polyCoeff(p, 1);
    }
    function domainBoundsForCalls(calls, steps) {
        var bounds = [];
        calls.forEach(function (call) {
            var b = linearDomainBound(call.arg);
            steps.push(step("log_domain_restriction", "Determine the logarithm domain", call.arg, call.arg + " > 0", "The argument of each logarithm must be positive.", "domain"));
            if (b && b.solution) { steps.push(step("solve_log_argument_inequality", "Solve the domain inequality", call.arg + " > 0", b.solution, "This gives one part of the domain.", "transform")); bounds.push(b); }
        });
        if (bounds.length > 1) steps.push(step("log_domain_intersection", "Intersect the domain restrictions", bounds.map(function (b) { return b.solution; }).join("; "), combineBounds(bounds, false), "The solution must satisfy all logarithm domain restrictions.", "reasoning"));
        return bounds;
    }
    function relationNumberSide(rel) {
        var leftNum = Number(rel.left), rightNum = Number(rel.right);
        if (isFinite(rightNum)) return { logSide:rel.left, num:rightNum, flipped:false };
        if (isFinite(leftNum)) return { logSide:rel.right, num:leftNum, flipped:true };
        return null;
    }
    function solveSimpleLogEquation(input, rel) {
        if (rel.op !== "=") return null;
        var side = relationNumberSide({ left:compact(rel.left), right:compact(rel.right), op:rel.op });
        if (!side) return null;
        var call = parseLogCall(side.logSide);
        if (!call) return null;
        var steps = [];
        domainBoundsForCalls([call], steps);
        var pwr = powerText(call.baseText, String(side.num));
        var rhsValue = Math.pow(call.baseValue, side.num);
        var expEq = call.arg + " = " + pwr;
        steps.push(step("log_convert_to_exponential_form", "Convert logarithmic form to exponential form", call.normalized + " = " + side.num, expEq, "If log_a(M) = k, then M = a^k."));
        steps.push(step("evaluate_power", "Evaluate the power", pwr, frac(rhsValue), "The exponential value is evaluated before solving the equation.", "reasoning"));
        var x = solveLinearEquationFromPolyText(call.arg, rhsValue);
        if (x === null) return null;
        var ans = "x = " + frac(x);
        steps.push(step("solve_linear_equation", "Solve the linear equation", call.arg + " = " + frac(rhsValue), ans, "Isolate x in the resulting linear equation."));
        steps.push(step("log_equation_domain_check", "Check the solution in the domain", ans, ans, "The solution satisfies the logarithm domain restriction.", "check", { candidate:frac(x) }));
        return resultWith(input, "solve", "logarithmic_equation", "logarithmic_equation", ans, steps);
    }
    function solveSameBaseLogEquation(input, rel) {
        if (rel.op !== "=") return null;
        var left = parseLogCall(rel.left), right = parseLogCall(rel.right);
        if (!left || !right || !isZero(left.baseValue - right.baseValue)) return null;
        var steps = [];
        domainBoundsForCalls([left, right], steps);
        var eq = left.arg + " = " + right.arg;
        steps.push(step("log_same_base_equation", "Use the one-to-one property of logarithms", input, eq, "With the same valid base, equal logarithms have equal arguments."));
        var pa = parsePoly(left.arg), pb = parsePoly(right.arg);
        if (!pa || !pb) return null;
        var diff = polyAdd(pa, pb, -1);
        if (polyDegree(diff) !== 1) return null;
        var x = -polyCoeff(diff, 0) / polyCoeff(diff, 1);
        var ans = "x = " + frac(x);
        steps.push(step("solve_linear_equation", "Solve the linear equation", eq, ans, "Isolate x in the argument equation."));
        steps.push(step("log_equation_domain_check", "Check the solution in the logarithm domain", ans, ans, "The solution makes every logarithm argument positive.", "check"));
        return resultWith(input, "solve", "logarithmic_equation", "same_base_logarithmic_equation", ans, steps);
    }
    function solveProductLogEquation(input, rel) {
        if (rel.op !== "=") return null;
        var rightVal = Number(compact(rel.right));
        if (!isFinite(rightVal)) return null;
        var terms = splitAdditiveLogs(rel.left);
        if (terms.length !== 2 || terms[0].sign !== "+" || terms[1].sign !== "+") return null;
        var a = parseLogCall(terms[0].text), b = parseLogCall(terms[1].text);
        if (!a || !b || !isZero(a.baseValue - b.baseValue)) return null;
        var pA = parsePoly(a.arg), pB = parsePoly(b.arg);
        if (!pA || !pB) return null;
        var steps = [];
        var bounds = domainBoundsForCalls([a, b], steps);
        var combinedArg = "(" + a.arg + ")*(" + b.arg + ")";
        var combined = logText(a.baseText, combinedArg, a.natural) + " = " + frac(rightVal);
        steps.push(step("log_product_rule_reverse", "Combine logarithms with the product rule", rel.left + " = " + rel.right, combined, "The sum of same-base logarithms becomes one logarithm of the product."));
        var pwr = powerText(a.baseText, String(rightVal));
        steps.push(step("log_convert_to_exponential_form", "Convert to exponential form", combined, combinedArg + " = " + pwr, "If log_a(M) = k, then M = a^k."));
        var rhsValue = Math.pow(a.baseValue, rightVal);
        steps.push(step("evaluate_power", "Evaluate the power", pwr, frac(rhsValue), "The power on the right side is evaluated.", "reasoning"));
        var prod = polyMul(pA, pB);
        var equationPoly = polyAdd(prod, { 0: rhsValue }, -1);
        var expanded = polyToString(equationPoly) + " = 0";
        steps.push(step("expand_product", "Expand and move all terms to one side", combinedArg + " = " + frac(rhsValue), expanded, "The product is expanded and the equation is written as a quadratic."));
        var roots = quadraticRootObjects(equationPoly);
        if (!roots.length) roots = rootsOfPolynomial(equationPoly).map(function (v) { return { value:v, text:frac(v) }; });
        steps.push(step("solve_quadratic_equation", "Solve the quadratic equation", expanded, roots.map(function (r) { return "x = " + r.text; }).join(" or "), "The quadratic formula or factorization gives the candidate roots."));
        var accepted = [], rejected = [];
        roots.forEach(function (ro) {
            var ok = true;
            for (var i = 0; i < bounds.length; i += 1) {
                if (bounds[i].lower !== null && bounds[i].lower !== undefined && !(ro.value > bounds[i].lower + EPS)) ok = false;
                if (bounds[i].upper !== null && bounds[i].upper !== undefined && !(ro.value < bounds[i].upper - EPS)) ok = false;
            }
            (ok ? accepted : rejected).push(ro);
        });
        if (rejected.length) steps.push(step("reject_extraneous_root", "Reject roots outside the logarithm domain", rejected.map(function (r) { return "x = " + r.text; }).join(" or "), accepted.map(function (r) { return "x = " + r.text; }).join(" or ") || "no accepted roots", "A logarithmic equation can only use roots that keep all arguments positive.", "check"));
        var ans = accepted.length ? "x = " + accepted.map(function (r) { return r.text; }).join(" or x = ") : "no real solution";
        steps.push(step("log_equation_domain_check", "Check the accepted root in the domain", ans, ans, "The remaining solution satisfies the combined logarithm domain.", "check"));
        return resultWith(input, "solve", "logarithmic_equation", "logarithmic_equation_product_rule", ans, steps);
    }
    function solveLogInequality(input, rel) {
        if (["<", ">", "<=", ">="].indexOf(rel.op) < 0) return null;
        var side = relationNumberSide({ left:compact(rel.left), right:compact(rel.right), op:rel.op });
        if (!side) return null;
        var call = parseLogCall(side.logSide);
        if (!call) return null;
        var op = rel.op;
        if (side.flipped) op = op === ">" ? "<" : (op === "<" ? ">" : (op === ">=" ? "<=" : ">="));
        var steps = [];
        var bounds = domainBoundsForCalls([call], steps);
        var decreasing = call.baseValue > 0 && call.baseValue < 1;
        steps.push(step("log_inequality_monotonicity", "Use logarithm monotonicity", "base = " + baseDisplay(call.baseText), decreasing ? "decreasing logarithm" : "increasing logarithm", decreasing ? "For 0 < base < 1, the logarithm is decreasing." : "For base > 1, the logarithm is increasing.", "reasoning"));
        var convertedOp = op;
        if (decreasing) {
            convertedOp = op === ">" ? "<" : (op === "<" ? ">" : (op === ">=" ? "<=" : ">="));
            steps.push(step("reverse_inequality_sign", "Reverse the inequality sign", op, convertedOp, "Because the logarithm is decreasing, the inequality direction reverses.", "reasoning"));
        }
        var pwr = powerText(call.baseText, String(side.num));
        var rhs = Math.pow(call.baseValue, side.num);
        var argIneq = call.arg + " " + convertedOp + " " + pwr;
        steps.push(step("log_convert_inequality_to_argument", "Convert logarithmic inequality to argument inequality", input, argIneq, "The logarithmic inequality is rewritten using the corresponding power of the base."));
        steps.push(step("evaluate_power", "Evaluate the power", pwr, frac(rhs), "The boundary value is evaluated.", "reasoning"));
        var p = parsePoly(call.arg);
        if (!p || polyDegree(p) !== 1) return null;
        var a = polyCoeff(p, 1), b = polyCoeff(p, 0) - rhs;
        var root = -b / a;
        var sense = convertedOp.indexOf(">") >= 0 ? ">" : "<";
        if (a < 0) sense = sense === ">" ? "<" : ">";
        var solutionBound = { lower:sense === ">" ? root : null, upper:sense === "<" ? root : null };
        bounds.push(solutionBound);
        var linearSol = "x " + sense + " " + frac(root);
        steps.push(step("solve_linear_inequality", "Solve the resulting linear inequality", call.arg + " " + convertedOp + " " + frac(rhs), linearSol, "Isolate x in the argument inequality."));
        var answer = combineBounds(bounds, true);
        steps.push(step("log_inequality_domain_check", "Intersect with the logarithm domain", linearSol, answer, "The final interval must also satisfy the original logarithm domain.", "check"));
        return resultWith(input, "solve", "logarithmic_inequality", "logarithmic_inequality_domain_and_monotonicity", answer, steps);
    }

    function solveLogRelation(input, rel) {
        rel = rel || splitTopLevelRelation(input);
        if (!rel) return null;
        rel = { left:compact(rel.left), right:compact(rel.right), op:rel.op };
        return solveSameBaseLogEquation(input, rel) || solveProductLogEquation(input, rel) || solveSimpleLogEquation(input, rel) || solveLogInequality(input, rel);
    }
    function solveLogExpression(input, action) {
        action = action || "simplify";
        if (action === "find_domain") return domainForLogExpression(input, "find_domain");
        if (action === "expand_logarithm") return expandLogarithm(input);
        if (action === "combine_logarithms") return combineLogarithms(input);
        if (action === "simplify") return simplifyLogExpression(input) || combineLogarithms(input);
        return null;
    }

    NS.nativeSolvers.logarithms = {
        normalizeLogSyntax: normalizeLogSyntax,
        parseLogCall: parseLogCall,
        solveLogExpression: solveLogExpression,
        solveLogRelation: solveLogRelation,
        expandLogarithm: expandLogarithm,
        combineLogarithms: combineLogarithms,
        domainForLogExpression: domainForLogExpression
    };
})(window.AlgebraTrace);
