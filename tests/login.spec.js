import { test, expect } from '@playwright/test';
const { LandingPage } = require('../Pages/LandingPage');
const { RegisterPage } = require('../Pages/RegisterPage');

test.describe('Register Tests', () => {
  let landing;
  let register;
  test.beforeEach(async ({ page }) => {
    landing = new LandingPage(page);
    register = new RegisterPage(page);
  });
  test('TC-01: Validate user can register succesfully', async ({ page }) => {
    //Navigate to the URL
    await landing.goto();
    await landing.validateTitle();
    //Click on the Register Link
    await landing.clickRegister();
    //Validate user landed in Regisgter Page
    await register.validateTitle();
    //Enter mandatory fields
    await register.enterFirstName('John');
    await register.enterLastName('Doe');
    await register.enterAddress('123 Main St');
    await register.enterCity('Anytown');
    await register.enterState('CA');
    await register.enterZipCode('12345');
    await register.enterPhoneNumber('555-123-4567');
    await register.enterSSN('123-45-6789');
    await register.enterUsername('johndoe' + Date.now());
    await register.enterPassword('password123');
    await register.enterRepeatedPassword('password123');
    //Click on Register Button
    await register.clickRegisterButton();
    //Validate user landed in Account Created Page
    await expect(page).toHaveTitle("ParaBank | Customer Created");
    //Close Browser
    await page.close();
  })

  test('TC-02: Validate error message when passwords do not match', async ({ page }) => {
    //Navigate to the URL
    await landing.goto();
    await landing.validateTitle();
    //Click on the Register Link
    await landing.clickRegister();
    //Validate user landed in Regisgter Page
    await register.validateTitle();
    //Enter mandatory fields
    await register.enterFirstName('John');
    await register.enterLastName('Doe');
    await register.enterAddress('123 Main St');
    await register.enterCity('Anytown');
    await register.enterState('CA');
    await register.enterZipCode('12345');
    await register.enterPhoneNumber('555-123-4567');
    await register.enterSSN('123-45-6789');
    await register.enterUsername('johndoe' + Date.now());
    await register.enterPassword('password123');
    await register.enterRepeatedPassword('password1234');
    //Click on Register Button
    await register.clickRegisterButton();
    //Validate error message
    await register.validateRepeatedPasswordErrorMessage();
    //Close Browser
    await page.close();
  })

  test('TC-03: Validate error message when form is empty', async ({ page }) => {
    //Navigate to the URL
    await landing.goto();
    await landing.validateTitle();
    //Click on the Register Link
    await landing.clickRegister();
    //Validate user landed in Regisgter Page
    await register.validateTitle();
    //Click on Register Button
    await register.clickRegisterButton();
    //Validate error message
    await register.validateEmptyNameErrorMessage();
    await register.validateEmptyLastNameErrorMessage();
    await register.validateEmptyAddressErrorMessage();
    await register.validateEmptyCityErrorMessage();
    await register.validateEmptyStateErrorMessage();
    await register.validateEmptyZipCodeErrorMessage();
    await register.validateEmptySSNErrorMessage();
    await register.validateEmptyUsernameErrorMessage();
    await register.validateEmptyPasswordErrorMessage();
    await register.validateEmptyRepeatedPasswordErrorMessage();
    //Close Browser
    await page.close();
  })
})