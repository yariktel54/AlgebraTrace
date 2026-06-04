/* AlgebraTrace JS: browser-safe parser façade.
 * The full Python parser is richer. This offline port keeps a readable token/AST
 * façade for UI/debug output and routes solving to rule modules.
 */
window.AlgebraTrace = window.AlgebraTrace || {};
(function (NS) {
    "use strict";

    function trimOuter(text) {
        text = String(text || "").trim();
        if (text.length >= 2 && text[0] === "(" && text[text.length - 1] === ")") {
            var depth = 0;
            for (var i = 0; i < text.length; i += 1) {
                var ch = text[i];
                if (ch === "(") depth += 1;
                if (ch === ")") depth -= 1;
                if (depth === 0 && i < text.length - 1) return text;
            }
            return trimOuter(text.slice(1, -1));
        }
        return text;
    }

    function tokenize(input) {
        var text = String(input || "");
        var tokens = [];
        var re = /log_\d+|[A-Za-z]+|\d+\/\d+|\d+\.\d+|\d+|π|[()+\-*/^=<>;,|]|<=|>=|!=|≠/g;
        var m;
        while ((m = re.exec(text)) !== null) {
            tokens.push({ type: "token", value: m[0] });
        }
        return tokens;
    }

    function detectRelation(input) {
        var text = String(input || "");
        var ops = ["<=", ">=", "!=", "≠", "=", "<", ">"]; 
        for (var i = 0; i < ops.length; i += 1) {
            if (text.indexOf(ops[i]) >= 0) return ops[i];
        }
        return null;
    }

    function parse(input) {
        var text = String(input || "").trim();
        var relation = detectRelation(text);
        var node = new NS.ASTNode(relation ? "relation_or_request" : "expression", text, []);
        return {
            type: node.type,
            text: text,
            normalized: trimOuter(text.replace(/\s+/g, " ")),
            relation: relation,
            tokens: tokenize(text),
            ast: NS.astToJSON(node)
        };
    }

    NS.parse = parse;
    NS.tokenize = tokenize;
    NS.trimOuter = trimOuter;
})(window.AlgebraTrace);
