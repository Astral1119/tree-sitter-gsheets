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
    $.bracket_access,
    $.cell_reference,

    $.operator_expression,

    $.parenthesized_expression,
    $.function_call,
    alias($.dotted_identifier, $.identifier),
    $.identifier,
  ),

  parenthesized_expression: $ => seq(
    "(",
    $.expression,
    ")"
  ),

  // Allow chaining: f()(1)("set")(x)
  // Two variants to avoid mis-tokenizing dotted names when not followed by '('
  function_call: $ => prec.left(10, choice(
    // Dotted function name immediately followed by '('
    seq(
      field("function_name", alias(token(/[A-Za-z_][A-Za-z0-9_]*\.[A-Za-z0-9_]+(?:\.[A-Za-z0-9_]+)*/), $.function_identifier)),
      token.immediate("("),
      optional(seq(
        optional($.expression),
        repeat(seq(',', optional($.expression)))
      )),
      ")"
    ),
    // General callee forms
    seq(
      choice(
        field("function_name", $.identifier),
        $.function_call,
        $.parenthesized_expression,
      ),
      "(",
      optional(seq(
        optional($.expression),
        repeat(seq(',', optional($.expression)))
      )),
      ")"
    )
  )),

  // Special-case: prefer identifiers, but allow bracketed property after '.'
  // Ensure ':' (range) binds before bracket access, so A1:A4.[file] groups as (A1:A4).[file]
  bracket_access: $ => prec.left(2, seq(
    $.expression,
    '.',
    $.bracket_identifier
  )),
}
