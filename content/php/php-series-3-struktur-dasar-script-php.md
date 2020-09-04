---
layout: blog
title: "PHP SERIES #3 : Struktur Dasar Script PHP"
authors:
  - Ridwan
draft: false
date: 2020-08-31T02:17:35.278Z
thumbnail: /images/uploads/php-series-3.png
tags:
  - PHP
  - SERIES
---
Hallo sobat digitalkode, ketemu lagi nih di series ke 3 nih mengenai PHP. Sekarang kita akan membahas mengenai struktur dasar script PHP, wahh udah mau ngoding aja nih, lansung aya yuk.

Kode-kode PHP dituliskan diantaranya :

```
<?php
...
...
...
?>
```

atau

```
<?
..
..
..
?>
```

Diantara kedua aturan diatas, saya menyarankan untuk pake yang pertama, kenapa yaa? Karena tidak semua web server mengenali struktur yang kedua.

**Menyimpan File PHP**

Gimana sih cara menyimpan file PHP itu? Scrip PHP yang dibuat harus disimpan dalam ekstensi **\*.php**. Kalau tidak, maka script tidak bisa dijalan kan dan hanya dianggap teks biasa saja.  Untuk menyimpan file PHP ini saya sudah jelaskn di series [sebelumnya](https://www.digitalkode.com/php/php-series-2-konfigurasi-apache-php-dan-mysql/).

Nahh sekarang saya mau ngajak sobat digitalkode buat ngoding nih, Buka teks editor kesukaan kalian, selanjutnya ketik script berikut :

```
<?php 

echo "Hello Digitalkode";
echo "Hello Digitalkode";
echo "Hello Digitalkode <br/>";
echo "Hello Digitalkode <br/>";

?>
```

Simpan script PHP tersebut dengan nama **test.php** dan simpan di folder htdoct yang di folder xampp, untuk menjalankan script tersebut, kita buka web browser kesukaan kalian, selanjutnya panggil script diatas dengan **http://localhost/test.php** !

Kita bahas dulu yuk script diatas:

Script PHP di awali dengan **<?php** dan diakhiri dengan **?>** ini sudah saya jelaskan diatas. Sekarang kalian perhatikan titik koma diakhir setiap baris, titik koma tsb menjunjukan kita mengakhiri perintah, kalau kita gak pake titik koma maka script kita akan error..

Sampai sini dulu saya menjelaskan mengenai struktur dasar php, diseries berikutnya saya akan menjelaskan mengenai error pada php..

Sekian terimakasih !