module.exports = {
  number: $ => /\d+(\.\d+)?(e[+-]?\d+)?/, // number literal
  string: $ => /"(?:[^"\\]|\\.)*"/, // double-quoted string
  boolean: $ => choice('TRUE', 'FALSE'), // boolean literals
  identifier: $ => prec(-1, /[a-zA-Z_][a-zA-Z0-9_]*/), // RESTORE original simple regex

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

