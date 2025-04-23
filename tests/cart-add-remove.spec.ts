/**
 * Bu test şu anda devre dışı bırakılmıştır.
 * 
 * Sebep:
 * DemoQA'daki kitap detay sayfası (örnek: /books?book=Git Pocket Guide)
 * düzgün şekilde yüklenmemektedir. Sayfa açıldığında içerik boş kalmakta
 * ve "Add To Your Collection" veya benzeri butonlar gözükmemektedir.
 * 
 * Bu nedenle bu testin işlemesi mümkün değildir.
 * Sayfa tekrar aktif hale geldiğinde test tekrar aktif edilebilir.
 */

/*
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test('should add and remove book from cart', async ({ page }) => {
  const loginPage = new LoginPage(page);

  /* 1. Login 
  await loginPage.goto();
  await loginPage.login('deniz123', '1Deniz2*.');
  await expect(page).toHaveURL('https://demoqa.com/profile');

  2. Kitap listesine git 
  await page.goto('https://demoqa.com/books');

  3. target="_blank" kaldır 
  await page.evaluate(() => {
    const link = document.querySelector('a[href="/books?book=Git Pocket Guide"]');
    if (link) link.removeAttribute('target');
  });

  4. Kitap detay sayfasına git 
  await page.click('a[href="/books?book=Git Pocket Guide"]');

  5. Doğru sayfaya yönlendirilmiş mi? 
  expect(page.url()).toContain('/books?book=Git Pocket Guide');
});
*/
