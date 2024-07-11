 const {LoginPage}  = require('./Loginpage')
 const {Dashboard}  = require('./Dashboard')

class POManager {

    constructor(page){
        this.page = page;
         this.loginPage = new LoginPage(this.page);
         this.dashBoard = new Dashboard(this.page);
    }

    getLoginPage(){
        return this.loginPage;

    }

    getDashboard(){
        return this.dashBoard;
    }
}
module.exports = {POManager};