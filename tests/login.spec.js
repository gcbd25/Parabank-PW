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
    
    //Close Browser
    await page.close();
  })
})