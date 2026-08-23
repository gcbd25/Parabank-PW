import { test, expect } from '@playwright/test';

test.describe('Register Tests', () => {
  test('TC-01: Validate user can register succesfully', async ({ page }) => {
    //Navigate to the URL
    await page.goto('/');
    await expect(page).toHaveTitle("ParaBank | Welcome | Online Banking");
    //Click on the Register Link
    await page.locator('//a[@href="register.htm"]').click();
    //Validate user landed in Regisgter Page
    await expect(page).toHaveTitle("ParaBank | Register for Free Online Account Access");
    //Enter mandatory fields
    await page.locator('//input[@id="customer.firstName"]').fill('John');
    await page.locator('//input[@id="customer.lastName"]').fill('Doe');
    await page.locator('//input[@id="customer.address.street"]').fill('123 Main St');
    await page.locator('//input[@id="customer.address.city"]').fill('Anytown');
    await page.locator('//input[@id="customer.address.state"]').fill('CA');
    await page.locator('//input[@id="customer.address.zipCode"]').fill('12345');
    await page.locator('//input[@id="customer.phoneNumber"]').fill('555-123-4567');
    await page.locator('//input[@id="customer.ssn"]').fill('123-45-6789');
    await page.locator('//input[@id="customer.username"]').fill('johndoe' + Date.now());
    await page.locator('//input[@id="customer.password"]').fill('password123');
    await page.locator('//input[@id="repeatedPassword"]').fill('password123');
    //Click on Register Button
    await page.locator('//input[@value="Register"]').click();
    //Validate user landed in Account Created Page
    await expect(page).toHaveTitle("ParaBank | Customer Created");
    //Close Browser
    await page.close();
  })

  test('TC-02: Validate error message when passwords do not match', async ({ page }) => {
    //Navigate to the URL
    await page.goto('/');
    await expect(page).toHaveTitle("ParaBank | Welcome | Online Banking");
    //Click on the Register Link
    await page.locator('//a[@href="register.htm"]').click();
    //Validate user landed in Regisgter Page
    await expect(page).toHaveTitle("ParaBank | Register for Free Online Account Access");
    //Enter mandatory fields
    await page.locator('//input[@id="customer.firstName"]').fill('John');
    await page.locator('//input[@id="customer.lastName"]').fill('Doe');
    await page.locator('//input[@id="customer.address.street"]').fill('123 Main St');
    await page.locator('//input[@id="customer.address.city"]').fill('Anytown');
    await page.locator('//input[@id="customer.address.state"]').fill('CA');
    await page.locator('//input[@id="customer.address.zipCode"]').fill('12345');
    await page.locator('//input[@id="customer.phoneNumber"]').fill('555-123-4567');
    await page.locator('//input[@id="customer.ssn"]').fill('123-45-6789');
    await page.locator('//input[@id="customer.username"]').fill('johndoe' + Date.now());
    await page.locator('//input[@id="customer.password"]').fill('password123');
    await page.locator('//input[@id="repeatedPassword"]').fill('123password');
    //Click on Register Button
    await page.locator('//input[@value="Register"]').click();
    //Validate error message
    await expect(page.locator('//span[@id="repeatedPassword.errors"]')).toBeVisible();
    await expect(page.locator('//span[@id="repeatedPassword.errors"]')).toHaveText('Passwords did not match.');
    //Close Browser
    await page.close();
  })

  test('TC-03: Validate error message when form is empty', async ({ page }) => {
    //Navigate to the URL
    await page.goto('/');
    await expect(page).toHaveTitle("ParaBank | Welcome | Online Banking");
    //Click on the Register Link
    await page.locator('//a[@href="register.htm"]').click();
    //Validate user landed in Regisgter Page
    await expect(page).toHaveTitle("ParaBank | Register for Free Online Account Access");
    //Click on Register Button
    await page.locator('//input[@value="Register"]').click();
    //Validate error message
    await expect(page.locator('//span[@id="customer.firstName.errors"]')).toBeVisible();
    await expect(page.locator('//span[@id="customer.firstName.errors"]')).toHaveText('First name is required.');
    await expect(page.locator('//span[@id="customer.lastName.errors"]')).toHaveText('Last name is required.');
    await expect(page.locator('//span[@id="customer.address.street.errors"]')).toHaveText('Address is required.');
    await expect(page.locator('//span[@id="customer.address.city.errors"]')).toHaveText('City is required.');
    await expect(page.locator('//span[@id="customer.address.state.errors"]')).toHaveText('State is required.');
    await expect(page.locator('//span[@id="customer.address.zipCode.errors"]')).toHaveText('Zip Code is required.');
    await expect(page.locator('//span[@id="customer.ssn.errors"]')).toHaveText('Social Security Number is required.');
    await expect(page.locator('//span[@id="customer.username.errors"]')).toHaveText('Username is required.');
    await expect(page.locator('//span[@id="customer.password.errors"]')).toHaveText('Password is required.');
    await expect(page.locator('//span[@id="repeatedPassword.errors"]')).toHaveText('Password confirmation is required.');
    //Close Browser
    await page.close();
  })
})