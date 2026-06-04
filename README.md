# AlgebraTrace

**AlgebraTrace** is an offline, browser-based, step-by-step mathematics solver with a visual editable math field, a rule-based JavaScript solving core, clean educational traces, and an optional interactive graph.

It is designed for situations where a learner, teacher, or developer needs a transparent local math assistant that can run directly from `index.html` without a server, Node.js, CDN, internet connection, backend, or external API.

AlgebraTrace is close in educational purpose to tools such as Photomath: it helps users see *how* a mathematical result is obtained, not only the final answer. The difference is that AlgebraTrace is built as a transparent offline web application with editable symbolic input and inspectable JavaScript rules, rather than as a camera-based mobile recognition service.

> AlgebraTrace is not affiliated with Photomath or any similar commercial product.

---

## Short description

Offline step-by-step math solver with a unified visual math editor, rule-based JavaScript core, action cards, clean solution traces, and local canvas graphing. Runs directly from `index.html` with no server, CDN, Node.js, or backend.

---

## Why AlgebraTrace exists

Most educational math tools fall into one of two extremes:

- static textbook examples that are easy to read but not interactive;
- powerful CAS or AI tools that produce answers but often hide the exact transformation logic.

AlgebraTrace tries to occupy the middle ground. It is a lightweight educational solver where the path from input to answer is visible, structured, and suitable for teaching.

The project focuses on:

- readable step-by-step explanations;
- rule-based symbolic transformations;
- offline use in a normal browser;
- a clean student-facing interface;
- compatibility with future APK/WebView packaging;
- preservation of plain text solver input for testing, export, and debugging.

---

## Main features

- **Fully offline**: all logic is bundled as local HTML, CSS, and JavaScript.
- **Runs from local files**: open `index.html` directly in a browser.
- **No backend**: no server, API, Python runtime, database, CDN, or remote font.
- **Unified visual math editor**: the editable input and rendered expression are one field, not a plain input plus a separate preview.
- **Solver-compatible text model**: the pretty editor keeps an internal plain text expression used by the solver.
- **Step-by-step output**: final answer plus readable transformation cards.
- **Action detection**: the app suggests meaningful operations depending on the input.
- **Native JavaScript solving layer**: implemented rule modules for algebra, equations, inequalities, logarithms, trigonometry, derivatives, integrals, limits, systems, rational expressions, and function analysis.
- **Compatibility fallback**: legacy case data can still be used as a safety net when a native rule is not available.
- **Canvas graphing**: local interactive graph with zoom, pan, axes, grid, and discontinuity-aware plotting.
- **APK/WebView-ready architecture**: the app can later be packaged as a local WebView application.

---

## Quick start

Clone or download the repository and open:

```text
index.html
```

No build step is required.

You do not need:

```text
npm install
node
python
server
internet
CDN
```

The app is intended to work directly as:

```text
file:///.../index.html
```

---

## Example inputs

```text
x^2 - 5*x + 6 = 0
(3*x + 12)/(x^2 - 16)
log_2(16)
log(16, 2)
log_2(x - 3)
d/dx sin(x^2)
integrate 2*x + 1
limit((x^2 - 4)/(x - 2), x, 2)
2*x + y = 5; x - y = 1
```

Useful syntax:

```text
*          multiplication
^          power
sqrt()     square root
|x - 3|    absolute value
sin()      sine
cos()      cosine
tan()      tangent
ln()       natural logarithm
log_2()    logarithm with explicit base
log2()     compact base-2 logarithm
log(a, b)  logarithm of a with base b
;          equation separator for systems
pi or π    pi
```

---

## User interface

The public interface is intentionally simple:

1. Type or insert a mathematical expression in the visual math editor.
2. Press **Enter** or **Solve**.
3. AlgebraTrace detects available actions.
4. The most suitable default action runs automatically.
5. Action cards remain available so another operation can be selected.
6. The app shows a final answer and a clean step-by-step trace.
7. A graph appears only when it is useful for the selected operation.

The user-facing page does not expose internal rule IDs, raw JSON, solver source markers, candidate strategies, or debug diagnostics.

---

## Unified visual math editor

AlgebraTrace uses a custom lightweight editor instead of a separate text field and rendered preview.

The visible editor supports:

- normal typing;
- caret movement;
- click/tap caret placement;
- Backspace/Delete;
- paste as plain solver text;
- powers such as `x^2`, `(x+1)^2`, `sin(x)^2`, and `x^(n+1)`;
- fractions;
- square roots;
- absolute values;
- functions;
- relations and systems;
- insertion from the on-screen math keyboard.

