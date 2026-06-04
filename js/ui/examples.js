window.AlgebraTrace = window.AlgebraTrace || {};
(function (NS) {
    "use strict";
    NS.examples = [
        { label: "quadratic equation", input: "x^2 - 5*x + 6 = 0" },
        { label: "rational simplification", input: "(3*x + 12)/(x^2 - 16)" },
        { label: "derivative", input: "d/dx sin(x^2)" },
        { label: "integral", input: "integrate 2*x + 1" },
        { label: "system", input: "2*x + y = 5; x - y = 1" },
        { label: "limit", input: "limit((x^2 - 4)/(x - 2), x, 2)" }
    ];
})(window.AlgebraTrace);
