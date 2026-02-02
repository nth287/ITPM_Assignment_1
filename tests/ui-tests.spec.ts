import { test, expect } from '@playwright/test';

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
    console.log(`Input: 1,2,3 & 4 | Output: ${output}`);
  });
});
