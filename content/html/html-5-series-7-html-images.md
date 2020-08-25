---
layout: blog
title: "HTML 5 SERIES #7 : HTML Images"
draft: false
date: 2020-08-25T04:41:09.560Z
thumbnail: /images/uploads/instagram-post-2-4-.jpg
tags:
  - HTML
  - Series
---
Halo Sobat Digitalkode! Today mimin akan posting salah satu materi terpenting di HTML, yaitu HTML Images! Dari judulnya aja udah ketauan nih kalo materi ini akan berisi dengan gambar. :satisfied:

jadi si HTML ini selain bisa nampilin teks, dia bisa juga nampilin gambar! Yups, Semua gambar yang ada di Website itu berasal dari HTML, bahkan gambar oren oren yang kalian lihat diatas aja itu berasal dari HTML Images, betapa pentingnya yaa HTML Images ini!

mimin kutip dulu arti dari HTML Images:

> **img** menunjukkan **image** yang berarti **gambar** dan oleh karenanya digunakan untuk menyisipkan gambar. Gambar didalam sebuah dokumen HTML tidak dimasukkan sepenuhnya pada file (`.html`, misalnya) akan tetapi, hanya merujukkan file sumber gambar tersebut berada (disimpan).

Dari penjelasan diatas, udah paham yaa, ketika kita memasukkan gambar ke HTML, bukan berarti kita masukin 1 gambar penuh ke HTML :joy: namun berarti kita membuat sebuah rujukan ke HTML seperti : *"Ini aku mau nampilin gambar, kamu ambilin yaa gambarnya disana"* Nahh Kurang lebih seperti itu.

### Sintaksis HTML Image

Oke, Langsung gas ke sintaksis atau cara penulisan HTML Image, Dia bisa dikasih rujukan ke File img seperti HTML Links Yang Sebelumnya mimin bahas. dia punya 2 tipe yaitu Source Absolute dan Source Relative, Mirip mirip lah sama HTML Links, bagi yang belum belajar bisa klik <a href="../html-5-series-6-html-links/">Disini.</a>

berikut adalah Sintaksis nya:

`<Img Src="Link Menuju Foto" alt="ini gambar" width="200" height="200">`

SRC adalah singkatan dari Source, yaitu Sumber link si Foto

ALT adalah singkatan dari alternative, Yaitu Alternatif tulisan yang muncul ketika foto \`\`gagal

width & height adalah aturan lebar dan tinggi si gambar

Oiya, khusus untuk Img, dia nggak pake penutup seperti kawan kawannya yg lain yaa, selain tag img juga banyak tag yg tidak pakai penutup, Nanti akan mimin bahas! :sunglasses:

### Let's Ngoding!

langsung praktek aja ya, biar lgsg melekat di kepala :joy:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Belajar HTML Links Digitalkode</title>
  </head>
  <body>
    <h1>Selamat Datang Di Situs Digitalkode!</h1>
    <p>Tempat berbagai macam <b>tutorial</b> <i>pemograman</i> secara <u>gratis!</u></p>
    <!-- Contoh Image dengan source absolute -->
    <img src="https://merahputih.com/media/e0/70/ac/e070acbda43f263825508f4645219bef.jpg" alt="Logo NFS Heat" width="600" height="600">
    <!-- membuat baris baru -->
    <br>
    <!-- Contoh Image yang gagal ditampilkan namun berhasil di cover oleh ALT -->
    <img src="LinkYangSalah" alt="Logo Digitalkode" width="600" height="600">
  </body>
</html> 
```

nah, itu kurang lebih example dari penggunaan HTML Image.

### Output

Setelah kita menuliskan coding diatas, akan didapatkan hasil seperti berikut:\
    <h1>Selamat Datang Di Situs Digitalkode!</h1>
    <p>

Tempat berbagai macam <b>tutorial</b> <i>pemograman</i> secara <u>gratis!</u></p>
    <img src="https://merahputih.com/media/e0/70/ac/e070acbda43f263825508f4645219bef.jpg" alt="Logo NFS Heat" width="600" height="600">

<br>

<img src="LinkYangSalah" alt="Logo Digitalkode" width="600" height="600">

Jika gambar sudah muncul, Selamat! kalian telah berhasil belajar mengenai salah satu unsur terpenting di HTML.

Silahkan *Oprek* Coding Sesuka kalian, karna semakin kalian *ngoprek* Maka akan semakin jago juga kalian!

Demikian tutorial dari mimin today! terimakasih sudah mengikuti Tutorial HTML 5 Series #7 digitalkode!

See you!

**\#keepLearning_keepNgoding**