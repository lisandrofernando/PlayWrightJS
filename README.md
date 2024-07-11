# To run the tests execute the script: npx playwright test
# To record and playback in playwright run: npx playwright codegen http://google.com
# In the playwright.config.js we can configure the time to run our tests, reporter, browser, screenshot, trace.
# When writing our tests in playwright besides downloading the playwright package, in the test file we need to wright a constant that requires playwright, for example: const {test, expect} = require('@playwright/test').
# The test block will be a function that accepts two arguments the Title of the test, and a fixture or component of playwright called page example: test('Home Page', async ({page})=>{
   #  await
# })
# Async key word return a promise in JS, which could be pending, rejected, or fulfilled promise. The await key word is used to wait for the promise
# The syntax in playwright is page.locator().click to click, textContent() to get inner text, isVisible, isChecked, witFor(), fill(), pressSequentially() to enter a letter one by one.

# PlayWrightJS
# Variables in JS are loosely tight, which means they can hold any type of variables
# The ES6 engine forward uses the let and const key words to define the variables.
# The method typeof() in JS will tell what type of data type the varible is
# Types of data types in JS: Number, String, Boolean, Undefined, null
# We can not redeclare a variable with let key word, but it is possible with var, reassigning is allowed by let key word