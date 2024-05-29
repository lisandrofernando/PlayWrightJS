class Dashboard{

    constructor(page){
        this.products = page.locator(".card-body");
         this.productsText = page.locator(".card-body b").allTextContents();
         this.cart =  page.locator("#products > div.container > div.row > div:nth-child(1) > div > div > button.btn.w-10.rounded");
    
    }

    async searchProduct(productName){
        const titles = await this.productsText.allTextContents();
        console.log(titles);
        const count = await this.products.count();
        for(let i=0; i<count; i++){
        if( await this.products.nth(i).locator("b").allTextContents() === productName){
            await this.products.nth(i).locator("text = Add To Cart").click();
            break;
        }
     }

    }
    async navigateToCart() {
        await this.cart.click();
    }
}


module.exports = {Dashboard}