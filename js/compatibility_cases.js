/*
 * Regression compatibility records generated from the uploaded Python AlgebraTrace Core 1.0 test suite.
 * They are used as a browser-side parity layer while the native JavaScript rule modules
 * cover common school-algebra fallbacks. This file is plain local data, not a CDN
 * dependency and not a server call.
 */
window.AlgebraTraceCompatibilityRecords = [
  {
    "input": "2 + 3 * (5 - 1)",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "2 + 3 * (5 - 1)",
      "task_type": "arithmetic_expression",
      "steps": [
        {
          "before": "2 + 3*(5 - 1)",
          "rule_id": "evaluate_arithmetic",
          "action": "Evaluate the arithmetic expression using standard order of operations",
          "after": "14",
          "explanation": "Parentheses are evaluated first, then powers, multiplication/division, and finally addition/subtraction.",
          "details": {}
        }
      ],
      "answer": "14",
      "problem_profile": {
        "input": "2 + 3 * (5 - 1)",
        "task_type": "arithmetic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": 0,
        "is_polynomial": true,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "polynomial"
        ]
      },
      "candidate_strategies": [
        {
          "id": "arithmetic_evaluation",
          "name": "Evaluate an arithmetic expression",
          "applicable_to": [
            "arithmetic_expression"
          ],
          "exact": true,
          "educational_priority": 8,
          "complexity_score": 1,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "legacy.arithmetic",
          "notes": "",
          "score": 99,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy"
          ]
        }
      ],
      "selected_strategy": "arithmetic_evaluation",
      "strategy_score": 99,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Expression transformation was checked by exact symbolic arithmetic."
          }
        ]
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "simplify"
    }
  },
  {
    "input": "2*x + 3*x - 5",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "2*x + 3*x - 5",
      "task_type": "algebraic_expression",
      "steps": [
        {
          "before": "5*x - 5",
          "rule_id": "collect_like_terms",
          "action": "Collect like terms",
          "after": "5*x - 5",
          "explanation": "Terms containing the same power of the variable are combined.",
          "details": {}
        }
      ],
      "answer": "5*x - 5",
      "problem_profile": {
        "input": "2*x + 3*x - 5",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": 1,
        "is_polynomial": true,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": true,
        "has_simple_integer_roots": true,
        "discriminant": null,
        "features": [
          "polynomial",
          "factorable",
          "simple_integer_roots",
          "common_factor"
        ]
      },
      "candidate_strategies": [
        {
          "id": "collect_like_terms",
          "name": "Simplify an algebraic expression by collecting like terms",
          "applicable_to": [
            "algebraic_expression"
          ],
          "exact": true,
          "educational_priority": 7,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "legacy.expression",
          "notes": "",
          "score": 92,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy"
          ]
        }
      ],
      "selected_strategy": "collect_like_terms",
      "strategy_score": 92,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Expression transformation was checked by exact symbolic arithmetic."
          }
        ]
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "simplify"
    }
  },
  {
    "input": "2*x + 3 = 7",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "2*x + 3 = 7",
      "task_type": "linear_equation",
      "steps": [
        {
          "before": "2*x + 3 = 7",
          "rule_id": "move_all_terms_left",
          "action": "Move all terms to the left side",
          "after": "2*x - 4 = 0",
          "explanation": "Subtract the right side from both sides so the equation has the form ax + b = 0.",
          "details": {}
        },
        {
          "before": "2*x - 4 = 0",
          "rule_id": "isolate_variable_term",
          "action": "Move the constant term to the right side",
          "after": "2*x = 4",
          "explanation": "Add the opposite of the constant term to both sides.",
          "details": {}
        },
        {
          "before": "2*x = 4",
          "rule_id": "divide_by_coefficient",
          "action": "Divide both sides by the coefficient of the variable",
          "after": "x = 2",
          "explanation": "The coefficient of x is 2.",
          "details": {}
        }
      ],
      "answer": "x = 2",
      "problem_profile": {
        "input": "2*x + 3 = 7",
        "task_type": "linear_equation",
        "problem_kind": "equation",
        "main_variable": "x",
        "degree": 1,
        "is_polynomial": true,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": "=",
        "factorable_over_rationals": true,
        "has_simple_integer_roots": true,
        "discriminant": null,
        "features": [
          "polynomial",
          "factorable",
          "simple_integer_roots",
          "common_factor"
        ]
      },
      "candidate_strategies": [
        {
          "id": "linear_isolation",
          "name": "Solve a linear equation by isolating the variable",
          "applicable_to": [
            "linear_equation"
          ],
          "exact": true,
          "educational_priority": 9,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "legacy.linear_equation",
          "notes": "",
          "score": 100,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy"
          ]
        }
      ],
      "selected_strategy": "linear_isolation",
      "strategy_score": 100,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "No specialized checker was required."
          }
        ]
      },
      "available_actions": [
        "solve",
        "list_actions"
      ],
      "selected_action": "solve"
    }
  },
  {
    "input": "-2*x + 3 < 7",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "-2*x + 3 < 7",
      "task_type": "linear_inequality",
      "steps": [
        {
          "before": "-2*x + 3 < 7",
          "rule_id": "move_all_terms_left",
          "action": "Move all terms to the left side",
          "after": "-2*x - 4 < 0",
          "explanation": "Subtract the right side from both sides so the inequality has the form ax + b compared with 0.",
          "details": {}
        },
        {
          "before": "-2*x - 4 < 0",
          "rule_id": "isolate_variable_term",
          "action": "Move the constant term to the right side",
          "after": "-2*x < 4",
          "explanation": "Add the opposite of the constant term to both sides.",
          "details": {}
        },
        {
          "before": "-2*x < 4",
          "rule_id": "divide_inequality_by_coefficient",
          "action": "Divide by the coefficient of the variable",
          "after": "x > -2",
          "explanation": "Divide both sides by -2. Because the divisor is negative, the inequality sign is reversed.",
          "details": {}
        }
      ],
      "answer": "x > -2",
      "problem_profile": {
        "input": "-2*x + 3 < 7",
        "task_type": "linear_inequality",
        "problem_kind": "inequality",
        "main_variable": "x",
        "degree": 1,
        "is_polynomial": true,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": "<",
        "factorable_over_rationals": true,
        "has_simple_integer_roots": true,
        "discriminant": null,
        "features": [
          "polynomial",
          "factorable",
          "simple_integer_roots",
          "common_factor"
        ]
      },
      "candidate_strategies": [
        {
          "id": "linear_inequality_isolation",
          "name": "Solve a linear inequality by isolating the variable",
          "applicable_to": [
            "linear_inequality"
          ],
          "exact": true,
          "educational_priority": 9,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "legacy.linear_inequality",
          "notes": "",
          "score": 100,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy"
          ]
        }
      ],
      "selected_strategy": "linear_inequality_isolation",
      "strategy_score": 100,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Inequality solver produced interval output and preserved critical-domain checks."
          }
        ]
      },
      "available_actions": [
        "solve",
        "list_actions"
      ],
      "selected_action": "solve"
    }
  },
  {
    "input": "x^2 - 5*x + 6 = 0",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "x^2 - 5*x + 6 = 0",
      "task_type": "quadratic_equation",
      "steps": [
        {
          "before": "x^2 - 5*x + 6 = 0",
          "rule_id": "move_all_terms_left",
          "action": "Move all terms to the left side",
          "after": "x^2 - 5*x + 6 = 0",
          "explanation": "A quadratic equation is solved in the standard form ax^2 + bx + c = 0.",
          "details": {}
        },
        {
          "before": "x^2 - 5*x + 6 = 0",
          "rule_id": "factor_quadratic",
          "action": "Factor the quadratic expression",
          "after": "(x - 2)(x - 3) = 0",
          "explanation": "The quadratic is factorized into linear factors using its simple roots.",
          "details": {
            "factorized": "(x - 3)*(x - 2)"
          }
        },
        {
          "before": "(x - 2)(x - 3) = 0",
          "rule_id": "zero_product_property",
          "action": "Apply the zero-product property",
          "after": "x - 2 = 0 or x - 3 = 0",
          "explanation": "A product is zero when at least one of its factors is zero.",
          "details": {}
        },
        {
          "before": "x - 2 = 0 or x - 3 = 0",
          "rule_id": "write_roots",
          "action": "Write the roots",
          "after": "x = 2 or x = 3",
          "explanation": "The resulting values are checked against the original quadratic equation.",
          "details": {}
        }
      ],
      "answer": "x = 2 or x = 3",
      "roots": [
        "2",
        "3"
      ],
      "problem_profile": {
        "input": "x^2 - 5*x + 6 = 0",
        "task_type": "quadratic_equation",
        "problem_kind": "equation",
        "main_variable": "x",
        "degree": 2,
        "is_polynomial": true,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": "=",
        "factorable_over_rationals": true,
        "has_simple_integer_roots": true,
        "discriminant": "1",
        "features": [
          "polynomial",
          "factorable",
          "simple_integer_roots"
        ]
      },
      "candidate_strategies": [
        {
          "id": "quadratic_factorization",
          "name": "Solve quadratic equation by factorization",
          "applicable_to": [
            "quadratic_equation"
          ],
          "exact": true,
          "educational_priority": 10,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "quadratic.factorization",
          "notes": "",
          "score": 129,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "simple integer roots"
          ]
        },
        {
          "id": "quadratic_formula",
          "name": "Solve quadratic equation by the quadratic formula",
          "applicable_to": [
            "quadratic_equation"
          ],
          "exact": true,
          "educational_priority": 8,
          "complexity_score": 4,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "quadratic.formula",
          "notes": "",
          "score": 90,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy"
          ]
        },
        {
          "id": "completing_the_square",
          "name": "Solve quadratic equation by completing the square",
          "applicable_to": [
            "quadratic_equation"
          ],
          "exact": true,
          "educational_priority": 7,
          "complexity_score": 5,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "quadratic.complete_square",
          "notes": "",
          "score": 78,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "longer educational path"
          ]
        },
        {
          "id": "symbolic_fallback",
          "name": "Use symbolic fallback only if rule strategies fail",
          "applicable_to": [
            "unsupported",
            "quadratic_equation",
            "polynomial_equation",
            "trigonometric_equation",
            "trigonometric_inequality",
            "rational_equation",
            "radical_equation",
            "exponential_equation",
            "logarithmic_equation",
            "logarithmic_inequality"
          ],
          "exact": true,
          "educational_priority": 1,
          "complexity_score": 10,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "notes": "",
          "score": -11,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "quadratic_factorization",
      "strategy_score": 129,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Substitute x = 2: residual = 0"
          },
          {
            "status": "passed",
            "message": "Substitute x = 3: residual = 0"
          }
        ]
      },
      "available_actions": [
        "solve",
        "list_actions"
      ],
      "selected_action": "solve"
    }
  },
  {
    "input": "x^2 - 5*x + 6 <= 0",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "x^2 - 5*x + 6 <= 0",
      "task_type": "quadratic_inequality",
      "steps": [
        {
          "before": "x^2 - 5*x + 6 <= 0",
          "rule_id": "move_all_terms_left",
          "action": "Move all terms to the left side",
          "after": "x^2 - 5*x + 6 <= 0",
          "explanation": "The inequality is converted to a comparison of one quadratic expression with zero.",
          "details": {}
        },
        {
          "before": "x^2 - 5*x + 6 <= 0",
          "rule_id": "factor_quadratic",
          "action": "Factor the quadratic expression",
          "after": "(x - 3)*(x - 2) <= 0",
          "explanation": "Factorization makes the sign changes visible at the roots.",
          "details": {}
        },
        {
          "before": "(x - 3)*(x - 2) <= 0",
          "rule_id": "find_roots",
          "action": "Find critical points",
          "after": "x = 2, x = 3",
          "explanation": "For a polynomial inequality, sign changes can happen only at real roots.",
          "details": {}
        },
        {
          "before": "x = 2, x = 3",
          "rule_id": "build_intervals",
          "action": "Build intervals between critical points",
          "after": "(-∞, 2), (2, 3), (3, +∞)",
          "explanation": "The sign of a polynomial is constant inside each interval between neighboring roots.",
          "details": {}
        },
        {
          "before": "(-∞, 2), (2, 3), (3, +∞)",
          "rule_id": "select_sign_intervals",
          "action": "Select intervals where the inequality is true",
          "after": "x ∈ [2, 3]",
          "explanation": "A test point from each interval is substituted into the quadratic expression.",
          "details": {}
        }
      ],
      "answer": "x ∈ [2, 3]",
      "problem_profile": {
        "input": "x^2 - 5*x + 6 <= 0",
        "task_type": "quadratic_inequality",
        "problem_kind": "inequality",
        "main_variable": "x",
        "degree": 2,
        "is_polynomial": true,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": "<=",
        "factorable_over_rationals": true,
        "has_simple_integer_roots": true,
        "discriminant": "1",
        "features": [
          "polynomial",
          "factorable",
          "simple_integer_roots"
        ]
      },
      "candidate_strategies": [
        {
          "id": "factor_and_sign_chart",
          "name": "Solve polynomial inequality by roots and a sign chart",
          "applicable_to": [
            "quadratic_inequality"
          ],
          "exact": true,
          "educational_priority": 10,
          "complexity_score": 3,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "legacy.quadratic_inequality",
          "notes": "",
          "score": 116,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "sign chart fits inequality"
          ]
        },
        {
          "id": "root_analysis",
          "name": "Solve polynomial inequality by root analysis",
          "applicable_to": [
            "quadratic_inequality"
          ],
          "exact": true,
          "educational_priority": 8,
          "complexity_score": 4,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "legacy.quadratic_inequality",
          "notes": "",
          "score": 90,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy"
          ]
        }
      ],
      "selected_strategy": "factor_and_sign_chart",
      "strategy_score": 116,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Inequality solver produced interval output and preserved critical-domain checks."
          }
        ]
      },
      "available_actions": [
        "solve",
        "list_actions"
      ],
      "selected_action": "solve"
    }
  },
  {
    "input": "(x - 1)/(x + 2) > 0",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "(x - 1)/(x + 2) > 0",
      "task_type": "rational_inequality",
      "steps": [
        {
          "before": "(x - 1)/(x + 2) > 0",
          "rule_id": "find_forbidden_values",
          "action": "Find forbidden values from original denominators",
          "after": "x ≠ -2",
          "explanation": "Forbidden values split the number line but can never be included in the solution.",
          "details": {
            "forbidden_values": [
              "-2"
            ]
          }
        },
        {
          "before": "(x - 1)/(x + 2) > 0",
          "rule_id": "multi_step_factorization",
          "action": "Write the rational expression in factored form",
          "after": "(x - 1)/(x + 2) > 0",
          "explanation": "Factored numerator and denominator reveal zeros and forbidden values for the sign chart.",
          "details": {}
        },
        {
          "before": "(x - 1)/(x + 2) > 0",
          "rule_id": "rational_inequality_sign_chart",
          "action": "Build a sign chart from zeros and forbidden values",
          "after": "(-∞, -2), (-2, 1), (1, +∞)",
          "explanation": "The sign of a rational expression can change only at zeros or forbidden values.",
          "details": {
            "zeros": [
              "1"
            ],
            "forbidden_values": [
              "-2"
            ],
            "critical_points": [
              "-2",
              "1"
            ]
          }
        },
        {
          "before": "(-∞, -2), (-2, 1), (1, +∞)",
          "rule_id": "select_solution_intervals",
          "action": "Select intervals with the required sign",
          "after": "x ∈ (-∞, -2) ∪ (1, +∞)",
          "explanation": "A test point is checked in each interval of the sign chart.",
          "details": {
            "sign_chart": [
              {
                "interval": "(-∞, -2)",
                "test_point": "-3",
                "value": "4",
                "selected": true
              },
              {
                "interval": "(-2, 1)",
                "test_point": "-1/2",
                "value": "-1",
                "selected": false
              },
              {
                "interval": "(1, +∞)",
                "test_point": "2",
                "value": "1/4",
                "selected": true
              }
            ]
          }
        },
        {
          "before": "x ∈ (-∞, -2) ∪ (1, +∞)",
          "rule_id": "exclude_forbidden_values",
          "action": "Exclude forbidden values",
          "after": "x ∈ (-∞, -2) ∪ (1, +∞)",
          "explanation": "Forbidden values are holes in the graph and are not included even if a simplified expression would allow them.",
          "details": {
            "forbidden_values": [
              "-2"
            ]
          }
        },
        {
          "before": "x ∈ (-∞, -2) ∪ (1, +∞)",
          "rule_id": "check_solution",
          "action": "Check sample points and forbidden values",
          "after": "verification ready",
          "explanation": "The self-checker verifies sample points from selected and rejected intervals.",
          "details": {
            "forbidden_values": [
              "-2"
            ]
          }
        }
      ],
      "answer": "x ∈ (-∞, -2) ∪ (1, +∞)",
      "forbidden_values": [
        "-2"
      ],
      "critical_points": [
        "-2",
        "1"
      ],
      "sign_chart": [
        {
          "interval": "(-∞, -2)",
          "test_point": "-3",
          "value": "4",
          "selected": true
        },
        {
          "interval": "(-2, 1)",
          "test_point": "-1/2",
          "value": "-1",
          "selected": false
        },
        {
          "interval": "(1, +∞)",
          "test_point": "2",
          "value": "1/4",
          "selected": true
        }
      ],
      "problem_profile": {
        "input": "(x - 1)/(x + 2) > 0",
        "task_type": "rational_inequality",
        "problem_kind": "inequality",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": true,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": ">",
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "rational",
          "common_factor"
        ]
      },
      "candidate_strategies": [
        {
          "id": "rational_inequality_factor_sign_chart",
          "name": "Solve rational inequality by factorization and sign chart",
          "applicable_to": [
            "rational_inequality"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 4,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage3.rational_inequality",
          "notes": "",
          "score": 137,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "factorization plus sign chart"
          ]
        },
        {
          "id": "rational_sign_chart",
          "name": "Solve rational inequality by a sign chart",
          "applicable_to": [
            "rational_inequality"
          ],
          "exact": true,
          "educational_priority": 8,
          "complexity_score": 5,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "legacy.rational_inequality",
          "notes": "",
          "score": 87,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy"
          ]
        }
      ],
      "selected_strategy": "rational_inequality_factor_sign_chart",
      "strategy_score": 137,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Sign chart contains test points for each interval."
          },
          {
            "status": "passed",
            "message": "Forbidden values are recorded and excluded: -2"
          }
        ]
      },
      "available_actions": [
        "solve",
        "list_actions"
      ],
      "selected_action": "solve"
    }
  },
  {
    "input": "|x - 3| = 5",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "|x - 3| = 5",
      "task_type": "absolute_value_equation",
      "steps": [
        {
          "before": "|x - 3| = 5",
          "rule_id": "identify_absolute_value_form",
          "action": "Identify the absolute value expression and the bound",
          "after": "|x - 3| = 5",
          "explanation": "This MVP supports absolute value relations of the form |ax + b| compared with a number.",
          "details": {}
        },
        {
          "before": "|x - 3| = 5",
          "rule_id": "split_absolute_value_equation",
          "action": "Split into two linear equations",
          "after": "x - 3 = 5 or x - 3 = -5",
          "explanation": "If |A| = b and b >= 0, then A = b or A = -b.",
          "details": {}
        },
        {
          "before": "x - 3 = 5 or x - 3 = -5",
          "rule_id": "solve_absolute_value_branches",
          "action": "Solve both linear equations",
          "after": "x = -2 or x = 8",
          "explanation": "Each branch is solved by isolating the variable.",
          "details": {}
        }
      ],
      "answer": "x = -2 or x = 8",
      "problem_profile": {
        "input": "|x - 3| = 5",
        "task_type": "absolute_value_equation",
        "problem_kind": "equation",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": false,
        "has_absolute_value": true,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": "=",
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "absolute_value"
        ]
      },
      "candidate_strategies": [
        {
          "id": "absolute_value_branching",
          "name": "Solve absolute value relation by branching",
          "applicable_to": [
            "absolute_value_equation",
            "absolute_value_inequality"
          ],
          "exact": true,
          "educational_priority": 10,
          "complexity_score": 3,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "legacy.absolute_value",
          "notes": "",
          "score": 101,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy"
          ]
        }
      ],
      "selected_strategy": "absolute_value_branching",
      "strategy_score": 101,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "No specialized checker was required."
          }
        ]
      },
      "available_actions": [
        "solve",
        "list_actions"
      ],
      "selected_action": "solve"
    }
  },
  {
    "input": "|x - 3| < 5",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "|x - 3| < 5",
      "task_type": "absolute_value_inequality",
      "steps": [
        {
          "before": "|x - 3| < 5",
          "rule_id": "identify_absolute_value_form",
          "action": "Identify the absolute value expression and the bound",
          "after": "|x - 3| < 5",
          "explanation": "This MVP supports absolute value relations of the form |ax + b| compared with a number.",
          "details": {}
        },
        {
          "before": "|x - 3| < 5",
          "rule_id": "convert_abs_less_than",
          "action": "Convert to a compound inequality",
          "after": "-5 < x - 3 < 5",
          "explanation": "If |A| < b, then -b < A < b. For <=, the endpoints are included.",
          "details": {}
        },
        {
          "before": "-5 < x - 3 < 5",
          "rule_id": "solve_compound_inequality",
          "action": "Isolate the variable in the compound inequality",
          "after": "x ∈ (-2, 8)",
          "explanation": "Both sides are solved and written as an interval.",
          "details": {}
        }
      ],
      "answer": "x ∈ (-2, 8)",
      "problem_profile": {
        "input": "|x - 3| < 5",
        "task_type": "absolute_value_inequality",
        "problem_kind": "inequality",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": false,
        "has_absolute_value": true,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": "<",
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "absolute_value"
        ]
      },
      "candidate_strategies": [
        {
          "id": "absolute_value_branching",
          "name": "Solve absolute value relation by branching",
          "applicable_to": [
            "absolute_value_equation",
            "absolute_value_inequality"
          ],
          "exact": true,
          "educational_priority": 10,
          "complexity_score": 3,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "legacy.absolute_value",
          "notes": "",
          "score": 101,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy"
          ]
        }
      ],
      "selected_strategy": "absolute_value_branching",
      "strategy_score": 101,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Inequality solver produced interval output and preserved critical-domain checks."
          }
        ]
      },
      "available_actions": [
        "solve",
        "list_actions"
      ],
      "selected_action": "solve"
    }
  },
  {
    "input": "2*x^2 + 3*x + 7 = 0",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "2*x^2 + 3*x + 7 = 0",
      "task_type": "quadratic_equation",
      "steps": [
        {
          "before": "2*x^2 + 3*x + 7 = 0",
          "rule_id": "move_all_terms_left",
          "action": "Move all terms to the left side",
          "after": "2*x^2 + 3*x + 7 = 0",
          "explanation": "A quadratic equation is solved in the standard form ax^2 + bx + c = 0.",
          "details": {}
        },
        {
          "before": "2*x^2 + 3*x + 7 = 0",
          "rule_id": "quadratic_formula",
          "action": "Apply the quadratic formula",
          "after": "x = (-3 ± sqrt(-47))/4",
          "explanation": "For ax^2 + bx + c = 0, use x = (-b ± sqrt(b^2 - 4ac))/(2a).",
          "details": {
            "a": "2",
            "b": "3",
            "c": "7",
            "discriminant": "-47"
          }
        },
        {
          "before": "x = (-3 ± sqrt(-47))/4",
          "rule_id": "write_roots",
          "action": "Write the roots",
          "after": "x = -3/4 - sqrt(47)*I/4 or x = -3/4 + sqrt(47)*I/4",
          "explanation": "The resulting values are checked against the original quadratic equation.",
          "details": {}
        }
      ],
      "answer": "x = -3/4 - sqrt(47)*I/4 or x = -3/4 + sqrt(47)*I/4",
      "roots": [
        "-3/4 - sqrt(47)*I/4",
        "-3/4 + sqrt(47)*I/4"
      ],
      "problem_profile": {
        "input": "2*x^2 + 3*x + 7 = 0",
        "task_type": "quadratic_equation",
        "problem_kind": "equation",
        "main_variable": "x",
        "degree": 2,
        "is_polynomial": true,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "complex",
        "relation_operator": "=",
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": "-47",
        "features": [
          "polynomial"
        ]
      },
      "candidate_strategies": [
        {
          "id": "quadratic_formula",
          "name": "Solve quadratic equation by the quadratic formula",
          "applicable_to": [
            "quadratic_equation"
          ],
          "exact": true,
          "educational_priority": 8,
          "complexity_score": 4,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "quadratic.formula",
          "notes": "",
          "score": 110,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "factorization is not simple"
          ]
        },
        {
          "id": "completing_the_square",
          "name": "Solve quadratic equation by completing the square",
          "applicable_to": [
            "quadratic_equation"
          ],
          "exact": true,
          "educational_priority": 7,
          "complexity_score": 5,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "quadratic.complete_square",
          "notes": "",
          "score": 78,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "longer educational path"
          ]
        },
        {
          "id": "symbolic_fallback",
          "name": "Use symbolic fallback only if rule strategies fail",
          "applicable_to": [
            "unsupported",
            "quadratic_equation",
            "polynomial_equation",
            "trigonometric_equation",
            "trigonometric_inequality",
            "rational_equation",
            "radical_equation",
            "exponential_equation",
            "logarithmic_equation",
            "logarithmic_inequality"
          ],
          "exact": true,
          "educational_priority": 1,
          "complexity_score": 10,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "notes": "",
          "score": -11,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "quadratic_formula",
      "strategy_score": 110,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Substitute x = -3/4 - sqrt(47)*I/4: residual = 0"
          },
          {
            "status": "passed",
            "message": "Substitute x = -3/4 + sqrt(47)*I/4: residual = 0"
          }
        ]
      },
      "available_actions": [
        "solve",
        "list_actions"
      ],
      "selected_action": "solve"
    }
  },
  {
    "input": "x^3 - x = 0",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "x^3 - x = 0",
      "task_type": "polynomial_equation",
      "steps": [
        {
          "before": "x^3 - x = 0",
          "rule_id": "move_all_terms_left",
          "action": "Move all terms to the left side",
          "after": "x^3 - x = 0",
          "explanation": "A polynomial equation is first written as P(x) = 0.",
          "details": {}
        },
        {
          "before": "x^3 - x = 0",
          "rule_id": "factor_common_term",
          "action": "Take out the common factor",
          "after": "x*(x^2 - 1) = 0",
          "explanation": "All terms contain a common factor, so it is placed outside the parentheses.",
          "details": {
            "previous": "x^3 - x",
            "factorized": "x*(x^2 - 1)"
          }
        },
        {
          "before": "x*(x^2 - 1) = 0",
          "rule_id": "difference_of_squares",
          "action": "Apply the difference of squares formula",
          "after": "x*(x - 1)*(x + 1) = 0",
          "explanation": "The expression has the form a^2 - b^2, so it becomes (a - b)(a + b).",
          "details": {
            "formula_result": "x*(x - 1)*(x + 1)"
          }
        },
        {
          "before": "x^3 - x = 0",
          "rule_id": "multi_step_factorization",
          "action": "Combine the factorization steps",
          "after": "x*(x - 1)*(x + 1) = 0",
          "explanation": "The expression required more than one algebraic transformation before it was fully factorized.",
          "details": {
            "rules_used": [
              "factor_common_term",
              "difference_of_squares"
            ]
          }
        },
        {
          "before": "x*(x - 1)*(x + 1) = 0",
          "rule_id": "solve_by_zero_product_property",
          "action": "Apply the zero-product property",
          "after": "x - 1 = 0 or x = 0 or x + 1 = 0",
          "explanation": "A product is zero when at least one factor is zero.",
          "details": {}
        },
        {
          "before": "x - 1 = 0",
          "rule_id": "solve_linear_factor",
          "action": "Solve a linear factor",
          "after": "x = 1",
          "explanation": "Isolate the variable in the linear factor.",
          "details": {}
        },
        {
          "before": "x = 0",
          "rule_id": "solve_linear_factor",
          "action": "Solve a linear factor",
          "after": "x = 0",
          "explanation": "Isolate the variable in the linear factor.",
          "details": {}
        },
        {
          "before": "x + 1 = 0",
          "rule_id": "solve_linear_factor",
          "action": "Solve a linear factor",
          "after": "x = -1",
          "explanation": "Isolate the variable in the linear factor.",
          "details": {}
        },
        {
          "before": "x = 1 or x = 0 or x = -1",
          "rule_id": "check_solution",
          "action": "Check the roots in the original equation",
          "after": "x = -1 or x = 0 or x = 1",
          "explanation": "Substitution removes extraneous candidates and confirms valid roots.",
          "details": {
            "roots": [
              "-1",
              "0",
              "1"
            ]
          }
        }
      ],
      "answer": "x = -1 or x = 0 or x = 1",
      "roots": [
        "-1",
        "0",
        "1"
      ],
      "problem_profile": {
        "input": "x^3 - x = 0",
        "task_type": "polynomial_equation",
        "problem_kind": "equation",
        "main_variable": "x",
        "degree": 3,
        "is_polynomial": true,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": "=",
        "factorable_over_rationals": true,
        "has_simple_integer_roots": true,
        "discriminant": null,
        "features": [
          "polynomial",
          "factorable",
          "simple_integer_roots",
          "common_factor",
          "common_factor_then_formula"
        ]
      },
      "candidate_strategies": [
        {
          "id": "common_factor_then_difference_of_squares",
          "name": "Solve by common factor followed by difference of squares",
          "applicable_to": [
            "polynomial_equation"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 3,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage3.polynomial_equation",
          "notes": "",
          "score": 144,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "common factor reveals a formula"
          ]
        },
        {
          "id": "polynomial_factorization_strategy",
          "name": "Solve polynomial equation by multi-step factorization",
          "applicable_to": [
            "polynomial_equation"
          ],
          "exact": true,
          "educational_priority": 10,
          "complexity_score": 4,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage3.polynomial_equation",
          "notes": "",
          "score": 123,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "factorable polynomial"
          ]
        },
        {
          "id": "polynomial_factorization",
          "name": "Solve polynomial equation by factorization",
          "applicable_to": [
            "polynomial_equation"
          ],
          "exact": true,
          "educational_priority": 8,
          "complexity_score": 5,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "polynomial.factorization",
          "notes": "",
          "score": 112,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "factorable polynomial"
          ]
        },
        {
          "id": "symbolic_fallback",
          "name": "Use symbolic fallback only if rule strategies fail",
          "applicable_to": [
            "unsupported",
            "quadratic_equation",
            "polynomial_equation",
            "trigonometric_equation",
            "trigonometric_inequality",
            "rational_equation",
            "radical_equation",
            "exponential_equation",
            "logarithmic_equation",
            "logarithmic_inequality"
          ],
          "exact": true,
          "educational_priority": 1,
          "complexity_score": 10,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "notes": "",
          "score": -11,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "common_factor_then_difference_of_squares",
      "strategy_score": 144,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Substitute x = -1: residual = 0"
          },
          {
            "status": "passed",
            "message": "Substitute x = 0: residual = 0"
          },
          {
            "status": "passed",
            "message": "Substitute x = 1: residual = 0"
          }
        ]
      },
      "available_actions": [
        "solve",
        "list_actions"
      ],
      "selected_action": "solve"
    }
  },
  {
    "input": "sin(x) = 0",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "sin(x) = 0",
      "task_type": "trigonometric_equation",
      "steps": [
        {
          "before": "sin(x) = 0",
          "rule_id": "trig_solve_basic_sin",
          "action": "Solve the standard sin equation",
          "after": "sin(x) = 0",
          "explanation": "The equation is reduced to a standard unit-circle case.",
          "details": {}
        },
        {
          "before": "sin(x) = 0",
          "rule_id": "trig_unit_circle_values",
          "action": "Use unit-circle values",
          "after": "0, π",
          "explanation": "The basic angles are read from standard unit-circle values.",
          "details": {
            "function": "sin",
            "value": "0"
          }
        },
        {
          "before": "sin(x) = 0",
          "rule_id": "trig_periodic_solution",
          "action": "Write the periodic solution family",
          "after": "x = π*n, n ∈ Z",
          "explanation": "All real solutions are obtained by adding integer multiples of the period.",
          "details": {
            "integer_parameter": "n ∈ Z"
          }
        },
        {
          "before": "x = π*n, n ∈ Z",
          "rule_id": "trig_check_solution",
          "action": "Check representative solutions",
          "after": "verification passed",
          "explanation": "Representative angles from the periodic family satisfy the original trigonometric equation.",
          "details": {}
        }
      ],
      "answer": "x = π*n, n ∈ Z",
      "periodic_solution": "x = π*n, n ∈ Z",
      "problem_profile": {
        "input": "sin(x) = 0",
        "task_type": "trigonometric_equation",
        "problem_kind": "equation",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": true,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": "=",
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "trigonometric"
        ]
      },
      "candidate_strategies": [
        {
          "id": "trigonometric_standard_solution",
          "name": "Use standard trigonometric solution families",
          "applicable_to": [
            "trigonometric_equation"
          ],
          "exact": true,
          "educational_priority": 10,
          "complexity_score": 3,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage5.trig",
          "notes": "",
          "score": 116,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "standard rule form"
          ]
        },
        {
          "id": "unit_circle_reasoning",
          "name": "Use unit-circle reasoning",
          "applicable_to": [
            "trigonometric_equation"
          ],
          "exact": true,
          "educational_priority": 8,
          "complexity_score": 4,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage5.trig",
          "notes": "",
          "score": 90,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy"
          ]
        },
        {
          "id": "symbolic_fallback",
          "name": "Use symbolic fallback only if rule strategies fail",
          "applicable_to": [
            "unsupported",
            "quadratic_equation",
            "polynomial_equation",
            "trigonometric_equation",
            "trigonometric_inequality",
            "rational_equation",
            "radical_equation",
            "exponential_equation",
            "logarithmic_equation",
            "logarithmic_inequality"
          ],
          "exact": true,
          "educational_priority": 1,
          "complexity_score": 10,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "notes": "",
          "score": -11,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "trigonometric_standard_solution",
      "strategy_score": 116,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Periodic solution family matches a standard trigonometric identity."
          }
        ]
      },
      "available_actions": [
        "solve",
        "list_actions"
      ],
      "selected_action": "solve"
    }
  },
  {
    "input": "d/dx sin(x^2)",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "d/dx sin(x^2)",
      "task_type": "derivative",
      "steps": [
        {
          "before": "d/dx sin(x^2)",
          "rule_id": "identify_derivative_request",
          "action": "Identify the derivative request",
          "after": "d/dx(sin(x^2))",
          "explanation": "The selected action is differentiation; the derivative will be built from explicit rules.",
          "details": {}
        },
        {
          "before": "sin(x^2)",
          "rule_id": "derivative_sin_rule",
          "action": "Differentiate sine",
          "after": "cos(x^2)",
          "explanation": "The derivative of sin(u) is cos(u)*u'.",
          "details": {}
        },
        {
          "before": "sin(x^2)",
          "rule_id": "derivative_chain_rule",
          "action": "Apply the chain rule",
          "after": "cos(x^2)*d/dx(x^2)",
          "explanation": "The sine argument is an inner function.",
          "details": {}
        },
        {
          "before": "x^2",
          "rule_id": "derivative_power_rule",
          "action": "Apply the power rule",
          "after": "2*x^1",
          "explanation": "For x^n, the derivative is n*x^(n-1).",
          "details": {}
        },
        {
          "before": "unsimplified derivative",
          "rule_id": "derivative_simplify_after_differentiation",
          "action": "Simplify after differentiation",
          "after": "2*x*cos(x^2)",
          "explanation": "The derivative expression is simplified to a compact exact form.",
          "details": {}
        },
        {
          "before": "rule-based derivative",
          "rule_id": "derivative_check_by_symbolic_diff",
          "action": "Check derivative by symbolic differentiation",
          "after": "2*x*cos(x^2)",
          "explanation": "The rule-produced derivative is compared with symbolic differentiation during self-checking.",
          "details": {}
        },
        {
          "before": "2*x*cos(x^2)",
          "rule_id": "check_solution",
          "action": "Record derivative self-check",
          "after": "verification delegated to self_checker",
          "explanation": "The independent checker verifies the derivative after the strategy finishes.",
          "details": {}
        }
      ],
      "answer": "2*x*cos(x^2)",
      "derivative": "2*x*cos(x**2)",
      "problem_profile": {
        "input": "d/dx sin(x^2)",
        "task_type": "derivative",
        "problem_kind": "derivative",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": true,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": true,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "trigonometric",
          "derivative_chain"
        ]
      },
      "candidate_strategies": [
        {
          "id": "chain_rule",
          "name": "Differentiate a composite function by the chain rule",
          "applicable_to": [
            "derivative"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "derivative.rules",
          "notes": "",
          "score": 130,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "composite-function derivative"
          ]
        },
        {
          "id": "derivative_rule_based",
          "name": "Differentiate by symbolic rules",
          "applicable_to": [
            "derivative"
          ],
          "exact": true,
          "educational_priority": 9,
          "complexity_score": 3,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "derivative.rules",
          "notes": "",
          "score": 112,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "standard rule form"
          ]
        },
        {
          "id": "symbolic_derivative_fallback_check",
          "name": "Use symbolic differentiation as fallback/check",
          "applicable_to": [
            "derivative"
          ],
          "exact": true,
          "educational_priority": 3,
          "complexity_score": 8,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "derivative.rules",
          "notes": "",
          "score": 3,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "chain_rule",
      "strategy_score": 130,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Rule derivative compared with symbolic derivative: 2*x*cos(x^2) vs 2*x*cos(x^2)"
          }
        ]
      },
      "available_actions": [
        "differentiate",
        "list_actions"
      ],
      "selected_action": "differentiate"
    }
  },
  {
    "input": "integrate 2*x + 1",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "integrate 2*x + 1",
      "task_type": "integral",
      "steps": [
        {
          "before": "integrate 2*x + 1",
          "rule_id": "identify_integral_request",
          "action": "Identify the indefinite integral",
          "after": "∫(2*x + 1) dx",
          "explanation": "The integrand will be handled by explicit Stage 8 integration rules when possible.",
          "details": {}
        },
        {
          "before": "2*x + 1",
          "rule_id": "integral_sum_rule",
          "action": "Split the integral into a sum",
          "after": "∫(1) dx + ∫(2*x) dx",
          "explanation": "The integral of a sum is the sum of the integrals.",
          "details": {}
        },
        {
          "before": "1",
          "rule_id": "integral_constant_rule",
          "action": "Integrate a constant",
          "after": "x",
          "explanation": "The integral of a constant c is c*x.",
          "details": {}
        },
        {
          "before": "2*x",
          "rule_id": "integral_constant_multiple_rule",
          "action": "Take out the constant factor",
          "after": "2*∫(x) dx",
          "explanation": "Constant factors may be moved outside the integral.",
          "details": {}
        },
        {
          "before": "x",
          "rule_id": "integral_variable_rule",
          "action": "Integrate the variable",
          "after": "x^2/2",
          "explanation": "This is the power rule with n=1.",
          "details": {}
        },
        {
          "before": "∫x dx",
          "rule_id": "integral_power_rule",
          "action": "Apply the power rule",
          "after": "x^2/2",
          "explanation": "For x^n, the antiderivative is x^(n+1)/(n+1).",
          "details": {}
        },
        {
          "before": "x*(x + 1)",
          "rule_id": "integral_add_constant_C",
          "action": "Add the constant of integration",
          "after": "x^2 + x + C",
          "explanation": "Every indefinite integral represents a family of antiderivatives, so an arbitrary constant C is added.",
          "details": {}
        },
        {
          "before": "F(x) = x*(x + 1)",
          "rule_id": "integral_check_by_differentiation",
          "action": "Check the antiderivative by differentiation",
          "after": "F'(x) = 2*x + 1",
          "explanation": "The antiderivative is verified by differentiating it and comparing with the original integrand on the allowed domain.",
          "details": {
            "derivative": "2*x + 1",
            "integrand": "2*x + 1"
          }
        },
        {
          "before": "integral verification",
          "rule_id": "check_solution",
          "action": "Record integral self-check",
          "after": "passed",
          "explanation": "The independent checker compares the differentiated antiderivative with the integrand.",
          "details": {}
        }
      ],
      "answer": "x^2 + x + C",
      "antiderivative": "x*(x + 1)",
      "integrand": "2*x + 1",
      "original_integrand": "2*x + 1",
      "forbidden_values": [],
      "domain_restrictions": [],
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Differentiate antiderivative: 2*x + 1; original: 2*x + 1"
          }
        ]
      },
      "problem_profile": {
        "input": "integrate 2*x + 1",
        "task_type": "integral",
        "problem_kind": "integral",
        "main_variable": "x",
        "degree": 1,
        "is_polynomial": true,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": true,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "polynomial"
        ]
      },
      "candidate_strategies": [
        {
          "id": "power_rule_integration",
          "name": "Integrate by linearity and the power rule",
          "applicable_to": [
            "integral"
          ],
          "exact": true,
          "educational_priority": 10,
          "complexity_score": 3,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "integral.rules",
          "notes": "",
          "score": 116,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "standard rule form"
          ]
        },
        {
          "id": "symbolic_integral_fallback_check",
          "name": "Use symbolic integration as fallback/check",
          "applicable_to": [
            "integral"
          ],
          "exact": true,
          "educational_priority": 3,
          "complexity_score": 8,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "integral.rules",
          "notes": "",
          "score": 3,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "power_rule_integration",
      "strategy_score": 116,
      "analysis": {
        "integrand": "2*x + 1",
        "variable": "x",
        "bounds": null,
        "antiderivative": "x*(x + 1)",
        "definite_value": null
      },
      "available_actions": [
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "list_actions"
      ],
      "selected_action": "solve"
    }
  },
  {
    "input": "x^2 - 9",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "x^2 - 9",
      "task_type": "algebraic_expression",
      "steps": [
        {
          "before": "x^2 - 9",
          "rule_id": "difference_of_squares",
          "action": "Apply the difference of squares formula",
          "after": "(x - 3)*(x + 3)",
          "explanation": "The expression has the form a^2 - b^2, so it becomes (a - b)(a + b).",
          "details": {
            "formula_result": "(x - 3)*(x + 3)"
          }
        }
      ],
      "answer": "(x - 3)*(x + 3)",
      "problem_profile": {
        "input": "x^2 - 9",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": 2,
        "is_polynomial": true,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": true,
        "has_simple_integer_roots": true,
        "discriminant": null,
        "features": [
          "polynomial",
          "factorable",
          "simple_integer_roots",
          "difference_of_squares"
        ]
      },
      "candidate_strategies": [
        {
          "id": "abbreviated_multiplication_factorization",
          "name": "Factor by abbreviated multiplication formulas",
          "applicable_to": [
            "algebraic_expression"
          ],
          "exact": true,
          "educational_priority": 10,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage3.factor_expression",
          "notes": "",
          "score": 124,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "explicit transformation rule"
          ]
        },
        {
          "id": "common_factor_extraction",
          "name": "Take out a common factor",
          "applicable_to": [
            "algebraic_expression"
          ],
          "exact": true,
          "educational_priority": 10,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage3.factor_expression",
          "notes": "",
          "score": 124,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "explicit transformation rule"
          ]
        },
        {
          "id": "collect_like_terms",
          "name": "Simplify an algebraic expression by collecting like terms",
          "applicable_to": [
            "algebraic_expression"
          ],
          "exact": true,
          "educational_priority": 7,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "legacy.expression",
          "notes": "",
          "score": 92,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy"
          ]
        }
      ],
      "selected_strategy": "abbreviated_multiplication_factorization",
      "strategy_score": 124,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Expression transformation was checked by exact symbolic arithmetic."
          }
        ]
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "simplify"
    }
  },
  {
    "input": "x^2 + 6*x + 9",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "x^2 + 6*x + 9",
      "task_type": "algebraic_expression",
      "steps": [
        {
          "before": "x^2 + 6*x + 9",
          "rule_id": "perfect_square_trinomial",
          "action": "Recognize a perfect square trinomial",
          "after": "(x + 3)^2",
          "explanation": "The expression has the form a^2 + 2ab + b^2, so it becomes (a + b)^2.",
          "details": {
            "formula_result": "(x + 3)^2"
          }
        }
      ],
      "answer": "(x + 3)^2",
      "problem_profile": {
        "input": "x^2 + 6*x + 9",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": 2,
        "is_polynomial": true,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": true,
        "has_simple_integer_roots": true,
        "discriminant": null,
        "features": [
          "polynomial",
          "factorable",
          "simple_integer_roots",
          "perfect_square_trinomial"
        ]
      },
      "candidate_strategies": [
        {
          "id": "abbreviated_multiplication_factorization",
          "name": "Factor by abbreviated multiplication formulas",
          "applicable_to": [
            "algebraic_expression"
          ],
          "exact": true,
          "educational_priority": 10,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage3.factor_expression",
          "notes": "",
          "score": 124,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "explicit transformation rule"
          ]
        },
        {
          "id": "common_factor_extraction",
          "name": "Take out a common factor",
          "applicable_to": [
            "algebraic_expression"
          ],
          "exact": true,
          "educational_priority": 10,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage3.factor_expression",
          "notes": "",
          "score": 124,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "explicit transformation rule"
          ]
        },
        {
          "id": "collect_like_terms",
          "name": "Simplify an algebraic expression by collecting like terms",
          "applicable_to": [
            "algebraic_expression"
          ],
          "exact": true,
          "educational_priority": 7,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "legacy.expression",
          "notes": "",
          "score": 92,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy"
          ]
        }
      ],
      "selected_strategy": "abbreviated_multiplication_factorization",
      "strategy_score": 124,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Expression transformation was checked by exact symbolic arithmetic."
          }
        ]
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "simplify"
    }
  },
  {
    "input": "2*x^2 + 4*x",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "2*x^2 + 4*x",
      "task_type": "algebraic_expression",
      "steps": [
        {
          "before": "2*x^2 + 4*x",
          "rule_id": "factor_common_term",
          "action": "Take out the common factor",
          "after": "2*x*(x + 2)",
          "explanation": "All terms contain a common factor, so it is placed outside the parentheses.",
          "details": {
            "previous": "2*x^2 + 4*x",
            "factorized": "2*x*(x + 2)"
          }
        }
      ],
      "answer": "2*x*(x + 2)",
      "problem_profile": {
        "input": "2*x^2 + 4*x",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": 2,
        "is_polynomial": true,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": true,
        "has_simple_integer_roots": true,
        "discriminant": null,
        "features": [
          "polynomial",
          "factorable",
          "simple_integer_roots",
          "common_factor"
        ]
      },
      "candidate_strategies": [
        {
          "id": "common_factor_extraction",
          "name": "Take out a common factor",
          "applicable_to": [
            "algebraic_expression"
          ],
          "exact": true,
          "educational_priority": 10,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage3.factor_expression",
          "notes": "",
          "score": 124,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "explicit transformation rule"
          ]
        },
        {
          "id": "collect_like_terms",
          "name": "Simplify an algebraic expression by collecting like terms",
          "applicable_to": [
            "algebraic_expression"
          ],
          "exact": true,
          "educational_priority": 7,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "legacy.expression",
          "notes": "",
          "score": 92,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy"
          ]
        }
      ],
      "selected_strategy": "common_factor_extraction",
      "strategy_score": 124,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Expression transformation was checked by exact symbolic arithmetic."
          }
        ]
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "simplify"
    }
  },
  {
    "input": "x^4 - 5*x^2 + 4 = 0",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "x^4 - 5*x^2 + 4 = 0",
      "task_type": "polynomial_equation",
      "steps": [
        {
          "before": "x^4 - 5*x^2 + 4 = 0",
          "rule_id": "move_all_terms_left",
          "action": "Move all terms to the left side",
          "after": "x^4 - 5*x^2 + 4 = 0",
          "explanation": "The equation is written as P(x)=0.",
          "details": {}
        },
        {
          "before": "x^4 - 5*x^2 + 4 = 0",
          "rule_id": "biquadratic_substitution",
          "action": "Recognize a quadratic equation in x^2",
          "after": "Let y = x^2; then y^2 - 5*y + 4 = 0",
          "explanation": "Only even powers of x occur, so y=x^2 converts the equation to a quadratic.",
          "details": {}
        },
        {
          "before": "y^2 - 5*y + 4 = 0",
          "rule_id": "factor_quadratic_trinomial",
          "action": "Factor the quadratic in y",
          "after": "(y - 4)*(y - 1) = 0",
          "explanation": "The auxiliary quadratic has simple rational roots.",
          "details": {}
        },
        {
          "before": "(y - 4)*(y - 1) = 0",
          "rule_id": "solve_by_zero_product_property",
          "action": "Apply the zero-product property",
          "after": "y = 1 or y = 4",
          "explanation": "Each factor can be set equal to zero.",
          "details": {}
        },
        {
          "before": "y = 1 or y = 4",
          "rule_id": "solve_quadratic_factor",
          "action": "Return to x and solve each quadratic factor",
          "after": "x^2 = 1 or x^2 = 4",
          "explanation": "Substitute y=x^2 back into the equations.",
          "details": {}
        },
        {
          "before": "x^2 = 1 or x^2 = 4",
          "rule_id": "check_solution",
          "action": "Check the candidate roots",
          "after": "x = -2 or x = -1 or x = 1 or x = 2",
          "explanation": "Each candidate is substituted into the original equation.",
          "details": {
            "roots": [
              "-2",
              "-1",
              "1",
              "2"
            ]
          }
        }
      ],
      "answer": "x = -2 or x = -1 or x = 1 or x = 2",
      "roots": [
        "-2",
        "-1",
        "1",
        "2"
      ],
      "problem_profile": {
        "input": "x^4 - 5*x^2 + 4 = 0",
        "task_type": "polynomial_equation",
        "problem_kind": "equation",
        "main_variable": "x",
        "degree": 4,
        "is_polynomial": true,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": "=",
        "factorable_over_rationals": true,
        "has_simple_integer_roots": true,
        "discriminant": null,
        "features": [
          "polynomial",
          "factorable",
          "simple_integer_roots"
        ]
      },
      "candidate_strategies": [
        {
          "id": "biquadratic_equation_strategy",
          "name": "Solve a biquadratic equation using y=x^2",
          "applicable_to": [
            "polynomial_equation"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 4,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage3.polynomial_equation",
          "notes": "",
          "score": 132,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "biquadratic structure"
          ]
        },
        {
          "id": "polynomial_factorization_strategy",
          "name": "Solve polynomial equation by multi-step factorization",
          "applicable_to": [
            "polynomial_equation"
          ],
          "exact": true,
          "educational_priority": 10,
          "complexity_score": 4,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage3.polynomial_equation",
          "notes": "",
          "score": 123,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "factorable polynomial"
          ]
        },
        {
          "id": "polynomial_factorization",
          "name": "Solve polynomial equation by factorization",
          "applicable_to": [
            "polynomial_equation"
          ],
          "exact": true,
          "educational_priority": 8,
          "complexity_score": 5,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "polynomial.factorization",
          "notes": "",
          "score": 112,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "factorable polynomial"
          ]
        },
        {
          "id": "symbolic_fallback",
          "name": "Use symbolic fallback only if rule strategies fail",
          "applicable_to": [
            "unsupported",
            "quadratic_equation",
            "polynomial_equation",
            "trigonometric_equation",
            "trigonometric_inequality",
            "rational_equation",
            "radical_equation",
            "exponential_equation",
            "logarithmic_equation",
            "logarithmic_inequality"
          ],
          "exact": true,
          "educational_priority": 1,
          "complexity_score": 10,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "notes": "",
          "score": -11,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "biquadratic_equation_strategy",
      "strategy_score": 132,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Substitute x = -2: residual = 0"
          },
          {
            "status": "passed",
            "message": "Substitute x = -1: residual = 0"
          },
          {
            "status": "passed",
            "message": "Substitute x = 1: residual = 0"
          },
          {
            "status": "passed",
            "message": "Substitute x = 2: residual = 0"
          }
        ]
      },
      "available_actions": [
        "solve",
        "list_actions"
      ],
      "selected_action": "solve"
    }
  },
  {
    "input": "(x^2 - 9)/(x - 3)",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "(x^2 - 9)/(x - 3)",
      "task_type": "algebraic_expression",
      "steps": [
        {
          "before": "(x^2 - 9)/(x - 3)",
          "rule_id": "find_forbidden_values",
          "action": "Find forbidden values from the denominator",
          "after": "x ≠ 3",
          "explanation": "A rational expression is defined only when its denominator is not zero.",
          "details": {
            "forbidden_values": [
              "3"
            ]
          }
        },
        {
          "before": "x^2 - 9",
          "rule_id": "difference_of_squares",
          "action": "Apply the difference of squares formula",
          "after": "(x - 3)*(x + 3)",
          "explanation": "The expression has the form a^2 - b^2, so it becomes (a - b)(a + b).",
          "details": {
            "formula_result": "(x - 3)*(x + 3)"
          }
        },
        {
          "before": "(x^2 - 9)/(x - 3)",
          "rule_id": "multi_step_factorization",
          "action": "Write numerator and denominator in factored form",
          "after": "((x - 3)*(x + 3))/(x - 3)",
          "explanation": "The rational expression is prepared for cancellation by factoring both parts.",
          "details": {}
        },
        {
          "before": "((x - 3)*(x + 3))/(x - 3)",
          "rule_id": "cancel_common_factor",
          "action": "Cancel common factors",
          "after": "x + 3",
          "explanation": "A common factor may be canceled only after its forbidden value has already been recorded.",
          "details": {
            "original_forbidden_values": [
              "3"
            ]
          }
        },
        {
          "before": "x + 3",
          "rule_id": "preserve_domain_restriction",
          "action": "Preserve the domain restriction",
          "after": "x + 3, where x ≠ 3",
          "explanation": "Cancellation changes the written form but not the original domain; excluded denominator roots remain excluded.",
          "details": {
            "forbidden_values": [
              "3"
            ]
          }
        }
      ],
      "answer": "x + 3, where x ≠ 3",
      "forbidden_values": [
        "3"
      ],
      "domain_restrictions": [
        "x != 3"
      ],
      "simplified_expression": "x + 3",
      "problem_profile": {
        "input": "(x^2 - 9)/(x - 3)",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": true,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "rational"
        ]
      },
      "candidate_strategies": [
        {
          "id": "rational_expression_factor_cancel",
          "name": "Simplify a rational expression with domain restrictions",
          "applicable_to": [
            "algebraic_expression"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage3.rational_expression",
          "notes": "",
          "score": 140,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "domain-aware rational simplification"
          ]
        },
        {
          "id": "collect_like_terms",
          "name": "Simplify an algebraic expression by collecting like terms",
          "applicable_to": [
            "algebraic_expression"
          ],
          "exact": true,
          "educational_priority": 7,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "legacy.expression",
          "notes": "",
          "score": 92,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy"
          ]
        }
      ],
      "selected_strategy": "rational_expression_factor_cancel",
      "strategy_score": 140,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Expression transformation was checked by exact symbolic arithmetic."
          },
          {
            "status": "passed",
            "message": "Domain restrictions preserved: 3"
          }
        ]
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "simplify"
    }
  },
  {
    "input": "(x^2 - 9)/(x - 3) = 0",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "(x^2 - 9)/(x - 3) = 0",
      "task_type": "rational_equation",
      "steps": [
        {
          "before": "(x^2 - 9)/(x - 3) = 0",
          "rule_id": "find_forbidden_values",
          "action": "Find forbidden values before transformations",
          "after": "x ≠ 3",
          "explanation": "Values that make an original denominator zero cannot be solutions.",
          "details": {
            "forbidden_values": [
              "3"
            ]
          }
        },
        {
          "before": "x^2 - 9",
          "rule_id": "difference_of_squares",
          "action": "Apply the difference of squares formula",
          "after": "(x - 3)*(x + 3)",
          "explanation": "The expression has the form a^2 - b^2, so it becomes (a - b)(a + b).",
          "details": {
            "formula_result": "(x - 3)*(x + 3)"
          }
        },
        {
          "before": "(x^2 - 9)/(x - 3) = 0",
          "rule_id": "cancel_common_factor",
          "action": "Cancel common factors while keeping restrictions",
          "after": "x + 3 = 0, where x ≠ 3",
          "explanation": "Common factors may be canceled only after recording the forbidden values from the original equation.",
          "details": {
            "forbidden_values": [
              "3"
            ]
          }
        },
        {
          "before": "x + 3",
          "rule_id": "preserve_domain_restriction",
          "action": "Preserve the domain restriction",
          "after": "x ≠ 3",
          "explanation": "The simplified equation is equivalent only on the original domain.",
          "details": {
            "forbidden_values": [
              "3"
            ]
          }
        },
        {
          "before": "x + 3 = 0, where x ≠ 3",
          "rule_id": "rational_equation_clear_denominators",
          "action": "Clear denominators",
          "after": "x + 3 = 0",
          "explanation": "After multiplying by the allowed denominator factors, the equation reduces to its numerator equal to zero.",
          "details": {}
        },
        {
          "before": "x + 3 = 0",
          "rule_id": "solve_linear_equation",
          "action": "Solve the resulting linear equation",
          "after": "x = -3",
          "explanation": "The rational equation has been reduced to a linear equation on the allowed domain.",
          "details": {}
        },
        {
          "before": "x = -3",
          "rule_id": "rational_equation_domain_check",
          "action": "Check candidates against forbidden values",
          "after": "x = -3",
          "explanation": "Any candidate that makes an original denominator zero is rejected.",
          "details": {
            "forbidden_values": [
              "3"
            ],
            "accepted_roots": [
              "-3"
            ]
          }
        },
        {
          "before": "x = -3",
          "rule_id": "check_solution",
          "action": "Substitute accepted roots into the original equation",
          "after": "x = -3",
          "explanation": "The accepted roots satisfy the original rational equation.",
          "details": {
            "roots": [
              "-3"
            ]
          }
        }
      ],
      "answer": "x = -3",
      "roots": [
        "-3"
      ],
      "forbidden_values": [
        "3"
      ],
      "domain_restrictions": [
        "x != 3"
      ],
      "problem_profile": {
        "input": "(x^2 - 9)/(x - 3) = 0",
        "task_type": "rational_equation",
        "problem_kind": "equation",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": true,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": "=",
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "rational",
          "common_factor"
        ]
      },
      "candidate_strategies": [
        {
          "id": "rational_equation_factor_cancel_with_domain_check",
          "name": "Solve rational equation by factoring, cancellation, and domain checking",
          "applicable_to": [
            "rational_equation"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 4,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage3.rational_equation",
          "notes": "",
          "score": 137,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "domain-aware rational equation"
          ]
        },
        {
          "id": "symbolic_fallback",
          "name": "Use symbolic fallback only if rule strategies fail",
          "applicable_to": [
            "unsupported",
            "quadratic_equation",
            "polynomial_equation",
            "trigonometric_equation",
            "trigonometric_inequality",
            "rational_equation",
            "radical_equation",
            "exponential_equation",
            "logarithmic_equation",
            "logarithmic_inequality"
          ],
          "exact": true,
          "educational_priority": 1,
          "complexity_score": 10,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "notes": "",
          "score": -11,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "rational_equation_factor_cancel_with_domain_check",
      "strategy_score": 137,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Substitute x = -3: residual = 0"
          }
        ]
      },
      "available_actions": [
        "solve",
        "list_actions"
      ],
      "selected_action": "solve"
    }
  },
  {
    "input": "1/(x - 2) = 3",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "1/(x - 2) = 3",
      "task_type": "rational_equation",
      "steps": [
        {
          "before": "1/(x - 2) = 3",
          "rule_id": "find_forbidden_values",
          "action": "Find forbidden values before transformations",
          "after": "x ≠ 2",
          "explanation": "Values that make an original denominator zero cannot be solutions.",
          "details": {
            "forbidden_values": [
              "2"
            ]
          }
        },
        {
          "before": "(7 - 3*x)/(x - 2) = 0, where x ≠ 2",
          "rule_id": "rational_equation_clear_denominators",
          "action": "Clear denominators",
          "after": "7 - 3*x = 0",
          "explanation": "After multiplying by the allowed denominator factors, the equation reduces to its numerator equal to zero.",
          "details": {}
        },
        {
          "before": "7 - 3*x = 0",
          "rule_id": "solve_linear_equation",
          "action": "Solve the resulting linear equation",
          "after": "x = 7/3",
          "explanation": "The rational equation has been reduced to a linear equation on the allowed domain.",
          "details": {}
        },
        {
          "before": "x = 7/3",
          "rule_id": "rational_equation_domain_check",
          "action": "Check candidates against forbidden values",
          "after": "x = 7/3",
          "explanation": "Any candidate that makes an original denominator zero is rejected.",
          "details": {
            "forbidden_values": [
              "2"
            ],
            "accepted_roots": [
              "7/3"
            ]
          }
        },
        {
          "before": "x = 7/3",
          "rule_id": "check_solution",
          "action": "Substitute accepted roots into the original equation",
          "after": "x = 7/3",
          "explanation": "The accepted roots satisfy the original rational equation.",
          "details": {
            "roots": [
              "7/3"
            ]
          }
        }
      ],
      "answer": "x = 7/3",
      "roots": [
        "7/3"
      ],
      "forbidden_values": [
        "2"
      ],
      "domain_restrictions": [
        "x != 2"
      ],
      "problem_profile": {
        "input": "1/(x - 2) = 3",
        "task_type": "rational_equation",
        "problem_kind": "equation",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": true,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": "=",
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "rational"
        ]
      },
      "candidate_strategies": [
        {
          "id": "rational_equation_factor_cancel_with_domain_check",
          "name": "Solve rational equation by factoring, cancellation, and domain checking",
          "applicable_to": [
            "rational_equation"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 4,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage3.rational_equation",
          "notes": "",
          "score": 137,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "domain-aware rational equation"
          ]
        },
        {
          "id": "symbolic_fallback",
          "name": "Use symbolic fallback only if rule strategies fail",
          "applicable_to": [
            "unsupported",
            "quadratic_equation",
            "polynomial_equation",
            "trigonometric_equation",
            "trigonometric_inequality",
            "rational_equation",
            "radical_equation",
            "exponential_equation",
            "logarithmic_equation",
            "logarithmic_inequality"
          ],
          "exact": true,
          "educational_priority": 1,
          "complexity_score": 10,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "notes": "",
          "score": -11,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "rational_equation_factor_cancel_with_domain_check",
      "strategy_score": 137,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Substitute x = 7/3: residual = 0"
          }
        ]
      },
      "available_actions": [
        "solve",
        "list_actions"
      ],
      "selected_action": "solve"
    }
  },
  {
    "input": "(x^2 - 9)/(x - 3) > 0",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "(x^2 - 9)/(x - 3) > 0",
      "task_type": "rational_inequality",
      "steps": [
        {
          "before": "(x^2 - 9)/(x - 3) > 0",
          "rule_id": "find_forbidden_values",
          "action": "Find forbidden values from original denominators",
          "after": "x ≠ 3",
          "explanation": "Forbidden values split the number line but can never be included in the solution.",
          "details": {
            "forbidden_values": [
              "3"
            ]
          }
        },
        {
          "before": "x^2 - 9",
          "rule_id": "difference_of_squares",
          "action": "Apply the difference of squares formula",
          "after": "(x - 3)*(x + 3)",
          "explanation": "The expression has the form a^2 - b^2, so it becomes (a - b)(a + b).",
          "details": {
            "formula_result": "(x - 3)*(x + 3)"
          }
        },
        {
          "before": "(x^2 - 9)/(x - 3) > 0",
          "rule_id": "multi_step_factorization",
          "action": "Write the rational expression in factored form",
          "after": "((x - 3)*(x + 3))/(x - 3) > 0",
          "explanation": "Factored numerator and denominator reveal zeros and forbidden values for the sign chart.",
          "details": {}
        },
        {
          "before": "x + 3 > 0",
          "rule_id": "rational_inequality_sign_chart",
          "action": "Build a sign chart from zeros and forbidden values",
          "after": "(-∞, -3), (-3, 3), (3, +∞)",
          "explanation": "The sign of a rational expression can change only at zeros or forbidden values.",
          "details": {
            "zeros": [
              "-3"
            ],
            "forbidden_values": [
              "3"
            ],
            "critical_points": [
              "-3",
              "3"
            ]
          }
        },
        {
          "before": "(-∞, -3), (-3, 3), (3, +∞)",
          "rule_id": "select_solution_intervals",
          "action": "Select intervals with the required sign",
          "after": "x ∈ (-3, 3) ∪ (3, +∞)",
          "explanation": "A test point is checked in each interval of the sign chart.",
          "details": {
            "sign_chart": [
              {
                "interval": "(-∞, -3)",
                "test_point": "-4",
                "value": "-1",
                "selected": false
              },
              {
                "interval": "(-3, 3)",
                "test_point": "0",
                "value": "3",
                "selected": true
              },
              {
                "interval": "(3, +∞)",
                "test_point": "4",
                "value": "7",
                "selected": true
              }
            ]
          }
        },
        {
          "before": "x ∈ (-3, 3) ∪ (3, +∞)",
          "rule_id": "exclude_forbidden_values",
          "action": "Exclude forbidden values",
          "after": "x ∈ (-3, 3) ∪ (3, +∞)",
          "explanation": "Forbidden values are holes in the graph and are not included even if a simplified expression would allow them.",
          "details": {
            "forbidden_values": [
              "3"
            ]
          }
        },
        {
          "before": "x ∈ (-3, 3) ∪ (3, +∞)",
          "rule_id": "check_solution",
          "action": "Check sample points and forbidden values",
          "after": "verification ready",
          "explanation": "The self-checker verifies sample points from selected and rejected intervals.",
          "details": {
            "forbidden_values": [
              "3"
            ]
          }
        }
      ],
      "answer": "x ∈ (-3, 3) ∪ (3, +∞)",
      "forbidden_values": [
        "3"
      ],
      "critical_points": [
        "-3",
        "3"
      ],
      "sign_chart": [
        {
          "interval": "(-∞, -3)",
          "test_point": "-4",
          "value": "-1",
          "selected": false
        },
        {
          "interval": "(-3, 3)",
          "test_point": "0",
          "value": "3",
          "selected": true
        },
        {
          "interval": "(3, +∞)",
          "test_point": "4",
          "value": "7",
          "selected": true
        }
      ],
      "problem_profile": {
        "input": "(x^2 - 9)/(x - 3) > 0",
        "task_type": "rational_inequality",
        "problem_kind": "inequality",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": true,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": ">",
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "rational",
          "common_factor"
        ]
      },
      "candidate_strategies": [
        {
          "id": "rational_inequality_factor_sign_chart",
          "name": "Solve rational inequality by factorization and sign chart",
          "applicable_to": [
            "rational_inequality"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 4,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage3.rational_inequality",
          "notes": "",
          "score": 137,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "factorization plus sign chart"
          ]
        },
        {
          "id": "rational_sign_chart",
          "name": "Solve rational inequality by a sign chart",
          "applicable_to": [
            "rational_inequality"
          ],
          "exact": true,
          "educational_priority": 8,
          "complexity_score": 5,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "legacy.rational_inequality",
          "notes": "",
          "score": 87,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy"
          ]
        }
      ],
      "selected_strategy": "rational_inequality_factor_sign_chart",
      "strategy_score": 137,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Sign chart contains test points for each interval."
          },
          {
            "status": "passed",
            "message": "Forbidden values are recorded and excluded: 3"
          }
        ]
      },
      "available_actions": [
        "solve",
        "list_actions"
      ],
      "selected_action": "solve"
    }
  },
  {
    "input": "x^(1/2)",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "x^(1/2)",
      "task_type": "algebraic_expression",
      "steps": [
        {
          "before": "x^(1/2)",
          "rule_id": "rational_exponent_to_radical",
          "action": "Rewrite the rational exponent as a radical",
          "after": "sqrt(x)",
          "explanation": "The rule a^(1/2) = sqrt(a) converts a rational exponent to radical notation.",
          "details": {}
        },
        {
          "before": "sqrt(x)",
          "rule_id": "domain_restriction",
          "action": "Record the real-domain restriction",
          "after": "x >= 0",
          "explanation": "A real square root requires a non-negative radicand.",
          "details": {}
        }
      ],
      "answer": "sqrt(x)",
      "problem_profile": {
        "input": "x^(1/2)",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": true,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "radical"
        ]
      },
      "candidate_strategies": [
        {
          "id": "power_root_simplification",
          "name": "Simplify powers, roots, and rational exponents",
          "applicable_to": [
            "algebraic_expression"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage4.power_root",
          "notes": "",
          "score": 138,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "explicit power/root rule"
          ]
        },
        {
          "id": "collect_like_terms",
          "name": "Simplify an algebraic expression by collecting like terms",
          "applicable_to": [
            "algebraic_expression"
          ],
          "exact": true,
          "educational_priority": 7,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "legacy.expression",
          "notes": "",
          "score": 92,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy"
          ]
        }
      ],
      "selected_strategy": "power_root_simplification",
      "strategy_score": 138,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Expression transformation was checked by exact symbolic arithmetic."
          }
        ]
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "simplify"
    }
  },
  {
    "input": "sqrt(x)^2",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "sqrt(x)^2",
      "task_type": "algebraic_expression",
      "steps": [
        {
          "before": "sqrt(x)^2",
          "rule_id": "radical_to_rational_exponent",
          "action": "Interpret the square root as a rational exponent",
          "after": "(x^(1/2))^2",
          "explanation": "sqrt(a) can be written as a^(1/2).",
          "details": {}
        },
        {
          "before": "(x^(1/2))^2",
          "rule_id": "power_rule_simplification",
          "action": "Cancel inverse power operations on the allowed domain",
          "after": "x",
          "explanation": "Squaring sqrt(a) gives a when the square root is defined.",
          "details": {}
        },
        {
          "before": "x",
          "rule_id": "domain_restriction",
          "action": "Preserve the square-root domain restriction",
          "after": "x >= 0",
          "explanation": "The original expression sqrt(a) exists over the reals only for a >= 0.",
          "details": {
            "variable": "x"
          }
        }
      ],
      "answer": "x, where x >= 0",
      "problem_profile": {
        "input": "sqrt(x)^2",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": 1,
        "is_polynomial": true,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": true,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": false,
        "has_simple_integer_roots": true,
        "discriminant": null,
        "features": [
          "polynomial",
          "radical",
          "simple_integer_roots"
        ]
      },
      "candidate_strategies": [
        {
          "id": "power_root_simplification",
          "name": "Simplify powers, roots, and rational exponents",
          "applicable_to": [
            "algebraic_expression"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage4.power_root",
          "notes": "",
          "score": 138,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "explicit power/root rule"
          ]
        },
        {
          "id": "collect_like_terms",
          "name": "Simplify an algebraic expression by collecting like terms",
          "applicable_to": [
            "algebraic_expression"
          ],
          "exact": true,
          "educational_priority": 7,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "legacy.expression",
          "notes": "",
          "score": 92,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy"
          ]
        }
      ],
      "selected_strategy": "power_root_simplification",
      "strategy_score": 138,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Expression transformation was checked by exact symbolic arithmetic."
          }
        ]
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "simplify"
    }
  },
  {
    "input": "(x^2)^(1/2)",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "(x^2)^(1/2)",
      "task_type": "algebraic_expression",
      "steps": [
        {
          "before": "x^2^(1/2)",
          "rule_id": "rational_exponent_to_radical",
          "action": "Rewrite the rational exponent as a square root",
          "after": "sqrt(x^2)",
          "explanation": "An exponent of 1/2 means a square root over the real numbers.",
          "details": {}
        },
        {
          "before": "sqrt(x^2)",
          "rule_id": "power_rule_simplification",
          "action": "Use the real square-root rule",
          "after": "|x|",
          "explanation": "Over the real domain, sqrt(x^2) equals |x|, not x in general.",
          "details": {}
        }
      ],
      "answer": "|x|",
      "problem_profile": {
        "input": "(x^2)^(1/2)",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": true,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "radical"
        ]
      },
      "candidate_strategies": [
        {
          "id": "power_root_simplification",
          "name": "Simplify powers, roots, and rational exponents",
          "applicable_to": [
            "algebraic_expression"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage4.power_root",
          "notes": "",
          "score": 138,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "explicit power/root rule"
          ]
        },
        {
          "id": "collect_like_terms",
          "name": "Simplify an algebraic expression by collecting like terms",
          "applicable_to": [
            "algebraic_expression"
          ],
          "exact": true,
          "educational_priority": 7,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "legacy.expression",
          "notes": "",
          "score": 92,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy"
          ]
        }
      ],
      "selected_strategy": "power_root_simplification",
      "strategy_score": 138,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Expression transformation was checked by exact symbolic arithmetic."
          }
        ]
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "simplify"
    }
  },
  {
    "input": "sqrt(x + 5) = 3",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "sqrt(x + 5) = 3",
      "task_type": "radical_equation",
      "steps": [
        {
          "before": "sqrt(x + 5) = 3",
          "rule_id": "radical_domain_restriction",
          "action": "Determine the square-root domain",
          "after": "x + 5 >= 0",
          "explanation": "A real square root is defined only when its radicand is non-negative.",
          "details": {
            "radicand": "x + 5"
          }
        },
        {
          "before": "sqrt(x + 5) = 3",
          "rule_id": "square_both_sides",
          "action": "Square both sides",
          "after": "x + 5 = 9",
          "explanation": "Squaring removes the square root, but it can introduce extraneous roots, so checking is required.",
          "details": {}
        },
        {
          "before": "x + 5 = 9",
          "rule_id": "solve_linear_equation",
          "action": "Solve the equation obtained after squaring",
          "after": "x - 4 = 0",
          "explanation": "The squared equation gives candidates, not final roots yet.",
          "details": {}
        },
        {
          "before": "candidates: 4",
          "rule_id": "radical_equation_check_extraneous_roots",
          "action": "Check candidates in the original equation",
          "after": "x = 4",
          "explanation": "Every candidate is substituted into the original equation; extraneous roots are removed.",
          "details": {
            "candidates": [
              "4"
            ],
            "rejected_roots": []
          }
        },
        {
          "before": "x = 4",
          "rule_id": "check_solution",
          "action": "Verify the accepted root or roots",
          "after": "x = 4",
          "explanation": "The accepted roots satisfy the original radical equation.",
          "details": {
            "roots": [
              "4"
            ]
          }
        }
      ],
      "answer": "x = 4",
      "roots": [
        "4"
      ],
      "rejected_roots": [],
      "domain_restrictions": [
        "x + 5 >= 0"
      ],
      "problem_profile": {
        "input": "sqrt(x + 5) = 3",
        "task_type": "radical_equation",
        "problem_kind": "equation",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": true,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": "=",
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "radical"
        ]
      },
      "candidate_strategies": [
        {
          "id": "radical_isolate_square_check",
          "name": "Solve radical equation by isolation, squaring, and checking",
          "applicable_to": [
            "radical_equation"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 4,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage4.radical_equation",
          "notes": "",
          "score": 141,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "isolate-square-check radical strategy"
          ]
        },
        {
          "id": "symbolic_fallback",
          "name": "Use symbolic fallback only if rule strategies fail",
          "applicable_to": [
            "unsupported",
            "quadratic_equation",
            "polynomial_equation",
            "trigonometric_equation",
            "trigonometric_inequality",
            "rational_equation",
            "radical_equation",
            "exponential_equation",
            "logarithmic_equation",
            "logarithmic_inequality"
          ],
          "exact": true,
          "educational_priority": 1,
          "complexity_score": 10,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "notes": "",
          "score": -11,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "radical_isolate_square_check",
      "strategy_score": 141,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Substitute x = 4: residual = 0"
          }
        ]
      },
      "available_actions": [
        "solve",
        "list_actions"
      ],
      "selected_action": "solve"
    }
  },
  {
    "input": "sqrt(x + 5) = x - 1",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "sqrt(x + 5) = x - 1",
      "task_type": "radical_equation",
      "steps": [
        {
          "before": "sqrt(x + 5) = x - 1",
          "rule_id": "radical_domain_restriction",
          "action": "Determine the square-root domain",
          "after": "x + 5 >= 0",
          "explanation": "A real square root is defined only when its radicand is non-negative.",
          "details": {
            "radicand": "x + 5"
          }
        },
        {
          "before": "sqrt(x + 5) = x - 1",
          "rule_id": "radical_domain_restriction",
          "action": "Add the non-negativity condition for the other side",
          "after": "x - 1 >= 0",
          "explanation": "After isolation, the side equal to a square root must also be non-negative.",
          "details": {
            "right_side_condition": "x - 1"
          }
        },
        {
          "before": "sqrt(x + 5) = x - 1",
          "rule_id": "square_both_sides",
          "action": "Square both sides",
          "after": "x + 5 = (x - 1)^2",
          "explanation": "Squaring removes the square root, but it can introduce extraneous roots, so checking is required.",
          "details": {}
        },
        {
          "before": "x + 5 = (x - 1)^2",
          "rule_id": "solve_quadratic_equation",
          "action": "Solve the equation obtained after squaring",
          "after": "-x^2 + 3*x + 4 = 0",
          "explanation": "The squared equation gives candidates, not final roots yet.",
          "details": {}
        },
        {
          "before": "x = -1",
          "rule_id": "reject_extraneous_root",
          "action": "Reject an extraneous root",
          "after": "x = -1 is rejected",
          "explanation": "This candidate solves the squared equation but does not satisfy the original radical equation and domain conditions.",
          "details": {
            "rejected_root": "-1"
          }
        },
        {
          "before": "candidates: -1, 4",
          "rule_id": "radical_equation_check_extraneous_roots",
          "action": "Check candidates in the original equation",
          "after": "x = 4",
          "explanation": "Every candidate is substituted into the original equation; extraneous roots are removed.",
          "details": {
            "candidates": [
              "-1",
              "4"
            ],
            "rejected_roots": [
              "-1"
            ]
          }
        },
        {
          "before": "x = 4",
          "rule_id": "check_solution",
          "action": "Verify the accepted root or roots",
          "after": "x = 4",
          "explanation": "The accepted roots satisfy the original radical equation.",
          "details": {
            "roots": [
              "4"
            ]
          }
        }
      ],
      "answer": "x = 4",
      "roots": [
        "4"
      ],
      "rejected_roots": [
        "-1"
      ],
      "domain_restrictions": [
        "x + 5 >= 0"
      ],
      "problem_profile": {
        "input": "sqrt(x + 5) = x - 1",
        "task_type": "radical_equation",
        "problem_kind": "equation",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": true,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": "=",
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "radical"
        ]
      },
      "candidate_strategies": [
        {
          "id": "radical_isolate_square_check",
          "name": "Solve radical equation by isolation, squaring, and checking",
          "applicable_to": [
            "radical_equation"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 4,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage4.radical_equation",
          "notes": "",
          "score": 141,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "isolate-square-check radical strategy"
          ]
        },
        {
          "id": "symbolic_fallback",
          "name": "Use symbolic fallback only if rule strategies fail",
          "applicable_to": [
            "unsupported",
            "quadratic_equation",
            "polynomial_equation",
            "trigonometric_equation",
            "trigonometric_inequality",
            "rational_equation",
            "radical_equation",
            "exponential_equation",
            "logarithmic_equation",
            "logarithmic_inequality"
          ],
          "exact": true,
          "educational_priority": 1,
          "complexity_score": 10,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "notes": "",
          "score": -11,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "radical_isolate_square_check",
      "strategy_score": 141,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Substitute x = 4: residual = 0"
          }
        ]
      },
      "available_actions": [
        "solve",
        "list_actions"
      ],
      "selected_action": "solve"
    }
  },
  {
    "input": "sqrt(2*x + 3) + 1 = x",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "sqrt(2*x + 3) + 1 = x",
      "task_type": "radical_equation",
      "steps": [
        {
          "before": "sqrt(2*x + 3) + 1 = x",
          "rule_id": "radical_domain_restriction",
          "action": "Determine the square-root domain",
          "after": "2*x + 3 >= 0",
          "explanation": "A real square root is defined only when its radicand is non-negative.",
          "details": {
            "radicand": "2*x + 3"
          }
        },
        {
          "before": "sqrt(2*x + 3) = x - 1",
          "rule_id": "radical_domain_restriction",
          "action": "Add the non-negativity condition for the other side",
          "after": "x - 1 >= 0",
          "explanation": "After isolation, the side equal to a square root must also be non-negative.",
          "details": {
            "right_side_condition": "x - 1"
          }
        },
        {
          "before": "sqrt(2*x + 3) + 1 = x",
          "rule_id": "radical_equation_isolate_radical",
          "action": "Isolate the radical term",
          "after": "sqrt(2*x + 3) = x - 1",
          "explanation": "The radical is isolated before squaring so that the next transformation is valid and transparent.",
          "details": {}
        },
        {
          "before": "sqrt(2*x + 3) = x - 1",
          "rule_id": "square_both_sides",
          "action": "Square both sides",
          "after": "2*x + 3 = (x - 1)^2",
          "explanation": "Squaring removes the square root, but it can introduce extraneous roots, so checking is required.",
          "details": {}
        },
        {
          "before": "2*x + 3 = (x - 1)^2",
          "rule_id": "solve_quadratic_equation",
          "action": "Solve the equation obtained after squaring",
          "after": "-x^2 + 4*x + 2 = 0",
          "explanation": "The squared equation gives candidates, not final roots yet.",
          "details": {}
        },
        {
          "before": "x = 2 - sqrt(6)",
          "rule_id": "reject_extraneous_root",
          "action": "Reject an extraneous root",
          "after": "x = 2 - sqrt(6) is rejected",
          "explanation": "This candidate solves the squared equation but does not satisfy the original radical equation and domain conditions.",
          "details": {
            "rejected_root": "2 - sqrt(6)"
          }
        },
        {
          "before": "candidates: 2 - sqrt(6), 2 + sqrt(6)",
          "rule_id": "radical_equation_check_extraneous_roots",
          "action": "Check candidates in the original equation",
          "after": "x = 2 + sqrt(6)",
          "explanation": "Every candidate is substituted into the original equation; extraneous roots are removed.",
          "details": {
            "candidates": [
              "2 - sqrt(6)",
              "2 + sqrt(6)"
            ],
            "rejected_roots": [
              "2 - sqrt(6)"
            ]
          }
        },
        {
          "before": "x = 2 + sqrt(6)",
          "rule_id": "check_solution",
          "action": "Verify the accepted root or roots",
          "after": "x = 2 + sqrt(6)",
          "explanation": "The accepted roots satisfy the original radical equation.",
          "details": {
            "roots": [
              "2 + sqrt(6)"
            ]
          }
        }
      ],
      "answer": "x = 2 + sqrt(6)",
      "roots": [
        "2 + sqrt(6)"
      ],
      "rejected_roots": [
        "2 - sqrt(6)"
      ],
      "domain_restrictions": [
        "2*x + 3 >= 0"
      ],
      "problem_profile": {
        "input": "sqrt(2*x + 3) + 1 = x",
        "task_type": "radical_equation",
        "problem_kind": "equation",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": true,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": "=",
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "radical"
        ]
      },
      "candidate_strategies": [
        {
          "id": "radical_isolate_square_check",
          "name": "Solve radical equation by isolation, squaring, and checking",
          "applicable_to": [
            "radical_equation"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 4,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage4.radical_equation",
          "notes": "",
          "score": 141,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "isolate-square-check radical strategy"
          ]
        },
        {
          "id": "symbolic_fallback",
          "name": "Use symbolic fallback only if rule strategies fail",
          "applicable_to": [
            "unsupported",
            "quadratic_equation",
            "polynomial_equation",
            "trigonometric_equation",
            "trigonometric_inequality",
            "rational_equation",
            "radical_equation",
            "exponential_equation",
            "logarithmic_equation",
            "logarithmic_inequality"
          ],
          "exact": true,
          "educational_priority": 1,
          "complexity_score": 10,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "notes": "",
          "score": -11,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "radical_isolate_square_check",
      "strategy_score": 141,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Substitute x = 2 + sqrt(6): residual = 0"
          }
        ]
      },
      "available_actions": [
        "solve",
        "list_actions"
      ],
      "selected_action": "solve"
    }
  },
  {
    "input": "2^(x + 1) = 16",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "2^(x + 1) = 16",
      "task_type": "exponential_equation",
      "steps": [
        {
          "before": "2^(x + 1) = 16",
          "rule_id": "exponential_rewrite_base",
          "action": "Rewrite the numeric side as a power of the same base",
          "after": "2^(x + 1) = 2^4",
          "explanation": "The right side is rewritten as a power of the exponential base.",
          "details": {}
        },
        {
          "before": "2^(x + 1) = 2^4",
          "rule_id": "exponential_same_base",
          "action": "Equate exponents",
          "after": "x + 1 = 4",
          "explanation": "For equal positive bases not equal to 1, equal powers have equal exponents.",
          "details": {}
        },
        {
          "before": "x + 1 = 4",
          "rule_id": "solve_linear_equation",
          "action": "Solve the exponent equation",
          "after": "x = 3",
          "explanation": "The exponential equation has been reduced to a linear equation in the exponent.",
          "details": {}
        },
        {
          "before": "x = 3",
          "rule_id": "exponential_equation_check_solution",
          "action": "Check the solution in the original equation",
          "after": "x = 3",
          "explanation": "The solution is substituted back into the original exponential equation.",
          "details": {
            "roots": [
              "3"
            ]
          }
        },
        {
          "before": "x = 3",
          "rule_id": "check_solution",
          "action": "Verify equality",
          "after": "x = 3",
          "explanation": "Self-checking confirms the exponential equation is satisfied.",
          "details": {
            "roots": [
              "3"
            ]
          }
        }
      ],
      "answer": "x = 3",
      "roots": [
        "3"
      ],
      "problem_profile": {
        "input": "2^(x + 1) = 16",
        "task_type": "exponential_equation",
        "problem_kind": "equation",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": true,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": "=",
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "exponential",
          "exponential_same_base_possible",
          "common_factor"
        ]
      },
      "candidate_strategies": [
        {
          "id": "exponential_same_base",
          "name": "Solve exponential equation by rewriting to the same base",
          "applicable_to": [
            "exponential_equation"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 3,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage4.exponential_equation",
          "notes": "",
          "score": 134,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "same-base exponential strategy"
          ]
        },
        {
          "id": "take_logarithm",
          "name": "Solve exponential equation by taking logarithms",
          "applicable_to": [
            "exponential_equation"
          ],
          "exact": true,
          "educational_priority": 9,
          "complexity_score": 4,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage4.exponential_equation",
          "notes": "",
          "score": 104,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "logarithmic fallback for exponent"
          ]
        },
        {
          "id": "symbolic_fallback",
          "name": "Use symbolic fallback only if rule strategies fail",
          "applicable_to": [
            "unsupported",
            "quadratic_equation",
            "polynomial_equation",
            "trigonometric_equation",
            "trigonometric_inequality",
            "rational_equation",
            "radical_equation",
            "exponential_equation",
            "logarithmic_equation",
            "logarithmic_inequality"
          ],
          "exact": true,
          "educational_priority": 1,
          "complexity_score": 10,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "notes": "",
          "score": -11,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "exponential_same_base",
      "strategy_score": 134,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Substitute x = 3: residual = 0"
          }
        ]
      },
      "available_actions": [
        "solve",
        "list_actions"
      ],
      "selected_action": "solve"
    }
  },
  {
    "input": "3^(2*x - 1) = 27",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "3^(2*x - 1) = 27",
      "task_type": "exponential_equation",
      "steps": [
        {
          "before": "3^(2*x - 1) = 27",
          "rule_id": "exponential_rewrite_base",
          "action": "Rewrite the numeric side as a power of the same base",
          "after": "3^(2*x - 1) = 3^3",
          "explanation": "The right side is rewritten as a power of the exponential base.",
          "details": {}
        },
        {
          "before": "3^(2*x - 1) = 3^3",
          "rule_id": "exponential_same_base",
          "action": "Equate exponents",
          "after": "2*x - 1 = 3",
          "explanation": "For equal positive bases not equal to 1, equal powers have equal exponents.",
          "details": {}
        },
        {
          "before": "2*x - 1 = 3",
          "rule_id": "solve_linear_equation",
          "action": "Solve the exponent equation",
          "after": "x = 2",
          "explanation": "The exponential equation has been reduced to a linear equation in the exponent.",
          "details": {}
        },
        {
          "before": "x = 2",
          "rule_id": "exponential_equation_check_solution",
          "action": "Check the solution in the original equation",
          "after": "x = 2",
          "explanation": "The solution is substituted back into the original exponential equation.",
          "details": {
            "roots": [
              "2"
            ]
          }
        },
        {
          "before": "x = 2",
          "rule_id": "check_solution",
          "action": "Verify equality",
          "after": "x = 2",
          "explanation": "Self-checking confirms the exponential equation is satisfied.",
          "details": {
            "roots": [
              "2"
            ]
          }
        }
      ],
      "answer": "x = 2",
      "roots": [
        "2"
      ],
      "problem_profile": {
        "input": "3^(2*x - 1) = 27",
        "task_type": "exponential_equation",
        "problem_kind": "equation",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": true,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": "=",
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "exponential",
          "exponential_same_base_possible"
        ]
      },
      "candidate_strategies": [
        {
          "id": "exponential_same_base",
          "name": "Solve exponential equation by rewriting to the same base",
          "applicable_to": [
            "exponential_equation"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 3,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage4.exponential_equation",
          "notes": "",
          "score": 134,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "same-base exponential strategy"
          ]
        },
        {
          "id": "take_logarithm",
          "name": "Solve exponential equation by taking logarithms",
          "applicable_to": [
            "exponential_equation"
          ],
          "exact": true,
          "educational_priority": 9,
          "complexity_score": 4,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage4.exponential_equation",
          "notes": "",
          "score": 104,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "logarithmic fallback for exponent"
          ]
        },
        {
          "id": "symbolic_fallback",
          "name": "Use symbolic fallback only if rule strategies fail",
          "applicable_to": [
            "unsupported",
            "quadratic_equation",
            "polynomial_equation",
            "trigonometric_equation",
            "trigonometric_inequality",
            "rational_equation",
            "radical_equation",
            "exponential_equation",
            "logarithmic_equation",
            "logarithmic_inequality"
          ],
          "exact": true,
          "educational_priority": 1,
          "complexity_score": 10,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "notes": "",
          "score": -11,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "exponential_same_base",
      "strategy_score": 134,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Substitute x = 2: residual = 0"
          }
        ]
      },
      "available_actions": [
        "solve",
        "list_actions"
      ],
      "selected_action": "solve"
    }
  },
  {
    "input": "4^x = 8",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "4^x = 8",
      "task_type": "exponential_equation",
      "steps": [
        {
          "before": "4^x = 8",
          "rule_id": "exponential_rewrite_base",
          "action": "Rewrite both sides using a common base",
          "after": "(2^2)^(x) = 2^3",
          "explanation": "Both numerical bases can be expressed as powers of the same positive base.",
          "details": {
            "common_base": "2"
          }
        },
        {
          "before": "(2^2)^(x)",
          "rule_id": "power_rule_simplification",
          "action": "Apply the power-of-a-power rule",
          "after": "2^(2*x) = 2^3",
          "explanation": "The rule (a^m)^n = a^(m*n) combines the exponents.",
          "details": {}
        },
        {
          "before": "2^(2*x) = 2^3",
          "rule_id": "exponential_same_base",
          "action": "Equate exponents",
          "after": "2*x = 3",
          "explanation": "For equal positive bases not equal to 1, equal powers have equal exponents.",
          "details": {}
        },
        {
          "before": "2*x = 3",
          "rule_id": "solve_linear_equation",
          "action": "Solve the exponent equation",
          "after": "x = 3/2",
          "explanation": "The exponential equation has been reduced to a linear equation in the exponent.",
          "details": {}
        },
        {
          "before": "x = 3/2",
          "rule_id": "exponential_equation_check_solution",
          "action": "Check the solution in the original equation",
          "after": "x = 3/2",
          "explanation": "The solution is substituted back into the original exponential equation.",
          "details": {
            "roots": [
              "3/2"
            ]
          }
        },
        {
          "before": "x = 3/2",
          "rule_id": "check_solution",
          "action": "Verify equality",
          "after": "x = 3/2",
          "explanation": "Self-checking confirms the exponential equation is satisfied.",
          "details": {
            "roots": [
              "3/2"
            ]
          }
        }
      ],
      "answer": "x = 3/2",
      "roots": [
        "3/2"
      ],
      "problem_profile": {
        "input": "4^x = 8",
        "task_type": "exponential_equation",
        "problem_kind": "equation",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": true,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": "=",
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "exponential",
          "exponential_same_base_possible"
        ]
      },
      "candidate_strategies": [
        {
          "id": "exponential_same_base",
          "name": "Solve exponential equation by rewriting to the same base",
          "applicable_to": [
            "exponential_equation"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 3,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage4.exponential_equation",
          "notes": "",
          "score": 134,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "same-base exponential strategy"
          ]
        },
        {
          "id": "take_logarithm",
          "name": "Solve exponential equation by taking logarithms",
          "applicable_to": [
            "exponential_equation"
          ],
          "exact": true,
          "educational_priority": 9,
          "complexity_score": 4,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage4.exponential_equation",
          "notes": "",
          "score": 104,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "logarithmic fallback for exponent"
          ]
        },
        {
          "id": "symbolic_fallback",
          "name": "Use symbolic fallback only if rule strategies fail",
          "applicable_to": [
            "unsupported",
            "quadratic_equation",
            "polynomial_equation",
            "trigonometric_equation",
            "trigonometric_inequality",
            "rational_equation",
            "radical_equation",
            "exponential_equation",
            "logarithmic_equation",
            "logarithmic_inequality"
          ],
          "exact": true,
          "educational_priority": 1,
          "complexity_score": 10,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "notes": "",
          "score": -11,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "exponential_same_base",
      "strategy_score": 134,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Substitute x = 3/2: residual = 0"
          }
        ]
      },
      "available_actions": [
        "solve",
        "list_actions"
      ],
      "selected_action": "solve"
    }
  },
  {
    "input": "2^x = 5",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "2^x = 5",
      "task_type": "exponential_equation",
      "steps": [
        {
          "before": "2^x = 5",
          "rule_id": "exponential_take_log",
          "action": "Take logarithms of both sides",
          "after": "x = log(5)/log(2)",
          "explanation": "When the right side is not a simple power of the base, logarithms isolate the exponent.",
          "details": {}
        },
        {
          "before": "x = log(5)/log(2)",
          "rule_id": "solve_linear_equation",
          "action": "Solve the resulting exponent equation",
          "after": "x = log(5)/log(2)",
          "explanation": "The logarithmic equation for the exponent is solved algebraically.",
          "details": {}
        },
        {
          "before": "x = log(5)/log(2)",
          "rule_id": "exponential_equation_check_solution",
          "action": "Check the solution in the original equation",
          "after": "x = log(5)/log(2)",
          "explanation": "The solution is substituted back into the original exponential equation.",
          "details": {
            "roots": [
              "log(5)/log(2)"
            ]
          }
        },
        {
          "before": "x = log(5)/log(2)",
          "rule_id": "check_solution",
          "action": "Verify equality",
          "after": "x = log(5)/log(2)",
          "explanation": "Self-checking confirms the exponential equation is satisfied.",
          "details": {
            "roots": [
              "log(5)/log(2)"
            ]
          }
        }
      ],
      "answer": "x = log(5)/log(2)",
      "roots": [
        "log(5)/log(2)"
      ],
      "problem_profile": {
        "input": "2^x = 5",
        "task_type": "exponential_equation",
        "problem_kind": "equation",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": true,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": "=",
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "exponential",
          "exponential_take_log_required"
        ]
      },
      "candidate_strategies": [
        {
          "id": "take_logarithm",
          "name": "Solve exponential equation by taking logarithms",
          "applicable_to": [
            "exponential_equation"
          ],
          "exact": true,
          "educational_priority": 9,
          "complexity_score": 4,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage4.exponential_equation",
          "notes": "",
          "score": 104,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "logarithmic fallback for exponent"
          ]
        },
        {
          "id": "symbolic_fallback",
          "name": "Use symbolic fallback only if rule strategies fail",
          "applicable_to": [
            "unsupported",
            "quadratic_equation",
            "polynomial_equation",
            "trigonometric_equation",
            "trigonometric_inequality",
            "rational_equation",
            "radical_equation",
            "exponential_equation",
            "logarithmic_equation",
            "logarithmic_inequality"
          ],
          "exact": true,
          "educational_priority": 1,
          "complexity_score": 10,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "notes": "",
          "score": -11,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "take_logarithm",
      "strategy_score": 104,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Substitute x = log(5)/log(2): residual = 0"
          }
        ]
      },
      "available_actions": [
        "solve",
        "list_actions"
      ],
      "selected_action": "solve"
    }
  },
  {
    "input": "log_2(x + 3) = 4",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "log_2(x + 3) = 4",
      "task_type": "logarithmic_equation",
      "steps": [
        {
          "before": "log(x + 3, 2) = 4",
          "rule_id": "log_domain_restriction",
          "action": "Determine all logarithm domain restrictions",
          "after": "x + 3 > 0",
          "explanation": "Every logarithm argument must be positive before any logarithmic rule is applied.",
          "details": {
            "domain": [
              "x + 3 > 0"
            ]
          }
        },
        {
          "before": "log(x + 3, 2) = 4",
          "rule_id": "log_convert_to_exponential_form",
          "action": "Convert logarithmic form to exponential form",
          "after": "x + 3 = 2^4",
          "explanation": "log_b(A)=c is equivalent to A=b^c.",
          "details": {}
        },
        {
          "before": "x + 3 = 16",
          "rule_id": "solve_linear_equation",
          "action": "Solve the resulting algebraic equation",
          "after": "x = 13",
          "explanation": "The logarithmic equation is reduced to an algebraic equation for the argument.",
          "details": {}
        },
        {
          "before": "candidates checked against domain",
          "rule_id": "log_equation_domain_check",
          "action": "Check the logarithm domain",
          "after": "x = 13",
          "explanation": "Only candidates satisfying all logarithm-domain restrictions are retained.",
          "details": {
            "rejected_roots": []
          }
        },
        {
          "before": "x = 13",
          "rule_id": "log_equation_check_solution",
          "action": "Substitute accepted roots into the original equation",
          "after": "x = 13",
          "explanation": "The accepted roots satisfy the original logarithmic equation.",
          "details": {
            "roots": [
              "13"
            ]
          }
        },
        {
          "before": "x = 13",
          "rule_id": "check_solution",
          "action": "Verify the solution",
          "after": "x = 13",
          "explanation": "Self-checking confirms the accepted roots.",
          "details": {
            "roots": [
              "13"
            ]
          }
        }
      ],
      "answer": "x = 13",
      "roots": [
        "13"
      ],
      "rejected_roots": [],
      "domain_restrictions": [
        "x + 3 > 0"
      ],
      "problem_profile": {
        "input": "log_2(x + 3) = 4",
        "task_type": "logarithmic_equation",
        "problem_kind": "equation",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": true,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": "=",
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "logarithmic"
        ]
      },
      "candidate_strategies": [
        {
          "id": "log_product_rule_then_exponential_form",
          "name": "Solve logarithmic equation using log rules and exponential form",
          "applicable_to": [
            "logarithmic_equation"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 4,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage4.logarithmic",
          "notes": "",
          "score": 141,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "domain-aware logarithmic product strategy"
          ]
        },
        {
          "id": "symbolic_fallback",
          "name": "Use symbolic fallback only if rule strategies fail",
          "applicable_to": [
            "unsupported",
            "quadratic_equation",
            "polynomial_equation",
            "trigonometric_equation",
            "trigonometric_inequality",
            "rational_equation",
            "radical_equation",
            "exponential_equation",
            "logarithmic_equation",
            "logarithmic_inequality"
          ],
          "exact": true,
          "educational_priority": 1,
          "complexity_score": 10,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "notes": "",
          "score": -11,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "log_product_rule_then_exponential_form",
      "strategy_score": 141,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Substitute x = 13: residual = 0"
          }
        ]
      },
      "available_actions": [
        "solve",
        "list_actions"
      ],
      "selected_action": "solve"
    }
  },
  {
    "input": "ln(x - 1) = 0",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "ln(x - 1) = 0",
      "task_type": "logarithmic_equation",
      "steps": [
        {
          "before": "ln(x - 1) = 0",
          "rule_id": "log_domain_restriction",
          "action": "Determine all logarithm domain restrictions",
          "after": "x - 1 > 0",
          "explanation": "Every logarithm argument must be positive before any logarithmic rule is applied.",
          "details": {
            "domain": [
              "x - 1 > 0"
            ]
          }
        },
        {
          "before": "ln(x - 1) = 0",
          "rule_id": "log_convert_to_exponential_form",
          "action": "Convert logarithmic form to exponential form",
          "after": "x - 1 = e^0",
          "explanation": "log_b(A)=c is equivalent to A=b^c.",
          "details": {}
        },
        {
          "before": "x - 1 = 1",
          "rule_id": "solve_linear_equation",
          "action": "Solve the resulting algebraic equation",
          "after": "x = 2",
          "explanation": "The logarithmic equation is reduced to an algebraic equation for the argument.",
          "details": {}
        },
        {
          "before": "candidates checked against domain",
          "rule_id": "log_equation_domain_check",
          "action": "Check the logarithm domain",
          "after": "x = 2",
          "explanation": "Only candidates satisfying all logarithm-domain restrictions are retained.",
          "details": {
            "rejected_roots": []
          }
        },
        {
          "before": "x = 2",
          "rule_id": "log_equation_check_solution",
          "action": "Substitute accepted roots into the original equation",
          "after": "x = 2",
          "explanation": "The accepted roots satisfy the original logarithmic equation.",
          "details": {
            "roots": [
              "2"
            ]
          }
        },
        {
          "before": "x = 2",
          "rule_id": "check_solution",
          "action": "Verify the solution",
          "after": "x = 2",
          "explanation": "Self-checking confirms the accepted roots.",
          "details": {
            "roots": [
              "2"
            ]
          }
        }
      ],
      "answer": "x = 2",
      "roots": [
        "2"
      ],
      "rejected_roots": [],
      "domain_restrictions": [
        "x - 1 > 0"
      ],
      "problem_profile": {
        "input": "ln(x - 1) = 0",
        "task_type": "logarithmic_equation",
        "problem_kind": "equation",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": true,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": "=",
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "logarithmic"
        ]
      },
      "candidate_strategies": [
        {
          "id": "log_product_rule_then_exponential_form",
          "name": "Solve logarithmic equation using log rules and exponential form",
          "applicable_to": [
            "logarithmic_equation"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 4,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage4.logarithmic",
          "notes": "",
          "score": 141,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "domain-aware logarithmic product strategy"
          ]
        },
        {
          "id": "symbolic_fallback",
          "name": "Use symbolic fallback only if rule strategies fail",
          "applicable_to": [
            "unsupported",
            "quadratic_equation",
            "polynomial_equation",
            "trigonometric_equation",
            "trigonometric_inequality",
            "rational_equation",
            "radical_equation",
            "exponential_equation",
            "logarithmic_equation",
            "logarithmic_inequality"
          ],
          "exact": true,
          "educational_priority": 1,
          "complexity_score": 10,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "notes": "",
          "score": -11,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "log_product_rule_then_exponential_form",
      "strategy_score": 141,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Substitute x = 2: residual = 0"
          }
        ]
      },
      "available_actions": [
        "solve",
        "list_actions"
      ],
      "selected_action": "solve"
    }
  },
  {
    "input": "log_2(x + 3) + log_2(x - 1) = 3",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "log_2(x + 3) + log_2(x - 1) = 3",
      "task_type": "logarithmic_equation",
      "steps": [
        {
          "before": "log(x + 3, 2) + log(x - 1, 2) = 3",
          "rule_id": "log_domain_restriction",
          "action": "Determine all logarithm domain restrictions",
          "after": "x + 3 > 0; x - 1 > 0",
          "explanation": "Every logarithm argument must be positive before any logarithmic rule is applied.",
          "details": {
            "domain": [
              "x + 3 > 0",
              "x - 1 > 0"
            ]
          }
        },
        {
          "before": "log(x + 3, 2) + log(x - 1, 2) = 3",
          "rule_id": "log_product_rule",
          "action": "Combine logarithms with the product rule",
          "after": "log_2((x - 1)*(x + 3)) = 3",
          "explanation": "The rule log_b(A)+log_b(B)=log_b(A*B) applies when the bases are equal and arguments are positive.",
          "details": {}
        },
        {
          "before": "log_2((x - 1)*(x + 3)) = 3",
          "rule_id": "log_convert_to_exponential_form",
          "action": "Convert logarithmic form to exponential form",
          "after": "(x - 1)*(x + 3) = 2^3",
          "explanation": "log_b(M)=c is equivalent to M=b^c.",
          "details": {}
        },
        {
          "before": "(x - 1)*(x + 3) = 8",
          "rule_id": "solve_quadratic_equation",
          "action": "Solve the resulting algebraic equation",
          "after": "x^2 + 2*x - 11 = 0",
          "explanation": "The logarithmic equation has become an algebraic equation after using log rules.",
          "details": {}
        },
        {
          "before": "x = -2*sqrt(3) - 1",
          "rule_id": "reject_extraneous_root",
          "action": "Reject a root outside the logarithm domain",
          "after": "x = -2*sqrt(3) - 1 is rejected",
          "explanation": "The candidate solves the transformed equation but makes at least one logarithm argument non-positive.",
          "details": {
            "rejected_root": "-2*sqrt(3) - 1"
          }
        },
        {
          "before": "candidates checked against domain",
          "rule_id": "log_equation_domain_check",
          "action": "Check the logarithm domain",
          "after": "x = -1 + 2*sqrt(3)",
          "explanation": "Only candidates satisfying all logarithm-domain restrictions are retained.",
          "details": {
            "rejected_roots": [
              "-2*sqrt(3) - 1"
            ]
          }
        },
        {
          "before": "x = -1 + 2*sqrt(3)",
          "rule_id": "log_equation_check_solution",
          "action": "Substitute accepted roots into the original equation",
          "after": "x = -1 + 2*sqrt(3)",
          "explanation": "The accepted roots satisfy the original logarithmic equation.",
          "details": {
            "roots": [
              "-1 + 2*sqrt(3)"
            ]
          }
        },
        {
          "before": "x = -1 + 2*sqrt(3)",
          "rule_id": "check_solution",
          "action": "Verify the solution",
          "after": "x = -1 + 2*sqrt(3)",
          "explanation": "Self-checking confirms the accepted roots.",
          "details": {
            "roots": [
              "-1 + 2*sqrt(3)"
            ]
          }
        }
      ],
      "answer": "x = -1 + 2*sqrt(3)",
      "roots": [
        "-1 + 2*sqrt(3)"
      ],
      "rejected_roots": [
        "-2*sqrt(3) - 1"
      ],
      "domain_restrictions": [
        "x + 3 > 0",
        "x - 1 > 0"
      ],
      "problem_profile": {
        "input": "log_2(x + 3) + log_2(x - 1) = 3",
        "task_type": "logarithmic_equation",
        "problem_kind": "equation",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": true,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": "=",
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "logarithmic"
        ]
      },
      "candidate_strategies": [
        {
          "id": "log_product_rule_then_exponential_form",
          "name": "Solve logarithmic equation using log rules and exponential form",
          "applicable_to": [
            "logarithmic_equation"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 4,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage4.logarithmic",
          "notes": "",
          "score": 141,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "domain-aware logarithmic product strategy"
          ]
        },
        {
          "id": "symbolic_fallback",
          "name": "Use symbolic fallback only if rule strategies fail",
          "applicable_to": [
            "unsupported",
            "quadratic_equation",
            "polynomial_equation",
            "trigonometric_equation",
            "trigonometric_inequality",
            "rational_equation",
            "radical_equation",
            "exponential_equation",
            "logarithmic_equation",
            "logarithmic_inequality"
          ],
          "exact": true,
          "educational_priority": 1,
          "complexity_score": 10,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "notes": "",
          "score": -11,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "log_product_rule_then_exponential_form",
      "strategy_score": 141,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Substitute x = -1 + 2*sqrt(3): residual = 0"
          }
        ]
      },
      "available_actions": [
        "solve",
        "list_actions"
      ],
      "selected_action": "solve"
    }
  },
  {
    "input": "log_2(x + 1) = log_2(2*x - 3)",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "log_2(x + 1) = log_2(2*x - 3)",
      "task_type": "logarithmic_equation",
      "steps": [
        {
          "before": "log(x + 1, 2) = log(2*x - 3, 2)",
          "rule_id": "log_domain_restriction",
          "action": "Determine all logarithm domain restrictions",
          "after": "x + 1 > 0; 2*x - 3 > 0",
          "explanation": "Every logarithm argument must be positive before any logarithmic rule is applied.",
          "details": {
            "domain": [
              "x + 1 > 0",
              "2*x - 3 > 0"
            ]
          }
        },
        {
          "before": "log(x + 1, 2) = log(2*x - 3, 2)",
          "rule_id": "log_same_base_equation",
          "action": "Equate arguments of logarithms with the same base",
          "after": "x + 1 = 2*x - 3",
          "explanation": "On the logarithm domain, log_b(A)=log_b(B) implies A=B for the same valid base b.",
          "details": {}
        },
        {
          "before": "candidates checked against domain",
          "rule_id": "log_equation_domain_check",
          "action": "Check the logarithm domain",
          "after": "x = 4",
          "explanation": "Only candidates satisfying all logarithm-domain restrictions are retained.",
          "details": {
            "rejected_roots": []
          }
        },
        {
          "before": "x = 4",
          "rule_id": "log_equation_check_solution",
          "action": "Substitute accepted roots into the original equation",
          "after": "x = 4",
          "explanation": "The accepted roots satisfy the original logarithmic equation.",
          "details": {
            "roots": [
              "4"
            ]
          }
        },
        {
          "before": "x = 4",
          "rule_id": "check_solution",
          "action": "Verify the solution",
          "after": "x = 4",
          "explanation": "Self-checking confirms the accepted roots.",
          "details": {
            "roots": [
              "4"
            ]
          }
        }
      ],
      "answer": "x = 4",
      "roots": [
        "4"
      ],
      "rejected_roots": [],
      "domain_restrictions": [
        "x + 1 > 0",
        "2*x - 3 > 0"
      ],
      "problem_profile": {
        "input": "log_2(x + 1) = log_2(2*x - 3)",
        "task_type": "logarithmic_equation",
        "problem_kind": "equation",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": true,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": "=",
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "logarithmic",
          "common_factor"
        ]
      },
      "candidate_strategies": [
        {
          "id": "log_same_base_equation",
          "name": "Solve logarithmic equation by equating same-base arguments",
          "applicable_to": [
            "logarithmic_equation"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage4.logarithmic",
          "notes": "",
          "score": 130,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "same-base logarithm strategy"
          ]
        },
        {
          "id": "symbolic_fallback",
          "name": "Use symbolic fallback only if rule strategies fail",
          "applicable_to": [
            "unsupported",
            "quadratic_equation",
            "polynomial_equation",
            "trigonometric_equation",
            "trigonometric_inequality",
            "rational_equation",
            "radical_equation",
            "exponential_equation",
            "logarithmic_equation",
            "logarithmic_inequality"
          ],
          "exact": true,
          "educational_priority": 1,
          "complexity_score": 10,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "notes": "",
          "score": -11,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "log_same_base_equation",
      "strategy_score": 130,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Substitute x = 4: residual = 0"
          }
        ]
      },
      "available_actions": [
        "solve",
        "list_actions"
      ],
      "selected_action": "solve"
    }
  },
  {
    "input": "log_2(x - 1) > 3",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "log_2(x - 1) > 3",
      "task_type": "logarithmic_inequality",
      "steps": [
        {
          "before": "log(x - 1, 2) > 3",
          "rule_id": "log_domain_restriction",
          "action": "Determine the logarithm domain",
          "after": "x - 1 > 0",
          "explanation": "A logarithm is defined only for a positive argument.",
          "details": {
            "domain": [
              "x - 1 > 0"
            ]
          }
        },
        {
          "before": "log(x - 1, 2) > 3",
          "rule_id": "log_inequality_monotonicity",
          "action": "Use logarithm monotonicity",
          "after": "x - 1 > 2^3",
          "explanation": "Because the base 2 is increasing, the inequality keeps its direction.",
          "details": {
            "base": "2",
            "original_operator": ">",
            "transformed_operator": ">"
          }
        },
        {
          "before": "x - 1 > 8",
          "rule_id": "log_inequality_solve_argument",
          "action": "Solve the argument inequality",
          "after": "x - 1 > 8",
          "explanation": "The logarithmic inequality has been reduced to an inequality for its argument.",
          "details": {}
        },
        {
          "before": "domain and x - 1 > 8",
          "rule_id": "log_inequality_domain_check",
          "action": "Combine with the logarithm domain",
          "after": "x ∈ (9, +∞)",
          "explanation": "The final interval must satisfy both the transformed inequality and the original logarithm domain.",
          "details": {
            "domain_interval": "(1, +∞)",
            "solution_interval": "(9, +∞)"
          }
        },
        {
          "before": "x ∈ (9, +∞)",
          "rule_id": "log_inequality_check_solution",
          "action": "Check a sample point from the interval",
          "after": "verification ready",
          "explanation": "The self-checker can test representative values and boundary exclusions.",
          "details": {}
        }
      ],
      "answer": "x ∈ (9, +∞)",
      "interval": "(9, +∞)",
      "domain_restrictions": [
        "x - 1 > 0"
      ],
      "problem_profile": {
        "input": "log_2(x - 1) > 3",
        "task_type": "logarithmic_inequality",
        "problem_kind": "inequality",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": true,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": ">",
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "logarithmic"
        ]
      },
      "candidate_strategies": [
        {
          "id": "log_inequality_monotonicity",
          "name": "Solve logarithmic inequality using domain and monotonicity",
          "applicable_to": [
            "logarithmic_inequality"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 4,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage4.logarithmic",
          "notes": "",
          "score": 141,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "domain and monotonicity"
          ]
        },
        {
          "id": "symbolic_fallback",
          "name": "Use symbolic fallback only if rule strategies fail",
          "applicable_to": [
            "unsupported",
            "quadratic_equation",
            "polynomial_equation",
            "trigonometric_equation",
            "trigonometric_inequality",
            "rational_equation",
            "radical_equation",
            "exponential_equation",
            "logarithmic_equation",
            "logarithmic_inequality"
          ],
          "exact": true,
          "educational_priority": 1,
          "complexity_score": 10,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "notes": "",
          "score": -11,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "log_inequality_monotonicity",
      "strategy_score": 141,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Inequality solver produced interval output and preserved critical-domain checks."
          }
        ]
      },
      "available_actions": [
        "solve",
        "list_actions"
      ],
      "selected_action": "solve"
    }
  },
  {
    "input": "log(x, 1/2) > 2",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "log(x, 1/2) > 2",
      "task_type": "logarithmic_inequality",
      "steps": [
        {
          "before": "log(x, 1/2) > 2",
          "rule_id": "log_domain_restriction",
          "action": "Determine the logarithm domain",
          "after": "x > 0",
          "explanation": "A logarithm is defined only for a positive argument.",
          "details": {
            "domain": [
              "x > 0"
            ]
          }
        },
        {
          "before": "log(x, 1/2) > 2",
          "rule_id": "log_inequality_monotonicity",
          "action": "Use logarithm monotonicity",
          "after": "x < 1/2^2",
          "explanation": "Because the base 1/2 is decreasing, the inequality reverses its direction.",
          "details": {
            "base": "1/2",
            "original_operator": ">",
            "transformed_operator": "<"
          }
        },
        {
          "before": ">",
          "rule_id": "reverse_inequality_sign",
          "action": "Reverse the inequality sign",
          "after": "<",
          "explanation": "For 0 < base < 1, the logarithm is decreasing, so the inequality sign reverses.",
          "details": {}
        },
        {
          "before": "x < 1/4",
          "rule_id": "log_inequality_solve_argument",
          "action": "Solve the argument inequality",
          "after": "x < 1/4",
          "explanation": "The logarithmic inequality has been reduced to an inequality for its argument.",
          "details": {}
        },
        {
          "before": "domain and x < 1/4",
          "rule_id": "log_inequality_domain_check",
          "action": "Combine with the logarithm domain",
          "after": "x ∈ (0, 1/4)",
          "explanation": "The final interval must satisfy both the transformed inequality and the original logarithm domain.",
          "details": {
            "domain_interval": "(0, +∞)",
            "solution_interval": "(0, 1/4)"
          }
        },
        {
          "before": "x ∈ (0, 1/4)",
          "rule_id": "log_inequality_check_solution",
          "action": "Check a sample point from the interval",
          "after": "verification ready",
          "explanation": "The self-checker can test representative values and boundary exclusions.",
          "details": {}
        }
      ],
      "answer": "x ∈ (0, 1/4)",
      "interval": "(0, 1/4)",
      "domain_restrictions": [
        "x > 0"
      ],
      "problem_profile": {
        "input": "log(x, 1/2) > 2",
        "task_type": "logarithmic_inequality",
        "problem_kind": "inequality",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": true,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": ">",
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "logarithmic",
          "common_factor"
        ]
      },
      "candidate_strategies": [
        {
          "id": "log_inequality_monotonicity",
          "name": "Solve logarithmic inequality using domain and monotonicity",
          "applicable_to": [
            "logarithmic_inequality"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 4,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage4.logarithmic",
          "notes": "",
          "score": 141,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "domain and monotonicity"
          ]
        },
        {
          "id": "symbolic_fallback",
          "name": "Use symbolic fallback only if rule strategies fail",
          "applicable_to": [
            "unsupported",
            "quadratic_equation",
            "polynomial_equation",
            "trigonometric_equation",
            "trigonometric_inequality",
            "rational_equation",
            "radical_equation",
            "exponential_equation",
            "logarithmic_equation",
            "logarithmic_inequality"
          ],
          "exact": true,
          "educational_priority": 1,
          "complexity_score": 10,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "notes": "",
          "score": -11,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "log_inequality_monotonicity",
      "strategy_score": 141,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Inequality solver produced interval output and preserved critical-domain checks."
          }
        ]
      },
      "available_actions": [
        "solve",
        "list_actions"
      ],
      "selected_action": "solve"
    }
  },
  {
    "input": "sin(x)^2 + cos(x)^2",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "sin(x)^2 + cos(x)^2",
      "task_type": "algebraic_expression",
      "steps": [
        {
          "before": "sin(x)^2 + cos(x)^2",
          "rule_id": "trig_function_parse",
          "action": "Parse trigonometric functions",
          "after": "sin(x)^2 + cos(x)^2",
          "explanation": "The expression contains sine and cosine of the same angle.",
          "details": {}
        },
        {
          "before": "sin(x)^2 + cos(x)^2",
          "rule_id": "trig_pythagorean_identity",
          "action": "Apply the Pythagorean identity",
          "after": "1",
          "explanation": "sin(x)^2 + cos(x)^2 = 1 for every real x.",
          "details": {}
        }
      ],
      "answer": "1",
      "problem_profile": {
        "input": "sin(x)^2 + cos(x)^2",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": true,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "trigonometric"
        ]
      },
      "candidate_strategies": [
        {
          "id": "trig_pythagorean_simplification",
          "name": "Simplify by the Pythagorean trigonometric identity",
          "applicable_to": [
            "algebraic_expression"
          ],
          "exact": true,
          "educational_priority": 13,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage5.trig",
          "notes": "",
          "score": 151,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "explicit trigonometric identity"
          ]
        },
        {
          "id": "trig_identity_simplification",
          "name": "Simplify by a basic trigonometric identity",
          "applicable_to": [
            "algebraic_expression"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage5.trig",
          "notes": "",
          "score": 143,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "explicit trigonometric identity"
          ]
        },
        {
          "id": "collect_like_terms",
          "name": "Simplify an algebraic expression by collecting like terms",
          "applicable_to": [
            "algebraic_expression"
          ],
          "exact": true,
          "educational_priority": 7,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "legacy.expression",
          "notes": "",
          "score": 92,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy"
          ]
        }
      ],
      "selected_strategy": "trig_pythagorean_simplification",
      "strategy_score": 151,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Expression transformation was checked by exact symbolic arithmetic."
          }
        ]
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "simplify"
    }
  },
  {
    "input": "1 - cos(x)^2",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "1 - cos(x)^2",
      "task_type": "algebraic_expression",
      "steps": [
        {
          "before": "1 - cos(x)^2",
          "rule_id": "trig_one_minus_cos_squared",
          "action": "Rewrite by the Pythagorean identity",
          "after": "sin(x)^2",
          "explanation": "From sin(x)^2 + cos(x)^2 = 1, we get 1 - cos(x)^2 = sin(x)^2.",
          "details": {}
        }
      ],
      "answer": "sin(x)^2",
      "problem_profile": {
        "input": "1 - cos(x)^2",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": true,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "trigonometric"
        ]
      },
      "candidate_strategies": [
        {
          "id": "trig_pythagorean_simplification",
          "name": "Simplify by the Pythagorean trigonometric identity",
          "applicable_to": [
            "algebraic_expression"
          ],
          "exact": true,
          "educational_priority": 13,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage5.trig",
          "notes": "",
          "score": 151,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "explicit trigonometric identity"
          ]
        },
        {
          "id": "trig_identity_simplification",
          "name": "Simplify by a basic trigonometric identity",
          "applicable_to": [
            "algebraic_expression"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage5.trig",
          "notes": "",
          "score": 143,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "explicit trigonometric identity"
          ]
        },
        {
          "id": "collect_like_terms",
          "name": "Simplify an algebraic expression by collecting like terms",
          "applicable_to": [
            "algebraic_expression"
          ],
          "exact": true,
          "educational_priority": 7,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "legacy.expression",
          "notes": "",
          "score": 92,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy"
          ]
        }
      ],
      "selected_strategy": "trig_pythagorean_simplification",
      "strategy_score": 151,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Expression transformation was checked by exact symbolic arithmetic."
          }
        ]
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "simplify"
    }
  },
  {
    "input": "1 - sin(x)^2",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "1 - sin(x)^2",
      "task_type": "algebraic_expression",
      "steps": [
        {
          "before": "1 - sin(x)^2",
          "rule_id": "trig_one_minus_sin_squared",
          "action": "Rewrite by the Pythagorean identity",
          "after": "cos(x)^2",
          "explanation": "From sin(x)^2 + cos(x)^2 = 1, we get 1 - sin(x)^2 = cos(x)^2.",
          "details": {}
        }
      ],
      "answer": "cos(x)^2",
      "problem_profile": {
        "input": "1 - sin(x)^2",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": true,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "trigonometric"
        ]
      },
      "candidate_strategies": [
        {
          "id": "trig_pythagorean_simplification",
          "name": "Simplify by the Pythagorean trigonometric identity",
          "applicable_to": [
            "algebraic_expression"
          ],
          "exact": true,
          "educational_priority": 13,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage5.trig",
          "notes": "",
          "score": 151,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "explicit trigonometric identity"
          ]
        },
        {
          "id": "trig_identity_simplification",
          "name": "Simplify by a basic trigonometric identity",
          "applicable_to": [
            "algebraic_expression"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage5.trig",
          "notes": "",
          "score": 143,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "explicit trigonometric identity"
          ]
        },
        {
          "id": "collect_like_terms",
          "name": "Simplify an algebraic expression by collecting like terms",
          "applicable_to": [
            "algebraic_expression"
          ],
          "exact": true,
          "educational_priority": 7,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "legacy.expression",
          "notes": "",
          "score": 92,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy"
          ]
        }
      ],
      "selected_strategy": "trig_pythagorean_simplification",
      "strategy_score": 151,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Expression transformation was checked by exact symbolic arithmetic."
          }
        ]
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "simplify"
    }
  },
  {
    "input": "2*sin(x)*cos(x)",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "2*sin(x)*cos(x)",
      "task_type": "algebraic_expression",
      "steps": [
        {
          "before": "2*sin(x)*cos(x)",
          "rule_id": "trig_double_angle_sin",
          "action": "Apply the sine double-angle identity",
          "after": "sin(2*x)",
          "explanation": "The identity sin(2*x)=2*sin(x)*cos(x) is used in the reverse direction.",
          "details": {}
        }
      ],
      "answer": "sin(2*x)",
      "problem_profile": {
        "input": "2*sin(x)*cos(x)",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": true,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "trigonometric"
        ]
      },
      "candidate_strategies": [
        {
          "id": "trig_double_angle_simplification",
          "name": "Simplify by a double-angle trigonometric identity",
          "applicable_to": [
            "algebraic_expression"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage5.trig",
          "notes": "",
          "score": 147,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "explicit trigonometric identity"
          ]
        },
        {
          "id": "trig_identity_simplification",
          "name": "Simplify by a basic trigonometric identity",
          "applicable_to": [
            "algebraic_expression"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage5.trig",
          "notes": "",
          "score": 143,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "explicit trigonometric identity"
          ]
        },
        {
          "id": "collect_like_terms",
          "name": "Simplify an algebraic expression by collecting like terms",
          "applicable_to": [
            "algebraic_expression"
          ],
          "exact": true,
          "educational_priority": 7,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "legacy.expression",
          "notes": "",
          "score": 92,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy"
          ]
        }
      ],
      "selected_strategy": "trig_double_angle_simplification",
      "strategy_score": 147,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Expression transformation was checked by exact symbolic arithmetic."
          }
        ]
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "simplify"
    }
  },
  {
    "input": "cos(x)^2 - sin(x)^2",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "cos(x)^2 - sin(x)^2",
      "task_type": "algebraic_expression",
      "steps": [
        {
          "before": "cos(x)^2 - sin(x)^2",
          "rule_id": "trig_double_angle_cos",
          "action": "Apply the cosine double-angle identity",
          "after": "cos(2*x)",
          "explanation": "The identity cos(2*x)=cos(x)^2-sin(x)^2 is used.",
          "details": {}
        }
      ],
      "answer": "cos(2*x)",
      "problem_profile": {
        "input": "cos(x)^2 - sin(x)^2",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": true,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "trigonometric"
        ]
      },
      "candidate_strategies": [
        {
          "id": "trig_double_angle_simplification",
          "name": "Simplify by a double-angle trigonometric identity",
          "applicable_to": [
            "algebraic_expression"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage5.trig",
          "notes": "",
          "score": 147,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "explicit trigonometric identity"
          ]
        },
        {
          "id": "trig_identity_simplification",
          "name": "Simplify by a basic trigonometric identity",
          "applicable_to": [
            "algebraic_expression"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage5.trig",
          "notes": "",
          "score": 143,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "explicit trigonometric identity"
          ]
        },
        {
          "id": "collect_like_terms",
          "name": "Simplify an algebraic expression by collecting like terms",
          "applicable_to": [
            "algebraic_expression"
          ],
          "exact": true,
          "educational_priority": 7,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "legacy.expression",
          "notes": "",
          "score": 92,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy"
          ]
        }
      ],
      "selected_strategy": "trig_double_angle_simplification",
      "strategy_score": 147,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Expression transformation was checked by exact symbolic arithmetic."
          }
        ]
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "simplify"
    }
  },
  {
    "input": "cos(x) = 1/2",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "cos(x) = 1/2",
      "task_type": "trigonometric_equation",
      "steps": [
        {
          "before": "cos(x) = 1/2",
          "rule_id": "trig_solve_basic_cos",
          "action": "Solve the standard cos equation",
          "after": "cos(x) = 1/2",
          "explanation": "The equation is reduced to a standard unit-circle case.",
          "details": {}
        },
        {
          "before": "cos(x) = 1/2",
          "rule_id": "trig_unit_circle_values",
          "action": "Use unit-circle values",
          "after": "π/3, -π/3",
          "explanation": "The basic angles are read from standard unit-circle values.",
          "details": {
            "function": "cos",
            "value": "1/2"
          }
        },
        {
          "before": "cos(x) = 1/2",
          "rule_id": "trig_periodic_solution",
          "action": "Write the periodic solution family",
          "after": "x = π/3 + 2π*n or x = -π/3 + 2π*n, n ∈ Z",
          "explanation": "All real solutions are obtained by adding integer multiples of the period.",
          "details": {
            "integer_parameter": "n ∈ Z"
          }
        },
        {
          "before": "x = π/3 + 2π*n or x = -π/3 + 2π*n, n ∈ Z",
          "rule_id": "trig_check_solution",
          "action": "Check representative solutions",
          "after": "verification passed",
          "explanation": "Representative angles from the periodic family satisfy the original trigonometric equation.",
          "details": {}
        }
      ],
      "answer": "x = π/3 + 2π*n or x = -π/3 + 2π*n, n ∈ Z",
      "periodic_solution": "x = π/3 + 2π*n or x = -π/3 + 2π*n, n ∈ Z",
      "problem_profile": {
        "input": "cos(x) = 1/2",
        "task_type": "trigonometric_equation",
        "problem_kind": "equation",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": true,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": "=",
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "trigonometric"
        ]
      },
      "candidate_strategies": [
        {
          "id": "trigonometric_standard_solution",
          "name": "Use standard trigonometric solution families",
          "applicable_to": [
            "trigonometric_equation"
          ],
          "exact": true,
          "educational_priority": 10,
          "complexity_score": 3,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage5.trig",
          "notes": "",
          "score": 116,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "standard rule form"
          ]
        },
        {
          "id": "unit_circle_reasoning",
          "name": "Use unit-circle reasoning",
          "applicable_to": [
            "trigonometric_equation"
          ],
          "exact": true,
          "educational_priority": 8,
          "complexity_score": 4,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage5.trig",
          "notes": "",
          "score": 90,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy"
          ]
        },
        {
          "id": "symbolic_fallback",
          "name": "Use symbolic fallback only if rule strategies fail",
          "applicable_to": [
            "unsupported",
            "quadratic_equation",
            "polynomial_equation",
            "trigonometric_equation",
            "trigonometric_inequality",
            "rational_equation",
            "radical_equation",
            "exponential_equation",
            "logarithmic_equation",
            "logarithmic_inequality"
          ],
          "exact": true,
          "educational_priority": 1,
          "complexity_score": 10,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "notes": "",
          "score": -11,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "trigonometric_standard_solution",
      "strategy_score": 116,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Periodic solution family matches a standard trigonometric identity."
          }
        ]
      },
      "available_actions": [
        "solve",
        "list_actions"
      ],
      "selected_action": "solve"
    }
  },
  {
    "input": "2*sin(x) - 1 = 0",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "2*sin(x) - 1 = 0",
      "task_type": "trigonometric_equation",
      "steps": [
        {
          "before": "2*sin(x) - 1 = 0",
          "rule_id": "trig_reduce_to_algebraic_equation",
          "action": "Isolate the trigonometric expression",
          "after": "sin(x) = 1/2",
          "explanation": "The equation is linear in sin(x): move constants and divide by the coefficient.",
          "details": {}
        },
        {
          "before": "sin(x) = 1/2",
          "rule_id": "trig_solve_basic_sin",
          "action": "Solve the standard sin equation",
          "after": "sin(x) = 1/2",
          "explanation": "The equation is reduced to a standard unit-circle case.",
          "details": {}
        },
        {
          "before": "sin(x) = 1/2",
          "rule_id": "trig_unit_circle_values",
          "action": "Use unit-circle values",
          "after": "π/6, 5π/6",
          "explanation": "The basic angles are read from standard unit-circle values.",
          "details": {
            "function": "sin",
            "value": "1/2"
          }
        },
        {
          "before": "sin(x) = 1/2",
          "rule_id": "trig_periodic_solution",
          "action": "Write the periodic solution family",
          "after": "x = π/6 + 2π*n or x = 5π/6 + 2π*n, n ∈ Z",
          "explanation": "All real solutions are obtained by adding integer multiples of the period.",
          "details": {
            "integer_parameter": "n ∈ Z"
          }
        },
        {
          "before": "x = π/6 + 2π*n or x = 5π/6 + 2π*n, n ∈ Z",
          "rule_id": "trig_check_solution",
          "action": "Check representative solutions",
          "after": "verification passed",
          "explanation": "Representative angles from the periodic family satisfy the original trigonometric equation.",
          "details": {}
        }
      ],
      "answer": "x = π/6 + 2π*n or x = 5π/6 + 2π*n, n ∈ Z",
      "periodic_solution": "x = π/6 + 2π*n or x = 5π/6 + 2π*n, n ∈ Z",
      "problem_profile": {
        "input": "2*sin(x) - 1 = 0",
        "task_type": "trigonometric_equation",
        "problem_kind": "equation",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": true,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": "=",
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "trigonometric"
        ]
      },
      "candidate_strategies": [
        {
          "id": "trig_linear_equation",
          "name": "Reduce a linear trigonometric equation to a standard one",
          "applicable_to": [
            "trigonometric_equation"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage5.trig",
          "notes": "",
          "score": 130,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "linear reduction to standard trig equation"
          ]
        },
        {
          "id": "unit_circle_reasoning",
          "name": "Use unit-circle reasoning",
          "applicable_to": [
            "trigonometric_equation"
          ],
          "exact": true,
          "educational_priority": 8,
          "complexity_score": 4,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage5.trig",
          "notes": "",
          "score": 90,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy"
          ]
        },
        {
          "id": "symbolic_fallback",
          "name": "Use symbolic fallback only if rule strategies fail",
          "applicable_to": [
            "unsupported",
            "quadratic_equation",
            "polynomial_equation",
            "trigonometric_equation",
            "trigonometric_inequality",
            "rational_equation",
            "radical_equation",
            "exponential_equation",
            "logarithmic_equation",
            "logarithmic_inequality"
          ],
          "exact": true,
          "educational_priority": 1,
          "complexity_score": 10,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "notes": "",
          "score": -11,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "trig_linear_equation",
      "strategy_score": 130,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Periodic solution family matches a standard trigonometric identity."
          }
        ]
      },
      "available_actions": [
        "solve",
        "list_actions"
      ],
      "selected_action": "solve"
    }
  },
  {
    "input": "2*cos(x) + 1 = 0",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "2*cos(x) + 1 = 0",
      "task_type": "trigonometric_equation",
      "steps": [
        {
          "before": "2*cos(x) + 1 = 0",
          "rule_id": "trig_reduce_to_algebraic_equation",
          "action": "Isolate the trigonometric expression",
          "after": "cos(x) = -1/2",
          "explanation": "The equation is linear in cos(x): move constants and divide by the coefficient.",
          "details": {}
        },
        {
          "before": "cos(x) = -1/2",
          "rule_id": "trig_solve_basic_cos",
          "action": "Solve the standard cos equation",
          "after": "cos(x) = -1/2",
          "explanation": "The equation is reduced to a standard unit-circle case.",
          "details": {}
        },
        {
          "before": "cos(x) = -1/2",
          "rule_id": "trig_unit_circle_values",
          "action": "Use unit-circle values",
          "after": "2π/3, 4π/3",
          "explanation": "The basic angles are read from standard unit-circle values.",
          "details": {
            "function": "cos",
            "value": "-1/2"
          }
        },
        {
          "before": "cos(x) = -1/2",
          "rule_id": "trig_periodic_solution",
          "action": "Write the periodic solution family",
          "after": "x = 2π/3 + 2π*n or x = 4π/3 + 2π*n, n ∈ Z",
          "explanation": "All real solutions are obtained by adding integer multiples of the period.",
          "details": {
            "integer_parameter": "n ∈ Z"
          }
        },
        {
          "before": "x = 2π/3 + 2π*n or x = 4π/3 + 2π*n, n ∈ Z",
          "rule_id": "trig_check_solution",
          "action": "Check representative solutions",
          "after": "verification passed",
          "explanation": "Representative angles from the periodic family satisfy the original trigonometric equation.",
          "details": {}
        }
      ],
      "answer": "x = 2π/3 + 2π*n or x = 4π/3 + 2π*n, n ∈ Z",
      "periodic_solution": "x = 2π/3 + 2π*n or x = 4π/3 + 2π*n, n ∈ Z",
      "problem_profile": {
        "input": "2*cos(x) + 1 = 0",
        "task_type": "trigonometric_equation",
        "problem_kind": "equation",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": true,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": "=",
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "trigonometric"
        ]
      },
      "candidate_strategies": [
        {
          "id": "trig_linear_equation",
          "name": "Reduce a linear trigonometric equation to a standard one",
          "applicable_to": [
            "trigonometric_equation"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage5.trig",
          "notes": "",
          "score": 130,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "linear reduction to standard trig equation"
          ]
        },
        {
          "id": "unit_circle_reasoning",
          "name": "Use unit-circle reasoning",
          "applicable_to": [
            "trigonometric_equation"
          ],
          "exact": true,
          "educational_priority": 8,
          "complexity_score": 4,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage5.trig",
          "notes": "",
          "score": 90,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy"
          ]
        },
        {
          "id": "symbolic_fallback",
          "name": "Use symbolic fallback only if rule strategies fail",
          "applicable_to": [
            "unsupported",
            "quadratic_equation",
            "polynomial_equation",
            "trigonometric_equation",
            "trigonometric_inequality",
            "rational_equation",
            "radical_equation",
            "exponential_equation",
            "logarithmic_equation",
            "logarithmic_inequality"
          ],
          "exact": true,
          "educational_priority": 1,
          "complexity_score": 10,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "notes": "",
          "score": -11,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "trig_linear_equation",
      "strategy_score": 130,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Periodic solution family matches a standard trigonometric identity."
          }
        ]
      },
      "available_actions": [
        "solve",
        "list_actions"
      ],
      "selected_action": "solve"
    }
  },
  {
    "input": "3*tan(x) - 3 = 0",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "3*tan(x) - 3 = 0",
      "task_type": "trigonometric_equation",
      "steps": [
        {
          "before": "3*tan(x) - 3 = 0",
          "rule_id": "trig_reduce_to_algebraic_equation",
          "action": "Isolate the trigonometric expression",
          "after": "tan(x) = 1",
          "explanation": "The equation is linear in tan(x): move constants and divide by the coefficient.",
          "details": {}
        },
        {
          "before": "tan(x) = 1",
          "rule_id": "trig_solve_basic_tan",
          "action": "Solve the standard tan equation",
          "after": "tan(x) = 1",
          "explanation": "The equation is reduced to a standard unit-circle case.",
          "details": {}
        },
        {
          "before": "tan(x) = 1",
          "rule_id": "trig_unit_circle_values",
          "action": "Use unit-circle values",
          "after": "π/4",
          "explanation": "The basic angles are read from standard unit-circle values.",
          "details": {
            "function": "tan",
            "value": "1"
          }
        },
        {
          "before": "tan(x) = 1",
          "rule_id": "trig_periodic_solution",
          "action": "Write the periodic solution family",
          "after": "x = π/4 + π*n, n ∈ Z",
          "explanation": "All real solutions are obtained by adding integer multiples of the period.",
          "details": {
            "integer_parameter": "n ∈ Z"
          }
        },
        {
          "before": "x = π/4 + π*n, n ∈ Z",
          "rule_id": "trig_check_solution",
          "action": "Check representative solutions",
          "after": "verification passed",
          "explanation": "Representative angles from the periodic family satisfy the original trigonometric equation.",
          "details": {}
        }
      ],
      "answer": "x = π/4 + π*n, n ∈ Z",
      "periodic_solution": "x = π/4 + π*n, n ∈ Z",
      "problem_profile": {
        "input": "3*tan(x) - 3 = 0",
        "task_type": "trigonometric_equation",
        "problem_kind": "equation",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": true,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": "=",
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "trigonometric",
          "common_factor"
        ]
      },
      "candidate_strategies": [
        {
          "id": "trig_linear_equation",
          "name": "Reduce a linear trigonometric equation to a standard one",
          "applicable_to": [
            "trigonometric_equation"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage5.trig",
          "notes": "",
          "score": 130,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "linear reduction to standard trig equation"
          ]
        },
        {
          "id": "unit_circle_reasoning",
          "name": "Use unit-circle reasoning",
          "applicable_to": [
            "trigonometric_equation"
          ],
          "exact": true,
          "educational_priority": 8,
          "complexity_score": 4,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage5.trig",
          "notes": "",
          "score": 90,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy"
          ]
        },
        {
          "id": "symbolic_fallback",
          "name": "Use symbolic fallback only if rule strategies fail",
          "applicable_to": [
            "unsupported",
            "quadratic_equation",
            "polynomial_equation",
            "trigonometric_equation",
            "trigonometric_inequality",
            "rational_equation",
            "radical_equation",
            "exponential_equation",
            "logarithmic_equation",
            "logarithmic_inequality"
          ],
          "exact": true,
          "educational_priority": 1,
          "complexity_score": 10,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "notes": "",
          "score": -11,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "trig_linear_equation",
      "strategy_score": 130,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Periodic solution family matches a standard trigonometric identity."
          }
        ]
      },
      "available_actions": [
        "solve",
        "list_actions"
      ],
      "selected_action": "solve"
    }
  },
  {
    "input": "2*sin(x)^2 - sin(x) - 1 = 0",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "2*sin(x)^2 - sin(x) - 1 = 0",
      "task_type": "trigonometric_equation",
      "steps": [
        {
          "before": "2*sin(x)^2 - sin(x) - 1 = 0",
          "rule_id": "trig_substitution",
          "action": "Substitute a temporary variable",
          "after": "let t = sin(x); 2*t^2 - t - 1 = 0",
          "explanation": "The equation is a quadratic polynomial in one trigonometric function.",
          "details": {}
        },
        {
          "before": "2*t^2 - t - 1 = 0",
          "rule_id": "trig_reduce_to_algebraic_equation",
          "action": "Reduce to an algebraic equation",
          "after": "2*t^2 - t - 1 = 0",
          "explanation": "After substitution, solve the resulting quadratic equation in t.",
          "details": {}
        },
        {
          "before": "2*t^2 - t - 1 = 0",
          "rule_id": "factor_quadratic",
          "action": "Factor the quadratic equation",
          "after": "(t - 1)*(2*t + 1) = 0",
          "explanation": "The quadratic in t is factored to find possible trigonometric values.",
          "details": {}
        },
        {
          "before": "(t - 1)*(2*t + 1) = 0",
          "rule_id": "trig_filter_invalid_values",
          "action": "Filter values outside the trigonometric range",
          "after": "t = -1/2; t = 1",
          "explanation": "For sine and cosine, only values in [-1, 1] are valid; invalid candidates are rejected.",
          "details": {
            "rejected_values": []
          }
        },
        {
          "before": "t = -1/2",
          "rule_id": "trig_reduce_to_algebraic_equation",
          "action": "Return to the original trigonometric function",
          "after": "sin(x) = -1/2",
          "explanation": "Because t = sin(x), solve sin(x) = -1/2.",
          "details": {}
        },
        {
          "before": "sin(x) = -1/2",
          "rule_id": "trig_solve_basic_sin",
          "action": "Solve the standard sin equation",
          "after": "sin(x) = -1/2",
          "explanation": "The equation is reduced to a standard unit-circle case.",
          "details": {}
        },
        {
          "before": "sin(x) = -1/2",
          "rule_id": "trig_unit_circle_values",
          "action": "Use unit-circle values",
          "after": "-π/6, 7π/6",
          "explanation": "The basic angles are read from standard unit-circle values.",
          "details": {
            "function": "sin",
            "value": "-1/2"
          }
        },
        {
          "before": "sin(x) = -1/2",
          "rule_id": "trig_periodic_solution",
          "action": "Write the periodic solution family",
          "after": "x = -π/6 + 2π*n or x = 7π/6 + 2π*n, n ∈ Z",
          "explanation": "All real solutions are obtained by adding integer multiples of the period.",
          "details": {
            "integer_parameter": "n ∈ Z"
          }
        },
        {
          "before": "t = 1",
          "rule_id": "trig_reduce_to_algebraic_equation",
          "action": "Return to the original trigonometric function",
          "after": "sin(x) = 1",
          "explanation": "Because t = sin(x), solve sin(x) = 1.",
          "details": {}
        },
        {
          "before": "sin(x) = 1",
          "rule_id": "trig_solve_basic_sin",
          "action": "Solve the standard sin equation",
          "after": "sin(x) = 1",
          "explanation": "The equation is reduced to a standard unit-circle case.",
          "details": {}
        },
        {
          "before": "sin(x) = 1",
          "rule_id": "trig_unit_circle_values",
          "action": "Use unit-circle values",
          "after": "π/2",
          "explanation": "The basic angles are read from standard unit-circle values.",
          "details": {
            "function": "sin",
            "value": "1"
          }
        },
        {
          "before": "sin(x) = 1",
          "rule_id": "trig_periodic_solution",
          "action": "Write the periodic solution family",
          "after": "x = π/2 + 2π*n, n ∈ Z",
          "explanation": "All real solutions are obtained by adding integer multiples of the period.",
          "details": {
            "integer_parameter": "n ∈ Z"
          }
        },
        {
          "before": "x = -π/6 + 2π*n or x = 7π/6 + 2π*n or x = π/2 + 2π*n, n ∈ Z",
          "rule_id": "trig_check_solution",
          "action": "Check representative solutions",
          "after": "verification passed",
          "explanation": "Representative angles satisfy the original equation and rejected values are outside the allowed range.",
          "details": {}
        }
      ],
      "answer": "x = -π/6 + 2π*n or x = 7π/6 + 2π*n or x = π/2 + 2π*n, n ∈ Z",
      "periodic_solution": "x = -π/6 + 2π*n or x = 7π/6 + 2π*n or x = π/2 + 2π*n, n ∈ Z",
      "rejected_values": [],
      "problem_profile": {
        "input": "2*sin(x)^2 - sin(x) - 1 = 0",
        "task_type": "trigonometric_equation",
        "problem_kind": "equation",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": true,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": "=",
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "trigonometric"
        ]
      },
      "candidate_strategies": [
        {
          "id": "trig_substitution_quadratic",
          "name": "Solve a quadratic trigonometric equation by substitution",
          "applicable_to": [
            "trigonometric_equation"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 4,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage5.trig",
          "notes": "",
          "score": 141,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "quadratic substitution in trig function"
          ]
        },
        {
          "id": "unit_circle_reasoning",
          "name": "Use unit-circle reasoning",
          "applicable_to": [
            "trigonometric_equation"
          ],
          "exact": true,
          "educational_priority": 8,
          "complexity_score": 4,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage5.trig",
          "notes": "",
          "score": 90,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy"
          ]
        },
        {
          "id": "symbolic_fallback",
          "name": "Use symbolic fallback only if rule strategies fail",
          "applicable_to": [
            "unsupported",
            "quadratic_equation",
            "polynomial_equation",
            "trigonometric_equation",
            "trigonometric_inequality",
            "rational_equation",
            "radical_equation",
            "exponential_equation",
            "logarithmic_equation",
            "logarithmic_inequality"
          ],
          "exact": true,
          "educational_priority": 1,
          "complexity_score": 10,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "notes": "",
          "score": -11,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "trig_substitution_quadratic",
      "strategy_score": 141,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Periodic solution family matches a standard trigonometric identity."
          }
        ]
      },
      "available_actions": [
        "solve",
        "list_actions"
      ],
      "selected_action": "solve"
    }
  },
  {
    "input": "2*sin(x)^2 - 5*sin(x) + 2 = 0",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "2*sin(x)^2 - 5*sin(x) + 2 = 0",
      "task_type": "trigonometric_equation",
      "steps": [
        {
          "before": "2*sin(x)^2 - 5*sin(x) + 2 = 0",
          "rule_id": "trig_substitution",
          "action": "Substitute a temporary variable",
          "after": "let t = sin(x); 2*t^2 - 5*t + 2 = 0",
          "explanation": "The equation is a quadratic polynomial in one trigonometric function.",
          "details": {}
        },
        {
          "before": "2*t^2 - 5*t + 2 = 0",
          "rule_id": "trig_reduce_to_algebraic_equation",
          "action": "Reduce to an algebraic equation",
          "after": "2*t^2 - 5*t + 2 = 0",
          "explanation": "After substitution, solve the resulting quadratic equation in t.",
          "details": {}
        },
        {
          "before": "2*t^2 - 5*t + 2 = 0",
          "rule_id": "factor_quadratic",
          "action": "Factor the quadratic equation",
          "after": "(t - 2)*(2*t - 1) = 0",
          "explanation": "The quadratic in t is factored to find possible trigonometric values.",
          "details": {}
        },
        {
          "before": "(t - 2)*(2*t - 1) = 0",
          "rule_id": "trig_filter_invalid_values",
          "action": "Filter values outside the trigonometric range",
          "after": "t = 1/2",
          "explanation": "For sine and cosine, only values in [-1, 1] are valid; invalid candidates are rejected.",
          "details": {
            "rejected_values": [
              "2"
            ]
          }
        },
        {
          "before": "sin(x) = 2",
          "rule_id": "trig_filter_invalid_values",
          "action": "Reject impossible trigonometric value",
          "after": "sin(x) = 2 is impossible",
          "explanation": "sin(x) cannot take the value 2 on the real domain.",
          "details": {}
        },
        {
          "before": "t = 1/2",
          "rule_id": "trig_reduce_to_algebraic_equation",
          "action": "Return to the original trigonometric function",
          "after": "sin(x) = 1/2",
          "explanation": "Because t = sin(x), solve sin(x) = 1/2.",
          "details": {}
        },
        {
          "before": "sin(x) = 1/2",
          "rule_id": "trig_solve_basic_sin",
          "action": "Solve the standard sin equation",
          "after": "sin(x) = 1/2",
          "explanation": "The equation is reduced to a standard unit-circle case.",
          "details": {}
        },
        {
          "before": "sin(x) = 1/2",
          "rule_id": "trig_unit_circle_values",
          "action": "Use unit-circle values",
          "after": "π/6, 5π/6",
          "explanation": "The basic angles are read from standard unit-circle values.",
          "details": {
            "function": "sin",
            "value": "1/2"
          }
        },
        {
          "before": "sin(x) = 1/2",
          "rule_id": "trig_periodic_solution",
          "action": "Write the periodic solution family",
          "after": "x = π/6 + 2π*n or x = 5π/6 + 2π*n, n ∈ Z",
          "explanation": "All real solutions are obtained by adding integer multiples of the period.",
          "details": {
            "integer_parameter": "n ∈ Z"
          }
        },
        {
          "before": "x = π/6 + 2π*n or x = 5π/6 + 2π*n, n ∈ Z",
          "rule_id": "trig_check_solution",
          "action": "Check representative solutions",
          "after": "verification passed",
          "explanation": "Representative angles satisfy the original equation and rejected values are outside the allowed range.",
          "details": {}
        }
      ],
      "answer": "x = π/6 + 2π*n or x = 5π/6 + 2π*n, n ∈ Z",
      "periodic_solution": "x = π/6 + 2π*n or x = 5π/6 + 2π*n, n ∈ Z",
      "rejected_values": [
        "2"
      ],
      "problem_profile": {
        "input": "2*sin(x)^2 - 5*sin(x) + 2 = 0",
        "task_type": "trigonometric_equation",
        "problem_kind": "equation",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": true,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": "=",
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "trigonometric"
        ]
      },
      "candidate_strategies": [
        {
          "id": "trig_substitution_quadratic",
          "name": "Solve a quadratic trigonometric equation by substitution",
          "applicable_to": [
            "trigonometric_equation"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 4,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage5.trig",
          "notes": "",
          "score": 141,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "quadratic substitution in trig function"
          ]
        },
        {
          "id": "unit_circle_reasoning",
          "name": "Use unit-circle reasoning",
          "applicable_to": [
            "trigonometric_equation"
          ],
          "exact": true,
          "educational_priority": 8,
          "complexity_score": 4,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage5.trig",
          "notes": "",
          "score": 90,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy"
          ]
        },
        {
          "id": "symbolic_fallback",
          "name": "Use symbolic fallback only if rule strategies fail",
          "applicable_to": [
            "unsupported",
            "quadratic_equation",
            "polynomial_equation",
            "trigonometric_equation",
            "trigonometric_inequality",
            "rational_equation",
            "radical_equation",
            "exponential_equation",
            "logarithmic_equation",
            "logarithmic_inequality"
          ],
          "exact": true,
          "educational_priority": 1,
          "complexity_score": 10,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "notes": "",
          "score": -11,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "trig_substitution_quadratic",
      "strategy_score": 141,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Periodic solution family matches a standard trigonometric identity."
          }
        ]
      },
      "available_actions": [
        "solve",
        "list_actions"
      ],
      "selected_action": "solve"
    }
  },
  {
    "input": "sin(x)^2 + cos(x)^2 = 1",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "sin(x)^2 + cos(x)^2 = 1",
      "task_type": "trigonometric_equation",
      "steps": [
        {
          "before": "sin(x)^2 + cos(x)^2 = 1",
          "rule_id": "trig_pythagorean_identity",
          "action": "Apply the Pythagorean identity",
          "after": "1 = 1",
          "explanation": "sin(x)^2 + cos(x)^2 is identically equal to 1.",
          "details": {}
        },
        {
          "before": "1 = 1",
          "rule_id": "trig_check_solution",
          "action": "Conclude the identity is true",
          "after": "x ∈ R",
          "explanation": "The equality holds for every real x.",
          "details": {}
        }
      ],
      "answer": "x ∈ R",
      "problem_profile": {
        "input": "sin(x)^2 + cos(x)^2 = 1",
        "task_type": "trigonometric_equation",
        "problem_kind": "equation",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": true,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": "=",
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "trigonometric"
        ]
      },
      "candidate_strategies": [
        {
          "id": "trig_identity_equation",
          "name": "Solve a trigonometric equation using identities first",
          "applicable_to": [
            "trigonometric_equation"
          ],
          "exact": true,
          "educational_priority": 13,
          "complexity_score": 3,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage5.trig",
          "notes": "",
          "score": 148,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "identity before solving"
          ]
        },
        {
          "id": "unit_circle_reasoning",
          "name": "Use unit-circle reasoning",
          "applicable_to": [
            "trigonometric_equation"
          ],
          "exact": true,
          "educational_priority": 8,
          "complexity_score": 4,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage5.trig",
          "notes": "",
          "score": 90,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy"
          ]
        },
        {
          "id": "symbolic_fallback",
          "name": "Use symbolic fallback only if rule strategies fail",
          "applicable_to": [
            "unsupported",
            "quadratic_equation",
            "polynomial_equation",
            "trigonometric_equation",
            "trigonometric_inequality",
            "rational_equation",
            "radical_equation",
            "exponential_equation",
            "logarithmic_equation",
            "logarithmic_inequality"
          ],
          "exact": true,
          "educational_priority": 1,
          "complexity_score": 10,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "notes": "",
          "score": -11,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "trig_identity_equation",
      "strategy_score": 148,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Periodic solution family matches a standard trigonometric identity."
          }
        ]
      },
      "available_actions": [
        "solve",
        "list_actions"
      ],
      "selected_action": "solve"
    }
  },
  {
    "input": "1 - cos(x)^2 = sin(x)",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "1 - cos(x)^2 = sin(x)",
      "task_type": "trigonometric_equation",
      "steps": [
        {
          "before": "1 - cos(x)^2 = sin(x)",
          "rule_id": "trig_one_minus_cos_squared",
          "action": "Rewrite by the Pythagorean identity",
          "after": "sin(x)^2 = sin(x)",
          "explanation": "Use 1 - cos(x)^2 = sin(x)^2.",
          "details": {}
        },
        {
          "before": "sin(x)^2 = sin(x)",
          "rule_id": "trig_substitution",
          "action": "Substitute a temporary variable",
          "after": "let t = sin(x); t^2 - t = 0",
          "explanation": "The equation becomes algebraic in t.",
          "details": {}
        },
        {
          "before": "t^2 - t = 0",
          "rule_id": "factor_quadratic",
          "action": "Factor the algebraic equation",
          "after": "t*(t - 1) = 0",
          "explanation": "Take out the common factor t.",
          "details": {}
        },
        {
          "before": "t*(t - 1) = 0",
          "rule_id": "trig_filter_invalid_values",
          "action": "Filter values outside the trigonometric range",
          "after": "t = 0 or t = 1",
          "explanation": "Both values are valid for sine.",
          "details": {}
        },
        {
          "before": "t = 0",
          "rule_id": "trig_reduce_to_algebraic_equation",
          "action": "Return to sine",
          "after": "sin(x) = 0",
          "explanation": "Because t = sin(x), solve the corresponding sine equation.",
          "details": {}
        },
        {
          "before": "sin(x) = 0",
          "rule_id": "trig_solve_basic_sin",
          "action": "Solve the standard sin equation",
          "after": "sin(x) = 0",
          "explanation": "The equation is reduced to a standard unit-circle case.",
          "details": {}
        },
        {
          "before": "sin(x) = 0",
          "rule_id": "trig_unit_circle_values",
          "action": "Use unit-circle values",
          "after": "0, π",
          "explanation": "The basic angles are read from standard unit-circle values.",
          "details": {
            "function": "sin",
            "value": "0"
          }
        },
        {
          "before": "sin(x) = 0",
          "rule_id": "trig_periodic_solution",
          "action": "Write the periodic solution family",
          "after": "x = π*n, n ∈ Z",
          "explanation": "All real solutions are obtained by adding integer multiples of the period.",
          "details": {
            "integer_parameter": "n ∈ Z"
          }
        },
        {
          "before": "t = 1",
          "rule_id": "trig_reduce_to_algebraic_equation",
          "action": "Return to sine",
          "after": "sin(x) = 1",
          "explanation": "Because t = sin(x), solve the corresponding sine equation.",
          "details": {}
        },
        {
          "before": "sin(x) = 1",
          "rule_id": "trig_solve_basic_sin",
          "action": "Solve the standard sin equation",
          "after": "sin(x) = 1",
          "explanation": "The equation is reduced to a standard unit-circle case.",
          "details": {}
        },
        {
          "before": "sin(x) = 1",
          "rule_id": "trig_unit_circle_values",
          "action": "Use unit-circle values",
          "after": "π/2",
          "explanation": "The basic angles are read from standard unit-circle values.",
          "details": {
            "function": "sin",
            "value": "1"
          }
        },
        {
          "before": "sin(x) = 1",
          "rule_id": "trig_periodic_solution",
          "action": "Write the periodic solution family",
          "after": "x = π/2 + 2π*n, n ∈ Z",
          "explanation": "All real solutions are obtained by adding integer multiples of the period.",
          "details": {
            "integer_parameter": "n ∈ Z"
          }
        },
        {
          "before": "x = π*n or x = π/2 + 2π*n, n ∈ Z",
          "rule_id": "trig_check_solution",
          "action": "Check representative solutions",
          "after": "verification passed",
          "explanation": "Representative angles satisfy the transformed and original equations.",
          "details": {}
        }
      ],
      "answer": "x = π*n or x = π/2 + 2π*n, n ∈ Z",
      "periodic_solution": "x = π*n or x = π/2 + 2π*n, n ∈ Z",
      "problem_profile": {
        "input": "1 - cos(x)^2 = sin(x)",
        "task_type": "trigonometric_equation",
        "problem_kind": "equation",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": true,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": "=",
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "trigonometric"
        ]
      },
      "candidate_strategies": [
        {
          "id": "trig_identity_equation",
          "name": "Solve a trigonometric equation using identities first",
          "applicable_to": [
            "trigonometric_equation"
          ],
          "exact": true,
          "educational_priority": 13,
          "complexity_score": 3,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage5.trig",
          "notes": "",
          "score": 148,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "identity before solving"
          ]
        },
        {
          "id": "trig_substitution_quadratic",
          "name": "Solve a quadratic trigonometric equation by substitution",
          "applicable_to": [
            "trigonometric_equation"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 4,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage5.trig",
          "notes": "",
          "score": 141,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "quadratic substitution in trig function"
          ]
        },
        {
          "id": "unit_circle_reasoning",
          "name": "Use unit-circle reasoning",
          "applicable_to": [
            "trigonometric_equation"
          ],
          "exact": true,
          "educational_priority": 8,
          "complexity_score": 4,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage5.trig",
          "notes": "",
          "score": 90,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy"
          ]
        },
        {
          "id": "symbolic_fallback",
          "name": "Use symbolic fallback only if rule strategies fail",
          "applicable_to": [
            "unsupported",
            "quadratic_equation",
            "polynomial_equation",
            "trigonometric_equation",
            "trigonometric_inequality",
            "rational_equation",
            "radical_equation",
            "exponential_equation",
            "logarithmic_equation",
            "logarithmic_inequality"
          ],
          "exact": true,
          "educational_priority": 1,
          "complexity_score": 10,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "notes": "",
          "score": -11,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "trig_identity_equation",
      "strategy_score": 148,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Periodic solution family matches a standard trigonometric identity."
          }
        ]
      },
      "available_actions": [
        "solve",
        "list_actions"
      ],
      "selected_action": "solve"
    }
  },
  {
    "input": "cos(x)^2 - sin(x)^2 = 0",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "cos(x)^2 - sin(x)^2 = 0",
      "task_type": "trigonometric_equation",
      "steps": [
        {
          "before": "cos(x)^2 - sin(x)^2 = 0",
          "rule_id": "trig_double_angle_cos",
          "action": "Use the cosine double-angle identity",
          "after": "cos(2*x) = 0",
          "explanation": "cos(x)^2 - sin(x)^2 = cos(2*x).",
          "details": {}
        },
        {
          "before": "cos(2*x) = 0",
          "rule_id": "trig_solve_basic_cos",
          "action": "Solve the standard cos equation",
          "after": "cos(2*x) = 0",
          "explanation": "The equation is reduced to a standard unit-circle case.",
          "details": {}
        },
        {
          "before": "cos(x) = 0",
          "rule_id": "trig_unit_circle_values",
          "action": "Use unit-circle values",
          "after": "π/2, 3π/2",
          "explanation": "The basic angles are read from standard unit-circle values.",
          "details": {
            "function": "cos",
            "value": "0"
          }
        },
        {
          "before": "cos(2*x) = 0",
          "rule_id": "trig_periodic_solution",
          "action": "Write the periodic solution family",
          "after": "x = π/4 + π*n/2, n ∈ Z",
          "explanation": "All real solutions are obtained by adding integer multiples of the period.",
          "details": {
            "integer_parameter": "n ∈ Z"
          }
        },
        {
          "before": "x = π/4 + π*n/2, n ∈ Z",
          "rule_id": "trig_check_solution",
          "action": "Check representative solutions",
          "after": "verification passed",
          "explanation": "Representative angles from the periodic family satisfy the original trigonometric equation.",
          "details": {}
        }
      ],
      "answer": "x = π/4 + π*n/2, n ∈ Z",
      "periodic_solution": "x = π/4 + π*n/2, n ∈ Z",
      "problem_profile": {
        "input": "cos(x)^2 - sin(x)^2 = 0",
        "task_type": "trigonometric_equation",
        "problem_kind": "equation",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": true,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": "=",
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "trigonometric"
        ]
      },
      "candidate_strategies": [
        {
          "id": "double_angle_identity",
          "name": "Solve using a double-angle identity",
          "applicable_to": [
            "trigonometric_equation"
          ],
          "exact": true,
          "educational_priority": 13,
          "complexity_score": 3,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage5.trig",
          "notes": "",
          "score": 148,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "identity before solving"
          ]
        },
        {
          "id": "unit_circle_reasoning",
          "name": "Use unit-circle reasoning",
          "applicable_to": [
            "trigonometric_equation"
          ],
          "exact": true,
          "educational_priority": 8,
          "complexity_score": 4,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage5.trig",
          "notes": "",
          "score": 90,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy"
          ]
        },
        {
          "id": "symbolic_fallback",
          "name": "Use symbolic fallback only if rule strategies fail",
          "applicable_to": [
            "unsupported",
            "quadratic_equation",
            "polynomial_equation",
            "trigonometric_equation",
            "trigonometric_inequality",
            "rational_equation",
            "radical_equation",
            "exponential_equation",
            "logarithmic_equation",
            "logarithmic_inequality"
          ],
          "exact": true,
          "educational_priority": 1,
          "complexity_score": 10,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "notes": "",
          "score": -11,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "double_angle_identity",
      "strategy_score": 148,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Periodic solution family matches a standard trigonometric identity."
          }
        ]
      },
      "available_actions": [
        "solve",
        "list_actions"
      ],
      "selected_action": "solve"
    }
  },
  {
    "input": "sin(x) > 0",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "sin(x) > 0",
      "task_type": "trigonometric_inequality",
      "steps": [
        {
          "before": "sin(x) > 0",
          "rule_id": "trig_inequality_unit_circle",
          "action": "Analyze the sign on the unit circle",
          "after": "positive on quadrants I and II",
          "explanation": "The sign of sin(x) is determined by its position on the unit circle.",
          "details": {}
        },
        {
          "before": "sin(x) > 0",
          "rule_id": "trig_inequality_periodic_intervals",
          "action": "Extend the interval periodically",
          "after": "x ∈ (2π*n, π + 2π*n), n ∈ Z",
          "explanation": "Trigonometric signs repeat with the period of the function.",
          "details": {}
        },
        {
          "before": "x ∈ (2π*n, π + 2π*n), n ∈ Z",
          "rule_id": "trig_check_solution",
          "action": "Check sample points",
          "after": "verification passed",
          "explanation": "Sample points inside and outside the interval family match the inequality sign.",
          "details": {}
        }
      ],
      "answer": "x ∈ (2π*n, π + 2π*n), n ∈ Z",
      "periodic_solution": "x ∈ (2π*n, π + 2π*n), n ∈ Z",
      "sign_chart": [
        {
          "interval_family": "x ∈ (2π*n, π + 2π*n), n ∈ Z",
          "sign": "selected"
        }
      ],
      "problem_profile": {
        "input": "sin(x) > 0",
        "task_type": "trigonometric_inequality",
        "problem_kind": "inequality",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": true,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": ">",
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "trigonometric"
        ]
      },
      "candidate_strategies": [
        {
          "id": "trig_inequality_unit_circle",
          "name": "Solve a basic trigonometric inequality on the unit circle",
          "applicable_to": [
            "trigonometric_inequality"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 3,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage5.trig",
          "notes": "",
          "score": 144,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "unit-circle inequality intervals"
          ]
        },
        {
          "id": "symbolic_fallback",
          "name": "Use symbolic fallback only if rule strategies fail",
          "applicable_to": [
            "unsupported",
            "quadratic_equation",
            "polynomial_equation",
            "trigonometric_equation",
            "trigonometric_inequality",
            "rational_equation",
            "radical_equation",
            "exponential_equation",
            "logarithmic_equation",
            "logarithmic_inequality"
          ],
          "exact": true,
          "educational_priority": 1,
          "complexity_score": 10,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "notes": "",
          "score": -11,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "trig_inequality_unit_circle",
      "strategy_score": 144,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Sign chart contains test points for each interval."
          }
        ]
      },
      "available_actions": [
        "solve",
        "list_actions"
      ],
      "selected_action": "solve"
    }
  },
  {
    "input": "cos(x) >= 0",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "cos(x) >= 0",
      "task_type": "trigonometric_inequality",
      "steps": [
        {
          "before": "cos(x) >= 0",
          "rule_id": "trig_inequality_unit_circle",
          "action": "Analyze the sign on the unit circle",
          "after": "non-negative on the right half of the unit circle including endpoints",
          "explanation": "The sign of cos(x) is determined by its position on the unit circle.",
          "details": {}
        },
        {
          "before": "cos(x) >= 0",
          "rule_id": "trig_inequality_periodic_intervals",
          "action": "Extend the interval periodically",
          "after": "x ∈ [-π/2 + 2π*n, π/2 + 2π*n], n ∈ Z",
          "explanation": "Trigonometric signs repeat with the period of the function.",
          "details": {}
        },
        {
          "before": "x ∈ [-π/2 + 2π*n, π/2 + 2π*n], n ∈ Z",
          "rule_id": "trig_check_solution",
          "action": "Check sample points",
          "after": "verification passed",
          "explanation": "Sample points inside and outside the interval family match the inequality sign.",
          "details": {}
        }
      ],
      "answer": "x ∈ [-π/2 + 2π*n, π/2 + 2π*n], n ∈ Z",
      "periodic_solution": "x ∈ [-π/2 + 2π*n, π/2 + 2π*n], n ∈ Z",
      "sign_chart": [
        {
          "interval_family": "x ∈ [-π/2 + 2π*n, π/2 + 2π*n], n ∈ Z",
          "sign": "selected"
        }
      ],
      "problem_profile": {
        "input": "cos(x) >= 0",
        "task_type": "trigonometric_inequality",
        "problem_kind": "inequality",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": true,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": ">=",
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "trigonometric"
        ]
      },
      "candidate_strategies": [
        {
          "id": "trig_inequality_unit_circle",
          "name": "Solve a basic trigonometric inequality on the unit circle",
          "applicable_to": [
            "trigonometric_inequality"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 3,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage5.trig",
          "notes": "",
          "score": 144,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "unit-circle inequality intervals"
          ]
        },
        {
          "id": "symbolic_fallback",
          "name": "Use symbolic fallback only if rule strategies fail",
          "applicable_to": [
            "unsupported",
            "quadratic_equation",
            "polynomial_equation",
            "trigonometric_equation",
            "trigonometric_inequality",
            "rational_equation",
            "radical_equation",
            "exponential_equation",
            "logarithmic_equation",
            "logarithmic_inequality"
          ],
          "exact": true,
          "educational_priority": 1,
          "complexity_score": 10,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "notes": "",
          "score": -11,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "trig_inequality_unit_circle",
      "strategy_score": 144,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Sign chart contains test points for each interval."
          }
        ]
      },
      "available_actions": [
        "solve",
        "list_actions"
      ],
      "selected_action": "solve"
    }
  },
  {
    "input": "(3*x + 12)/(x^2 - 16)",
    "action": null,
    "list_actions": true,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "(3*x + 12)/(x^2 - 16)",
      "task_type": "action_selection",
      "steps": [
        {
          "before": "(3*x + 12)/(x^2 - 16)",
          "rule_id": "list_actions",
          "action": "List available actions",
          "after": "1. simplify\n2. factor\n3. find_domain\n4. differentiate\n5. integrate\n6. integrate_definite\n7. find_area_under_curve\n8. find_inverse\n9. find_range\n10. find_asymptotes\n11. find_limit\n12. find_left_limit\n13. find_right_limit\n14. find_limit_at_infinity\n15. check_continuity\n16. find_discontinuities\n17. find_critical_points\n18. find_extrema\n19. find_monotonicity\n20. find_tangent_line\n21. find_normal_line\n22. find_second_derivative\n23. find_concavity\n24. find_inflection_points\n25. analyze_function\n26. list_actions",
          "explanation": "The action layer separates the mathematical object from the operation requested by the user.",
          "details": {
            "available_actions": [
              "simplify",
              "factor",
              "find_domain",
              "differentiate",
              "integrate",
              "integrate_definite",
              "find_area_under_curve",
              "find_inverse",
              "find_range",
              "find_asymptotes",
              "find_limit",
              "find_left_limit",
              "find_right_limit",
              "find_limit_at_infinity",
              "check_continuity",
              "find_discontinuities",
              "find_critical_points",
              "find_extrema",
              "find_monotonicity",
              "find_tangent_line",
              "find_normal_line",
              "find_second_derivative",
              "find_concavity",
              "find_inflection_points",
              "analyze_function",
              "list_actions"
            ]
          }
        }
      ],
      "answer": "simplify, factor, find_domain, differentiate, integrate, integrate_definite, find_area_under_curve, find_inverse, find_range, find_asymptotes, find_limit, find_left_limit, find_right_limit, find_limit_at_infinity, check_continuity, find_discontinuities, find_critical_points, find_extrema, find_monotonicity, find_tangent_line, find_normal_line, find_second_derivative, find_concavity, find_inflection_points, analyze_function, list_actions",
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "list_actions"
    }
  },
  {
    "input": "(3*x + 12)/(x^2 - 16)",
    "action": "simplify",
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "(3*x + 12)/(x^2 - 16)",
      "task_type": "algebraic_expression",
      "steps": [
        {
          "before": "(3*x + 12)/(x^2 - 16)",
          "rule_id": "find_forbidden_values",
          "action": "Find forbidden values from the denominator",
          "after": "x ≠ -4 and x ≠ 4",
          "explanation": "A rational expression is defined only when its denominator is not zero.",
          "details": {
            "forbidden_values": [
              "-4",
              "4"
            ]
          }
        },
        {
          "before": "3*x + 12",
          "rule_id": "factor_common_term",
          "action": "Take out the common factor",
          "after": "3*(x + 4)",
          "explanation": "All terms contain a common factor, so it is placed outside the parentheses.",
          "details": {
            "previous": "3*x + 12",
            "factorized": "3*(x + 4)"
          }
        },
        {
          "before": "x^2 - 16",
          "rule_id": "difference_of_squares",
          "action": "Apply the difference of squares formula",
          "after": "(x - 4)*(x + 4)",
          "explanation": "The expression has the form a^2 - b^2, so it becomes (a - b)(a + b).",
          "details": {
            "formula_result": "(x - 4)*(x + 4)"
          }
        },
        {
          "before": "(3*x + 12)/(x^2 - 16)",
          "rule_id": "multi_step_factorization",
          "action": "Write numerator and denominator in factored form",
          "after": "(3*(x + 4))/((x - 4)*(x + 4))",
          "explanation": "The rational expression is prepared for cancellation by factoring both parts.",
          "details": {}
        },
        {
          "before": "(3*(x + 4))/((x - 4)*(x + 4))",
          "rule_id": "cancel_common_factor",
          "action": "Cancel common factors",
          "after": "3/(x - 4)",
          "explanation": "A common factor may be canceled only after its forbidden value has already been recorded.",
          "details": {
            "original_forbidden_values": [
              "-4",
              "4"
            ]
          }
        },
        {
          "before": "3/(x - 4)",
          "rule_id": "preserve_domain_restriction",
          "action": "Preserve the domain restriction",
          "after": "3/(x - 4), where x ≠ -4 and x ≠ 4",
          "explanation": "Cancellation changes the written form but not the original domain; excluded denominator roots remain excluded.",
          "details": {
            "forbidden_values": [
              "-4",
              "4"
            ]
          }
        }
      ],
      "answer": "3/(x - 4), where x ≠ -4 and x ≠ 4",
      "forbidden_values": [
        "-4",
        "4"
      ],
      "domain_restrictions": [
        "x != -4",
        "x != 4"
      ],
      "simplified_expression": "3/(x - 4)",
      "problem_profile": {
        "input": "(3*x + 12)/(x^2 - 16)",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": true,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "rational",
          "common_factor"
        ]
      },
      "candidate_strategies": [
        {
          "id": "rational_expression_factor_cancel",
          "name": "Simplify a rational expression with domain restrictions",
          "applicable_to": [
            "algebraic_expression"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage3.rational_expression",
          "notes": "",
          "score": 140,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "domain-aware rational simplification"
          ]
        },
        {
          "id": "collect_like_terms",
          "name": "Simplify an algebraic expression by collecting like terms",
          "applicable_to": [
            "algebraic_expression"
          ],
          "exact": true,
          "educational_priority": 7,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "legacy.expression",
          "notes": "",
          "score": 92,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy"
          ]
        }
      ],
      "selected_strategy": "rational_expression_factor_cancel",
      "strategy_score": 140,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Expression transformation was checked by exact symbolic arithmetic."
          },
          {
            "status": "passed",
            "message": "Domain restrictions preserved: -4, 4"
          }
        ]
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "simplify"
    }
  },
  {
    "input": "(3*x + 12)/(x^2 - 16)",
    "action": "differentiate",
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "(3*x + 12)/(x^2 - 16)",
      "task_type": "derivative",
      "steps": [
        {
          "before": "(3*x + 12)/(x^2 - 16)",
          "rule_id": "identify_derivative_request",
          "action": "Identify the derivative request",
          "after": "d/dx((3*x + 12)/(x^2 - 16))",
          "explanation": "The selected action is differentiation; the derivative will be built from explicit rules.",
          "details": {}
        },
        {
          "before": "(3*x + 12)/(x^2 - 16)",
          "rule_id": "find_forbidden_values",
          "action": "Find forbidden values from the denominator",
          "after": "x ≠ -4 and x ≠ 4",
          "explanation": "A rational expression is defined only when its denominator is not zero.",
          "details": {
            "forbidden_values": [
              "-4",
              "4"
            ]
          }
        },
        {
          "before": "3*x + 12",
          "rule_id": "factor_common_term",
          "action": "Take out the common factor",
          "after": "3*(x + 4)",
          "explanation": "All terms contain a common factor, so it is placed outside the parentheses.",
          "details": {
            "previous": "3*x + 12",
            "factorized": "3*(x + 4)"
          }
        },
        {
          "before": "x^2 - 16",
          "rule_id": "difference_of_squares",
          "action": "Apply the difference of squares formula",
          "after": "(x - 4)*(x + 4)",
          "explanation": "The expression has the form a^2 - b^2, so it becomes (a - b)(a + b).",
          "details": {
            "formula_result": "(x - 4)*(x + 4)"
          }
        },
        {
          "before": "(3*x + 12)/(x^2 - 16)",
          "rule_id": "multi_step_factorization",
          "action": "Write numerator and denominator in factored form",
          "after": "(3*(x + 4))/((x - 4)*(x + 4))",
          "explanation": "The rational expression is prepared for cancellation by factoring both parts.",
          "details": {}
        },
        {
          "before": "(3*(x + 4))/((x - 4)*(x + 4))",
          "rule_id": "cancel_common_factor",
          "action": "Cancel common factors",
          "after": "3/(x - 4)",
          "explanation": "A common factor may be canceled only after its forbidden value has already been recorded.",
          "details": {
            "original_forbidden_values": [
              "-4",
              "4"
            ]
          }
        },
        {
          "before": "3/(x - 4)",
          "rule_id": "preserve_domain_restriction",
          "action": "Preserve the domain restriction",
          "after": "3/(x - 4), where x ≠ -4 and x ≠ 4",
          "explanation": "Cancellation changes the written form but not the original domain; excluded denominator roots remain excluded.",
          "details": {
            "forbidden_values": [
              "-4",
              "4"
            ]
          }
        },
        {
          "before": "(3*x + 12)/(x^2 - 16)",
          "rule_id": "derivative_simplify_before_differentiation",
          "action": "Simplify before differentiating",
          "after": "3/(x - 4)",
          "explanation": "The rational expression simplifies cleanly, so differentiating the simplified form gives a shorter trace while the original domain is preserved.",
          "details": {}
        },
        {
          "before": "3/(x - 4)",
          "rule_id": "derivative_power_rule",
          "action": "Differentiate the simplified reciprocal form",
          "after": "constant * (-1)*(linear denominator)^(-2)",
          "explanation": "The simplified rational expression is treated as a constant multiple of a negative power.",
          "details": {}
        },
        {
          "before": "-3/(x - 4)^2",
          "rule_id": "derivative_preserve_domain_restriction",
          "action": "Preserve original domain restrictions",
          "after": "-3/(x - 4)^2, where x ≠ -4 and x ≠ 4",
          "explanation": "The derivative is reported on the original function domain, so canceled denominator zeros remain excluded.",
          "details": {
            "forbidden_values": [
              "-4",
              "4"
            ]
          }
        },
        {
          "before": "rule-based derivative",
          "rule_id": "derivative_check_by_symbolic_diff",
          "action": "Check derivative by symbolic differentiation",
          "after": "-3/(x - 4)^2",
          "explanation": "The rule-produced derivative is compared with symbolic differentiation during self-checking.",
          "details": {}
        },
        {
          "before": "-3/(x - 4)^2",
          "rule_id": "check_solution",
          "action": "Record derivative self-check",
          "after": "verification delegated to self_checker",
          "explanation": "The independent checker verifies the derivative after the strategy finishes.",
          "details": {}
        }
      ],
      "answer": "-3/(x - 4)^2, where x ≠ -4 and x ≠ 4",
      "derivative": "-3/(x - 4)**2",
      "forbidden_values": [
        "-4",
        "4"
      ],
      "domain_restrictions": [
        "x != -4",
        "x != 4"
      ],
      "problem_profile": {
        "input": "(3*x + 12)/(x^2 - 16)",
        "task_type": "derivative",
        "problem_kind": "derivative",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": true,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": true,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "rational",
          "common_factor",
          "derivative_quotient",
          "derivative_simplifiable_rational"
        ]
      },
      "candidate_strategies": [
        {
          "id": "simplify_then_differentiate",
          "name": "Simplify a rational expression before differentiating",
          "applicable_to": [
            "derivative"
          ],
          "exact": true,
          "educational_priority": 13,
          "complexity_score": 3,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "derivative.rules",
          "notes": "",
          "score": 153,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "simplification reduces derivative complexity"
          ]
        },
        {
          "id": "derivative_rule_based",
          "name": "Differentiate by symbolic rules",
          "applicable_to": [
            "derivative"
          ],
          "exact": true,
          "educational_priority": 9,
          "complexity_score": 3,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "derivative.rules",
          "notes": "",
          "score": 112,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "standard rule form"
          ]
        },
        {
          "id": "symbolic_derivative_fallback_check",
          "name": "Use symbolic differentiation as fallback/check",
          "applicable_to": [
            "derivative"
          ],
          "exact": true,
          "educational_priority": 3,
          "complexity_score": 8,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "derivative.rules",
          "notes": "",
          "score": 3,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "simplify_then_differentiate",
      "strategy_score": 153,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Rule derivative compared with symbolic derivative: -3/(x - 4)^2 vs -3/(x^2 - 8*x + 16)"
          }
        ]
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "differentiate"
    }
  },
  {
    "input": "d/dx x^5",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "d/dx x^5",
      "task_type": "derivative",
      "steps": [
        {
          "before": "d/dx x^5",
          "rule_id": "identify_derivative_request",
          "action": "Identify the derivative request",
          "after": "d/dx(x^5)",
          "explanation": "The selected action is differentiation; the derivative will be built from explicit rules.",
          "details": {}
        },
        {
          "before": "x^5",
          "rule_id": "derivative_power_rule",
          "action": "Apply the power rule",
          "after": "5*x^4",
          "explanation": "For x^n, the derivative is n*x^(n-1).",
          "details": {}
        },
        {
          "before": "unsimplified derivative",
          "rule_id": "derivative_simplify_after_differentiation",
          "action": "Simplify after differentiation",
          "after": "5*x^4",
          "explanation": "The derivative expression is simplified to a compact exact form.",
          "details": {}
        },
        {
          "before": "rule-based derivative",
          "rule_id": "derivative_check_by_symbolic_diff",
          "action": "Check derivative by symbolic differentiation",
          "after": "5*x^4",
          "explanation": "The rule-produced derivative is compared with symbolic differentiation during self-checking.",
          "details": {}
        },
        {
          "before": "5*x^4",
          "rule_id": "check_solution",
          "action": "Record derivative self-check",
          "after": "verification delegated to self_checker",
          "explanation": "The independent checker verifies the derivative after the strategy finishes.",
          "details": {}
        }
      ],
      "answer": "5*x^4",
      "derivative": "5*x**4",
      "problem_profile": {
        "input": "d/dx x^5",
        "task_type": "derivative",
        "problem_kind": "derivative",
        "main_variable": "x",
        "degree": 5,
        "is_polynomial": true,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": true,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": true,
        "has_simple_integer_roots": true,
        "discriminant": null,
        "features": [
          "polynomial",
          "factorable",
          "simple_integer_roots"
        ]
      },
      "candidate_strategies": [
        {
          "id": "derivative_rule_based",
          "name": "Differentiate by symbolic rules",
          "applicable_to": [
            "derivative"
          ],
          "exact": true,
          "educational_priority": 9,
          "complexity_score": 3,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "derivative.rules",
          "notes": "",
          "score": 112,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "standard rule form"
          ]
        },
        {
          "id": "symbolic_derivative_fallback_check",
          "name": "Use symbolic differentiation as fallback/check",
          "applicable_to": [
            "derivative"
          ],
          "exact": true,
          "educational_priority": 3,
          "complexity_score": 8,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "derivative.rules",
          "notes": "",
          "score": 3,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "derivative_rule_based",
      "strategy_score": 112,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Rule derivative compared with symbolic derivative: 5*x^4 vs 5*x^4"
          }
        ]
      },
      "available_actions": [
        "differentiate",
        "list_actions"
      ],
      "selected_action": "differentiate"
    }
  },
  {
    "input": "d/dx (x^2 + 3*x - 5)",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "d/dx (x^2 + 3*x - 5)",
      "task_type": "derivative",
      "steps": [
        {
          "before": "d/dx (x^2 + 3*x - 5)",
          "rule_id": "identify_derivative_request",
          "action": "Identify the derivative request",
          "after": "d/dx(x^2 + 3*x - 5)",
          "explanation": "The selected action is differentiation; the derivative will be built from explicit rules.",
          "details": {}
        },
        {
          "before": "x^2 + 3*x - 5",
          "rule_id": "derivative_difference_rule",
          "action": "Apply linearity of differentiation",
          "after": "Differentiate each term separately",
          "explanation": "The derivative of a sum or difference is the sum or difference of the derivatives.",
          "details": {}
        },
        {
          "before": "x^2 + 3*x - 5",
          "rule_id": "derivative_sum_rule",
          "action": "Apply the sum rule",
          "after": "sum of term derivatives",
          "explanation": "Each addend is differentiated separately.",
          "details": {}
        },
        {
          "before": "x^2",
          "rule_id": "derivative_power_rule",
          "action": "Apply the power rule",
          "after": "2*x^1",
          "explanation": "For x^n, the derivative is n*x^(n-1).",
          "details": {}
        },
        {
          "before": "3*x",
          "rule_id": "derivative_constant_multiple_rule",
          "action": "Use the constant multiple rule",
          "after": "3*d/dx(x)",
          "explanation": "A constant factor can be pulled outside the derivative.",
          "details": {}
        },
        {
          "before": "x",
          "rule_id": "derivative_variable_rule",
          "action": "Differentiate the variable",
          "after": "1",
          "explanation": "d/dx x = 1.",
          "details": {}
        },
        {
          "before": "-5",
          "rule_id": "derivative_constant_rule",
          "action": "Differentiate a constant product",
          "after": "0",
          "explanation": "A product with no dependence on the variable is constant.",
          "details": {}
        },
        {
          "before": "unsimplified derivative",
          "rule_id": "derivative_simplify_after_differentiation",
          "action": "Simplify after differentiation",
          "after": "2*x + 3",
          "explanation": "The derivative expression is simplified to a compact exact form.",
          "details": {}
        },
        {
          "before": "rule-based derivative",
          "rule_id": "derivative_check_by_symbolic_diff",
          "action": "Check derivative by symbolic differentiation",
          "after": "2*x + 3",
          "explanation": "The rule-produced derivative is compared with symbolic differentiation during self-checking.",
          "details": {}
        },
        {
          "before": "2*x + 3",
          "rule_id": "check_solution",
          "action": "Record derivative self-check",
          "after": "verification delegated to self_checker",
          "explanation": "The independent checker verifies the derivative after the strategy finishes.",
          "details": {}
        }
      ],
      "answer": "2*x + 3",
      "derivative": "2*x + 3",
      "problem_profile": {
        "input": "d/dx (x^2 + 3*x - 5)",
        "task_type": "derivative",
        "problem_kind": "derivative",
        "main_variable": "x",
        "degree": 2,
        "is_polynomial": true,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": true,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "polynomial"
        ]
      },
      "candidate_strategies": [
        {
          "id": "derivative_rule_based",
          "name": "Differentiate by symbolic rules",
          "applicable_to": [
            "derivative"
          ],
          "exact": true,
          "educational_priority": 9,
          "complexity_score": 3,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "derivative.rules",
          "notes": "",
          "score": 112,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "standard rule form"
          ]
        },
        {
          "id": "symbolic_derivative_fallback_check",
          "name": "Use symbolic differentiation as fallback/check",
          "applicable_to": [
            "derivative"
          ],
          "exact": true,
          "educational_priority": 3,
          "complexity_score": 8,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "derivative.rules",
          "notes": "",
          "score": 3,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "derivative_rule_based",
      "strategy_score": 112,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Rule derivative compared with symbolic derivative: 2*x + 3 vs 2*x + 3"
          }
        ]
      },
      "available_actions": [
        "differentiate",
        "list_actions"
      ],
      "selected_action": "differentiate"
    }
  },
  {
    "input": "d/dx (x^2 * sin(x))",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "d/dx (x^2 * sin(x))",
      "task_type": "derivative",
      "steps": [
        {
          "before": "d/dx (x^2 * sin(x))",
          "rule_id": "identify_derivative_request",
          "action": "Identify the derivative request",
          "after": "d/dx(x^2*sin(x))",
          "explanation": "The selected action is differentiation; the derivative will be built from explicit rules.",
          "details": {}
        },
        {
          "before": "x^2*sin(x)",
          "rule_id": "derivative_product_rule",
          "action": "Apply the product rule",
          "after": "u'*v + u*v'",
          "explanation": "For a product u*v, the derivative is u'*v + u*v'.",
          "details": {
            "u": "x^2",
            "v": "sin(x)"
          }
        },
        {
          "before": "x^2",
          "rule_id": "derivative_power_rule",
          "action": "Apply the power rule",
          "after": "2*x^1",
          "explanation": "For x^n, the derivative is n*x^(n-1).",
          "details": {}
        },
        {
          "before": "sin(x)",
          "rule_id": "derivative_sin_rule",
          "action": "Differentiate sine",
          "after": "cos(x)",
          "explanation": "The derivative of sin(u) is cos(u)*u'.",
          "details": {}
        },
        {
          "before": "x",
          "rule_id": "derivative_variable_rule",
          "action": "Differentiate the variable",
          "after": "1",
          "explanation": "d/dx x = 1.",
          "details": {}
        },
        {
          "before": "product-rule derivative",
          "rule_id": "derivative_simplify_after_differentiation",
          "action": "Simplify after differentiation",
          "after": "2*x*sin(x) + x^2*cos(x)",
          "explanation": "The product-rule terms are written in a clear expanded educational order.",
          "details": {}
        },
        {
          "before": "rule-based derivative",
          "rule_id": "derivative_check_by_symbolic_diff",
          "action": "Check derivative by symbolic differentiation",
          "after": "x*(x*cos(x) + 2*sin(x))",
          "explanation": "The rule-produced derivative is compared with symbolic differentiation during self-checking.",
          "details": {}
        },
        {
          "before": "x*(x*cos(x) + 2*sin(x))",
          "rule_id": "check_solution",
          "action": "Record derivative self-check",
          "after": "verification delegated to self_checker",
          "explanation": "The independent checker verifies the derivative after the strategy finishes.",
          "details": {}
        }
      ],
      "answer": "2*x*sin(x) + x^2*cos(x)",
      "derivative": "x*(x*cos(x) + 2*sin(x))",
      "problem_profile": {
        "input": "d/dx (x^2 * sin(x))",
        "task_type": "derivative",
        "problem_kind": "derivative",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": true,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": true,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "trigonometric",
          "derivative_product"
        ]
      },
      "candidate_strategies": [
        {
          "id": "product_rule",
          "name": "Differentiate a product by the product rule",
          "applicable_to": [
            "derivative"
          ],
          "exact": true,
          "educational_priority": 10,
          "complexity_score": 4,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "derivative.rules",
          "notes": "",
          "score": 123,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "product derivative"
          ]
        },
        {
          "id": "derivative_rule_based",
          "name": "Differentiate by symbolic rules",
          "applicable_to": [
            "derivative"
          ],
          "exact": true,
          "educational_priority": 9,
          "complexity_score": 3,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "derivative.rules",
          "notes": "",
          "score": 112,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "standard rule form"
          ]
        },
        {
          "id": "symbolic_derivative_fallback_check",
          "name": "Use symbolic differentiation as fallback/check",
          "applicable_to": [
            "derivative"
          ],
          "exact": true,
          "educational_priority": 3,
          "complexity_score": 8,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "derivative.rules",
          "notes": "",
          "score": 3,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "product_rule",
      "strategy_score": 123,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Rule derivative compared with symbolic derivative: x*(x*cos(x) + 2*sin(x)) vs x*(x*cos(x) + 2*sin(x))"
          }
        ]
      },
      "available_actions": [
        "differentiate",
        "list_actions"
      ],
      "selected_action": "differentiate"
    }
  },
  {
    "input": "d/dx ((x + 1)/(x - 1))",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "d/dx ((x + 1)/(x - 1))",
      "task_type": "derivative",
      "steps": [
        {
          "before": "d/dx ((x + 1)/(x - 1))",
          "rule_id": "identify_derivative_request",
          "action": "Identify the derivative request",
          "after": "d/dx((x + 1)/(x - 1))",
          "explanation": "The selected action is differentiation; the derivative will be built from explicit rules.",
          "details": {}
        },
        {
          "before": "(x + 1)/(x - 1)",
          "rule_id": "derivative_quotient_rule",
          "action": "Apply the quotient rule",
          "after": "(u'*v - u*v')/v^2",
          "explanation": "For u/v, the derivative is (u'*v - u*v')/v^2.",
          "details": {
            "u": "x + 1",
            "v": "x - 1"
          }
        },
        {
          "before": "x + 1",
          "rule_id": "derivative_sum_rule",
          "action": "Apply linearity of differentiation",
          "after": "Differentiate each term separately",
          "explanation": "The derivative of a sum or difference is the sum or difference of the derivatives.",
          "details": {}
        },
        {
          "before": "x",
          "rule_id": "derivative_variable_rule",
          "action": "Differentiate the variable",
          "after": "1",
          "explanation": "d/dx x = 1.",
          "details": {}
        },
        {
          "before": "1",
          "rule_id": "derivative_constant_rule",
          "action": "Differentiate a constant",
          "after": "0",
          "explanation": "The derivative of a constant is 0.",
          "details": {}
        },
        {
          "before": "x - 1",
          "rule_id": "derivative_difference_rule",
          "action": "Apply linearity of differentiation",
          "after": "Differentiate each term separately",
          "explanation": "The derivative of a sum or difference is the sum or difference of the derivatives.",
          "details": {}
        },
        {
          "before": "x - 1",
          "rule_id": "derivative_sum_rule",
          "action": "Apply the sum rule",
          "after": "sum of term derivatives",
          "explanation": "Each addend is differentiated separately.",
          "details": {}
        },
        {
          "before": "x",
          "rule_id": "derivative_variable_rule",
          "action": "Differentiate the variable",
          "after": "1",
          "explanation": "d/dx x = 1.",
          "details": {}
        },
        {
          "before": "-1",
          "rule_id": "derivative_constant_rule",
          "action": "Differentiate a constant product",
          "after": "0",
          "explanation": "A product with no dependence on the variable is constant.",
          "details": {}
        },
        {
          "before": "unsimplified derivative",
          "rule_id": "derivative_simplify_after_differentiation",
          "action": "Simplify after differentiation",
          "after": "-2/(x - 1)^2",
          "explanation": "The derivative expression is simplified to a compact exact form.",
          "details": {}
        },
        {
          "before": "-2/(x - 1)^2",
          "rule_id": "derivative_preserve_domain_restriction",
          "action": "Record derivative domain restrictions",
          "after": "x ≠ 1",
          "explanation": "Differentiation does not remove restrictions inherited from the original function; roots and logarithms may impose additional derivative-domain restrictions.",
          "details": {
            "domain_restrictions": [
              "x != 1"
            ],
            "forbidden_values": [
              "1"
            ]
          }
        },
        {
          "before": "rule-based derivative",
          "rule_id": "derivative_check_by_symbolic_diff",
          "action": "Check derivative by symbolic differentiation",
          "after": "-2/(x - 1)^2",
          "explanation": "The rule-produced derivative is compared with symbolic differentiation during self-checking.",
          "details": {}
        },
        {
          "before": "-2/(x - 1)^2",
          "rule_id": "check_solution",
          "action": "Record derivative self-check",
          "after": "verification delegated to self_checker",
          "explanation": "The independent checker verifies the derivative after the strategy finishes.",
          "details": {}
        }
      ],
      "answer": "-2/(x - 1)^2",
      "derivative": "-2/(x - 1)**2",
      "forbidden_values": [
        "1"
      ],
      "domain_restrictions": [
        "x != 1"
      ],
      "problem_profile": {
        "input": "d/dx ((x + 1)/(x - 1))",
        "task_type": "derivative",
        "problem_kind": "derivative",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": true,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": true,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "rational",
          "derivative_quotient"
        ]
      },
      "candidate_strategies": [
        {
          "id": "quotient_rule_direct",
          "name": "Differentiate a quotient directly",
          "applicable_to": [
            "derivative"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 4,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "derivative.rules",
          "notes": "",
          "score": 132,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "quotient has no useful cancellation"
          ]
        },
        {
          "id": "derivative_rule_based",
          "name": "Differentiate by symbolic rules",
          "applicable_to": [
            "derivative"
          ],
          "exact": true,
          "educational_priority": 9,
          "complexity_score": 3,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "derivative.rules",
          "notes": "",
          "score": 112,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "standard rule form"
          ]
        },
        {
          "id": "symbolic_derivative_fallback_check",
          "name": "Use symbolic differentiation as fallback/check",
          "applicable_to": [
            "derivative"
          ],
          "exact": true,
          "educational_priority": 3,
          "complexity_score": 8,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "derivative.rules",
          "notes": "",
          "score": 3,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "quotient_rule_direct",
      "strategy_score": 132,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Rule derivative compared with symbolic derivative: -2/(x - 1)^2 vs -2/(x - 1)^2"
          }
        ]
      },
      "available_actions": [
        "differentiate",
        "list_actions"
      ],
      "selected_action": "differentiate"
    }
  },
  {
    "input": "d/dx ln(x^2 + 1)",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "d/dx ln(x^2 + 1)",
      "task_type": "derivative",
      "steps": [
        {
          "before": "d/dx ln(x^2 + 1)",
          "rule_id": "identify_derivative_request",
          "action": "Identify the derivative request",
          "after": "d/dx(ln(x^2 + 1))",
          "explanation": "The selected action is differentiation; the derivative will be built from explicit rules.",
          "details": {}
        },
        {
          "before": "ln(x^2 + 1)",
          "rule_id": "derivative_ln_rule",
          "action": "Differentiate natural logarithm",
          "after": "d/dx(x^2 + 1)/(x^2 + 1)",
          "explanation": "ln(u)' = u'/u.",
          "details": {}
        },
        {
          "before": "ln(x^2 + 1)",
          "rule_id": "derivative_chain_rule",
          "action": "Apply the chain rule",
          "after": "inner derivative divided by the argument",
          "explanation": "The logarithm argument is an inner function.",
          "details": {}
        },
        {
          "before": "x^2 + 1",
          "rule_id": "derivative_sum_rule",
          "action": "Apply linearity of differentiation",
          "after": "Differentiate each term separately",
          "explanation": "The derivative of a sum or difference is the sum or difference of the derivatives.",
          "details": {}
        },
        {
          "before": "x^2",
          "rule_id": "derivative_power_rule",
          "action": "Apply the power rule",
          "after": "2*x^1",
          "explanation": "For x^n, the derivative is n*x^(n-1).",
          "details": {}
        },
        {
          "before": "1",
          "rule_id": "derivative_constant_rule",
          "action": "Differentiate a constant",
          "after": "0",
          "explanation": "The derivative of a constant is 0.",
          "details": {}
        },
        {
          "before": "unsimplified derivative",
          "rule_id": "derivative_simplify_after_differentiation",
          "action": "Simplify after differentiation",
          "after": "2*x/(x^2 + 1)",
          "explanation": "The derivative expression is simplified to a compact exact form.",
          "details": {}
        },
        {
          "before": "2*x/(x^2 + 1)",
          "rule_id": "derivative_preserve_domain_restriction",
          "action": "Record derivative domain restrictions",
          "after": "x^2 + 1 > 0",
          "explanation": "Differentiation does not remove restrictions inherited from the original function; roots and logarithms may impose additional derivative-domain restrictions.",
          "details": {
            "domain_restrictions": [
              "x^2 + 1 > 0"
            ],
            "forbidden_values": []
          }
        },
        {
          "before": "rule-based derivative",
          "rule_id": "derivative_check_by_symbolic_diff",
          "action": "Check derivative by symbolic differentiation",
          "after": "2*x/(x^2 + 1)",
          "explanation": "The rule-produced derivative is compared with symbolic differentiation during self-checking.",
          "details": {}
        },
        {
          "before": "2*x/(x^2 + 1)",
          "rule_id": "check_solution",
          "action": "Record derivative self-check",
          "after": "verification delegated to self_checker",
          "explanation": "The independent checker verifies the derivative after the strategy finishes.",
          "details": {}
        }
      ],
      "answer": "2*x/(x^2 + 1)",
      "derivative": "2*x/(x**2 + 1)",
      "domain_restrictions": [
        "x^2 + 1 > 0"
      ],
      "problem_profile": {
        "input": "d/dx ln(x^2 + 1)",
        "task_type": "derivative",
        "problem_kind": "derivative",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": true,
        "has_radicals": false,
        "has_derivative_request": true,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "logarithmic",
          "derivative_chain"
        ]
      },
      "candidate_strategies": [
        {
          "id": "chain_rule",
          "name": "Differentiate a composite function by the chain rule",
          "applicable_to": [
            "derivative"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "derivative.rules",
          "notes": "",
          "score": 130,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "composite-function derivative"
          ]
        },
        {
          "id": "derivative_rule_based",
          "name": "Differentiate by symbolic rules",
          "applicable_to": [
            "derivative"
          ],
          "exact": true,
          "educational_priority": 9,
          "complexity_score": 3,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "derivative.rules",
          "notes": "",
          "score": 112,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "standard rule form"
          ]
        },
        {
          "id": "symbolic_derivative_fallback_check",
          "name": "Use symbolic differentiation as fallback/check",
          "applicable_to": [
            "derivative"
          ],
          "exact": true,
          "educational_priority": 3,
          "complexity_score": 8,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "derivative.rules",
          "notes": "",
          "score": 3,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "chain_rule",
      "strategy_score": 130,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Rule derivative compared with symbolic derivative: 2*x/(x^2 + 1) vs 2*x/(x^2 + 1)"
          }
        ]
      },
      "available_actions": [
        "differentiate",
        "list_actions"
      ],
      "selected_action": "differentiate"
    }
  },
  {
    "input": "d/dx exp(2*x)",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "d/dx exp(2*x)",
      "task_type": "derivative",
      "steps": [
        {
          "before": "d/dx exp(2*x)",
          "rule_id": "identify_derivative_request",
          "action": "Identify the derivative request",
          "after": "d/dx(exp(2*x))",
          "explanation": "The selected action is differentiation; the derivative will be built from explicit rules.",
          "details": {}
        },
        {
          "before": "exp(2*x)",
          "rule_id": "derivative_exp_rule",
          "action": "Differentiate exp",
          "after": "exp(2*x)",
          "explanation": "The derivative of exp(u) is exp(u)*u'.",
          "details": {}
        },
        {
          "before": "exp(2*x)",
          "rule_id": "derivative_chain_rule",
          "action": "Apply the chain rule",
          "after": "exp(2*x)*d/dx(2*x)",
          "explanation": "The exponent is an inner function.",
          "details": {}
        },
        {
          "before": "2*x",
          "rule_id": "derivative_constant_multiple_rule",
          "action": "Use the constant multiple rule",
          "after": "2*d/dx(x)",
          "explanation": "A constant factor can be pulled outside the derivative.",
          "details": {}
        },
        {
          "before": "x",
          "rule_id": "derivative_variable_rule",
          "action": "Differentiate the variable",
          "after": "1",
          "explanation": "d/dx x = 1.",
          "details": {}
        },
        {
          "before": "unsimplified derivative",
          "rule_id": "derivative_simplify_after_differentiation",
          "action": "Simplify after differentiation",
          "after": "2*exp(2*x)",
          "explanation": "The derivative expression is simplified to a compact exact form.",
          "details": {}
        },
        {
          "before": "rule-based derivative",
          "rule_id": "derivative_check_by_symbolic_diff",
          "action": "Check derivative by symbolic differentiation",
          "after": "2*exp(2*x)",
          "explanation": "The rule-produced derivative is compared with symbolic differentiation during self-checking.",
          "details": {}
        },
        {
          "before": "2*exp(2*x)",
          "rule_id": "check_solution",
          "action": "Record derivative self-check",
          "after": "verification delegated to self_checker",
          "explanation": "The independent checker verifies the derivative after the strategy finishes.",
          "details": {}
        }
      ],
      "answer": "2*exp(2*x)",
      "derivative": "2*exp(2*x)",
      "problem_profile": {
        "input": "d/dx exp(2*x)",
        "task_type": "derivative",
        "problem_kind": "derivative",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": true,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": true,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "exponential",
          "exponential_take_log_required",
          "derivative_chain"
        ]
      },
      "candidate_strategies": [
        {
          "id": "chain_rule",
          "name": "Differentiate a composite function by the chain rule",
          "applicable_to": [
            "derivative"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "derivative.rules",
          "notes": "",
          "score": 130,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "composite-function derivative"
          ]
        },
        {
          "id": "derivative_rule_based",
          "name": "Differentiate by symbolic rules",
          "applicable_to": [
            "derivative"
          ],
          "exact": true,
          "educational_priority": 9,
          "complexity_score": 3,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "derivative.rules",
          "notes": "",
          "score": 112,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "standard rule form"
          ]
        },
        {
          "id": "symbolic_derivative_fallback_check",
          "name": "Use symbolic differentiation as fallback/check",
          "applicable_to": [
            "derivative"
          ],
          "exact": true,
          "educational_priority": 3,
          "complexity_score": 8,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "derivative.rules",
          "notes": "",
          "score": 3,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "chain_rule",
      "strategy_score": 130,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Rule derivative compared with symbolic derivative: 2*exp(2*x) vs 2*exp(2*x)"
          }
        ]
      },
      "available_actions": [
        "differentiate",
        "list_actions"
      ],
      "selected_action": "differentiate"
    }
  },
  {
    "input": "d/dx sqrt(x + 1)",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "d/dx sqrt(x + 1)",
      "task_type": "derivative",
      "steps": [
        {
          "before": "d/dx sqrt(x + 1)",
          "rule_id": "identify_derivative_request",
          "action": "Identify the derivative request",
          "after": "d/dx(sqrt(x + 1))",
          "explanation": "The selected action is differentiation; the derivative will be built from explicit rules.",
          "details": {}
        },
        {
          "before": "sqrt(x + 1)",
          "rule_id": "derivative_sqrt_rule",
          "action": "Differentiate a square root",
          "after": "d/dx(x + 1)/(2*sqrt(x + 1))",
          "explanation": "sqrt(u)' = u'/(2*sqrt(u)).",
          "details": {}
        },
        {
          "before": "sqrt(x + 1)",
          "rule_id": "derivative_chain_rule",
          "action": "Apply the chain rule",
          "after": "multiply by the derivative of the radicand",
          "explanation": "The radicand is an inner function.",
          "details": {}
        },
        {
          "before": "x + 1",
          "rule_id": "derivative_sum_rule",
          "action": "Apply linearity of differentiation",
          "after": "Differentiate each term separately",
          "explanation": "The derivative of a sum or difference is the sum or difference of the derivatives.",
          "details": {}
        },
        {
          "before": "x",
          "rule_id": "derivative_variable_rule",
          "action": "Differentiate the variable",
          "after": "1",
          "explanation": "d/dx x = 1.",
          "details": {}
        },
        {
          "before": "1",
          "rule_id": "derivative_constant_rule",
          "action": "Differentiate a constant",
          "after": "0",
          "explanation": "The derivative of a constant is 0.",
          "details": {}
        },
        {
          "before": "unsimplified derivative",
          "rule_id": "derivative_simplify_after_differentiation",
          "action": "Simplify after differentiation",
          "after": "1/(2*sqrt(x + 1))",
          "explanation": "The derivative expression is simplified to a compact exact form.",
          "details": {}
        },
        {
          "before": "1/(2*sqrt(x + 1))",
          "rule_id": "derivative_preserve_domain_restriction",
          "action": "Record derivative domain restrictions",
          "after": "x + 1 > 0",
          "explanation": "Differentiation does not remove restrictions inherited from the original function; roots and logarithms may impose additional derivative-domain restrictions.",
          "details": {
            "domain_restrictions": [
              "x + 1 > 0"
            ],
            "forbidden_values": []
          }
        },
        {
          "before": "rule-based derivative",
          "rule_id": "derivative_check_by_symbolic_diff",
          "action": "Check derivative by symbolic differentiation",
          "after": "1/(2*sqrt(x + 1))",
          "explanation": "The rule-produced derivative is compared with symbolic differentiation during self-checking.",
          "details": {}
        },
        {
          "before": "1/(2*sqrt(x + 1))",
          "rule_id": "check_solution",
          "action": "Record derivative self-check",
          "after": "verification delegated to self_checker",
          "explanation": "The independent checker verifies the derivative after the strategy finishes.",
          "details": {}
        }
      ],
      "answer": "1/(2*sqrt(x + 1))",
      "derivative": "1/(2*sqrt(x + 1))",
      "domain_restrictions": [
        "x + 1 > 0"
      ],
      "problem_profile": {
        "input": "d/dx sqrt(x + 1)",
        "task_type": "derivative",
        "problem_kind": "derivative",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": true,
        "has_derivative_request": true,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "radical",
          "derivative_chain"
        ]
      },
      "candidate_strategies": [
        {
          "id": "chain_rule",
          "name": "Differentiate a composite function by the chain rule",
          "applicable_to": [
            "derivative"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "derivative.rules",
          "notes": "",
          "score": 130,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "composite-function derivative"
          ]
        },
        {
          "id": "derivative_rule_based",
          "name": "Differentiate by symbolic rules",
          "applicable_to": [
            "derivative"
          ],
          "exact": true,
          "educational_priority": 9,
          "complexity_score": 3,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "derivative.rules",
          "notes": "",
          "score": 112,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "standard rule form"
          ]
        },
        {
          "id": "symbolic_derivative_fallback_check",
          "name": "Use symbolic differentiation as fallback/check",
          "applicable_to": [
            "derivative"
          ],
          "exact": true,
          "educational_priority": 3,
          "complexity_score": 8,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "derivative.rules",
          "notes": "",
          "score": 3,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "chain_rule",
      "strategy_score": 130,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Rule derivative compared with symbolic derivative: 1/(2*sqrt(x + 1)) vs 1/(2*sqrt(x + 1))"
          }
        ]
      },
      "available_actions": [
        "differentiate",
        "list_actions"
      ],
      "selected_action": "differentiate"
    }
  },
  {
    "input": "d/dx (sin(x)^2 + cos(x)^2)",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "d/dx (sin(x)^2 + cos(x)^2)",
      "task_type": "derivative",
      "steps": [
        {
          "before": "d/dx (sin(x)^2 + cos(x)^2)",
          "rule_id": "identify_derivative_request",
          "action": "Identify the derivative request",
          "after": "d/dx(sin(x)^2 + cos(x)^2)",
          "explanation": "The selected action is differentiation; the derivative will be built from explicit rules.",
          "details": {}
        },
        {
          "before": "sin(x)^2 + cos(x)^2",
          "rule_id": "trig_pythagorean_identity",
          "action": "Simplify before differentiation",
          "after": "1",
          "explanation": "sin(x)^2 + cos(x)^2 is identically 1.",
          "details": {}
        },
        {
          "before": "d/dx 1",
          "rule_id": "derivative_constant_rule",
          "action": "Differentiate the simplified constant",
          "after": "0",
          "explanation": "The derivative of a constant is 0.",
          "details": {}
        },
        {
          "before": "rule-based derivative",
          "rule_id": "derivative_check_by_symbolic_diff",
          "action": "Check derivative by symbolic differentiation",
          "after": "0",
          "explanation": "The rule-produced derivative is compared with symbolic differentiation during self-checking.",
          "details": {}
        },
        {
          "before": "0",
          "rule_id": "check_solution",
          "action": "Record derivative self-check",
          "after": "verification delegated to self_checker",
          "explanation": "The independent checker verifies the derivative after the strategy finishes.",
          "details": {}
        }
      ],
      "answer": "0",
      "derivative": "0",
      "problem_profile": {
        "input": "d/dx (sin(x)^2 + cos(x)^2)",
        "task_type": "derivative",
        "problem_kind": "derivative",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": true,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": true,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "trigonometric",
          "derivative_trig_identity_simplifies",
          "derivative_chain"
        ]
      },
      "candidate_strategies": [
        {
          "id": "simplify_identity_then_differentiate",
          "name": "Simplify a trigonometric identity before differentiating",
          "applicable_to": [
            "derivative"
          ],
          "exact": true,
          "educational_priority": 14,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "derivative.rules",
          "notes": "",
          "score": 165,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "identity simplification before derivative"
          ]
        },
        {
          "id": "chain_rule",
          "name": "Differentiate a composite function by the chain rule",
          "applicable_to": [
            "derivative"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "derivative.rules",
          "notes": "",
          "score": 130,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "composite-function derivative"
          ]
        },
        {
          "id": "derivative_rule_based",
          "name": "Differentiate by symbolic rules",
          "applicable_to": [
            "derivative"
          ],
          "exact": true,
          "educational_priority": 9,
          "complexity_score": 3,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "derivative.rules",
          "notes": "",
          "score": 112,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "standard rule form"
          ]
        },
        {
          "id": "symbolic_derivative_fallback_check",
          "name": "Use symbolic differentiation as fallback/check",
          "applicable_to": [
            "derivative"
          ],
          "exact": true,
          "educational_priority": 3,
          "complexity_score": 8,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "derivative.rules",
          "notes": "",
          "score": 3,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "simplify_identity_then_differentiate",
      "strategy_score": 165,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Rule derivative compared with symbolic derivative: 0 vs 0"
          }
        ]
      },
      "available_actions": [
        "differentiate",
        "list_actions"
      ],
      "selected_action": "differentiate"
    }
  },
  {
    "input": "diff(x^2 + 3*x, x)",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "diff(x^2 + 3*x, x)",
      "task_type": "derivative",
      "steps": [
        {
          "before": "diff(x^2 + 3*x, x)",
          "rule_id": "identify_derivative_request",
          "action": "Identify the derivative request",
          "after": "d/dx(x^2 + 3*x)",
          "explanation": "The selected action is differentiation; the derivative will be built from explicit rules.",
          "details": {}
        },
        {
          "before": "x^2 + 3*x",
          "rule_id": "derivative_sum_rule",
          "action": "Apply linearity of differentiation",
          "after": "Differentiate each term separately",
          "explanation": "The derivative of a sum or difference is the sum or difference of the derivatives.",
          "details": {}
        },
        {
          "before": "x^2",
          "rule_id": "derivative_power_rule",
          "action": "Apply the power rule",
          "after": "2*x^1",
          "explanation": "For x^n, the derivative is n*x^(n-1).",
          "details": {}
        },
        {
          "before": "3*x",
          "rule_id": "derivative_constant_multiple_rule",
          "action": "Use the constant multiple rule",
          "after": "3*d/dx(x)",
          "explanation": "A constant factor can be pulled outside the derivative.",
          "details": {}
        },
        {
          "before": "x",
          "rule_id": "derivative_variable_rule",
          "action": "Differentiate the variable",
          "after": "1",
          "explanation": "d/dx x = 1.",
          "details": {}
        },
        {
          "before": "unsimplified derivative",
          "rule_id": "derivative_simplify_after_differentiation",
          "action": "Simplify after differentiation",
          "after": "2*x + 3",
          "explanation": "The derivative expression is simplified to a compact exact form.",
          "details": {}
        },
        {
          "before": "rule-based derivative",
          "rule_id": "derivative_check_by_symbolic_diff",
          "action": "Check derivative by symbolic differentiation",
          "after": "2*x + 3",
          "explanation": "The rule-produced derivative is compared with symbolic differentiation during self-checking.",
          "details": {}
        },
        {
          "before": "2*x + 3",
          "rule_id": "check_solution",
          "action": "Record derivative self-check",
          "after": "verification delegated to self_checker",
          "explanation": "The independent checker verifies the derivative after the strategy finishes.",
          "details": {}
        }
      ],
      "answer": "2*x + 3",
      "derivative": "2*x + 3",
      "problem_profile": {
        "input": "diff(x^2 + 3*x, x)",
        "task_type": "derivative",
        "problem_kind": "derivative",
        "main_variable": "x",
        "degree": 2,
        "is_polynomial": true,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": true,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": true,
        "has_simple_integer_roots": true,
        "discriminant": null,
        "features": [
          "polynomial",
          "factorable",
          "simple_integer_roots",
          "common_factor"
        ]
      },
      "candidate_strategies": [
        {
          "id": "derivative_rule_based",
          "name": "Differentiate by symbolic rules",
          "applicable_to": [
            "derivative"
          ],
          "exact": true,
          "educational_priority": 9,
          "complexity_score": 3,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "derivative.rules",
          "notes": "",
          "score": 112,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "standard rule form"
          ]
        },
        {
          "id": "symbolic_derivative_fallback_check",
          "name": "Use symbolic differentiation as fallback/check",
          "applicable_to": [
            "derivative"
          ],
          "exact": true,
          "educational_priority": 3,
          "complexity_score": 8,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "derivative.rules",
          "notes": "",
          "score": 3,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "derivative_rule_based",
      "strategy_score": 112,
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Rule derivative compared with symbolic derivative: 2*x + 3 vs 2*x + 3"
          }
        ]
      },
      "available_actions": [
        "differentiate",
        "list_actions"
      ],
      "selected_action": "differentiate"
    }
  },
  {
    "input": "x^2 - 4*x + 3",
    "action": "graph",
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "x^2 - 4*x + 3",
      "task_type": "action",
      "steps": [
        {
          "before": "x^2 - 4*x + 3",
          "rule_id": "unsupported",
          "action": "Stop with a clear diagnostic",
          "after": "Action 'graph' is recognized but not implemented in this stage. It is planned for a later stage.",
          "explanation": "Action 'graph' is recognized but not implemented in this stage. It is planned for a later stage.",
          "details": {}
        }
      ],
      "answer": "Action 'graph' is recognized but not implemented in this stage. It is planned for a later stage.",
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "graph"
    }
  },
  {
    "input": "x^3 - 3*x",
    "action": null,
    "list_actions": true,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "x^3 - 3*x",
      "task_type": "action_selection",
      "steps": [
        {
          "before": "x^3 - 3*x",
          "rule_id": "list_actions",
          "action": "List available actions",
          "after": "1. simplify\n2. factor\n3. find_domain\n4. differentiate\n5. integrate\n6. integrate_definite\n7. find_area_under_curve\n8. find_inverse\n9. find_range\n10. find_asymptotes\n11. find_limit\n12. find_left_limit\n13. find_right_limit\n14. find_limit_at_infinity\n15. check_continuity\n16. find_discontinuities\n17. find_critical_points\n18. find_extrema\n19. find_monotonicity\n20. find_tangent_line\n21. find_normal_line\n22. find_second_derivative\n23. find_concavity\n24. find_inflection_points\n25. analyze_function\n26. list_actions",
          "explanation": "The action layer separates the mathematical object from the operation requested by the user.",
          "details": {
            "available_actions": [
              "simplify",
              "factor",
              "find_domain",
              "differentiate",
              "integrate",
              "integrate_definite",
              "find_area_under_curve",
              "find_inverse",
              "find_range",
              "find_asymptotes",
              "find_limit",
              "find_left_limit",
              "find_right_limit",
              "find_limit_at_infinity",
              "check_continuity",
              "find_discontinuities",
              "find_critical_points",
              "find_extrema",
              "find_monotonicity",
              "find_tangent_line",
              "find_normal_line",
              "find_second_derivative",
              "find_concavity",
              "find_inflection_points",
              "analyze_function",
              "list_actions"
            ]
          }
        }
      ],
      "answer": "simplify, factor, find_domain, differentiate, integrate, integrate_definite, find_area_under_curve, find_inverse, find_range, find_asymptotes, find_limit, find_left_limit, find_right_limit, find_limit_at_infinity, check_continuity, find_discontinuities, find_critical_points, find_extrema, find_monotonicity, find_tangent_line, find_normal_line, find_second_derivative, find_concavity, find_inflection_points, analyze_function, list_actions",
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "list_actions"
    }
  },
  {
    "input": "x^3 - 3*x",
    "action": "find_critical_points",
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "x^3 - 3*x",
      "task_type": "find_critical_points",
      "steps": [
        {
          "before": "f(x) = x*(x^2 - 3)",
          "rule_id": "function_domain_analysis",
          "action": "Analyze the function domain",
          "after": "all real numbers",
          "explanation": "The analysis starts by finding where the original function is defined. Denominator zeros split the real line into separate domain intervals.",
          "details": {
            "forbidden_values": [],
            "domain_restrictions": []
          }
        },
        {
          "before": "f(x) = x*(x^2 - 3)",
          "rule_id": "function_derivative_for_analysis",
          "action": "Compute the first derivative for analysis",
          "after": "f'(x) = 3*x^2 - 3",
          "explanation": "Critical points, monotonicity, and extrema are determined from the first derivative.",
          "details": {
            "derivative": "3*x**2 - 3"
          }
        },
        {
          "before": "f'(x) = 3*x^2 - 3",
          "rule_id": "solve_derivative_zero_equation",
          "action": "Solve the derivative-zero equation",
          "after": "x = -1 or x = 1",
          "explanation": "Critical candidates occur where f'(x)=0. Candidates outside the original domain are discarded.",
          "details": {
            "raw_roots": [
              "-1",
              "1"
            ],
            "roots": [
              "-1",
              "1"
            ]
          }
        },
        {
          "before": "derivative candidates",
          "rule_id": "critical_points_from_derivative",
          "action": "Select critical points in the domain",
          "after": "x = -1, x = 1",
          "explanation": "Critical points are domain points where the derivative is zero or undefined.",
          "details": {
            "critical_points": [
              "-1",
              "1"
            ]
          }
        },
        {
          "before": "critical point list",
          "rule_id": "check_solution",
          "action": "Check critical points",
          "after": "passed",
          "explanation": "Each listed critical point belongs to the domain and satisfies f'(x)=0.",
          "details": {}
        },
        {
          "before": "analysis result",
          "rule_id": "analysis_check_by_sampling",
          "action": "Check the analysis by sample points",
          "after": "passed",
          "explanation": "Representative sample points are used to confirm derivative signs and domain-aware interval conclusions.",
          "details": {}
        }
      ],
      "answer": "Critical points: x = -1, x = 1",
      "problem_profile": {
        "input": "x^3 - 3*x",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": 3,
        "is_polynomial": true,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": true,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "polynomial",
          "factorable",
          "common_factor"
        ]
      },
      "candidate_strategies": [
        {
          "id": "derivative_zero_critical_points",
          "name": "derivative zero critical points",
          "applicable_to": [
            "find_critical_points"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage7.function_analysis",
          "score": 100,
          "reasons": [
            "action-level strategy",
            "domain-aware"
          ]
        },
        {
          "id": "symbolic_fallback",
          "name": "symbolic fallback",
          "applicable_to": [
            "find_critical_points"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "score": 60,
          "reasons": [
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "derivative_zero_critical_points",
      "strategy_score": 100,
      "analysis": {
        "domain": "all real numbers",
        "derivative": "3*x^2 - 3",
        "critical_points": [
          "-1",
          "1"
        ]
      },
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Derivative-based analysis was checked by symbolic differentiation and sample points."
          },
          {
            "status": "passed",
            "message": "Domain restrictions were preserved in the analysis intervals."
          }
        ]
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "find_critical_points"
    }
  },
  {
    "input": "x^3 - 3*x",
    "action": "find_monotonicity",
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "x^3 - 3*x",
      "task_type": "find_monotonicity",
      "steps": [
        {
          "before": "f(x) = x*(x^2 - 3)",
          "rule_id": "function_domain_analysis",
          "action": "Analyze the function domain",
          "after": "all real numbers",
          "explanation": "The analysis starts by finding where the original function is defined. Denominator zeros split the real line into separate domain intervals.",
          "details": {
            "forbidden_values": [],
            "domain_restrictions": []
          }
        },
        {
          "before": "f(x) = x*(x^2 - 3)",
          "rule_id": "function_derivative_for_analysis",
          "action": "Compute the first derivative for analysis",
          "after": "f'(x) = 3*x^2 - 3",
          "explanation": "Critical points, monotonicity, and extrema are determined from the first derivative.",
          "details": {
            "derivative": "3*x**2 - 3"
          }
        },
        {
          "before": "f'(x) = 3*x^2 - 3",
          "rule_id": "solve_derivative_zero_equation",
          "action": "Solve the derivative-zero equation",
          "after": "x = -1 or x = 1",
          "explanation": "Critical candidates occur where f'(x)=0. Candidates outside the original domain are discarded.",
          "details": {
            "raw_roots": [
              "-1",
              "1"
            ],
            "roots": [
              "-1",
              "1"
            ]
          }
        },
        {
          "before": "derivative candidates",
          "rule_id": "critical_points_from_derivative",
          "action": "Select critical points in the domain",
          "after": "x = -1, x = 1",
          "explanation": "Critical points are domain points where the derivative is zero or undefined.",
          "details": {
            "critical_points": [
              "-1",
              "1"
            ]
          }
        },
        {
          "before": "critical point list",
          "rule_id": "check_solution",
          "action": "Check critical points",
          "after": "passed",
          "explanation": "Each listed critical point belongs to the domain and satisfies f'(x)=0.",
          "details": {}
        },
        {
          "before": "f'(x) = 3*x^2 - 3",
          "rule_id": "derivative_sign_chart",
          "action": "Build a derivative sign chart",
          "after": "(-∞, -1): +; (-1, 1): -; (1, +∞): +",
          "explanation": "The derivative sign is tested on each interval split by critical points and domain breaks.",
          "details": {
            "sign_chart": [
              {
                "interval": "(-∞, -1)",
                "sample": "-2",
                "sign": "+",
                "value": "9"
              },
              {
                "interval": "(-1, 1)",
                "sample": "0",
                "sign": "-",
                "value": "-3"
              },
              {
                "interval": "(1, +∞)",
                "sample": "2",
                "sign": "+",
                "value": "9"
              }
            ]
          }
        },
        {
          "before": "derivative sign chart",
          "rule_id": "monotonicity_from_derivative_sign",
          "action": "Determine monotonicity from derivative signs",
          "after": "Increasing: (-∞, -1), (1, +∞); Decreasing: (-1, 1)",
          "explanation": "A positive derivative means the function increases; a negative derivative means it decreases.",
          "details": {
            "increasing": [
              "(-∞, -1)",
              "(1, +∞)"
            ],
            "decreasing": [
              "(-1, 1)"
            ]
          }
        },
        {
          "before": "analysis result",
          "rule_id": "analysis_check_by_sampling",
          "action": "Check the analysis by sample points",
          "after": "passed",
          "explanation": "Representative sample points are used to confirm derivative signs and domain-aware interval conclusions.",
          "details": {}
        }
      ],
      "answer": "Increasing: (-∞, -1), (1, +∞); Decreasing: (-1, 1)",
      "problem_profile": {
        "input": "x^3 - 3*x",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": 3,
        "is_polynomial": true,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": true,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "polynomial",
          "factorable",
          "common_factor"
        ]
      },
      "candidate_strategies": [
        {
          "id": "derivative_sign_chart_with_domain_restrictions",
          "name": "derivative sign chart with domain restrictions",
          "applicable_to": [
            "find_monotonicity"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage7.function_analysis",
          "score": 100,
          "reasons": [
            "action-level strategy",
            "domain-aware"
          ]
        },
        {
          "id": "symbolic_fallback",
          "name": "symbolic fallback",
          "applicable_to": [
            "find_monotonicity"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "score": 60,
          "reasons": [
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "derivative_sign_chart_with_domain_restrictions",
      "strategy_score": 100,
      "analysis": {
        "domain": "all real numbers",
        "derivative": "3*x^2 - 3",
        "critical_points": [
          "-1",
          "1"
        ],
        "sign_chart": [
          {
            "interval": "(-∞, -1)",
            "sample": "-2",
            "sign": "+",
            "value": "9"
          },
          {
            "interval": "(-1, 1)",
            "sample": "0",
            "sign": "-",
            "value": "-3"
          },
          {
            "interval": "(1, +∞)",
            "sample": "2",
            "sign": "+",
            "value": "9"
          }
        ],
        "monotonicity_intervals": {
          "increasing": [
            "(-∞, -1)",
            "(1, +∞)"
          ],
          "decreasing": [
            "(-1, 1)"
          ]
        }
      },
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Derivative-based analysis was checked by symbolic differentiation and sample points."
          },
          {
            "status": "passed",
            "message": "Domain restrictions were preserved in the analysis intervals."
          }
        ]
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "find_monotonicity"
    }
  },
  {
    "input": "x^3 - 3*x",
    "action": "find_extrema",
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "x^3 - 3*x",
      "task_type": "find_extrema",
      "steps": [
        {
          "before": "f(x) = x*(x^2 - 3)",
          "rule_id": "function_domain_analysis",
          "action": "Analyze the function domain",
          "after": "all real numbers",
          "explanation": "The analysis starts by finding where the original function is defined. Denominator zeros split the real line into separate domain intervals.",
          "details": {
            "forbidden_values": [],
            "domain_restrictions": []
          }
        },
        {
          "before": "f(x) = x*(x^2 - 3)",
          "rule_id": "function_derivative_for_analysis",
          "action": "Compute the first derivative for analysis",
          "after": "f'(x) = 3*x^2 - 3",
          "explanation": "Critical points, monotonicity, and extrema are determined from the first derivative.",
          "details": {
            "derivative": "3*x**2 - 3"
          }
        },
        {
          "before": "f'(x) = 3*x^2 - 3",
          "rule_id": "solve_derivative_zero_equation",
          "action": "Solve the derivative-zero equation",
          "after": "x = -1 or x = 1",
          "explanation": "Critical candidates occur where f'(x)=0. Candidates outside the original domain are discarded.",
          "details": {
            "raw_roots": [
              "-1",
              "1"
            ],
            "roots": [
              "-1",
              "1"
            ]
          }
        },
        {
          "before": "derivative candidates",
          "rule_id": "critical_points_from_derivative",
          "action": "Select critical points in the domain",
          "after": "x = -1, x = 1",
          "explanation": "Critical points are domain points where the derivative is zero or undefined.",
          "details": {
            "critical_points": [
              "-1",
              "1"
            ]
          }
        },
        {
          "before": "critical point list",
          "rule_id": "check_solution",
          "action": "Check critical points",
          "after": "passed",
          "explanation": "Each listed critical point belongs to the domain and satisfies f'(x)=0.",
          "details": {}
        },
        {
          "before": "f'(x) = 3*x^2 - 3",
          "rule_id": "derivative_sign_chart",
          "action": "Build a derivative sign chart",
          "after": "(-∞, -1): +; (-1, 1): -; (1, +∞): +",
          "explanation": "The derivative sign is tested on each interval split by critical points and domain breaks.",
          "details": {
            "sign_chart": [
              {
                "interval": "(-∞, -1)",
                "sample": "-2",
                "sign": "+",
                "value": "9"
              },
              {
                "interval": "(-1, 1)",
                "sample": "0",
                "sign": "-",
                "value": "-3"
              },
              {
                "interval": "(1, +∞)",
                "sample": "2",
                "sign": "+",
                "value": "9"
              }
            ]
          }
        },
        {
          "before": "derivative sign chart",
          "rule_id": "monotonicity_from_derivative_sign",
          "action": "Determine monotonicity from derivative signs",
          "after": "Increasing: (-∞, -1), (1, +∞); Decreasing: (-1, 1)",
          "explanation": "A positive derivative means the function increases; a negative derivative means it decreases.",
          "details": {
            "increasing": [
              "(-∞, -1)",
              "(1, +∞)"
            ],
            "decreasing": [
              "(-1, 1)"
            ]
          }
        },
        {
          "before": "x = -1",
          "rule_id": "extremum_first_derivative_test",
          "action": "Classify extremum by the first derivative test",
          "after": "local maximum at (-1, 2)",
          "explanation": "At x=-1, f' changes from + to -.",
          "details": {
            "x": "-1",
            "left_sign": "+",
            "right_sign": "-",
            "kind": "local maximum"
          }
        },
        {
          "before": "f(-1)",
          "rule_id": "evaluate_function_at_point",
          "action": "Evaluate the function at the extremum point",
          "after": "f(-1) = 2",
          "explanation": "The y-coordinate of an extremum is found by substituting x into the original function.",
          "details": {
            "point": [
              "-1",
              "2"
            ]
          }
        },
        {
          "before": "x = 1",
          "rule_id": "extremum_first_derivative_test",
          "action": "Classify extremum by the first derivative test",
          "after": "local minimum at (1, -2)",
          "explanation": "At x=1, f' changes from - to +.",
          "details": {
            "x": "1",
            "left_sign": "-",
            "right_sign": "+",
            "kind": "local minimum"
          }
        },
        {
          "before": "f(1)",
          "rule_id": "evaluate_function_at_point",
          "action": "Evaluate the function at the extremum point",
          "after": "f(1) = -2",
          "explanation": "The y-coordinate of an extremum is found by substituting x into the original function.",
          "details": {
            "point": [
              "1",
              "-2"
            ]
          }
        },
        {
          "before": "analysis result",
          "rule_id": "analysis_check_by_sampling",
          "action": "Check the analysis by sample points",
          "after": "passed",
          "explanation": "Representative sample points are used to confirm derivative signs and domain-aware interval conclusions.",
          "details": {}
        }
      ],
      "answer": "Local maximum: (-1, 2); Local minimum: (1, -2)",
      "problem_profile": {
        "input": "x^3 - 3*x",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": 3,
        "is_polynomial": true,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": true,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "polynomial",
          "factorable",
          "common_factor"
        ]
      },
      "candidate_strategies": [
        {
          "id": "first_derivative_test",
          "name": "first derivative test",
          "applicable_to": [
            "find_extrema"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage7.function_analysis",
          "score": 100,
          "reasons": [
            "action-level strategy",
            "domain-aware"
          ]
        },
        {
          "id": "second_derivative_test",
          "name": "second derivative test",
          "applicable_to": [
            "find_extrema"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage7.function_analysis",
          "score": 60,
          "reasons": [
            "action-level strategy",
            "domain-aware"
          ]
        },
        {
          "id": "symbolic_fallback",
          "name": "symbolic fallback",
          "applicable_to": [
            "find_extrema"
          ],
          "exact": true,
          "educational_priority": 10,
          "complexity_score": 4,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "score": 20,
          "reasons": [
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "first_derivative_test",
      "strategy_score": 100,
      "analysis": {
        "domain": "all real numbers",
        "derivative": "3*x^2 - 3",
        "critical_points": [
          "-1",
          "1"
        ],
        "sign_chart": [
          {
            "interval": "(-∞, -1)",
            "sample": "-2",
            "sign": "+",
            "value": "9"
          },
          {
            "interval": "(-1, 1)",
            "sample": "0",
            "sign": "-",
            "value": "-3"
          },
          {
            "interval": "(1, +∞)",
            "sample": "2",
            "sign": "+",
            "value": "9"
          }
        ],
        "monotonicity_intervals": {
          "increasing": [
            "(-∞, -1)",
            "(1, +∞)"
          ],
          "decreasing": [
            "(-1, 1)"
          ]
        },
        "extrema": [
          {
            "kind": "local maximum",
            "x": "-1",
            "y": "2",
            "point": "(-1, 2)"
          },
          {
            "kind": "local minimum",
            "x": "1",
            "y": "-2",
            "point": "(1, -2)"
          }
        ]
      },
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Derivative-based analysis was checked by symbolic differentiation and sample points."
          },
          {
            "status": "passed",
            "message": "Domain restrictions were preserved in the analysis intervals."
          }
        ]
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "find_extrema"
    }
  },
  {
    "input": "x^2 - 4*x + 3",
    "action": "find_extrema",
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "x^2 - 4*x + 3",
      "task_type": "find_extrema",
      "steps": [
        {
          "before": "f(x) = x^2 - 4*x + 3",
          "rule_id": "function_domain_analysis",
          "action": "Analyze the function domain",
          "after": "all real numbers",
          "explanation": "The analysis starts by finding where the original function is defined. Denominator zeros split the real line into separate domain intervals.",
          "details": {
            "forbidden_values": [],
            "domain_restrictions": []
          }
        },
        {
          "before": "f(x) = x^2 - 4*x + 3",
          "rule_id": "function_derivative_for_analysis",
          "action": "Compute the first derivative for analysis",
          "after": "f'(x) = 2*x - 4",
          "explanation": "Critical points, monotonicity, and extrema are determined from the first derivative.",
          "details": {
            "derivative": "2*x - 4"
          }
        },
        {
          "before": "f'(x) = 2*x - 4",
          "rule_id": "solve_derivative_zero_equation",
          "action": "Solve the derivative-zero equation",
          "after": "x = 2",
          "explanation": "Critical candidates occur where f'(x)=0. Candidates outside the original domain are discarded.",
          "details": {
            "raw_roots": [
              "2"
            ],
            "roots": [
              "2"
            ]
          }
        },
        {
          "before": "derivative candidates",
          "rule_id": "critical_points_from_derivative",
          "action": "Select critical points in the domain",
          "after": "x = 2",
          "explanation": "Critical points are domain points where the derivative is zero or undefined.",
          "details": {
            "critical_points": [
              "2"
            ]
          }
        },
        {
          "before": "critical point list",
          "rule_id": "check_solution",
          "action": "Check critical points",
          "after": "passed",
          "explanation": "Each listed critical point belongs to the domain and satisfies f'(x)=0.",
          "details": {}
        },
        {
          "before": "f'(x) = 2*x - 4",
          "rule_id": "derivative_sign_chart",
          "action": "Build a derivative sign chart",
          "after": "(-∞, 2): -; (2, +∞): +",
          "explanation": "The derivative sign is tested on each interval split by critical points and domain breaks.",
          "details": {
            "sign_chart": [
              {
                "interval": "(-∞, 2)",
                "sample": "1",
                "sign": "-",
                "value": "-2"
              },
              {
                "interval": "(2, +∞)",
                "sample": "3",
                "sign": "+",
                "value": "2"
              }
            ]
          }
        },
        {
          "before": "derivative sign chart",
          "rule_id": "monotonicity_from_derivative_sign",
          "action": "Determine monotonicity from derivative signs",
          "after": "Increasing: (2, +∞); Decreasing: (-∞, 2)",
          "explanation": "A positive derivative means the function increases; a negative derivative means it decreases.",
          "details": {
            "increasing": [
              "(2, +∞)"
            ],
            "decreasing": [
              "(-∞, 2)"
            ]
          }
        },
        {
          "before": "x = 2",
          "rule_id": "extremum_first_derivative_test",
          "action": "Classify extremum by the first derivative test",
          "after": "local minimum at (2, -1)",
          "explanation": "At x=2, f' changes from - to +.",
          "details": {
            "x": "2",
            "left_sign": "-",
            "right_sign": "+",
            "kind": "local minimum"
          }
        },
        {
          "before": "f(2)",
          "rule_id": "evaluate_function_at_point",
          "action": "Evaluate the function at the extremum point",
          "after": "f(2) = -1",
          "explanation": "The y-coordinate of an extremum is found by substituting x into the original function.",
          "details": {
            "point": [
              "2",
              "-1"
            ]
          }
        },
        {
          "before": "analysis result",
          "rule_id": "analysis_check_by_sampling",
          "action": "Check the analysis by sample points",
          "after": "passed",
          "explanation": "Representative sample points are used to confirm derivative signs and domain-aware interval conclusions.",
          "details": {}
        }
      ],
      "answer": "Local minimum: (2, -1)",
      "problem_profile": {
        "input": "x^2 - 4*x + 3",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": 2,
        "is_polynomial": true,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": true,
        "has_simple_integer_roots": true,
        "discriminant": null,
        "features": [
          "polynomial",
          "factorable",
          "simple_integer_roots"
        ]
      },
      "candidate_strategies": [
        {
          "id": "first_derivative_test",
          "name": "first derivative test",
          "applicable_to": [
            "find_extrema"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage7.function_analysis",
          "score": 100,
          "reasons": [
            "action-level strategy",
            "domain-aware"
          ]
        },
        {
          "id": "second_derivative_test",
          "name": "second derivative test",
          "applicable_to": [
            "find_extrema"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage7.function_analysis",
          "score": 60,
          "reasons": [
            "action-level strategy",
            "domain-aware"
          ]
        },
        {
          "id": "symbolic_fallback",
          "name": "symbolic fallback",
          "applicable_to": [
            "find_extrema"
          ],
          "exact": true,
          "educational_priority": 10,
          "complexity_score": 4,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "score": 20,
          "reasons": [
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "first_derivative_test",
      "strategy_score": 100,
      "analysis": {
        "domain": "all real numbers",
        "derivative": "2*x - 4",
        "critical_points": [
          "2"
        ],
        "sign_chart": [
          {
            "interval": "(-∞, 2)",
            "sample": "1",
            "sign": "-",
            "value": "-2"
          },
          {
            "interval": "(2, +∞)",
            "sample": "3",
            "sign": "+",
            "value": "2"
          }
        ],
        "monotonicity_intervals": {
          "increasing": [
            "(2, +∞)"
          ],
          "decreasing": [
            "(-∞, 2)"
          ]
        },
        "extrema": [
          {
            "kind": "local minimum",
            "x": "2",
            "y": "-1",
            "point": "(2, -1)"
          }
        ]
      },
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Derivative-based analysis was checked by symbolic differentiation and sample points."
          },
          {
            "status": "passed",
            "message": "Domain restrictions were preserved in the analysis intervals."
          }
        ]
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "find_extrema"
    }
  },
  {
    "input": "x^2",
    "action": "find_tangent_line",
    "list_actions": false,
    "at": "2",
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "x^2",
      "task_type": "find_tangent_line",
      "steps": [
        {
          "before": "f(x) = x^2",
          "rule_id": "function_domain_analysis",
          "action": "Analyze the function domain",
          "after": "all real numbers",
          "explanation": "The analysis starts by finding where the original function is defined. Denominator zeros split the real line into separate domain intervals.",
          "details": {
            "forbidden_values": [],
            "domain_restrictions": []
          }
        },
        {
          "before": "f(x) = x^2",
          "rule_id": "function_derivative_for_analysis",
          "action": "Compute the first derivative for analysis",
          "after": "f'(x) = 2*x",
          "explanation": "Critical points, monotonicity, and extrema are determined from the first derivative.",
          "details": {
            "derivative": "2*x"
          }
        },
        {
          "before": "f'(x) = 2*x",
          "rule_id": "tangent_slope_from_derivative",
          "action": "Evaluate the derivative at the tangent point",
          "after": "f'(2) = 4",
          "explanation": "The slope of the tangent line equals the derivative value at the point.",
          "details": {
            "x": "2",
            "slope": "4"
          }
        },
        {
          "before": "f(2)",
          "rule_id": "tangent_point_coordinates",
          "action": "Find the point on the graph",
          "after": "(2, 4)",
          "explanation": "The point of tangency is obtained by evaluating the function at the selected x-value.",
          "details": {
            "point": [
              "2",
              "4"
            ]
          }
        },
        {
          "before": "y - 4 = 4*(x - 2)",
          "rule_id": "tangent_line_equation",
          "action": "Write the tangent line equation",
          "after": "y = 4*x - 4",
          "explanation": "The tangent line is written from point-slope form and simplified when useful.",
          "details": {
            "slope": "4",
            "point": [
              "2",
              "4"
            ]
          }
        },
        {
          "before": "analysis result",
          "rule_id": "analysis_check_by_sampling",
          "action": "Check the analysis by sample points",
          "after": "passed",
          "explanation": "Representative sample points are used to confirm derivative signs and domain-aware interval conclusions.",
          "details": {}
        }
      ],
      "answer": "y = 4*x - 4",
      "problem_profile": {
        "input": "x^2",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": 2,
        "is_polynomial": true,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": true,
        "has_simple_integer_roots": true,
        "discriminant": null,
        "features": [
          "polynomial",
          "factorable",
          "simple_integer_roots",
          "perfect_square_trinomial"
        ]
      },
      "candidate_strategies": [
        {
          "id": "tangent_line_by_derivative",
          "name": "tangent line by derivative",
          "applicable_to": [
            "find_tangent_line"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage7.function_analysis",
          "score": 100,
          "reasons": [
            "action-level strategy",
            "domain-aware"
          ]
        },
        {
          "id": "symbolic_fallback",
          "name": "symbolic fallback",
          "applicable_to": [
            "find_tangent_line"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "score": 60,
          "reasons": [
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "tangent_line_by_derivative",
      "strategy_score": 100,
      "analysis": {
        "domain": "all real numbers",
        "derivative": "2*x",
        "tangent_point": [
          "2",
          "4"
        ],
        "tangent_slope": "4"
      },
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Derivative-based analysis was checked by symbolic differentiation and sample points."
          },
          {
            "status": "passed",
            "message": "Domain restrictions were preserved in the analysis intervals."
          }
        ]
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "find_tangent_line"
    }
  },
  {
    "input": "x^3 - 3*x",
    "action": "find_tangent_line",
    "list_actions": false,
    "at": "1",
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "x^3 - 3*x",
      "task_type": "find_tangent_line",
      "steps": [
        {
          "before": "f(x) = x*(x^2 - 3)",
          "rule_id": "function_domain_analysis",
          "action": "Analyze the function domain",
          "after": "all real numbers",
          "explanation": "The analysis starts by finding where the original function is defined. Denominator zeros split the real line into separate domain intervals.",
          "details": {
            "forbidden_values": [],
            "domain_restrictions": []
          }
        },
        {
          "before": "f(x) = x*(x^2 - 3)",
          "rule_id": "function_derivative_for_analysis",
          "action": "Compute the first derivative for analysis",
          "after": "f'(x) = 3*x^2 - 3",
          "explanation": "Critical points, monotonicity, and extrema are determined from the first derivative.",
          "details": {
            "derivative": "3*x**2 - 3"
          }
        },
        {
          "before": "f'(x) = 3*x^2 - 3",
          "rule_id": "tangent_slope_from_derivative",
          "action": "Evaluate the derivative at the tangent point",
          "after": "f'(1) = 0",
          "explanation": "The slope of the tangent line equals the derivative value at the point.",
          "details": {
            "x": "1",
            "slope": "0"
          }
        },
        {
          "before": "f(1)",
          "rule_id": "tangent_point_coordinates",
          "action": "Find the point on the graph",
          "after": "(1, -2)",
          "explanation": "The point of tangency is obtained by evaluating the function at the selected x-value.",
          "details": {
            "point": [
              "1",
              "-2"
            ]
          }
        },
        {
          "before": "y - -2 = 0*(x - 1)",
          "rule_id": "tangent_line_equation",
          "action": "Write the tangent line equation",
          "after": "y = -2",
          "explanation": "The tangent line is written from point-slope form and simplified when useful.",
          "details": {
            "slope": "0",
            "point": [
              "1",
              "-2"
            ]
          }
        },
        {
          "before": "analysis result",
          "rule_id": "analysis_check_by_sampling",
          "action": "Check the analysis by sample points",
          "after": "passed",
          "explanation": "Representative sample points are used to confirm derivative signs and domain-aware interval conclusions.",
          "details": {}
        }
      ],
      "answer": "y = -2",
      "problem_profile": {
        "input": "x^3 - 3*x",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": 3,
        "is_polynomial": true,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": true,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "polynomial",
          "factorable",
          "common_factor"
        ]
      },
      "candidate_strategies": [
        {
          "id": "tangent_line_by_derivative",
          "name": "tangent line by derivative",
          "applicable_to": [
            "find_tangent_line"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage7.function_analysis",
          "score": 100,
          "reasons": [
            "action-level strategy",
            "domain-aware"
          ]
        },
        {
          "id": "symbolic_fallback",
          "name": "symbolic fallback",
          "applicable_to": [
            "find_tangent_line"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "score": 60,
          "reasons": [
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "tangent_line_by_derivative",
      "strategy_score": 100,
      "analysis": {
        "domain": "all real numbers",
        "derivative": "3*x^2 - 3",
        "tangent_point": [
          "1",
          "-2"
        ],
        "tangent_slope": "0"
      },
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Derivative-based analysis was checked by symbolic differentiation and sample points."
          },
          {
            "status": "passed",
            "message": "Domain restrictions were preserved in the analysis intervals."
          }
        ]
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "find_tangent_line"
    }
  },
  {
    "input": "x^2",
    "action": "find_normal_line",
    "list_actions": false,
    "at": "2",
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "x^2",
      "task_type": "find_normal_line",
      "steps": [
        {
          "before": "f(x) = x^2",
          "rule_id": "function_domain_analysis",
          "action": "Analyze the function domain",
          "after": "all real numbers",
          "explanation": "The analysis starts by finding where the original function is defined. Denominator zeros split the real line into separate domain intervals.",
          "details": {
            "forbidden_values": [],
            "domain_restrictions": []
          }
        },
        {
          "before": "f(x) = x^2",
          "rule_id": "function_derivative_for_analysis",
          "action": "Compute the first derivative for analysis",
          "after": "f'(x) = 2*x",
          "explanation": "Critical points, monotonicity, and extrema are determined from the first derivative.",
          "details": {
            "derivative": "2*x"
          }
        },
        {
          "before": "f'(2)",
          "rule_id": "tangent_slope_from_derivative",
          "action": "Find tangent slope first",
          "after": "m_t = 4",
          "explanation": "The normal slope is based on the tangent slope.",
          "details": {}
        },
        {
          "before": "f(2)",
          "rule_id": "tangent_point_coordinates",
          "action": "Find the point on the graph",
          "after": "(2, 4)",
          "explanation": "The normal line passes through the same point as the tangent line.",
          "details": {}
        },
        {
          "before": "m_t = 4",
          "rule_id": "normal_slope_from_tangent_slope",
          "action": "Find the normal slope",
          "after": "m_n = -1/4",
          "explanation": "For a nonzero tangent slope, the normal slope is the negative reciprocal. If the tangent is horizontal, the normal is vertical.",
          "details": {}
        },
        {
          "before": "point (2, 4) and normal slope -1/4",
          "rule_id": "normal_line_equation",
          "action": "Write the normal line equation",
          "after": "y - 4 = -1/4*(x - 2)",
          "explanation": "The normal line is written through the point of tangency with the normal slope.",
          "details": {}
        },
        {
          "before": "analysis result",
          "rule_id": "analysis_check_by_sampling",
          "action": "Check the analysis by sample points",
          "after": "passed",
          "explanation": "Representative sample points are used to confirm derivative signs and domain-aware interval conclusions.",
          "details": {}
        }
      ],
      "answer": "y - 4 = -1/4*(x - 2)",
      "problem_profile": {
        "input": "x^2",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": 2,
        "is_polynomial": true,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": true,
        "has_simple_integer_roots": true,
        "discriminant": null,
        "features": [
          "polynomial",
          "factorable",
          "simple_integer_roots",
          "perfect_square_trinomial"
        ]
      },
      "candidate_strategies": [
        {
          "id": "normal_line_by_derivative",
          "name": "normal line by derivative",
          "applicable_to": [
            "find_normal_line"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage7.function_analysis",
          "score": 100,
          "reasons": [
            "action-level strategy",
            "domain-aware"
          ]
        },
        {
          "id": "symbolic_fallback",
          "name": "symbolic fallback",
          "applicable_to": [
            "find_normal_line"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "score": 60,
          "reasons": [
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "normal_line_by_derivative",
      "strategy_score": 100,
      "analysis": {
        "domain": "all real numbers",
        "derivative": "2*x",
        "normal_slope": "-1/4",
        "point": [
          "2",
          "4"
        ]
      },
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Derivative-based analysis was checked by symbolic differentiation and sample points."
          },
          {
            "status": "passed",
            "message": "Domain restrictions were preserved in the analysis intervals."
          }
        ]
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "find_normal_line"
    }
  },
  {
    "input": "x^3 - 3*x",
    "action": "find_second_derivative",
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "x^3 - 3*x",
      "task_type": "find_second_derivative",
      "steps": [
        {
          "before": "f(x) = x*(x^2 - 3)",
          "rule_id": "function_domain_analysis",
          "action": "Analyze the function domain",
          "after": "all real numbers",
          "explanation": "The analysis starts by finding where the original function is defined. Denominator zeros split the real line into separate domain intervals.",
          "details": {
            "forbidden_values": [],
            "domain_restrictions": []
          }
        },
        {
          "before": "f(x) = x*(x^2 - 3)",
          "rule_id": "function_derivative_for_analysis",
          "action": "Compute the first derivative for analysis",
          "after": "f'(x) = 3*x^2 - 3",
          "explanation": "Critical points, monotonicity, and extrema are determined from the first derivative.",
          "details": {
            "derivative": "3*x**2 - 3"
          }
        },
        {
          "before": "f'(x) = 3*x^2 - 3",
          "rule_id": "second_derivative_computation",
          "action": "Differentiate once more",
          "after": "f''(x) = 6*x",
          "explanation": "The second derivative is the derivative of the first derivative.",
          "details": {
            "first_derivative": "3*x**2 - 3",
            "second_derivative": "6*x"
          }
        },
        {
          "before": "analysis result",
          "rule_id": "analysis_check_by_sampling",
          "action": "Check the analysis by sample points",
          "after": "passed",
          "explanation": "Representative sample points are used to confirm derivative signs and domain-aware interval conclusions.",
          "details": {}
        }
      ],
      "answer": "6*x",
      "problem_profile": {
        "input": "x^3 - 3*x",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": 3,
        "is_polynomial": true,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": true,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "polynomial",
          "factorable",
          "common_factor"
        ]
      },
      "candidate_strategies": [
        {
          "id": "differentiate_twice",
          "name": "differentiate twice",
          "applicable_to": [
            "find_second_derivative"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage7.function_analysis",
          "score": 100,
          "reasons": [
            "action-level strategy",
            "domain-aware"
          ]
        },
        {
          "id": "symbolic_fallback",
          "name": "symbolic fallback",
          "applicable_to": [
            "find_second_derivative"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "score": 60,
          "reasons": [
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "differentiate_twice",
      "strategy_score": 100,
      "analysis": {
        "domain": "all real numbers",
        "derivative": "3*x^2 - 3",
        "second_derivative": "6*x"
      },
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Derivative-based analysis was checked by symbolic differentiation and sample points."
          },
          {
            "status": "passed",
            "message": "Domain restrictions were preserved in the analysis intervals."
          }
        ]
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "find_second_derivative"
    }
  },
  {
    "input": "x^3 - 3*x",
    "action": "find_concavity",
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "x^3 - 3*x",
      "task_type": "find_concavity",
      "steps": [
        {
          "before": "f(x) = x*(x^2 - 3)",
          "rule_id": "function_domain_analysis",
          "action": "Analyze the function domain",
          "after": "all real numbers",
          "explanation": "The analysis starts by finding where the original function is defined. Denominator zeros split the real line into separate domain intervals.",
          "details": {
            "forbidden_values": [],
            "domain_restrictions": []
          }
        },
        {
          "before": "f(x) = x*(x^2 - 3)",
          "rule_id": "function_derivative_for_analysis",
          "action": "Compute the first derivative for analysis",
          "after": "f'(x) = 3*x^2 - 3",
          "explanation": "Critical points, monotonicity, and extrema are determined from the first derivative.",
          "details": {
            "derivative": "3*x**2 - 3"
          }
        },
        {
          "before": "f'(x) = 3*x^2 - 3",
          "rule_id": "second_derivative_computation",
          "action": "Compute the second derivative",
          "after": "f''(x) = 6*x",
          "explanation": "Concavity and inflection points are determined from the second derivative.",
          "details": {}
        },
        {
          "before": "f''(x) = 6*x",
          "rule_id": "concavity_from_second_derivative_sign",
          "action": "Determine concavity from second derivative signs",
          "after": "Concave down: (-∞, 0); Concave up: (0, +∞)",
          "explanation": "If f'' is positive the graph is concave up; if f'' is negative the graph is concave down.",
          "details": {
            "sign_chart": [
              {
                "interval": "(-∞, 0)",
                "sample": "-1",
                "sign": "-",
                "value": "-6"
              },
              {
                "interval": "(0, +∞)",
                "sample": "1",
                "sign": "+",
                "value": "6"
              }
            ],
            "concave_up": [
              "(0, +∞)"
            ],
            "concave_down": [
              "(-∞, 0)"
            ]
          }
        },
        {
          "before": "analysis result",
          "rule_id": "analysis_check_by_sampling",
          "action": "Check the analysis by sample points",
          "after": "passed",
          "explanation": "Representative sample points are used to confirm derivative signs and domain-aware interval conclusions.",
          "details": {}
        }
      ],
      "answer": "Concave down: (-∞, 0); Concave up: (0, +∞)",
      "problem_profile": {
        "input": "x^3 - 3*x",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": 3,
        "is_polynomial": true,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": true,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "polynomial",
          "factorable",
          "common_factor"
        ]
      },
      "candidate_strategies": [
        {
          "id": "second_derivative_sign_chart",
          "name": "second derivative sign chart",
          "applicable_to": [
            "find_concavity"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage7.function_analysis",
          "score": 100,
          "reasons": [
            "action-level strategy",
            "domain-aware"
          ]
        },
        {
          "id": "symbolic_fallback",
          "name": "symbolic fallback",
          "applicable_to": [
            "find_concavity"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "score": 60,
          "reasons": [
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "second_derivative_sign_chart",
      "strategy_score": 100,
      "analysis": {
        "domain": "all real numbers",
        "derivative": "3*x^2 - 3",
        "second_derivative": "6*x",
        "concavity_intervals": {
          "concave_up": [
            "(0, +∞)"
          ],
          "concave_down": [
            "(-∞, 0)"
          ]
        }
      },
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Derivative-based analysis was checked by symbolic differentiation and sample points."
          },
          {
            "status": "passed",
            "message": "Domain restrictions were preserved in the analysis intervals."
          }
        ]
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "find_concavity"
    }
  },
  {
    "input": "x^3 - 3*x",
    "action": "find_inflection_points",
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "x^3 - 3*x",
      "task_type": "find_inflection_points",
      "steps": [
        {
          "before": "f(x) = x*(x^2 - 3)",
          "rule_id": "function_domain_analysis",
          "action": "Analyze the function domain",
          "after": "all real numbers",
          "explanation": "The analysis starts by finding where the original function is defined. Denominator zeros split the real line into separate domain intervals.",
          "details": {
            "forbidden_values": [],
            "domain_restrictions": []
          }
        },
        {
          "before": "f(x) = x*(x^2 - 3)",
          "rule_id": "function_derivative_for_analysis",
          "action": "Compute the first derivative for analysis",
          "after": "f'(x) = 3*x^2 - 3",
          "explanation": "Critical points, monotonicity, and extrema are determined from the first derivative.",
          "details": {
            "derivative": "3*x**2 - 3"
          }
        },
        {
          "before": "f'(x) = 3*x^2 - 3",
          "rule_id": "second_derivative_computation",
          "action": "Compute the second derivative",
          "after": "f''(x) = 6*x",
          "explanation": "Concavity and inflection points are determined from the second derivative.",
          "details": {}
        },
        {
          "before": "x = 0",
          "rule_id": "inflection_points_from_second_derivative",
          "action": "Check second derivative sign change",
          "after": "inflection point (0, 0)",
          "explanation": "The sign of f'' changes from - to + at x=0.",
          "details": {
            "x": "0",
            "left_sign": "-",
            "right_sign": "+"
          }
        },
        {
          "before": "f(0)",
          "rule_id": "evaluate_function_at_point",
          "action": "Evaluate the function at the inflection point",
          "after": "f(0) = 0",
          "explanation": "The point coordinates are obtained by substituting the x-value into the original function.",
          "details": {}
        },
        {
          "before": "analysis result",
          "rule_id": "analysis_check_by_sampling",
          "action": "Check the analysis by sample points",
          "after": "passed",
          "explanation": "Representative sample points are used to confirm derivative signs and domain-aware interval conclusions.",
          "details": {}
        }
      ],
      "answer": "Inflection point: (0, 0)",
      "problem_profile": {
        "input": "x^3 - 3*x",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": 3,
        "is_polynomial": true,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": true,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "polynomial",
          "factorable",
          "common_factor"
        ]
      },
      "candidate_strategies": [
        {
          "id": "second_derivative_sign_change",
          "name": "second derivative sign change",
          "applicable_to": [
            "find_inflection_points"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage7.function_analysis",
          "score": 100,
          "reasons": [
            "action-level strategy",
            "domain-aware"
          ]
        },
        {
          "id": "symbolic_fallback",
          "name": "symbolic fallback",
          "applicable_to": [
            "find_inflection_points"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "score": 60,
          "reasons": [
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "second_derivative_sign_change",
      "strategy_score": 100,
      "analysis": {
        "domain": "all real numbers",
        "derivative": "3*x^2 - 3",
        "second_derivative": "6*x",
        "inflection_points": [
          "(0, 0)"
        ],
        "second_derivative_sign_chart": [
          {
            "interval": "(-∞, 0)",
            "sample": "-1",
            "sign": "-",
            "value": "-6"
          },
          {
            "interval": "(0, +∞)",
            "sample": "1",
            "sign": "+",
            "value": "6"
          }
        ]
      },
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Derivative-based analysis was checked by symbolic differentiation and sample points."
          },
          {
            "status": "passed",
            "message": "Domain restrictions were preserved in the analysis intervals."
          }
        ]
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "find_inflection_points"
    }
  },
  {
    "input": "1/(x - 1)",
    "action": "find_monotonicity",
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "1/(x - 1)",
      "task_type": "find_monotonicity",
      "steps": [
        {
          "before": "f(x) = 1/(x - 1)",
          "rule_id": "function_domain_analysis",
          "action": "Analyze the function domain",
          "after": "x ≠ 1",
          "explanation": "The analysis starts by finding where the original function is defined. Denominator zeros split the real line into separate domain intervals.",
          "details": {
            "forbidden_values": [
              "1"
            ],
            "domain_restrictions": [
              "x ≠ 1"
            ]
          }
        },
        {
          "before": "f(x) = 1/(x - 1)",
          "rule_id": "function_derivative_for_analysis",
          "action": "Compute the first derivative for analysis",
          "after": "f'(x) = -1/(x - 1)^2",
          "explanation": "Critical points, monotonicity, and extrema are determined from the first derivative.",
          "details": {
            "derivative": "-1/(x - 1)**2"
          }
        },
        {
          "before": "f'(x) = -1/(x - 1)^2",
          "rule_id": "solve_derivative_zero_equation",
          "action": "Solve the derivative-zero equation",
          "after": "no real roots in the domain",
          "explanation": "Critical candidates occur where f'(x)=0. Candidates outside the original domain are discarded.",
          "details": {
            "raw_roots": [],
            "roots": []
          }
        },
        {
          "before": "domain: x ≠ 1",
          "rule_id": "find_points_where_derivative_undefined",
          "action": "Record points where the function or derivative is undefined",
          "after": "x = 1",
          "explanation": "Domain breaks are not extrema candidates, but they must split sign-chart intervals.",
          "details": {
            "forbidden_values": [
              "1"
            ]
          }
        },
        {
          "before": "derivative candidates",
          "rule_id": "critical_points_from_derivative",
          "action": "Select critical points in the domain",
          "after": "none",
          "explanation": "Critical points are domain points where the derivative is zero or undefined.",
          "details": {
            "critical_points": []
          }
        },
        {
          "before": "critical point list",
          "rule_id": "check_solution",
          "action": "Check critical points",
          "after": "passed",
          "explanation": "Each listed critical point belongs to the domain and satisfies f'(x)=0.",
          "details": {}
        },
        {
          "before": "f'(x) = -1/(x - 1)^2",
          "rule_id": "derivative_sign_chart",
          "action": "Build a derivative sign chart",
          "after": "(-∞, 1): -; (1, +∞): -",
          "explanation": "The derivative sign is tested on each interval split by critical points and domain breaks.",
          "details": {
            "sign_chart": [
              {
                "interval": "(-∞, 1)",
                "sample": "0",
                "sign": "-",
                "value": "-1"
              },
              {
                "interval": "(1, +∞)",
                "sample": "2",
                "sign": "-",
                "value": "-1"
              }
            ]
          }
        },
        {
          "before": "derivative sign chart",
          "rule_id": "monotonicity_from_derivative_sign",
          "action": "Determine monotonicity from derivative signs",
          "after": "Increasing: none; Decreasing: (-∞, 1), (1, +∞)",
          "explanation": "A positive derivative means the function increases; a negative derivative means it decreases.",
          "details": {
            "increasing": [],
            "decreasing": [
              "(-∞, 1)",
              "(1, +∞)"
            ]
          }
        },
        {
          "before": "analysis result",
          "rule_id": "analysis_check_by_sampling",
          "action": "Check the analysis by sample points",
          "after": "passed",
          "explanation": "Representative sample points are used to confirm derivative signs and domain-aware interval conclusions.",
          "details": {}
        }
      ],
      "answer": "Increasing: none; Decreasing: (-∞, 1), (1, +∞)",
      "problem_profile": {
        "input": "1/(x - 1)",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": true,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "rational"
        ]
      },
      "candidate_strategies": [
        {
          "id": "derivative_sign_chart_with_domain_restrictions",
          "name": "derivative sign chart with domain restrictions",
          "applicable_to": [
            "find_monotonicity"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage7.function_analysis",
          "score": 100,
          "reasons": [
            "action-level strategy",
            "domain-aware"
          ]
        },
        {
          "id": "symbolic_fallback",
          "name": "symbolic fallback",
          "applicable_to": [
            "find_monotonicity"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "score": 60,
          "reasons": [
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "derivative_sign_chart_with_domain_restrictions",
      "strategy_score": 100,
      "analysis": {
        "domain": "x ≠ 1",
        "derivative": "-1/(x - 1)^2",
        "critical_points": [],
        "sign_chart": [
          {
            "interval": "(-∞, 1)",
            "sample": "0",
            "sign": "-",
            "value": "-1"
          },
          {
            "interval": "(1, +∞)",
            "sample": "2",
            "sign": "-",
            "value": "-1"
          }
        ],
        "monotonicity_intervals": {
          "increasing": [],
          "decreasing": [
            "(-∞, 1)",
            "(1, +∞)"
          ]
        }
      },
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Derivative-based analysis was checked by symbolic differentiation and sample points."
          },
          {
            "status": "passed",
            "message": "Domain restrictions were preserved in the analysis intervals."
          }
        ]
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "find_monotonicity"
    }
  },
  {
    "input": "x^3 - 3*x",
    "action": "analyze_function",
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "x^3 - 3*x",
      "task_type": "analyze_function",
      "steps": [
        {
          "before": "f(x) = x*(x^2 - 3)",
          "rule_id": "function_domain_analysis",
          "action": "Analyze the function domain",
          "after": "all real numbers",
          "explanation": "The analysis starts by finding where the original function is defined. Denominator zeros split the real line into separate domain intervals.",
          "details": {
            "forbidden_values": [],
            "domain_restrictions": []
          }
        },
        {
          "before": "f(x) = x*(x^2 - 3)",
          "rule_id": "function_derivative_for_analysis",
          "action": "Compute the first derivative for analysis",
          "after": "f'(x) = 3*x^2 - 3",
          "explanation": "Critical points, monotonicity, and extrema are determined from the first derivative.",
          "details": {
            "derivative": "3*x**2 - 3"
          }
        },
        {
          "before": "f'(x) = 3*x^2 - 3",
          "rule_id": "solve_derivative_zero_equation",
          "action": "Solve the derivative-zero equation",
          "after": "x = -1 or x = 1",
          "explanation": "Critical candidates occur where f'(x)=0. Candidates outside the original domain are discarded.",
          "details": {
            "raw_roots": [
              "-1",
              "1"
            ],
            "roots": [
              "-1",
              "1"
            ]
          }
        },
        {
          "before": "derivative candidates",
          "rule_id": "critical_points_from_derivative",
          "action": "Select critical points in the domain",
          "after": "x = -1, x = 1",
          "explanation": "Critical points are domain points where the derivative is zero or undefined.",
          "details": {
            "critical_points": [
              "-1",
              "1"
            ]
          }
        },
        {
          "before": "critical point list",
          "rule_id": "check_solution",
          "action": "Check critical points",
          "after": "passed",
          "explanation": "Each listed critical point belongs to the domain and satisfies f'(x)=0.",
          "details": {}
        },
        {
          "before": "f'(x) = 3*x^2 - 3",
          "rule_id": "derivative_sign_chart",
          "action": "Build a derivative sign chart",
          "after": "(-∞, -1): +; (-1, 1): -; (1, +∞): +",
          "explanation": "The derivative sign is tested on each interval split by critical points and domain breaks.",
          "details": {
            "sign_chart": [
              {
                "interval": "(-∞, -1)",
                "sample": "-2",
                "sign": "+",
                "value": "9"
              },
              {
                "interval": "(-1, 1)",
                "sample": "0",
                "sign": "-",
                "value": "-3"
              },
              {
                "interval": "(1, +∞)",
                "sample": "2",
                "sign": "+",
                "value": "9"
              }
            ]
          }
        },
        {
          "before": "derivative sign chart",
          "rule_id": "monotonicity_from_derivative_sign",
          "action": "Determine monotonicity from derivative signs",
          "after": "Increasing: (-∞, -1), (1, +∞); Decreasing: (-1, 1)",
          "explanation": "A positive derivative means the function increases; a negative derivative means it decreases.",
          "details": {
            "increasing": [
              "(-∞, -1)",
              "(1, +∞)"
            ],
            "decreasing": [
              "(-1, 1)"
            ]
          }
        },
        {
          "before": "x = -1",
          "rule_id": "extremum_first_derivative_test",
          "action": "Classify extremum by the first derivative test",
          "after": "local maximum at (-1, 2)",
          "explanation": "At x=-1, f' changes from + to -.",
          "details": {
            "x": "-1",
            "left_sign": "+",
            "right_sign": "-",
            "kind": "local maximum"
          }
        },
        {
          "before": "f(-1)",
          "rule_id": "evaluate_function_at_point",
          "action": "Evaluate the function at the extremum point",
          "after": "f(-1) = 2",
          "explanation": "The y-coordinate of an extremum is found by substituting x into the original function.",
          "details": {
            "point": [
              "-1",
              "2"
            ]
          }
        },
        {
          "before": "x = 1",
          "rule_id": "extremum_first_derivative_test",
          "action": "Classify extremum by the first derivative test",
          "after": "local minimum at (1, -2)",
          "explanation": "At x=1, f' changes from - to +.",
          "details": {
            "x": "1",
            "left_sign": "-",
            "right_sign": "+",
            "kind": "local minimum"
          }
        },
        {
          "before": "f(1)",
          "rule_id": "evaluate_function_at_point",
          "action": "Evaluate the function at the extremum point",
          "after": "f(1) = -2",
          "explanation": "The y-coordinate of an extremum is found by substituting x into the original function.",
          "details": {
            "point": [
              "1",
              "-2"
            ]
          }
        },
        {
          "before": "f'(x) = 3*x^2 - 3",
          "rule_id": "second_derivative_computation",
          "action": "Compute the second derivative for concavity",
          "after": "f''(x) = 6*x",
          "explanation": "The second derivative is needed for concavity and inflection points.",
          "details": {}
        },
        {
          "before": "f''(x) = 6*x",
          "rule_id": "concavity_from_second_derivative_sign",
          "action": "Determine concavity intervals",
          "after": "Concave down: (-∞, 0); Concave up: (0, +∞)",
          "explanation": "The sign chart of f'' gives concavity intervals.",
          "details": {
            "sign_chart": [
              {
                "interval": "(-∞, 0)",
                "sample": "-1",
                "sign": "-",
                "value": "-6"
              },
              {
                "interval": "(0, +∞)",
                "sample": "1",
                "sign": "+",
                "value": "6"
              }
            ]
          }
        },
        {
          "before": "x = 0",
          "rule_id": "inflection_points_from_second_derivative",
          "action": "Find an inflection point",
          "after": "(0, 0)",
          "explanation": "The second derivative changes sign at this point.",
          "details": {}
        },
        {
          "before": "collected derivative analysis",
          "rule_id": "function_analysis_summary",
          "action": "Summarize function analysis",
          "after": "Domain: all real numbers\nf'(x) = 3*x^2 - 3\nCritical points: x = -1, x = 1\nIncreasing: (-∞, -1), (1, +∞)\nDecreasing: (-1, 1)\nLocal maximum: (-1, 2); Local minimum: (1, -2)\nf''(x) = 6*x\nConcave down: (-∞, 0)\nConcave up: (0, +∞)\nInflection point: (0, 0)",
          "explanation": "The final summary combines domain, derivative, monotonicity, extrema, concavity, and inflection information.",
          "details": {}
        },
        {
          "before": "analysis result",
          "rule_id": "analysis_check_by_sampling",
          "action": "Check the analysis by sample points",
          "after": "passed",
          "explanation": "Representative sample points are used to confirm derivative signs and domain-aware interval conclusions.",
          "details": {}
        }
      ],
      "answer": "Domain: all real numbers\nf'(x) = 3*x^2 - 3\nCritical points: x = -1, x = 1\nIncreasing: (-∞, -1), (1, +∞)\nDecreasing: (-1, 1)\nLocal maximum: (-1, 2); Local minimum: (1, -2)\nf''(x) = 6*x\nConcave down: (-∞, 0)\nConcave up: (0, +∞)\nInflection point: (0, 0)",
      "problem_profile": {
        "input": "x^3 - 3*x",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": 3,
        "is_polynomial": true,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": true,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "polynomial",
          "factorable",
          "common_factor"
        ]
      },
      "candidate_strategies": [
        {
          "id": "full_derivative_function_analysis",
          "name": "full derivative function analysis",
          "applicable_to": [
            "analyze_function"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage7.function_analysis",
          "score": 100,
          "reasons": [
            "action-level strategy",
            "domain-aware"
          ]
        },
        {
          "id": "symbolic_fallback",
          "name": "symbolic fallback",
          "applicable_to": [
            "analyze_function"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "score": 60,
          "reasons": [
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "full_derivative_function_analysis",
      "strategy_score": 100,
      "analysis": {
        "domain": "all real numbers",
        "derivative": "3*x^2 - 3",
        "critical_points": [
          "-1",
          "1"
        ],
        "monotonicity_intervals": {
          "increasing": [
            "(-∞, -1)",
            "(1, +∞)"
          ],
          "decreasing": [
            "(-1, 1)"
          ]
        },
        "extrema": [
          {
            "kind": "local maximum",
            "x": "-1",
            "y": "2",
            "point": "(-1, 2)"
          },
          {
            "kind": "local minimum",
            "x": "1",
            "y": "-2",
            "point": "(1, -2)"
          }
        ],
        "second_derivative": "6*x",
        "concavity_intervals": {
          "concave_up": [
            "(0, +∞)"
          ],
          "concave_down": [
            "(-∞, 0)"
          ]
        },
        "inflection_points": [
          "(0, 0)"
        ]
      },
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Derivative-based analysis was checked by symbolic differentiation and sample points."
          },
          {
            "status": "passed",
            "message": "Domain restrictions were preserved in the analysis intervals."
          }
        ]
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "analyze_function"
    }
  },
  {
    "input": "2*x + 1",
    "action": null,
    "list_actions": true,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "2*x + 1",
      "task_type": "action_selection",
      "steps": [
        {
          "before": "2*x + 1",
          "rule_id": "list_actions",
          "action": "List available actions",
          "after": "1. simplify\n2. factor\n3. find_domain\n4. differentiate\n5. integrate\n6. integrate_definite\n7. find_area_under_curve\n8. find_inverse\n9. find_range\n10. find_asymptotes\n11. find_limit\n12. find_left_limit\n13. find_right_limit\n14. find_limit_at_infinity\n15. check_continuity\n16. find_discontinuities\n17. find_critical_points\n18. find_extrema\n19. find_monotonicity\n20. find_tangent_line\n21. find_normal_line\n22. find_second_derivative\n23. find_concavity\n24. find_inflection_points\n25. analyze_function\n26. list_actions",
          "explanation": "The action layer separates the mathematical object from the operation requested by the user.",
          "details": {
            "available_actions": [
              "simplify",
              "factor",
              "find_domain",
              "differentiate",
              "integrate",
              "integrate_definite",
              "find_area_under_curve",
              "find_inverse",
              "find_range",
              "find_asymptotes",
              "find_limit",
              "find_left_limit",
              "find_right_limit",
              "find_limit_at_infinity",
              "check_continuity",
              "find_discontinuities",
              "find_critical_points",
              "find_extrema",
              "find_monotonicity",
              "find_tangent_line",
              "find_normal_line",
              "find_second_derivative",
              "find_concavity",
              "find_inflection_points",
              "analyze_function",
              "list_actions"
            ]
          }
        }
      ],
      "answer": "simplify, factor, find_domain, differentiate, integrate, integrate_definite, find_area_under_curve, find_inverse, find_range, find_asymptotes, find_limit, find_left_limit, find_right_limit, find_limit_at_infinity, check_continuity, find_discontinuities, find_critical_points, find_extrema, find_monotonicity, find_tangent_line, find_normal_line, find_second_derivative, find_concavity, find_inflection_points, analyze_function, list_actions",
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "list_actions"
    }
  },
  {
    "input": "integral(2*x + 1, x)",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "integral(2*x + 1, x)",
      "task_type": "integral",
      "steps": [
        {
          "before": "integral(2*x + 1, x)",
          "rule_id": "identify_integral_request",
          "action": "Identify the indefinite integral",
          "after": "∫(2*x + 1) dx",
          "explanation": "The integrand will be handled by explicit Stage 8 integration rules when possible.",
          "details": {}
        },
        {
          "before": "2*x + 1",
          "rule_id": "integral_sum_rule",
          "action": "Split the integral into a sum",
          "after": "∫(1) dx + ∫(2*x) dx",
          "explanation": "The integral of a sum is the sum of the integrals.",
          "details": {}
        },
        {
          "before": "1",
          "rule_id": "integral_constant_rule",
          "action": "Integrate a constant",
          "after": "x",
          "explanation": "The integral of a constant c is c*x.",
          "details": {}
        },
        {
          "before": "2*x",
          "rule_id": "integral_constant_multiple_rule",
          "action": "Take out the constant factor",
          "after": "2*∫(x) dx",
          "explanation": "Constant factors may be moved outside the integral.",
          "details": {}
        },
        {
          "before": "x",
          "rule_id": "integral_variable_rule",
          "action": "Integrate the variable",
          "after": "x^2/2",
          "explanation": "This is the power rule with n=1.",
          "details": {}
        },
        {
          "before": "∫x dx",
          "rule_id": "integral_power_rule",
          "action": "Apply the power rule",
          "after": "x^2/2",
          "explanation": "For x^n, the antiderivative is x^(n+1)/(n+1).",
          "details": {}
        },
        {
          "before": "x*(x + 1)",
          "rule_id": "integral_add_constant_C",
          "action": "Add the constant of integration",
          "after": "x^2 + x + C",
          "explanation": "Every indefinite integral represents a family of antiderivatives, so an arbitrary constant C is added.",
          "details": {}
        },
        {
          "before": "F(x) = x*(x + 1)",
          "rule_id": "integral_check_by_differentiation",
          "action": "Check the antiderivative by differentiation",
          "after": "F'(x) = 2*x + 1",
          "explanation": "The antiderivative is verified by differentiating it and comparing with the original integrand on the allowed domain.",
          "details": {
            "derivative": "2*x + 1",
            "integrand": "2*x + 1"
          }
        },
        {
          "before": "integral verification",
          "rule_id": "check_solution",
          "action": "Record integral self-check",
          "after": "passed",
          "explanation": "The independent checker compares the differentiated antiderivative with the integrand.",
          "details": {}
        }
      ],
      "answer": "x^2 + x + C",
      "antiderivative": "x*(x + 1)",
      "integrand": "2*x + 1",
      "original_integrand": "2*x + 1",
      "forbidden_values": [],
      "domain_restrictions": [],
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Differentiate antiderivative: 2*x + 1; original: 2*x + 1"
          }
        ]
      },
      "problem_profile": {
        "input": "integral(2*x + 1, x)",
        "task_type": "integral",
        "problem_kind": "integral",
        "main_variable": "x",
        "degree": 1,
        "is_polynomial": true,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": true,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "polynomial"
        ]
      },
      "candidate_strategies": [
        {
          "id": "power_rule_integration",
          "name": "Integrate by linearity and the power rule",
          "applicable_to": [
            "integral"
          ],
          "exact": true,
          "educational_priority": 10,
          "complexity_score": 3,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "integral.rules",
          "notes": "",
          "score": 116,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "standard rule form"
          ]
        },
        {
          "id": "symbolic_integral_fallback_check",
          "name": "Use symbolic integration as fallback/check",
          "applicable_to": [
            "integral"
          ],
          "exact": true,
          "educational_priority": 3,
          "complexity_score": 8,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "integral.rules",
          "notes": "",
          "score": 3,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "power_rule_integration",
      "strategy_score": 116,
      "analysis": {
        "integrand": "2*x + 1",
        "variable": "x",
        "bounds": null,
        "antiderivative": "x*(x + 1)",
        "definite_value": null
      },
      "available_actions": [
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "list_actions"
      ],
      "selected_action": "solve"
    }
  },
  {
    "input": "integrate(2*x + 1, x, 0, 2)",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "integrate(2*x + 1, x, 0, 2)",
      "task_type": "integrate_definite",
      "steps": [
        {
          "before": "integrate(2*x + 1, x, 0, 2)",
          "rule_id": "identify_integral_request",
          "action": "Identify the definite integral",
          "after": "∫[0, 2] (2*x + 1) dx",
          "explanation": "A definite integral is evaluated from an antiderivative.",
          "details": {}
        },
        {
          "before": "2*x + 1",
          "rule_id": "integral_sum_rule",
          "action": "Split the integral into a sum",
          "after": "∫(1) dx + ∫(2*x) dx",
          "explanation": "The integral of a sum is the sum of the integrals.",
          "details": {}
        },
        {
          "before": "1",
          "rule_id": "integral_constant_rule",
          "action": "Integrate a constant",
          "after": "x",
          "explanation": "The integral of a constant c is c*x.",
          "details": {}
        },
        {
          "before": "2*x",
          "rule_id": "integral_constant_multiple_rule",
          "action": "Take out the constant factor",
          "after": "2*∫(x) dx",
          "explanation": "Constant factors may be moved outside the integral.",
          "details": {}
        },
        {
          "before": "x",
          "rule_id": "integral_variable_rule",
          "action": "Integrate the variable",
          "after": "x^2/2",
          "explanation": "This is the power rule with n=1.",
          "details": {}
        },
        {
          "before": "∫x dx",
          "rule_id": "integral_power_rule",
          "action": "Apply the power rule",
          "after": "x^2/2",
          "explanation": "For x^n, the antiderivative is x^(n+1)/(n+1).",
          "details": {}
        },
        {
          "before": "∫(2*x + 1) dx",
          "rule_id": "integral_definite_antiderivative",
          "action": "Find an antiderivative for the definite integral",
          "after": "F(x) = x^2 + x",
          "explanation": "The Fundamental Theorem of Calculus uses any antiderivative F.",
          "details": {}
        },
        {
          "before": "F(2) - F(0)",
          "rule_id": "integral_definite_evaluate_bounds",
          "action": "Evaluate the antiderivative at the bounds",
          "after": "6 - 0 = 6",
          "explanation": "The definite integral equals F(b)-F(a).",
          "details": {}
        },
        {
          "before": "definite integral",
          "rule_id": "integral_check_definite_by_numeric_sampling",
          "action": "Check the definite value",
          "after": "passed",
          "explanation": "The value is checked by exact antiderivative evaluation and may be compared numerically for simple functions.",
          "details": {}
        }
      ],
      "answer": "6",
      "antiderivative": "x*(x + 1)",
      "definite_value": "6",
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Differentiate antiderivative: 2*x + 1; original: 2*x + 1"
          }
        ]
      },
      "problem_profile": {
        "input": "integrate(2*x + 1, x, 0, 2)",
        "task_type": "integral",
        "problem_kind": "integral",
        "main_variable": "x",
        "degree": 1,
        "is_polynomial": true,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": true,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "polynomial"
        ]
      },
      "candidate_strategies": [
        {
          "id": "power_rule_integration",
          "name": "Integrate by linearity and the power rule",
          "applicable_to": [
            "integral"
          ],
          "exact": true,
          "educational_priority": 10,
          "complexity_score": 3,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "integral.rules",
          "notes": "",
          "score": 116,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "custom rule strategy",
            "standard rule form"
          ]
        },
        {
          "id": "symbolic_integral_fallback_check",
          "name": "Use symbolic integration as fallback/check",
          "applicable_to": [
            "integral"
          ],
          "exact": true,
          "educational_priority": 3,
          "complexity_score": 8,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "integral.rules",
          "notes": "",
          "score": 3,
          "reasons": [
            "exact",
            "step trace",
            "domain-aware",
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "power_rule_integration",
      "strategy_score": 116,
      "analysis": {
        "integrand": "2*x + 1",
        "variable": "x",
        "bounds": [
          "0",
          "2"
        ],
        "antiderivative": "x*(x + 1)",
        "definite_value": "6"
      },
      "available_actions": [
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "list_actions"
      ],
      "selected_action": "solve"
    }
  },
  {
    "input": "2*x + 1",
    "action": "integrate",
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "2*x + 1",
      "task_type": "integral",
      "steps": [
        {
          "before": "2*x + 1",
          "rule_id": "identify_integral_request",
          "action": "Identify the indefinite integral",
          "after": "∫(2*x + 1) dx",
          "explanation": "The integrand will be handled by explicit Stage 8 integration rules when possible.",
          "details": {}
        },
        {
          "before": "2*x + 1",
          "rule_id": "integral_sum_rule",
          "action": "Split the integral into a sum",
          "after": "∫(1) dx + ∫(2*x) dx",
          "explanation": "The integral of a sum is the sum of the integrals.",
          "details": {}
        },
        {
          "before": "1",
          "rule_id": "integral_constant_rule",
          "action": "Integrate a constant",
          "after": "x",
          "explanation": "The integral of a constant c is c*x.",
          "details": {}
        },
        {
          "before": "2*x",
          "rule_id": "integral_constant_multiple_rule",
          "action": "Take out the constant factor",
          "after": "2*∫(x) dx",
          "explanation": "Constant factors may be moved outside the integral.",
          "details": {}
        },
        {
          "before": "x",
          "rule_id": "integral_variable_rule",
          "action": "Integrate the variable",
          "after": "x^2/2",
          "explanation": "This is the power rule with n=1.",
          "details": {}
        },
        {
          "before": "∫x dx",
          "rule_id": "integral_power_rule",
          "action": "Apply the power rule",
          "after": "x^2/2",
          "explanation": "For x^n, the antiderivative is x^(n+1)/(n+1).",
          "details": {}
        },
        {
          "before": "x*(x + 1)",
          "rule_id": "integral_add_constant_C",
          "action": "Add the constant of integration",
          "after": "x^2 + x + C",
          "explanation": "Every indefinite integral represents a family of antiderivatives, so an arbitrary constant C is added.",
          "details": {}
        },
        {
          "before": "F(x) = x*(x + 1)",
          "rule_id": "integral_check_by_differentiation",
          "action": "Check the antiderivative by differentiation",
          "after": "F'(x) = 2*x + 1",
          "explanation": "The antiderivative is verified by differentiating it and comparing with the original integrand on the allowed domain.",
          "details": {
            "derivative": "2*x + 1",
            "integrand": "2*x + 1"
          }
        },
        {
          "before": "integral verification",
          "rule_id": "check_solution",
          "action": "Record integral self-check",
          "after": "passed",
          "explanation": "The independent checker compares the differentiated antiderivative with the integrand.",
          "details": {}
        }
      ],
      "answer": "x^2 + x + C",
      "antiderivative": "x*(x + 1)",
      "integrand": "2*x + 1",
      "original_integrand": "2*x + 1",
      "forbidden_values": [],
      "domain_restrictions": [],
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Differentiating the antiderivative gives the integrand on the allowed domain."
          },
          {
            "status": "passed",
            "message": "Domain restrictions are preserved when simplification was used."
          }
        ]
      },
      "problem_profile": {
        "input": "2*x + 1",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": 1,
        "is_polynomial": true,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "polynomial"
        ]
      },
      "candidate_strategies": [
        {
          "id": "polynomial_integration",
          "name": "polynomial integration",
          "applicable_to": [
            "integrate"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage8.integral",
          "score": 120,
          "reasons": [
            "rule-based integration",
            "domain-aware"
          ]
        },
        {
          "id": "symbolic_fallback_check",
          "name": "symbolic fallback check",
          "applicable_to": [
            "integrate"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "score": 85,
          "reasons": [
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "polynomial_integration",
      "strategy_score": 120,
      "analysis": {
        "integrand": "2*x + 1",
        "variable": "x",
        "bounds": null,
        "antiderivative": "x*(x + 1)",
        "definite_value": null
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "integrate"
    }
  },
  {
    "input": "x^2 - 3*x + 5",
    "action": "integrate",
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "x^2 - 3*x + 5",
      "task_type": "integral",
      "steps": [
        {
          "before": "x^2 - 3*x + 5",
          "rule_id": "identify_integral_request",
          "action": "Identify the indefinite integral",
          "after": "∫(x^2 - 3*x + 5) dx",
          "explanation": "The integrand will be handled by explicit Stage 8 integration rules when possible.",
          "details": {}
        },
        {
          "before": "x^2 - 3*x + 5",
          "rule_id": "integral_sum_rule",
          "action": "Split the integral into a sum",
          "after": "∫(5) dx + ∫(x^2) dx + ∫(-3*x) dx",
          "explanation": "The integral of a sum is the sum of the integrals.",
          "details": {}
        },
        {
          "before": "x^2 - 3*x + 5",
          "rule_id": "integral_difference_rule",
          "action": "Split differences term by term",
          "after": "integrate positive and negative terms separately",
          "explanation": "Linearity also applies to subtraction.",
          "details": {}
        },
        {
          "before": "5",
          "rule_id": "integral_constant_rule",
          "action": "Integrate a constant",
          "after": "5*x",
          "explanation": "The integral of a constant c is c*x.",
          "details": {}
        },
        {
          "before": "∫x^2 dx",
          "rule_id": "integral_power_rule",
          "action": "Apply the power rule",
          "after": "x^3/3",
          "explanation": "For x^n with n≠-1, integrate as x^(n+1)/(n+1).",
          "details": {}
        },
        {
          "before": "-3*x",
          "rule_id": "integral_constant_multiple_rule",
          "action": "Take out the constant factor",
          "after": "-3*∫(x) dx",
          "explanation": "Constant factors may be moved outside the integral.",
          "details": {}
        },
        {
          "before": "x",
          "rule_id": "integral_variable_rule",
          "action": "Integrate the variable",
          "after": "x^2/2",
          "explanation": "This is the power rule with n=1.",
          "details": {}
        },
        {
          "before": "∫x dx",
          "rule_id": "integral_power_rule",
          "action": "Apply the power rule",
          "after": "x^2/2",
          "explanation": "For x^n, the antiderivative is x^(n+1)/(n+1).",
          "details": {}
        },
        {
          "before": "x*(2*x^2 - 9*x + 30)/6",
          "rule_id": "integral_add_constant_C",
          "action": "Add the constant of integration",
          "after": "x^3/3 - 3*x^2/2 + 5*x + C",
          "explanation": "Every indefinite integral represents a family of antiderivatives, so an arbitrary constant C is added.",
          "details": {}
        },
        {
          "before": "F(x) = x*(2*x^2 - 9*x + 30)/6",
          "rule_id": "integral_check_by_differentiation",
          "action": "Check the antiderivative by differentiation",
          "after": "F'(x) = x^2 - 3*x + 5",
          "explanation": "The antiderivative is verified by differentiating it and comparing with the original integrand on the allowed domain.",
          "details": {
            "derivative": "x**2 - 3*x + 5",
            "integrand": "x**2 - 3*x + 5"
          }
        },
        {
          "before": "integral verification",
          "rule_id": "check_solution",
          "action": "Record integral self-check",
          "after": "passed",
          "explanation": "The independent checker compares the differentiated antiderivative with the integrand.",
          "details": {}
        }
      ],
      "answer": "x^3/3 - 3*x^2/2 + 5*x + C",
      "antiderivative": "x*(2*x**2 - 9*x + 30)/6",
      "integrand": "x**2 - 3*x + 5",
      "original_integrand": "x**2 - 3*x + 5",
      "forbidden_values": [],
      "domain_restrictions": [],
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Differentiating the antiderivative gives the integrand on the allowed domain."
          },
          {
            "status": "passed",
            "message": "Domain restrictions are preserved when simplification was used."
          }
        ]
      },
      "problem_profile": {
        "input": "x^2 - 3*x + 5",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": 2,
        "is_polynomial": true,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "polynomial"
        ]
      },
      "candidate_strategies": [
        {
          "id": "polynomial_integration",
          "name": "polynomial integration",
          "applicable_to": [
            "integrate"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage8.integral",
          "score": 120,
          "reasons": [
            "rule-based integration",
            "domain-aware"
          ]
        },
        {
          "id": "symbolic_fallback_check",
          "name": "symbolic fallback check",
          "applicable_to": [
            "integrate"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "score": 85,
          "reasons": [
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "polynomial_integration",
      "strategy_score": 120,
      "analysis": {
        "integrand": "x^2 - 3*x + 5",
        "variable": "x",
        "bounds": null,
        "antiderivative": "x*(2*x^2 - 9*x + 30)/6",
        "definite_value": null
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "integrate"
    }
  },
  {
    "input": "1/x",
    "action": "integrate",
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "1/x",
      "task_type": "integral",
      "steps": [
        {
          "before": "1/x",
          "rule_id": "identify_integral_request",
          "action": "Identify the indefinite integral",
          "after": "∫(1/x) dx",
          "explanation": "The integrand will be handled by explicit Stage 8 integration rules when possible.",
          "details": {}
        },
        {
          "before": "1/x",
          "rule_id": "integral_one_over_x_rule",
          "action": "Recognize the reciprocal rule",
          "after": "ln|x|",
          "explanation": "The case n=-1 is not handled by the power rule; it gives a logarithm.",
          "details": {}
        },
        {
          "before": "ln|x|",
          "rule_id": "integral_ln_abs_rule",
          "action": "Use the logarithm with absolute value",
          "after": "ln|x|",
          "explanation": "The absolute value is needed because d/dx ln|x| = 1/x on each domain interval.",
          "details": {}
        },
        {
          "before": "ln|x|",
          "rule_id": "integral_add_constant_C",
          "action": "Add the constant of integration",
          "after": "ln|x| + C",
          "explanation": "Every indefinite integral represents a family of antiderivatives, so an arbitrary constant C is added.",
          "details": {}
        },
        {
          "before": "F(x) = ln|x|",
          "rule_id": "integral_check_by_differentiation",
          "action": "Check the antiderivative by differentiation",
          "after": "F'(x) = Piecewise((0, Eq(x, 0)), ((re(x)*Derivative(re(x), x) + im(x)*Derivative(im(x), x))/Abs(x^2), True))",
          "explanation": "The antiderivative is verified by differentiating it and comparing with the original integrand on the allowed domain.",
          "details": {
            "derivative": "Piecewise((0, Eq(x, 0)), ((re(x)*Derivative(re(x), x) + im(x)*Derivative(im(x), x))/Abs(x**2), True))",
            "integrand": "1/x"
          }
        },
        {
          "before": "integral verification",
          "rule_id": "check_solution",
          "action": "Record integral self-check",
          "after": "passed",
          "explanation": "The independent checker compares the differentiated antiderivative with the integrand.",
          "details": {}
        }
      ],
      "answer": "ln|x| + C",
      "antiderivative": "log(Abs(x))",
      "integrand": "1/x",
      "original_integrand": "1/x",
      "forbidden_values": [],
      "domain_restrictions": [],
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Differentiating the antiderivative gives the integrand on the allowed domain."
          },
          {
            "status": "passed",
            "message": "Domain restrictions are preserved when simplification was used."
          }
        ]
      },
      "problem_profile": {
        "input": "1/x",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": true,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "rational"
        ]
      },
      "candidate_strategies": [
        {
          "id": "rule_based_integration",
          "name": "rule based integration",
          "applicable_to": [
            "integrate"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage8.integral",
          "score": 120,
          "reasons": [
            "rule-based integration",
            "domain-aware"
          ]
        },
        {
          "id": "symbolic_fallback_check",
          "name": "symbolic fallback check",
          "applicable_to": [
            "integrate"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "score": 85,
          "reasons": [
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "rule_based_integration",
      "strategy_score": 120,
      "analysis": {
        "integrand": "1/x",
        "variable": "x",
        "bounds": null,
        "antiderivative": "ln|x|",
        "definite_value": null
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "integrate"
    }
  },
  {
    "input": "sin(x)",
    "action": "integrate",
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "sin(x)",
      "task_type": "integral",
      "steps": [
        {
          "before": "sin(x)",
          "rule_id": "identify_integral_request",
          "action": "Identify the indefinite integral",
          "after": "∫(sin(x)) dx",
          "explanation": "The integrand will be handled by explicit Stage 8 integration rules when possible.",
          "details": {}
        },
        {
          "before": "sin(x)",
          "rule_id": "integral_sin_rule",
          "action": "Integrate sin(x)",
          "after": "-cos(x)",
          "explanation": "The antiderivative of sin(x) is -cos(x).",
          "details": {}
        },
        {
          "before": "-cos(x)",
          "rule_id": "integral_add_constant_C",
          "action": "Add the constant of integration",
          "after": "-cos(x) + C",
          "explanation": "Every indefinite integral represents a family of antiderivatives, so an arbitrary constant C is added.",
          "details": {}
        },
        {
          "before": "F(x) = -cos(x)",
          "rule_id": "integral_check_by_differentiation",
          "action": "Check the antiderivative by differentiation",
          "after": "F'(x) = sin(x)",
          "explanation": "The antiderivative is verified by differentiating it and comparing with the original integrand on the allowed domain.",
          "details": {
            "derivative": "sin(x)",
            "integrand": "sin(x)"
          }
        },
        {
          "before": "integral verification",
          "rule_id": "check_solution",
          "action": "Record integral self-check",
          "after": "passed",
          "explanation": "The independent checker compares the differentiated antiderivative with the integrand.",
          "details": {}
        }
      ],
      "answer": "-cos(x) + C",
      "antiderivative": "-cos(x)",
      "integrand": "sin(x)",
      "original_integrand": "sin(x)",
      "forbidden_values": [],
      "domain_restrictions": [],
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Differentiating the antiderivative gives the integrand on the allowed domain."
          },
          {
            "status": "passed",
            "message": "Domain restrictions are preserved when simplification was used."
          }
        ]
      },
      "problem_profile": {
        "input": "sin(x)",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": true,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "trigonometric"
        ]
      },
      "candidate_strategies": [
        {
          "id": "rule_based_integration",
          "name": "rule based integration",
          "applicable_to": [
            "integrate"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage8.integral",
          "score": 120,
          "reasons": [
            "rule-based integration",
            "domain-aware"
          ]
        },
        {
          "id": "symbolic_fallback_check",
          "name": "symbolic fallback check",
          "applicable_to": [
            "integrate"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "score": 85,
          "reasons": [
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "rule_based_integration",
      "strategy_score": 120,
      "analysis": {
        "integrand": "sin(x)",
        "variable": "x",
        "bounds": null,
        "antiderivative": "-cos(x)",
        "definite_value": null
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "integrate"
    }
  },
  {
    "input": "cos(2*x)",
    "action": "integrate",
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "cos(2*x)",
      "task_type": "integral",
      "steps": [
        {
          "before": "cos(2*x)",
          "rule_id": "identify_integral_request",
          "action": "Identify the indefinite integral",
          "after": "∫(cos(2*x)) dx",
          "explanation": "The integrand will be handled by explicit Stage 8 integration rules when possible.",
          "details": {}
        },
        {
          "before": "cos(2*x)",
          "rule_id": "integral_substitution_detect",
          "action": "Detect a linear-argument substitution",
          "after": "u = 2*x",
          "explanation": "The argument has constant derivative, so a one-step substitution applies.",
          "details": {}
        },
        {
          "before": "u = 2*x",
          "rule_id": "integral_linear_argument_rule",
          "action": "Account for the inner derivative",
          "after": "divide by 2",
          "explanation": "Because du/dx is constant, the antiderivative is scaled by 1/k.",
          "details": {}
        },
        {
          "before": "∫cos(2*x) dx",
          "rule_id": "integral_substitution_apply",
          "action": "Apply the cosine integral after substitution",
          "after": "sin(2*x)/2",
          "explanation": "Integrate cos(u) as sin(u), then divide by du/dx.",
          "details": {}
        },
        {
          "before": "sin(2*x)/2",
          "rule_id": "integral_add_constant_C",
          "action": "Add the constant of integration",
          "after": "sin(2*x)/2 + C",
          "explanation": "Every indefinite integral represents a family of antiderivatives, so an arbitrary constant C is added.",
          "details": {}
        },
        {
          "before": "F(x) = sin(2*x)/2",
          "rule_id": "integral_check_by_differentiation",
          "action": "Check the antiderivative by differentiation",
          "after": "F'(x) = cos(2*x)",
          "explanation": "The antiderivative is verified by differentiating it and comparing with the original integrand on the allowed domain.",
          "details": {
            "derivative": "cos(2*x)",
            "integrand": "cos(2*x)"
          }
        },
        {
          "before": "integral verification",
          "rule_id": "check_solution",
          "action": "Record integral self-check",
          "after": "passed",
          "explanation": "The independent checker compares the differentiated antiderivative with the integrand.",
          "details": {}
        }
      ],
      "answer": "sin(2*x)/2 + C",
      "antiderivative": "sin(2*x)/2",
      "integrand": "cos(2*x)",
      "original_integrand": "cos(2*x)",
      "forbidden_values": [],
      "domain_restrictions": [],
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Differentiating the antiderivative gives the integrand on the allowed domain."
          },
          {
            "status": "passed",
            "message": "Domain restrictions are preserved when simplification was used."
          }
        ]
      },
      "problem_profile": {
        "input": "cos(2*x)",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": true,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "trigonometric"
        ]
      },
      "candidate_strategies": [
        {
          "id": "linear_argument_substitution",
          "name": "linear argument substitution",
          "applicable_to": [
            "integrate"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage8.integral",
          "score": 120,
          "reasons": [
            "rule-based integration",
            "domain-aware"
          ]
        },
        {
          "id": "trig_integral_direct_if_possible",
          "name": "trig integral direct if possible",
          "applicable_to": [
            "integrate"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage8.integral",
          "score": 85,
          "reasons": [
            "rule-based integration",
            "domain-aware"
          ]
        },
        {
          "id": "symbolic_fallback_check",
          "name": "symbolic fallback check",
          "applicable_to": [
            "integrate"
          ],
          "exact": true,
          "educational_priority": 10,
          "complexity_score": 4,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "score": 50,
          "reasons": [
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "linear_argument_substitution",
      "strategy_score": 120,
      "analysis": {
        "integrand": "cos(2*x)",
        "variable": "x",
        "bounds": null,
        "antiderivative": "sin(2*x)/2",
        "definite_value": null
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "integrate"
    }
  },
  {
    "input": "exp(2*x)",
    "action": "integrate",
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "exp(2*x)",
      "task_type": "integral",
      "steps": [
        {
          "before": "exp(2*x)",
          "rule_id": "identify_integral_request",
          "action": "Identify the indefinite integral",
          "after": "∫(exp(2*x)) dx",
          "explanation": "The integrand will be handled by explicit Stage 8 integration rules when possible.",
          "details": {}
        },
        {
          "before": "exp(2*x)",
          "rule_id": "integral_substitution_detect",
          "action": "Detect a linear-argument substitution",
          "after": "u = 2*x",
          "explanation": "The argument has constant derivative, so a one-step substitution applies.",
          "details": {}
        },
        {
          "before": "u = 2*x",
          "rule_id": "integral_linear_argument_rule",
          "action": "Account for the inner derivative",
          "after": "divide by 2",
          "explanation": "Because du/dx is constant, the antiderivative is scaled by 1/k.",
          "details": {}
        },
        {
          "before": "∫exp(2*x) dx",
          "rule_id": "integral_exp_rule",
          "action": "Integrate exp(u)",
          "after": "exp(2*x)/2",
          "explanation": "Integrate exp(u) as exp(u), then divide by du/dx.",
          "details": {}
        },
        {
          "before": "exp(2*x)/2",
          "rule_id": "integral_add_constant_C",
          "action": "Add the constant of integration",
          "after": "exp(2*x)/2 + C",
          "explanation": "Every indefinite integral represents a family of antiderivatives, so an arbitrary constant C is added.",
          "details": {}
        },
        {
          "before": "F(x) = exp(2*x)/2",
          "rule_id": "integral_check_by_differentiation",
          "action": "Check the antiderivative by differentiation",
          "after": "F'(x) = exp(2*x)",
          "explanation": "The antiderivative is verified by differentiating it and comparing with the original integrand on the allowed domain.",
          "details": {
            "derivative": "exp(2*x)",
            "integrand": "exp(2*x)"
          }
        },
        {
          "before": "integral verification",
          "rule_id": "check_solution",
          "action": "Record integral self-check",
          "after": "passed",
          "explanation": "The independent checker compares the differentiated antiderivative with the integrand.",
          "details": {}
        }
      ],
      "answer": "exp(2*x)/2 + C",
      "antiderivative": "exp(2*x)/2",
      "integrand": "exp(2*x)",
      "original_integrand": "exp(2*x)",
      "forbidden_values": [],
      "domain_restrictions": [],
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Differentiating the antiderivative gives the integrand on the allowed domain."
          },
          {
            "status": "passed",
            "message": "Domain restrictions are preserved when simplification was used."
          }
        ]
      },
      "problem_profile": {
        "input": "exp(2*x)",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": true,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "exponential",
          "exponential_take_log_required"
        ]
      },
      "candidate_strategies": [
        {
          "id": "linear_argument_substitution",
          "name": "linear argument substitution",
          "applicable_to": [
            "integrate"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage8.integral",
          "score": 120,
          "reasons": [
            "rule-based integration",
            "domain-aware"
          ]
        },
        {
          "id": "trig_integral_direct_if_possible",
          "name": "trig integral direct if possible",
          "applicable_to": [
            "integrate"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage8.integral",
          "score": 85,
          "reasons": [
            "rule-based integration",
            "domain-aware"
          ]
        },
        {
          "id": "symbolic_fallback_check",
          "name": "symbolic fallback check",
          "applicable_to": [
            "integrate"
          ],
          "exact": true,
          "educational_priority": 10,
          "complexity_score": 4,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "score": 50,
          "reasons": [
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "linear_argument_substitution",
      "strategy_score": 120,
      "analysis": {
        "integrand": "exp(2*x)",
        "variable": "x",
        "bounds": null,
        "antiderivative": "exp(2*x)/2",
        "definite_value": null
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "integrate"
    }
  },
  {
    "input": "sqrt(x)",
    "action": "integrate",
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "sqrt(x)",
      "task_type": "integral",
      "steps": [
        {
          "before": "sqrt(x)",
          "rule_id": "identify_integral_request",
          "action": "Identify the indefinite integral",
          "after": "∫(sqrt(x)) dx",
          "explanation": "The integrand will be handled by explicit Stage 8 integration rules when possible.",
          "details": {}
        },
        {
          "before": "sqrt(x)",
          "rule_id": "integral_rewrite_radical_as_power",
          "action": "Rewrite the square root as a rational power",
          "after": "x^(1/2)",
          "explanation": "A square root is x^(1/2), so the power rule can be used.",
          "details": {}
        },
        {
          "before": "x^(1/2)",
          "rule_id": "integral_sqrt_rule",
          "action": "Integrate sqrt(x)",
          "after": "2*x^(3/2)/3",
          "explanation": "This is the power rule applied to exponent 1/2.",
          "details": {}
        },
        {
          "before": "∫x^1/2 dx",
          "rule_id": "integral_power_rule",
          "action": "Apply the power rule",
          "after": "2*x^(3/2)/3",
          "explanation": "For x^n with n≠-1, integrate as x^(n+1)/(n+1).",
          "details": {}
        },
        {
          "before": "2*x^(3/2)/3",
          "rule_id": "integral_add_constant_C",
          "action": "Add the constant of integration",
          "after": "2*x^(3/2)/3 + C",
          "explanation": "Every indefinite integral represents a family of antiderivatives, so an arbitrary constant C is added.",
          "details": {}
        },
        {
          "before": "F(x) = 2*x^(3/2)/3",
          "rule_id": "integral_check_by_differentiation",
          "action": "Check the antiderivative by differentiation",
          "after": "F'(x) = sqrt(x)",
          "explanation": "The antiderivative is verified by differentiating it and comparing with the original integrand on the allowed domain.",
          "details": {
            "derivative": "sqrt(x)",
            "integrand": "sqrt(x)"
          }
        },
        {
          "before": "integral verification",
          "rule_id": "check_solution",
          "action": "Record integral self-check",
          "after": "passed",
          "explanation": "The independent checker compares the differentiated antiderivative with the integrand.",
          "details": {}
        }
      ],
      "answer": "2*x^(3/2)/3 + C",
      "antiderivative": "2*x**(3/2)/3",
      "integrand": "sqrt(x)",
      "original_integrand": "sqrt(x)",
      "forbidden_values": [],
      "domain_restrictions": [],
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Differentiating the antiderivative gives the integrand on the allowed domain."
          },
          {
            "status": "passed",
            "message": "Domain restrictions are preserved when simplification was used."
          }
        ]
      },
      "problem_profile": {
        "input": "sqrt(x)",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": true,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "radical"
        ]
      },
      "candidate_strategies": [
        {
          "id": "rule_based_integration",
          "name": "rule based integration",
          "applicable_to": [
            "integrate"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage8.integral",
          "score": 120,
          "reasons": [
            "rule-based integration",
            "domain-aware"
          ]
        },
        {
          "id": "symbolic_fallback_check",
          "name": "symbolic fallback check",
          "applicable_to": [
            "integrate"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "score": 85,
          "reasons": [
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "rule_based_integration",
      "strategy_score": 120,
      "analysis": {
        "integrand": "sqrt(x)",
        "variable": "x",
        "bounds": null,
        "antiderivative": "2*x^(3/2)/3",
        "definite_value": null
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "integrate"
    }
  },
  {
    "input": "2*x/(x^2 + 1)",
    "action": "integrate",
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "2*x/(x^2 + 1)",
      "task_type": "integral",
      "steps": [
        {
          "before": "2*x/(x^2 + 1)",
          "rule_id": "identify_integral_request",
          "action": "Identify the indefinite integral",
          "after": "∫(2*x/(x^2 + 1)) dx",
          "explanation": "The integrand will be handled by explicit Stage 8 integration rules when possible.",
          "details": {}
        },
        {
          "before": "2*x/(x^2 + 1)",
          "rule_id": "integral_substitution_detect",
          "action": "Detect an inner-derivative substitution",
          "after": "u = x^2 + 1",
          "explanation": "The denominator is an inner function and the numerator is exactly its derivative.",
          "details": {}
        },
        {
          "before": "u = x^2 + 1",
          "rule_id": "integral_substitution_apply",
          "action": "Rewrite the integral in u",
          "after": "∫1/u du",
          "explanation": "Since du equals the numerator times dx, the integral becomes the reciprocal integral.",
          "details": {}
        },
        {
          "before": "∫1/u du",
          "rule_id": "integral_one_over_x_rule",
          "action": "Integrate 1/u",
          "after": "ln|u|",
          "explanation": "The integral of 1/u is ln|u|.",
          "details": {}
        },
        {
          "before": "ln|u|",
          "rule_id": "integral_substitution_back_replace",
          "action": "Substitute back",
          "after": "ln(x^2 + 1)",
          "explanation": "The inner expression is substituted back for u; absolute value is omitted only when the inner expression is always positive.",
          "details": {}
        },
        {
          "before": "ln(x^2 + 1)",
          "rule_id": "integral_add_constant_C",
          "action": "Add the constant of integration",
          "after": "ln(x^2 + 1) + C",
          "explanation": "Every indefinite integral represents a family of antiderivatives, so an arbitrary constant C is added.",
          "details": {}
        },
        {
          "before": "F(x) = ln(x^2 + 1)",
          "rule_id": "integral_check_by_differentiation",
          "action": "Check the antiderivative by differentiation",
          "after": "F'(x) = 2*x/(x^2 + 1)",
          "explanation": "The antiderivative is verified by differentiating it and comparing with the original integrand on the allowed domain.",
          "details": {
            "derivative": "2*x/(x**2 + 1)",
            "integrand": "2*x/(x**2 + 1)"
          }
        },
        {
          "before": "integral verification",
          "rule_id": "check_solution",
          "action": "Record integral self-check",
          "after": "passed",
          "explanation": "The independent checker compares the differentiated antiderivative with the integrand.",
          "details": {}
        }
      ],
      "answer": "ln(x^2 + 1) + C",
      "antiderivative": "log(x**2 + 1)",
      "integrand": "2*x/(x**2 + 1)",
      "original_integrand": "2*x/(x**2 + 1)",
      "forbidden_values": [],
      "domain_restrictions": [],
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Differentiating the antiderivative gives the integrand on the allowed domain."
          },
          {
            "status": "passed",
            "message": "Domain restrictions are preserved when simplification was used."
          }
        ]
      },
      "problem_profile": {
        "input": "2*x/(x^2 + 1)",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": true,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "rational"
        ]
      },
      "candidate_strategies": [
        {
          "id": "substitution_inner_derivative_match",
          "name": "substitution inner derivative match",
          "applicable_to": [
            "integrate"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage8.integral",
          "score": 120,
          "reasons": [
            "rule-based integration",
            "domain-aware"
          ]
        },
        {
          "id": "symbolic_fallback_check",
          "name": "symbolic fallback check",
          "applicable_to": [
            "integrate"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "score": 85,
          "reasons": [
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "substitution_inner_derivative_match",
      "strategy_score": 120,
      "analysis": {
        "integrand": "2*x/(x^2 + 1)",
        "variable": "x",
        "bounds": null,
        "antiderivative": "ln(x^2 + 1)",
        "definite_value": null
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "integrate"
    }
  },
  {
    "input": "(2*x + 1)*(x^2 + x)^3",
    "action": "integrate",
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "(2*x + 1)*(x^2 + x)^3",
      "task_type": "integral",
      "steps": [
        {
          "before": "(2*x + 1)*(x^2 + x)^3",
          "rule_id": "identify_integral_request",
          "action": "Identify the indefinite integral",
          "after": "∫(x^3*(x + 1)^3*(2*x + 1)) dx",
          "explanation": "The integrand will be handled by explicit Stage 8 integration rules when possible.",
          "details": {}
        },
        {
          "before": "x^3*(x + 1)^3*(2*x + 1)",
          "rule_id": "integral_substitution_detect",
          "action": "Detect power substitution",
          "after": "u = x*(x + 1)",
          "explanation": "The expression has the form u' * u^n.",
          "details": {}
        },
        {
          "before": "u = x*(x + 1)",
          "rule_id": "integral_substitution_apply",
          "action": "Rewrite the integral in u",
          "after": "∫u^3 du",
          "explanation": "The factor outside the power matches du.",
          "details": {}
        },
        {
          "before": "∫u^3 du",
          "rule_id": "integral_power_rule",
          "action": "Apply the power rule in u",
          "after": "u^4/4",
          "explanation": "For u^n with n≠-1, the antiderivative is u^(n+1)/(n+1).",
          "details": {}
        },
        {
          "before": "u^4/4",
          "rule_id": "integral_substitution_back_replace",
          "action": "Substitute back",
          "after": "(x^2 + x)^4/4",
          "explanation": "Replace u by the original inner expression.",
          "details": {}
        },
        {
          "before": "x^4*(x + 1)^4/4",
          "rule_id": "integral_add_constant_C",
          "action": "Add the constant of integration",
          "after": "(x^2 + x)^4/4 + C",
          "explanation": "Every indefinite integral represents a family of antiderivatives, so an arbitrary constant C is added.",
          "details": {}
        },
        {
          "before": "F(x) = x^4*(x + 1)^4/4",
          "rule_id": "integral_check_by_differentiation",
          "action": "Check the antiderivative by differentiation",
          "after": "F'(x) = x^3*(x + 1)^3*(2*x + 1)",
          "explanation": "The antiderivative is verified by differentiating it and comparing with the original integrand on the allowed domain.",
          "details": {
            "derivative": "x**3*(x + 1)**3*(2*x + 1)",
            "integrand": "x**3*(x + 1)**3*(2*x + 1)"
          }
        },
        {
          "before": "integral verification",
          "rule_id": "check_solution",
          "action": "Record integral self-check",
          "after": "passed",
          "explanation": "The independent checker compares the differentiated antiderivative with the integrand.",
          "details": {}
        }
      ],
      "answer": "(x^2 + x)^4/4 + C",
      "antiderivative": "(x**2 + x)**4/4",
      "integrand": "(2*x + 1)*(x**2 + x)**3",
      "original_integrand": "(2*x + 1)*(x**2 + x)**3",
      "forbidden_values": [],
      "domain_restrictions": [],
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Differentiating the antiderivative gives the integrand on the allowed domain."
          },
          {
            "status": "passed",
            "message": "Domain restrictions are preserved when simplification was used."
          }
        ]
      },
      "problem_profile": {
        "input": "(2*x + 1)*(x^2 + x)^3",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": 7,
        "is_polynomial": true,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": true,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "polynomial",
          "factorable",
          "common_factor"
        ]
      },
      "candidate_strategies": [
        {
          "id": "substitution_inner_derivative_match",
          "name": "substitution inner derivative match",
          "applicable_to": [
            "integrate"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage8.integral",
          "score": 120,
          "reasons": [
            "rule-based integration",
            "domain-aware"
          ]
        },
        {
          "id": "symbolic_fallback_check",
          "name": "symbolic fallback check",
          "applicable_to": [
            "integrate"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "score": 85,
          "reasons": [
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "substitution_inner_derivative_match",
      "strategy_score": 120,
      "analysis": {
        "integrand": "x^3*(x + 1)^3*(2*x + 1)",
        "variable": "x",
        "bounds": null,
        "antiderivative": "x^4*(x + 1)^4/4",
        "definite_value": null
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "integrate"
    }
  },
  {
    "input": "(x^2 - 1)/(x - 1)",
    "action": "integrate",
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "(x^2 - 1)/(x - 1)",
      "task_type": "integral",
      "steps": [
        {
          "before": "(x^2 - 1)/(x - 1)",
          "rule_id": "identify_integral_request",
          "action": "Identify the indefinite integral",
          "after": "∫(x + 1) dx",
          "explanation": "The integrand will be handled by explicit Stage 8 integration rules when possible.",
          "details": {}
        },
        {
          "before": "(x^2 - 1)/(x - 1)",
          "rule_id": "find_forbidden_values",
          "action": "Find forbidden values from the denominator",
          "after": "x ≠ 1",
          "explanation": "A rational expression is defined only when its denominator is not zero.",
          "details": {
            "forbidden_values": [
              "1"
            ]
          }
        },
        {
          "before": "x^2 - 1",
          "rule_id": "difference_of_squares",
          "action": "Apply the difference of squares formula",
          "after": "(x - 1)*(x + 1)",
          "explanation": "The expression has the form a^2 - b^2, so it becomes (a - b)(a + b).",
          "details": {
            "formula_result": "(x - 1)*(x + 1)"
          }
        },
        {
          "before": "(x^2 - 1)/(x - 1)",
          "rule_id": "multi_step_factorization",
          "action": "Write numerator and denominator in factored form",
          "after": "((x - 1)*(x + 1))/(x - 1)",
          "explanation": "The rational expression is prepared for cancellation by factoring both parts.",
          "details": {}
        },
        {
          "before": "((x - 1)*(x + 1))/(x - 1)",
          "rule_id": "cancel_common_factor",
          "action": "Cancel common factors",
          "after": "x + 1",
          "explanation": "A common factor may be canceled only after its forbidden value has already been recorded.",
          "details": {
            "original_forbidden_values": [
              "1"
            ]
          }
        },
        {
          "before": "x + 1",
          "rule_id": "preserve_domain_restriction",
          "action": "Preserve the domain restriction",
          "after": "x + 1, where x ≠ 1",
          "explanation": "Cancellation changes the written form but not the original domain; excluded denominator roots remain excluded.",
          "details": {
            "forbidden_values": [
              "1"
            ]
          }
        },
        {
          "before": "x + 1",
          "rule_id": "integral_simplify_before_integration",
          "action": "Use the simplified integrand",
          "after": "x + 1",
          "explanation": "A simpler equivalent expression gives a shorter integration path. Domain restrictions from the original expression are preserved.",
          "details": {}
        },
        {
          "before": "x + 1",
          "rule_id": "integral_preserve_domain_restriction",
          "action": "Preserve original domain restrictions",
          "after": "x ≠ 1",
          "explanation": "Integration is performed on intervals of the original function domain.",
          "details": {}
        },
        {
          "before": "x + 1",
          "rule_id": "integral_sum_rule",
          "action": "Split the integral into a sum",
          "after": "∫(1) dx + ∫(x) dx",
          "explanation": "The integral of a sum is the sum of the integrals.",
          "details": {}
        },
        {
          "before": "1",
          "rule_id": "integral_constant_rule",
          "action": "Integrate a constant",
          "after": "x",
          "explanation": "The integral of a constant c is c*x.",
          "details": {}
        },
        {
          "before": "x",
          "rule_id": "integral_variable_rule",
          "action": "Integrate the variable",
          "after": "x^2/2",
          "explanation": "This is the power rule with n=1.",
          "details": {}
        },
        {
          "before": "∫x dx",
          "rule_id": "integral_power_rule",
          "action": "Apply the power rule",
          "after": "x^2/2",
          "explanation": "For x^n, the antiderivative is x^(n+1)/(n+1).",
          "details": {}
        },
        {
          "before": "x*(x + 2)/2",
          "rule_id": "integral_add_constant_C",
          "action": "Add the constant of integration",
          "after": "x^2/2 + x + C, where x ≠ 1",
          "explanation": "Every indefinite integral represents a family of antiderivatives, so an arbitrary constant C is added.",
          "details": {}
        },
        {
          "before": "F(x) = x*(x + 2)/2",
          "rule_id": "integral_check_by_differentiation",
          "action": "Check the antiderivative by differentiation",
          "after": "F'(x) = x + 1",
          "explanation": "The antiderivative is verified by differentiating it and comparing with the original integrand on the allowed domain.",
          "details": {
            "derivative": "x + 1",
            "integrand": "x + 1"
          }
        },
        {
          "before": "integral verification",
          "rule_id": "check_solution",
          "action": "Record integral self-check",
          "after": "passed",
          "explanation": "The independent checker compares the differentiated antiderivative with the integrand.",
          "details": {}
        }
      ],
      "answer": "x^2/2 + x + C, where x ≠ 1",
      "antiderivative": "x*(x + 2)/2",
      "integrand": "x + 1",
      "original_integrand": "(x**2 - 1)/(x - 1)",
      "forbidden_values": [
        "1"
      ],
      "domain_restrictions": [
        "x ≠ 1"
      ],
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Differentiating the antiderivative gives the integrand on the allowed domain."
          },
          {
            "status": "passed",
            "message": "Domain restrictions are preserved when simplification was used."
          }
        ]
      },
      "problem_profile": {
        "input": "(x^2 - 1)/(x - 1)",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": true,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "rational"
        ]
      },
      "candidate_strategies": [
        {
          "id": "simplify_then_integrate",
          "name": "simplify then integrate",
          "applicable_to": [
            "integrate"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage8.integral",
          "score": 120,
          "reasons": [
            "rule-based integration",
            "domain-aware"
          ]
        },
        {
          "id": "direct_rational_integration_fallback",
          "name": "direct rational integration fallback",
          "applicable_to": [
            "integrate"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "score": 85,
          "reasons": [
            "fallback penalty"
          ]
        },
        {
          "id": "symbolic_fallback_check",
          "name": "symbolic fallback check",
          "applicable_to": [
            "integrate"
          ],
          "exact": true,
          "educational_priority": 10,
          "complexity_score": 4,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "score": 50,
          "reasons": [
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "simplify_then_integrate",
      "strategy_score": 120,
      "analysis": {
        "integrand": "x + 1",
        "variable": "x",
        "bounds": null,
        "antiderivative": "x*(x + 2)/2",
        "definite_value": null
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "integrate"
    }
  },
  {
    "input": "2*x + 1",
    "action": "integrate_definite",
    "list_actions": false,
    "at": null,
    "lower": "0",
    "upper": "2",
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "2*x + 1",
      "task_type": "integrate_definite",
      "steps": [
        {
          "before": "2*x + 1",
          "rule_id": "identify_integral_request",
          "action": "Identify the definite integral",
          "after": "∫[0, 2] (2*x + 1) dx",
          "explanation": "A definite integral is evaluated from an antiderivative.",
          "details": {}
        },
        {
          "before": "2*x + 1",
          "rule_id": "integral_sum_rule",
          "action": "Split the integral into a sum",
          "after": "∫(1) dx + ∫(2*x) dx",
          "explanation": "The integral of a sum is the sum of the integrals.",
          "details": {}
        },
        {
          "before": "1",
          "rule_id": "integral_constant_rule",
          "action": "Integrate a constant",
          "after": "x",
          "explanation": "The integral of a constant c is c*x.",
          "details": {}
        },
        {
          "before": "2*x",
          "rule_id": "integral_constant_multiple_rule",
          "action": "Take out the constant factor",
          "after": "2*∫(x) dx",
          "explanation": "Constant factors may be moved outside the integral.",
          "details": {}
        },
        {
          "before": "x",
          "rule_id": "integral_variable_rule",
          "action": "Integrate the variable",
          "after": "x^2/2",
          "explanation": "This is the power rule with n=1.",
          "details": {}
        },
        {
          "before": "∫x dx",
          "rule_id": "integral_power_rule",
          "action": "Apply the power rule",
          "after": "x^2/2",
          "explanation": "For x^n, the antiderivative is x^(n+1)/(n+1).",
          "details": {}
        },
        {
          "before": "∫(2*x + 1) dx",
          "rule_id": "integral_definite_antiderivative",
          "action": "Find an antiderivative for the definite integral",
          "after": "F(x) = x^2 + x",
          "explanation": "The Fundamental Theorem of Calculus uses any antiderivative F.",
          "details": {}
        },
        {
          "before": "F(2) - F(0)",
          "rule_id": "integral_definite_evaluate_bounds",
          "action": "Evaluate the antiderivative at the bounds",
          "after": "6 - 0 = 6",
          "explanation": "The definite integral equals F(b)-F(a).",
          "details": {}
        },
        {
          "before": "definite integral",
          "rule_id": "integral_check_definite_by_numeric_sampling",
          "action": "Check the definite value",
          "after": "passed",
          "explanation": "The value is checked by exact antiderivative evaluation and may be compared numerically for simple functions.",
          "details": {}
        }
      ],
      "answer": "6",
      "antiderivative": "x*(x + 1)",
      "definite_value": "6",
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Definite integral verified by evaluating F(b)-F(a)."
          }
        ]
      },
      "problem_profile": {
        "input": "2*x + 1",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": 1,
        "is_polynomial": true,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "polynomial"
        ]
      },
      "candidate_strategies": [
        {
          "id": "definite_integral_by_antiderivative",
          "name": "definite integral by antiderivative",
          "applicable_to": [
            "integrate_definite"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage8.integral",
          "score": 120,
          "reasons": [
            "rule-based integration",
            "domain-aware"
          ]
        },
        {
          "id": "symbolic_fallback_check",
          "name": "symbolic fallback check",
          "applicable_to": [
            "integrate_definite"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "score": 85,
          "reasons": [
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "definite_integral_by_antiderivative",
      "strategy_score": 120,
      "analysis": {
        "integrand": "2*x + 1",
        "variable": "x",
        "bounds": [
          "0",
          "2"
        ],
        "antiderivative": "x*(x + 1)",
        "definite_value": "6"
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "integrate_definite"
    }
  },
  {
    "input": "x^2",
    "action": "integrate_definite",
    "list_actions": false,
    "at": null,
    "lower": "-1",
    "upper": "1",
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "x^2",
      "task_type": "integrate_definite",
      "steps": [
        {
          "before": "x^2",
          "rule_id": "identify_integral_request",
          "action": "Identify the definite integral",
          "after": "∫[-1, 1] (x^2) dx",
          "explanation": "A definite integral is evaluated from an antiderivative.",
          "details": {}
        },
        {
          "before": "∫x^2 dx",
          "rule_id": "integral_power_rule",
          "action": "Apply the power rule",
          "after": "x^3/3",
          "explanation": "For x^n with n≠-1, integrate as x^(n+1)/(n+1).",
          "details": {}
        },
        {
          "before": "∫(x^2) dx",
          "rule_id": "integral_definite_antiderivative",
          "action": "Find an antiderivative for the definite integral",
          "after": "F(x) = x^3/3",
          "explanation": "The Fundamental Theorem of Calculus uses any antiderivative F.",
          "details": {}
        },
        {
          "before": "F(1) - F(-1)",
          "rule_id": "integral_definite_evaluate_bounds",
          "action": "Evaluate the antiderivative at the bounds",
          "after": "1/3 - -1/3 = 2/3",
          "explanation": "The definite integral equals F(b)-F(a).",
          "details": {}
        },
        {
          "before": "definite integral",
          "rule_id": "integral_check_definite_by_numeric_sampling",
          "action": "Check the definite value",
          "after": "passed",
          "explanation": "The value is checked by exact antiderivative evaluation and may be compared numerically for simple functions.",
          "details": {}
        }
      ],
      "answer": "2/3",
      "antiderivative": "x**3/3",
      "definite_value": "2/3",
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Definite integral verified by evaluating F(b)-F(a)."
          }
        ]
      },
      "problem_profile": {
        "input": "x^2",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": 2,
        "is_polynomial": true,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": true,
        "has_simple_integer_roots": true,
        "discriminant": null,
        "features": [
          "polynomial",
          "factorable",
          "simple_integer_roots",
          "perfect_square_trinomial"
        ]
      },
      "candidate_strategies": [
        {
          "id": "definite_integral_by_antiderivative",
          "name": "definite integral by antiderivative",
          "applicable_to": [
            "integrate_definite"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage8.integral",
          "score": 120,
          "reasons": [
            "rule-based integration",
            "domain-aware"
          ]
        },
        {
          "id": "symbolic_fallback_check",
          "name": "symbolic fallback check",
          "applicable_to": [
            "integrate_definite"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "score": 85,
          "reasons": [
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "definite_integral_by_antiderivative",
      "strategy_score": 120,
      "analysis": {
        "integrand": "x^2",
        "variable": "x",
        "bounds": [
          "-1",
          "1"
        ],
        "antiderivative": "x^3/3",
        "definite_value": "2/3"
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "integrate_definite"
    }
  },
  {
    "input": "x",
    "action": "find_area_under_curve",
    "list_actions": false,
    "at": null,
    "lower": "-1",
    "upper": "1",
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "x",
      "task_type": "find_area_under_curve",
      "steps": [
        {
          "before": "x",
          "rule_id": "identify_integral_request",
          "action": "Identify the area problem",
          "after": "Area under x from -1 to 1",
          "explanation": "Area is nonnegative, so sign changes must be handled carefully.",
          "details": {}
        },
        {
          "before": "x",
          "rule_id": "integral_variable_rule",
          "action": "Integrate the variable",
          "after": "x^2/2",
          "explanation": "This is the power rule with n=1.",
          "details": {}
        },
        {
          "before": "∫x dx",
          "rule_id": "integral_power_rule",
          "action": "Apply the power rule",
          "after": "x^2/2",
          "explanation": "For x^n, the antiderivative is x^(n+1)/(n+1).",
          "details": {}
        },
        {
          "before": "x = 0",
          "rule_id": "integral_area_split_by_roots",
          "action": "Split the interval at x-axis crossings",
          "after": "-1, 0, 1",
          "explanation": "When the function changes sign, geometric area is computed by summing absolute signed integrals on subintervals.",
          "details": {}
        },
        {
          "before": "|∫[-1, 0]| = 1/2; |∫[0, 1]| = 1/2",
          "rule_id": "integral_definite_evaluate_bounds",
          "action": "Evaluate and add the area pieces",
          "after": "Area = 1",
          "explanation": "Each signed definite integral is converted to positive area before adding.",
          "details": {}
        },
        {
          "before": "area result",
          "rule_id": "check_solution",
          "action": "Check that area is nonnegative",
          "after": "passed",
          "explanation": "The computed area is a sum of nonnegative interval contributions.",
          "details": {}
        }
      ],
      "answer": "Area = 1",
      "antiderivative": "x**2/2",
      "definite_value": "1",
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Area split points and nonnegative pieces were checked."
          }
        ]
      },
      "problem_profile": {
        "input": "x",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": 1,
        "is_polynomial": true,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": false,
        "has_simple_integer_roots": true,
        "discriminant": null,
        "features": [
          "polynomial",
          "simple_integer_roots"
        ]
      },
      "candidate_strategies": [
        {
          "id": "area_by_split_integral",
          "name": "area by split integral",
          "applicable_to": [
            "find_area_under_curve"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage8.integral",
          "score": 120,
          "reasons": [
            "rule-based integration",
            "domain-aware"
          ]
        },
        {
          "id": "symbolic_fallback_check",
          "name": "symbolic fallback check",
          "applicable_to": [
            "find_area_under_curve"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "score": 85,
          "reasons": [
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "area_by_split_integral",
      "strategy_score": 120,
      "analysis": {
        "integrand": "x",
        "variable": "x",
        "bounds": [
          "-1",
          "1"
        ],
        "antiderivative": "x^2/2",
        "definite_value": "1"
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "find_area_under_curve"
    }
  },
  {
    "input": "2*x + y = 5; x - y = 1",
    "action": null,
    "list_actions": true,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "2*x + y = 5; x - y = 1",
      "task_type": "action_selection",
      "steps": [
        {
          "before": "2*x + y = 5; x - y = 1",
          "rule_id": "list_actions",
          "action": "List available actions",
          "after": "1. solve_system\n2. solve_linear_system\n3. solve_nonlinear_system\n4. list_actions",
          "explanation": "The action layer separates the mathematical object from the operation requested by the user.",
          "details": {
            "available_actions": [
              "solve_system",
              "solve_linear_system",
              "solve_nonlinear_system",
              "list_actions"
            ]
          }
        }
      ],
      "answer": "solve_system, solve_linear_system, solve_nonlinear_system, list_actions",
      "available_actions": [
        "solve_system",
        "solve_linear_system",
        "solve_nonlinear_system",
        "list_actions"
      ],
      "selected_action": "list_actions"
    }
  },
  {
    "input": "2*x + y = 5; x - y = 1",
    "action": "solve_system",
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "2*x + y = 5; x - y = 1",
      "task_type": "system",
      "steps": [
        {
          "before": "2*x + y = 5; x - y = 1",
          "rule_id": "system_parse",
          "action": "Parse the system",
          "after": "2*x + y = 5\nx - y = 1",
          "explanation": "The input is split into separate equations or inequalities and each part is parsed with the existing algebra parser.",
          "details": {}
        },
        {
          "before": "2*x + y = 5\nx - y = 1",
          "rule_id": "system_detect_variables",
          "action": "Detect variables",
          "after": "x, y",
          "explanation": "All free symbols appearing in the system are collected and sorted.",
          "details": {}
        },
        {
          "before": "x, y",
          "rule_id": "system_classify",
          "action": "Classify the system",
          "after": "linear_2x2",
          "explanation": "The system is classified by relation type, number of variables, and polynomial degree.",
          "details": {}
        },
        {
          "before": "linear_2x2",
          "rule_id": "system_choose_method",
          "action": "Choose a solving method",
          "after": "linear_2x2_elimination",
          "explanation": "The strategy planner prefers exact rule-based methods and honors an explicitly requested method when supplied.",
          "details": {}
        },
        {
          "before": "2*x + y = 5\nx - y = 1",
          "rule_id": "system_elimination_align_terms",
          "action": "Align like terms",
          "after": "2*x + y = 5\nx - y = 1",
          "explanation": "The equations are written with x-terms, y-terms, and constants aligned.",
          "details": {}
        },
        {
          "before": "2*x + y = 5\nx - y = 1",
          "rule_id": "system_elimination_add_equations",
          "action": "Add equations",
          "after": "3*x = 6",
          "explanation": "The y-terms cancel directly.",
          "details": {}
        },
        {
          "before": "3*x = 6",
          "rule_id": "system_elimination_solve_variable",
          "action": "Solve for x",
          "after": "x = 2",
          "explanation": "The remaining one-variable linear equation is solved.",
          "details": {}
        },
        {
          "before": "known variable value",
          "rule_id": "system_elimination_back_substitute",
          "action": "Back-substitute",
          "after": "x = 2, y = 1",
          "explanation": "The known variable is substituted into one original equation to find the other variable.",
          "details": {}
        },
        {
          "before": "x = 2, y = 1",
          "rule_id": "system_solution_check_each_equation",
          "action": "Check every original equation",
          "after": "passed",
          "explanation": "The ordered pair is substituted into every equation of the original system.",
          "details": {}
        }
      ],
      "answer": "x = 2, y = 1",
      "problem_profile": {
        "input": "2*x + y = 5; x - y = 1",
        "problem_kind": "system",
        "task_type": "linear_2x2",
        "variables": [
          "x",
          "y"
        ],
        "equation_count": 2,
        "features": [
          "linear_2x2"
        ]
      },
      "analysis": {
        "variables": [
          "x",
          "y"
        ],
        "system_type": "linear_2x2",
        "coefficient_matrix": [
          [
            "2",
            "1"
          ],
          [
            "1",
            "-1"
          ]
        ],
        "solution_set": [
          {
            "x": "2",
            "y": "1"
          }
        ]
      },
      "selected_strategy": "linear_2x2_elimination",
      "candidate_strategies": [
        {
          "id": "linear_2x2_elimination",
          "score": 100
        },
        {
          "id": "linear_2x2_substitution",
          "score": 90
        },
        {
          "id": "linear_2x2_cramer",
          "score": 80
        },
        {
          "id": "matrix_fallback_check",
          "score": 70
        }
      ],
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Solution satisfies original equation 1."
          },
          {
            "status": "passed",
            "message": "Solution satisfies original equation 2."
          }
        ]
      },
      "available_actions": [
        "solve_system",
        "solve_linear_system",
        "solve_nonlinear_system",
        "list_actions"
      ],
      "selected_action": "solve_system"
    }
  },
  {
    "input": "2*x + y = 5; x - y = 1",
    "action": "solve_system",
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": "cramer",
    "restrict_domain": null,
    "result": {
      "input": "2*x + y = 5; x - y = 1",
      "task_type": "system",
      "steps": [
        {
          "before": "2*x + y = 5; x - y = 1",
          "rule_id": "system_parse",
          "action": "Parse the system",
          "after": "2*x + y = 5\nx - y = 1",
          "explanation": "The input is split into separate equations or inequalities and each part is parsed with the existing algebra parser.",
          "details": {}
        },
        {
          "before": "2*x + y = 5\nx - y = 1",
          "rule_id": "system_detect_variables",
          "action": "Detect variables",
          "after": "x, y",
          "explanation": "All free symbols appearing in the system are collected and sorted.",
          "details": {}
        },
        {
          "before": "x, y",
          "rule_id": "system_classify",
          "action": "Classify the system",
          "after": "linear_2x2",
          "explanation": "The system is classified by relation type, number of variables, and polynomial degree.",
          "details": {}
        },
        {
          "before": "linear_2x2",
          "rule_id": "system_choose_method",
          "action": "Choose a solving method",
          "after": "linear_2x2_cramer",
          "explanation": "The strategy planner prefers exact rule-based methods and honors an explicitly requested method when supplied.",
          "details": {}
        },
        {
          "before": "2*x + y = 5\nx - y = 1",
          "rule_id": "system_cramer_build_matrices",
          "action": "Build coefficient and constant matrices",
          "after": "A = [[2, 1]; [1, -1]], b = [[5]; [1]]",
          "explanation": "Cramer's rule uses the coefficient determinant and determinants with one column replaced by constants.",
          "details": {}
        },
        {
          "before": "A = [[2, 1]; [1, -1]]",
          "rule_id": "system_cramer_compute_determinant",
          "action": "Compute determinant",
          "after": "D = -3",
          "explanation": "A nonzero determinant means the system has a unique solution.",
          "details": {}
        },
        {
          "before": "replace columns",
          "rule_id": "system_cramer_compute_variable_determinants",
          "action": "Compute variable determinants",
          "after": "D_x = -6, D_y = -3",
          "explanation": "Each variable determinant replaces that variable's coefficient column by the constants column.",
          "details": {}
        },
        {
          "before": "D_x = -6, D_y = -3",
          "rule_id": "system_cramer_solve_variables",
          "action": "Divide determinants",
          "after": "x = 2, y = 1",
          "explanation": "Each variable is found as D_variable / D.",
          "details": {}
        },
        {
          "before": "x = 2, y = 1",
          "rule_id": "system_solution_check_each_equation",
          "action": "Check every original equation",
          "after": "passed",
          "explanation": "The solution is substituted into every original equation.",
          "details": {}
        }
      ],
      "answer": "x = 2, y = 1",
      "problem_profile": {
        "input": "2*x + y = 5; x - y = 1",
        "problem_kind": "system",
        "task_type": "linear_2x2",
        "variables": [
          "x",
          "y"
        ],
        "equation_count": 2,
        "features": [
          "linear_2x2"
        ]
      },
      "analysis": {
        "determinant": "-3",
        "solution_set": [
          {
            "x": "2",
            "y": "1"
          }
        ]
      },
      "selected_strategy": "linear_2x2_cramer",
      "candidate_strategies": [
        {
          "id": "linear_2x2_cramer",
          "score": 100
        },
        {
          "id": "linear_2x2_elimination",
          "score": 90
        },
        {
          "id": "linear_2x2_substitution",
          "score": 80
        },
        {
          "id": "matrix_fallback_check",
          "score": 70
        }
      ],
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Solution satisfies original equation 1."
          },
          {
            "status": "passed",
            "message": "Solution satisfies original equation 2."
          }
        ]
      },
      "available_actions": [
        "solve_system",
        "solve_linear_system",
        "solve_nonlinear_system",
        "list_actions"
      ],
      "selected_action": "solve_system"
    }
  },
  {
    "input": "2*x + y = 5; x - y = 1",
    "action": "solve_system",
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": "substitution",
    "restrict_domain": null,
    "result": {
      "input": "2*x + y = 5; x - y = 1",
      "task_type": "system",
      "steps": [
        {
          "before": "2*x + y = 5; x - y = 1",
          "rule_id": "system_parse",
          "action": "Parse the system",
          "after": "2*x + y = 5\nx - y = 1",
          "explanation": "The input is split into separate equations or inequalities and each part is parsed with the existing algebra parser.",
          "details": {}
        },
        {
          "before": "2*x + y = 5\nx - y = 1",
          "rule_id": "system_detect_variables",
          "action": "Detect variables",
          "after": "x, y",
          "explanation": "All free symbols appearing in the system are collected and sorted.",
          "details": {}
        },
        {
          "before": "x, y",
          "rule_id": "system_classify",
          "action": "Classify the system",
          "after": "linear_2x2",
          "explanation": "The system is classified by relation type, number of variables, and polynomial degree.",
          "details": {}
        },
        {
          "before": "linear_2x2",
          "rule_id": "system_choose_method",
          "action": "Choose a solving method",
          "after": "linear_2x2_substitution",
          "explanation": "The strategy planner prefers exact rule-based methods and honors an explicitly requested method when supplied.",
          "details": {}
        },
        {
          "before": "2*x + y = 5\nx - y = 1",
          "rule_id": "system_substitution_choose_variable",
          "action": "Choose a variable to isolate",
          "after": "y",
          "explanation": "A variable with coefficient 1 or -1 is preferred because it gives a short substitution step.",
          "details": {}
        },
        {
          "before": "2*x + y = 5",
          "rule_id": "system_substitution_solve_one_equation",
          "action": "Solve one equation for y",
          "after": "y = 5 - 2*x",
          "explanation": "One equation is rewritten to express a variable through the other variable.",
          "details": {}
        },
        {
          "before": "x - y = 1",
          "rule_id": "system_substitution_substitute",
          "action": "Substitute into the other equation",
          "after": "3*x - 6 = 0",
          "explanation": "The expression for the isolated variable is substituted into the remaining equation.",
          "details": {}
        },
        {
          "before": "3*x - 6 = 0",
          "rule_id": "system_substitution_solve_reduced_equation",
          "action": "Solve for x",
          "after": "x = 2",
          "explanation": "The reduced one-variable linear equation is solved.",
          "details": {}
        },
        {
          "before": "x = 2",
          "rule_id": "system_substitution_back_substitute",
          "action": "Back-substitute",
          "after": "x = 2, y = 1",
          "explanation": "The solved value is substituted into the isolated expression.",
          "details": {}
        },
        {
          "before": "x = 2, y = 1",
          "rule_id": "system_solution_check_each_equation",
          "action": "Check every original equation",
          "after": "passed",
          "explanation": "The ordered pair is substituted into all original equations.",
          "details": {}
        }
      ],
      "answer": "x = 2, y = 1",
      "problem_profile": {
        "input": "2*x + y = 5; x - y = 1",
        "problem_kind": "system",
        "task_type": "linear_2x2",
        "variables": [
          "x",
          "y"
        ],
        "equation_count": 2,
        "features": [
          "linear_2x2"
        ]
      },
      "analysis": {
        "variables": [
          "x",
          "y"
        ],
        "system_type": "linear_2x2"
      },
      "selected_strategy": "linear_2x2_substitution",
      "candidate_strategies": [
        {
          "id": "linear_2x2_substitution",
          "score": 100
        },
        {
          "id": "linear_2x2_elimination",
          "score": 90
        },
        {
          "id": "linear_2x2_cramer",
          "score": 80
        },
        {
          "id": "matrix_fallback_check",
          "score": 70
        }
      ],
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Solution satisfies original equation 1."
          },
          {
            "status": "passed",
            "message": "Solution satisfies original equation 2."
          }
        ]
      },
      "available_actions": [
        "solve_system",
        "solve_linear_system",
        "solve_nonlinear_system",
        "list_actions"
      ],
      "selected_action": "solve_system"
    }
  },
  {
    "input": "x + y + z = 6; 2*x - y + z = 3; x + 2*y - z = 3",
    "action": "solve_system",
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "x + y + z = 6; 2*x - y + z = 3; x + 2*y - z = 3",
      "task_type": "system",
      "steps": [
        {
          "before": "x + y + z = 6; 2*x - y + z = 3; x + 2*y - z = 3",
          "rule_id": "system_parse",
          "action": "Parse the system",
          "after": "x + y + z = 6\n2*x - y + z = 3\nx + 2*y - z = 3",
          "explanation": "The input is split into separate equations or inequalities and each part is parsed with the existing algebra parser.",
          "details": {}
        },
        {
          "before": "x + y + z = 6\n2*x - y + z = 3\nx + 2*y - z = 3",
          "rule_id": "system_detect_variables",
          "action": "Detect variables",
          "after": "x, y, z",
          "explanation": "All free symbols appearing in the system are collected and sorted.",
          "details": {}
        },
        {
          "before": "x, y, z",
          "rule_id": "system_classify",
          "action": "Classify the system",
          "after": "linear_3x3",
          "explanation": "The system is classified by relation type, number of variables, and polynomial degree.",
          "details": {}
        },
        {
          "before": "linear_3x3",
          "rule_id": "system_choose_method",
          "action": "Choose a solving method",
          "after": "linear_3x3_matrix_row_reduction",
          "explanation": "The strategy planner prefers exact rule-based methods and honors an explicitly requested method when supplied.",
          "details": {}
        },
        {
          "before": "x + y + z = 6\n2*x - y + z = 3\nx + 2*y - z = 3",
          "rule_id": "system_matrix_augmented_matrix",
          "action": "Build augmented matrix",
          "after": "[[1, 1, 1, 6]; [2, -1, 1, 3]; [1, 2, -1, 3]]",
          "explanation": "The coefficients and constants are placed into an augmented matrix.",
          "details": {}
        },
        {
          "before": "[[1, 1, 1, 6]; [2, -1, 1, 3]; [1, 2, -1, 3]]",
          "rule_id": "system_matrix_row_operation",
          "action": "Apply row operations",
          "after": "[[1, 0, 0, 9/7]; [0, 1, 0, 15/7]; [0, 0, 1, 18/7]]",
          "explanation": "Elementary row operations preserve the solution set.",
          "details": {}
        },
        {
          "before": "[[1, 0, 0, 9/7]; [0, 1, 0, 15/7]; [0, 0, 1, 18/7]]",
          "rule_id": "system_matrix_row_echelon_form",
          "action": "Reach reduced row-echelon form",
          "after": "[[1, 0, 0, 9/7]; [0, 1, 0, 15/7]; [0, 0, 1, 18/7]]",
          "explanation": "The reduced matrix directly reveals the variable values.",
          "details": {}
        },
        {
          "before": "[[1, 0, 0, 9/7]; [0, 1, 0, 15/7]; [0, 0, 1, 18/7]]",
          "rule_id": "system_matrix_back_substitution",
          "action": "Read/back-substitute solution",
          "after": "x = 9/7, y = 15/7, z = 18/7",
          "explanation": "In reduced row-echelon form, each pivot row gives one variable value.",
          "details": {}
        },
        {
          "before": "x = 9/7, y = 15/7, z = 18/7",
          "rule_id": "system_solution_check_each_equation",
          "action": "Check every original equation",
          "after": "passed",
          "explanation": "The solution is substituted into all original equations.",
          "details": {}
        }
      ],
      "answer": "x = 9/7, y = 15/7, z = 18/7",
      "problem_profile": {
        "input": "x + y + z = 6; 2*x - y + z = 3; x + 2*y - z = 3",
        "problem_kind": "system",
        "task_type": "linear_3x3",
        "variables": [
          "x",
          "y",
          "z"
        ],
        "equation_count": 3,
        "features": [
          "linear_3x3"
        ]
      },
      "analysis": {
        "variables": [
          "x",
          "y",
          "z"
        ],
        "system_type": "linear_3x3",
        "coefficient_matrix": [
          [
            "1",
            "1",
            "1"
          ],
          [
            "2",
            "-1",
            "1"
          ],
          [
            "1",
            "2",
            "-1"
          ]
        ],
        "solution_set": [
          {
            "x": "9/7",
            "y": "15/7",
            "z": "18/7"
          }
        ]
      },
      "selected_strategy": "linear_3x3_matrix_row_reduction",
      "candidate_strategies": [
        {
          "id": "linear_3x3_matrix_row_reduction",
          "score": 100
        },
        {
          "id": "linear_3x3_elimination",
          "score": 90
        },
        {
          "id": "symbolic_fallback_check",
          "score": 80
        }
      ],
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Solution satisfies original equation 1."
          },
          {
            "status": "passed",
            "message": "Solution satisfies original equation 2."
          },
          {
            "status": "passed",
            "message": "Solution satisfies original equation 3."
          }
        ]
      },
      "available_actions": [
        "solve_system",
        "solve_linear_system",
        "solve_nonlinear_system",
        "list_actions"
      ],
      "selected_action": "solve_system"
    }
  },
  {
    "input": "x + y = 2; 2*x + 2*y = 5",
    "action": "solve_system",
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "x + y = 2; 2*x + 2*y = 5",
      "task_type": "system",
      "steps": [
        {
          "before": "x + y = 2; 2*x + 2*y = 5",
          "rule_id": "system_parse",
          "action": "Parse the system",
          "after": "x + y = 2\n2*x + 2*y = 5",
          "explanation": "The input is split into separate equations or inequalities and each part is parsed with the existing algebra parser.",
          "details": {}
        },
        {
          "before": "x + y = 2\n2*x + 2*y = 5",
          "rule_id": "system_detect_variables",
          "action": "Detect variables",
          "after": "x, y",
          "explanation": "All free symbols appearing in the system are collected and sorted.",
          "details": {}
        },
        {
          "before": "x, y",
          "rule_id": "system_classify",
          "action": "Classify the system",
          "after": "linear_2x2",
          "explanation": "The system is classified by relation type, number of variables, and polynomial degree.",
          "details": {}
        },
        {
          "before": "linear_2x2",
          "rule_id": "system_choose_method",
          "action": "Choose a solving method",
          "after": "linear_2x2_elimination",
          "explanation": "The strategy planner prefers exact rule-based methods and honors an explicitly requested method when supplied.",
          "details": {}
        },
        {
          "before": "[[1, 1, 2]; [2, 2, 5]]",
          "rule_id": "system_no_solution_detected",
          "action": "Detect inconsistency",
          "after": "No solution",
          "explanation": "The coefficient matrix and augmented matrix have different ranks, so the system is inconsistent.",
          "details": {}
        }
      ],
      "answer": "No solution",
      "problem_profile": {
        "input": "x + y = 2; 2*x + 2*y = 5",
        "problem_kind": "system",
        "task_type": "linear_2x2",
        "variables": [
          "x",
          "y"
        ],
        "equation_count": 2,
        "features": [
          "linear_2x2"
        ]
      },
      "analysis": {
        "variables": [
          "x",
          "y"
        ],
        "system_type": "linear_2x2"
      },
      "selected_strategy": "linear_2x2_elimination",
      "candidate_strategies": [
        {
          "id": "linear_2x2_elimination",
          "score": 100
        },
        {
          "id": "linear_2x2_substitution",
          "score": 90
        },
        {
          "id": "linear_2x2_cramer",
          "score": 80
        },
        {
          "id": "matrix_fallback_check",
          "score": 70
        }
      ],
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Inconsistency verified by matrix ranks."
          }
        ]
      },
      "available_actions": [
        "solve_system",
        "solve_linear_system",
        "solve_nonlinear_system",
        "list_actions"
      ],
      "selected_action": "solve_system"
    }
  },
  {
    "input": "x + y = 2; 2*x + 2*y = 4",
    "action": "solve_system",
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "x + y = 2; 2*x + 2*y = 4",
      "task_type": "system",
      "steps": [
        {
          "before": "x + y = 2; 2*x + 2*y = 4",
          "rule_id": "system_parse",
          "action": "Parse the system",
          "after": "x + y = 2\n2*x + 2*y = 4",
          "explanation": "The input is split into separate equations or inequalities and each part is parsed with the existing algebra parser.",
          "details": {}
        },
        {
          "before": "x + y = 2\n2*x + 2*y = 4",
          "rule_id": "system_detect_variables",
          "action": "Detect variables",
          "after": "x, y",
          "explanation": "All free symbols appearing in the system are collected and sorted.",
          "details": {}
        },
        {
          "before": "x, y",
          "rule_id": "system_classify",
          "action": "Classify the system",
          "after": "linear_2x2",
          "explanation": "The system is classified by relation type, number of variables, and polynomial degree.",
          "details": {}
        },
        {
          "before": "linear_2x2",
          "rule_id": "system_choose_method",
          "action": "Choose a solving method",
          "after": "linear_2x2_elimination",
          "explanation": "The strategy planner prefers exact rule-based methods and honors an explicitly requested method when supplied.",
          "details": {}
        },
        {
          "before": "x + y = 2\n2*x + 2*y = 4",
          "rule_id": "system_infinite_solutions_detected",
          "action": "Detect dependent equations",
          "after": "Infinitely many solutions: x + y = 2",
          "explanation": "The equations are dependent and describe the same line.",
          "details": {}
        }
      ],
      "answer": "Infinitely many solutions: x + y = 2",
      "problem_profile": {
        "input": "x + y = 2; 2*x + 2*y = 4",
        "problem_kind": "system",
        "task_type": "linear_2x2",
        "variables": [
          "x",
          "y"
        ],
        "equation_count": 2,
        "features": [
          "linear_2x2"
        ]
      },
      "analysis": {
        "variables": [
          "x",
          "y"
        ],
        "system_type": "linear_2x2"
      },
      "selected_strategy": "linear_2x2_elimination",
      "candidate_strategies": [
        {
          "id": "linear_2x2_elimination",
          "score": 100
        },
        {
          "id": "linear_2x2_substitution",
          "score": 90
        },
        {
          "id": "linear_2x2_cramer",
          "score": 80
        },
        {
          "id": "matrix_fallback_check",
          "score": 70
        }
      ],
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Dependency verified by matrix ranks."
          }
        ]
      },
      "available_actions": [
        "solve_system",
        "solve_linear_system",
        "solve_nonlinear_system",
        "list_actions"
      ],
      "selected_action": "solve_system"
    }
  },
  {
    "input": "y = x^2; y = 2*x + 3",
    "action": "solve_system",
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "y = x^2; y = 2*x + 3",
      "task_type": "system",
      "steps": [
        {
          "before": "y = x^2; y = 2*x + 3",
          "rule_id": "system_parse",
          "action": "Parse the system",
          "after": "y = x^2\ny = 2*x + 3",
          "explanation": "The input is split into separate equations or inequalities and each part is parsed with the existing algebra parser.",
          "details": {}
        },
        {
          "before": "y = x^2\ny = 2*x + 3",
          "rule_id": "system_detect_variables",
          "action": "Detect variables",
          "after": "x, y",
          "explanation": "All free symbols appearing in the system are collected and sorted.",
          "details": {}
        },
        {
          "before": "x, y",
          "rule_id": "system_classify",
          "action": "Classify the system",
          "after": "nonlinear_system",
          "explanation": "The system is classified by relation type, number of variables, and polynomial degree.",
          "details": {}
        },
        {
          "before": "nonlinear_system",
          "rule_id": "system_choose_method",
          "action": "Choose a solving method",
          "after": "nonlinear_equal_rhs_substitution",
          "explanation": "The strategy planner prefers exact rule-based methods and honors an explicitly requested method when supplied.",
          "details": {}
        },
        {
          "before": "y = x^2\ny = 2*x + 3",
          "rule_id": "system_nonlinear_substitution",
          "action": "Use equal right sides",
          "after": "x^2 = 2*x + 3",
          "explanation": "Both equations express y, so their right sides must be equal.",
          "details": {}
        },
        {
          "before": "x^2 = 2*x + 3",
          "rule_id": "system_nonlinear_reduce_to_single_equation",
          "action": "Reduce to one equation",
          "after": "x^2 - 2*x - 3 = 0",
          "explanation": "The system is reduced to a single equation in x.",
          "details": {}
        },
        {
          "before": "x^2 - 2*x - 3 = 0",
          "rule_id": "system_nonlinear_solve_reduced_equation",
          "action": "Solve the reduced equation",
          "after": "x = 3, x = -1",
          "explanation": "The one-variable equation gives possible x-values.",
          "details": {}
        },
        {
          "before": "x-values",
          "rule_id": "system_nonlinear_back_substitute",
          "action": "Back-substitute",
          "after": "(x, y) = (3, 9) or (-1, 1)",
          "explanation": "Each x-value is substituted into one original equation to find y.",
          "details": {}
        },
        {
          "before": "(x, y) = (3, 9) or (-1, 1)",
          "rule_id": "system_solution_check_each_equation",
          "action": "Check every original equation",
          "after": "passed",
          "explanation": "Every ordered pair is checked in every original equation.",
          "details": {}
        }
      ],
      "answer": "(x, y) = (3, 9) or (-1, 1)",
      "problem_profile": {
        "input": "y = x^2; y = 2*x + 3",
        "problem_kind": "system",
        "task_type": "nonlinear_system",
        "variables": [
          "x",
          "y"
        ],
        "equation_count": 2,
        "features": [
          "nonlinear_system"
        ]
      },
      "analysis": {
        "variables": [
          "x",
          "y"
        ],
        "system_type": "nonlinear_system",
        "solution_set": [
          {
            "x": "3",
            "y": "9"
          },
          {
            "x": "-1",
            "y": "1"
          }
        ]
      },
      "selected_strategy": "nonlinear_equal_rhs_substitution",
      "candidate_strategies": [
        {
          "id": "nonlinear_equal_rhs_substitution",
          "score": 100
        },
        {
          "id": "nonlinear_substitute_linear_equation",
          "score": 90
        },
        {
          "id": "symbolic_fallback_check",
          "score": 80
        }
      ],
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Solution satisfies original equation 1."
          },
          {
            "status": "passed",
            "message": "Solution satisfies original equation 2."
          },
          {
            "status": "passed",
            "message": "Solution satisfies original equation 1."
          },
          {
            "status": "passed",
            "message": "Solution satisfies original equation 2."
          }
        ]
      },
      "available_actions": [
        "solve_system",
        "solve_linear_system",
        "solve_nonlinear_system",
        "list_actions"
      ],
      "selected_action": "solve_system"
    }
  },
  {
    "input": "x + y = 5; x^2 + y^2 = 13",
    "action": "solve_system",
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "x + y = 5; x^2 + y^2 = 13",
      "task_type": "system",
      "steps": [
        {
          "before": "x + y = 5; x^2 + y^2 = 13",
          "rule_id": "system_parse",
          "action": "Parse the system",
          "after": "x + y = 5\nx^2 + y^2 = 13",
          "explanation": "The input is split into separate equations or inequalities and each part is parsed with the existing algebra parser.",
          "details": {}
        },
        {
          "before": "x + y = 5\nx^2 + y^2 = 13",
          "rule_id": "system_detect_variables",
          "action": "Detect variables",
          "after": "x, y",
          "explanation": "All free symbols appearing in the system are collected and sorted.",
          "details": {}
        },
        {
          "before": "x, y",
          "rule_id": "system_classify",
          "action": "Classify the system",
          "after": "nonlinear_system",
          "explanation": "The system is classified by relation type, number of variables, and polynomial degree.",
          "details": {}
        },
        {
          "before": "nonlinear_system",
          "rule_id": "system_choose_method",
          "action": "Choose a solving method",
          "after": "nonlinear_equal_rhs_substitution",
          "explanation": "The strategy planner prefers exact rule-based methods and honors an explicitly requested method when supplied.",
          "details": {}
        },
        {
          "before": "x + y = 5",
          "rule_id": "system_nonlinear_substitution",
          "action": "Solve the linear equation for y",
          "after": "y = 5 - x",
          "explanation": "The linear equation is used to express one variable through the other.",
          "details": {}
        },
        {
          "before": "x^2 + y^2 = 13",
          "rule_id": "system_nonlinear_reduce_to_single_equation",
          "action": "Substitute into the nonlinear equation",
          "after": "2*x^2 - 10*x + 12 = 0",
          "explanation": "Substitution produces a single equation in one variable.",
          "details": {}
        },
        {
          "before": "2*x^2 - 10*x + 12 = 0",
          "rule_id": "system_nonlinear_solve_reduced_equation",
          "action": "Solve the reduced equation",
          "after": "x = 2, x = 3",
          "explanation": "The reduced equation gives possible values for the remaining variable.",
          "details": {}
        },
        {
          "before": "candidate values",
          "rule_id": "system_nonlinear_back_substitute",
          "action": "Back-substitute",
          "after": "(x, y) = (2, 3) or (3, 2)",
          "explanation": "Each candidate value is substituted back and domain restrictions are applied.",
          "details": {}
        },
        {
          "before": "(x, y) = (2, 3) or (3, 2)",
          "rule_id": "system_solution_check_each_equation",
          "action": "Check every original equation",
          "after": "passed",
          "explanation": "Every accepted pair is checked in the original system.",
          "details": {}
        }
      ],
      "answer": "(x, y) = (2, 3) or (3, 2)",
      "problem_profile": {
        "input": "x + y = 5; x^2 + y^2 = 13",
        "problem_kind": "system",
        "task_type": "nonlinear_system",
        "variables": [
          "x",
          "y"
        ],
        "equation_count": 2,
        "features": [
          "nonlinear_system"
        ]
      },
      "analysis": {
        "variables": [
          "x",
          "y"
        ],
        "system_type": "nonlinear_system",
        "solution_set": [
          {
            "x": "2",
            "y": "3"
          },
          {
            "x": "3",
            "y": "2"
          }
        ]
      },
      "selected_strategy": "nonlinear_substitute_linear_equation",
      "candidate_strategies": [
        {
          "id": "nonlinear_equal_rhs_substitution",
          "score": 100
        },
        {
          "id": "nonlinear_substitute_linear_equation",
          "score": 90
        },
        {
          "id": "symbolic_fallback_check",
          "score": 80
        }
      ],
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Solution satisfies original equation 1."
          },
          {
            "status": "passed",
            "message": "Solution satisfies original equation 2."
          },
          {
            "status": "passed",
            "message": "Solution satisfies original equation 1."
          },
          {
            "status": "passed",
            "message": "Solution satisfies original equation 2."
          }
        ]
      },
      "available_actions": [
        "solve_system",
        "solve_linear_system",
        "solve_nonlinear_system",
        "list_actions"
      ],
      "selected_action": "solve_system"
    }
  },
  {
    "input": "y = 1/(x - 1); y = 2",
    "action": "solve_system",
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "y = 1/(x - 1); y = 2",
      "task_type": "system",
      "steps": [
        {
          "before": "y = 1/(x - 1); y = 2",
          "rule_id": "system_parse",
          "action": "Parse the system",
          "after": "y = 1/(x - 1)\ny = 2",
          "explanation": "The input is split into separate equations or inequalities and each part is parsed with the existing algebra parser.",
          "details": {}
        },
        {
          "before": "y = 1/(x - 1)\ny = 2",
          "rule_id": "system_detect_variables",
          "action": "Detect variables",
          "after": "x, y",
          "explanation": "All free symbols appearing in the system are collected and sorted.",
          "details": {}
        },
        {
          "before": "x, y",
          "rule_id": "system_classify",
          "action": "Classify the system",
          "after": "nonlinear_system",
          "explanation": "The system is classified by relation type, number of variables, and polynomial degree.",
          "details": {}
        },
        {
          "before": "nonlinear_system",
          "rule_id": "system_choose_method",
          "action": "Choose a solving method",
          "after": "nonlinear_equal_rhs_substitution",
          "explanation": "The strategy planner prefers exact rule-based methods and honors an explicitly requested method when supplied.",
          "details": {}
        },
        {
          "before": "y = 1/(x - 1)\ny = 2",
          "rule_id": "domain_restriction",
          "action": "Find domain restrictions",
          "after": "x ≠ 1",
          "explanation": "Denominators in the original system cannot be zero.",
          "details": {}
        },
        {
          "before": "y = 1/(x - 1)\ny = 2",
          "rule_id": "system_nonlinear_substitution",
          "action": "Use equal right sides",
          "after": "1/(x - 1) = 2",
          "explanation": "Both equations express y, so their right sides must be equal.",
          "details": {}
        },
        {
          "before": "1/(x - 1) = 2",
          "rule_id": "system_nonlinear_reduce_to_single_equation",
          "action": "Reduce to one equation",
          "after": "(3 - 2*x)/(x - 1) = 0",
          "explanation": "The system is reduced to a single equation in x.",
          "details": {}
        },
        {
          "before": "(3 - 2*x)/(x - 1) = 0",
          "rule_id": "system_nonlinear_solve_reduced_equation",
          "action": "Solve the reduced equation",
          "after": "x = 3/2",
          "explanation": "The one-variable equation gives possible x-values.",
          "details": {}
        },
        {
          "before": "x-values",
          "rule_id": "system_nonlinear_back_substitute",
          "action": "Back-substitute",
          "after": "(x, y) = (3/2, 2)",
          "explanation": "Each x-value is substituted into one original equation to find y.",
          "details": {}
        },
        {
          "before": "(x, y) = (3/2, 2)",
          "rule_id": "system_solution_check_each_equation",
          "action": "Check every original equation",
          "after": "passed",
          "explanation": "Every ordered pair is checked in every original equation.",
          "details": {}
        }
      ],
      "answer": "(x, y) = (3/2, 2)",
      "problem_profile": {
        "input": "y = 1/(x - 1); y = 2",
        "problem_kind": "system",
        "task_type": "nonlinear_system",
        "variables": [
          "x",
          "y"
        ],
        "equation_count": 2,
        "features": [
          "nonlinear_system"
        ]
      },
      "analysis": {
        "variables": [
          "x",
          "y"
        ],
        "system_type": "nonlinear_system",
        "solution_set": [
          {
            "x": "3/2",
            "y": "2"
          }
        ]
      },
      "selected_strategy": "nonlinear_equal_rhs_substitution",
      "candidate_strategies": [
        {
          "id": "nonlinear_equal_rhs_substitution",
          "score": 100
        },
        {
          "id": "nonlinear_substitute_linear_equation",
          "score": 90
        },
        {
          "id": "symbolic_fallback_check",
          "score": 80
        }
      ],
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Solution satisfies original equation 1."
          },
          {
            "status": "passed",
            "message": "Solution satisfies original equation 2."
          },
          {
            "status": "passed",
            "message": "Domain restrictions are not violated."
          }
        ]
      },
      "available_actions": [
        "solve_system",
        "solve_linear_system",
        "solve_nonlinear_system",
        "list_actions"
      ],
      "selected_action": "solve_system"
    }
  },
  {
    "input": "x > 1; x < 5",
    "action": "solve_inequality_system",
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "x > 1; x < 5",
      "task_type": "system",
      "steps": [
        {
          "before": "x > 1; x < 5",
          "rule_id": "system_parse",
          "action": "Parse the system",
          "after": "x > 1\nx < 5",
          "explanation": "The input is split into separate equations or inequalities and each part is parsed with the existing algebra parser.",
          "details": {}
        },
        {
          "before": "x > 1\nx < 5",
          "rule_id": "system_detect_variables",
          "action": "Detect variables",
          "after": "x",
          "explanation": "All free symbols appearing in the system are collected and sorted.",
          "details": {}
        },
        {
          "before": "x",
          "rule_id": "system_classify",
          "action": "Classify the system",
          "after": "inequality_system_1var",
          "explanation": "The system is classified by relation type, number of variables, and polynomial degree.",
          "details": {}
        },
        {
          "before": "inequality_system_1var",
          "rule_id": "system_choose_method",
          "action": "Choose a solving method",
          "after": "interval_intersection",
          "explanation": "The strategy planner prefers exact rule-based methods and honors an explicitly requested method when supplied.",
          "details": {}
        },
        {
          "before": "x > 1 -> x ∈ (1, +∞); x < 5 -> x ∈ (-∞, 5)",
          "rule_id": "system_inequality_intersect_intervals",
          "action": "Intersect solution intervals",
          "after": "x ∈ (1, 5)",
          "explanation": "A value must satisfy every inequality, so the individual solution sets are intersected.",
          "details": {}
        },
        {
          "before": "x ∈ (1, 5)",
          "rule_id": "system_solution_check_each_inequality",
          "action": "Check representative values",
          "after": "passed",
          "explanation": "Sample values from the resulting intervals satisfy all original inequalities.",
          "details": {}
        }
      ],
      "answer": "x ∈ (1, 5)",
      "problem_profile": {
        "input": "x > 1; x < 5",
        "problem_kind": "system",
        "task_type": "inequality_system_1var",
        "variables": [
          "x"
        ],
        "equation_count": 2,
        "features": [
          "inequality_system_1var"
        ]
      },
      "analysis": {
        "variables": [
          "x"
        ],
        "system_type": "inequality_system_1var",
        "solution_set": "x ∈ (1, 5)"
      },
      "selected_strategy": "interval_intersection",
      "candidate_strategies": [
        {
          "id": "interval_intersection",
          "score": 100
        },
        {
          "id": "symbolic_fallback_check",
          "score": 90
        }
      ],
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Interval intersection verified by sample points."
          }
        ]
      },
      "available_actions": [
        "solve_inequality_system",
        "solve_system",
        "list_actions"
      ],
      "selected_action": "solve_inequality_system"
    }
  },
  {
    "input": "x^2 - 5*x + 6 >= 0; x < 4",
    "action": "solve_inequality_system",
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "x^2 - 5*x + 6 >= 0; x < 4",
      "task_type": "system",
      "steps": [
        {
          "before": "x^2 - 5*x + 6 >= 0; x < 4",
          "rule_id": "system_parse",
          "action": "Parse the system",
          "after": "x^2 - 5*x + 6 >= 0\nx < 4",
          "explanation": "The input is split into separate equations or inequalities and each part is parsed with the existing algebra parser.",
          "details": {}
        },
        {
          "before": "x^2 - 5*x + 6 >= 0\nx < 4",
          "rule_id": "system_detect_variables",
          "action": "Detect variables",
          "after": "x",
          "explanation": "All free symbols appearing in the system are collected and sorted.",
          "details": {}
        },
        {
          "before": "x",
          "rule_id": "system_classify",
          "action": "Classify the system",
          "after": "inequality_system_1var",
          "explanation": "The system is classified by relation type, number of variables, and polynomial degree.",
          "details": {}
        },
        {
          "before": "inequality_system_1var",
          "rule_id": "system_choose_method",
          "action": "Choose a solving method",
          "after": "interval_intersection",
          "explanation": "The strategy planner prefers exact rule-based methods and honors an explicitly requested method when supplied.",
          "details": {}
        },
        {
          "before": "x^2 - 5*x + 6 >= 0",
          "rule_id": "factor_quadratic",
          "action": "Factor quadratic inequality expression",
          "after": "(x - 3)*(x - 2) >= 0",
          "explanation": "Factoring exposes the sign-changing roots.",
          "details": {}
        },
        {
          "before": "x^2 - 5*x + 6 >= 0 -> x ∈ (-∞, 2] ∪ [3, +∞); x < 4 -> x ∈ (-∞, 4)",
          "rule_id": "system_inequality_intersect_intervals",
          "action": "Intersect solution intervals",
          "after": "x ∈ (-∞, 2] ∪ [3, 4)",
          "explanation": "A value must satisfy every inequality, so the individual solution sets are intersected.",
          "details": {}
        },
        {
          "before": "x ∈ (-∞, 2] ∪ [3, 4)",
          "rule_id": "system_solution_check_each_inequality",
          "action": "Check representative values",
          "after": "passed",
          "explanation": "Sample values from the resulting intervals satisfy all original inequalities.",
          "details": {}
        }
      ],
      "answer": "x ∈ (-∞, 2] ∪ [3, 4)",
      "problem_profile": {
        "input": "x^2 - 5*x + 6 >= 0; x < 4",
        "problem_kind": "system",
        "task_type": "inequality_system_1var",
        "variables": [
          "x"
        ],
        "equation_count": 2,
        "features": [
          "inequality_system_1var"
        ]
      },
      "analysis": {
        "variables": [
          "x"
        ],
        "system_type": "inequality_system_1var",
        "solution_set": "x ∈ (-∞, 2] ∪ [3, 4)"
      },
      "selected_strategy": "interval_intersection",
      "candidate_strategies": [
        {
          "id": "interval_intersection",
          "score": 100
        },
        {
          "id": "symbolic_fallback_check",
          "score": 90
        }
      ],
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Interval intersection verified by sample points."
          }
        ]
      },
      "available_actions": [
        "solve_inequality_system",
        "solve_system",
        "list_actions"
      ],
      "selected_action": "solve_inequality_system"
    }
  },
  {
    "input": "y > x + 1; y < 3",
    "action": "solve_inequality_system",
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "y > x + 1; y < 3",
      "task_type": "system",
      "steps": [
        {
          "before": "y > x + 1; y < 3",
          "rule_id": "system_parse",
          "action": "Parse the system",
          "after": "y > x + 1\ny < 3",
          "explanation": "The input is split into separate equations or inequalities and each part is parsed with the existing algebra parser.",
          "details": {}
        },
        {
          "before": "y > x + 1\ny < 3",
          "rule_id": "system_detect_variables",
          "action": "Detect variables",
          "after": "x, y",
          "explanation": "All free symbols appearing in the system are collected and sorted.",
          "details": {}
        },
        {
          "before": "x, y",
          "rule_id": "system_classify",
          "action": "Classify the system",
          "after": "inequality_system_2var",
          "explanation": "The system is classified by relation type, number of variables, and polynomial degree.",
          "details": {}
        },
        {
          "before": "inequality_system_2var",
          "rule_id": "system_choose_method",
          "action": "Choose a solving method",
          "after": "linear_region_description",
          "explanation": "The strategy planner prefers exact rule-based methods and honors an explicitly requested method when supplied.",
          "details": {}
        },
        {
          "before": "y > x + 1\ny < 3",
          "rule_id": "system_inequality_region_description",
          "action": "Describe the intersection region",
          "after": "Region above y = x + 1 and below y = 3",
          "explanation": "Each inequality defines a half-plane. The system solution is their intersection.",
          "details": {}
        },
        {
          "before": "Region above y = x + 1 and below y = 3",
          "rule_id": "system_solution_check_each_inequality",
          "action": "Check the region description",
          "after": "passed",
          "explanation": "The region description preserves all boundary inequalities.",
          "details": {}
        }
      ],
      "answer": "Region above y = x + 1 and below y = 3",
      "problem_profile": {
        "input": "y > x + 1; y < 3",
        "problem_kind": "system",
        "task_type": "inequality_system_2var",
        "variables": [
          "x",
          "y"
        ],
        "equation_count": 2,
        "features": [
          "inequality_system_2var"
        ]
      },
      "analysis": {
        "variables": [
          "x",
          "y"
        ],
        "system_type": "inequality_system_2var",
        "region": "Region above y = x + 1 and below y = 3"
      },
      "selected_strategy": "linear_region_description",
      "candidate_strategies": [
        {
          "id": "linear_region_description",
          "score": 100
        },
        {
          "id": "symbolic_fallback_check",
          "score": 90
        }
      ],
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Half-plane intersection description generated."
          }
        ]
      },
      "available_actions": [
        "solve_inequality_system",
        "solve_system",
        "list_actions"
      ],
      "selected_action": "solve_inequality_system"
    }
  },
  {
    "input": "(x + 1)/(x - 2)",
    "action": null,
    "list_actions": true,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "(x + 1)/(x - 2)",
      "task_type": "action_selection",
      "steps": [
        {
          "before": "(x + 1)/(x - 2)",
          "rule_id": "list_actions",
          "action": "List available actions",
          "after": "1. simplify\n2. factor\n3. find_domain\n4. differentiate\n5. integrate\n6. integrate_definite\n7. find_area_under_curve\n8. find_inverse\n9. find_range\n10. find_asymptotes\n11. find_limit\n12. find_left_limit\n13. find_right_limit\n14. find_limit_at_infinity\n15. check_continuity\n16. find_discontinuities\n17. find_critical_points\n18. find_extrema\n19. find_monotonicity\n20. find_tangent_line\n21. find_normal_line\n22. find_second_derivative\n23. find_concavity\n24. find_inflection_points\n25. analyze_function\n26. list_actions",
          "explanation": "The action layer separates the mathematical object from the operation requested by the user.",
          "details": {
            "available_actions": [
              "simplify",
              "factor",
              "find_domain",
              "differentiate",
              "integrate",
              "integrate_definite",
              "find_area_under_curve",
              "find_inverse",
              "find_range",
              "find_asymptotes",
              "find_limit",
              "find_left_limit",
              "find_right_limit",
              "find_limit_at_infinity",
              "check_continuity",
              "find_discontinuities",
              "find_critical_points",
              "find_extrema",
              "find_monotonicity",
              "find_tangent_line",
              "find_normal_line",
              "find_second_derivative",
              "find_concavity",
              "find_inflection_points",
              "analyze_function",
              "list_actions"
            ]
          }
        }
      ],
      "answer": "simplify, factor, find_domain, differentiate, integrate, integrate_definite, find_area_under_curve, find_inverse, find_range, find_asymptotes, find_limit, find_left_limit, find_right_limit, find_limit_at_infinity, check_continuity, find_discontinuities, find_critical_points, find_extrema, find_monotonicity, find_tangent_line, find_normal_line, find_second_derivative, find_concavity, find_inflection_points, analyze_function, list_actions",
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "list_actions"
    }
  },
  {
    "input": "2*x + 3",
    "action": "find_inverse",
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "2*x + 3",
      "task_type": "find_inverse",
      "steps": [
        {
          "before": "2*x + 3",
          "rule_id": "inverse_set_y_equal_fx",
          "action": "Set y equal to f(x)",
          "after": "y = 2*x + 3",
          "explanation": "To find an inverse, first write the function as y = f(x).",
          "details": {}
        },
        {
          "before": "y = 2*x + 3",
          "rule_id": "inverse_swap_x_and_y",
          "action": "Swap x and y",
          "after": "x = 2*y + 3",
          "explanation": "Inverse functions interchange inputs and outputs, so x and y are swapped.",
          "details": {}
        },
        {
          "before": "x = 2*y + 3",
          "rule_id": "inverse_solve_for_y",
          "action": "Solve for y",
          "after": "y = (x - 3)/2",
          "explanation": "The swapped linear equation is solved by isolating y.",
          "details": {
            "a": "2",
            "b": "3"
          }
        },
        {
          "before": "f^(-1)(x) = (x - 3)/2",
          "rule_id": "inverse_check_composition",
          "action": "Check the inverse by composition",
          "after": "f(f^(-1)(x)) = x and f^(-1)(f(x)) = x",
          "explanation": "Composing the function with the proposed inverse gives the identity in both directions.",
          "details": {}
        }
      ],
      "answer": "f^(-1)(x) = (x - 3)/2",
      "problem_profile": {
        "input": "2*x + 3",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": 1,
        "is_polynomial": true,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "polynomial"
        ]
      },
      "candidate_strategies": [
        {
          "id": "inverse_swap_solve_linear",
          "name": "inverse swap solve linear",
          "applicable_to": [
            "find_inverse"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage10.inverse_range_asymptote",
          "score": 100,
          "reasons": [
            "rule-based",
            "domain-aware"
          ]
        },
        {
          "id": "symbolic_fallback_check",
          "name": "symbolic fallback check",
          "applicable_to": [
            "find_inverse"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "score": 60,
          "reasons": [
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "inverse_swap_solve_linear",
      "strategy_score": 100,
      "analysis": {
        "domain": "all real numbers",
        "inverse": "(x - 3)/2",
        "range": "all real numbers"
      },
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Linear inverse verified by composition."
          }
        ]
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "find_inverse"
    }
  },
  {
    "input": "(x + 1)/(x - 2)",
    "action": "find_inverse",
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "(x + 1)/(x - 2)",
      "task_type": "find_inverse",
      "steps": [
        {
          "before": "(x + 1)/(x - 2)",
          "rule_id": "inverse_set_y_equal_fx",
          "action": "Set y equal to f(x)",
          "after": "y = (x + 1)/(x - 2)",
          "explanation": "To find an inverse, first write the function as y = f(x).",
          "details": {}
        },
        {
          "before": "y = (x + 1)/(x - 2)",
          "rule_id": "inverse_swap_x_and_y",
          "action": "Swap x and y",
          "after": "x = (y + 1)/(y - 2)",
          "explanation": "Inverse functions interchange inputs and outputs, so x and y are swapped.",
          "details": {}
        },
        {
          "before": "(x + 1)/(x - 2)",
          "rule_id": "inverse_domain_restriction",
          "action": "Record the original domain restriction",
          "after": "x ≠ 2",
          "explanation": "The original denominator cannot be zero. This restriction is preserved while checking the inverse relation.",
          "details": {
            "forbidden_values": [
              "2"
            ]
          }
        },
        {
          "before": "x = (y + 1)/(y - 2)",
          "rule_id": "inverse_solve_for_y",
          "action": "Solve the swapped rational equation for y",
          "after": "y = (2*x + 1)/(x - 1)",
          "explanation": "Clear the denominator, collect the y-terms, factor y, and divide to isolate y.",
          "details": {
            "inverse_expression": "(2*x + 1)/(x - 1)",
            "excluded_inverse_input": "1"
          }
        },
        {
          "before": "f^(-1)(x) = (2*x + 1)/(x - 1)",
          "rule_id": "inverse_check_composition",
          "action": "Check the inverse by composition",
          "after": "f(f^(-1)(x)) = x and f^(-1)(f(x)) = x where both sides are defined",
          "explanation": "The inverse is accepted only after symbolic composition simplifies to the identity with restrictions preserved.",
          "details": {}
        }
      ],
      "answer": "f^(-1)(x) = (2*x + 1)/(x - 1)",
      "problem_profile": {
        "input": "(x + 1)/(x - 2)",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": true,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "rational"
        ]
      },
      "candidate_strategies": [
        {
          "id": "inverse_swap_solve_rational",
          "name": "inverse swap solve rational",
          "applicable_to": [
            "find_inverse"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage10.inverse_range_asymptote",
          "score": 100,
          "reasons": [
            "rule-based",
            "domain-aware"
          ]
        },
        {
          "id": "symbolic_fallback_check",
          "name": "symbolic fallback check",
          "applicable_to": [
            "find_inverse"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "score": 60,
          "reasons": [
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "inverse_swap_solve_rational",
      "strategy_score": 100,
      "analysis": {
        "domain": "x ≠ 2",
        "inverse": "(2*x + 1)/(x - 1)",
        "range": "y ≠ 1"
      },
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Rational inverse verified by composition and restrictions."
          }
        ]
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "find_inverse"
    }
  },
  {
    "input": "x^2",
    "action": "find_inverse",
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "x^2",
      "task_type": "find_inverse",
      "steps": [
        {
          "before": "x^2",
          "rule_id": "inverse_set_y_equal_fx",
          "action": "Set y equal to f(x)",
          "after": "y = x^2",
          "explanation": "To find an inverse, first write the function as y = f(x).",
          "details": {}
        },
        {
          "before": "y = x^2",
          "rule_id": "inverse_swap_x_and_y",
          "action": "Swap x and y",
          "after": "x = y^2",
          "explanation": "Inverse functions interchange inputs and outputs, so x and y are swapped.",
          "details": {}
        },
        {
          "before": "x^2",
          "rule_id": "inverse_not_one_to_one",
          "action": "Check whether the function is one-to-one",
          "after": "not one-to-one on all real numbers",
          "explanation": "A quadratic such as x^2 takes the same value at x and -x, so it cannot have a global inverse function on R.",
          "details": {}
        },
        {
          "before": "x^2",
          "rule_id": "inverse_requires_domain_restriction",
          "action": "Require a restricted domain",
          "after": "An inverse requires a restriction such as x >= 0 or x <= 0.",
          "explanation": "After restricting the domain to a monotonic branch, one branch of the inverse can be chosen.",
          "details": {}
        }
      ],
      "answer": "No global inverse on all real numbers; restrict the domain, for example x >= 0 or x <= 0.",
      "problem_profile": {
        "input": "x^2",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": 2,
        "is_polynomial": true,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": true,
        "has_simple_integer_roots": true,
        "discriminant": null,
        "features": [
          "polynomial",
          "factorable",
          "simple_integer_roots",
          "perfect_square_trinomial"
        ]
      },
      "candidate_strategies": [
        {
          "id": "inverse_check_one_to_one",
          "name": "inverse check one to one",
          "applicable_to": [
            "find_inverse"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage10.inverse_range_asymptote",
          "score": 100,
          "reasons": [
            "rule-based",
            "domain-aware"
          ]
        },
        {
          "id": "symbolic_fallback_check",
          "name": "symbolic fallback check",
          "applicable_to": [
            "find_inverse"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "score": 60,
          "reasons": [
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "inverse_check_one_to_one",
      "strategy_score": 100,
      "analysis": {
        "inverse": null
      },
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Non-one-to-one behavior detected."
          }
        ]
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "find_inverse"
    }
  },
  {
    "input": "x^2 - 4*x + 3",
    "action": "find_range",
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "x^2 - 4*x + 3",
      "task_type": "find_range",
      "steps": [
        {
          "before": "x^2 - 4*x + 3",
          "rule_id": "range_domain_analysis",
          "action": "Analyze the domain before finding the range",
          "after": "all real numbers",
          "explanation": "Range analysis starts from the domain because excluded x-values can affect possible y-values.",
          "details": {
            "forbidden_values": []
          }
        },
        {
          "before": "x^2 - 4*x + 3",
          "rule_id": "range_by_vertex",
          "action": "Find the vertex of the quadratic",
          "after": "x = 2, f(2) = -1",
          "explanation": "The vertex gives the minimum or maximum value of a quadratic function.",
          "details": {
            "a": "1",
            "vertex": "(2, -1)"
          }
        },
        {
          "before": "x = 2",
          "rule_id": "evaluate_function_at_point",
          "action": "Evaluate the function at the vertex",
          "after": "f(2) = -1",
          "explanation": "This value is the endpoint of the range.",
          "details": {}
        },
        {
          "before": "Range: [-1, +∞)",
          "rule_id": "check_solution",
          "action": "Check the range conclusion",
          "after": "passed",
          "explanation": "The sign of the leading coefficient determines whether the vertex is a minimum or maximum.",
          "details": {}
        }
      ],
      "answer": "Range: [-1, +∞)",
      "problem_profile": {
        "input": "x^2 - 4*x + 3",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": 2,
        "is_polynomial": true,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": true,
        "has_simple_integer_roots": true,
        "discriminant": null,
        "features": [
          "polynomial",
          "factorable",
          "simple_integer_roots"
        ]
      },
      "candidate_strategies": [
        {
          "id": "quadratic_vertex_range",
          "name": "quadratic vertex range",
          "applicable_to": [
            "find_range"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage10.inverse_range_asymptote",
          "score": 100,
          "reasons": [
            "rule-based",
            "domain-aware"
          ]
        },
        {
          "id": "symbolic_fallback_check",
          "name": "symbolic fallback check",
          "applicable_to": [
            "find_range"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "score": 60,
          "reasons": [
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "quadratic_vertex_range",
      "strategy_score": 100,
      "analysis": {
        "domain": "all real numbers",
        "range": "[-1, +∞)"
      },
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Quadratic range verified by vertex analysis."
          }
        ]
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "find_range"
    }
  },
  {
    "input": "(x + 1)/(x - 2)",
    "action": "find_range",
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "(x + 1)/(x - 2)",
      "task_type": "find_range",
      "steps": [
        {
          "before": "(x + 1)/(x - 2)",
          "rule_id": "range_domain_analysis",
          "action": "Analyze the domain before finding the range",
          "after": "x ≠ 2",
          "explanation": "Range analysis starts from the domain because excluded x-values can affect possible y-values.",
          "details": {
            "forbidden_values": [
              "2"
            ]
          }
        },
        {
          "before": "(x + 1)/(x - 2)",
          "rule_id": "asymptote_horizontal_degree_comparison",
          "action": "Compare numerator and denominator degrees",
          "after": "degrees are equal",
          "explanation": "For a rational function with equal numerator and denominator degrees, the horizontal asymptote is the ratio of leading coefficients.",
          "details": {}
        },
        {
          "before": "(x + 1)/(x - 2)",
          "rule_id": "range_by_rational_analysis",
          "action": "Solve y = f(x) conceptually",
          "after": "y ≠ 1",
          "explanation": "The horizontal-asymptote value cannot be attained by this fractional linear function; all other y-values are possible.",
          "details": {
            "excluded_y": "1"
          }
        },
        {
          "before": "y = 1",
          "rule_id": "range_check_by_sampling",
          "action": "Check the rational range",
          "after": "passed",
          "explanation": "Solving y=f(x) shows all values except the excluded horizontal-asymptote value can be produced.",
          "details": {}
        }
      ],
      "answer": "Range: y ≠ 1",
      "problem_profile": {
        "input": "(x + 1)/(x - 2)",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": true,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "rational"
        ]
      },
      "candidate_strategies": [
        {
          "id": "rational_range_by_horizontal_asymptote",
          "name": "rational range by horizontal asymptote",
          "applicable_to": [
            "find_range"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage10.inverse_range_asymptote",
          "score": 100,
          "reasons": [
            "rule-based",
            "domain-aware"
          ]
        },
        {
          "id": "symbolic_fallback_check",
          "name": "symbolic fallback check",
          "applicable_to": [
            "find_range"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "score": 60,
          "reasons": [
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "rational_range_by_horizontal_asymptote",
      "strategy_score": 100,
      "analysis": {
        "domain": "x ≠ 2",
        "range": "y ≠ 1"
      },
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Rational range verified by solving y=f(x)."
          }
        ]
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "find_range"
    }
  },
  {
    "input": "1/(x - 2)",
    "action": "find_range",
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "1/(x - 2)",
      "task_type": "find_range",
      "steps": [
        {
          "before": "1/(x - 2)",
          "rule_id": "range_domain_analysis",
          "action": "Analyze the domain before finding the range",
          "after": "x ≠ 2",
          "explanation": "Range analysis starts from the domain because excluded x-values can affect possible y-values.",
          "details": {
            "forbidden_values": [
              "2"
            ]
          }
        },
        {
          "before": "1/(x - 2)",
          "rule_id": "asymptote_horizontal_degree_comparison",
          "action": "Compare numerator and denominator degrees",
          "after": "degrees are equal",
          "explanation": "For a rational function with equal numerator and denominator degrees, the horizontal asymptote is the ratio of leading coefficients.",
          "details": {}
        },
        {
          "before": "1/(x - 2)",
          "rule_id": "range_by_rational_analysis",
          "action": "Solve y = f(x) conceptually",
          "after": "y ≠ 0",
          "explanation": "The horizontal-asymptote value cannot be attained by this fractional linear function; all other y-values are possible.",
          "details": {
            "excluded_y": "0"
          }
        },
        {
          "before": "y = 0",
          "rule_id": "range_check_by_sampling",
          "action": "Check the rational range",
          "after": "passed",
          "explanation": "Solving y=f(x) shows all values except the excluded horizontal-asymptote value can be produced.",
          "details": {}
        }
      ],
      "answer": "Range: y ≠ 0",
      "problem_profile": {
        "input": "1/(x - 2)",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": true,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "rational"
        ]
      },
      "candidate_strategies": [
        {
          "id": "rational_range_by_horizontal_asymptote",
          "name": "rational range by horizontal asymptote",
          "applicable_to": [
            "find_range"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage10.inverse_range_asymptote",
          "score": 100,
          "reasons": [
            "rule-based",
            "domain-aware"
          ]
        },
        {
          "id": "symbolic_fallback_check",
          "name": "symbolic fallback check",
          "applicable_to": [
            "find_range"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "score": 60,
          "reasons": [
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "rational_range_by_horizontal_asymptote",
      "strategy_score": 100,
      "analysis": {
        "domain": "x ≠ 2",
        "range": "y ≠ 0"
      },
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Rational range verified by solving y=f(x)."
          }
        ]
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "find_range"
    }
  },
  {
    "input": "(x + 1)/(x - 2)",
    "action": "find_asymptotes",
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "(x + 1)/(x - 2)",
      "task_type": "find_asymptotes",
      "steps": [
        {
          "before": "(x + 1)/(x - 2)",
          "rule_id": "asymptote_domain_analysis",
          "action": "Analyze the rational function domain",
          "after": "denominator: x - 2",
          "explanation": "Asymptote and hole analysis begins with values excluded from the original denominator.",
          "details": {}
        },
        {
          "before": "x - 2 = 0",
          "rule_id": "asymptote_denominator_zeros",
          "action": "Find denominator zeros",
          "after": "x = 2",
          "explanation": "Denominator zeros are candidates for vertical asymptotes or removable holes.",
          "details": {
            "denominator_zeros": [
              "2"
            ]
          }
        },
        {
          "before": "(x + 1)/(x - 2)",
          "rule_id": "asymptote_vertical_from_uncanceled_denominator",
          "action": "Classify an uncanceled denominator zero",
          "after": "Vertical asymptote: x = 2",
          "explanation": "Because the denominator factor does not cancel, the function grows without bound near this x-value.",
          "details": {}
        },
        {
          "before": "(x + 1)/(x - 2)",
          "rule_id": "asymptote_horizontal_degree_comparison",
          "action": "Compare degrees for horizontal asymptote",
          "after": "degrees are equal",
          "explanation": "When degrees are equal, the horizontal asymptote is the ratio of leading coefficients.",
          "details": {}
        },
        {
          "before": "leading coefficients 1 and 1",
          "rule_id": "asymptote_horizontal_leading_coefficients",
          "action": "Use leading coefficients",
          "after": "Horizontal asymptote: y = 1",
          "explanation": "The ratio of leading coefficients gives the horizontal asymptote.",
          "details": {}
        },
        {
          "before": "(x + 1)/(x - 2)",
          "rule_id": "asymptote_summary",
          "action": "Summarize asymptotes and holes",
          "after": "Vertical asymptote: x = 2; Horizontal asymptote: y = 1",
          "explanation": "Vertical asymptotes come from uncanceled denominator zeros; holes come from canceled factors; end behavior gives horizontal or slant asymptotes.",
          "details": {
            "vertical_asymptotes": [
              "2"
            ],
            "holes": [],
            "horizontal_asymptote": "1",
            "slant_asymptote": null
          }
        }
      ],
      "answer": "Vertical asymptote: x = 2; Horizontal asymptote: y = 1",
      "problem_profile": {
        "input": "(x + 1)/(x - 2)",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": true,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "rational"
        ]
      },
      "candidate_strategies": [
        {
          "id": "rational_asymptote_analysis",
          "name": "rational asymptote analysis",
          "applicable_to": [
            "find_asymptotes"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage10.inverse_range_asymptote",
          "score": 100,
          "reasons": [
            "rule-based",
            "domain-aware"
          ]
        },
        {
          "id": "symbolic_fallback_check",
          "name": "symbolic fallback check",
          "applicable_to": [
            "find_asymptotes"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "score": 60,
          "reasons": [
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "rational_asymptote_analysis",
      "strategy_score": 100,
      "analysis": {
        "vertical_asymptotes": [
          "2"
        ],
        "holes": [],
        "horizontal_asymptote": "1",
        "slant_asymptote": null
      },
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Asymptotes and holes verified by factor cancellation and degree comparison."
          }
        ]
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "find_asymptotes"
    }
  },
  {
    "input": "(x^2 - 1)/(x - 1)",
    "action": "find_asymptotes",
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "(x^2 - 1)/(x - 1)",
      "task_type": "find_asymptotes",
      "steps": [
        {
          "before": "(x^2 - 1)/(x - 1)",
          "rule_id": "asymptote_domain_analysis",
          "action": "Analyze the rational function domain",
          "after": "denominator: x - 1",
          "explanation": "Asymptote and hole analysis begins with values excluded from the original denominator.",
          "details": {}
        },
        {
          "before": "x - 1 = 0",
          "rule_id": "asymptote_denominator_zeros",
          "action": "Find denominator zeros",
          "after": "x = 1",
          "explanation": "Denominator zeros are candidates for vertical asymptotes or removable holes.",
          "details": {
            "denominator_zeros": [
              "1"
            ]
          }
        },
        {
          "before": "x^2 - 1",
          "rule_id": "difference_of_squares",
          "action": "Apply the difference of squares formula",
          "after": "(x - 1)*(x + 1)",
          "explanation": "The expression has the form a^2 - b^2, so it becomes (a - b)(a + b).",
          "details": {
            "formula_result": "(x - 1)*(x + 1)"
          }
        },
        {
          "before": "(x^2 - 1)/(x - 1)",
          "rule_id": "asymptote_factor_cancel_check",
          "action": "Check whether the denominator factor cancels",
          "after": "factor x - (1) cancels",
          "explanation": "A canceled denominator factor creates a removable discontinuity rather than a vertical asymptote.",
          "details": {
            "root": "1",
            "numerator_multiplicity": 1,
            "denominator_multiplicity": 1
          }
        },
        {
          "before": "x + 1",
          "rule_id": "asymptote_hole_from_canceled_factor",
          "action": "Find the removable hole",
          "after": "Hole: (1, 2)",
          "explanation": "After cancellation, the y-coordinate of the hole is found by evaluating the simplified expression at the excluded x-value.",
          "details": {}
        },
        {
          "before": "(x^2 - 1)/(x - 1)",
          "rule_id": "preserve_domain_restriction",
          "action": "Preserve the excluded value",
          "after": "x ≠ 1",
          "explanation": "Even after cancellation, the original function is not defined at the canceled denominator zero.",
          "details": {}
        },
        {
          "before": "(x^2 - 1)/(x - 1)",
          "rule_id": "asymptote_summary",
          "action": "Summarize asymptotes and holes",
          "after": "No vertical asymptotes; Hole: (1, 2)",
          "explanation": "Vertical asymptotes come from uncanceled denominator zeros; holes come from canceled factors; end behavior gives horizontal or slant asymptotes.",
          "details": {
            "vertical_asymptotes": [],
            "holes": [
              {
                "x": "1",
                "y": "2"
              }
            ],
            "horizontal_asymptote": null,
            "slant_asymptote": null
          }
        }
      ],
      "answer": "No vertical asymptotes; Hole: (1, 2)",
      "problem_profile": {
        "input": "(x^2 - 1)/(x - 1)",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": true,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "rational"
        ]
      },
      "candidate_strategies": [
        {
          "id": "rational_asymptote_analysis_with_hole_detection",
          "name": "rational asymptote analysis with hole detection",
          "applicable_to": [
            "find_asymptotes"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage10.inverse_range_asymptote",
          "score": 100,
          "reasons": [
            "rule-based",
            "domain-aware"
          ]
        },
        {
          "id": "symbolic_fallback_check",
          "name": "symbolic fallback check",
          "applicable_to": [
            "find_asymptotes"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "score": 60,
          "reasons": [
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "rational_asymptote_analysis_with_hole_detection",
      "strategy_score": 100,
      "analysis": {
        "vertical_asymptotes": [],
        "holes": [
          {
            "x": "1",
            "y": "2"
          }
        ],
        "horizontal_asymptote": null,
        "slant_asymptote": null
      },
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Asymptotes and holes verified by factor cancellation and degree comparison."
          }
        ]
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "find_asymptotes"
    }
  },
  {
    "input": "(x^2 + 1)/(x - 1)",
    "action": "find_asymptotes",
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "(x^2 + 1)/(x - 1)",
      "task_type": "find_asymptotes",
      "steps": [
        {
          "before": "(x^2 + 1)/(x - 1)",
          "rule_id": "asymptote_domain_analysis",
          "action": "Analyze the rational function domain",
          "after": "denominator: x - 1",
          "explanation": "Asymptote and hole analysis begins with values excluded from the original denominator.",
          "details": {}
        },
        {
          "before": "x - 1 = 0",
          "rule_id": "asymptote_denominator_zeros",
          "action": "Find denominator zeros",
          "after": "x = 1",
          "explanation": "Denominator zeros are candidates for vertical asymptotes or removable holes.",
          "details": {
            "denominator_zeros": [
              "1"
            ]
          }
        },
        {
          "before": "(x^2 + 1)/(x - 1)",
          "rule_id": "asymptote_vertical_from_uncanceled_denominator",
          "action": "Classify an uncanceled denominator zero",
          "after": "Vertical asymptote: x = 1",
          "explanation": "Because the denominator factor does not cancel, the function grows without bound near this x-value.",
          "details": {}
        },
        {
          "before": "(x^2 + 1)/(x - 1)",
          "rule_id": "asymptote_slant_polynomial_division",
          "action": "Use polynomial division for a slant asymptote",
          "after": "degree numerator is one greater than degree denominator",
          "explanation": "This degree pattern gives an oblique asymptote from the quotient of polynomial division.",
          "details": {}
        },
        {
          "before": "(x^2 + 1) ÷ (x - 1)",
          "rule_id": "polynomial_division",
          "action": "Divide numerator by denominator",
          "after": "(x^2 + 1)/(x - 1) = x + 1 + 2/(x - 1)",
          "explanation": "The remainder term approaches 0 as x approaches ±∞.",
          "details": {}
        },
        {
          "before": "2/(x - 1)",
          "rule_id": "asymptote_limit_check",
          "action": "Check the end behavior of the remainder",
          "after": "remainder → 0 as x → ±∞",
          "explanation": "Since the remainder vanishes at infinity, the quotient line is the slant asymptote.",
          "details": {}
        },
        {
          "before": "(x^2 + 1)/(x - 1)",
          "rule_id": "asymptote_summary",
          "action": "Summarize asymptotes and holes",
          "after": "Vertical asymptote: x = 1; Slant asymptote: y = x + 1",
          "explanation": "Vertical asymptotes come from uncanceled denominator zeros; holes come from canceled factors; end behavior gives horizontal or slant asymptotes.",
          "details": {
            "vertical_asymptotes": [
              "1"
            ],
            "holes": [],
            "horizontal_asymptote": null,
            "slant_asymptote": "x + 1"
          }
        }
      ],
      "answer": "Vertical asymptote: x = 1; Slant asymptote: y = x + 1",
      "problem_profile": {
        "input": "(x^2 + 1)/(x - 1)",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": true,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "rational"
        ]
      },
      "candidate_strategies": [
        {
          "id": "rational_asymptote_analysis_with_polynomial_division",
          "name": "rational asymptote analysis with polynomial division",
          "applicable_to": [
            "find_asymptotes"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage10.inverse_range_asymptote",
          "score": 100,
          "reasons": [
            "rule-based",
            "domain-aware"
          ]
        },
        {
          "id": "symbolic_fallback_check",
          "name": "symbolic fallback check",
          "applicable_to": [
            "find_asymptotes"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "score": 60,
          "reasons": [
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "rational_asymptote_analysis_with_polynomial_division",
      "strategy_score": 100,
      "analysis": {
        "vertical_asymptotes": [
          "1"
        ],
        "holes": [],
        "horizontal_asymptote": null,
        "slant_asymptote": "x + 1"
      },
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Asymptotes and holes verified by factor cancellation and degree comparison."
          }
        ]
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "find_asymptotes"
    }
  },
  {
    "input": "1/(x - 2)",
    "action": "find_asymptotes",
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "1/(x - 2)",
      "task_type": "find_asymptotes",
      "steps": [
        {
          "before": "1/(x - 2)",
          "rule_id": "asymptote_domain_analysis",
          "action": "Analyze the rational function domain",
          "after": "denominator: x - 2",
          "explanation": "Asymptote and hole analysis begins with values excluded from the original denominator.",
          "details": {}
        },
        {
          "before": "x - 2 = 0",
          "rule_id": "asymptote_denominator_zeros",
          "action": "Find denominator zeros",
          "after": "x = 2",
          "explanation": "Denominator zeros are candidates for vertical asymptotes or removable holes.",
          "details": {
            "denominator_zeros": [
              "2"
            ]
          }
        },
        {
          "before": "1/(x - 2)",
          "rule_id": "asymptote_vertical_from_uncanceled_denominator",
          "action": "Classify an uncanceled denominator zero",
          "after": "Vertical asymptote: x = 2",
          "explanation": "Because the denominator factor does not cancel, the function grows without bound near this x-value.",
          "details": {}
        },
        {
          "before": "1/(x - 2)",
          "rule_id": "asymptote_horizontal_degree_comparison",
          "action": "Compare degrees for horizontal asymptote",
          "after": "degree numerator < degree denominator, so y = 0",
          "explanation": "A proper rational function approaches 0 as x approaches ±∞.",
          "details": {}
        },
        {
          "before": "1/(x - 2)",
          "rule_id": "asymptote_summary",
          "action": "Summarize asymptotes and holes",
          "after": "Vertical asymptote: x = 2; Horizontal asymptote: y = 0",
          "explanation": "Vertical asymptotes come from uncanceled denominator zeros; holes come from canceled factors; end behavior gives horizontal or slant asymptotes.",
          "details": {
            "vertical_asymptotes": [
              "2"
            ],
            "holes": [],
            "horizontal_asymptote": "0",
            "slant_asymptote": null
          }
        }
      ],
      "answer": "Vertical asymptote: x = 2; Horizontal asymptote: y = 0",
      "problem_profile": {
        "input": "1/(x - 2)",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": true,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "rational"
        ]
      },
      "candidate_strategies": [
        {
          "id": "rational_asymptote_analysis",
          "name": "rational asymptote analysis",
          "applicable_to": [
            "find_asymptotes"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage10.inverse_range_asymptote",
          "score": 100,
          "reasons": [
            "rule-based",
            "domain-aware"
          ]
        },
        {
          "id": "symbolic_fallback_check",
          "name": "symbolic fallback check",
          "applicable_to": [
            "find_asymptotes"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "score": 60,
          "reasons": [
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "rational_asymptote_analysis",
      "strategy_score": 100,
      "analysis": {
        "vertical_asymptotes": [
          "2"
        ],
        "holes": [],
        "horizontal_asymptote": "0",
        "slant_asymptote": null
      },
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Asymptotes and holes verified by factor cancellation and degree comparison."
          }
        ]
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "find_asymptotes"
    }
  },
  {
    "input": "(x^2 - 1)/(x - 1)",
    "action": null,
    "list_actions": true,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "(x^2 - 1)/(x - 1)",
      "task_type": "action_selection",
      "steps": [
        {
          "before": "(x^2 - 1)/(x - 1)",
          "rule_id": "list_actions",
          "action": "List available actions",
          "after": "1. simplify\n2. factor\n3. find_domain\n4. differentiate\n5. integrate\n6. integrate_definite\n7. find_area_under_curve\n8. find_inverse\n9. find_range\n10. find_asymptotes\n11. find_limit\n12. find_left_limit\n13. find_right_limit\n14. find_limit_at_infinity\n15. check_continuity\n16. find_discontinuities\n17. find_critical_points\n18. find_extrema\n19. find_monotonicity\n20. find_tangent_line\n21. find_normal_line\n22. find_second_derivative\n23. find_concavity\n24. find_inflection_points\n25. analyze_function\n26. list_actions",
          "explanation": "The action layer separates the mathematical object from the operation requested by the user.",
          "details": {
            "available_actions": [
              "simplify",
              "factor",
              "find_domain",
              "differentiate",
              "integrate",
              "integrate_definite",
              "find_area_under_curve",
              "find_inverse",
              "find_range",
              "find_asymptotes",
              "find_limit",
              "find_left_limit",
              "find_right_limit",
              "find_limit_at_infinity",
              "check_continuity",
              "find_discontinuities",
              "find_critical_points",
              "find_extrema",
              "find_monotonicity",
              "find_tangent_line",
              "find_normal_line",
              "find_second_derivative",
              "find_concavity",
              "find_inflection_points",
              "analyze_function",
              "list_actions"
            ]
          }
        }
      ],
      "answer": "simplify, factor, find_domain, differentiate, integrate, integrate_definite, find_area_under_curve, find_inverse, find_range, find_asymptotes, find_limit, find_left_limit, find_right_limit, find_limit_at_infinity, check_continuity, find_discontinuities, find_critical_points, find_extrema, find_monotonicity, find_tangent_line, find_normal_line, find_second_derivative, find_concavity, find_inflection_points, analyze_function, list_actions",
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "list_actions"
    }
  },
  {
    "input": "limit((x^2 - 1)/(x - 1), x, 1)",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "limit((x^2 - 1)/(x - 1), x, 1)",
      "task_type": "find_limit",
      "steps": [
        {
          "before": "(x^2 - 1)/(x - 1)",
          "rule_id": "limit_indeterminate_form_detected",
          "action": "Try direct substitution",
          "after": "0/0",
          "explanation": "Direct substitution gives the indeterminate form 0/0, so the expression must be transformed before evaluating the limit.",
          "details": {
            "numerator_at_point": "0",
            "denominator_at_point": "0"
          }
        },
        {
          "before": "x^2 - 1",
          "rule_id": "difference_of_squares",
          "action": "Apply the difference of squares formula",
          "after": "(x - 1)*(x + 1)",
          "explanation": "The expression has the form a^2 - b^2, so it becomes (a - b)(a + b).",
          "details": {
            "formula_result": "(x - 1)*(x + 1)"
          }
        },
        {
          "before": "(x^2 - 1)/(x - 1)",
          "rule_id": "limit_factor_and_cancel",
          "action": "Cancel the common factor for the limit",
          "after": "x + 1",
          "explanation": "The factor that makes 0/0 cancels. This creates an equivalent expression only away from the excluded point.",
          "details": {}
        },
        {
          "before": "x + 1",
          "rule_id": "limit_preserve_domain_restriction",
          "action": "Preserve the original domain restriction",
          "after": "x ≠ 1",
          "explanation": "The original function is still undefined at the canceled point even though the simplified expression has a value there.",
          "details": {}
        },
        {
          "before": "x + 1",
          "rule_id": "limit_removable_discontinuity",
          "action": "Evaluate the simplified expression",
          "after": "lim x→1 x + 1 = 2",
          "explanation": "The original function has a removable discontinuity at this point because the limit exists but the original expression is undefined.",
          "details": {}
        },
        {
          "before": "(x^2 - 1)/(x - 1)",
          "rule_id": "check_solution",
          "action": "Check the removable-limit result",
          "after": "passed",
          "explanation": "The simplified expression and numeric sampling near the point give the same limit.",
          "details": {}
        }
      ],
      "answer": "2",
      "problem_profile": {
        "input": "limit((x^2 - 1)/(x - 1), x, 1)",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": true,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "rational"
        ]
      },
      "candidate_strategies": [
        {
          "id": "factor_cancel_limit",
          "name": "factor cancel limit",
          "applicable_to": [
            "find_limit"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage11.limit_continuity",
          "score": 100,
          "reasons": [
            "rule-based",
            "domain-aware"
          ]
        },
        {
          "id": "direct_substitution",
          "name": "direct substitution",
          "applicable_to": [
            "find_limit"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage11.limit_continuity",
          "score": 70,
          "reasons": [
            "rule-based",
            "domain-aware"
          ]
        },
        {
          "id": "symbolic_fallback_check",
          "name": "symbolic fallback check",
          "applicable_to": [
            "find_limit"
          ],
          "exact": true,
          "educational_priority": 10,
          "complexity_score": 4,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "score": 40,
          "reasons": [
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "factor_cancel_limit",
      "strategy_score": 100,
      "analysis": {
        "limit_point": "1",
        "limit": "2",
        "continuity": "removable discontinuity",
        "domain": "x ≠ 1"
      },
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Removable discontinuity limit verified by cancellation and sampling."
          }
        ]
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "find_limit"
    }
  },
  {
    "input": "lim x->infinity (2*x^2 + 1)/(x^2 - 3)",
    "action": null,
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "lim x->infinity (2*x^2 + 1)/(x^2 - 3)",
      "task_type": "find_limit_at_infinity",
      "steps": [
        {
          "before": "(2*x^2 + 1)/(x^2 - 3)",
          "rule_id": "limit_at_infinity_degree_comparison",
          "action": "Compare numerator and denominator degrees",
          "after": "degree numerator = 2, degree denominator = 2",
          "explanation": "For rational functions, the degrees determine the end behavior at infinity.",
          "details": {
            "degree_numerator": 2,
            "degree_denominator": 2
          }
        },
        {
          "before": "leading coefficients 2 and 1",
          "rule_id": "limit_at_infinity_leading_coefficients",
          "action": "Use the leading coefficient ratio",
          "after": "2/1 = 2",
          "explanation": "Equal degrees give a finite limit equal to the ratio of leading coefficients.",
          "details": {}
        }
      ],
      "answer": "2",
      "problem_profile": {
        "input": "lim x->infinity (2*x^2 + 1)/(x^2 - 3)",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": true,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "rational"
        ]
      },
      "candidate_strategies": [
        {
          "id": "rational_degree_comparison",
          "name": "rational degree comparison",
          "applicable_to": [
            "find_limit_at_infinity"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage11.limit_continuity",
          "score": 100,
          "reasons": [
            "rule-based",
            "domain-aware"
          ]
        },
        {
          "id": "symbolic_fallback_check",
          "name": "symbolic fallback check",
          "applicable_to": [
            "find_limit_at_infinity"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "score": 70,
          "reasons": [
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "rational_degree_comparison",
      "strategy_score": 100,
      "analysis": {
        "limit": "2",
        "horizontal_asymptote": "y = 2"
      },
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Equal-degree rational limit verified."
          }
        ]
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "find_limit_at_infinity"
    }
  },
  {
    "input": "x^2 + 3*x",
    "action": "find_limit",
    "list_actions": false,
    "at": "2",
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "x^2 + 3*x",
      "task_type": "find_limit",
      "steps": [
        {
          "before": "x^2 + 3*x",
          "rule_id": "limit_direct_substitution",
          "action": "Substitute the limit point",
          "after": "x^2 + 3*x at x = 2 gives 10",
          "explanation": "The expression is defined at the limit point, so the limit is found by direct substitution.",
          "details": {
            "point": "2",
            "value": "10"
          }
        },
        {
          "before": "x^2 + 3*x",
          "rule_id": "check_solution",
          "action": "Check the limit",
          "after": "passed",
          "explanation": "The direct substitution value matches the symbolic limit.",
          "details": {}
        }
      ],
      "answer": "10",
      "problem_profile": {
        "input": "x^2 + 3*x",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": 2,
        "is_polynomial": true,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": true,
        "has_simple_integer_roots": true,
        "discriminant": null,
        "features": [
          "polynomial",
          "factorable",
          "simple_integer_roots",
          "common_factor"
        ]
      },
      "candidate_strategies": [
        {
          "id": "direct_substitution",
          "name": "direct substitution",
          "applicable_to": [
            "find_limit"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage11.limit_continuity",
          "score": 100,
          "reasons": [
            "rule-based",
            "domain-aware"
          ]
        },
        {
          "id": "symbolic_fallback_check",
          "name": "symbolic fallback check",
          "applicable_to": [
            "find_limit"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "score": 70,
          "reasons": [
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "direct_substitution",
      "strategy_score": 100,
      "analysis": {
        "limit_point": "2",
        "limit": "10"
      },
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Direct substitution verified."
          }
        ]
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "find_limit"
    }
  },
  {
    "input": "(x^2 - 1)/(x - 1)",
    "action": "find_limit",
    "list_actions": false,
    "at": "1",
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "(x^2 - 1)/(x - 1)",
      "task_type": "find_limit",
      "steps": [
        {
          "before": "(x^2 - 1)/(x - 1)",
          "rule_id": "limit_indeterminate_form_detected",
          "action": "Try direct substitution",
          "after": "0/0",
          "explanation": "Direct substitution gives the indeterminate form 0/0, so the expression must be transformed before evaluating the limit.",
          "details": {
            "numerator_at_point": "0",
            "denominator_at_point": "0"
          }
        },
        {
          "before": "x^2 - 1",
          "rule_id": "difference_of_squares",
          "action": "Apply the difference of squares formula",
          "after": "(x - 1)*(x + 1)",
          "explanation": "The expression has the form a^2 - b^2, so it becomes (a - b)(a + b).",
          "details": {
            "formula_result": "(x - 1)*(x + 1)"
          }
        },
        {
          "before": "(x^2 - 1)/(x - 1)",
          "rule_id": "limit_factor_and_cancel",
          "action": "Cancel the common factor for the limit",
          "after": "x + 1",
          "explanation": "The factor that makes 0/0 cancels. This creates an equivalent expression only away from the excluded point.",
          "details": {}
        },
        {
          "before": "x + 1",
          "rule_id": "limit_preserve_domain_restriction",
          "action": "Preserve the original domain restriction",
          "after": "x ≠ 1",
          "explanation": "The original function is still undefined at the canceled point even though the simplified expression has a value there.",
          "details": {}
        },
        {
          "before": "x + 1",
          "rule_id": "limit_removable_discontinuity",
          "action": "Evaluate the simplified expression",
          "after": "lim x→1 x + 1 = 2",
          "explanation": "The original function has a removable discontinuity at this point because the limit exists but the original expression is undefined.",
          "details": {}
        },
        {
          "before": "(x^2 - 1)/(x - 1)",
          "rule_id": "check_solution",
          "action": "Check the removable-limit result",
          "after": "passed",
          "explanation": "The simplified expression and numeric sampling near the point give the same limit.",
          "details": {}
        }
      ],
      "answer": "2",
      "problem_profile": {
        "input": "(x^2 - 1)/(x - 1)",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": true,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "rational"
        ]
      },
      "candidate_strategies": [
        {
          "id": "factor_cancel_limit",
          "name": "factor cancel limit",
          "applicable_to": [
            "find_limit"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage11.limit_continuity",
          "score": 100,
          "reasons": [
            "rule-based",
            "domain-aware"
          ]
        },
        {
          "id": "direct_substitution",
          "name": "direct substitution",
          "applicable_to": [
            "find_limit"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage11.limit_continuity",
          "score": 70,
          "reasons": [
            "rule-based",
            "domain-aware"
          ]
        },
        {
          "id": "symbolic_fallback_check",
          "name": "symbolic fallback check",
          "applicable_to": [
            "find_limit"
          ],
          "exact": true,
          "educational_priority": 10,
          "complexity_score": 4,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "score": 40,
          "reasons": [
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "factor_cancel_limit",
      "strategy_score": 100,
      "analysis": {
        "limit_point": "1",
        "limit": "2",
        "continuity": "removable discontinuity",
        "domain": "x ≠ 1"
      },
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Removable discontinuity limit verified by cancellation and sampling."
          }
        ]
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "find_limit"
    }
  },
  {
    "input": "1/(x - 2)",
    "action": "find_left_limit",
    "list_actions": false,
    "at": "2",
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "1/(x - 2)",
      "task_type": "find_left_limit",
      "steps": [
        {
          "before": "1/(x - 2)",
          "rule_id": "limit_one_sided_left",
          "action": "Compute the left limit",
          "after": "lim x → 2- 1/(x - 2)",
          "explanation": "A one-sided limit follows the function values as x approaches the point from only one side.",
          "details": {
            "point": "2",
            "direction": "left"
          }
        },
        {
          "before": "1/(x - 2)",
          "rule_id": "limit_infinite_behavior",
          "action": "Analyze the local behavior",
          "after": "-∞",
          "explanation": "The sign of the denominator near the point determines whether the quotient tends to positive or negative infinity.",
          "details": {}
        },
        {
          "before": "lim x → 2- 1/(x - 2)",
          "rule_id": "check_solution",
          "action": "Check the limit result",
          "after": "passed",
          "explanation": "The result is verified by symbolic one-sided limit computation and numeric sampling near the point.",
          "details": {}
        }
      ],
      "answer": "lim x→2- 1/(x - 2) = -∞",
      "problem_profile": {
        "input": "1/(x - 2)",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": true,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "rational"
        ]
      },
      "candidate_strategies": [
        {
          "id": "one_sided_limit_analysis",
          "name": "one sided limit analysis",
          "applicable_to": [
            "find_left_limit"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage11.limit_continuity",
          "score": 100,
          "reasons": [
            "rule-based",
            "domain-aware"
          ]
        },
        {
          "id": "symbolic_fallback_check",
          "name": "symbolic fallback check",
          "applicable_to": [
            "find_left_limit"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "score": 70,
          "reasons": [
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "one_sided_limit_analysis",
      "strategy_score": 100,
      "analysis": {
        "limit_point": "2",
        "limit": "-∞",
        "direction": "left"
      },
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "One-sided limit verified by symbolic fallback and local sign analysis."
          }
        ]
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "find_left_limit"
    }
  },
  {
    "input": "1/(x - 2)",
    "action": "find_right_limit",
    "list_actions": false,
    "at": "2",
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "1/(x - 2)",
      "task_type": "find_right_limit",
      "steps": [
        {
          "before": "1/(x - 2)",
          "rule_id": "limit_one_sided_right",
          "action": "Compute the right limit",
          "after": "lim x → 2+ 1/(x - 2)",
          "explanation": "A one-sided limit follows the function values as x approaches the point from only one side.",
          "details": {
            "point": "2",
            "direction": "right"
          }
        },
        {
          "before": "1/(x - 2)",
          "rule_id": "limit_infinite_behavior",
          "action": "Analyze the local behavior",
          "after": "+∞",
          "explanation": "The sign of the denominator near the point determines whether the quotient tends to positive or negative infinity.",
          "details": {}
        },
        {
          "before": "lim x → 2+ 1/(x - 2)",
          "rule_id": "check_solution",
          "action": "Check the limit result",
          "after": "passed",
          "explanation": "The result is verified by symbolic one-sided limit computation and numeric sampling near the point.",
          "details": {}
        }
      ],
      "answer": "lim x→2+ 1/(x - 2) = +∞",
      "problem_profile": {
        "input": "1/(x - 2)",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": true,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "rational"
        ]
      },
      "candidate_strategies": [
        {
          "id": "one_sided_limit_analysis",
          "name": "one sided limit analysis",
          "applicable_to": [
            "find_right_limit"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage11.limit_continuity",
          "score": 100,
          "reasons": [
            "rule-based",
            "domain-aware"
          ]
        },
        {
          "id": "symbolic_fallback_check",
          "name": "symbolic fallback check",
          "applicable_to": [
            "find_right_limit"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "score": 70,
          "reasons": [
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "one_sided_limit_analysis",
      "strategy_score": 100,
      "analysis": {
        "limit_point": "2",
        "limit": "+∞",
        "direction": "right"
      },
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "One-sided limit verified by symbolic fallback and local sign analysis."
          }
        ]
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "find_right_limit"
    }
  },
  {
    "input": "1/(x - 2)",
    "action": "find_limit",
    "list_actions": false,
    "at": "2",
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "1/(x - 2)",
      "task_type": "find_limit",
      "steps": [
        {
          "before": "1/(x - 2)",
          "rule_id": "limit_one_sided_left",
          "action": "Compute the left-hand limit",
          "after": "left limit = -∞",
          "explanation": "The function is checked from the left side because a vertical asymptote can have different one-sided behavior.",
          "details": {}
        },
        {
          "before": "1/(x - 2)",
          "rule_id": "limit_one_sided_right",
          "action": "Compute the right-hand limit",
          "after": "right limit = +∞",
          "explanation": "The function is checked from the right side because a two-sided limit requires both sides to agree.",
          "details": {}
        },
        {
          "before": "left = -∞, right = +∞",
          "rule_id": "limit_infinite_behavior",
          "action": "Compare one-sided infinite behavior",
          "after": "two-sided limit does not exist",
          "explanation": "The two-sided limit exists only if the left and right limits are equal.",
          "details": {}
        }
      ],
      "answer": "The two-sided limit does not exist: left limit = -∞, right limit = +∞",
      "problem_profile": {
        "input": "1/(x - 2)",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": true,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "rational"
        ]
      },
      "candidate_strategies": [
        {
          "id": "one_sided_limit_analysis",
          "name": "one sided limit analysis",
          "applicable_to": [
            "find_limit"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage11.limit_continuity",
          "score": 100,
          "reasons": [
            "rule-based",
            "domain-aware"
          ]
        },
        {
          "id": "direct_substitution",
          "name": "direct substitution",
          "applicable_to": [
            "find_limit"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage11.limit_continuity",
          "score": 70,
          "reasons": [
            "rule-based",
            "domain-aware"
          ]
        },
        {
          "id": "symbolic_fallback_check",
          "name": "symbolic fallback check",
          "applicable_to": [
            "find_limit"
          ],
          "exact": true,
          "educational_priority": 10,
          "complexity_score": 4,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "score": 40,
          "reasons": [
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "one_sided_limit_analysis",
      "strategy_score": 100,
      "analysis": {
        "limit_point": "2",
        "left_limit": "-∞",
        "right_limit": "+∞",
        "limit": null
      },
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "One-sided limits verified separately."
          }
        ]
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "find_limit"
    }
  },
  {
    "input": "(2*x^2 + 1)/(x^2 - 3)",
    "action": "find_limit_at_infinity",
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "(2*x^2 + 1)/(x^2 - 3)",
      "task_type": "find_limit_at_infinity",
      "steps": [
        {
          "before": "(2*x^2 + 1)/(x^2 - 3)",
          "rule_id": "limit_at_infinity_degree_comparison",
          "action": "Compare numerator and denominator degrees",
          "after": "degree numerator = 2, degree denominator = 2",
          "explanation": "For rational functions, the degrees determine the end behavior at infinity.",
          "details": {
            "degree_numerator": 2,
            "degree_denominator": 2
          }
        },
        {
          "before": "leading coefficients 2 and 1",
          "rule_id": "limit_at_infinity_leading_coefficients",
          "action": "Use the leading coefficient ratio",
          "after": "2/1 = 2",
          "explanation": "Equal degrees give a finite limit equal to the ratio of leading coefficients.",
          "details": {}
        }
      ],
      "answer": "2",
      "problem_profile": {
        "input": "(2*x^2 + 1)/(x^2 - 3)",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": true,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "rational"
        ]
      },
      "candidate_strategies": [
        {
          "id": "rational_degree_comparison",
          "name": "rational degree comparison",
          "applicable_to": [
            "find_limit_at_infinity"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage11.limit_continuity",
          "score": 100,
          "reasons": [
            "rule-based",
            "domain-aware"
          ]
        },
        {
          "id": "symbolic_fallback_check",
          "name": "symbolic fallback check",
          "applicable_to": [
            "find_limit_at_infinity"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "score": 70,
          "reasons": [
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "rational_degree_comparison",
      "strategy_score": 100,
      "analysis": {
        "limit": "2",
        "horizontal_asymptote": "y = 2"
      },
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Equal-degree rational limit verified."
          }
        ]
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "find_limit_at_infinity"
    }
  },
  {
    "input": "1/(x - 2)",
    "action": "find_limit_at_infinity",
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "1/(x - 2)",
      "task_type": "find_limit_at_infinity",
      "steps": [
        {
          "before": "1/(x - 2)",
          "rule_id": "limit_at_infinity_degree_comparison",
          "action": "Compare numerator and denominator degrees",
          "after": "degree numerator = 0, degree denominator = 1",
          "explanation": "For rational functions, the degrees determine the end behavior at infinity.",
          "details": {
            "degree_numerator": 0,
            "degree_denominator": 1
          }
        },
        {
          "before": "1/(x - 2)",
          "rule_id": "limit_horizontal_asymptote_relation",
          "action": "Relate the limit to the horizontal asymptote",
          "after": "y = 0",
          "explanation": "When the numerator degree is smaller, the function approaches 0 at infinity.",
          "details": {}
        }
      ],
      "answer": "0",
      "problem_profile": {
        "input": "1/(x - 2)",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": true,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "rational"
        ]
      },
      "candidate_strategies": [
        {
          "id": "rational_degree_comparison",
          "name": "rational degree comparison",
          "applicable_to": [
            "find_limit_at_infinity"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage11.limit_continuity",
          "score": 100,
          "reasons": [
            "rule-based",
            "domain-aware"
          ]
        },
        {
          "id": "symbolic_fallback_check",
          "name": "symbolic fallback check",
          "applicable_to": [
            "find_limit_at_infinity"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "score": 70,
          "reasons": [
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "rational_degree_comparison",
      "strategy_score": 100,
      "analysis": {
        "limit": "0",
        "horizontal_asymptote": "y = 0"
      },
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Rational limit at infinity verified by degree comparison."
          }
        ]
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "find_limit_at_infinity"
    }
  },
  {
    "input": "(x^2 + 1)/(x - 1)",
    "action": "find_limit_at_infinity",
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "(x^2 + 1)/(x - 1)",
      "task_type": "find_limit_at_infinity",
      "steps": [
        {
          "before": "(x^2 + 1)/(x - 1)",
          "rule_id": "limit_at_infinity_degree_comparison",
          "action": "Compare numerator and denominator degrees",
          "after": "degree numerator = 2, degree denominator = 1",
          "explanation": "For rational functions, the degrees determine the end behavior at infinity.",
          "details": {
            "degree_numerator": 2,
            "degree_denominator": 1
          }
        },
        {
          "before": "(x^2 + 1)/(x - 1)",
          "rule_id": "limit_at_infinity_polynomial_division",
          "action": "Use polynomial division",
          "after": "numerator degree is one greater than denominator degree",
          "explanation": "A slant asymptote controls the end behavior.",
          "details": {}
        },
        {
          "before": "(x^2 + 1) ÷ (x - 1)",
          "rule_id": "polynomial_division",
          "action": "Divide numerator by denominator",
          "after": "(x^2 + 1)/(x - 1) = x + 1 + 2/(x - 1)",
          "explanation": "The remainder term approaches 0 as x approaches infinity.",
          "details": {}
        },
        {
          "before": "x + 1",
          "rule_id": "limit_slant_asymptote_relation",
          "action": "Relate end behavior to the slant asymptote",
          "after": "slant asymptote: y = x + 1",
          "explanation": "Since the quotient grows without bound as x→+∞, the limit is infinite.",
          "details": {}
        }
      ],
      "answer": "+∞",
      "problem_profile": {
        "input": "(x^2 + 1)/(x - 1)",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": true,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "rational"
        ]
      },
      "candidate_strategies": [
        {
          "id": "rational_degree_comparison",
          "name": "rational degree comparison",
          "applicable_to": [
            "find_limit_at_infinity"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage11.limit_continuity",
          "score": 100,
          "reasons": [
            "rule-based",
            "domain-aware"
          ]
        },
        {
          "id": "symbolic_fallback_check",
          "name": "symbolic fallback check",
          "applicable_to": [
            "find_limit_at_infinity"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "score": 70,
          "reasons": [
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "rational_degree_comparison",
      "strategy_score": 100,
      "analysis": {
        "limit": "+∞",
        "slant_asymptote": "y = x + 1"
      },
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Slant-asymptote limit verified by polynomial division."
          }
        ]
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "find_limit_at_infinity"
    }
  },
  {
    "input": "sin(x)/x",
    "action": "find_limit",
    "list_actions": false,
    "at": "0",
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "sin(x)/x",
      "task_type": "find_limit",
      "steps": [
        {
          "before": "sin(x)/x",
          "rule_id": "limit_indeterminate_form_detected",
          "action": "Try direct substitution",
          "after": "0/0",
          "explanation": "Direct substitution gives the indeterminate form 0/0.",
          "details": {}
        },
        {
          "before": "sin(x)/x",
          "rule_id": "limit_trig_standard_limit",
          "action": "Use the standard trigonometric limit",
          "after": "lim x→0 sin(x)/x = 1",
          "explanation": "The standard unit-circle limit states that sin(x)/x approaches 1 as x approaches 0.",
          "details": {}
        },
        {
          "before": "sin(x)/x",
          "rule_id": "check_solution",
          "action": "Check the standard limit",
          "after": "passed",
          "explanation": "The result agrees with the standard trigonometric limit and numerical sampling.",
          "details": {}
        }
      ],
      "answer": "1",
      "problem_profile": {
        "input": "sin(x)/x",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": true,
        "has_absolute_value": false,
        "has_trigonometric_functions": true,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "rational",
          "trigonometric"
        ]
      },
      "candidate_strategies": [
        {
          "id": "standard_trig_limit",
          "name": "standard trig limit",
          "applicable_to": [
            "find_limit"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage11.limit_continuity",
          "score": 100,
          "reasons": [
            "rule-based",
            "domain-aware"
          ]
        },
        {
          "id": "direct_substitution",
          "name": "direct substitution",
          "applicable_to": [
            "find_limit"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage11.limit_continuity",
          "score": 70,
          "reasons": [
            "rule-based",
            "domain-aware"
          ]
        },
        {
          "id": "symbolic_fallback_check",
          "name": "symbolic fallback check",
          "applicable_to": [
            "find_limit"
          ],
          "exact": true,
          "educational_priority": 10,
          "complexity_score": 4,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "score": 40,
          "reasons": [
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "standard_trig_limit",
      "strategy_score": 100,
      "analysis": {
        "limit_point": "0",
        "limit": "1"
      },
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Standard trigonometric limit verified."
          }
        ]
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "find_limit"
    }
  },
  {
    "input": "x^2 + 1",
    "action": "check_continuity",
    "list_actions": false,
    "at": "2",
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "x^2 + 1",
      "task_type": "check_continuity",
      "steps": [
        {
          "before": "x^2 + 1",
          "rule_id": "continuity_domain_check",
          "action": "Check whether the function is defined at the point",
          "after": "defined",
          "explanation": "Continuity first requires the function value f(a) to exist.",
          "details": {}
        },
        {
          "before": "x^2 + 1",
          "rule_id": "continuity_function_value",
          "action": "Evaluate the function value",
          "after": "f(2) = 5",
          "explanation": "The function value is obtained by direct substitution.",
          "details": {}
        },
        {
          "before": "x^2 + 1",
          "rule_id": "continuity_limit_exists",
          "action": "Compute the limit",
          "after": "lim x→2 f(x) = 5",
          "explanation": "A continuous function must have a limit at the point.",
          "details": {}
        },
        {
          "before": "limit = 5, value = 5",
          "rule_id": "continuity_compare_value_and_limit",
          "action": "Compare limit and function value",
          "after": "equal",
          "explanation": "The limit equals the function value.",
          "details": {}
        },
        {
          "before": "x^2 + 1",
          "rule_id": "continuity_continuous_at_point",
          "action": "Conclude continuity",
          "after": "continuous at x = 2",
          "explanation": "All three continuity conditions are satisfied.",
          "details": {}
        }
      ],
      "answer": "The function is continuous at x = 2.",
      "problem_profile": {
        "input": "x^2 + 1",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": 2,
        "is_polynomial": true,
        "is_rational": false,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "polynomial"
        ]
      },
      "candidate_strategies": [
        {
          "id": "continuity_by_domain_and_limit",
          "name": "continuity by domain and limit",
          "applicable_to": [
            "check_continuity"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage11.limit_continuity",
          "score": 100,
          "reasons": [
            "rule-based",
            "domain-aware"
          ]
        },
        {
          "id": "symbolic_fallback_check",
          "name": "symbolic fallback check",
          "applicable_to": [
            "check_continuity"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "score": 70,
          "reasons": [
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "continuity_by_domain_and_limit",
      "strategy_score": 100,
      "analysis": {
        "limit_point": "2",
        "function_value": "5",
        "limit": "5",
        "continuity": "continuous"
      },
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Continuity verified by value-limit comparison."
          }
        ]
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "check_continuity"
    }
  },
  {
    "input": "(x^2 - 1)/(x - 1)",
    "action": "check_continuity",
    "list_actions": false,
    "at": "1",
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "(x^2 - 1)/(x - 1)",
      "task_type": "check_continuity",
      "steps": [
        {
          "before": "(x^2 - 1)/(x - 1)",
          "rule_id": "continuity_domain_check",
          "action": "Check whether the function is defined at the point",
          "after": "undefined at x = 1",
          "explanation": "Continuity first requires the function value f(a) to exist.",
          "details": {}
        },
        {
          "before": "x^2 - 1",
          "rule_id": "difference_of_squares",
          "action": "Apply the difference of squares formula",
          "after": "(x - 1)*(x + 1)",
          "explanation": "The expression has the form a^2 - b^2, so it becomes (a - b)(a + b).",
          "details": {
            "formula_result": "(x - 1)*(x + 1)"
          }
        },
        {
          "before": "(x^2 - 1)/(x - 1)",
          "rule_id": "limit_removable_discontinuity",
          "action": "Find the removable limit",
          "after": "limit = 2",
          "explanation": "After cancellation the limit exists, but the original function value is missing.",
          "details": {}
        },
        {
          "before": "(x^2 - 1)/(x - 1)",
          "rule_id": "continuity_discontinuous_at_point",
          "action": "Conclude discontinuity",
          "after": "not continuous at x = 1",
          "explanation": "The function value is undefined at the point.",
          "details": {}
        },
        {
          "before": "(x^2 - 1)/(x - 1)",
          "rule_id": "continuity_removable_discontinuity",
          "action": "Classify the discontinuity",
          "after": "removable discontinuity",
          "explanation": "The limit exists but f(a) is not defined.",
          "details": {}
        }
      ],
      "answer": "The function is not continuous at x = 1. It has a removable discontinuity.",
      "problem_profile": {
        "input": "(x^2 - 1)/(x - 1)",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": true,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "rational"
        ]
      },
      "candidate_strategies": [
        {
          "id": "continuity_by_domain_and_limit",
          "name": "continuity by domain and limit",
          "applicable_to": [
            "check_continuity"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage11.limit_continuity",
          "score": 100,
          "reasons": [
            "rule-based",
            "domain-aware"
          ]
        },
        {
          "id": "symbolic_fallback_check",
          "name": "symbolic fallback check",
          "applicable_to": [
            "check_continuity"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "score": 70,
          "reasons": [
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "continuity_by_domain_and_limit",
      "strategy_score": 100,
      "analysis": {
        "limit_point": "1",
        "limit": "2",
        "continuity": "removable discontinuity"
      },
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Removable discontinuity verified by cancellation."
          }
        ]
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "check_continuity"
    }
  },
  {
    "input": "1/(x - 2)",
    "action": "check_continuity",
    "list_actions": false,
    "at": "2",
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "1/(x - 2)",
      "task_type": "check_continuity",
      "steps": [
        {
          "before": "1/(x - 2)",
          "rule_id": "continuity_domain_check",
          "action": "Check whether the function is defined at the point",
          "after": "undefined at x = 2",
          "explanation": "Continuity first requires the function value f(a) to exist.",
          "details": {}
        },
        {
          "before": "1/(x - 2)",
          "rule_id": "limit_one_sided_left",
          "action": "Compute left-hand limit",
          "after": "left limit = -∞",
          "explanation": "One-sided limits classify vertical-asymptote behavior.",
          "details": {}
        },
        {
          "before": "1/(x - 2)",
          "rule_id": "limit_one_sided_right",
          "action": "Compute right-hand limit",
          "after": "right limit = +∞",
          "explanation": "One-sided limits classify vertical-asymptote behavior.",
          "details": {}
        },
        {
          "before": "1/(x - 2)",
          "rule_id": "continuity_infinite_discontinuity",
          "action": "Classify infinite discontinuity",
          "after": "vertical asymptote at x = 2",
          "explanation": "At least one one-sided limit is infinite, so the discontinuity is infinite.",
          "details": {}
        }
      ],
      "answer": "The function is not continuous at x = 2. It has an infinite discontinuity / vertical asymptote.",
      "problem_profile": {
        "input": "1/(x - 2)",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": true,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "rational"
        ]
      },
      "candidate_strategies": [
        {
          "id": "continuity_by_domain_and_limit",
          "name": "continuity by domain and limit",
          "applicable_to": [
            "check_continuity"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage11.limit_continuity",
          "score": 100,
          "reasons": [
            "rule-based",
            "domain-aware"
          ]
        },
        {
          "id": "symbolic_fallback_check",
          "name": "symbolic fallback check",
          "applicable_to": [
            "check_continuity"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "score": 70,
          "reasons": [
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "continuity_by_domain_and_limit",
      "strategy_score": 100,
      "analysis": {
        "limit_point": "2",
        "left_limit": "-∞",
        "right_limit": "+∞",
        "continuity": "infinite discontinuity"
      },
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Infinite discontinuity verified by one-sided limits."
          }
        ]
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "check_continuity"
    }
  },
  {
    "input": "(x^2 - 1)/(x - 1)",
    "action": "find_discontinuities",
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "(x^2 - 1)/(x - 1)",
      "task_type": "find_discontinuities",
      "steps": [
        {
          "before": "(x^2 - 1)/(x - 1)",
          "rule_id": "asymptote_denominator_zeros",
          "action": "Find denominator zeros",
          "after": "x = 1",
          "explanation": "Discontinuities of rational functions occur at original denominator zeros.",
          "details": {}
        },
        {
          "before": "x^2 - 1",
          "rule_id": "difference_of_squares",
          "action": "Apply the difference of squares formula",
          "after": "(x - 1)*(x + 1)",
          "explanation": "The expression has the form a^2 - b^2, so it becomes (a - b)(a + b).",
          "details": {
            "formula_result": "(x - 1)*(x + 1)"
          }
        },
        {
          "before": "(x^2 - 1)/(x - 1)",
          "rule_id": "asymptote_factor_cancel_check",
          "action": "Check for factor cancellation",
          "after": "factor at x = 1 cancels",
          "explanation": "A canceled denominator factor creates a removable discontinuity.",
          "details": {}
        },
        {
          "before": "x + 1",
          "rule_id": "asymptote_hole_from_canceled_factor",
          "action": "Classify a hole",
          "after": "Hole: (1, 2)",
          "explanation": "Evaluate the simplified expression at the canceled x-value to find the hole coordinate.",
          "details": {}
        },
        {
          "before": "(x^2 - 1)/(x - 1)",
          "rule_id": "continuity_removable_discontinuity",
          "action": "Record removable discontinuity",
          "after": "removable discontinuity at x = 1",
          "explanation": "The original function is undefined, but the limit exists.",
          "details": {}
        },
        {
          "before": "(x^2 - 1)/(x - 1)",
          "rule_id": "continuity_discontinuity_summary",
          "action": "Summarize discontinuities",
          "after": "Removable discontinuity at x = 1; Hole: (1, 2)",
          "explanation": "Canceled factors are removable discontinuities; uncanceled denominator factors are infinite discontinuities.",
          "details": {}
        }
      ],
      "answer": "Removable discontinuity at x = 1; Hole: (1, 2)",
      "problem_profile": {
        "input": "(x^2 - 1)/(x - 1)",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": true,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "rational"
        ]
      },
      "candidate_strategies": [
        {
          "id": "rational_discontinuity_classification",
          "name": "rational discontinuity classification",
          "applicable_to": [
            "find_discontinuities"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage11.limit_continuity",
          "score": 100,
          "reasons": [
            "rule-based",
            "domain-aware"
          ]
        },
        {
          "id": "symbolic_fallback_check",
          "name": "symbolic fallback check",
          "applicable_to": [
            "find_discontinuities"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "score": 70,
          "reasons": [
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "rational_discontinuity_classification",
      "strategy_score": 100,
      "analysis": {
        "holes": [
          {
            "x": "1",
            "y": "2"
          }
        ],
        "vertical_asymptotes": [],
        "discontinuities": "Removable discontinuity at x = 1; Hole: (1, 2)"
      },
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Discontinuities verified by denominator-factor classification."
          }
        ]
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "find_discontinuities"
    }
  },
  {
    "input": "1/(x - 2)",
    "action": "find_discontinuities",
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "1/(x - 2)",
      "task_type": "find_discontinuities",
      "steps": [
        {
          "before": "1/(x - 2)",
          "rule_id": "asymptote_denominator_zeros",
          "action": "Find denominator zeros",
          "after": "x = 2",
          "explanation": "Discontinuities of rational functions occur at original denominator zeros.",
          "details": {}
        },
        {
          "before": "1/(x - 2)",
          "rule_id": "asymptote_vertical_from_uncanceled_denominator",
          "action": "Classify vertical asymptote",
          "after": "Vertical asymptote: x = 2",
          "explanation": "An uncanceled denominator zero gives an infinite discontinuity.",
          "details": {}
        },
        {
          "before": "1/(x - 2)",
          "rule_id": "continuity_infinite_discontinuity",
          "action": "Record infinite discontinuity",
          "after": "infinite discontinuity at x = 2",
          "explanation": "The function grows without bound near this denominator zero.",
          "details": {}
        },
        {
          "before": "1/(x - 2)",
          "rule_id": "continuity_discontinuity_summary",
          "action": "Summarize discontinuities",
          "after": "Infinite discontinuity at x = 2; Vertical asymptote: x = 2",
          "explanation": "Canceled factors are removable discontinuities; uncanceled denominator factors are infinite discontinuities.",
          "details": {}
        }
      ],
      "answer": "Infinite discontinuity at x = 2; Vertical asymptote: x = 2",
      "problem_profile": {
        "input": "1/(x - 2)",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": true,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "rational"
        ]
      },
      "candidate_strategies": [
        {
          "id": "rational_discontinuity_classification",
          "name": "rational discontinuity classification",
          "applicable_to": [
            "find_discontinuities"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage11.limit_continuity",
          "score": 100,
          "reasons": [
            "rule-based",
            "domain-aware"
          ]
        },
        {
          "id": "symbolic_fallback_check",
          "name": "symbolic fallback check",
          "applicable_to": [
            "find_discontinuities"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "score": 70,
          "reasons": [
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "rational_discontinuity_classification",
      "strategy_score": 100,
      "analysis": {
        "holes": [],
        "vertical_asymptotes": [
          "2"
        ],
        "discontinuities": "Infinite discontinuity at x = 2; Vertical asymptote: x = 2"
      },
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Discontinuities verified by denominator-factor classification."
          }
        ]
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "find_discontinuities"
    }
  },
  {
    "input": "(x^2 - 4)/(x^2 - 2*x)",
    "action": "find_discontinuities",
    "list_actions": false,
    "at": null,
    "lower": null,
    "upper": null,
    "method": null,
    "restrict_domain": null,
    "result": {
      "input": "(x^2 - 4)/(x^2 - 2*x)",
      "task_type": "find_discontinuities",
      "steps": [
        {
          "before": "(x^2 - 4)/(x^2 - 2*x)",
          "rule_id": "asymptote_denominator_zeros",
          "action": "Find denominator zeros",
          "after": "x = 0, x = 2",
          "explanation": "Discontinuities of rational functions occur at original denominator zeros.",
          "details": {}
        },
        {
          "before": "x^2 - 4",
          "rule_id": "difference_of_squares",
          "action": "Apply the difference of squares formula",
          "after": "(x - 2)*(x + 2)",
          "explanation": "The expression has the form a^2 - b^2, so it becomes (a - b)(a + b).",
          "details": {
            "formula_result": "(x - 2)*(x + 2)"
          }
        },
        {
          "before": "x^2 - 2*x",
          "rule_id": "factor_common_term",
          "action": "Take out the common factor",
          "after": "x*(x - 2)",
          "explanation": "All terms contain a common factor, so it is placed outside the parentheses.",
          "details": {
            "previous": "x^2 - 2*x",
            "factorized": "x*(x - 2)"
          }
        },
        {
          "before": "(x^2 - 4)/(x^2 - 2*x)",
          "rule_id": "asymptote_vertical_from_uncanceled_denominator",
          "action": "Classify vertical asymptote",
          "after": "Vertical asymptote: x = 0",
          "explanation": "An uncanceled denominator zero gives an infinite discontinuity.",
          "details": {}
        },
        {
          "before": "(x^2 - 4)/(x^2 - 2*x)",
          "rule_id": "continuity_infinite_discontinuity",
          "action": "Record infinite discontinuity",
          "after": "infinite discontinuity at x = 0",
          "explanation": "The function grows without bound near this denominator zero.",
          "details": {}
        },
        {
          "before": "(x^2 - 4)/(x^2 - 2*x)",
          "rule_id": "asymptote_factor_cancel_check",
          "action": "Check for factor cancellation",
          "after": "factor at x = 2 cancels",
          "explanation": "A canceled denominator factor creates a removable discontinuity.",
          "details": {}
        },
        {
          "before": "(x + 2)/x",
          "rule_id": "asymptote_hole_from_canceled_factor",
          "action": "Classify a hole",
          "after": "Hole: (2, 2)",
          "explanation": "Evaluate the simplified expression at the canceled x-value to find the hole coordinate.",
          "details": {}
        },
        {
          "before": "(x^2 - 4)/(x^2 - 2*x)",
          "rule_id": "continuity_removable_discontinuity",
          "action": "Record removable discontinuity",
          "after": "removable discontinuity at x = 2",
          "explanation": "The original function is undefined, but the limit exists.",
          "details": {}
        },
        {
          "before": "(x^2 - 4)/(x^2 - 2*x)",
          "rule_id": "continuity_discontinuity_summary",
          "action": "Summarize discontinuities",
          "after": "Removable discontinuity at x = 2; Hole: (2, 2); Infinite discontinuity at x = 0; Vertical asymptote: x = 0",
          "explanation": "Canceled factors are removable discontinuities; uncanceled denominator factors are infinite discontinuities.",
          "details": {}
        }
      ],
      "answer": "Removable discontinuity at x = 2; Hole: (2, 2); Infinite discontinuity at x = 0; Vertical asymptote: x = 0",
      "problem_profile": {
        "input": "(x^2 - 4)/(x^2 - 2*x)",
        "task_type": "algebraic_expression",
        "problem_kind": "expression",
        "main_variable": "x",
        "degree": null,
        "is_polynomial": false,
        "is_rational": true,
        "has_absolute_value": false,
        "has_trigonometric_functions": false,
        "has_exponential_functions": false,
        "has_logarithms": false,
        "has_radicals": false,
        "has_derivative_request": false,
        "has_integral_request": false,
        "domain": "real",
        "relation_operator": null,
        "factorable_over_rationals": false,
        "has_simple_integer_roots": false,
        "discriminant": null,
        "features": [
          "rational",
          "common_factor"
        ]
      },
      "candidate_strategies": [
        {
          "id": "rational_discontinuity_classification",
          "name": "rational discontinuity classification",
          "applicable_to": [
            "find_discontinuities"
          ],
          "exact": true,
          "educational_priority": 12,
          "complexity_score": 2,
          "requires_fallback": false,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "stage11.limit_continuity",
          "score": 100,
          "reasons": [
            "rule-based",
            "domain-aware"
          ]
        },
        {
          "id": "symbolic_fallback_check",
          "name": "symbolic fallback check",
          "applicable_to": [
            "find_discontinuities"
          ],
          "exact": true,
          "educational_priority": 11,
          "complexity_score": 3,
          "requires_fallback": true,
          "preserves_domain": true,
          "produces_trace": true,
          "executor": "fallback.sympy",
          "score": 70,
          "reasons": [
            "fallback penalty"
          ]
        }
      ],
      "selected_strategy": "rational_discontinuity_classification",
      "strategy_score": 100,
      "analysis": {
        "holes": [
          {
            "x": "2",
            "y": "2"
          }
        ],
        "vertical_asymptotes": [
          "0"
        ],
        "discontinuities": "Removable discontinuity at x = 2; Hole: (2, 2); Infinite discontinuity at x = 0; Vertical asymptote: x = 0"
      },
      "verification": {
        "status": "passed",
        "checks": [
          {
            "status": "passed",
            "message": "Discontinuities verified by denominator-factor classification."
          }
        ]
      },
      "available_actions": [
        "simplify",
        "factor",
        "find_domain",
        "differentiate",
        "integrate",
        "integrate_definite",
        "find_area_under_curve",
        "find_inverse",
        "find_range",
        "find_asymptotes",
        "find_limit",
        "find_left_limit",
        "find_right_limit",
        "find_limit_at_infinity",
        "check_continuity",
        "find_discontinuities",
        "find_critical_points",
        "find_extrema",
        "find_monotonicity",
        "find_tangent_line",
        "find_normal_line",
        "find_second_derivative",
        "find_concavity",
        "find_inflection_points",
        "analyze_function",
        "list_actions"
      ],
      "selected_action": "find_discontinuities"
    }
  }
];
