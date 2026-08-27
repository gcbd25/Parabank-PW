import {Locator, Page, expect} from "@playwright/test";

exports.LandingPage = 
class LandingPage {
    constructor(page) {
        this.page = page;
        this.btnRegister = 'a[href="register.htm"]';
    }
    //Go to the landing page
    async goto() {
        await this.page.goto('/');
    }
    //Validate the title of the landing page
    async validateTitle() {
        await expect(this.page).toHaveTitle("ParaBank | Welcome | Online Banking");
    }
    //Click on the Register link
    async clickRegister() {
        await this.page.locator(this.btnRegister).click();
    }

}