---
layout: blog
title: "PHP SERIES #2 : Konfigurasi Apache, PHP dan MySQL"
authors:
  - Ridwan
draft: false
date: 2020-08-27T13:55:24.132Z
thumbnail: /images/uploads/php-series-2.png
tags:
  - SERIES
  - PHP
---
Hallo sobat DK, ketemu lagi nih di series PHP, sekarang udah series ke 3 yaa, sekarang mimin akan bahas mengenai konfigurasi apache, PHP dan MySQL nihh.. get let's...

**Konfigurasi Apache**

File web dan script PHP yang nantinya sobat buat harus di letakan di direktory C:/XAMPP/htdocs. contoh nih sobat ingin membuat file yang dalamnya file web yang ada script PHPnya, nah.. agar file web dan script PHPnya bisa di akses melalui browser dan web server maka anda harus menyimpan file tersebut di dalam folder htdoct yang ada di XAMPP itu., tapi jangan lupa ya sob, sebelumnya kita buka dulu aplikasi XAMPP nya yaa yang kemaren udah sobat instal, setelah di buka tampil seperti gambar di bawah

![tidak ada gambar](/images/uploads/6.png "gambar 1")

Setelah itu klik star pada bagian Apache dan MySQL aja..

Kita bikin contoh buat melihat perubahannya,, kita buat folder dengan nama **latihan_php** difolder htdoct tadi setelah itu bikin file dengan nama **latihan1.php**,, buat menggunakan text editor favorit sobat yaa

```
<?php 
  echo "Selamat Datang di Digitalkode";
?>
```

Cara membukanya, sobat buka browser kemudian ketikan di url nya **http://localhost/latihan_php/latihan1.php** dan lihat hasilnya...

Akan muncul tulisan **Selamat Datang di Digitalkode** kan,, itu tadanya kita sudah berhsil membuat web dengan script PHP...

Sampai disini dulu ya mimin menjelaskan tentang konfigurasi Apache, PHP dan MySQL, semangat belajar sobat DK...

Di pertemuan selanjutnya kita akan membahas tentang Struktur Dasar Script PHP, semangat sobat DK...

Sampai jumpa...