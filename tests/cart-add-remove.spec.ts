import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test('should add and remove book from cart', async ({ page }) => {
  const loginPage = new LoginPage(page);

  // 1. Login
  await loginPage.goto();
  await loginPage.login('deniz123', '1Deniz2*.');
  await expect(page).toHaveURL('https://demoqa.com/profile');

  // 2. Kitap listesine git
  await page.goto('https://demoqa.com/books');

  // 3. target="_blank" kaldır
  await page.evaluate(() => {
    const link = document.querySelector('a[href="/books?book=Git Pocket Guide"]');
    if (link) link.removeAttribute('target');
  });

  // 4. Kitap detay sayfasına git
  await page.click('a[href="/books?book=Git Pocket Guide"]');

  // 5. Doğru sayfaya yönlendirilmiş mi?
  expect(page.url()).toContain('/books?book=Git Pocket Guide');

  // 6. Ekle butonunu bekle ve tıkla
  const addButton = page.locator('#addNewRecordButton');
  await addButton.waitFor({ state: 'visible', timeout: 10000 });
  await addButton.click();

  // 7. Profile git
  await page.goto('https://demoqa.com/profile');

  // 8. Kitabın eklenip eklenmediğini kontrol et
  await expect(page.locator('.rt-tbody')).toContainText('Git Pocket Guide');

  // 9. Kitabı sil
  await page.click('#submit');
  await page.click('#closeSmallModal-ok');

  // 10. Silinmiş mi kontrol et
  await expect(page.locator('.rt-noData')).toHaveText('No rows found');
});
