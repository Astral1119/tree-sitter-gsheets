# tree-sitter-gsheets
A tree-sitter grammar for Google Sheets formulae.

## Installation
### nvim-treesitter
If you are using `nvim-treesitter`, do the following:
1. Add `gsheets` to your `ensure_installed` list.
2. Add the following to your `config` function:

```lua
config = function(_, opts)
    vim.filetype.add({
      extension = {
        gse = "gsheets",
        gsf = "gsheets",
        gsheets = "gsheets",
      },
    })

    local parser_config = require("nvim-treesitter.parsers").get_parser_configs()

    parser_config.gsheets = {
      install_info = {
        url = "https://github.com/Astral1119/tree-sitter-gsheets",
        files = { "src/parser.c" },
        branch = "main",
      },
      filetype = "gsheets",
    }
    require('nvim-treesitter.configs').setup(opts)
end
```
3. Add `queries/highlights.scm` to `nvim/queries/gsheets/highlights.scm`.


