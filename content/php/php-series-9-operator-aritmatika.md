---
layout: blog
title: "PHP SERIES #9 : Operator Aritmatika"
authors:
  - Ridwan
draft: false
date: 2020-09-03T16:19:41.778Z
thumbnail: /images/uploads/php-series-9.png
tags:
  - PHP
  - SERIES
---
Hallo sobat digitalkode, kembali lagi di series terfavorit. Sekarang saya akan menjelaskan mengenai operator aritmatika nihh.. penasaran? ikuti terus yukk

### Operator Aritmatika

Dalam bahasa pemrograman secara umum, operator digunakan untuk memanipulasi atau melakukan proses perhitungan pada suatu nilai. Ada beberapa macam operator yang bisa digunakan, diantaranya operator aritmatik, operator penggabungan string dan operator logika.

Untuk operator penggabungan string kita sudah pernah gunakan di series PHP sebelumnya yaitu menggunakan tanda titik atau dot ( . ). Operator logika akan kita bahas nanti di series PHP kedepannya yaa... karena operator logika bersangatan dengan statement kontrol. Sekarang kita fokus ke operator aritmatik yaa.

> Operator aritmatik digunakan untuk operasi perhitungan yang melibatkan nilai berupa bilangan. Namun bisa pula diberikan pada tring, namun string yang berupa bilangan.

Ada beberapa macam operator aritmatik, diantaranya adalah :

![](/images/uploads/operator.png "Operator")

Sekarang saya akan memberikan contoh scriptnya nih :

```
<?php
  $penjumlahan = 2 + 4;
  $pengurangan = 6 - 2;
  $perkalian = 5 * 3;
  $pembagian = 15 / 3;
  $modulus = 5 % 2;
  
  echo "Hasil dari : 2 + 4 = " . $penjumlahan."<br>";
  echo "Hasil dari : 6 - 2 = " . $pengurangan."<br>";
  echo "Hasil dari : 5 * 3 = " . $perkalian."<br>";
  echo "Hasil dari : 15 / 3 = " . $pembagian."<br>";
  echo "Hasil dari : 5 % 2 = " . $modulus;
?>
```

Sobat digitalkode faham kan mengenai script diatas? Tingal jalankan dan lihat hasilnya..

### Tingakat Presedensi

Sobat, harap hati-hati dalam menggunakan operator aritmatik, terutama jika kita menggunakan lebih dari satu opertor yang berbeda dalam satu statement perhitungan, contohnya script berikut :

```
<?php
  $a = 3 + 4 * 5 - 6;
  
  echo $a;
?>
```

Apabila script diatas dijalankan, maka hasil yang akan muncul bukan 29, tapi 27. kenapa? kok gitu? Karena operasi aritmatik yang dikerjakan terlebih dahulu adalah perkalian ( * ). kenapa? Perkalian memiliki tingakat presedensi yang tinggi daripada + dan -. Setelah perkalian terus kemana? setelah perkalian terus ke + atau -. keduanya memiliki tingakt presedensi yang sama. Nahh kalau gitu, yang dikerjakan dahulu adalah yang terletak di paling kiri dulu yaitu +.

Sekarang, bagaimana dengan operator pembagi ( / ) ? Operator ini memiliki tingkat presedensi yang sama dengan ( \* ). Keduanya memiliki tingakt presedensi yang lebih tinggi daripada + dan -. Operator modulus ( % ) juga demikian, sama levelnya dengan \* dan /.

Teruss.... dari script diatas, misalkan kita ingin yang dikerjakan itu yang penjumlahan dulu, gimana tuh? Waktu SD masih inget kan waktu pelajaran matematika, kita berikan tanda kurung.

```
<?php
  $a = (3 + 4) * 5 - 6;
  
  echo $a;
?>
```

Faham ya...? semoga faham yaa..

Sampai sini dulu series kali ini, di series berikutnya saya akan menjelaskan tentang kombinasi operatir aritmatik dan assignment. pentengin terus web digitalkode di series PHP...

sekian series kali ini, dan terimakasih.