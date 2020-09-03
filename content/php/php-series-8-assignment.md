---
layout: blog
title: "PHP SERIES #8 : Assignment"
authors:
  - Ridwan
draft: true
date: 2020-09-02T01:14:39.420Z
thumbnail: /images/uploads/php-series-8.png
tags:
  - PHP
  - SERIES
---
Hallo sobat digitalkode, kembali lagi nih di series terfavorit hehe, diseries kali ini saya akan membahas tentang assigment nih, ada yg sudah tau assigment itu apa? kalau belum kebetulan nih, pantengin terus yuk series ini.

## Assignment

Seperti yang sudah dibahas pada series PHP sebelumya, bahwa proses pemberian suatu nilai kepada suatu variabel diistilahkan **assignment.** Kita lihat kembali yuk script yang sudah kita buat sebelumnya

```
<?php

$teks = "Hello World!"; //statement 1
$sebuah_bilangan = 4; //statement 2
$bilanganYangLain = 8.567; //statement 3
$teks2 = $teks; //statement 4

echo $teks;
echo "<br />" . $sebuah_bilangan;
echo "<br />Isi dari variabel \$bilanganYangLain : " . $bilanganYangLain;
echo "<br />Isi dari variabel \$teks2 adalah : " . $teks2;
?>
```

Statement yang saya kasih komentar itu merupakan contoh assigment. apakah proses assignment hanya berupa bentuk tersebut? yaitu $namaVariabel = nilai; saja ? ohh tenyata tidak hanya bentuk tersebut. kita juga bisa membuat proses assignment kedalam bentuk lain, misalnya :

```
<?php
$a = ($b = 4) + 5;
?>
```

Wah... apa tuh maksudnya? Statement tersebut artinya: Nilai $a adalah 9, diperoleh dari $b + 5, dimana $b diassign dengan 4. Dengan demikian sebuah statement tersebut langsung membuat 2 buah proses assignment, yoatu assignment untuk variabel $a dan $b sekaligus.

Untuk membuktikan apakah benar nilai $a sekarang 9 dan $b adalah 4, coba tampilkan ke browser nilai kedua variabel tersebut. Bisa kan?

> **Ada catatan nih :**
>
> Proses assignment memiliki prinsip timpa-menimpa. Hah? kok lucu bgt istilahnya, maksudnya adalah, misalkan awalna kita assign suatu variabel dengan nilai tertentu, katakanlah X. selanjutnya vaiabel tadi kita assign lagi dengan nilai yang baru, misalkan Y, maka nilai X yang sebelumnya tersimpan akan hilang, ibaratnya ditimpa dengan nilai Y.

Contoh : coba jalankan script berikut ini :

```
<?php
$a = 10;
$a = 9;
echo "Nilai variabel \$a adalah : " . $a;
?>
```

Sebelum sobat lihat hasilnya di browser, coba menurut sobat dgitalkode akan mincul brapa di browser? terus bandingkan perkiraan sobat dengan hasil yang ada di browser.

> **Catatan:**
>
> Wahh ada catatan lagi nih. Perlu kita tahu, bahwa jangan pedulikan tipe data dari nilai yang diassign ke variabelnya. secara otomatis tipe data variabel akan menyesuaikan tipe data dari nilai yang diassign-kan.. Bingung yaa..?
>
> Jadi maksudnya gini, misalkan awalnya kita assign suatu variabel dengan nilai X yang berupa bilangan bulat. Maka dalam hal ini, tipe data variabel tersebut juga bulangan bulat (integer). Selanjutnya kita agak assign lagi variabel tersebut dengan nilai berupa string, katakanlah Y. Maka secara otomatis tipe data variabel ini akan menjadi string. Tipe data integer sebelumnya tidak berlaku lagi.

Sebagai gambaran, coba jalankan script berikut

```phtml
<?php

$a = 10;

// mengecek apakah variabel $a bertipe string atau bukan
// jika $a string, maka tampilkan ‘$a bertipe string’
// jika $a bukan string, maka tampilkan ‘$a bukan string’

if (is_string($a)) echo "\$a bertipe string<br>";
else echo "\$a bukan string<br>";
$a = "Pemrograman PHP is OK";

// mengecek apakah variabel $a bertipe string atau bukan
// jika $a string, maka tampilkan ‘$a bertipe string’
// jika $a bukan string, maka tampilkan ‘$a bukan string’

if (is_string($a)) echo "\$a bertipe string<br>";
else echo "\$a bukan string<br>";

?>
```

Mohon hiraukan saja statement *if()* dan *is_srting()*diatas oke.

Ketika $a diassign dengan 10, maka script akan memunculkan **$a bukan string**. setelah $a ini diassign kembali dengan nilai suatu string, maka script berikutnya memunculkan **$a bertipe string**.

Sampai disini penjelasan tentang assignment sobat, jika ada yang kurang faham boleh di ketik dikolom komentarnya..

Nahh di series PHP berikutnya saya akan menjelaskan mengenai operator aritmatika nihh.. wahhh penasaran gak tuh? ikuti terus series PHP berikutnya.

Sekian series kali ini dan terimakasih.