# QA Demo Project – Playwright Login & UI Test Suite

Bu proje, [DemoQA](https://demoqa.com/) sitesine ait bileşenlerde, Playwright test otomasyonu kullanılarak login işlemleri, form senaryoları ve UI öğeleri üzerinde testler gerçekleştirmek amacıyla hazırlanmıştır.  
Proje, **Page Object Model (POM)** yapısına uygun geliştirilmiş ve Git versiyon kontrolü ile GitHub'a aktarılmıştır.

---

## 🔧 Kullanılan Teknolojiler

- Playwright
- TypeScript
- Node.js
- Git & GitHub

---

## 📂 Proje Yapısı

```
login-test-suite/
├── pages/
│   ├── loginPage.ts         # Login, logout ve mesaj doğrulama işlemleri
│   └── checkboxPage.ts      # Checkbox bileşenine ait işlemler
├── tests/
│   ├── login-success.spec.ts       # Başarılı giriş testi
│   ├── login-fail.spec.ts          # Geçersiz giriş testleri
│   ├── logout-after-login.spec.ts  # Logout kontrol testi
│   └── checkbox.spec.ts            # Checkbox testi
├── playwright.config.ts     # Playwright yapılandırma dosyası
├── README.md                # Proje açıklamaları
```

---

## 🚀 Nasıl Çalıştırılır?

1. Proje klasörünü VS Code veya terminalde açın.
2. Gerekli modülleri yükleyin:

   ```bash
   npm install
   ```

3. Tüm testleri çalıştırın:

   ```bash
   npx playwright test
   ```

4. Belirli bir test dosyasını çalıştırmak için:

   ```bash
   npx playwright test tests/login-success.spec.ts
   ```

5. HTML raporu görüntülemek için:

   ```bash
   npx playwright show-report
   ```

---

## 🧪 Test Edilen Senaryolar

### 🔐 Login Akışı

- Başarılı kullanıcı ile login ve yönlendirme kontrolü
- Geçersiz kullanıcıyla login denemesi ve hata mesajı kontrolü
- Login sonrası logout işlemi ve tekrar login ekranına dönüş
- (Yorumlandı) Boş input ile veya tek alan doldurularak login denemesi

### ☑️ UI Bileşeni Testi

- Checkbox sayfasında “Notes” seçeneğinin tıklanması
- Seçilen kutunun doğru şekilde DOM’da görüntülenmesi
