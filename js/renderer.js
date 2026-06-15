/* AlgebraTrace JS: result text/HTML renderer. */
window.AlgebraTrace = window.AlgebraTrace || {};
(function (NS) {
    "use strict";

    function escapeHTML(text) {
        return String(text === undefined || text === null ? "" : text)
            .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }

    function isDevMode() {
        return !!(typeof document !== "undefined" && document.body && document.body.getAttribute("data-mode") === "dev");
    }

    function mathHTML(text) {
        return NS.renderMath ? NS.renderMath(text) : '<span class="math-render">' + escapeHTML(text) + '</span>';
    }

    function actionTitle(action) {
        var titles = {
            simplify: "Simplify",
            expand_logarithm: "Expand logarithm",
            combine_logarithms: "Combine logarithms",
            factor: "Factor",
            find_domain: "Find domain",
            solve_with_parameters: "Solve with parameters",
            analyze_parameters: "Analyze parameter cases",
            solve: "Solve",
            differentiate: "Find derivative",
            integrate: "Find integral",
            integrate_definite: "Evaluate definite integral",
            find_area_under_curve: "Find area under curve",
            solve_system: "Solve system",
            solve_linear_system: "Solve linear system",
            solve_nonlinear_system: "Solve nonlinear system",
            solve_inequality_system: "Solve inequality system",
            find_critical_points: "Find critical points",
            find_extrema: "Find extrema",
            find_monotonicity: "Find monotonicity",
            find_tangent_line: "Find tangent line",
            find_normal_line: "Find normal line",
            find_second_derivative: "Find second derivative",
            find_concavity: "Find concavity",
            find_inflection_points: "Find inflection points",
            find_inverse: "Find inverse",
            find_range: "Find range",
            find_asymptotes: "Find asymptotes",
            find_limit: "Find limit",
            find_left_limit: "Find left limit",
            find_right_limit: "Find right limit",
            find_limit_at_infinity: "Find limit at infinity",
            check_continuity: "Check continuity",
            find_discontinuities: "Find discontinuities",
            analyze_function: "Analyze function",
            graph: "Graph"
        };
        return titles[action] || String(action || "Result").replace(/_/g, " ").replace(/^./, function (c) { return c.toUpperCase(); });
    }

    function actionDescription(action) {
        var descriptions = {
            simplify: "Reduce the expression and keep restrictions when needed.",
            expand_logarithm: "Use logarithm product, quotient, and power rules.",
            combine_logarithms: "Combine same-base logarithms into one logarithm when possible.",
            factor: "Rewrite the expression as a product of factors.",
            find_domain: "Find values where the expression is defined.",
            solve_with_parameters: "Solve in x while treating other letters as parameters.",
            analyze_parameters: "Split the solution into parameter cases.",
            solve: "Find roots or solution intervals and show the steps.",
            differentiate: "Apply derivative rules step by step.",
            integrate: "Find an antiderivative and add the constant C.",
            integrate_definite: "Use bounds to compute the exact accumulated value.",
            find_area_under_curve: "Compute the area over an interval.",
            solve_system: "Find values that satisfy all equations together.",
            solve_linear_system: "Use elimination or substitution for a linear system.",
            solve_nonlinear_system: "Solve a simple nonlinear system where supported.",
            solve_inequality_system: "Intersect the solution sets of the inequalities.",
            find_critical_points: "Set the first derivative equal to zero.",
            find_extrema: "Locate local maximum and minimum points.",
            find_monotonicity: "Use the derivative sign to describe increasing and decreasing intervals.",
            find_tangent_line: "Build the tangent line at a selected point.",
            find_normal_line: "Build the normal line at a selected point.",
            find_second_derivative: "Differentiate once more.",
            find_concavity: "Use the second derivative to describe concavity.",
            find_inflection_points: "Find where concavity may change.",
            find_inverse: "Swap x and y and solve for the inverse function.",
            find_range: "Determine possible output values.",
            find_asymptotes: "Find vertical, horizontal, or slant asymptotes.",
            find_limit: "Evaluate the limiting value.",
            find_left_limit: "Approach the point from the left.",
            find_right_limit: "Approach the point from the right.",
            find_limit_at_infinity: "Analyze end behavior.",
            check_continuity: "Compare value and limit at a point.",
            find_discontinuities: "Find holes and breaks in the function.",
            analyze_function: "Combine derivative information into a function summary.",
            graph: "Draw a visual graph when the expression is graphable."
        };
        return descriptions[action] || "Run this operation for the current input.";
    }

    function isUnsupported(result) {
        if (!result) return true;
        if (String(result.answer || "").toLowerCase().indexOf("not implemented") >= 0) return true;
        if (String(result.selected_strategy || "").indexOf("not_implemented") >= 0) return true;
        if (String(result.selected_strategy || "").indexOf("not_available") >= 0) return true;
        if (String(result.answer || "").toLowerCase().indexOf("operation is not available") >= 0) return true;
        var steps = result.steps || [];
        for (var i = 0; i < steps.length; i += 1) if (steps[i].rule_id === "unsupported_pattern") return true;
        return false;
    }

    function readableFromRule(rule) {
        var map = {
            factor_quadratic: "Factor the quadratic",
            zero_product_property: "Use the zero-product property",
            solve_first_linear_factor: "Solve the first factor",
            solve_second_linear_factor: "Solve the second factor",
            check_roots: "Check the roots",
            factor_common_term: "Extract the common factor",
            difference_of_squares: "Use the difference of squares",
            perfect_square_trinomial: "Recognize a perfect square",
            cancel_common_factor: "Cancel the common factor",
            preserve_domain_restriction: "Keep the domain restriction",
            extract_denominator: "Identify the denominator",
            set_denominator_not_zero: "Set the denominator nonzero",
            solve_denominator_equation: "Solve the denominator equation",
            write_domain_restriction: "Write the domain restriction",
            derivative_power_rule: "Apply the power rule",
            derivative_sum_rule: "Apply the sum rule",
            derivative_constant_rule: "Differentiate the constant",
            derivative_trig_rule: "Apply the trigonometric derivative rule",
            derivative_chain_rule: "Apply the chain rule",
            integral_sum_rule: "Apply the sum rule for integrals",
            integral_power_rule: "Apply the power rule for integrals",
            integral_constant_rule: "Integrate the constant term",
            integral_check_by_differentiation: "Check by differentiation",
            sign_chart: "Build a sign chart",
            interval_solution: "Write the solution interval",
            direct_substitution: "Try direct substitution",
            factor_and_cancel: "Factor and cancel",
            direct_substitution_after_cancellation: "Substitute after cancellation",
            detect_main_variable_and_parameters: "Detect variable and parameters",
            identify_parameterized_coefficients: "Identify parameter coefficients",
            separate_linear_parameter_cases: "Split linear parameter cases",
            compute_discriminant: "Compute the discriminant",
            split_discriminant_cases: "Split discriminant cases",
            split_parameter_sign_cases: "Split parameter sign cases"
        };
        if (map[rule]) return map[rule];
        return String(rule || "Step").replace(/_/g, " ").replace(/^./, function (c) { return c.toUpperCase(); });
    }

    function cleanStepTitle(step, developer) {
        var action = String(step && step.action ? step.action : "");
        if (!developer && (/^Apply\s+[a-z0-9_]+$/i.test(action) || !action)) return readableFromRule(step.rule_id);
        return action || readableFromRule(step.rule_id);
    }

    function cleanExplanation(step, developer) {
        var text = String(step && step.explanation ? step.explanation : "");
        if (!developer && text === "Native JavaScript rule-based transformation.") return "";
        return text;
    }

    function solutionToText(result, showStrategy) {
        var lines = [];
        lines.push("Input: " + result.input);
        if (showStrategy) {
            lines.push("Task type: " + result.task_type);
            lines.push("Available actions: " + (result.available_actions || []).join(", "));
            lines.push("Selected action: " + result.selected_action);
            lines.push("Selected strategy: " + result.selected_strategy);
            lines.push("Verification: " + (result.verification ? result.verification.status : "unknown"));
            lines.push("Source: " + (result.source || "unknown"));
        }
        lines.push("Answer: " + result.answer);
        lines.push("");
        lines.push("Steps:");
        var steps = result.steps || [];
        for (var i = 0; i < steps.length; i += 1) {
            var step = steps[i];
            lines.push(String(i + 1) + ". [" + step.rule_id + "] " + step.action);
            lines.push("   Before: " + step.before);
            lines.push("   After: " + step.after);
            lines.push("   " + step.explanation);
        }
        return lines.join("\n");
    }

    function renderStep(step, index, developer) {
        var before = step.before || "";
        var after = step.after || "";
        var html = [];
        html.push('<li class="step-card">');
        html.push('<div class="step-number">Step ' + (index + 1) + '</div>');
        html.push('<div class="step-action">' + escapeHTML(cleanStepTitle(step, developer)) + '</div>');
        if (before || after) {
            html.push('<div class="equation-line">');
            if (before) html.push('<div class="math-box">' + mathHTML(before) + '</div>');
            if (after && after !== before) {
                html.push('<div class="arrow">↓</div>');
                html.push('<div class="math-box">' + mathHTML(after) + '</div>');
            }
            html.push('</div>');
        }
        var explanation = cleanExplanation(step, developer);
        if (explanation) html.push('<div class="step-explanation">' + escapeHTML(explanation) + '</div>');
        if (developer) {
            html.push('<div class="rule-id" data-dev-only>Rule: <code>' + escapeHTML(step.rule_id || "") + '</code></div>');
            if (step.details && Object.keys(step.details).length) {
                html.push('<details class="dev-details" data-dev-only><summary>Step details</summary><pre>' + escapeHTML(JSON.stringify(step.details, null, 2)) + '</pre></details>');
            }
        }
        html.push('</li>');
        return html.join("\n");
    }

    function renderDeveloperDetails(result) {
        var strategies = result.candidate_strategies || [];
        var html = [];
        html.push('<details class="dev-details" data-dev-only open>');
        html.push('<summary>Developer details</summary>');
        html.push('<div class="dev-grid">');
        html.push('<div class="dev-item"><strong>Task type</strong><br>' + escapeHTML(result.task_type || "unknown") + '</div>');
        html.push('<div class="dev-item"><strong>Selected action</strong><br>' + escapeHTML(result.selected_action || "") + '</div>');
        html.push('<div class="dev-item"><strong>Selected strategy</strong><br>' + escapeHTML(result.selected_strategy || "") + '</div>');
        html.push('<div class="dev-item"><strong>Verification</strong><br>' + escapeHTML(result.verification ? result.verification.status : "unknown") + '</div>');
        html.push('<div class="dev-item"><strong>Source</strong><br>' + escapeHTML(result.source || "unknown") + '</div>');
        html.push('<div class="dev-item"><strong>Candidate strategies</strong><br>' + escapeHTML(strategies.length ? strategies.map(function (s) { return s.id || s; }).join(", ") : "none") + '</div>');
        html.push('</div>');
        html.push('<details><summary>Raw JSON</summary><pre>' + escapeHTML(JSON.stringify(result, null, 2)) + '</pre></details>');
        html.push('</details>');
        return html.join("\n");
    }

    function renderSolution(result, options) {
        options = options || {};
        var developer = options.developer === undefined ? isDevMode() : !!options.developer;
        var html = [];
        var unsupported = isUnsupported(result);
        html.push('<section class="result-card">');
        html.push('<div class="result-head">');
        html.push('<div><h2>' + escapeHTML(actionTitle(result.selected_action)) + '</h2><p class="hint">Input: ' + mathHTML(result.input) + '</p></div>');
        if (developer && result.source === "native") html.push('<span class="badge">Native JS</span>');
        if (developer && result.source === "compatibility_fallback") html.push('<span class="badge">compatibility fallback</span>');
        html.push('</div>');
        if (developer && result.source === "compatibility_fallback") {
            html.push('<div class="warning-box">This result was produced by compatibility fallback. Native JS implementation is not available for this pattern yet.</div>');
        }
        if (unsupported) {
            html.push('<div class="warning-box">This operation is not available for this expression yet. Try one of the available actions above.</div>');
        } else {
            html.push('<div class="answer-box"><div class="answer-label">Final answer</div><div class="answer-value">' + mathHTML(result.answer || "") + '</div></div>');
            html.push('<h3>Step-by-step solution</h3>');
            var steps = result.steps || [];
            if (steps.length) {
                html.push('<ol class="steps-list">');
                for (var i = 0; i < steps.length; i += 1) html.push(renderStep(steps[i], i, developer));
                html.push('</ol>');
            } else {
                html.push('<p class="hint">No step trace was returned for this operation.</p>');
            }
        }
        if (developer) html.push(renderDeveloperDetails(result));
        html.push('</section>');
        return html.join("\n");
    }

    NS.escapeHTML = escapeHTML;
    NS.actionTitle = actionTitle;
    NS.actionDescription = actionDescription;
    NS.solutionToText = solutionToText;
    NS.renderSolution = renderSolution;
})(window.AlgebraTrace);
