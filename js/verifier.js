/* AlgebraTrace JS: verification façade. */
window.AlgebraTrace = window.AlgebraTrace || {};
(function (NS) {
    "use strict";

    function passed(checks) {
        return { status: "passed", checks: checks || [{ status: "passed", message: "Rule trace produced by offline AlgebraTrace JS." }] };
    }

    function notImplemented() {
        return { status: "not_checked", checks: [{ status: "not_checked", message: "No native verifier rule is available for this fallback case." }] };
    }

    NS.verificationPassed = passed;
    NS.verificationNotImplemented = notImplemented;
})(window.AlgebraTrace);
