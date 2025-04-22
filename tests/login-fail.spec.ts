import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test('should show error on invalid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('wronguser', 'wrongpass');
  await loginPage.assertLoginErrorMessage();
});
/*
test('should not login when inputs are empty', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('', '');
  await loginPage.assertLoginErrorMessage();
});

test('should not login with only username', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('testuser1', '');
  await loginPage.assertLoginErrorMessage();
});

test('should not login with only password', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('', 'Testpass123!');
  await loginPage.assertLoginErrorMessage();
});
*/