window.AlgebraTrace = window.AlgebraTrace || {};
(function (NS) {
    "use strict";

    var state = { input:"", actions:[], selectedAction:null, lastResult:null, graphExpression:"", editor:null };

    function $(id) { return document.getElementById(id); }
    function escapeHTML(text) { return NS.escapeHTML ? NS.escapeHTML(text) : String(text || ""); }
    function isDevMode() { return document.body && document.body.getAttribute("data-mode") === "dev"; }

    function getInputValue() {
        if (state.editor && state.editor.getValue) return state.editor.getValue();
        return ($("inputText") ? $("inputText").value : "");
    }

    function setInputValue(text, caret) {
        if (state.editor && state.editor.setValue) state.editor.setValue(text, caret);
        else if ($("inputText")) $("inputText").value = text;
        renderPreview();
    }

    function optionValues() {
        return {
            at: $("atInput") && $("atInput").value ? $("atInput").value : undefined,
            lower: $("lowerInput") && $("lowerInput").value ? $("lowerInput").value : undefined,
            upper: $("upperInput") && $("upperInput").value ? $("upperInput").value : undefined
        };
    }

    function showMessage(message) {
        var box = $("messageBox");
        if (!box) return;
        box.textContent = message || "";
        box.className = message ? "toast visible" : "toast";
    }

    function renderPreview() {
        var host = $("mathPreview");
        if (!host) return;
        var latex = state.editor && state.editor.getLatex ? state.editor.getLatex().trim() : "";
        var text = getInputValue().trim();
        if (!latex && !text) {
            host.innerHTML = '<span class="preview-empty">LaTeX source and solver export are synchronized from the editor.</span>';
            return;
        }
        try {
            host.innerHTML = (NS.renderLatex && latex ? NS.renderLatex(latex) : (NS.renderMath ? NS.renderMath(text) : escapeHTML(text))) +
                '<div class="latex-source"><span>LaTeX</span><code>' + escapeHTML(latex || (NS.mathToLatex ? NS.mathToLatex(text) : text)) + '</code></div>' +
                '<div class="latex-source"><span>Solver text</span><code>' + escapeHTML(text) + '</code></div>';
        } catch (e) {
            host.textContent = latex || text;
        }
    }

    function isUnsupportedResult(result) {
        if (!result) return true;
        if (String(result.answer || "").toLowerCase().indexOf("not implemented") >= 0) return true;
        if (String(result.selected_strategy || "").indexOf("not_implemented") >= 0) return true;
        if (String(result.selected_strategy || "").indexOf("not_available") >= 0) return true;
        if (String(result.answer || "").toLowerCase().indexOf("operation is not available") >= 0) return true;
        var steps = result.steps || [];
        for (var i = 0; i < steps.length; i += 1) if (steps[i].rule_id === "unsupported_pattern") return true;
        return false;
    }

    function shouldAutoGraph(action, input) {
        if (!NS.isGraphable || !NS.isGraphable(input)) return false;
        return ["graph", "solve", "find_extrema", "find_monotonicity", "analyze_function", "find_asymptotes", "find_discontinuities"].indexOf(action) >= 0;
    }

    function hideGraph() {
        var panel = $("graphPanel");
        if (panel) panel.className = "graph-card";
        var note = $("graphNote");
        if (note) note.textContent = "";
    }

    function showGraph(input, keepView) {
        var panel = $("graphPanel");
        var canvas = $("graphCanvas");
        var note = $("graphNote");
        if (!panel || !canvas || !NS.plotExpression) return false;
        panel.className = "graph-card visible";
        var ok = NS.plotExpression(canvas, input, { keepView:!!keepView });
        state.graphExpression = input;
        if (note) note.textContent = ok ? "Drag to pan. Use the mouse wheel or pinch gesture to zoom." : "Graph is not available for this input.";
        return ok;
    }

    function renderExamples() {
        var host = $("exampleChips");
        if (!host) return;
        host.innerHTML = "";
        if (!isDevMode()) return;
        var examples = NS.examples || [];
        if (!examples.length) return;
        var label = document.createElement("span");
        label.className = "hint";
        label.textContent = "Try:";
        host.appendChild(label);
        for (var i = 0; i < examples.length; i += 1) {
            var ex = examples[i];
            var input = typeof ex === "string" ? ex : ex.input;
            var text = typeof ex === "string" ? ex : ex.label;
            var btn = document.createElement("button");
            btn.type = "button";
            btn.className = "chip";
            btn.textContent = text;
            btn.setAttribute("data-input", input);
            host.appendChild(btn);
        }
    }

    function renderActionCards(actions, selectedAction) {
        var host = $("actionCards");
        if (!host) return;
        host.innerHTML = "";
        if (!actions || !actions.length) {
            host.innerHTML = '<p class="hint">Enter a math expression to see useful operations.</p>';
            return;
        }
        for (var i = 0; i < actions.length; i += 1) {
            var action = actions[i];
            var btn = document.createElement("button");
            btn.type = "button";
            btn.className = "action-card" + (action === selectedAction ? " active" : "");
            btn.setAttribute("data-action", action);
            btn.innerHTML = '<span class="action-title">' + escapeHTML(NS.actionTitle ? NS.actionTitle(action) : action) + '</span>' +
                '<span class="action-desc">' + escapeHTML(NS.actionDescription ? NS.actionDescription(action) : "Run this operation.") + '</span>';
            host.appendChild(btn);
        }
    }

    function detectAvailableActions(input) {
        var actions = [];
        try { actions = listActions(input) || []; }
        catch (e) { actions = []; }
        var def = NS.getDefaultAction ? NS.getDefaultAction(input) : (NS.defaultAction ? NS.defaultAction(input) : "simplify");
        if (NS.isGraphable && NS.isGraphable(input) && actions.indexOf("graph") < 0) actions.push("graph");
        if (actions.indexOf(def) < 0 && def !== "graph") actions.unshift(def);
        return { actions:actions, defaultAction:def };
    }

    function renderOutput(result) {
        var output = $("output");
        if (!output) return;
        output.className = "result-host-output";
        output.innerHTML = NS.renderSolution ? NS.renderSolution(result, { developer:isDevMode() }) : "";
    }

    function showResult(result, action, input) {
        state.lastResult = result;
        renderOutput(result);
        if (isUnsupportedResult(result)) showMessage("This operation is not available for this expression yet. Try one of the available actions above.");
        else showMessage("");
        if (shouldAutoGraph(action, input)) showGraph(input, false);
        else hideGraph();
    }

    function runAction(action) {
        var input = getInputValue().trim();
        if (!input) {
            showMessage("Enter a mathematical expression first.");
            if (state.editor) state.editor.focus();
            return;
        }
        state.input = input;
        state.selectedAction = action;
        renderActionCards(state.actions, action);
        if (action === "graph") {
            if (!state.lastResult) {
                var def = NS.getDefaultAction ? NS.getDefaultAction(input) : "simplify";
                state.lastResult = solve(input, Object.assign({ action:def }, optionValues()));
                renderOutput(state.lastResult);
            }
            showGraph(input, false);
            showMessage("");
            return;
        }
        var options = optionValues();
        options.action = action;
        var result = solve(input, options);
        showResult(result, action, input);
    }

    function processInput() {
        var input = getInputValue().trim();
        if (!input) {
            showMessage("Enter a mathematical expression first.");
            if (state.editor) state.editor.focus();
            return;
        }
        var detected = detectAvailableActions(input);
        state.input = input;
        state.actions = detected.actions;
        state.selectedAction = detected.defaultAction;
        state.lastResult = null;
        renderActionCards(state.actions, state.selectedAction);
        runAction(state.selectedAction);
    }

    function bindEvents() {
        var solveButton = $("solveBtn");
        if (solveButton) solveButton.addEventListener("click", processInput);
        var input = $("inputText");
        if (input) {
            input.addEventListener("keydown", function (event) {
                if (event.key === "Enter") {
                    event.preventDefault();
                    processInput();
                }
            });
            input.addEventListener("input", function () {
                if (!state.editor || state.editor.getValue() !== input.value) renderPreview();
                showMessage("");
            });
        }
        var actions = $("actionCards");
        if (actions) actions.addEventListener("click", function (event) {
            var node = event.target;
            while (node && node !== actions && !node.getAttribute("data-action")) node = node.parentNode;
            if (node && node.getAttribute("data-action")) runAction(node.getAttribute("data-action"));
        });
        var chips = $("exampleChips");
        if (chips) chips.addEventListener("click", function (event) {
            var node = event.target;
            if (!node || !node.getAttribute("data-input")) return;
            setInputValue(node.getAttribute("data-input"));
            processInput();
        });
        var reset = $("resetGraphBtn");
        if (reset) reset.addEventListener("click", function () {
            var canvas = $("graphCanvas");
            if (canvas && NS.resetGraphView) NS.resetGraphView(canvas);
        });
        window.addEventListener("resize", function () {
            if (state.graphExpression && state.selectedAction && shouldAutoGraph(state.selectedAction, state.input)) showGraph(state.graphExpression, true);
        });
    }

    function initEditor() {
        var host = $("mathEditor");
        if (!host || !NS.createMathEditor) return;
        state.editor = NS.createMathEditor(host, {
            input:"inputText",
            placeholder:isDevMode() ? "Enter LaTeX or use the math keyboard" : "Enter math in LaTeX",
            onChange:function () {
                renderPreview();
                showMessage("");
            },
            onEnter:function () { processInput(); }
        });
        NS.__activeMathEditor = state.editor;
        window.getMathEditorValue = function () { return state.editor ? state.editor.getValue() : ""; };
        window.setMathEditorValue = function (text) { if (state.editor) state.editor.setValue(text); };
        window.insertIntoMathEditor = function (text, offset) { if (state.editor) state.editor.insertText(text, offset); };
    }

    function initInitialState() {
        initEditor();
        renderExamples();
        renderActionCards([], null);
        renderPreview();
        if (NS.initMathKeyboard) NS.initMathKeyboard({ host:"mathKeyboard", input:"inputText", editor:state.editor });
        if (isDevMode()) {
            if (!getInputValue()) setInputValue("x^2 - 5*x + 6 = 0");
            renderPreview();
            processInput();
        }
    }

    function init() {
        bindEvents();
        initInitialState();
    }

    function insertIntoEditor(textOrTemplate, cursorOffset) {
        if (state.editor && state.editor.insertText) {
            state.editor.insertText(textOrTemplate, cursorOffset);
            return;
        }
        var input = $("inputText");
        if (input) {
            input.value = (input.value || "") + String(textOrTemplate || "");
            input.dispatchEvent(new Event("input", { bubbles:true }));
        }
    }

    NS.processAlgebraTraceInput = processInput;
    NS.runAlgebraTraceAction = runAction;
    NS.updateMathPreview = renderPreview;
    NS.getMathEditor = function () { return state.editor; };
    NS.getCurrentInputValue = getInputValue;
    NS.getMathEditorValue = getInputValue;
    NS.setMathEditorValue = setInputValue;
    NS.insertIntoMathEditor = insertIntoEditor;
    window.getMathEditorValue = getInputValue;
    window.setMathEditorValue = setInputValue;
    window.insertIntoMathEditor = insertIntoEditor;

    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
    else init();
})(window.AlgebraTrace);
