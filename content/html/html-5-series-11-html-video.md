---
layout: blog
title: "HTML 5 SERIES #11 : HTML Video"
authors:
  - Fliw
draft: true
date: 2020-09-02T06:27:12.730Z
thumbnail: /images/uploads/instagram-post-2-8-.jpg
tags:
  - HTML
  - SERIES
---
Halo Sobat Digitalkode, kembali lagi dengan mimin di materi sebelum akhir dalam seri HTML Series ke #11, gak terasa yaa, kita udah mau selesai di akhir series ini, seperti judulnya kali ini kita akan membahas tentang Video. jadi HTML selain dia bisa menampilkan gambar, dia pun dapat menampilkan Video, lengkap dengan pemutar Videonya. Canggih Yaa! :satisfied:

### sintaksis HTML Video

HTML video dapat kalian tambahkan di HTML dengan tag `<video>` dan tag `<video>` mempunyai anak yaitu tag `<source>` dan tag <source> ini mewajibkan 2 atribut yaitu :

* `src `adalah atribut untuk source.
* `type` adalah atribut untuk tipe atau format video.

sehingga sintaksis lengkap untuk HTML Video adalah sbb:

```html
<video controls>
  <source src="videomu.mp4" type="video/mp4">
  Maaf, Browsermu tidak mendukung.
</video>
```

jika tag video tidak dapat diputar maka akan muncul tulisan "maaf, browsermu tidak mendukung"