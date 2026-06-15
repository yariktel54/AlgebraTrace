window.AlgebraTrace = window.AlgebraTrace || {};
(function (NS) {
    "use strict";

    function $(id) { return document.getElementById(id); }

    var groups = [
        { title:"Numbers", columns:5, keys:[
            { label:"7", insert:"7" }, { label:"8", insert:"8" }, { label:"9", insert:"9" }, { label:"(", insert:"(" }, { label:")", insert:")" },
            { label:"4", insert:"4" }, { label:"5", insert:"5" }, { label:"6", insert:"6" }, { label:"x", insert:"x" }, { label:"a", insert:"a" },
            { label:"1", insert:"1" }, { label:"2", insert:"2" }, { label:"3", insert:"3" }, { label:"b", insert:"b" }, { label:"c", insert:"c" },
            { label:"0", insert:"0" }, { label:".", insert:"." }, { label:"π", insert:"\\pi " }, { label:";", insert:"; " }, { label:",", insert:", " }
        ]},
        { title:"Operations", columns:4, keys:[
            { label:"+", insert:"+" }, { label:"−", insert:"-" }, { label:"×", insert:"\\cdot " }, { label:"÷", insert:"/" },
            { label:"=", insert:"=" }, { label:"<", insert:"<" }, { label:">", insert:">" }, { label:"≤", insert:"\\le " },
            { label:"≥", insert:"\\ge " }, { label:"≠", insert:"\\ne " }, { label:"±", insert:"\\pm " }, { label:"∞", insert:"\\infty " }
        ]},
        { title:"Structure", columns:4, keys:[
            { labelHTML:'<span class="key-frac"><span>□</span><span></span><span>□</span></span>', aria:"fraction", insert:"\\frac{}{}", cursor:6, kind:"template" },
            { labelHTML:'<span class="key-power">a<sup>□</sup></span>', aria:"power", insert:"^{}", cursor:2, kind:"template" },
            { labelHTML:'<span class="key-root">√□</span>', aria:"square root", insert:"\\sqrt{}", cursor:6, kind:"template" },
            { labelHTML:'<span class="key-abs">|□|</span>', aria:"absolute value", insert:"\\left|\\right|", cursor:6, kind:"template" },
            { labelHTML:'<span class="key-system">system ;</span>', aria:"system separator", insert:"; ", cursor:2, kind:"template wide" },
            { labelHTML:'D', aria:"discriminant", insert:"D=b^2-4\\cdot a\\cdot c", kind:"template wide" }
        ]},
        { title:"Functions", columns:4, keys:[
            { label:"sin", insert:"\\sin()", cursor:5 }, { label:"cos", insert:"\\cos()", cursor:5 }, { label:"tan", insert:"\\tan()", cursor:5 }, { label:"ln", insert:"\\ln()", cursor:4 },
            { labelHTML:'log<sub>2</sub>', aria:"log base 2", insert:"\\log_{2}()", cursor:9 },
            { labelHTML:'log<sub>a</sub>', aria:"log base a", insert:"\\log_{}()", cursor:6 },
            { label:"exp", insert:"\\exp()", cursor:5 }, { labelHTML:'x<sup>2</sup>', aria:"square", insert:"^{2}", cursor:4 }
        ]},
        { title:"Calculus", columns:3, keys:[
            { labelHTML:'<span class="key-derivative">d/dx</span>', aria:"derivative", insert:"\\frac{d}{dx} ", cursor:13, kind:"wide" },
            { labelHTML:'<span class="key-integral">∫</span>', aria:"integral", insert:"integrate ", cursor:10, kind:"wide" },
            { labelHTML:'<span class="key-limit">lim</span>', aria:"limit", insert:"limit(, x, )", cursor:6, kind:"wide" }
        ]}
    ];

    function insertAtCursor(target, text, cursorOffset) {
        if (!target) return;
        if (target.insertText && typeof target.insertText === "function") {
            target.insertText(text, cursorOffset);
            return;
        }
        var input = target;
        var start = input.selectionStart;
        var end = input.selectionEnd;
        if (typeof start !== "number" || typeof end !== "number") {
            input.value += text;
            input.focus();
            input.dispatchEvent(new Event("input", { bubbles:true }));
            return;
        }
        input.value = input.value.slice(0, start) + text + input.value.slice(end);
        var caret = start + (typeof cursorOffset === "number" ? cursorOffset : text.length);
        input.focus();
        input.setSelectionRange(caret, caret);
        input.dispatchEvent(new Event("input", { bubbles:true }));
    }

    function createButton(key) {
        var button = document.createElement("button");
        button.type = "button";
        button.className = "key-btn" + (key.kind ? " " + key.kind : "");
        if (key.labelHTML) button.innerHTML = key.labelHTML;
        else button.textContent = key.label;
        button.setAttribute("data-insert", key.insert);
        button.setAttribute("aria-label", key.aria || key.label || key.insert);
        if (typeof key.cursor === "number") button.setAttribute("data-cursor", String(key.cursor));
        return button;
    }
    function findKeyButton(node, root) {
        while (node && node !== root) {
            if (node.getAttribute && node.getAttribute("data-insert")) return node;
            node = node.parentNode;
        }
        return null;
    }

    function initMathKeyboard(options) {
        options = options || {};
        var host = typeof options.host === "string" ? $(options.host) : options.host;
        var input = options.editor || (typeof options.input === "string" ? $(options.input) : options.input);
        if (!host || !input) return null;

        host.innerHTML = "";
        host.className = "math-keyboard open";

        var toggle = document.createElement("button");
        toggle.type = "button";
        toggle.className = "keyboard-toggle";
        toggle.innerHTML = '<span>Math keyboard</span><span aria-hidden="true">⌄</span>';
        host.appendChild(toggle);

        var body = document.createElement("div");
        body.className = "keyboard-body";
        host.appendChild(body);

        groups.forEach(function (group) {
            var block = document.createElement("section");
            block.className = "keyboard-group";
            var title = document.createElement("div");
            title.className = "keyboard-group-title";
            title.textContent = group.title;
            var buttons = document.createElement("div");
            buttons.className = "keyboard-buttons";
            buttons.style.setProperty("--key-cols", String(group.columns || 4));
            group.keys.forEach(function (key) { buttons.appendChild(createButton(key)); });
            block.appendChild(title);
            block.appendChild(buttons);
            body.appendChild(block);
        });

        toggle.addEventListener("click", function () {
            var open = host.className.indexOf("open") >= 0;
            host.className = open ? "math-keyboard" : "math-keyboard open";
            toggle.querySelector("span:last-child").textContent = open ? "›" : "⌄";
        });

        body.addEventListener("click", function (event) {
            var node = findKeyButton(event.target, body);
            if (!node) return;
            var offset = node.getAttribute("data-cursor");
            insertAtCursor(input, node.getAttribute("data-insert"), offset === null ? undefined : Number(offset));
        });

        return { insertAtCursor:function (text, cursorOffset) { insertAtCursor(input, text, cursorOffset); } };
    }

    NS.initMathKeyboard = initMathKeyboard;
    NS.insertMathAtCursor = insertAtCursor;
})(window.AlgebraTrace);
