module.exports = {
  expression: $ => choice(
    $.identifier,

    $.number,
    $.string,
    $.boolean,
    $.error_literal,
    $.array_literal,
    $.cell_reference,

    $.operator_expression,

    $.parenthesized_expression,
    $.function_call,
  ),

  parenthesized_expression: $ => seq(
    field('open_paren', '('),
    $.expression,
    field('close_paren', ')')
  ),

  function_call: $ => prec(10, seq(
    $.identifier,
    field('open_paren', '('),
    optional(seq(
      repeat(seq(
        $.expression,
        optional(seq(',', optional($.expression)))
      )),
    )),
    field('close_paren', ')')
  )),
}
