import { test, expect } from '@playwright/test';

// Negative Functional Tests - from Assignment_1.xlsx
test.describe('Negative Functional Tests - Edge Cases and Failures', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('Neg_Fun_0001: Incorrect conversion of misspelled word', async ({ page }) => {
    const inputField = page.locator('textarea[placeholder*="Singlish"], input[placeholder*="Singlish"], #input, [class*="input"]').first();
    const outputField = page.locator('div[class*="output"], #output, textarea[readonly], [class*="result"]').first();

    await inputField.fill('matabusekeeyannabaee');
    await page.waitForTimeout(500);

    const output = await outputField.textContent();
    console.log(`Input: matabusekeeyannabaee... | Output: ${output || 'No output'}`);
  });

  test('Neg_Fun_0002: Incorrect handling of ambiguous input', async ({ page }) => {
    const inputField = page.locator('textarea[placeholder*="Singlish"], input[placeholder*="Singlish"], #input, [class*="input"]').first();
    const outputField = page.locator('div[class*="output"], #output, textarea[readonly], [class*="result"]').first();

    await inputField.fill('oyaa purudhu venna ooni real world problems ekka ganudhenu karanna');
    await page.waitForTimeout(500);

    const output = await outputField.textContent();
    console.log(`Input: oyaa purudhu venna ooni real world problems ekka ganudhenu k... | Output: ${output || 'No output'}`);
  });

  test('Neg_Fun_0003: Incorrect word segmentation', async ({ page }) => {
    const inputField = page.locator('textarea[placeholder*="Singlish"], input[placeholder*="Singlish"], #input, [class*="input"]').first();
    const outputField = page.locator('div[class*="output"], #output, textarea[readonly], [class*="result"]').first();

    await inputField.fill('dhivayinata balapaa aethi ayahapath kaalaguNika thathvaya heethuven nuvaraeliya pradheeshayata 100 mm ikmavuu thadha vaesi balaaporoththu vea');
    await page.waitForTimeout(500);

    const output = await outputField.textContent();
    console.log(`Input: dhivayinata balapaa aethi ayahapath kaalaguNika thathvaya he... | Output: ${output || 'No output'}`);
  });

  test('Neg_Fun_0004: Incorrect tense conversion', async ({ page }) => {
    const inputField = page.locator('textarea[placeholder*="Singlish"], input[placeholder*="Singlish"], #input, [class*="input"]').first();
    const outputField = page.locator('div[class*="output"], #output, textarea[readonly], [class*="result"]').first();

    await inputField.fill('man heta udheema pansal yanavaa. puluvannam oyath enna');
    await page.waitForTimeout(500);

    const output = await outputField.textContent();
    console.log(`Input: man heta udheema pansal yanavaa. puluvannam oyath enna... | Output: ${output || 'No output'}`);
  });

  test('Neg_Fun_0005: Incorrect negation handling', async ({ page }) => {
    const inputField = page.locator('textarea[placeholder*="Singlish"], input[placeholder*="Singlish"], #input, [class*="input"]').first();
    const outputField = page.locator('div[class*="output"], #output, textarea[readonly], [class*="result"]').first();

    await inputField.fill('mee QRCode eka scan karalaa attendance mark karanna');
    await page.waitForTimeout(500);

    const output = await outputField.textContent();
    console.log(`Input: mee QRCode eka scan karalaa attendance mark karanna... | Output: ${output || 'No output'}`);
  });

  test('Neg_Fun_0006: Incorrect pronoun handling', async ({ page }) => {
    const inputField = page.locator('textarea[placeholder*="Singlish"], input[placeholder*="Singlish"], #input, [class*="input"]').first();
    const outputField = page.locator('div[class*="output"], #output, textarea[readonly], [class*="result"]').first();

    await inputField.fill('oyaage issue eka gaena kiyala mata mailekak dhaanna');
    await page.waitForTimeout(500);

    const output = await outputField.textContent();
    console.log(`Input: oyaage issue eka gaena kiyala mata mailekak dhaanna... | Output: ${output || 'No output'}`);
  });

  test('Neg_Fun_0007: Incorrect handling of mixed language', async ({ page }) => {
    const inputField = page.locator('textarea[placeholder*="Singlish"], input[placeholder*="Singlish"], #input, [class*="input"]').first();
    const outputField = page.locator('div[class*="output"], #output, textarea[readonly], [class*="result"]').first();

    await inputField.fill('oyaa ara applicationeka download karagaththadha?');
    await page.waitForTimeout(500);

    const output = await outputField.textContent();
    console.log(`Input: oyaa ara applicationeka download karagaththadha?... | Output: ${output || 'No output'}`);
  });

  test('Neg_Fun_0008: Incorrect punctuation preservation', async ({ page }) => {
    const inputField = page.locator('textarea[placeholder*="Singlish"], input[placeholder*="Singlish"], #input, [class*="input"]').first();
    const outputField = page.locator('div[class*="output"], #output, textarea[readonly], [class*="result"]').first();

    await inputField.fill('Machan api kohedha yanne? Mama ayiyaa ekka giya lassana thaenak thiyenavaa. Oyaata kaemathi nam api ekka yanna puluvan. mage ammaa kivva apee gedhara enna kiyala. Ehenam thava minute dhekakin enna, mama mobile eka charge karanna yanavaa. Oya restaurant ekee bath packets godak rasayi, needha?');
    await page.waitForTimeout(500);

    const output = await outputField.textContent();
    console.log(`Input: Machan api kohedha yanne? Mama ayiyaa ekka giya lassana thae... | Output: ${output || 'No output'}`);
  });

  test('Neg_Fun_0009: Incorrect handling of line breaks', async ({ page }) => {
    const inputField = page.locator('textarea[placeholder*="Singlish"], input[placeholder*="Singlish"], #input, [class*="input"]').first();
    const outputField = page.locator('div[class*="output"], #output, textarea[readonly], [class*="result"]').first();

    await inputField.fill('Ape class eka hari boring ekak nedha ayiye? Ape miss kiyapu dheeval monavadha kiyalaa thearunee naee. Oyaage phone eka bag ekee thiyenavaa. Ape gedharata yanna kalin mama kadee gihilla ape ammata kiri packet ekak ganna ooni. thava minute pahak inna puluvandha machan?');
    await page.waitForTimeout(500);

    const output = await outputField.textContent();
    console.log(`Input: Ape class eka hari boring ekak nedha ayiye? Ape miss kiyapu ... | Output: ${output || 'No output'}`);
  });

  test('Neg_Fun_0010: Incorrect slang interpretation', async ({ page }) => {
    const inputField = page.locator('textarea[placeholder*="Singlish"], input[placeholder*="Singlish"], #input, [class*="input"]').first();
    const outputField = page.locator('div[class*="output"], #output, textarea[readonly], [class*="result"]').first();

    await inputField.fill('singlish valin type kalaata eyaata theerenne naee');
    await page.waitForTimeout(500);

    const output = await outputField.textContent();
    console.log(`Input: singlish valin type kalaata eyaata theerenne naee... | Output: ${output || 'No output'}`);
  });
});
