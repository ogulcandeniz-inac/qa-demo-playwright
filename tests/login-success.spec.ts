import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test('should login successfully with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('deniz123', '1Deniz2*.'); 
  await loginPage.assertSuccessfulLogin();
});
