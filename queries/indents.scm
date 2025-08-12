; Indentation rules for Google Sheets formulas (gsheets)
; Indent based on parentheses, curly braces, and commas.

; Indent for parenthesized expressions
(parenthesized_expression
  "(" @indent.begin
  ")" @indent.end)

; Indent for function call argument lists
(arguments
  "(" @indent.begin
  ")" @indent.end)
(arguments "," @indent.branch)

; Indent for immediate-arguments (after dotted identifiers)
(arguments_immediate
  "(" @indent.begin
  ")" @indent.end)
(arguments_immediate "," @indent.branch)

; Arrays: indent inside braces, branch on comma and semicolon
(array_literal
  "{" @indent.begin
  "}" @indent.end)
(array_literal "," @indent.branch)
(array_literal ";" @indent.branch)
