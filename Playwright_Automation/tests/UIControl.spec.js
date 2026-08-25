const { test } = require('@playwright/test');
const { expect } = require('@playwright/test');

test("UIControls First Test", async ({ page })=> {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await page.locator('input#username').fill("rahulshettyacademy");
    await page.locator('[name="password"]').fill("learning123");
    // await page.locator('#signInBtn').click();
    //Radio Button
    await page.locator(".customradio").last().click();
    await page.locator("#okayBtn").click();
    console.log(expect(await page.locator(".customradio").last()).toBeChecked());
    expect(await page.locator(".customradio").last()).toBeChecked(); //isCheck()-returns boolean
    //select dropdown
    const dropdown = await page.locator("select.form-control");
    await dropdown.selectOption("consult");
    await page.waitForTimeout(3000);
    //Checkbox select and check
    await page.locator("#terms").uncheck();
    expect(await page.locator("#terms").isChecked()).toBeFalsy();
});