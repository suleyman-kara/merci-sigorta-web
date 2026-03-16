# Merci Sigorta & Danışmanlık

Merci Sigorta & Danışmanlık kurumsal web sitesi. [Eleventy (11ty)](https://www.11ty.dev/) v3 ile oluşturulmuş statik, çok dilli ve performans odaklı bir projedir.

![Merci Sigorta — Ana Sayfa](assets/screenshot.png)

🌐 **Canlı site:** [www.mercisigorta.com](https://www.mercisigorta.com)

---

## ⚡ PageSpeed Insights Skorları

Proje performans, SEO ve erişilebilirlik açısından sıkı şekilde optimize edilmiştir. 

### 📱 Mobil
![Performance](https://img.shields.io/badge/Performance-94-brightgreen?style=flat-square)
![Accessibility](https://img.shields.io/badge/Accessibility-100-brightgreen?style=flat-square)
![Best_Practices](https://img.shields.io/badge/Best_Practices-100-brightgreen?style=flat-square)
![SEO](https://img.shields.io/badge/SEO-100-brightgreen?style=flat-square)

### 💻 Masaüstü
![Performance](https://img.shields.io/badge/Performance-100-brightgreen?style=flat-square)
![Accessibility](https://img.shields.io/badge/Accessibility-100-brightgreen?style=flat-square)
![Best_Practices](https://img.shields.io/badge/Best_Practices-100-brightgreen?style=flat-square)
![SEO](https://img.shields.io/badge/SEO-100-brightgreen?style=flat-square)

---

## ✨ Özellikler

| Özellik | Detay |
|---|---|
| **Çok dilli destek** | Rusça (varsayılan), Türkçe, İngilizce |
| **Responsive tasarım** | Mobil öncelikli, tüm ekran boyutlarına uyumlu |
| **Görsel optimizasyonu** | `@11ty/eleventy-img` ile AVIF & WebP formatlarında otomatik dönüşüm ve responsive `<picture>` çıktısı |
| **Üretim optimizasyonu** | CSS minifikasyonu (CleanCSS), HTML minifikasyonu (html-minifier-terser) |
| **Performans (Önbellekleme)** | Cloudflare üzerinden yerel web fontları (`.woff2`) ve statik dosyalar için Cache TTL optimizasyonu |
| **SEO** | Hreflang etiketleri, Open Graph meta, sitemap.xml, robots.txt |
| **Hosting** | `docs/` klasörüne çıktı — GitHub Pages uyumlu |

---

## 🛠 Teknoloji

- **SSG:** [Eleventy v3](https://www.11ty.dev/) (ESM)
- **Şablon:** [Nunjucks (.njk)](https://mozilla.github.io/nunjucks/)
- **Görsel işleme:** [@11ty/eleventy-img](https://www.11ty.dev/docs/plugins/image/)
- **CSS minifikasyonu:** [clean-css](https://github.com/clean-css/clean-css)
- **HTML minifikasyonu:** [html-minifier-terser](https://github.com/terser/html-minifier-terser)

---

## 📁 Proje Yapısı

```
merci-sigorta/
├── .github/                # GitHub Actions iş akışları
│   └── workflows/
│       └── daily-build.yml # Günlük otomatik derleme
├── src/                    # Kaynak dosyalar
│   ├── _data/
│   │   ├── site.js         # Site geneli veriler (iletişim, adres, dil ayarları)
│   │   ├── googleBusiness.js # Google İşletme verilerini çeken yapı
│   │   └── i18n/           # Çeviri dosyaları
│   │       ├── ru.json
│   │       ├── tr.json
│   │       └── en.json
│   ├── _includes/
│   │   ├── base.njk        # Ana layout şablonu
│   │   ├── css/
│   │   │   └── style.css   # Ana stil dosyası
│   │   └── partials/       # Sayfa bileşenleri
│   │       ├── head.njk
│   │       ├── navbar.njk
│   │       ├── hero.njk
│   │       ├── about.njk
│   │       ├── services.njk
│   │       ├── insurance.njk
│   │       ├── google-reviews.njk # Google Yorumlar bileşeni
│   │       ├── showcase.njk
│   │       └── footer.njk
│   ├── img/                # Kaynak görseller
│   ├── fonts/              # Web fontları
│   ├── js/
│   │   └── main.js         # İstemci taraflı JavaScript
│   ├── tr/index.njk        # Türkçe sayfa
│   ├── en/index.njk        # İngilizce sayfa
│   ├── ru/index.njk        # Rusça sayfa
│   ├── sitemap.njk         # Sitemap şablonu
│   ├── robots.njk          # Robots.txt şablonu
│   └── index.njk           # Kök dizin yönlendirmesi
├── docs/                   # Derlenmiş çıktı (GitHub Pages)
├── eleventy.config.js      # Eleventy yapılandırması
└── package.json
```

---

## 🚀 Başlangıç

### Gereksinimler

- [Node.js](https://nodejs.org/) (v18+)

### Kurulum

```bash
# Depoyu klonla
git clone https://github.com/slmnkara/merci-sigorta.git
cd merci-sigorta

# Bağımlılıkları yükle
npm install
```

### Geliştirme

```bash
npm run dev
```

Tarayıcıda `http://localhost:8080` adresinde canlı önizleme açılır. Dosya değişikliklerinde otomatik yenileme yapar.

### Üretim Derlemesi

```bash
npm run build
```

Optimize edilmiş (minified) çıktıyı `docs/` klasörüne oluşturur.

### Temizlik

```bash
npm run clean
```

`docs/` klasörünü siler.

---

## 🌍 Çok Dilli Yapı

| Dil | Yol | Çeviri Dosyası |
|---|---|---|
| İngilizce (varsayılan) | `/en/` | `src/_data/i18n/en.json` |
| Türkçe | `/tr/` | `src/_data/i18n/tr.json` |
| Rusça | `/ru/` | `src/_data/i18n/ru.json` |

Kök URL (`/`) kullanıcının tarayıcı dilini (Türkçe, Rusça veya İngilizce) otomatik olarak algılar ve ilgili dile yönlendirir. Desteklenmeyen bir dil ise varsayılan olarak `/en/` adresine yönlendirme yapar. Yeni çeviriler `src/_data/i18n/` klasörüne eklenerek yapılabilir.

---

## ⭐️ Google Business Entegrasyonu 

Site, Google Haritalar'daki işletme yorumlarınızı ve ofis fotoğraflarınızı güvenli bir şekilde çekip statik HTML'e yerleştirir. Bu işlem **Build-Time (Derleme Zamanı)** gerçekleştiği için site hızını asla yavaşlatmaz.

### Ortam Değişkenleri (`.env`)
Bu sistemin çalışması için projenin kök dizininde bir `.env` dosyası oluşturulmalı ve şu bilgiler girilmelidir:
```env
GOOGLE_API_KEY="AIza..."
GOOGLE_PLACE_ID="ChIJ..."
```

*(Not: `AIza` ile başlayan API anahtarınız Google Cloud üzerinden yalnızca `www.mercisigorta.com` referansına izin verecek şekilde güvenceye alınmıştır. Bu yüzden resimler localhost yerine yalnızca sunucu tarafında oluşturulur ve `no-referrer` ile sunulur).*

### Otomatik Güncellemeler (GitHub Actions)
Site **GitHub Pages** (statik hosting) üzerinde çalıştığı için anlık istek atamaz. Yeni yorumların siteye yansıması için projenin yeniden HTML'e derlenmesi gerekir.

Bu süreç repodaki **`.github/workflows/daily-build.yml`** dosyası ile **otomatikleştirilmiştir**.
1. Her gece saat `03:00`'da (TRT) sanal bir makine açılır.
2. `npm run build` komutu otomatik olarak çalıştırılır ve Google'dan en güncel yorumlar/puanlar çekilir.
3. Çıkan yeni HTML dosyaları Commit atılarak ana branch'e yansıtılır ve GitHub Pages yenilenir.

*Kurulum Notu:* GitHub deposunda bu işlemin çalışabilmesi için `Settings > Secrets and variables > Actions` altından `GOOGLE_API_KEY` ve `GOOGLE_PLACE_ID` şifrelerinin tanımlanmış olması gerekmektedir.

---

## 🤖 Geliştirme

Bu proje [Antigravity](https://antigravity.dev) AI destekli kodlama asistanı kullanılarak geliştirilmiştir.

---

## 📄 Lisans

Bu proje tescilli bir yazılımdır. Tüm hakları saklıdır. Detaylar için [LICENSE](LICENSE) dosyasına bakınız.
