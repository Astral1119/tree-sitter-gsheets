function sepBy(sep, rule) {
  return seq(rule, repeat(seq(sep, rule)));
}

module.exports = {
  expression: $ => choice(
    $.number,
    $.string,
    $.boolean,
    $.error_literal,
    $.array_literal,
    $.cell_reference,

    $.operator_expression,

    $.parenthesized_expression,
    $.function_call,

    $.identifier,
  ),

  parenthesized_expression: $ => seq(
    "(",
    $.expression,
    ")"
  ),

  // Allow chaining: f()(1)("set")(x)
  function_call: $ => prec.left(10, seq(
    choice(
      field("function_name", $.identifier),
      $.function_call,
      $.parenthesized_expression,
    ),
    "(",
    optional(sepBy(",", optional($.expression))),
    ")"
  )),
}
