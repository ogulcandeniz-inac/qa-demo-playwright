import { test } from '@playwright/test';
import { CheckboxPage } from '../pages/checkboxPage';

test('should check and uncheck Desktop checkbox', async ({ page }) => {
  const checkboxPage = new CheckboxPage(page);

  await checkboxPage.goto();
  await checkboxPage.expandAll();

  // Seç
  await checkboxPage.toggleDesktopCheckbox();
  await checkboxPage.expectResultToContain('desktop');

  // Kaldır
  await checkboxPage.toggleDesktopCheckbox();
  await checkboxPage.expectResultNotToContain('desktop');
});
