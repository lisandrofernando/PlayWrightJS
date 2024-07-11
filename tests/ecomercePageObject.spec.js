const {test, expect } = require('@playwright/test');
const {POManager} =  require('../Page_Object/POManager');
const dataset = JSON.parse(JSON.stringify(require("../utils/testData.json")));
 

test.only('Ecomerce E2E', async ({page}) => {
    const poManager = new POManager(page);
    // //const userName = "lisandrofernando@demo.com";
    // const password = "Lisandro100@";
    // const productName = 'zara coat 3';
    poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(dataset.username, dataset.password);
    poManager.getDashboard();
    dashBoard.searchProduct(dataset.productname)
    dashBoard.navigateToCart();
    
    
    await page.locator("div li").first().waitFor();
    const bool = await page.locator("h3:has-text('zara coat 3')").isVisible();
    //expect(bool).toBeTruthy();
    //await page.locator("text=Checkout").click();
})


