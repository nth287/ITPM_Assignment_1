# Singlish to Sinhala Translator Testing Project (IT3040 ITPM Assignment 1)

This is a comprehensive Playwright test automation project for testing the Swift Translator (https://www.swifttranslator.com/), which converts Singlish text input into Sinhala output.

## Project Overview

- **Application Under Test**: https://www.swifttranslator.com/
- **Test Framework**: Playwright with TypeScript
- **Total Test Cases**: 35 (24 Positive Functional + 10 Negative Functional + 1 UI Test)
- **Coverage**: Sentence structures, daily language, grammar, word combinations, input variations, punctuation, mixed language, and UI functionality

## Installation

Install dependencies:

```bash
npm install
```

## Running Tests

### Run all tests:
```bash
npm test
```

### Run tests in headed mode (see browser):
```bash
npm run test:headed
```

### Debug tests:
```bash
npm run test:debug
```

### Run tests in UI mode:
```bash
npm run test:ui
```

## Project Structure

```
├── tests/
│   ├── positive-functional.spec.ts    # 24 Positive functional test cases
│   ├── negative-functional.spec.ts    # 10 Negative functional test cases  
│   └── ui-tests.spec.ts               # UI functionality tests
├── playwright.config.ts               # Playwright configuration
├── package.json                       # Project dependencies
├── .vscode/
│   └── tasks.json                     # VS Code tasks
├── IT23281646_Test_Cases.xlsx         # Test case template with expected outputs
└── README.md                          # This file
```

## Test Coverage

### Positive Functional Tests (24 cases)
- ✓ Simple, compound, and complex sentences
- ✓ Interrogative (questions) and imperative (commands) forms
- ✓ Positive and negative sentence forms
- ✓ Daily language usage and common greetings
- ✓ Polite vs informal phrasing
- ✓ Multi-word expressions and phrase patterns
- ✓ Mixed Singlish + English with place names and technical terms
- ✓ Tense variations (past, present, future)
- ✓ Grammatical forms (singular/plural, pronouns)
- ✓ Punctuation handling and preservation

### Negative Functional Tests (10 cases)
- ✗ Joined words without spaces (robustness)
- ✗ Multiple consecutive spaces
- ✗ Invalid character combinations
- ✗ Empty input
- ✗ Very long inputs (>300 characters)
- ✗ Line breaks and multi-line input
- ✗ Numeric-only input
- ✗ Special characters only
- ✗ Mostly English text
- ✗ Repeated invalid characters

### UI Tests (1 case)
- ✓ Real-time output updates while typing
- ✓ Input clearing functionality

## Test Case Template

The file `IT23281646_Test_Cases.xlsx` contains:
- TC ID (Test Case ID)
- Test case name
- Input length type (S ≤30 chars, M 31-299 chars, L ≥300 chars)
- Input text
- Expected output
- Actual output (to be filled after execution)
- Status (PASS/FAIL)
- Accuracy justification
- What is covered by the test

## Key Test Scenarios by Category

### Input Types & Domains
- Daily language usage
- Greeting / request / response
- Word combination / phrase pattern
- Mixed Singlish + English
- Slang / informal language
- Names / places / common English words
- Punctuation / numbers
- Formatting (spaces / line breaks)

### Sentence & Grammar Focus
- Simple, compound, complex sentences
- Interrogative (questions)
- Imperative (commands)
- Present / past / future tense
- Negation (negative forms)
- Pronoun variations
- Plural forms

### Input Length Types
- S (Short): ≤ 30 characters
- M (Medium): 31-299 characters
- L (Long): ≥ 300 characters

### Quality Focus
- Accuracy validation (clean input)
- Robustness validation (messy/unusual input)
- Formatting preservation
- Real-time output update behavior
- Error handling / input validation

## Test Execution

Run tests and view results:

```bash
# Run all tests with HTML report
npm test

# View HTML report (after running tests)
npx playwright show-report
```

Test results will be generated in `playwright-report/` directory with detailed execution logs and screenshots.

## Configuration Details

The `playwright.config.ts` file includes:
- Base URL: https://www.swifttranslator.com
- Browser: Chromium
- HTML reporter enabled
- Screenshots on failure
- Trace collection on first retry
- 30-second timeout per test

## Notes for Testers

1. **Singlish Conversion**: Tests verify correct Singlish phonetic input → Sinhala script output conversion
2. **Mixed Language Handling**: English terms (Zoom, WhatsApp, etc.) should remain unchanged in output
3. **Place Names**: Names like Colombo, Kandy should be preserved or correctly converted
4. **Punctuation Preservation**: Question marks, exclamation marks should be preserved
5. **Real-time Conversion**: Output should update as user types without pressing a submit button

## Test Execution Log

All test cases follow the standardized template format specified in Assignment 1 requirements with proper TC IDs:
- Positive Functional: Pos_Fun_0001 → Pos_Fun_0024
- Negative Functional: Neg_Fun_0001 → Neg_Fun_0010  
- UI Tests: Pos_UI_0001, Pos_UI_0002

## References

- [Playwright Documentation](https://playwright.dev)
- [TypeScript](https://www.typescriptlang.org)
- Swift Translator: https://www.swifttranslator.com
