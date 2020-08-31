---
layout: blog
title: "PHP SERIES #3 : Error pada PHP"
authors:
  - Ridwan
draft: true
date: 2020-08-31T03:14:06.438Z
thumbnail: /images/uploads/php-series-4.png
tags:
  - PHP
  - SERIES
---
Hallo sobat digitalkode, ketemu lagi nih di series PHP. Sekarang saya akan membicarakan mengenai error pada PHP nih, ikutin terus yuk.

Sebelumnya kita udah bikin script PHP sebagai berikut 

```
<?php
echo "Hello Digitalkode";
echo "Hello Digitalkode";
echo "Hello Digitalkode <br />";
echo "Hello Digitalkode <br />";
?>
```

Nahh, sekarang kita akan lihat misalkan ada kesalahan perintah atau sintaks dalam kode PHPnya. Misalkan ada perintah echo yang salah dalam penulisannya seperti script berikut :

```
<?php
ech "Hello World";
echo "Hello World";
echo "Hello World <br />";
echo "Hello World <br />";
?>
```

Jika script diatas dijalankan di browser, makan akan muncul pesan error :

**Parse error**: syntax error, unexpected '"Hello World"' (T_CONSTANT_ENCAPSED_STRING) in **C:\xampp\htdocs\test.php** on line **2**

Dari pesan tersebut terdapat kesalahan pada baris ke-3. dengan demikian sobat harus segera memperbaikinya. 

Udah bener kan? Nahh kalau udah di perbaiki disini saya ada beberapa pertanyaa nih buat sobat digitalkode. jawab dalam hati aja yaa...

1. Apa fungsi dari perintah echo ?
2. Kenapa teks "Hello Digitalkode" yang kedua terletak satu baris dengan teks "Hello Digitalkode" yang pertama?
3. Kenapa teks "Hello Digitalkode" yang ketiga dan ke empat bisa pindah baris ?
4. Bisakah sobat Digitalkode membuat script PHP untuk menampilkan teks dibawah ini pada browser, dengan menggunakan perintah echo saja.

   Hello Digitalkode 1

   Hello Digitalkode 2

   Hello Digitalkode 3

   Simpat script kalian dengan nama **test2.php**  setelah itu panggil dengan nama url http://localhost/test2.php