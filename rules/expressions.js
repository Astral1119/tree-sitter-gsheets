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

  open_paren: $ => '(',
  close_paren: $ => ')',

  parenthesized_expression: $ => seq(
    $.open_paren,
    $.expression,
    $.close_paren
  ),

  function_call: $ => prec(10, seq(
    $.identifier,
    $.open_paren,
    optional(seq(
      repeat(seq(
        $.expression,
        optional(seq(',', optional($.expression)))
      )),
    )),
    $.close_paren
  )),
}
