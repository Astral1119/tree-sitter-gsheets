module.exports = {
  // cell pattern outside of cell_reference
  // for lexing purposes
  cell_pattern: $ => prec(100, /[A-Z]{1,3}[0-9]{1,7}/),
  cell_reference: $ => prec(100,
    seq(
      optional($.sheet_reference),
      $.cell_pattern
    )
  ),

  sheet_reference: $ => seq(
    choice(
      $.quoted_sheet_name,
      $.identifier
    ),
    '!'
  ),

  quoted_sheet_name: $ => token(seq(
    "'",
    repeat(choice(
      /[^']/,
      seq("''", "'")
    )),
    "'"
  )),
}
