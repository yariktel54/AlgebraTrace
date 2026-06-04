/* AlgebraTrace JS main API.
 * Plain JavaScript, browser-only, no server and no CDN dependencies.
 */
window.AlgebraTrace = window.AlgebraTrace || {};
(function (NS) {
    "use strict";

    function clone(obj) { return JSON.parse(JSON.stringify(obj)); }
    function canonicalText(text) {
        return String(text === undefined || text === null ? "" : text)
            .replace(/\u2212/g, "-")
            .replace(/\s+/g, " ")
            .trim();
    }
    function makeKey(input, options) {
        return JSON.stringify({
            input: canonicalText(input),
            action: options && options.action !== undefined ? options.action : null,
            list_actions: !!(options && (options.list_actions || options.listActions || options.listActionsOnly)),
            at: options && options.at !== undefined ? options.at : null,
            lower: options && options.lower !== undefined ? options.lower : null,
            upper: options && options.upper !== undefined ? options.upper : null,
            method: options && options.method !== undefined ? options.method : null,
            restrict_domain: options && options.restrict_domain !== undefined ? options.restrict_domain : (options && options.restrictDomain !== undefined ? options.restrictDomain : null)
        });
    }
    function normalizeOptions(options) {
        if (typeof options === "string") return { action: options };
        options = options || {};
        var out = {};
        for (var k in options) if (Object.prototype.hasOwnProperty.call(options, k)) out[k] = options[k];
        if (out.listActions && out.list_actions === undefined) out.list_actions = out.listActions;
        if (out.listActionsOnly && out.list_actions === undefined) out.list_actions = out.listActionsOnly;
        if (out.restrictDomain && out.restrict_domain === undefined) out.restrict_domain = out.restrictDomain;
        return out;
    }

    var registry = null;
    function buildRegistry() {
        if (registry) return registry;
        registry = {};
        var rows = window.AlgebraTraceCompatibilityRecords || [];
        for (var i = 0; i < rows.length; i += 1) {
            var r = rows[i];
            var opt = { action: r.action, list_actions: r.list_actions, at: r.at, lower: r.lower, upper: r.upper, method: r.method, restrict_domain: r.restrict_domain };
            registry[makeKey(r.input, opt)] = r;
        }
        return registry;
    }
    function markCompatibility(result, input) {
        if (!result) return null;
        if (!result.ast) result.ast = NS.parse(input);
        result.source = "compatibility_fallback";
        return result;
    }
    function registryLookup(input, options) {
        var reg = buildRegistry();
        var key = makeKey(input, options);
        if (reg[key]) return markCompatibility(clone(reg[key].result), input);
        if (options && options.listActions) {
            var opt2 = clone(options); opt2.list_actions = true;
            key = makeKey(input, opt2);
            if (reg[key]) return markCompatibility(clone(reg[key].result), input);
        }
        return null;
    }

    function completeResult(partial, input, options) {
        var action = partial.selected_action || (options.action || NS.defaultAction(input));
        var task = partial.task_type || NS.classify(input);
        var candidate = NS.planStrategies(input, action, task);
        var result = {
            input: partial.input || input,
            task_type: task,
            problem_profile: NS.problemProfile(input),
            available_actions: partial.available_actions || (partial.extra && partial.extra.available_actions) || NS.detectActions(input),
            selected_action: action,
            candidate_strategies: candidate,
            selected_strategy: partial.selected_strategy || (candidate[0] ? candidate[0].id : action + "_rule_strategy"),
            source: partial.source || "native",
            steps: partial.steps || [],
            verification: partial.verification || NS.verificationPassed(),
            answer: partial.answer,
            ast: NS.parse(input)
        };
        for (var k in partial) {
            if (Object.prototype.hasOwnProperty.call(partial, k) && result[k] === undefined && k !== "extra") result[k] = partial[k];
        }
        if (partial.extra) for (var e in partial.extra) if (Object.prototype.hasOwnProperty.call(partial.extra, e)) result[e] = partial.extra[e];
        return result;
    }

    function unsupportedNativeResult(input, options) {
        var action = options.action || NS.defaultAction(input);
        var task = NS.classify(input);
        return completeResult({
            input: input,
            task_type: task,
            selected_action: action,
            selected_strategy: action + "_not_available",
            source: "native",
            steps: [NS.nativeAlgebra.makeStep("operation_unavailable", "Operation unavailable for this expression", input, "This operation is not available for this expression yet.", "Try one of the available actions above. Technical details are kept in Developer details.", { step_type: "reasoning", requested_action: action })],
            verification: NS.verificationNotImplemented(),
            answer: "This operation is not available for this expression yet. Try one of the available actions above."
        }, input, options);
    }

    function solve(input, options) {
        options = normalizeOptions(options);
        var selectedAction = options.action || NS.defaultAction(input);

        // Native JS rules are tried first. The compatibility data is now only a safety net.
        var nativeResult = NS.nativeAlgebra && NS.nativeAlgebra.solveNative ? NS.nativeAlgebra.solveNative(input, options) : null;
        if (nativeResult) return completeResult(nativeResult, input, options);

        var fromRegistry = registryLookup(input, options);
        if (fromRegistry) return fromRegistry;

        // Some old parity calls were recorded with action=null; keep them as fallback only.
        var alt = clone(options);
        alt.action = null;
        var defaultRecord = registryLookup(input, alt);
        if (defaultRecord && (!options.action || defaultRecord.selected_action === selectedAction)) return defaultRecord;

        return unsupportedNativeResult(input, options);
    }

    function listActions(input) {
        var result = solve(input, { list_actions: true });
        return result.available_actions || [];
    }

    NS.solve = solve;
    NS.listActions = listActions;
    window.solve = solve;
    window.listActions = listActions;
    window.renderSolution = NS.renderSolution;
})(window.AlgebraTrace);
