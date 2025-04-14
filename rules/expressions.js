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

  function_call: $ => prec(10, seq(
    field("function_name", $.identifier),
    "(",
    optional(seq(
      repeat(seq(
        $.expression,
        optional(seq(',', optional($.expression)))
      )),
    )),
    ")"
  )),
}
