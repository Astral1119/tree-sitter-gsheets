/**
 * @file Google Sheets formula grammar for tree-sitter 
 * @author Astral Cafe <astral@astral.cafe>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "gsheets",
  extras: $ => [/\s/],
  supertypes: $ => [ $.expression ],

  rules: {
    source_file: $ => seq("=", $.expression),
    ...require('./rules/cell_reference'),
    ...require('./rules/basic_types'),
    ...require('./rules/operators'),
    ...require('./rules/expressions'),
  },
});