Internally, the editor preserves plain solver-compatible text. This keeps the mathematical core testable and avoids locking the project into a heavy external math editor dependency.

Public editor helpers:

```js
getMathEditorValue();
setMathEditorValue("x^2 - 5*x + 6 = 0");
insertIntoMathEditor("sqrt()", 5);
```

---

## Math keyboard

The on-screen keyboard inserts solver-compatible text while showing visual mathematical buttons.

It includes groups for:

- basic operators and relations;
- structural templates such as fractions, powers, roots, and absolute values;
- functions such as trigonometric and logarithmic expressions;
- calculus templates for derivatives, integrals, and limits.

The keyboard is an input tool, not an examples panel.

---

## Step-by-step philosophy

AlgebraTrace is designed to avoid fake or placeholder steps.

A useful step should show a real mathematical transformation:

```js
{
  step_type: "transform",
  rule_id: "difference_of_squares",
  action: "Factor as a difference of squares",
  before: "x^2 - 16",
  after: "(x - 4)*(x + 4)",
  explanation: "The expression has the form a^2 - b^2, so it becomes (a - b)(a + b)."
}
```

Bad educational traces such as the following should not appear in the normal user interface:

```text
Apply derivative_power_rule
Native JavaScript rule-based transformation.
```

The goal is not only to calculate, but to produce a trace that can be read by a student or used by a teacher.

---

## Supported areas

Current native JavaScript rule modules cover implemented patterns in:

- arithmetic expressions;
- algebraic simplification;
- polynomial factorization;
- common factor extraction;
- difference of squares;
- perfect square trinomials;
- rational expressions;
- domain restrictions;
- linear and quadratic equations;
- linear and quadratic inequalities;
- rational equations and inequalities;
- absolute value equations and inequalities;
- powers and roots;
- radical equations;
- exponential equations;
- logarithmic expressions, equations, inequalities, expansion, combination, and domains;
- trigonometric identities, equations, substitutions, and simple inequalities;
- derivatives;
- derivative applications;
- basic integrals;
- limits and continuity checks;
- simple systems;
- function properties such as extrema, monotonicity, range, inverse, asymptotes, and discontinuities;
- graphing of common browser-evaluable expressions.

AlgebraTrace is a progressive educational symbolic solver, not a full general-purpose CAS.

---

## Logarithm support

The logarithm layer supports several input forms:

```text
log_2(16)
log2(16)
log(16, 2)
ln(x)
log(x)
log_10(x)
log10(x)
log(x, 1/2)
log_0.5(x)
```

The custom-base convention is:

```text
log(argument, base)
```

Therefore:

```text
log(16, 2) means log base 2 of 16
log(3, 4)  means log base 4 of 3
```

Implemented patterns include:

```text
log_2(16) = 4
log_2(1) = 0
log_2(2) = 1
log_10(1000) = 3
ln(e) = 1
log_a(a^x) = x
a^(log_a(x)) = x
ln(e^x) = x
e^(ln(x)) = x
```

The solver also includes actions for logarithm expansion, combination, domain restrictions, logarithmic equations, and selected logarithmic inequalities.

---

## Interactive graph

The graph is implemented with a local `<canvas>` and does not depend on external plotting libraries.

It supports:

- responsive sizing;
- grid and axes;
- tick labels;
- pan by dragging;
- zoom with wheel or touch gestures;
- reset view;
- redraw on resize;
- line breaking near discontinuities or asymptotes;
- explicit expressions and simple equations transformed into `left - right`.

Public graph helpers:

```js
AlgebraTrace.initGraph(canvas, options);
AlgebraTrace.plotExpression(canvas, expression, analysis);
AlgebraTrace.resetGraphView(canvas);
AlgebraTrace.screenToMath(state, canvas, px, py);
AlgebraTrace.mathToScreen(state, canvas, x, y);
```

---

## Public JavaScript API

The main API is intentionally small:

```js
const result = solve("(3*x + 12)/(x^2 - 16)", {
  action: "simplify"
});

const actions = listActions("x^2 - 5*x + 6 = 0");
const html = renderSolution(result);
const defaultAction = getDefaultAction("integrate 2*x + 1");
```

Typical result shape:

