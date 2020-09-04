---
layout: blog
title: "PHP SERIES #5 : Script PHP dalam Dokumen HTML"
authors:
  - Ridwan
draft: false
date: 2020-08-31T06:24:03.095Z
thumbnail: /images/uploads/php-series-5.png
tags:
  - PHP
  - SERIES
---
Hallo sobat digitalkode, lanjut lagi nih mengenai PHP, di pertemuan kemarin kita sudah tau ya error di PHP, sekarang kita akan membahas mengenai script PHP yang ada dalam dokumen HTML..

Sobat digitalkode, script PHP juga dapat disisiplan kedalam dokumen HTML lohh.. berikut ini contohnya :

```php
<html>
  <head>
    <title> Halaman PHP pertamaku </title>
   </head>
   <body>
     <h1> Script PHP dalam HTML </h1>
     <?php
     echo "Hello Digitalkode";
     echo "Hello Digitalkode";
     echo "Hello Digitalkode";
     echo "Hello Digitalkode";
     ?>
  </body>
</html>
```

Karena dalam dokumen HTML diatas terdapat script PHP, maka script diatas nantinya juga harus disimpan menggunakan ekstensi **\*.php** yaa.. Bukan **\*.html** atau **\*.htm**.

coba sobat tulis script diatas dan simpan dengan nama **test3.php**. Letakan script kedalam folder **test**. sebelumnya buat terlebih dahulu folder test didalam folder htdocs, dan untuk menjalankan script diatas panggil dengan url **http://localhost/test/test3.php**.

Kita juga bisa menyisipkan lebih dari satu script PHP, seperti ini nih contohnya :

```php
<html>
  <head>
    <?php echo "<title> Halaman PHP Pertamaku </title>" ?>
  </head>
  <body>
    <h1> Script PHP dalam HTML </h1>
    
    <?php
    echo "<p> Paragraf ini menggunakan script PHP </p>";
    echo "<p> Paragraf ini menggunakan script PHP </p>";
    ?>
    
    <p> Paragraf ini tidak menggunakan script PHP </p>
    <p> Paragraf ini tidak menggunakan script PHP </p>
    
  </body>
</html>
```

Simpan file diatas dengan mana **test4.php** dan lihat hasilnya di browser.

Sampai sini dulu series kali ini, series selanjutnya akan membahas mengenai penggunaan variabel dalam PHP...

sekian dan terimakasih.