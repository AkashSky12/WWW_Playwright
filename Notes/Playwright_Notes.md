# Deep-Dive Playwright
- "npm init playwright": This creates a project in the playwright structure, it'll create a skeleton and install all dependencies required for playwright automation
- playwright.config.js: basically works like a test runner for the entire project test cases
- package.json: information about the project dependencies
- node_modules: are similar to jar's in java project
-

# Playwright First Program
- To write a playwright program first we need to import the annotations from node_modules(const {test} = require'@playwright/test')
- Test files in JS is basically named in the format spec
- Once the 'test' is imported. Start like test('TestCase Name',function())
- JavaScript is asynchronous
- Await: makes it synchronous and execute line one by one, whenever the await is used in a function that function should be a async function()
- Function without name is called anonymous function and they can be represented by "async ()=>"
- To use the browser functionality of the playwright, we need to use the object {browser}, if flower bracket is not added, it would consider as parameter
- browser.newContext() will create a new browser instance(like incognito)
- To create a new page on the above instance context.newPage();
-  page.goto(): used to navigate to the page
- We cannot run the Playwright tests directly by right click and run. We need to run it only through the playwright.conf.js file
- Default timeout for each tests is 30 seconds, this is applicable for all steps in the tests
- There is also a assertion level timeouts'Expect timeouts'
Ex: except({
    timeout: 10000(milliseconds)
})
- By default Playwrights runs the tests in the headless mode

# Understanding the default Playwright configuration file
- export default defineConfig({}): This is where the default config of the suite goes
- testDir: this is used to select/add the required tests to run during execution it might be complete directory of tests or individual tests
- We can also define the timeout by adding timeout: 60*1000, it is in milliseconds
- Inside 'use:', we can pass the browser name

# To execute the Playwright tests
- To run the playwright tests use command: npx playwright test
- If you don't wanna use npx then, manually use ../node/@playwright/ test_name
- By default the test will run headless, to see the browser use the command. 'npx playwright test --headed'
- To run a single test in the Playwright file use 'only'. Ex: test.only('',()=>{})

# Continue Playwright
- To verify the title of the landing page is correct. First get the tile and assert if it correctly displayed
- 