```js
{
  input: "...",
  task_type: "...",
  problem_profile: { /* ... */ },
  available_actions: [ /* ... */ ],
  selected_action: "...",
  candidate_strategies: [ /* ... */ ],
  selected_strategy: "...",
  source: "native",
  steps: [ /* ... */ ],
  verification: { /* ... */ },
  answer: "..."
}
```

`renderSolution(result, { developer: false })` produces clean user-facing output.

`renderSolution(result, { developer: true })` can expose technical details for debugging.

---

## Project structure

Current browser distribution:

```text
index.html
README.md
css/
  app.css
js/
  algebra_trace.js
  ast.js
  parser.js
  renderer.js
  classifier.js
  actions.js
  strategy.js
  verifier.js
  compatibility_cases.js
  solvers/
    algebra.js
    equations.js
    inequalities.js
    rational.js
    powers_roots.js
    logarithms.js
    trigonometry.js
    derivatives.js
    derivative_applications.js
    integrals.js
    systems.js
    function_properties.js
    limits_continuity.js
  ui/
    app.js
    examples.js
    graph.js
    math_editor.js
    math_keyboard.js
    math_render.js
```

If a developer/debug page and browser test runner are included in the repository, they can be placed as:

```text
dev.html
tests/
  test_all.html
```

---

## Architecture

AlgebraTrace is organized as a small browser-native system:

```text
Input editor
  ↓
Plain solver-compatible text
  ↓
Parser / classifier / action detector
  ↓
Strategy planner
  ↓
Native rule-based solver modules
  ↓
Verification / compatibility fallback
  ↓
Readable renderer
  ↓
Step cards + final answer + optional graph
```

The most important design decision is that the visual editor does not replace the symbolic input model. It only makes the input easier to read and edit while preserving the plain text expression needed by the solver.

---

## Current limitations

AlgebraTrace is not a complete CAS. Known limitations include:

- no full symbolic simplifier for arbitrary nested expressions;
- limited exact formatting for advanced irrational or transcendental answers;
- limited nonlinear systems;
- conservative graphing for complex expressions;
- no full complex-number solver;
- no complete general trigonometric transformation engine;
- limited polynomial and rational manipulation beyond implemented rule patterns;
- custom HTML math rendering rather than a full TeX engine.

These limitations are intentional at this stage. The project favors transparent implemented rules over opaque broad claims.

---

## Roadmap

Possible next steps:

- expand native symbolic coverage without relying on compatibility fallback;
- add more verified transformation rules;
- improve exact output formatting;
- add a full developer test page to the public repository;
- add saved examples as optional documentation, not as clutter in the main UI;
- prepare a WebView/APK wrapper;
- add localization for educational use;
- improve accessibility of the visual editor and graph.

---

## Relationship to Photomath-like tools

AlgebraTrace can be described as a small offline educational alternative in the same broad category of step-by-step math assistance.

However, the focus is different:

- AlgebraTrace does not scan handwritten or printed math from a camera.
- AlgebraTrace does not depend on cloud recognition or a remote solver.
- AlgebraTrace exposes a local JavaScript rule-based core.
- AlgebraTrace is designed to be inspectable, modifiable, and packageable as a local educational app.

In short: Photomath-like educational outcome, but with a transparent offline browser architecture.

---

## Contributing

Contributions are welcome if they preserve the main constraints:

- no required server for normal use;
- no CDN or internet dependency;
- no Node.js requirement for normal use;
- no backend solver dependency;
- readable educational steps;
- no fake placeholder transformations;
- preservation of the public API: `solve`, `listActions`, `renderSolution`;
- preservation of solver-compatible plain text input.

When adding new solving rules, prefer small transparent transformations with clear `before`, `after`, and `explanation` fields.

---

## License

Recommended licensing model for a noncommercial public release:

- **Software code**: PolyForm Noncommercial License 1.0.0.
- **Documentation, examples, screenshots, and educational text**: Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International.
- **Commercial use**: available only under a separate written commercial license from the author.

Important terminology note: a license that forbids commercial use is usually better described as **source-available noncommercial**, not OSI-approved open source.

Suggested repository files:

```text
LICENSE
LICENSE-DOCS.md
NOTICE.md
```

Suggested README notice:

```text
This project is released for noncommercial educational and research use.
The software code is licensed under the PolyForm Noncommercial License 1.0.0.
Documentation and educational materials are licensed under CC BY-NC-SA 4.0.
Commercial use, redistribution in commercial products, or paid service integration requires separate permission from the author.
```

---

## Author

Created as an educational mathematics project focused on transparent symbolic reasoning, offline browser use, and step-by-step learning.
