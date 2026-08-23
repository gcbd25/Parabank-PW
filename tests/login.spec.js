import { test, expect } from '@playwright/test';

test.describe('Register Tests', () => {
  test('Valid Register Test', async ({ page }) => {
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
    //Close Browser
    await page.close();
  })
})