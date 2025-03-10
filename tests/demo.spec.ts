import {test, expect} from '@playwright/test';

test.skip('basic test', async ({page})=>{
    page.goto('https://www.example.com');
    const pageTittle = await page.locator('h1');
    await expect(pageTittle).toContainText('Example Domain');
})