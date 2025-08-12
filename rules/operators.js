module.exports = {
  operator_expression: $ => prec.left(5, choice(
    // postfix percent
    seq($.expression, '%'),

    // unary operators
    seq(
      $.unary_operator,
      $.expression
    ),

    // binary operators
    seq( $.expression, $.binary_operator,
      $.expression
    )
  )),

  unary_operator: $ => choice(
    '+',
    '-'
  ),

  binary_operator: $ => choice(
    '+',
    '-',
    '*',
    '/',
    '^',
    '&',
    '.',
    '>',
    '<',
    '=',
    '<>',
    '<=',
    '>=',
    ':',
  ),
};
