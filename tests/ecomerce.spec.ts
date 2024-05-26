const {test, expect } = require('@playwright/test');

test('Ecomerce E2E', async ({page}) => {

    const email = "lisandrofernando@demo.com";
    const password = "Lisandro100@";
    const productname = 'zara coat 3';
    const products = page.locator(".card-body");
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill(email);
    await page.locator("#userPassword").type(password);
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);
    const count = await products.count();
    for(let i=0; i<count; i++){
        if( await products.nth(i).locator("b").allTextContents() === productname){
            await products.nth(i).locator("text = Add To Cart").click();
            break;
        }
    }
    await page.locator("#products > div.container > div.row > div:nth-child(1) > div > div > button.btn.w-10.rounded").click();
    
    await page.locator("div li").first().waitFor();
    const bool = await page.locator("h3:has-text('zara coat 3')").isVisible();
    //expect(bool).toBeTruthy();
    //await page.locator("text=Checkout").click();
})


