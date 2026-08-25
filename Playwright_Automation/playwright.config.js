// @ts-check
const { devices } = require('@playwright/test');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  timeout: 60000,
  expect: {
    timeout: 70000
  },
  reporter: 'html',
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    //Chrome Browser declaration
    browserName: 'chromium',
    headless: false,
  },
});
//Export the variable defined for configurations, so that we can use the same across
//the complete project
module.exports = config
