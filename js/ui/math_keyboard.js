window.AlgebraTrace = window.AlgebraTrace || {};
(function (NS) {
    "use strict";

    function $(id) { return document.getElementById(id); }

    var groups = [
        { title:"Basic operators", columns:4, keys:[
            { label:"+", insert:"+" }, { label:"−", insert:"-" }, { label:"×", insert:"*" }, { label:"÷", insert:"/" },
            { label:"=", insert:"=" }, { label:"<", insert:"<" }, { label:">", insert:">" }, { label:"≤", insert:"<=" },
            { label:"≥", insert:">=" }, { label:"(", insert:"(" }, { label:")", insert:")" }, { label:"^", insert:"^" },
            { label:"x", insert:"x" }, { label:"y", insert:"y" }, { label:"π", insert:"pi" }, { label:";", insert:"; " }
        ]},
        { title:"Structure", columns:4, keys:[
            { labelHTML:'<span class="key-frac"><span>□</span><span></span><span>□</span></span>', aria:"fraction template", insert:"()/()", cursor:1, kind:"template" },
            { labelHTML:'<span class="key-power">a<sup>□</sup></span>', aria:"power template", insert:"^()", cursor:2, kind:"template" },
            { labelHTML:'<span class="key-root">√□</span>', aria:"square root template", insert:"sqrt()", cursor:5, kind:"template" },
            { labelHTML:'<span class="key-abs">|□|</span>', aria:"absolute value template", insert:"||", cursor:1, kind:"template" },
            { labelHTML:'<span class="key-system">x=1&nbsp;;&nbsp;y=2</span>', aria:"system separator", insert:"; ", cursor:2, kind:"template wide" }
        ]},
        { title:"Functions", columns:4, keys:[
            { label:"sin", insert:"sin()", cursor:4 }, { label:"cos", insert:"cos()", cursor:4 }, { label:"tan", insert:"tan()", cursor:4 }, { labelHTML:'ln(□)', aria:"natural logarithm", insert:"ln()", cursor:3 },
            { labelHTML:'log<sub>2</sub>(□)', aria:"log base two", insert:"log_2()", cursor:6 }, { labelHTML:'log(□)', aria:"common logarithm", insert:"log()", cursor:4 },
            { labelHTML:'log<sub>a</sub>(□)', aria:"custom-base logarithm: log(argument, base)", insert:"log(, )", cursor:4 }, { label:"exp", insert:"exp()", cursor:4 }
        ]},
        { title:"Calculus", columns:3, keys:[
            { labelHTML:'<span class="key-derivative">d/dx</span>', aria:"derivative", insert:"d/dx ", cursor:5, kind:"wide" },
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
        var before = input.value.slice(0, start);
        var after = input.value.slice(end);
        input.value = before + text + after;
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
