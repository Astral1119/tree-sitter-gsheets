;; Literals
(number) @number
(string) @string
(boolean) @boolean

;; Identifiers and references
(identifier) @variable
(cell_reference) @variable.builtin

;; Error
(error_literal) @error

;; Expressions
(expression) @expression
(operator_expression) @operator
(unary_operator) @operator
(binary_operator) @operator

;; Functions
(function_call
  (identifier) @function)

;; Parentheses
(open_paren) @punctuation.bracket
(close_paren) @punctuation.bracket

;; Arrays
(array_literal) @constant

;; Row/column constructs
(cell_reference) @field
