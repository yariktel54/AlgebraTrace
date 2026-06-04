/* AlgebraTrace JS: lightweight AST representation. */
window.AlgebraTrace = window.AlgebraTrace || {};
(function (NS) {
    "use strict";

    function ASTNode(type, value, children) {
        this.type = type;
        this.value = value === undefined ? null : value;
        this.children = children || [];
    }

    function astToJSON(node) {
        if (!node) return null;
        return {
            type: node.type,
            value: node.value,
            children: node.children.map(astToJSON)
        };
    }

    NS.ASTNode = ASTNode;
    NS.astToJSON = astToJSON;
})(window.AlgebraTrace);
