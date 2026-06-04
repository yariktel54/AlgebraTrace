window.AlgebraTrace = window.AlgebraTrace || {};
(function (NS) {
    "use strict";

    var states = typeof WeakMap !== "undefined" ? new WeakMap() : null;

    function trimOuterParens(text) {
        var s = String(text || "").trim();
        var changed = true;
        while (changed && s.charAt(0) === "(" && s.charAt(s.length - 1) === ")") {
            changed = false;
            var depth = 0, ok = true;
            for (var i = 0; i < s.length; i += 1) {
                var ch = s.charAt(i);
                if (ch === "(") depth += 1;
                else if (ch === ")") depth -= 1;
                if (depth === 0 && i < s.length - 1) { ok = false; break; }
            }
            if (ok) { s = s.slice(1, -1).trim(); changed = true; }
        }
        return s;
    }

    function graphExpression(expr) {
        var text = String(expr || "").trim();
        if (!text || text.indexOf(";") >= 0) return null;
        if (/^\s*d\s*\/\s*dx/i.test(text) || /^\s*integrate\b/i.test(text) || /^\s*limit\s*\(/i.test(text)) return null;
        var yMatch = text.match(/^\s*y\s*=\s*(.+)$/i);
        if (yMatch) return yMatch[1].trim();
        if (/[<>≤≥]/.test(text)) return null;
        var depth = 0, eq = -1;
        for (var i = 0; i < text.length; i += 1) {
            var ch = text.charAt(i);
            if (ch === "(") depth += 1;
            else if (ch === ")") depth -= 1;
            else if (ch === "=" && depth === 0) { eq = i; break; }
        }
        if (eq >= 0) {
            var left = text.slice(0, eq).trim();
            var right = text.slice(eq + 1).trim();
            if (!left || !right) return null;
            return "(" + left + ") - (" + right + ")";
        }
        return text;
    }

    function addImplicitMultiplication(text) {
        return text
            .replace(/(\d)(x)/gi, "$1*$2")
            .replace(/(\d)(Math\.)/g, "$1*$2")
            .replace(/(x|\))\s*(\()/gi, "$1*$2")
            .replace(/(\))\s*(x|\d|Math\.)/gi, "$1*$2");
    }

    function toJavaScriptExpression(expr) {
        var text = trimOuterParens(graphExpression(expr));
        if (!text) return null;
        text = text.replace(/π/g, "Math.PI");
        text = text.replace(/\bpi\b/gi, "Math.PI");
        text = text.replace(/\^/g, "**");
        text = text.replace(/\b(sin|cos|tan|sqrt|exp)\s*\(/g, function (_, name) { return "Math." + name + "("; });
        text = text.replace(/\bln\s*\(/g, "Math.log(");
        text = text.replace(/\blog_2\s*\(/g, "__log2(");
        text = text.replace(/\blog\s*\(/g, "Math.log10(");
        text = addImplicitMultiplication(text);
        // Keep the graph evaluator intentionally conservative.
        if (!/^[0-9xX+\-*/().,\s_MathPIcosintaqreplog]+$/.test(text)) return null;
        return text;
    }

    function compileFunction(expr) {
        var js = toJavaScriptExpression(expr);
        if (!js) return null;
        try {
            var fn = Function("x", "__log2", '"use strict"; return (' + js + ');');
            return function (x) { return fn(x, Math.log2 ? Math.log2 : function (v) { return Math.log(v) / Math.log(2); }); };
        }
        catch (e) { return null; }
    }

    function isGraphable(expr) { return !!compileFunction(expr); }

    function getState(canvas) {
        var state = states ? states.get(canvas) : canvas.__algebraTraceGraphState;
        if (!state) {
            state = {
                expr: "",
                f: null,
                xmin: -10,
                xmax: 10,
                ymin: -10,
                ymax: 10,
                isDragging: false,
                lastX: 0,
                lastY: 0,
                lastTouchDistance: 0,
                initialized: false
            };
            if (states) states.set(canvas, state); else canvas.__algebraTraceGraphState = state;
        }
        return state;
    }

    function resizeCanvas(canvas) {
        var rect = canvas.getBoundingClientRect();
        var ratio = window.devicePixelRatio || 1;
        var width = Math.max(320, Math.floor(rect.width * ratio));
        var height = Math.max(220, Math.floor(rect.height * ratio));
        if (canvas.width !== width || canvas.height !== height) {
            canvas.width = width;
            canvas.height = height;
        }
    }

    function niceStep(span) {
        var raw = span / 8;
        if (!isFinite(raw) || raw <= 0) return 1;
        var pow = Math.pow(10, Math.floor(Math.log(raw) / Math.LN10));
        var n = raw / pow;
        if (n < 1.5) return pow;
        if (n < 3) return 2 * pow;
        if (n < 7) return 5 * pow;
        return 10 * pow;
    }

    function mathToScreen(state, canvas, x, y) {
        return {
            x: (x - state.xmin) / (state.xmax - state.xmin) * canvas.width,
            y: canvas.height - (y - state.ymin) / (state.ymax - state.ymin) * canvas.height
        };
    }

    function screenToMath(state, canvas, px, py) {
        return {
            x: state.xmin + px / canvas.width * (state.xmax - state.xmin),
            y: state.ymax - py / canvas.height * (state.ymax - state.ymin)
        };
    }

    function drawGrid(ctx, canvas, state) {
        var w = canvas.width, h = canvas.height;
        ctx.clearRect(0, 0, w, h);
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, w, h);
        var ratio = window.devicePixelRatio || 1;
        var xStep = niceStep(state.xmax - state.xmin);
        var yStep = niceStep(state.ymax - state.ymin);
        ctx.lineWidth = Math.max(1, ratio);
        ctx.strokeStyle = "#e7edf5";
        ctx.fillStyle = "#64748b";
        ctx.font = Math.max(11, Math.round(12 * ratio)) + "px system-ui";
        ctx.beginPath();
        var x0 = Math.ceil(state.xmin / xStep) * xStep;
        for (var x = x0; x <= state.xmax + xStep / 2; x += xStep) {
            var sx = mathToScreen(state, canvas, x, 0).x;
            ctx.moveTo(sx, 0); ctx.lineTo(sx, h);
        }
        var y0 = Math.ceil(state.ymin / yStep) * yStep;
        for (var y = y0; y <= state.ymax + yStep / 2; y += yStep) {
            var sy = mathToScreen(state, canvas, 0, y).y;
            ctx.moveTo(0, sy); ctx.lineTo(w, sy);
        }
        ctx.stroke();

        ctx.strokeStyle = "#9aa9bc";
        ctx.lineWidth = Math.max(1.4, 1.4 * ratio);
        ctx.beginPath();
        if (state.ymin <= 0 && state.ymax >= 0) {
            var axisY = mathToScreen(state, canvas, 0, 0).y;
            ctx.moveTo(0, axisY); ctx.lineTo(w, axisY);
        }
        if (state.xmin <= 0 && state.xmax >= 0) {
            var axisX = mathToScreen(state, canvas, 0, 0).x;
            ctx.moveTo(axisX, 0); ctx.lineTo(axisX, h);
        }
        ctx.stroke();

        ctx.fillStyle = "#64748b";
        for (x = x0; x <= state.xmax + xStep / 2; x += xStep) {
            sx = mathToScreen(state, canvas, x, 0).x;
            if (sx > 20 && sx < w - 20) ctx.fillText(formatTick(x), sx + 4, Math.min(h - 8, Math.max(14, mathToScreen(state, canvas, 0, 0).y + 14)));
        }
        for (y = y0; y <= state.ymax + yStep / 2; y += yStep) {
            sy = mathToScreen(state, canvas, 0, y).y;
            if (sy > 14 && sy < h - 8) ctx.fillText(formatTick(y), Math.min(w - 44, Math.max(4, mathToScreen(state, canvas, 0, 0).x + 6)), sy - 4);
        }
    }

    function formatTick(v) {
        if (Math.abs(v) < 1e-10) return "0";
        if (Math.abs(v) >= 1000 || Math.abs(v) < 0.01) return v.toExponential(1);
        return String(Math.round(v * 100) / 100);
    }

    function drawCurve(ctx, canvas, state) {
        if (!state.f) return false;
        var w = canvas.width, h = canvas.height;
        var ratio = window.devicePixelRatio || 1;
        ctx.strokeStyle = "#2563eb";
        ctx.lineWidth = Math.max(2, 2.2 * ratio);
        ctx.beginPath();
        var started = false, prevY = null;
        for (var px = 0; px <= w; px += 1) {
            var x = state.xmin + (state.xmax - state.xmin) * px / w;
            var y;
            try { y = state.f(x); } catch (e) { y = NaN; }
            if (!isFinite(y)) { started = false; prevY = null; continue; }
            var py = mathToScreen(state, canvas, x, y).y;
            if (py < -2 * h || py > 3 * h) { started = false; prevY = null; continue; }
            if (prevY !== null && Math.abs(py - prevY) > h * 0.45) started = false;
            if (!started) { ctx.moveTo(px, py); started = true; }
            else ctx.lineTo(px, py);
            prevY = py;
        }
        ctx.stroke();
        return true;
    }

    function drawGraphState(canvas) {
        if (!canvas || !canvas.getContext) return false;
        resizeCanvas(canvas);
        var state = getState(canvas);
        var ctx = canvas.getContext("2d");
        drawGrid(ctx, canvas, state);
        var ok = drawCurve(ctx, canvas, state);
        ctx.fillStyle = "#334155";
        ctx.font = Math.max(12, Math.round(13 * (window.devicePixelRatio || 1))) + "px system-ui";
        var label = graphExpression(state.expr) || state.expr;
        if (!ok) ctx.fillText("Graph is available for explicit expressions and simple equations.", 16, 28);
        else ctx.fillText("y = " + label, 16, canvas.height - 18);
        return ok;
    }

    function resetView(state) {
        state.xmin = -10; state.xmax = 10; state.ymin = -10; state.ymax = 10;
    }

    function zoomAt(canvas, state, factor, clientX, clientY) {
        var rect = canvas.getBoundingClientRect();
        var ratio = window.devicePixelRatio || 1;
        var px = (clientX - rect.left) * ratio;
        var py = (clientY - rect.top) * ratio;
        var anchor = screenToMath(state, canvas, px, py);
        state.xmin = anchor.x + (state.xmin - anchor.x) * factor;
        state.xmax = anchor.x + (state.xmax - anchor.x) * factor;
        state.ymin = anchor.y + (state.ymin - anchor.y) * factor;
        state.ymax = anchor.y + (state.ymax - anchor.y) * factor;
        drawGraphState(canvas);
    }

    function initGraph(canvas, options) {
        if (!canvas || !canvas.getContext) return null;
        options = options || {};
        var state = getState(canvas);
        if (options.expression !== undefined) {
            state.expr = options.expression;
            state.f = compileFunction(options.expression);
        }
        if (options.reset) resetView(state);
        if (!state.initialized) {
            canvas.addEventListener("mousedown", function (event) {
                state.isDragging = true;
                state.lastX = event.clientX;
                state.lastY = event.clientY;
            });
            window.addEventListener("mousemove", function (event) {
                if (!state.isDragging) return;
                var dx = event.clientX - state.lastX;
                var dy = event.clientY - state.lastY;
                state.lastX = event.clientX;
                state.lastY = event.clientY;
                var spanX = state.xmax - state.xmin;
                var spanY = state.ymax - state.ymin;
                var rect = canvas.getBoundingClientRect();
                var mx = -dx / Math.max(1, rect.width) * spanX;
                var my = dy / Math.max(1, rect.height) * spanY;
                state.xmin += mx; state.xmax += mx; state.ymin += my; state.ymax += my;
                drawGraphState(canvas);
            });
            window.addEventListener("mouseup", function () { state.isDragging = false; });
            canvas.addEventListener("wheel", function (event) {
                event.preventDefault();
                zoomAt(canvas, state, event.deltaY < 0 ? 0.86 : 1.16, event.clientX, event.clientY);
            }, { passive:false });
            canvas.addEventListener("touchstart", function (event) {
                if (event.touches.length === 1) {
                    state.isDragging = true;
                    state.lastX = event.touches[0].clientX;
                    state.lastY = event.touches[0].clientY;
                    state.lastTouchDistance = 0;
                } else if (event.touches.length === 2) {
                    state.isDragging = false;
                    state.lastTouchDistance = touchDistance(event.touches);
                }
            }, { passive:false });
            canvas.addEventListener("touchmove", function (event) {
                event.preventDefault();
                if (event.touches.length === 1 && state.isDragging) {
                    var t = event.touches[0];
                    var dx = t.clientX - state.lastX;
                    var dy = t.clientY - state.lastY;
                    state.lastX = t.clientX;
                    state.lastY = t.clientY;
                    var spanX = state.xmax - state.xmin;
                    var spanY = state.ymax - state.ymin;
                    var rect = canvas.getBoundingClientRect();
                    state.xmin += -dx / Math.max(1, rect.width) * spanX;
                    state.xmax += -dx / Math.max(1, rect.width) * spanX;
                    state.ymin += dy / Math.max(1, rect.height) * spanY;
                    state.ymax += dy / Math.max(1, rect.height) * spanY;
                    drawGraphState(canvas);
                } else if (event.touches.length === 2) {
                    var dist = touchDistance(event.touches);
                    if (state.lastTouchDistance > 0) {
                        var factor = state.lastTouchDistance / dist;
                        var cx = (event.touches[0].clientX + event.touches[1].clientX) / 2;
                        var cy = (event.touches[0].clientY + event.touches[1].clientY) / 2;
                        zoomAt(canvas, state, factor, cx, cy);
                    }
                    state.lastTouchDistance = dist;
                }
            }, { passive:false });
            canvas.addEventListener("touchend", function () { state.isDragging = false; state.lastTouchDistance = 0; });
            state.initialized = true;
        }
        drawGraphState(canvas);
        return state;
    }

    function touchDistance(touches) {
        var dx = touches[0].clientX - touches[1].clientX;
        var dy = touches[0].clientY - touches[1].clientY;
        return Math.sqrt(dx * dx + dy * dy);
    }

    function plotExpression(canvas, expression, analysis) {
        var state = initGraph(canvas, { expression:expression, reset:!(analysis && analysis.keepView) });
        return state ? drawGraphState(canvas) : false;
    }

    function resetGraphView(canvas) {
        var state = getState(canvas);
        resetView(state);
        return drawGraphState(canvas);
    }

    function drawGraph(canvas, expr) {
        return plotExpression(canvas, expr, { keepView:true });
    }

    NS.graphExpression = graphExpression;
    NS.toGraphJavaScriptExpression = toJavaScriptExpression;
    NS.compileGraphFunction = compileFunction;
    NS.isGraphable = isGraphable;
    NS.initGraph = initGraph;
    NS.plotExpression = plotExpression;
    NS.resetGraphView = resetGraphView;
    NS.screenToMath = screenToMath;
    NS.mathToScreen = mathToScreen;
    NS.drawGraph = drawGraph;
})(window.AlgebraTrace);
