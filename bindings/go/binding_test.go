package tree_sitter_gsheets_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_gsheets "github.com/tree-sitter/tree-sitter-gsheets/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_gsheets.Language())
	if language == nil {
		t.Errorf("Error loading Google Sheets grammar")
	}
}
