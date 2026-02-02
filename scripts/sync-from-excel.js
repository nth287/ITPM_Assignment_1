const fs = require('fs');
const path = require('path');

const jsonPath = path.join(__dirname, '..', 'excel-test-cases.json');
const cases = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

function esc(s) {
  if (s == null) return "''";
  return "'" + String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n').replace(/\r/g, '') + "'";
}

// test-cases-data.ts - array of arrays format
const posCases = cases.filter(c => c.id.startsWith('Pos_Fun_'));
const negCases = cases.filter(c => c.id.startsWith('Neg_Fun_'));
const uiCases = cases.filter(c => c.id.startsWith('Pos_UI_'));

const dataLines = [
  "// Test case data from Assignment_1.xlsx",
  "const testCasesData = [",
  "  // Positive Functional Tests (" + posCases.length + " cases)",
  ...posCases.map(c => `  [${esc(c.id)}, ${esc(c.name)}, ${esc(c.inputLength)}, ${esc(c.input)}, ${esc(c.expectedOutput)}, ${esc(c.actualOutput)}, ${esc(c.status)}, ${esc(c.justification)}, ${esc(c.coverage)}],`),
  "",
  "  // Negative Functional Tests (" + negCases.length + " cases)",
  ...negCases.map(c => `  [${esc(c.id)}, ${esc(c.name)}, ${esc(c.inputLength)}, ${esc(c.input)}, ${esc(c.expectedOutput)}, ${esc(c.actualOutput)}, ${esc(c.status)}, ${esc(c.justification)}, ${esc(c.coverage)}],`),
  "",
  "  // UI Tests (" + uiCases.length + " cases)",
  ...uiCases.map((c, i) => `  [${esc(c.id)}, ${esc(c.name)}, ${esc(c.inputLength)}, ${esc(c.input)}, ${esc(c.expectedOutput)}, ${esc(c.actualOutput)}, ${esc(c.status)}, ${esc(c.justification)}, ${esc(c.coverage)}]${i < uiCases.length - 1 ? ',' : ''}`),
  "];",
  "",
  "export default testCasesData;"
];

fs.writeFileSync(
  path.join(__dirname, '..', 'tests', 'test-cases-data.ts'),
  dataLines.join('\n')
);
console.log('Wrote tests/test-cases-data.ts');

// positive-functional.spec.ts
const posSpec = `import { test, expect } from '@playwright/test';

// Positive Functional Tests - from Assignment_1.xlsx
test.describe('Positive Functional Tests - Singlish to Sinhala', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

${posCases.map(c => `  test('${c.id}: ${c.name.replace(/'/g, "\\'")}', async ({ page }) => {
    const inputField = page.locator('textarea[placeholder*="Singlish"], input[placeholder*="Singlish"], #input, [class*="input"]').first();
    const outputField = page.locator('div[class*="output"], #output, textarea[readonly], [class*="result"]').first();

    await inputField.fill(${esc(c.input)});
    await page.waitForTimeout(500);

    const output = await outputField.textContent();
    expect(output).toBeTruthy();
    console.log(\`Input: ${c.input.replace(/`/g, '\\`')} | Output: \${output}\`);
  });`).join('\n\n')}
});
`;

fs.writeFileSync(
  path.join(__dirname, '..', 'tests', 'positive-functional.spec.ts'),
  posSpec
);
console.log('Wrote tests/positive-functional.spec.ts');

// negative-functional.spec.ts
const negSpec = `import { test, expect } from '@playwright/test';

// Negative Functional Tests - from Assignment_1.xlsx
test.describe('Negative Functional Tests - Edge Cases and Failures', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

${negCases.map(c => `  test('${c.id}: ${c.name.replace(/'/g, "\\'")}', async ({ page }) => {
    const inputField = page.locator('textarea[placeholder*="Singlish"], input[placeholder*="Singlish"], #input, [class*="input"]').first();
    const outputField = page.locator('div[class*="output"], #output, textarea[readonly], [class*="result"]').first();

    await inputField.fill(${esc(c.input)});
    await page.waitForTimeout(500);

    const output = await outputField.textContent();
    console.log(\`Input: ${c.input.replace(/`/g, '\\`').substring(0, 60)}... | Output: \${output || 'No output'}\`);
  });`).join('\n\n')}
});
`;

fs.writeFileSync(
  path.join(__dirname, '..', 'tests', 'negative-functional.spec.ts'),
  negSpec
);
console.log('Wrote tests/negative-functional.spec.ts');

// ui-tests.spec.ts - only Pos_UI_0001 from Excel
const uiSpec = `import { test, expect } from '@playwright/test';

// UI Tests - from Assignment_1.xlsx
test.describe('UI Tests - User Interface Functionality', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('Pos_UI_0001: Real-time output updates while typing', async ({ page }) => {
    const inputField = page.locator('textarea[placeholder*="Singlish"], input[placeholder*="Singlish"], #input, [class*="input"]').first();
    const outputField = page.locator('div[class*="output"], #output, textarea[readonly], [class*="result"]').first();

    await inputField.fill('1,2,3 & 4');
    await page.waitForTimeout(500);

    const output = await outputField.textContent();
    expect(output).toBeTruthy();
    console.log(\`Input: 1,2,3 & 4 | Output: \${output}\`);
  });
});
`;

fs.writeFileSync(
  path.join(__dirname, '..', 'tests', 'ui-tests.spec.ts'),
  uiSpec
);
console.log('Wrote tests/ui-tests.spec.ts');
console.log('Done. Positive:', posCases.length, 'Negative:', negCases.length, 'UI:', uiCases.length);
