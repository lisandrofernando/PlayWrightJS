class loginPage {

    constructor(page){
        this.page = page;
        this.userName = page.locator("#userEmail").fill(email);
        this.password = page.locator("#userPassword").type(password);
        this.signInButton = page.locator("[value='Login']").click();

    }

    async validLogin(userName, password){
        await this.userName.fill(userName);
        await this.password.type(password);
        await this.signInButton.click();
        await this.page.waitForLoadState('networkidle');
    }
    async goTo(){
         await this.page.goTo("https://rahulshettyacademy.com/client");
    }
}

module.exports = {loginPage};