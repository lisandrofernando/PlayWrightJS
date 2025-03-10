const { Loginpage } = require('./Loginpage');
const { Dashboard } = require('./Dashboard');

class POManager {
    constructor(page) {
        this.page = page;
        this.loginpage = new Loginpage(this.page);
        this.dashBoard = new Dashboard(this.page);
    }

    getLoginPage() {
        return this.loginpage;
    }

    getDashboard() {
        return this.dashBoard;
    }
}

module.exports = { POManager };