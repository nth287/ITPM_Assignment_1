import { test, expect } from '@playwright/test';

// Positive Functional Tests - from Assignment_1.xlsx
test.describe('Positive Functional Tests - Singlish to Sinhala', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('Pos_Fun_0001: Convert a simple past activity', async ({ page }) => {
    const inputField = page.locator('textarea[placeholder*="Singlish"], input[placeholder*="Singlish"], #input, [class*="input"]').first();
    const outputField = page.locator('div[class*="output"], #output, textarea[readonly], [class*="result"]').first();

    await inputField.fill('mama pansal giyaa');
    await page.waitForTimeout(500);

    const output = await outputField.textContent();
    expect(output).toBeTruthy();
    console.log(`Input: mama pansal giyaa | Output: ${output}`);
  });

  test('Pos_Fun_0002: Convert compound sentence with two activities', async ({ page }) => {
    const inputField = page.locator('textarea[placeholder*="Singlish"], input[placeholder*="Singlish"], #input, [class*="input"]').first();
    const outputField = page.locator('div[class*="output"], #output, textarea[readonly], [class*="result"]').first();

    await inputField.fill('api sellam karalaa, kaema kanavaa');
    await page.waitForTimeout(500);

    const output = await outputField.textContent();
    expect(output).toBeTruthy();
    console.log(`Input: api sellam karalaa, kaema kanavaa | Output: ${output}`);
  });

  test('Pos_Fun_0003: Convert conditional sentence', async ({ page }) => {
    const inputField = page.locator('textarea[placeholder*="Singlish"], input[placeholder*="Singlish"], #input, [class*="input"]').first();
    const outputField = page.locator('div[class*="output"], #output, textarea[readonly], [class*="result"]').first();

    await inputField.fill('oyaa aavoth mamath enavaa');
    await page.waitForTimeout(500);

    const output = await outputField.textContent();
    expect(output).toBeTruthy();
    console.log(`Input: oyaa aavoth mamath enavaa | Output: ${output}`);
  });

  test('Pos_Fun_0004: Convert interrogative question', async ({ page }) => {
    const inputField = page.locator('textarea[placeholder*="Singlish"], input[placeholder*="Singlish"], #input, [class*="input"]').first();
    const outputField = page.locator('div[class*="output"], #output, textarea[readonly], [class*="result"]').first();

    await inputField.fill('oyaa vathura bivvadha?');
    await page.waitForTimeout(500);

    const output = await outputField.textContent();
    expect(output).toBeTruthy();
    console.log(`Input: oyaa vathura bivvadha? | Output: ${output}`);
  });

  test('Pos_Fun_0005: Convert imperative command', async ({ page }) => {
    const inputField = page.locator('textarea[placeholder*="Singlish"], input[placeholder*="Singlish"], #input, [class*="input"]').first();
    const outputField = page.locator('div[class*="output"], #output, textarea[readonly], [class*="result"]').first();

    await inputField.fill('methanin vaadivenna');
    await page.waitForTimeout(500);

    const output = await outputField.textContent();
    expect(output).toBeTruthy();
    console.log(`Input: methanin vaadivenna | Output: ${output}`);
  });

  test('Pos_Fun_0006: Convert negative sentence', async ({ page }) => {
    const inputField = page.locator('textarea[placeholder*="Singlish"], input[placeholder*="Singlish"], #input, [class*="input"]').first();
    const outputField = page.locator('div[class*="output"], #output, textarea[readonly], [class*="result"]').first();

    await inputField.fill('mama heta paasal yanavaa');
    await page.waitForTimeout(500);

    const output = await outputField.textContent();
    expect(output).toBeTruthy();
    console.log(`Input: mama heta paasal yanavaa | Output: ${output}`);
  });

  test('Pos_Fun_0007: Convert common greeting', async ({ page }) => {
    const inputField = page.locator('textarea[placeholder*="Singlish"], input[placeholder*="Singlish"], #input, [class*="input"]').first();
    const outputField = page.locator('div[class*="output"], #output, textarea[readonly], [class*="result"]').first();

    await inputField.fill('apita heta dhavalta chithrapatiya balanna venne naee');
    await page.waitForTimeout(500);

    const output = await outputField.textContent();
    expect(output).toBeTruthy();
    console.log(`Input: apita heta dhavalta chithrapatiya balanna venne naee | Output: ${output}`);
  });

  test('Pos_Fun_0008: Convert polite request', async ({ page }) => {
    const inputField = page.locator('textarea[placeholder*="Singlish"], input[placeholder*="Singlish"], #input, [class*="input"]').first();
    const outputField = page.locator('div[class*="output"], #output, textarea[readonly], [class*="result"]').first();

    await inputField.fill('suBha dhahavalak!');
    await page.waitForTimeout(500);

    const output = await outputField.textContent();
    expect(output).toBeTruthy();
    console.log(`Input: suBha dhahavalak! | Output: ${output}`);
  });

  test('Pos_Fun_0009: Convert multi-word expression', async ({ page }) => {
    const inputField = page.locator('textarea[placeholder*="Singlish"], input[placeholder*="Singlish"], #input, [class*="input"]').first();
    const outputField = page.locator('div[class*="output"], #output, textarea[readonly], [class*="result"]').first();

    await inputField.fill('oyaata mee paarsalaya apee gedharata gihin dhenna puluvandha?');
    await page.waitForTimeout(500);

    const output = await outputField.textContent();
    expect(output).toBeTruthy();
    console.log(`Input: oyaata mee paarsalaya apee gedharata gihin dhenna puluvandha? | Output: ${output}`);
  });

  test('Pos_Fun_0010: Convert joined words without spaces', async ({ page }) => {
    const inputField = page.locator('textarea[placeholder*="Singlish"], input[placeholder*="Singlish"], #input, [class*="input"]').first();
    const outputField = page.locator('div[class*="output"], #output, textarea[readonly], [class*="result"]').first();

    await inputField.fill('mehe balapan');
    await page.waitForTimeout(500);

    const output = await outputField.textContent();
    expect(output).toBeTruthy();
    console.log(`Input: mehe balapan | Output: ${output}`);
  });

  test('Pos_Fun_0011: Convert repeated word for emphasis', async ({ page }) => {
    const inputField = page.locator('textarea[placeholder*="Singlish"], input[placeholder*="Singlish"], #input, [class*="input"]').first();
    const outputField = page.locator('div[class*="output"], #output, textarea[readonly], [class*="result"]').first();

    await inputField.fill('mama nidhaagena hitiye');
    await page.waitForTimeout(500);

    const output = await outputField.textContent();
    expect(output).toBeTruthy();
    console.log(`Input: mama nidhaagena hitiye | Output: ${output}`);
  });

  test('Pos_Fun_0012: Convert present tense sentence', async ({ page }) => {
    const inputField = page.locator('textarea[placeholder*="Singlish"], input[placeholder*="Singlish"], #input, [class*="input"]').first();
    const outputField = page.locator('div[class*="output"], #output, textarea[readonly], [class*="result"]').first();

    await inputField.fill('ikmanata enna');
    await page.waitForTimeout(500);

    const output = await outputField.textContent();
    expect(output).toBeTruthy();
    console.log(`Input: ikmanata enna | Output: ${output}`);
  });

  test('Pos_Fun_0013: Convert future tense sentence', async ({ page }) => {
    const inputField = page.locator('textarea[placeholder*="Singlish"], input[placeholder*="Singlish"], #input, [class*="input"]').first();
    const outputField = page.locator('div[class*="output"], #output, textarea[readonly], [class*="result"]').first();

    await inputField.fill('mata heta udhee vaedata yanna thiyenavaa');
    await page.waitForTimeout(500);

    const output = await outputField.textContent();
    expect(output).toBeTruthy();
    console.log(`Input: mata heta udhee vaedata yanna thiyenavaa | Output: ${output}`);
  });

  test('Pos_Fun_0014: Convert plural pronoun usage', async ({ page }) => {
    const inputField = page.locator('textarea[placeholder*="Singlish"], input[placeholder*="Singlish"], #input, [class*="input"]').first();
    const outputField = page.locator('div[class*="output"], #output, textarea[readonly], [class*="result"]').first();

    await inputField.fill('ov ov');
    await page.waitForTimeout(500);

    const output = await outputField.textContent();
    expect(output).toBeTruthy();
    console.log(`Input: ov ov | Output: ${output}`);
  });

  test('Pos_Fun_0015: Convert sentence with English brand name', async ({ page }) => {
    const inputField = page.locator('textarea[placeholder*="Singlish"], input[placeholder*="Singlish"], #input, [class*="input"]').first();
    const outputField = page.locator('div[class*="output"], #output, textarea[readonly], [class*="result"]').first();

    await inputField.fill('mama iiye gedhara gihin redhi tika heedhuvaa');
    await page.waitForTimeout(500);

    const output = await outputField.textContent();
    expect(output).toBeTruthy();
    console.log(`Input: mama iiye gedhara gihin redhi tika heedhuvaa | Output: ${output}`);
  });

  test('Pos_Fun_0016: Convert sentence with place name', async ({ page }) => {
    const inputField = page.locator('textarea[placeholder*="Singlish"], input[placeholder*="Singlish"], #input, [class*="input"]').first();
    const outputField = page.locator('div[class*="output"], #output, textarea[readonly], [class*="result"]').first();

    await inputField.fill('mama dhaen iskoole gedhara vaeda karanavaa');
    await page.waitForTimeout(500);

    const output = await outputField.textContent();
    expect(output).toBeTruthy();
    console.log(`Input: mama dhaen iskoole gedhara vaeda karanavaa | Output: ${output}`);
  });

  test('Pos_Fun_0017: Convert sentence with abbreviation', async ({ page }) => {
    const inputField = page.locator('textarea[placeholder*="Singlish"], input[placeholder*="Singlish"], #input, [class*="input"]').first();
    const outputField = page.locator('div[class*="output"], #output, textarea[readonly], [class*="result"]').first();

    await inputField.fill('mata mee juice eka bonna baee');
    await page.waitForTimeout(500);

    const output = await outputField.textContent();
    expect(output).toBeTruthy();
    console.log(`Input: mata mee juice eka bonna baee | Output: ${output}`);
  });

  test('Pos_Fun_0018: Convert sentence with punctuation', async ({ page }) => {
    const inputField = page.locator('textarea[placeholder*="Singlish"], input[placeholder*="Singlish"], #input, [class*="input"]').first();
    const outputField = page.locator('div[class*="output"], #output, textarea[readonly], [class*="result"]').first();

    await inputField.fill('eyaa party ekata giyaa');
    await page.waitForTimeout(500);

    const output = await outputField.textContent();
    expect(output).toBeTruthy();
    console.log(`Input: eyaa party ekata giyaa | Output: ${output}`);
  });

  test('Pos_Fun_0019: Convert sentence with currency', async ({ page }) => {
    const inputField = page.locator('textarea[placeholder*="Singlish"], input[placeholder*="Singlish"], #input, [class*="input"]').first();
    const outputField = page.locator('div[class*="output"], #output, textarea[readonly], [class*="result"]').first();

    await inputField.fill('api lecture ekata yamu');
    await page.waitForTimeout(500);

    const output = await outputField.textContent();
    expect(output).toBeTruthy();
    console.log(`Input: api lecture ekata yamu | Output: ${output}`);
  });

  test('Pos_Fun_0020: Convert sentence with date', async ({ page }) => {
    const inputField = page.locator('textarea[placeholder*="Singlish"], input[placeholder*="Singlish"], #input, [class*="input"]').first();
    const outputField = page.locator('div[class*="output"], #output, textarea[readonly], [class*="result"]').first();

    await inputField.fill('karuNaakaralaa mata eeka aaye kiyanna puluvandha?');
    await page.waitForTimeout(500);

    const output = await outputField.textContent();
    expect(output).toBeTruthy();
    console.log(`Input: karuNaakaralaa mata eeka aaye kiyanna puluvandha? | Output: ${output}`);
  });

  test('Pos_Fun_0021: Convert input with multiple spaces', async ({ page }) => {
    const inputField = page.locator('textarea[placeholder*="Singlish"], input[placeholder*="Singlish"], #input, [class*="input"]').first();
    const outputField = page.locator('div[class*="output"], #output, textarea[readonly], [class*="result"]').first();

    await inputField.fill('mee link eka open karalaa zoom meeting ekata Join venna');
    await page.waitForTimeout(500);

    const output = await outputField.textContent();
    expect(output).toBeTruthy();
    console.log(`Input: mee link eka open karalaa zoom meeting ekata Join venna | Output: ${output}`);
  });

  test('Pos_Fun_0022: Convert medium-length paragraph', async ({ page }) => {
    const inputField = page.locator('textarea[placeholder*="Singlish"], input[placeholder*="Singlish"], #input, [class*="input"]').first();
    const outputField = page.locator('div[class*="output"], #output, textarea[readonly], [class*="result"]').first();

    await inputField.fill('oyaa heta enakota ID saha NIC ekee photocopies anivaaryen aragena enna');
    await page.waitForTimeout(500);

    const output = await outputField.textContent();
    expect(output).toBeTruthy();
    console.log(`Input: oyaa heta enakota ID saha NIC ekee photocopies anivaaryen aragena enna | Output: ${output}`);
  });

  test('Pos_Fun_0023: Convert long paragraph input', async ({ page }) => {
    const inputField = page.locator('textarea[placeholder*="Singlish"], input[placeholder*="Singlish"], #input, [class*="input"]').first();
    const outputField = page.locator('div[class*="output"], #output, textarea[readonly], [class*="result"]').first();

    await inputField.fill('mata kadeeta gihin haal 1 kg k ganna ooni');
    await page.waitForTimeout(500);

    const output = await outputField.textContent();
    expect(output).toBeTruthy();
    console.log(`Input: mata kadeeta gihin haal 1 kg k ganna ooni | Output: ${output}`);
  });

  test('Pos_Fun_0024: Convert slang expression', async ({ page }) => {
    const inputField = page.locator('textarea[placeholder*="Singlish"], input[placeholder*="Singlish"], #input, [class*="input"]').first();
    const outputField = page.locator('div[class*="output"], #output, textarea[readonly], [class*="result"]').first();

    await inputField.fill('mama heta udhee 8.00 AM ta alarm ekak thibbaa');
    await page.waitForTimeout(500);

    const output = await outputField.textContent();
    expect(output).toBeTruthy();
    console.log(`Input: mama heta udhee 8.00 AM ta alarm ekak thibbaa | Output: ${output}`);
  });
});
