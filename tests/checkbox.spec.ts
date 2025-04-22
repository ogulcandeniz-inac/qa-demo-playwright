import { test } from '@playwright/test';
import { CheckboxPage } from '../pages/checkboxPage';

test('should check Notes checkbox and verify result', async ({ page }) => {
  const checkboxPage = new CheckboxPage(page);
  await checkboxPage.goto();
  await checkboxPage.expandAll();
  await checkboxPage.checkNotes();
  await checkboxPage.verifyResult('notes');
});
