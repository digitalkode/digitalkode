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

Seperti yang sudah dibahas pad series PHP sebelumya, bahwa proses pembelrian suatu nilai kepada suatu variabel diistilahkan **assignment.** Kita lihat kembaliyuk script yang sudah kita buat sebelumnya

```
<?php

$teks = "Hello World!";
$sebuah_bilangan = 4;
$bilanganYangLain = 8.567;
$teks2 = $teks;

echo $teks;
echo "<br />" . $sebuah_bilangan;
echo "<br />Isi dari variabel \$bilanganYangLain : " . $bilanganYangLain;
echo "<br />Isi dari variabel \$teks2 adalah : " . $teks2;
?>
```

Statement yang saya blok tebal itu merupakan contoh assigment. apakah proses assignment hanya berupa bentuk tersebut? yaitu $namaVariabel = nilai; saja ? ohh tenyata tidak hanya bentuk tersebut. kita juga bisa membuat proses assignment kedalam bentuk lain, misaalnya :