/* AlgebraTrace JS native core and algebra solver dispatcher.
 * Shared parser, AST, polynomial, rational, and result helpers live here.
 * Domain-specific native solvers are registered by the sibling modules in js/solvers/.
 */
window.AlgebraTrace = window.AlgebraTrace || {};
(function (NS) {
    "use strict";
    var EPS = 1e-10;

    function abs(n) { return Math.abs(n); }
    function isZero(n) { return Math.abs(n) < EPS; }
    function isInt(n) { return Math.abs(n - Math.round(n)) < EPS; }
    function round(n) {
        if (isZero(n)) return 0;
        if (isInt(n)) return Math.round(n);
        return Number(n.toFixed(12));
    }
    function gcd(a, b) {
        a = Math.abs(Math.round(a)); b = Math.abs(Math.round(b));
        while (b) { var t = b; b = a % b; a = t; }
        return a || 1;
    }
    function lcm(a, b) { return Math.abs(a * b) / gcd(a, b); }
    function normalizeMath(text) {
        return String(text || "")
            .replace(/\u2212/g, "-")
            .replace(/\s+/g, "")
            .replace(/π/g, "pi");
    }
    function displayNumber(n) {
        n = round(n);
        if (isInt(n)) return String(Math.round(n));
        var s = String(n);
        if (s.indexOf("e") >= 0 || s.indexOf("E") >= 0) return Number(n).toPrecision(10).replace(/\.0+$/, "");
        return s.replace(/\.0+$/, "");
    }
    function frac(n) {
        n = round(n);
        if (isInt(n)) return String(Math.round(n));
        var sign = n < 0 ? "-" : "";
        n = Math.abs(n);
        var bestD = 1, bestN = Math.round(n), bestErr = Math.abs(n - bestN);
        for (var d = 1; d <= 200; d += 1) {
            var num = Math.round(n * d);
            var err = Math.abs(n - num / d);
            if (err < bestErr) { bestErr = err; bestD = d; bestN = num; }
            if (err < 1e-10) break;
        }
        var g = gcd(bestN, bestD);
        bestN /= g; bestD /= g;
        if (bestD === 1) return sign + bestN;
        return sign + bestN + "/" + bestD;
    }
    function wrapNegative(s) { return String(s).charAt(0) === "-" ? "(" + s + ")" : s; }
    function normalizeMathText(text) {
        return String(text === undefined || text === null ? "" : text)
            .replace(/\u2212/g, "-")
            .replace(/π/g, "pi")
            .replace(/\s+/g, "")
            .replace(/[()]/g, function (m) { return m; });
    }
    function hasMeaningfulChange(before, after) {
        if (before === undefined || before === null || after === undefined || after === null) return false;
        return normalizeMathText(before) !== normalizeMathText(after);
    }
    function hasConcreteMathText(text) {
        var s = String(text === undefined || text === null ? "" : text);
        if (!s.trim()) return false;
        if (/not\s+implemented|unsupported_pattern/i.test(s)) return false;
        return /[0-9xX=+\-*\/^()<>≤≥∞∫]|where|domain|vertical|horizontal|hole|continuous|discontinuity|interval|solution|root/i.test(s);
    }
    function humanizeRule(rule) {
        var map = {
            evaluate_arithmetic: "Evaluate arithmetic",
            collect_like_terms: "Collect like terms",
            factor_common_term: "Take out the common factor",
            difference_of_squares: "Factor as a difference of squares",
            perfect_square_trinomial: "Factor the perfect-square trinomial",
            factor_quadratic: "Factor the quadratic",
            polynomial_standard_form: "Write in standard polynomial form",
            find_forbidden_values: "Find forbidden values",
            find_denominator_zeros: "Find denominator zeros",
            preserve_domain_restriction: "Preserve domain restrictions",
            cancel_common_factor: "Cancel common factors",
            clear_denominators: "Clear denominators",
            reject_extraneous_roots: "Reject extraneous roots",
            linear_equation_isolate_variable: "Isolate the variable",
            sign_chart: "Build a sign chart",
            critical_points: "Find critical points",
            interval_solution: "Write the solution interval",
            derivative_simplify_before_differentiation: "Simplify before differentiating",
            derivative_sum_rule: "Use the sum rule",
            derivative_product_rule: "Use the product rule",
            derivative_quotient_rule: "Use the quotient rule",
            derivative_power_rule: "Use the power rule",
            derivative_constant_rule: "Use the constant rule",
            derivative_variable_rule: "Differentiate the variable",
            derivative_chain_rule: "Use the chain rule",
            derivative_trig_rule: "Differentiate the trigonometric function",
            derivative_ln_rule: "Differentiate the logarithm",
            derivative_exp_rule: "Differentiate the exponential",
            derivative_preserve_domain_restriction: "Preserve the original domain",
            integral_sum_rule: "Split the integral of a sum",
            integral_power_rule: "Use the power rule for integrals",
            integral_constant_rule: "Integrate the constant term",
            integral_add_constant_C: "Add the integration constant",
            integral_check_by_differentiation: "Check by differentiating",
            integral_inner_derivative_substitution: "Use inner-derivative substitution",
            integral_ln_rule: "Use the logarithmic antiderivative",
            integral_cos_linear_argument: "Integrate cosine with a linear argument",
            integral_sin_linear_argument: "Integrate sine with a linear argument",
            linear_substitution: "Use a linear substitution",
            direct_substitution: "Substitute the limit point",
            factor_and_cancel: "Factor and cancel the common factor",
            removable_discontinuity_limit: "Use the simplified expression near the hole",
            direct_substitution_after_cancellation: "Substitute after cancellation",
            compare_degrees: "Compare polynomial degrees",
            leading_coefficient_ratio: "Compare leading coefficients",
            horizontal_asymptote_by_degree: "Find the horizontal asymptote from degrees",
            slant_asymptote_polynomial_division: "Use polynomial division for a slant asymptote",
            detect_holes: "Detect holes from canceled factors",
            classify_removable_vs_infinite_discontinuity: "Classify each discontinuity",
            linear_system_elimination: "Eliminate one variable",
            solve_2x2_system: "Solve the remaining equation",
            verify_system_solution: "Check the system solution"
        };
        if (map[rule]) return map[rule];
        return String(rule || "rule").replace(/^derivative_/, "derivative ").replace(/^integral_/, "integral ").replace(/_/g, " ").replace(/\b\w/g, function (m) { return m.toUpperCase(); });
    }
    function explanationForRule(rule, before, after) {
        var map = {
            evaluate_arithmetic: "The arithmetic operations are evaluated in the standard order.",
            collect_like_terms: "Terms with the same power of x are combined.",
            factor_common_term: "All terms contain a common factor, so it is placed outside the parentheses.",
            difference_of_squares: "The expression has the form a^2 - b^2, so it becomes (a - b)(a + b).",
            perfect_square_trinomial: "The first and last terms are squares and the middle term matches 2ab.",
            factor_quadratic: "The quadratic is rewritten as a product of linear factors.",
            find_forbidden_values: "The denominator is set equal to zero to find excluded x-values.",
            find_denominator_zeros: "A rational expression is undefined where its denominator equals zero.",
            cancel_common_factor: "The same factor appears in the numerator and denominator, so it can be canceled while keeping original restrictions.",
            preserve_domain_restriction: "Values excluded by the original expression remain excluded even after simplification.",
            derivative_simplify_before_differentiation: "The expression is simplified first, and the original domain restrictions are kept.",
            derivative_chain_rule: "The expression is composite, so the derivative of the outside function is multiplied by the derivative of the inside function.",
            derivative_power_rule: "For x^n, the derivative is n*x^(n-1).",
            derivative_product_rule: "For a product u*v, the derivative is u'*v + u*v'.",
            derivative_quotient_rule: "For a quotient u/v, the derivative is (u'*v - u*v')/v^2.",
            derivative_sum_rule: "The derivative of a sum is the sum of the derivatives.",
            derivative_constant_rule: "A constant has derivative 0.",
            derivative_variable_rule: "The derivative of x with respect to x is 1.",
            derivative_preserve_domain_restriction: "The derivative is stated only on the original domain of the expression.",
            integral_sum_rule: "The integral of a sum is the sum of the integrals.",
            integral_power_rule: "For x^n, the antiderivative is x^(n+1)/(n+1) when n ≠ -1.",
            integral_constant_rule: "The integral of a constant c is c*x.",
            integral_add_constant_C: "An indefinite integral represents a family of antiderivatives, so + C is added.",
            integral_check_by_differentiation: "Differentiating the antiderivative gives the original integrand.",
            direct_substitution: "The expression is evaluated at the limiting point.",
            factor_and_cancel: "The removable zero factor is canceled before evaluating the limit.",
            removable_discontinuity_limit: "A canceled factor gives a hole, so the limit is evaluated with the simplified expression.",
            direct_substitution_after_cancellation: "After cancellation, substitution no longer gives 0/0.",
            horizontal_asymptote_by_degree: "The degrees of numerator and denominator determine the horizontal asymptote.",
            detect_holes: "A canceled denominator factor creates a removable discontinuity (a hole), not a vertical asymptote.",
            classify_removable_vs_infinite_discontinuity: "Canceled denominator roots are removable; uncanceled denominator roots are infinite discontinuities.",
            linear_system_elimination: "The equations are combined so that one variable cancels.",
            solve_2x2_system: "The resulting one-variable equation is solved and substituted back.",
            verify_system_solution: "The values are substituted into both original equations."
        };
        if (map[rule]) return map[rule];
        return "This step uses the " + humanizeRule(rule).toLowerCase() + " rule to move toward " + String(after || "the result") + ".";
    }
    function inferStepType(rule, before, after, details) {
        details = details || {};
        if (details.step_type) return details.step_type;
        if (/domain|forbidden|restriction|denominator_zeros/.test(rule || "")) return "domain";
        if (/check|verify/.test(rule || "")) return "check";
        if (/classify|compare|detect|continuity|discontinuity|asymptote|range|critical|sign_chart|interval|substitution|evaluate_bounds|leading_coefficient/.test(rule || "")) return "reasoning";
        if (hasMeaningfulChange(before, after)) return "transform";
        return "reasoning";
    }
    function isGenericActionText(action, rule) {
        var a = String(action || "").trim();
        if (!a) return true;
        if (/^Apply\s+[a-z0-9_]+$/i.test(a)) return true;
        if (rule && normalizeMathText(a.toLowerCase()) === normalizeMathText(("Apply " + rule).toLowerCase())) return true;
        if (/^Apply\s+(factorization\s+)?rule$/i.test(a)) return true;
        return false;
    }
    function isGenericExplanationText(explanation) {
        var e = String(explanation || "").trim();
        if (!e) return true;
        if (e === "Native JavaScript rule-based transformation.") return true;
        if (/not\s+implemented|unsupported_pattern/i.test(e)) return true;
        return false;
    }
    function makeStep(rule, action, before, after, explanation, details) {
        details = details || {};
        var step = {
            step_type: details.step_type || inferStepType(rule, before, after, details),
            granularity: details.granularity || "micro",
            rule_id: rule,
            action: isGenericActionText(action, rule) ? humanizeRule(rule) : action,
            before: before,
            after: after,
            explanation: isGenericExplanationText(explanation) ? explanationForRule(rule, before, after) : explanation,
            details: details || {}
        };
        if (step.details && step.details.step_type) delete step.details.step_type;
        if (step.details && step.details.granularity) delete step.details.granularity;
        return step;
    }
    function validateStepQuality(step) {
        if (!step || !step.rule_id) return { ok: false, reason: "missing rule id" };
        if (step.rule_id === "unsupported_pattern") return { ok: false, reason: "unsupported pattern is not a visible step" };
        if (isGenericActionText(step.action, step.rule_id)) return { ok: false, reason: "generic action" };
        if (isGenericExplanationText(step.explanation)) return { ok: false, reason: "generic explanation" };
        if (/not\s+implemented|unsupported_pattern/i.test(String(step.after || ""))) return { ok: false, reason: "unsupported placeholder" };
        var type = step.step_type || inferStepType(step.rule_id, step.before, step.after, step.details);
        if (type === "transform") {
            if (!hasConcreteMathText(step.before) || !hasConcreteMathText(step.after)) return { ok: false, reason: "transform lacks concrete math" };
            if (!hasMeaningfulChange(step.before, step.after)) return { ok: false, reason: "transform did not change" };
        } else {
            if (!hasConcreteMathText(step.after) && !hasConcreteMathText(step.before)) return { ok: false, reason: "reasoning lacks concrete content" };
        }
        return { ok: true };
    }
    function addStepIfMeaningful(steps, step) {
        var verdict = validateStepQuality(step);
        if (verdict.ok) steps.push(step);
        return verdict.ok;
    }
    function cleanSteps(steps) {
        var out = [];
        steps = steps || [];
        for (var i = 0; i < steps.length; i += 1) addStepIfMeaningful(out, steps[i]);
        return out;
    }
    function createTransformStep(options) {
        options = options || {};
        return makeStep(options.rule_id, options.action, options.before, options.after, options.explanation, Object.assign({}, options.details || {}, { step_type: "transform" }));
    }

    function unique(arr) {
        var out = [];
        for (var i = 0; i < arr.length; i += 1) if (out.indexOf(arr[i]) < 0) out.push(arr[i]);
        return out;
    }
    function containsRule(steps, rule) {
        for (var i = 0; i < steps.length; i += 1) if (steps[i].rule_id === rule) return true;
        return false;
    }

    /* ----------------------------- tokenizer/parser ----------------------------- */
    function tokenizeExpr(input) {
        var s = String(input || "").replace(/\u2212/g, "-").replace(/π/g, "pi");
        var tokens = [];
        var i = 0;
        while (i < s.length) {
            var ch = s.charAt(i);
            if (/\s/.test(ch)) { i += 1; continue; }
            if (/[0-9.]/.test(ch)) {
                var j = i + 1;
                while (j < s.length && /[0-9.]/.test(s.charAt(j))) j += 1;
                tokens.push({ type: "num", value: s.slice(i, j) });
                i = j; continue;
            }
            if (/[A-Za-z_]/.test(ch)) {
                var k = i + 1;
                while (k < s.length && /[A-Za-z0-9_]/.test(s.charAt(k))) k += 1;
                tokens.push({ type: "id", value: s.slice(i, k) });
                i = k; continue;
            }
            if ("+-*/^(),|".indexOf(ch) >= 0) {
                tokens.push({ type: ch, value: ch });
                i += 1; continue;
            }
            throw new Error("Unexpected character: " + ch);
        }
        return tokens;
    }
    function node(type, value, children) { return { type: type, value: value, children: children || [] }; }
    function numNode(v) { return node("num", Number(v), []); }
    function varNode(v) { return node("var", v || "x", []); }
    function bin(op, a, b) { return node("binary", op, [a, b]); }
    function unary(op, a) { return node("unary", op, [a]); }
    function func(name, args) { return node("func", name, args || []); }
    function isPrimaryStart(t) { return t && (t.type === "num" || t.type === "id" || t.type === "(" || t.type === "|"); }

    function Parser(tokens) { this.tokens = tokens; this.pos = 0; }
    Parser.prototype.peek = function () { return this.tokens[this.pos] || null; };
    Parser.prototype.take = function () { return this.tokens[this.pos++] || null; };
    Parser.prototype.match = function (type, value) {
        var t = this.peek();
        if (!t) return false;
        if (t.type === type && (value === undefined || t.value === value)) { this.pos += 1; return true; }
        return false;
    };
    Parser.prototype.parse = function () {
        var out = this.parseAdd();
        if (this.pos < this.tokens.length) throw new Error("Unexpected token: " + this.peek().value);
        return out;
    };
    Parser.prototype.parseAdd = function () {
        var left = this.parseMul();
        while (true) {
            if (this.match("+")) left = bin("+", left, this.parseMul());
            else if (this.match("-")) left = bin("-", left, this.parseMul());
            else break;
        }
        return left;
    };
    Parser.prototype.parseMul = function () {
        var left = this.parsePow();
        while (true) {
            if (this.match("*")) left = bin("*", left, this.parsePow());
            else if (this.match("/")) left = bin("/", left, this.parsePow());
            else if (isPrimaryStart(this.peek())) left = bin("*", left, this.parsePow());
            else break;
        }
        return left;
    };
    Parser.prototype.parsePow = function () {
        var left = this.parseUnary();
        if (this.match("^")) left = bin("^", left, this.parsePow());
        return left;
    };
    Parser.prototype.parseUnary = function () {
        if (this.match("+")) return this.parseUnary();
        if (this.match("-")) return unary("-", this.parseUnary());
        return this.parsePrimary();
    };
    Parser.prototype.parsePrimary = function () {
        var t = this.take();
        if (!t) throw new Error("Unexpected end");
        if (t.type === "num") return numNode(Number(t.value));
        if (t.type === "id") {
            var id = t.value;
            if (this.match("(")) {
                var args = [];
                if (!this.match(")")) {
                    do { args.push(this.parseAdd()); } while (this.match(","));
                    if (!this.match(")")) throw new Error("Missing ) after function");
                }
                return func(id, args);
            }
            if (id === "pi") return numNode(Math.PI);
            return varNode(id);
        }
        if (t.type === "(") {
            var inside = this.parseAdd();
            if (!this.match(")")) throw new Error("Missing )");
            return inside;
        }
        if (t.type === "|") {
            var a = this.parseAdd();
            if (!this.match("|")) throw new Error("Missing absolute value bar");
            return func("abs", [a]);
        }
        throw new Error("Unexpected token: " + t.value);
    };
    function parseExpr(input) { return new Parser(tokenizeExpr(input)).parse(); }

    function astEqual(a, b) { return JSON.stringify(a) === JSON.stringify(b); }
    function astNumber(a) { return a && a.type === "num" ? a.value : null; }
    function isNum(a, v) { return a && a.type === "num" && (v === undefined || isZero(a.value - v)); }
    function isVar(a) { return a && a.type === "var" && a.value === "x"; }

    function simplifyAst(a) {
        if (!a) return a;
        if (a.type === "num" || a.type === "var") return a;
        if (a.type === "unary") {
            var u = simplifyAst(a.children[0]);
            if (isNum(u)) return numNode(-u.value);
            if (u.type === "unary" && u.value === "-") return u.children[0];
            return unary("-", u);
        }
        if (a.type === "func") {
            var args = [];
            for (var i = 0; i < a.children.length; i += 1) args.push(simplifyAst(a.children[i]));
            var fname = String(a.value || "").toLowerCase();
            if (a.value === "sqrt" && isNum(args[0]) && args[0].value >= 0) return numNode(Math.sqrt(args[0].value));
            if (a.value === "ln" && isNum(args[0]) && args[0].value > 0) return numNode(Math.log(args[0].value));
            if (a.value === "exp" && isNum(args[0])) return numNode(Math.exp(args[0].value));
            if (/^log_/.test(fname) && isNum(args[0]) && args[0].value > 0) {
                var b = Number(fname.slice(4));
                if (b > 0 && !isZero(b - 1)) return numNode(Math.log(args[0].value) / Math.log(b));
            }
            if (/^log\d+(?:\.\d+)?$/.test(fname) && isNum(args[0]) && args[0].value > 0) {
                var b2 = Number(fname.replace(/^log/, ""));
                if (b2 > 0 && !isZero(b2 - 1)) return numNode(Math.log(args[0].value) / Math.log(b2));
            }
            if (fname === "log" && isNum(args[0]) && args[0].value > 0) {
                var b3 = args.length > 1 && isNum(args[1]) ? args[1].value : 10;
                if (b3 > 0 && !isZero(b3 - 1)) return numNode(Math.log(args[0].value) / Math.log(b3));
            }
            return func(a.value, args);
        }
        var left = simplifyAst(a.children[0]);
        var right = simplifyAst(a.children[1]);
        if (a.value === "+") {
            if (isNum(left, 0)) return right;
            if (isNum(right, 0)) return left;
            if (isNum(left) && isNum(right)) return numNode(left.value + right.value);
            return bin("+", left, right);
        }
        if (a.value === "-") {
            if (isNum(right, 0)) return left;
            if (isNum(left, 0)) return unary("-", right);
            if (isNum(left) && isNum(right)) return numNode(left.value - right.value);
            return bin("-", left, right);
        }
        if (a.value === "*") {
            if (isNum(left, 0) || isNum(right, 0)) return numNode(0);
            if (isNum(left, 1)) return right;
            if (isNum(right, 1)) return left;
            if (isNum(left, -1)) return unary("-", right);
            if (isNum(right, -1)) return unary("-", left);
            if (isNum(left) && isNum(right)) return numNode(left.value * right.value);
            // n*(m*x) => nm*x
            if (isNum(left) && right.type === "binary" && right.value === "*" && isNum(right.children[0])) return simplifyAst(bin("*", numNode(left.value * right.children[0].value), right.children[1]));
            if (isNum(right) && left.type === "binary" && left.value === "*" && isNum(left.children[0])) return simplifyAst(bin("*", numNode(right.value * left.children[0].value), left.children[1]));
            // x * x^n
            if (isVar(left) && right.type === "binary" && right.value === "^" && isVar(right.children[0]) && isNum(right.children[1])) return bin("^", varNode("x"), numNode(right.children[1].value + 1));
            if (isVar(right) && left.type === "binary" && left.value === "^" && isVar(left.children[0]) && isNum(left.children[1])) return bin("^", varNode("x"), numNode(left.children[1].value + 1));
            return bin("*", left, right);
        }
        if (a.value === "/") {
            if (isNum(left, 0)) return numNode(0);
            if (isNum(right, 1)) return left;
            if (isNum(left) && isNum(right)) return numNode(left.value / right.value);
            if (astEqual(left, right)) return numNode(1);
            return bin("/", left, right);
        }
        if (a.value === "^") {
            if (isNum(right, 0)) return numNode(1);
            if (isNum(right, 1)) return left;
            if (isNum(left) && isNum(right)) return numNode(Math.pow(left.value, right.value));
            return bin("^", left, right);
        }
        return bin(a.value, left, right);
    }

    function precedence(a) {
        if (!a) return 9;
        if (a.type === "num" || a.type === "var" || a.type === "func") return 5;
        if (a.type === "unary") return 4;
        if (a.value === "^") return 3;
        if (a.value === "*" || a.value === "/") return 2;
        if (a.value === "+" || a.value === "-") return 1;
        return 0;
    }
    function renderAst(a, parentPrec) {
        a = simplifyAst(a);
        parentPrec = parentPrec || 0;
        var s;
        if (a.type === "num") return displayNumber(a.value);
        if (a.type === "var") return a.value;
        if (a.type === "unary") {
            s = "-" + renderAst(a.children[0], 4);
            return precedence(a) < parentPrec ? "(" + s + ")" : s;
        }
        if (a.type === "func") {
            if (a.value === "abs") return "|" + renderAst(a.children[0], 0) + "|";
            if (/^log\d+(?:\.\d+)?$/i.test(a.value)) return "log_" + a.value.replace(/^log/i, "") + "(" + a.children.map(function (x) { return renderAst(x, 0); }).join(", ") + ")";
            return a.value + "(" + a.children.map(function (x) { return renderAst(x, 0); }).join(", ") + ")";
        }
        var op = a.value;
        var lp = precedence(a);
        var l = renderAst(a.children[0], lp);
        var r = renderAst(a.children[1], op === "^" ? lp : lp + (op === "-" || op === "/" ? 1 : 0));
        if (op === "*") {
            if (a.children[0].type === "num" && a.children[0].value === -1) s = "-" + r;
            else s = l + "*" + r;
        } else s = l + " " + op + " " + r;
        return lp < parentPrec ? "(" + s + ")" : s;
    }
    function evalAst(a, x) {
        a = simplifyAst(a);
        if (a.type === "num") return a.value;
        if (a.type === "var") return x;
        if (a.type === "unary") return -evalAst(a.children[0], x);
        if (a.type === "binary") {
            var l = evalAst(a.children[0], x), r = evalAst(a.children[1], x);
            if (a.value === "+") return l + r;
            if (a.value === "-") return l - r;
            if (a.value === "*") return l * r;
            if (a.value === "/") return l / r;
            if (a.value === "^") return Math.pow(l, r);
        }
        var v = a.children.length ? evalAst(a.children[0], x) : NaN;
        if (a.value === "sin") return Math.sin(v);
        if (a.value === "cos") return Math.cos(v);
        if (a.value === "tan") return Math.tan(v);
        if (a.value === "ln") return Math.log(v);
        if (a.value === "exp") return Math.exp(v);
        if (a.value === "sqrt") return Math.sqrt(v);
        if (a.value === "abs") return Math.abs(v);
        if (String(a.value).indexOf("log_") === 0) return Math.log(v) / Math.log(Number(String(a.value).slice(4)));
        if (/^log\d+(?:\.\d+)?$/i.test(String(a.value))) return Math.log(v) / Math.log(Number(String(a.value).replace(/^log/i, "")));
        if (a.value === "log") return a.children.length > 1 ? Math.log(evalAst(a.children[0], x)) / Math.log(evalAst(a.children[1], x)) : Math.log(evalAst(a.children[0], x)) / Math.log(10);
        return NaN;
    }

    /* ----------------------------- polynomial/rational ----------------------------- */
    function polyClean(p) {
        var out = {};
        for (var k in p) if (Object.prototype.hasOwnProperty.call(p, k)) {
            var v = round(p[k]);
            if (!isZero(v)) out[String(Number(k))] = v;
        }
        return out;
    }
    function polyConst(c) { var p = {}; if (!isZero(c)) p[0] = c; return p; }
    function polyVar() { return { 1: 1 }; }
    function polyDegree(p) { p = polyClean(p); var d = -Infinity; for (var k in p) if (Object.prototype.hasOwnProperty.call(p, k)) d = Math.max(d, Number(k)); return d === -Infinity ? -1 : d; }
    function polyCoeff(p, e) { return p[String(e)] || 0; }
    function polyAdd(a, b, sign) { sign = sign === undefined ? 1 : sign; var out = {}; var k; for (k in a) if (Object.prototype.hasOwnProperty.call(a, k)) out[k] = (out[k] || 0) + a[k]; for (k in b) if (Object.prototype.hasOwnProperty.call(b, k)) out[k] = (out[k] || 0) + sign * b[k]; return polyClean(out); }
    function polyScale(a, c) { var out = {}; for (var k in a) if (Object.prototype.hasOwnProperty.call(a, k)) out[k] = a[k] * c; return polyClean(out); }
    function polyMul(a, b) { var out = {}; var i, j; for (i in a) if (Object.prototype.hasOwnProperty.call(a, i)) for (j in b) if (Object.prototype.hasOwnProperty.call(b, j)) out[Number(i) + Number(j)] = (out[Number(i) + Number(j)] || 0) + a[i] * b[j]; return polyClean(out); }
    function polyPow(a, n) { var out = polyConst(1); for (var i = 0; i < n; i += 1) out = polyMul(out, a); return out; }
    function polyEval(p, x) { var s = 0; for (var k in p) if (Object.prototype.hasOwnProperty.call(p, k)) s += p[k] * Math.pow(x, Number(k)); return s; }
    function polyDerivative(p) { var out = {}; for (var k in p) if (Object.prototype.hasOwnProperty.call(p, k) && Number(k) > 0) out[Number(k) - 1] = Number(k) * p[k]; return polyClean(out); }
    function polyIntegral(p) { var out = {}; for (var k in p) if (Object.prototype.hasOwnProperty.call(p, k)) out[Number(k) + 1] = p[k] / (Number(k) + 1); return polyClean(out); }
    function polyFromAst(a) {
        a = simplifyAst(a);
        if (a.type === "num") return polyConst(a.value);
        if (a.type === "var" && a.value === "x") return polyVar();
        if (a.type === "unary" && a.value === "-") { var up = polyFromAst(a.children[0]); return up ? polyScale(up, -1) : null; }
        if (a.type !== "binary") return null;
        var l = polyFromAst(a.children[0]), r = polyFromAst(a.children[1]);
        if (a.value === "+" && l && r) return polyAdd(l, r);
        if (a.value === "-" && l && r) return polyAdd(l, r, -1);
        if (a.value === "*" && l && r) return polyMul(l, r);
        if (a.value === "/" && l && r && polyDegree(r) === 0) return polyScale(l, 1 / polyCoeff(r, 0));
        if (a.value === "^" && l && a.children[1].type === "num" && isInt(a.children[1].value) && a.children[1].value >= 0 && a.children[1].value <= 12) return polyPow(l, Math.round(a.children[1].value));
        return null;
    }
    function polyToString(p) {
        p = polyClean(p);
        var d = polyDegree(p);
        if (d < 0) return "0";
        var parts = [];
        for (var e = d; e >= 0; e -= 1) {
            var c = polyCoeff(p, e);
            if (isZero(c)) continue;
            var sign = c < 0 ? "-" : "+";
            var ac = Math.abs(c);
            var term = "";
            if (e === 0) term = frac(ac);
            else {
                if (!isZero(ac - 1)) term += frac(ac) + "*";
                term += "x";
                if (e !== 1) term += "^" + e;
            }
            if (!parts.length) parts.push((sign === "-" ? "-" : "") + term);
            else parts.push(" " + sign + " " + term);
        }
        return parts.join("");
    }
    function parsePoly(text) { try { return polyFromAst(parseExpr(text)); } catch (e) { return null; } }
    function rationalFromAst(a) {
        a = simplifyAst(a);
        if (a.type === "num" || a.type === "var") { var p = polyFromAst(a); return p ? { n: p, d: polyConst(1) } : null; }
        if (a.type === "unary") { var u = rationalFromAst(a.children[0]); return u ? { n: polyScale(u.n, -1), d: u.d } : null; }
        if (a.type === "binary") {
            var l = rationalFromAst(a.children[0]), r = rationalFromAst(a.children[1]);
            if (!l || !r) return null;
            if (a.value === "+") return { n: polyAdd(polyMul(l.n, r.d), polyMul(r.n, l.d)), d: polyMul(l.d, r.d) };
            if (a.value === "-") return { n: polyAdd(polyMul(l.n, r.d), polyMul(r.n, l.d), -1), d: polyMul(l.d, r.d) };
            if (a.value === "*") return { n: polyMul(l.n, r.n), d: polyMul(l.d, r.d) };
            if (a.value === "/") return { n: polyMul(l.n, r.d), d: polyMul(l.d, r.n) };
            if (a.value === "^" && a.children[1].type === "num" && isInt(a.children[1].value) && a.children[1].value >= 0) {
                return { n: polyPow(l.n, a.children[1].value), d: polyPow(l.d, a.children[1].value) };
            }
        }
        return null;
    }
    function rationalExpression(text) { try { var r = rationalFromAst(parseExpr(text)); return r ? { n: polyClean(r.n), d: polyClean(r.d) } : null; } catch (e) { return null; } }

    function divisors(n) {
        n = Math.abs(Math.round(n));
        var out = [1];
        for (var i = 2; i <= Math.max(1, n); i += 1) if (n % i === 0) out.push(i);
        return out;
    }
    function divideByLinear(p, r) { // divide by (x - r)
        var d = polyDegree(p), coeff = [], i;
        for (i = 0; i <= d; i += 1) coeff[i] = polyCoeff(p, i);
        var b = [];
        b[d - 1] = coeff[d];
        for (i = d - 2; i >= 0; i -= 1) b[i] = coeff[i + 1] + r * b[i + 1];
        var rem = coeff[0] + r * (b[0] || 0);
        if (!isZero(rem)) return null;
        var out = {};
        for (i = 0; i <= d - 1; i += 1) out[i] = b[i] || 0;
        return polyClean(out);
    }
    function factorPolynomial(p) {
        p = polyClean(p);
        var factors = [];
        var d = polyDegree(p);
        if (d < 0) return { constant: 0, factors: [] };
        var minExp = 999, k;
        for (k in p) if (Object.prototype.hasOwnProperty.call(p, k) && !isZero(p[k])) minExp = Math.min(minExp, Number(k));
        var coeffGcd = 0;
        var allInt = true;
        for (k in p) if (Object.prototype.hasOwnProperty.call(p, k)) { if (!isInt(p[k])) allInt = false; coeffGcd = coeffGcd ? gcd(coeffGcd, Math.round(p[k])) : Math.abs(Math.round(p[k])); }
        var constant = 1;
        if (allInt && coeffGcd > 1) { constant *= coeffGcd; p = polyScale(p, 1 / coeffGcd); }
        if (minExp > 0 && minExp < 999) {
            for (var z = 0; z < minExp; z += 1) factors.push({ type: "linear", root: 0, text: "x" });
            var shifted = {};
            for (k in p) if (Object.prototype.hasOwnProperty.call(p, k)) shifted[Number(k) - minExp] = p[k];
            p = polyClean(shifted);
        }
        var safety = 0;
        while (polyDegree(p) > 1 && safety < 20) {
            safety += 1;
            var c = Math.round(polyCoeff(p, 0));
            var a = Math.round(polyCoeff(p, polyDegree(p)));
            if (!isInt(c) || !isInt(a)) break;
            var candidates = [];
            var ds = divisors(c === 0 ? 1 : c);
            var ads = divisors(a === 0 ? 1 : a);
            for (var ii = 0; ii < ds.length; ii += 1) for (var jj = 0; jj < ads.length; jj += 1) {
                candidates.push(ds[ii] / ads[jj]); candidates.push(-ds[ii] / ads[jj]);
            }
            candidates = unique(candidates);
            var found = false;
            for (var ci = 0; ci < candidates.length; ci += 1) {
                var r = candidates[ci];
                if (isZero(polyEval(p, r))) {
                    factors.push({ type: "linear", root: r, text: linearFactorText(r) });
                    var q = divideByLinear(p, r);
                    if (!q) break;
                    p = q; found = true; break;
                }
            }
            if (!found) break;
        }
        d = polyDegree(p);
        if (d === 1) {
            var aa = polyCoeff(p, 1), bb = polyCoeff(p, 0);
            var root = -bb / aa;
            if (!isZero(aa - 1)) constant *= aa;
            factors.push({ type: "linear", root: root, text: linearFactorText(root) });
        } else if (d === 0) constant *= polyCoeff(p, 0);
        else if (d > 1) factors.push({ type: "poly", poly: p, text: polyToString(p) });
        return { constant: round(constant), factors: factors };
    }
    function linearFactorText(root) {
        root = round(root);
        if (isZero(root)) return "x";
        return "(x " + (root > 0 ? "- " + frac(root) : "+ " + frac(-root)) + ")";
    }
    function factorDisplayText(f) {
        var text = f.text;
        if (f.type === "poly" && /[+\-]/.test(text.replace(/^-/g, ""))) return "(" + text + ")";
        return text;
    }
    function factorsToString(f) {
        var parts = [];
        if (!isZero(f.constant - 1) || !f.factors.length) parts.push(frac(f.constant));
        for (var i = 0; i < f.factors.length; i += 1) parts.push(factorDisplayText(f.factors[i]));
        return parts.join("*");
    }
    function rootsOfPolynomial(p) {
        var f = factorPolynomial(p), roots = [];
        for (var i = 0; i < f.factors.length; i += 1) if (f.factors[i].type === "linear") roots.push(round(f.factors[i].root));
        // General quadratic fallback
        if (!roots.length && polyDegree(p) === 2) {
            var a = polyCoeff(p, 2), b = polyCoeff(p, 1), c = polyCoeff(p, 0);
            var D = b * b - 4 * a * c;
            if (D >= -EPS) {
                D = Math.max(0, D);
                roots.push(round((-b - Math.sqrt(D)) / (2 * a)));
                if (!isZero(D)) roots.push(round((-b + Math.sqrt(D)) / (2 * a)));
            }
        }
        roots.sort(function (a, b) { return a - b; });
        return unique(roots);
    }

    function simplifySqrtInt(n) {
        n = Math.round(n);
        var outside = 1, inside = Math.abs(n);
        for (var i = Math.floor(Math.sqrt(inside)); i >= 2; i -= 1) {
            var sq = i * i;
            if (inside % sq === 0) { outside = i; inside = inside / sq; break; }
        }
        return { outside: outside, inside: inside };
    }
    function termOverDen(constPart, sqrtCoeff, sqrtInside, sign, den) {
        var c = constPart / den;
        var sc = sqrtCoeff / den;
        var left = isZero(c) ? "" : frac(c);
        var sqrtTerm = (isZero(Math.abs(sc) - 1) ? "" : frac(Math.abs(sc)) + "*") + "sqrt(" + sqrtInside + ")";
        if (!left) return (sign < 0 ? "-" : "") + sqrtTerm;
        return left + (sign < 0 ? " - " : " + ") + sqrtTerm;
    }
    function quadraticRootObjects(p) {
        if (polyDegree(p) !== 2) return [];
        var a = polyCoeff(p, 2), b = polyCoeff(p, 1), c = polyCoeff(p, 0);
        if (a < 0) { a = -a; b = -b; c = -c; }
        var D = round(b * b - 4 * a * c);
        if (D < -EPS) return [];
        if (isZero(D)) return [{ value: -b / (2 * a), text: frac(-b / (2 * a)) }];
        if (D >= 0 && isInt(Math.sqrt(D))) {
            var r1 = (-b - Math.sqrt(D)) / (2 * a), r2 = (-b + Math.sqrt(D)) / (2 * a);
            return [{ value: r1, text: frac(r1) }, { value: r2, text: frac(r2) }].sort(function (u, v) { return u.value - v.value; });
        }
        var sq = simplifySqrtInt(D), den = 2 * a, constPart = -b, sqrtCoeff = sq.outside;
        var o1 = { value: (-b - Math.sqrt(D)) / den, text: termOverDen(constPart, sqrtCoeff, sq.inside, -1, den) };
        var o2 = { value: (-b + Math.sqrt(D)) / den, text: termOverDen(constPart, sqrtCoeff, sq.inside, 1, den) };
        return [o1, o2].sort(function (u, v) { return u.value - v.value; });
    }

    function polynomialLongDivide(n, d) {
        n = polyClean(n); d = polyClean(d);
        var q = {}, r = n;
        var dd = polyDegree(d);
        if (dd < 0) return null;
        while (polyDegree(r) >= dd && polyDegree(r) >= 0) {
            var rd = polyDegree(r);
            var coef = polyCoeff(r, rd) / polyCoeff(d, dd);
            var exp = rd - dd;
            var term = {}; term[exp] = coef;
            q = polyAdd(q, term);
            r = polyAdd(r, polyMul(term, d), -1);
        }
        return { q: polyClean(q), r: polyClean(r) };
    }

    function splitTopLevelRelation(input) {
        var s = String(input || "");
        var ops = ["<=", ">=", "!=", "≠", "=", "<", ">"]; var depth = 0; var bar = false;
        for (var i = 0; i < s.length; i += 1) {
            var ch = s.charAt(i);
            if (ch === "|") bar = !bar;
            if (!bar) { if (ch === "(") depth += 1; else if (ch === ")") depth -= 1; }
            if (depth === 0 && !bar) {
                for (var j = 0; j < ops.length; j += 1) if (s.slice(i, i + ops[j].length) === ops[j]) return { left: s.slice(0, i).trim(), op: ops[j], right: s.slice(i + ops[j].length).trim() };
            }
        }
        return null;
    }
    function splitFractionTop(input) {
        var s = String(input || "").trim();
        if (s.charAt(0) === "(" && s.charAt(s.length - 1) === ")") {
            // not always strip; parser handles it
        }
        var depth = 0, slash = -1;
        for (var i = 0; i < s.length; i += 1) {
            var ch = s.charAt(i);
            if (ch === "(") depth += 1;
            else if (ch === ")") depth -= 1;
            else if (ch === "/" && depth === 0) { slash = i; break; }
        }
        if (slash < 0) return null;
        var n = s.slice(0, slash).trim(), d = s.slice(slash + 1).trim();
        if (n.charAt(0) === "(" && n.charAt(n.length - 1) === ")") n = NS.trimOuter ? NS.trimOuter(n) : n.slice(1, -1);
        if (d.charAt(0) === "(" && d.charAt(d.length - 1) === ")") d = NS.trimOuter ? NS.trimOuter(d) : d.slice(1, -1);
        return { n: n, d: d };
    }
    function restrictionText(values) {
        values = unique(values.map(round)).sort(function (a, b) { return a - b; });
        if (!values.length) return "";
        var parts = [];
        for (var i = 0; i < values.length; i += 1) parts.push("x ≠ " + frac(values[i]));
        return "where " + parts.join(" and ");
    }
    function appendRestriction(answer, roots) {
        var r = restrictionText(roots);
        return r ? answer + ", " + r : answer;
    }
    function cancelCommonFactors(nf, df) {
        var canceled = [], nLeft = [], dLeft = [], used = [];
        var i, j;
        for (i = 0; i < nf.factors.length; i += 1) {
            var f = nf.factors[i], matched = false;
            if (f.type === "linear") {
                for (j = 0; j < df.factors.length; j += 1) if (!used[j] && df.factors[j].type === "linear" && isZero(df.factors[j].root - f.root)) { used[j] = true; canceled.push(f); matched = true; break; }
            }
            if (!matched) nLeft.push(f);
        }
        for (j = 0; j < df.factors.length; j += 1) if (!used[j]) dLeft.push(df.factors[j]);
        return { canceled: canceled, n: { constant: nf.constant, factors: nLeft }, d: { constant: df.constant, factors: dLeft } };
    }

    function coefFromString(s, def) { if (s === "" || s === "+") return def; if (s === "-") return -def; return Number(s); }
    function evalSafeNumber(text) { try { return Function('"use strict"; return (' + String(text).replace(/\^/g, "**") + ');')(); } catch (e) { return NaN; } }
    function safeArithmetic(input) {
        var text = String(input || "");
        if (!/^[0-9+\-*/^().\s]+$/.test(text)) return null;
        try {
            var js = text.replace(/\^/g, "**");
            var value = Function('"use strict"; return (' + js + ');')();
            if (typeof value === "number" && isFinite(value)) return displayNumber(value);
        } catch (e) {}
        return null;
    }
    function containsFactorRoot(f, r) { for (var i = 0; i < f.factors.length; i += 1) if (f.factors[i].type === "linear" && isZero(f.factors[i].root - r)) return true; return false; }
    function repeatedFactorsToString(factors, constant) {
        var map = {}, order = [], i, key;
        if (constant === undefined) constant = 1;
        var parts = [];
        if (!isZero(constant - 1) || !factors.length) parts.push(frac(constant));
        for (i = 0; i < factors.length; i += 1) {
            key = factorDisplayText(factors[i]);
            if (map[key] === undefined) { map[key] = 0; order.push(key); }
            map[key] += 1;
        }
        for (i = 0; i < order.length; i += 1) {
            key = order[i];
            parts.push(map[key] > 1 ? key + "^" + map[key] : key);
        }
        return parts.join("*");
    }

    function restrictionOnly(values) {
        var text = restrictionText(values || []);
        return text ? text.replace(/^where\s+/, "") : "no restrictions";
    }
    function rootEquationText(values) {
        values = unique((values || []).map(round)).sort(function (a, b) { return a - b; });
        if (!values.length) return "no real roots";
        return "x = " + values.map(frac).join(" or x = ");
    }
    function denominatorFactorRule(poly, factored) {
        var deg = polyDegree(poly);
        if (deg === 2 && isZero(polyCoeff(poly, 1)) && polyCoeff(poly, 0) < 0) return "difference_of_squares";
        if (containsFactorRoot(factorPolynomial(poly), 0)) return "factor_common_term";
        if (deg === 2) return "factor_quadratic";
        if (deg > 2) return "algebraic_factorization";
        return "factor_common_term";
    }
    function factorRuleForPolynomial(poly, factored) {
        var deg = polyDegree(poly), f = factorPolynomial(poly);
        if (deg === 1) return String(factored || "").indexOf("*") >= 0 ? "factor_common_term" : null;
        if (containsFactorRoot(f, 0)) return "factor_common_term";
        if (deg === 2 && isZero(polyCoeff(poly, 1)) && polyCoeff(poly, 0) < 0) return "difference_of_squares";
        if (deg === 2) {
            var roots = rootsOfPolynomial(poly);
            if (roots.length === 2 && isZero(roots[0] - roots[1])) return "perfect_square_trinomial";
            return "factor_quadratic";
        }
        return "algebraic_factorization";
    }
    function addMicroStep(steps, rule, action, before, after, explanation, stepType, details) {
        details = details || {};
        details.step_type = stepType || details.step_type || "transform";
        details.granularity = "micro";
        return addStepIfMeaningful(steps, makeStep(rule, action, before, after, explanation, details));
    }
    function buildFactorizationSteps(steps, poly, originalText, options) {
        options = options || {};
        if (!poly || !originalText) return null;
        var factored = factorsToString(factorPolynomial(poly));
        if (!hasMeaningfulChange(originalText, factored)) return factored;
        var rule = options.rule_id || factorRuleForPolynomial(poly, factored);
        var action = options.action || (rule === "factor_common_term" ? "Take out the common factor" : (rule === "difference_of_squares" ? "Factor as a difference of squares" : (rule === "perfect_square_trinomial" ? "Factor the perfect-square trinomial" : "Factor the polynomial")));
        var explanation = options.explanation || (rule === "factor_common_term" ? "All terms contain a common factor, so it is placed outside the parentheses." : (rule === "difference_of_squares" ? "The expression has the form a^2 - b^2, so it becomes (a - b)(a + b)." : "The polynomial is rewritten as a product of simpler factors."));
        addMicroStep(steps, rule, action, originalText, factored, explanation, "transform", options.details || {});
        return factored;
    }
    function buildDenominatorRestrictionSteps(expressionText, denominatorText, denominatorPoly, options) {
        options = options || {};
        var steps = [];
        if (!denominatorPoly && denominatorText) denominatorPoly = parsePoly(denominatorText);
        if (!denominatorPoly) return steps;
        denominatorText = denominatorText || polyToString(denominatorPoly);
        var roots = rootsOfPolynomial(denominatorPoly);
        var equation = denominatorText + " = 0";
        addMicroStep(steps, "extract_denominator", "Find the denominator", expressionText, denominatorText, "A rational expression is undefined where its denominator equals zero.", "domain", { denominator: denominatorText });
        addMicroStep(steps, "set_denominator_not_zero", "Set the denominator equal to zero", denominatorText, equation, "To find forbidden values, solve the equation denominator = 0.", "domain", { denominator: denominatorText });
        var deg = polyDegree(denominatorPoly), a, b, c, factorText, rootText;
        if (deg === 1) {
            a = polyCoeff(denominatorPoly, 1); b = polyCoeff(denominatorPoly, 0);
            var moved = isZero(a - 1) ? ("x = " + frac(-b)) : (frac(a) + "*x = " + frac(-b));
            addMicroStep(steps, "solve_denominator_equation", "Move the constant term", equation, moved, (b < 0 ? "Add " + frac(-b) : "Subtract " + frac(b)) + " on both sides to isolate the variable term.", "transform");
            if (!isZero(a - 1)) addMicroStep(steps, "divide_by_coefficient", "Divide by the coefficient", moved, "x = " + frac(-b / a), "Divide both sides by " + frac(a) + ".", "transform");
        } else if (deg === 2 && isZero(polyCoeff(denominatorPoly, 1))) {
            a = polyCoeff(denominatorPoly, 2); c = polyCoeff(denominatorPoly, 0);
            var afterAdd = polyToString(denominatorPoly) + (c < 0 ? " + " + frac(-c) : " - " + frac(c)) + " = 0" + (c < 0 ? " + " + frac(-c) : " - " + frac(c));
            addMicroStep(steps, "solve_denominator_equation", "Start solving the denominator equation", equation, afterAdd, "Begin isolating the squared term in the denominator equation.", "transform");
            var isolated = frac(a) + "*x^2 = " + frac(-c);
            if (isZero(a - 1)) isolated = "x^2 = " + frac(-c);
            addMicroStep(steps, "move_constant_term", "Move the constant term", afterAdd, isolated, (c < 0 ? "Add " + frac(-c) : "Subtract " + frac(c)) + " to both sides.", "transform");
            if (!isZero(a - 1)) {
                var divided = "x^2 = " + frac((-c) / a);
                addMicroStep(steps, "divide_by_coefficient", "Divide by the coefficient of x^2", isolated, divided, "Divide both sides by " + frac(a) + ".", "transform");
                isolated = divided;
            }
            rootText = rootEquationText(roots);
            addMicroStep(steps, "take_square_root_both_sides", "Take the square root of both sides", isolated, rootText, "Both positive and negative square roots must be included.", "transform", { roots: roots.map(frac) });
        } else {
            factorText = factorsToString(factorPolynomial(denominatorPoly));
            if (hasMeaningfulChange(denominatorText, factorText)) {
                addMicroStep(steps, "solve_denominator_equation", "Factor the denominator equation", equation, factorText + " = 0", "Factoring changes the denominator equation into a product equal to zero.", "transform");
            }
            var factors = factorPolynomial(denominatorPoly).factors.filter(function (f) { return f.type === "linear"; });
            if (factors.length) {
                var factorEquations = factors.map(function (f) { return factorDisplayText(f).replace(/^\((.*)\)$/, "$1") + " = 0"; }).join(" or ");
                addMicroStep(steps, "zero_product_property", "Use the zero product property", (hasMeaningfulChange(denominatorText, factorText) ? factorText : denominatorText) + " = 0", factorEquations, "A product is zero only when at least one factor is zero.", "reasoning");
                rootText = rootEquationText(roots);
                addMicroStep(steps, "solve_linear_factors", "Solve each linear factor", factorEquations, rootText, "Each linear equation gives one denominator zero.", "transform", { roots: roots.map(frac) });
            } else {
                addMicroStep(steps, "solve_denominator_equation", "Solve the denominator equation", equation, rootEquationText(roots), "Solving the denominator equation gives the excluded values.", "domain", { roots: roots.map(frac) });
            }
        }
        addMicroStep(steps, "write_domain_restriction", "Write the domain restriction", rootEquationText(roots), restrictionOnly(roots), "These values make the original denominator zero, so they are excluded.", "domain", { forbidden_values: roots.map(frac) });
        if (options.include_domain_step) {
            var domain = roots.length ? "all real x with " + restrictionOnly(roots) : "all real numbers";
            addMicroStep(steps, "write_domain", "Write the domain", restrictionOnly(roots), domain, "All real numbers are allowed except the forbidden values.", "domain", { domain: domain });
        }
        return steps;
    }
    function buildCheckRootSteps(steps, originalEquation, polynomial, roots) {
        roots = roots || [];
        if (!roots.length) return;
        var checks = [];
        for (var i = 0; i < roots.length; i += 1) {
            checks.push("x = " + frac(roots[i]) + ": " + frac(polyEval(polynomial, roots[i])) + " = 0");
        }
        addMicroStep(steps, "check_roots", "Check the roots", roots.map(function (r) { return "x = " + frac(r); }).join(" and "), checks.join("; "), "Substituting each root into the original equation gives a true statement.", "check", { roots: roots.map(frac) });
    }

    function stepsFromRules(input, answer, rules) {
        var steps = [];
        rules = unique(rules || ["native_rule"]);
        for (var i = 0; i < rules.length; i += 1) {
            var rule = rules[i];
            var type = /domain|forbidden|restriction|denominator/.test(rule) ? "domain" : (/check|verify|classify|compare|detect|continuity|asymptote|sign_chart|interval|substitution|evaluate|leading/.test(rule) ? "reasoning" : "transform");
            var before = input;
            var after = answer;
            if (type === "transform" && !hasMeaningfulChange(before, after)) type = "reasoning";
            addStepIfMeaningful(steps, makeStep(rule, humanizeRule(rule), before, after, explanationForRule(rule, before, after), { step_type: type }));
        }
        return steps;
    }
    function nativePartial(input, action, taskType, strategy, answer, steps, extra) {
        return {
            input: input,
            task_type: taskType,
            selected_action: action,
            selected_strategy: strategy,
            source: "native",
            steps: cleanSteps(steps || stepsFromRules(input, answer, ["native_rule"])),
            verification: NS.verificationPassed ? NS.verificationPassed([{ status: "passed", message: "Native JavaScript rule trace completed." }]) : { status: "passed", checks: [] },
            answer: answer,
            extra: extra || {}
        };
    }

    NS.nativeSolvers = NS.nativeSolvers || {};
    NS.nativeCore = {
        EPS: EPS,
        abs: abs,
        isZero: isZero,
        isInt: isInt,
        round: round,
        gcd: gcd,
        lcm: lcm,
        normalizeMath: normalizeMath,
        displayNumber: displayNumber,
        frac: frac,
        wrapNegative: wrapNegative,
        makeStep: makeStep,
        validateStepQuality: validateStepQuality,
        addStepIfMeaningful: addStepIfMeaningful,
        cleanSteps: cleanSteps,
        createTransformStep: createTransformStep,
        hasMeaningfulChange: hasMeaningfulChange,
        addMicroStep: addMicroStep,
        buildDenominatorRestrictionSteps: buildDenominatorRestrictionSteps,
        buildFactorizationSteps: buildFactorizationSteps,
        buildCheckRootSteps: buildCheckRootSteps,
        restrictionOnly: restrictionOnly,
        rootEquationText: rootEquationText,
        humanizeRule: humanizeRule,
        explanationForRule: explanationForRule,
        unique: unique,
        containsRule: containsRule,
        tokenizeExpr: tokenizeExpr,
        node: node,
        numNode: numNode,
        varNode: varNode,
        bin: bin,
        unary: unary,
        func: func,
        parseExpr: parseExpr,
        astEqual: astEqual,
        astNumber: astNumber,
        isNum: isNum,
        isVar: isVar,
        simplifyAst: simplifyAst,
        renderAst: renderAst,
        evalAst: evalAst,
        polyClean: polyClean,
        polyConst: polyConst,
        polyVar: polyVar,
        polyDegree: polyDegree,
        polyCoeff: polyCoeff,
        polyAdd: polyAdd,
        polyScale: polyScale,
        polyMul: polyMul,
        polyPow: polyPow,
        polyEval: polyEval,
        polyDerivative: polyDerivative,
        polyIntegral: polyIntegral,
        polyFromAst: polyFromAst,
        polyToString: polyToString,
        parsePoly: parsePoly,
        rationalFromAst: rationalFromAst,
        rationalExpression: rationalExpression,
        divisors: divisors,
        divideByLinear: divideByLinear,
        factorPolynomial: factorPolynomial,
        linearFactorText: linearFactorText,
        factorDisplayText: factorDisplayText,
        factorsToString: factorsToString,
        rootsOfPolynomial: rootsOfPolynomial,
        simplifySqrtInt: simplifySqrtInt,
        termOverDen: termOverDen,
        quadraticRootObjects: quadraticRootObjects,
        polynomialLongDivide: polynomialLongDivide,
        splitTopLevelRelation: splitTopLevelRelation,
        splitFractionTop: splitFractionTop,
        restrictionText: restrictionText,
        appendRestriction: appendRestriction,
        cancelCommonFactors: cancelCommonFactors,
        safeArithmetic: safeArithmetic,
        containsFactorRoot: containsFactorRoot,
        repeatedFactorsToString: repeatedFactorsToString,
        evalSafeNumber: evalSafeNumber,
        coefFromString: coefFromString,
        stepsFromRules: stepsFromRules,
        nativePartial: nativePartial
    };

    function rationalSimplify(input) {
        return NS.nativeSolvers.rational && NS.nativeSolvers.rational.rationalSimplify ? NS.nativeSolvers.rational.rationalSimplify(input) : null;
    }
    function rationalDomain(input) {
        return NS.nativeSolvers.rational && NS.nativeSolvers.rational.rationalDomain ? NS.nativeSolvers.rational.rationalDomain(input) : null;
    }
    function solveTrigIdentity(input) {
        return NS.nativeSolvers.trigonometry && NS.nativeSolvers.trigonometry.solveTrigIdentity ? NS.nativeSolvers.trigonometry.solveTrigIdentity(input) : null;
    }
    function solveArithmetic(input) {
        var ans = safeArithmetic(input);
        if (ans === null) return null;
        return nativePartial(input, "simplify", "arithmetic_expression", "arithmetic_evaluation", ans, [makeStep("evaluate_arithmetic", "Evaluate arithmetic", input, ans, "Apply parentheses first, then powers, multiplication/division, and addition/subtraction.")]);
    }
    function solveSimplifyOrFactor(input, action) {
        var ans = safeArithmetic(input);
        if (ans !== null) return solveArithmetic(input);
        var compact = normalizeMath(input);
        // Trigonometric identities are simplifications too.
        var trig = solveTrigIdentity(input);
        if (trig) return trig;
        if (compact.indexOf("/") >= 0) {
            var rat = rationalSimplify(input);
            if (rat) return nativePartial(input, action, "rational_expression", rat.selected_strategy, rat.answer, rat.steps, { forbidden_values: rat.forbidden_values });
        }
        var p = parsePoly(input);
        if (p) {
            if (action === "simplify") {
                var simple = polyToString(p);
                if (simple !== input) return nativePartial(input, action, "algebraic_expression", "collect_like_terms", simple, [makeStep("collect_like_terms", "Collect like terms", input, simple, "Terms with the same power of x are collected.")]);
            }
            if (action === "factor" || polyDegree(p) > 0) {
                var f = factorPolynomial(p), ft = repeatedFactorsToString(f.factors, f.constant);
                if (ft && ft !== polyToString(p)) {
                    var rules = [];
                    if (containsFactorRoot(f, 0)) rules.push("factor_common_term");
                    var linearRoots = [];
                    for (var ri = 0; ri < f.factors.length; ri += 1) if (f.factors[ri].type === "linear") linearRoots.push(f.factors[ri].root);
                    if (linearRoots.length === 2 && isZero(linearRoots[0] - linearRoots[1])) rules.push("perfect_square_trinomial");
                    else if (linearRoots.length === 2 && isZero(linearRoots[0] + linearRoots[1])) rules.push("difference_of_squares");
                    else if (/x\s[+-]\s\d+/.test(ft)) rules.push("factor_quadratic");
                    if (!rules.length) rules.push("algebraic_factorization");
                    var steps = [];
                    for (var i = 0; i < rules.length; i += 1) steps.push(makeStep(rules[i], "Apply factorization rule", input, ft, "A reusable polynomial factorization rule is applied."));
                    return nativePartial(input, action, "algebraic_expression", "algebraic_factorization", ft, steps);
                }
                return nativePartial(input, action, "algebraic_expression", "polynomial_standard_form", polyToString(p), [makeStep("polynomial_standard_form", "Write polynomial in standard form", input, polyToString(p), "The expression is already a polynomial or has been normalized.")]);
            }
        }
        return null;
    }

    function callSolver(group, method, args) {
        var S = NS.nativeSolvers || {};
        return S[group] && S[group][method] ? S[group][method].apply(null, args || []) : null;
    }

    function solveNative(input, options) {
        options = options || {};
        var action = options.action || (NS.defaultAction ? NS.defaultAction(input) : "simplify");
        if (options.list_actions || action === "list_actions") {
            var acts = NS.detectActions ? NS.detectActions(input) : ["simplify"];
            return nativePartial(input, "list_actions", "action_selection", "action_listing", "Available actions: " + acts.join(", "), stepsFromRules(input, "Available actions: " + acts.join(", "), ["action_registry_detect_available_actions"]), { available_actions: acts });
        }
        var out = null;
        var hasLog = /\b(?:log\d*|log_|log\(|ln\()/i.test(String(input || ""));
        if (hasLog && (action === "simplify" || action === "find_domain" || action === "expand_logarithm" || action === "combine_logarithms")) out = callSolver("logarithms", "solveLogExpression", [input, action]);
        if (action === "find_domain" && !out) out = rationalDomain(input);
        if (!out && (action === "simplify" || action === "factor" || action === "find_domain")) out = callSolver("powersRoots", "solvePowerRootExpression", [input]) || solveSimplifyOrFactor(input, action);
        if (!out && action === "solve") out = callSolver("equations", "solveEquationOrInequality", [input]);
        if (!out && action === "differentiate") out = callSolver("derivatives", "solveDerivative", [input]);
        if (!out && (action === "integrate" || action === "integrate_definite")) out = callSolver("integrals", "solveIntegral", [input, options]);
        if (!out && action === "find_area_under_curve") out = callSolver("integrals", "solveArea", [input, action, options]);
        if (!out && (action === "solve_system" || action === "solve_linear_system" || action === "solve_nonlinear_system" || action === "solve_inequality_system")) out = callSolver("systems", "solveSystem", [input, action]);
        if (!out && (action === "find_inverse" || action === "find_range" || action === "find_asymptotes")) out = callSolver("functionProperties", "solveFunctionProperty", [input, action]);
        if (!out && (action === "find_limit" || action === "find_left_limit" || action === "find_right_limit" || action === "find_limit_at_infinity" || action === "check_continuity" || action === "find_discontinuities")) out = callSolver("limitsContinuity", "solveLimitContinuity", [input, action, options]);
        if (!out && (action === "find_critical_points" || action === "find_extrema" || action === "find_monotonicity" || action === "find_tangent_line" || action === "find_normal_line" || action === "find_second_derivative" || action === "find_concavity" || action === "find_inflection_points" || action === "analyze_function")) out = callSolver("derivativeApplications", "solveDerivativeApplication", [input, action, options]);
        if (out && out.extra) { for (var k in out.extra) if (Object.prototype.hasOwnProperty.call(out.extra, k)) out[k] = out.extra[k]; delete out.extra; }
        return out;
    }

    NS.nativeSolvers.algebra = {
        solveArithmetic: solveArithmetic,
        solveSimplifyOrFactor: solveSimplifyOrFactor
    };

    NS.nativeAlgebra = {
        normalizeMath: normalizeMath,
        makeStep: makeStep,
        validateStepQuality: validateStepQuality,
        addStepIfMeaningful: addStepIfMeaningful,
        cleanSteps: cleanSteps,
        createTransformStep: createTransformStep,
        hasMeaningfulChange: hasMeaningfulChange,
        solveArithmetic: solveArithmetic,
        combineLikeTerms: function (input) { return solveSimplifyOrFactor(input, "simplify"); },
        factorSimple: function (input) { return solveSimplifyOrFactor(input, "factor"); },
        polynomialDerivative: function (input) { return callSolver("derivatives", "solveDerivative", [input]); },
        integrateSimple: function (input) { return callSolver("integrals", "solveIntegral", [input, {}]); },
        gcd: gcd,
        parseExpr: parseExpr,
        renderAst: renderAst,
        parsePoly: parsePoly,
        polyToString: polyToString,
        rationalSimplify: rationalSimplify,
        rationalDomain: rationalDomain,
        solveNative: solveNative
    };
})(window.AlgebraTrace);
