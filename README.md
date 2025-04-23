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
│   ├── loginPage.ts              # Login, logout ve mesaj doğrulama işlemleri
│   └── checkboxPage.ts           # Checkbox bileşenine ait işlemler
├── tests/
│   ├── login-success.spec.ts     # Başarılı giriş testi
│   ├── login-fail.spec.ts        # Geçersiz giriş testleri
│   ├── logout-after-login.spec.ts# Logout kontrol testi
│   ├── checkbox.spec.ts          # Checkbox testi
│   └── cart-add-remove.spec.ts   # Kitap ekle/sil testi (şu an devre dışı)
├── playwright.config.ts          # Playwright yapılandırma dosyası
├── README.md                     # Proje açıklamaları
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
- Checkbox sayfasında “Desktop” seçimi ve kaldırılması
- Seçilen kutunun doğru şekilde DOM’da görüntülenmesi
- Sonucun kaldırılmasıyla birlikte DOM'dan silindiğinin kontrolü

### 📚 Kitap Koleksiyonu Testi

> Bu test, teknik nedenlerden dolayı **devre dışı** bırakılmıştır:
>
> - `Git Pocket Guide` kitabının detay sayfası [DemoQA](https://demoqa.com/books) üzerinde boş yüklenmektedir.
> - "Add To Your Collection" butonu görünmemektedir.
> - Sayfa düzgün çalıştığında test yeniden aktif edilebilir.
