module.exports = {
  number: $ => /\d+(\.\d+)?(e[+-]?\d+)?/, // number literal
  // Allow doubled quotes inside strings (e.g., "" to represent ")
  string: $ => token(seq('"', repeat(choice(/[^"\n]/, /""/, /\\./)), '"')), // double-quoted string
  boolean: $ => choice('TRUE', 'FALSE'), // boolean literals
  identifier: $ => prec(-1, /[a-zA-Z_][a-zA-Z0-9_]*/),
  // Prefer identifiers by default; also allow dotted identifiers when not calling
  dotted_identifier: $ => token(/[A-Za-z_][A-Za-z0-9_]*(?:\.[A-Za-z0-9_]+)+/),
  // Bracketed property for data extraction: .[file name]
  bracket_identifier: $ => token(seq('[', repeat(/[^\]\n]/), ']')),

  error_literal: $ => choice(
    '#NULL!',
    '#DIV/0!',
    '#VALUE!',
    '#REF!',
    '#NAME?',
    '#NUM!',
    '#N/A',
    '#ERROR!'
  ),

  array_literal: $ => seq(
    '{',
    repeat1(seq(
      $.expression,
      repeat(seq(',', optional($.expression))),
      optional(';')
    )),
    '}'
  ),
};
