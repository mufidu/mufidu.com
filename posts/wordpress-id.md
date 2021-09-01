---
title: "Optimasi Wordpress untuk Blog"
date: "2021-05-23"
category: "devs"
tags:
  - "tutorial"
coverImage: "/img/stephen-phillips-hostreviews-co-uk-sSPzmL7fpWc-unsplash.jpg"
layout: layouts/post-id.njk
permalink: /optimasi-wordpress/
lang: id
translation: /wordpress-optimization/
---

![wordpress](/img/stephen-phillips-hostreviews-co-uk-sSPzmL7fpWc-unsplash.jpg)

Udah sekitar setaun lah saya host blog saya di Blogger, saya cuman tinggal nulis upload nulis upload, gausah setting apa-apa karena emang gabisa juga.

Karena pengen bisa ngoptimasiin blog ini (dan emang seneng ngoprek aja), saya nyoba buat beli hosting dan pindahin blog ke Wordpress.

Prosesnya ga simpel. Saya ngabisin sekitar 5 harian lah buat selesai set up blog di Wordpress, karena saya juga emang baru di cPanel dkk.

Tiap hari saya fokus ngerjain satu aspek, hari pertama set up hosting, lanjut install dan set up Wordpress pertama kali, terus install Themes, lanjut install plugins, dan yang terakhir SEO.

Sebagian besar waktunya sih saya abisin buat browsing, banyak banget tools yang bisa dipake dan saya harus milih yang terbaik. Saya ngutamain speed pokonya harus setinggi mungkin, soalnya saya pakai shared hosting, jadi harus optimal.

Sekarang saya mau share beberapa konfigurasi yang saya pakai di blog ini, siapa tau bisa hemat waktu orang yang lagi butuh. Bisa jadi panduan juga buat yang mau pindah atau baru mau coba Wordpress di blognya.

## Install Wordpress

Pertama, yang harus dilakuin ya install Wordpressnya. Biasanya provider hosting udah nyediain Softaculous di cPanel biar bisa install Wordpress sekali klik.

