const {test, expect } = require('@playwright/test');
 const {LoginPage} =  require('../Page_Object/LoginPage');
 const {Dashboard} =  require('../Page_Object/Dashboard');

test.only('Ecomerce E2E', async ({page}) => {

    const email = "lisandrofernando@demo.com";
    const password = "Lisandro100@";
    const productName = 'zara coat 3';
    const loginPage = new LoginPage(page);
    loginPage.goTo();
    loginPage.validLogin(email, password);
    const dashBoard = new Dashboard(page);
    dashBoard.searchProduct(productName)
    dashBoard.navigateToCart();
    
    
    await page.locator("div li").first().waitFor();
    const bool = await page.locator("h3:has-text('zara coat 3')").isVisible();
    //expect(bool).toBeTruthy();
    //await page.locator("text=Checkout").click();
})


