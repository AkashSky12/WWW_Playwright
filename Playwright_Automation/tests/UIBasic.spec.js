const { test } = require('@playwright/test');
const { expect } = require('@playwright/test');

test.describe('UI Basic Test Suite', () => {
  test('Sample UI Test', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://chatgpt.com/');
    console.log('Page title:', await page.title());
  });
    
    test("First Test", async ({ page }) => {
        //Assert the title of the page
        await page.goto("https://google.com");
        console.log(await page.title());
        await expect(page).toHaveTitle("Google");
    })
});