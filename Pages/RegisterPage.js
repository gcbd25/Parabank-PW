import {Locator, Page, expect} from "@playwright/test";

exports.RegisterPage = 
class RegisterPage {
    constructor(page) {
        this.page = page;
    }
    //Validate the title of the Register page
    async validateTitle() {
        await expect(this.page).toHaveTitle("ParaBank | Register for Free Online Account Access");
    }   
    //Enter mandatory first name field
    async enterFirstName(firstName) {
        await this.page.locator('//input[@id="customer.firstName"]').fill(firstName);
    }
    //Enter mandatory last name field
    async enterLastName(lastName) {
        await this.page.locator('//input[@id="customer.lastName"]').fill(lastName);
    }
    //Enter mandatory address field
    async enterAddress(address) {
        await this.page.locator('//input[@id="customer.address.street"]').fill(address);
    }
    //Enter mandatory city field
    async enterCity(city) {
        await this.page.locator('//input[@id="customer.address.city"]').fill(city);
    }   
    //Enter mandatory state field
    async enterState(state) {
        await this.page.locator('//input[@id="customer.address.state"]').fill(state);
    }
    //Enter mandatory zip code field
    async enterZipCode(zipCode) {
        await this.page.locator('//input[@id="customer.address.zipCode"]').fill(zipCode);
    }
    //Enter mandatory phone number field
    async enterPhoneNumber(phoneNumber) {
        await this.page.locator('//input[@id="customer.phoneNumber"]').fill(phoneNumber);
    }
    //Enter mandatory SSN field     
    async enterSSN(ssn) {
        await this.page.locator('//input[@id="customer.ssn"]').fill(ssn);
    }
    //Enter mandatory username field
    async enterUsername(username) {
        await this.page.locator('//input[@id="customer.username"]').fill(username);
    }
    //Enter mandatory password field
    async enterPassword(password) {
        await this.page.locator('//input[@id="customer.password"]').fill(password);
    }
    //Enter mandatory repeated password field
    async enterRepeatedPassword(repeatedPassword) {
        await this.page.locator('//input[@id="repeatedPassword"]').fill(repeatedPassword);
    }
    //Click on Register Button
    async clickRegisterButton() {
        await this.page.locator('//input[@value="Register"]').click();
    }
    //Validate error message for repeated password field
    async validateRepeatedPasswordErrorMessage() {
        await expect(this.page.locator('//span[@id="repeatedPassword.errors"]')).toBeVisible();
        await expect(this.page.locator('//span[@id="repeatedPassword.errors"]')).toHaveText('Passwords did not match.');
    }
    //Validate error message for empty name field
    async validateEmptyNameErrorMessage() {
        await expect(this.page.locator('//span[@id="customer.firstName.errors"]')).toBeVisible();
        await expect(this.page.locator('//span[@id="customer.firstName.errors"]')).toHaveText('First name is required.');
    }
    //validate error message for empty last name field
    async validateEmptyLastNameErrorMessage() {
        await expect(this.page.locator('//span[@id="customer.lastName.errors"]')).toHaveText('Last name is required.');
    }
    //validate error message for empty address field
    async validateEmptyAddressErrorMessage() {
        await expect(this.page.locator('//span[@id="customer.address.street.errors"]')).toHaveText('Address is required.');
    }
    //validate error message for empty city field
    async validateEmptyCityErrorMessage() {
        await expect(this.page.locator('//span[@id="customer.address.city.errors"]')).toHaveText('City is required.');
    }   
    //validate error message for empty state field  
    async validateEmptyStateErrorMessage() {    
        await expect(this.page.locator('//span[@id="customer.address.state.errors"]')).toHaveText('State is required.');
    }
    //validate error message for empty zip code field
    async validateEmptyZipCodeErrorMessage() {
        await expect(this.page.locator('//span[@id="customer.address.zipCode.errors"]')).toHaveText('Zip Code is required.');
    }   
    //validate error message for empty SSN field
    async validateEmptySSNErrorMessage() {
        await expect(this.page.locator('//span[@id="customer.ssn.errors"]')).toHaveText('Social Security Number is required.');
    }
    //validate error message for empty username field
    async validateEmptyUsernameErrorMessage() {
        await expect(this.page.locator('//span[@id="customer.username.errors"]')).toHaveText('Username is required.');
    } 
    //validate error message for empty password field
    async validateEmptyPasswordErrorMessage() {
        await expect(this.page.locator('//span[@id="customer.password.errors"]')).toHaveText('Password is required.');
    }
    //validate error message for empty repeated password field
    async validateEmptyRepeatedPasswordErrorMessage() {
        await expect(this.page.locator('//span[@id="repeatedPassword.errors"]')).toHaveText('Password confirmation is required.');
    }



}