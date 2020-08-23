---
layout: blog
title: "HTML 5 SERIES #6 : HTML Links"
draft: false
date: 2020-08-23T03:18:49.511Z
thumbnail: /images/uploads/instagram-post-2-3-.jpg
tags:
  - HTML
  - Series
---
Halo sobat digitalkode!, Hari ini mimin akan update materi HTML series ke 6 dengan judul **HTML Links.**

Sesuai judulnya nih ya, HTML Links akan berisi tutorial *Nge link* Atau menghubungkan website :sunglasses:

### Apasih HTML Links itu?

> HTML Links adalah *hyperlink*, jadi gunanya Links ini agar user bisa klik dan berpindah dari satu halaman ke halaman yang lainnya. Links tidak selalu dalam bentuk teks, Links dapat disajikan dalam banyak bentuk, bahkan foto!

setelah kita tau mengenai si HTML Links ini, kita akan belajar sintaksis atau tata cara penulisan Links ini, secara umum ada 2 jenis tipe links yaitu relatif dan absolut.

> Absolut adalah link yang berisi full alamat website, contohnya seperti dibawah ini :

`<a href="https://www.digitalkode.com">Klik disini untuk menuju website digitalkode!</a>`

setelah diklik, user akan diarahkan menuju www.digitalkode.com

> Sedangkan Relatif adalah link yang berisi alamat lokal, contohnya seperti dibawah ini:

`<a href="halaman_kedua.html">Klik disini untuk menuju ke halaman kedua!</a>`

setelah diklik, maka user akan diarahkan menuju situs web saat ini + alamat yang tercantum di href, misalnya sekarang user berada di www.websiteku.com maka setelah user klik link relatif tadi, user akan diarahkan ke www.websiteku.com/**halaman_kedua.html**

nahh, jadi itulah perbedaan antara absolut dan relatif dalam html links.

### Let's ngoding!

udah paham belum gaes? kalau belum silahkan baca baca lagi ya. jika sudah, Kuy gaskeun *ngoding*!

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Belajar HTML Links Digitalkode</title>
  </head>
  <body>
    <h1>Selamat Datang Di Situs Digitalkode!</h1>
    <p>Tempat berbagai macam <b>tutorial</b> <i>pemograman</i> secara <u>gratis!</u></p>
    <a href="../html-5-series-5-html-comment/">Klik Disini untuk menuju post sebelumnya</a>
    <a href="https://www.google.com">Klik Disini untuk menuju google</a>
  </body>
</html> 
```

silahkan tulis,save dan jalankan codingan diatas pada *Alat tempur* (Text Editor) favorit kalian!

### Output

jika sudah, maka akan muncul output seperti ini:

<h1>Selamat Datang Di Situs Digitalkode!</h1>
<p>Tempat berbagai macam <b>tutorial</b> <i>pemograman</i> secara <u>gratis!</u></p>
<a href="../html-5-series-5-html-comment/">Klik Disini untuk menuju post sebelumnya</a>
<a href="https://www.google.com">Klik Disini untuk menuju google</a>

**DONE!**

Sekian tutorial HTML links di series HTML digitalkode, wahhh ternyata links sangat berguna ya dalam dunia website, karna dengan adanya links user dapat berpindah halaman. tanpa adanya links. user hanya stuck di 1 halaman saja, Berterima kasihlah pada HTML Links :relieved:

Terimakasih dan sampai jumpa di next tutorial! :sunglasses:



**\#keepLearning_keepNgoding**