---
layout: blog
title: "PHP SERIES #11 : POST dan GET Request"
authors:
  - Ridwan
draft: true
date: 2020-09-08T23:49:51.609Z
thumbnail: /images/uploads/php-series-11.png
tags:
  - PHP
  - SERIES
---
Hallo sobat digitalkode, kembali lagi nih dengan saya diseries terfavorit yaitu series PHP. Sekarang saya akan menjelaskan mengenai POST dan GET nih, ikuti terus yuk di series ini.

Pada series PHP sebelumnya kita sudah tau mengenai proses assignment. Sobat dapat mengassign suatu nilai kepada suatu variabel. Nahh sekarang kita coba kembangkan sedikit mengenai assignment, sebelunya kita lihat script berikut : 

```
<?php
  $bilangan1 = 2;
  $bilangan2 = 6;
  $jumlah = $bilangan1 + $bilangan2;
  
  echo "Hasil penjumlahannya adalah ".$jumlah;
?>
```

Pada script diatas kita hanya bisa menjumlahkan bilangan 2 dan 6. jika kita ingin menjumlahkan nilai yang lain, kita harus mengedit scripnya dan mengubah kedua bilangan. Sekarang bagaimana kalai kita kembangakan scriptnya agar bisa menjumlahkan bilangan bilangan lain tanpa harus mengubah scriptnya agar lebih interaktif.

Agar bisa melakukan hal diatas, Sobat terlebih dahulu harus Memahami Post dan Get Request.

### POST Request

Post Request adalah proses mengirim data (submit) melalui form yang berasal dari HTML. Karena PHP adalah scripting atau bahasa program, maka PHP bisa digunakan untuk menerimandata hasil submit tersebut. Data yang diterima nantinya bisa diproses dalam script PHP.

Untuk meneima data dari proses submit form dalam PHP, kits gunakan statement assignment berikut ini.

**$namaVariabel = $_POST\['nama komponen dalam form'];**

Dalam hal ini, nama variabel boleh sama atau tidak sama dengan nama komponen dalam form. Tapi.... Sangat disarankan, sobat membuat nama variabel yang berbeda dengan nama komponen form nya, untuk mencegah hal hal yang tidak diingainkan, misalnya hacking.

Perhatikan contoh berikut ini :

Dalam contoh ini, kita akan mencoba membuat form HTML yang di dalamnya terdapat dua komponen input 2 bilangan.

**input.html**

```phtml
<html>
  <head>
    <title>Contoh Request POST</title>
  </head>
<body>
  <h1>Input dua bilangan</h1>
    <form method="post" action="proses.php">
      Masukkan Bilangan 1 <input type="text" name="bil1" /><br />
      Masukkan Bilangan 2 <input type="text" name="bil2" /><br />
      <input type="submit" name="submit" value="Submit" />
    </form>
</body>
</html>
```

Pada form diatas, kita bisa melihat bahwa terdapat dua buah komponen dalam form yang masing-masing memiliki nama **'bil1'** dan **'bil2'** coba perhatikan attrubute **name="..."** keduanya kebetuan merupakan komponen form berbentuk text box. Nah.. Selanjutnya perhatikan attribut **action="proses.php"**. Apa sih maksud dari attribut tersebut? Attribut ini memiliki arti bahwa apabila tombol submit tersebut diklik, maka data yang diisikan pada form nantinya akan dikirim dan dioleh pada script yang bernama **proses.php**.

Sekarang kita coba buat script proses.php nya, dalam script ini kita akan membaca nilai yang diimputkan dan menampilkan ke browser.

**proses.php**

```phtml
<?php
  $bilangan1 = $_POST['bil1'];
  $bilangan2 = $_POST['bil2'];
?>

<html>
  <head>
     <title>Contoh Request POST</title>
  </head>
<body>
  <h1>Input dua bilangan</h1>
<?php
  echo "<p>Anda telah memasukkan bilangan pertama = ".$bilangan1. "</p>";
  echo "<p>Anda telah memasukkan bilangan kedua = ".$bilangan2. "</p>";
?>
</body>
</html>
```

