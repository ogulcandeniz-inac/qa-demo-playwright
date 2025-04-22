import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test('should logout successfully after login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('deniz123', '1Deniz2*.');
  await loginPage.assertSuccessfulLogin();

  await loginPage.logout();
  await expect(page).toHaveURL('https://demoqa.com/login');
});
