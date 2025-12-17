const { test } = require('@playwright/test');
const { expect } = require('@playwright/test');

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
});
  
test("Login Test Case", async ({page}) => {
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  console.log(await page.title());
  await page.locator('input#username').fill("rahulshettyacademy");
  await page.locator('[name="password"]').fill("learning123");
  await page.locator('#signInBtn').click();
  //In Selenium we use Explicit wait and Implicit Wait, and not in Playwright
  // const ErrorMess = await page.locator("[style*='block']").textContent();
  // await console.log(ErrorMess);
  //Contains means partial match
  await expect(await page.locator("[style*='block']")).toContainText("Incorrect");
});

test("Dashboard Test Case", async ({page}) => {
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  console.log(await page.title());
  await page.locator('input#username').fill("rahulshettyacademy");
  await page.locator('[name="password"]').fill("learning");
  await page.locator('#signInBtn').click();
  // await expect(await page.locator("[style*='block']")).toContainText("Incorrect");
  console.log(await page.locator(".card-body a").nth(0).textContent());
  const allTitles = await page.locator(".card-body a").allTextContents();
  await console.log(allTitles);
});

test.only("First Assignment", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  await page.locator("#userEmail").fill("tester123@tester.com");
  await page.locator("#userPassword").fill("Test@123");
  await page.locator("#login").click();
  // console.log(await page.locator(".card-body b").nth(0).textContent());
  await page.waitForLoadState("networkidle");
  await page.locator(".card-body b").waitFor().first();
  const listItems = await page.locator(".card-body b").allTextContents();
  console.log(listItems);
});