Srlain cara di atas (menyimpan dari $_POST ke variabel tertentu) sobat juga bisa langsung menggunakan $_POST untuk diproses tanpa menyimpan di variabel. Perhatikan contoh berikut:

**proses.php**

```phtml
<html>
  <head>
    <title>Contoh Request POST</title>
  </head>
<body>
  <h1>Input dua bilangan</h1>
<?php
  echo "<p>Anda telah memasukkan bilangan pertama = ".$_POST['bil1']. "</p>";
  echo "<p>Anda telah memasukkan bilangan kedua = ".$_POST['bil2']. "</p>";
?>
</body>
</html>
```

Sekarang kita perhatikan kedua contoh diatas. Pada contoh pertama kita buat script proses.php hanya sekedar menampilkan dua bilagan yang diinputkan pada form . selanjutnya kita buat script berikutnya, misalkan masih tettap sama filenya yaitu proses.php tapi digunakan untuk menampilkan hasil penjumlahan dua bilangan yang diiputkan tadi.

Perhatikan script berikut 

**proses.php**

```phtml
<?php
  $bilangan1 = $_POST['bil1'];
  $bilangan2 = $_POST['bil2'];
  $jumlah = $bilangan1 + $bilangan2;
?>
<html>
  <head>
    <title>Contoh Request POST</title>
  </head>
<body>
  <h1>Input dua bilangan</h1>
<?php
  echo "<p>Anda telah memasukkan bilangan pertama = ".$bilangan1. "</p>";
  echo "<p>Anda telah memasukkan bilangan kedua = ".$bilangan2. "</p>";
  echo "<p>Hasil penjumlahannya adalah ".$jumlah. "</p>";
?>
</body>
</html>
```

### GET Request

Sobat digitalkode, jika POST request adalah proses merequest data melalui form, maka GET rqquest melalui URL.

Terkadang kita jika browsing di internet, kita menemukan URL atau link yang berbentuk http://situs.com/script.php?**a=4&b=1**

Coba sobat perhatikan URL yang saya kasih bold. Bagian tersebut dinakan parameter. Konsep GET Request pada prinsipnya pirip dengan POST. Pada contoh URL diatas maksudnya adalah mensubmit atau mengirim data ke script bernama script.php. dan yang dikirimadalah nilai a=4 dan b=1. Nilai yang dikirim tersebut nantinya akan dijadikan input pada proses yang terjadi di script.php

Sekarang, gimana cara membaca input dari GET request tersebut? caaranya adalah menggunakan $_GET\['nama parameter'];

Saya akan berikan contoh untuk menjumlahkan dua bilangan yang diinput melalui GET request.

**proses.php**

```phtml
<?php
  $bilangan1 = $_GET['bil1'];
  $bilangan2 = $_GET['bil2'];
  $jumlah = $bilangan1 + $bilangan2;
?>
<html>
<head>
    <title>Contoh Request GET</title>
</head>
<body>
  <h1>Input dua bilangan</h1>
<?php
  echo "<p>Anda telah memasukkan bilangan pertama = ".$bilangan1. "</p>";
  echo "<p>Anda telah memasukkan bilangan kedua = ".$bilangan2. "</p>";
  echo "<p>Hasil penjumlannya adalah ".$jumlah. "</p>";
?>
</body>
</html>
```

Terus gimana cara menjumlahkan dua bilangan menggunakan script diatas yang menggunakan GET request? caranya cukup mengetikan URL begini :

http://localhost/proses.php?**bil1**=40&**bil2**=40

Tanda (&) digunakan untuk memisahkan antar parameter.

Sampai sini dulu series kali ini, di series berikutnya saya akan menjelaskan tentang statemen. pantengin terus web digitalkode pada series PHP.

Sekian series kali ini dan terimakasih