Tapi kalo emang gada, bisa install sendiri, download file yang dibutuhin dan upload ke hosting lewat FTP. Ada panduan lengkapnya di [web resmi Wordpress](https://wordpress.org).

## Pasang theme

Kedua, selesai install Wordpress, menurut saya yang paling baik dilakuin itu pilih dan pasang satu Theme. Banyak banget pilihannya, ada yang gratis, ada yang bayar. Tapi yang gratis aja udah banyak yang bagus ko, tinggal gimana modifikasi kita aja.

Yang ngebedain Theme yang gratis sama yang bayar itu biasanya di kustomisasinya, kadang kalau Themenya ada yang versi berbayar, versi gratisnya dibatesin banget kalo mau dimodif.

Buat pilihan Theme sendiri tergantung ke kebutuhan masing-masing ya. Apa dulu yang mau diprioritasin. Kalo saya sih yang penting harus enteng (ga gede filenya) dan bisa dimodif sampe saya suka.

Pilihannya waktu itu ada [Astra](https://wordpress.org/themes/astra/) sama [Neve](https://wordpress.org/themes/neve/), tapi akhirnya pakai Neve soalnya lebih cocok aja.

Pas modif Theme, kalo bisa utamain biar semuanya gampang dibaca, navigasi jelas (jangan sampe bikin bingung cara balik ke Home gimana), dan ga sumpek kebanyakan menu.

Saya sendiri ngehapus menu yang di sidebar kanan, biar pas lagi di post itu yang keliatan cuman postnya aja. Saya buat page baru buat nampilin kategori.

Kalo mau dan bisa, sebelum modif Theme bikin [Child Theme](https://codeable.io/what-is-a-child-theme-wordpress/#:~:text=A%20child%20theme%20is%20a,of%20modifying%20an%20existing%20theme.)nya dulu, biar nanti kalo Themenya diupdate, ga modif lagi dari awal.

## Install Plugins

Ketiga, plugins. Salah satu yang bikin unggul Wordpress daripada Blogger ya plugins ini. Kita jadi bisa nambahin fitur-fitur yang gada di bawaan Wordpressnya, tanpa harus ngerti coding-codingan.

Selain nambah fitur, plugins juga penting buat ngoptimalin blog kita, terutama di kecepatan loading (speed).

Ada banyak banget plugins yang bisa kita pasang buat nambah fitur di web kita. Tapi kalo kita install kebanyakan, web malah bisa jadi lelet, atau yang lebih parah pluginnya bentrokan satu sama lain. Kadang suka ada aja masalah gara-gara plugin yang saling ga cocok gitu.

Bakal lebih bagus kalo kita install secukupnya aja, sesuain sama apa yang kita utamain, kaya pas milih Theme tadi. Misalnya, kalo kita buat web ini cuman jadi landing page aja, ga perlu install plugin comment kaya Disqus.

Buat blog, saya bakal kasih beberapa rekomendasi plugins, apa aja semua yang saya pakai di sini. Saya kelompokin berdasarkan fungsinya ya.

### Caching

Secara default kalo kita ngakses web yang pakai Wordpress, browser bakal ngerender webnya dari awal. Nah cache ini nyediain versi web yang udah jadinya, jadi browser ga harus ngerender dari awal tiap kita buka web itu.

Ini juga ngeringanin beban server kita soalnya jadi gabanyak proses yang harus dijalanin buat nampilin web di browser.

Buat caching, saya udah nyoba banyak plugins, pertama saya coba [W3 Total Cache](https://id.wordpress.org/plugins/w3-total-cache/) soalnya katanya fiturnya paling lengkap. Lalu, saya pindah ke [WP Super Cache](https://id.wordpress.org/plugins/wp-super-cache/) karena settingannya lebih simpel, jadi ngecilin kemungkinan bentrok sama plugin lain.

Tapi akhirnya saya nemu kalo hosting saya itu pakai Litespeed Web Server dan katanya paling optimal kalo plugin cachenya pakai [Litespeed Cache](https://id.wordpress.org/plugins/litespeed-cache/), jadi sampe sekarang saya pakai itu.

Setelah saya explore lagi, ada satu plugin cache lagi yang keren, jadi dia bisa nyimpen cache kita di CDN Cloudflare secara otomatis. CDN itu kaya hosting backingan yang ada dimana-mana, jadi web kita bisa dibuka lancar juga sama orang yang beda benua.

Nah biasanya ribet banget kalo mau set up CDN gitu gitu, makanya saya langsung install begitu ada [WP Cloudflare Super Page Cache](https://wordpress.org/plugins/wp-cloudflare-page-cache/). Tinggal hubungin akun Cloudflare, sisanya dia yang ngerjain.

Buat setupnya, saya ngikutin [panduan ini](https://webspeedtools.com/litespeed-cache-cloudflare/), yang ngejelasin detail-detailnya. Sebenernya direkomendasiin buat matiin Litespeed Cache kalo udah pakai plugin itu, biar ga numpuk yang ngerjain cachenya. Tapi bisa juga disetting biar cache lokalnya tetep dari plugin Litespeed, coba-coba aja.

### Security

Awalnya saya install [All in One WP Security](https://wordpress.org/plugins/all-in-one-wp-security-and-firewall/), tapi gatau kenapa saya malah gabisa login. Jadi saya uninstall itu, ganti pakai [Jetpack](https://wordpress.org/plugins/jetpack/) sama [Akismet](https://wordpress.org/plugins/akismet/).

Jetpack ini sebenernya ada banyak banget [fiturnya](https://jetpack.com/support/features/), tapi yang saya pakai cuman securitynya (anti brute force), related post, sama buat commentnya aja. Kalo Akismet itu buat anti spam.

### SEO

Buat ningkatin peringkat di Google Search, kita bisa pakai [All in One SEO](https://wordpress.org/plugins/all-in-one-seo-pack/), fiturnya lengkap, tinggal install terus ikutin aja saran-sarannya.

Dan karena blog saya ini juga pindahan dari Blogger, link yang ngehubungin postnya juga harus diredirect biar kalo diakses ga error 404, kalo ga bisa drop banget ranknya. Buat ini saya pakai [Redirection](https://wordpress.org/plugins/redirection/).

### Optimization

Sebelum file dicache, harusnya bisa dioptimalin dulu, terutama gambar sama static filenya (CSS, JavaScript) yang bisa diminify. Saya pakai [Autoptimize](https://wordpress.org/plugins/autoptimize/), plugin ini banyak banget yang make jadi ga bentrok sama plugin lain, soalnya emang udah bisa kerja bareng dari sananya.

Di settingan Litespeed Cache juga sebenernya bisa ngeminify sama ngoptimasiin gambar, jadi saya pakai dua-duanya. Autoptimize buat optimalin HTML, CSS, JavaScript. Litespeed Cache buat optimalin gambarnya.

### Tambahan

Saya juga install [AMP](https://wordpress.org/plugins/amp/) buat bikin web jadi mobile-friendly, sama [UpdraftPlus](https://wordpress.org/plugins/updraftplus/) buat keperluan backup.

---

Selesai. Plugins yang diinstall jangan banyak-banyak, nanti malah jadi beban doang sama bisa bentrok. Install semua yang tadi aja udah lebih dari cukup. Blog ini udah bisa dapet nilai yang lumayan kalo dites.

![hasil tes lighthouse](/img/lighthouse.webp)
![hasil tes gtmetrix](/img/gtmetrix.webp)

Tapi test itu biasanya baru maksimal hasilnya di tes kedua. Soalnya di tes pertama kadang cachingnya belum selesai. Ya emang masih banyak banget sih yang bisa dioptimalin, itu salah satunya. Kalo dibandingin sama pas awal tadi, ini sih udah cukup lah ya.
