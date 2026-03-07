# Merci Sigorta & Danışmanlık

Merci Sigorta & Danışmanlık kurumsal web sitesi. [Eleventy (11ty)](https://www.11ty.dev/) v3 ile oluşturulmuş statik, çok dilli ve performans odaklı bir projedir.

![Merci Sigorta — Ana Sayfa](assets/screenshot.png)

🌐 **Canlı site:** [www.mercisigorta.com](https://www.mercisigorta.com)

---

## ✨ Özellikler

| Özellik | Detay |
|---|---|
| **Çok dilli destek** | Rusça (varsayılan), Türkçe, İngilizce |
| **Responsive tasarım** | Mobil öncelikli, tüm ekran boyutlarına uyumlu |
| **Görsel optimizasyonu** | `@11ty/eleventy-img` ile AVIF & WebP formatlarında otomatik dönüşüm ve responsive `<picture>` çıktısı |
| **Üretim optimizasyonu** | CSS minifikasyonu (CleanCSS), HTML minifikasyonu (html-minifier-terser) |
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
├── src/                    # Kaynak dosyalar
│   ├── _data/
│   │   ├── site.js         # Site geneli veriler (iletişim, adres, dil ayarları)
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
│   └── robots.njk          # Robots.txt şablonu
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
| Rusça (varsayılan) | `/ru/` | `src/_data/i18n/ru.json` |
| Türkçe | `/tr/` | `src/_data/i18n/tr.json` |
| İngilizce | `/en/` | `src/_data/i18n/en.json` |

Kök URL (`/`) otomatik olarak `/ru/` adresine yönlendirir. Yeni çeviriler `src/_data/i18n/` klasörüne eklenerek yapılabilir.

---

## 📄 Lisans

Bu proje tescilli bir yazılımdır. Tüm hakları saklıdır. Detaylar için [LICENSE](LICENSE) dosyasına bakınız.
