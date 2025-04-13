module.exports = {
  cell_reference: $ => prec.dynamic(-1, seq(
    optional(seq($.sheet, '!')),
    choice(
      $.range,
      $.cell,
      $.row_range,
      $.column_range
    )
  )),

  range: $ => seq(
    $.starter,
    repeat1(seq(':', $.continuer))
  ),

  starter: $ => choice(
    $.cell,
    $.row_range,
    $.column_range
  ),

  continuer: $ => choice(
    $.cell,
    $.column
  ),

  cell: $ => seq(
    $.column,
    $.row
  ),

  column: $ => /[A-Z]+/,

  row: $ => /[0-9]+/,

  row_range: $ => seq(
    $.row,
    ':',
    $.row
  ),

  column_range: $ => seq(
    $.column,
    ':',
    $.column
  ),

  sheet: $ => choice(
    $.quoted_sheet,
    $.unquoted_sheet
  ),

  quoted_sheet: $ => seq(
    "'",
    repeat(choice(/''/, /[^']/)),
    "'"
  ),

  unquoted_sheet: $ => prec(-1, /[a-zA-Z0-9_]+/)
}
