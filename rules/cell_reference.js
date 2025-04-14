module.exports = {
  // cell pattern outside of cell_reference
  // for lexing purposes
  cell_pattern: $ => prec(100, /[A-Z]{1,3}[0-9]{1,7}/),
  cell_reference: $ => prec(100,
    seq(
      optional(seq($.identifier, '!')),
      $.cell_pattern
    )
  ),
}
