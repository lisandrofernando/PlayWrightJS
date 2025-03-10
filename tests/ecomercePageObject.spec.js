const { test, expect } = require('@playwright/test');
const { POManager } = require('../Page_Object/POManager');
const dataset = JSON.parse(JSON.stringify(require("../utils/testData.json")));

test('Ecomerce E2E', async ({ page }) => {
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    const dashBoard = poManager.getDashboard();

    await loginPage.goTo();
    await loginPage.validLogin(dataset.username, dataset.password);
    await dashBoard.searchProduct(dataset.productname);
    await dashBoard.navigateToCart();

    await page.locator("div li").first().waitFor();
    const bool = await page.locator("h3:has-text('zara coat 3')").isVisible();
    expect(bool).toBeTruthy();
    await page.locator("text=Checkout").click();
});


