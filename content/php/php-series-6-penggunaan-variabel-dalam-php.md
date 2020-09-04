---
layout: blog
title: "PHP SERIES #6 : Penggunaan Variabel Dalam PHP"
authors:
  - Ridwan
draft: false
date: 2020-09-01T02:35:31.884Z
thumbnail: /images/uploads/php-series-6.png
tags:
  - PHP
  - SERIES
---
Hallo sobat digitalkode, ketemu lagi nih di series terfavorit hehe. Sekarang kita akan membahas tentang variabel, ikuti terus yuk..

Variabel pemrograman digunakan untuk menyimpan suatu nilai, dan suatu saat nilai tersebut diperlukan kembali untuk proses perhitungan, maka cukup memanggil nama variabel tersebut.

Dalam PHP ini, nama variabel ditandai dengan tanda dolar ($). Berikut ini adalah sintaks untuk menyimpan nilai ke dalam suatu variable.

> $namaVariabel = nilai;

Ada gak sih peraturan buat bikin variabel ini? tentu ada dong, diantaranya:

* Nama variable harus diawali dengan huruf, atau bisa saja pake underscore ( _ )
* Nama variabel hanya boleh dituliskan dengan alpha numeric a-z, A-Z, 0-9 dan underscore
* Penamaan variable bersifat case sensitive yaitu antara huruf kapital dan huruf kecil berdeda
* Nama variabel yang terdiri lebih dari satu kata, dapat dipisahkan dengan underscore atau bisa dengan huruf kapital pada kata berikutnya

Berikut merupakan beberapa contoh menyimpan nilai kedalam variabel.

```php
<?php
  $teks = "Hello Digitalkode";
  $sebuah_bilangan = 4;
  $bilanganYangLain = 8.5;
  $tesk2 = $teks;
?>
```

Saya akan jelaskan tentang contoh variabel diatas:

* Perintah pertama digunakan untuk menyimpan nilai string kedalam variabel bernama $teks.
* Perintah kedua digunakan untuk menyimppan nilai berupa bilangan bulat 4 dedalam variabel bernama $sebuah_bilangan, dan variabel tersebut dipisah dengan tanda underscore.
* Perintah ketiga digunakan untuk menyimpan nilai berupa bulangan real 8.5 kedalam variabel bernama $bilanganYangLain, dan variabel tersebut dipisah dengan huruf kapital pada kata berikutnya.
* Perintah ke empat digunakan untuk enyimpan nilai yang tersimpan dalam variabel $teks, dalam hal ini juga "Hello Digitalkode ".

### Menampilkan Nilai Variabel

Sobat digitalkode, untuk menampilkan nilai yang telah tersimpan dalam variabel, kita gunakan echo.  Berikut ini contohnya:

```phtml
<?php
$teks = "Hello Digitalkode";
$sebuah_bilangan = 4;
$bilanganYangLain = 8.5;
$tesk2 = $teks;

echo $teks;
echo "<br/>".$sebuah_bilangan;
echo "<br/>Isi variabel \$bilanganYangLain adalah ".$bilanganYangLain;
echo "<br/>Isi variabel \$teks2 adalah ".$teks2;

?>
```

Keterangan :

* Tanda titik ( . ) digunakan untuk menggabungkan string. Dalam hal ini, nilai yang akan ditampilkan dianggap sebagai suatu string
* Tanda backslash ( \ ) didepan $ pada script diatas digunakan untuk menampilkan tanda $ kedalam browser. coba lihat efeknya jika tanda backslashnya di hapus

Sampai sini penjelasan saya mengenai variabel, semoga bermanfaat yaa, di pertemuan selanjutnya saya akan membahas mengenai komentar pada PHP, pantenginterus series PHP pada web Digitalkode ini yaa..

Sekian dan Terimakasih.