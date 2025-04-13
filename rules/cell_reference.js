module.exports = {
  cell_reference: $ => prec.left(5,
    choice(
      seq($.cell_reference, ":", $.atomic_reference),
      $.atomic_reference
    )
  ),

  atomic_reference: $ => seq(
    optional(seq($.sheet, '!')),
    choice(
      $.cell,
      $.row_range,
      $.column_range
    )
  ),

  cell: $ => seq(
    $.column,
    $.row
  ),

  column: $ => /[A-Z]{1,3}/,

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

  unquoted_sheet: $ => /[a-zA-Z0-9_]+/
}
