module.exports = {
  cell_reference: $ => seq(
    optional(seq($.identifier, '!')),
    /[A-Z]{1,3}[0-9]{1,7}/ // cell reference
  ),
}
