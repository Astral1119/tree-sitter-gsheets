import XCTest
import SwiftTreeSitter
import TreeSitterGsheets

final class TreeSitterGsheetsTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_gsheets())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading Google Sheets grammar")
    }
}
