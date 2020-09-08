---
layout: blog
title: "PHP SERIES #10 : Operator Pre/Post Increment dan Secrement"
authors:
  - Ridwan
draft: false
date: 2020-09-07T02:09:16.752Z
thumbnail: /images/uploads/php-series-10.png
tags:
  - PHP
  - SERIES
---
Hallo sobat digitalkode, kembali lagi di web Digitalkode di series terfavorit nih... kali ini saya akan menjelaskan mengenai operator Increment dan Decrement. Sebenarnya apa sih operator Increment dan Decrement itu ? pantengin terus yuk..

Operator ini hanya digunakan pada proses increment maupun decrement tingkat 1.  Makdsudnya increment dipakai untuk menambah variabel sebanyak 1 angka, dan decrement digunakan untuk mengurangi variabel sebanyak 1 angka.

| **Contoh** | **Nama**       | **Hasil**                                          |
| ---------- | -------------- | -------------------------------------------------- |
| ++$a       | Pre-increment  | Menambah nilai $a sebanyak 1, lalu kirim nilai $a  |
| $a++       | Post-increment | Kirim nilai $a, lalu menambah nilai $a sebanyak 1  |
| \--$a      | Pre-decrement  | Mengurang nilai $a sebanyak1, lalu kirimi nilai $a |
| $a--       | Post-decrement | Kirim nilai $a, lalu mengurang nilai $a sebanyak 1 |

Contoh operator increment :

```php
<?php
$a = 1;
$a++;

echo "Nilai A yang baru adalah : ". $a;
?>
```

Contoh operator decrement:

```phtml
<?php
$a = 1;
$a--;

echo "Nilai A yang baru adalah : ". $a;
?>
```

Sampai sini penjelasan mengenai Operator Increment dan Decrement, Semoga bermanfaat, di series PHP berikutnya saya akan menjelaskan mengenai Post dan Get.. penasaran kan? pantengin terus webnya digitalkode..

sekian series kali ini, dan terimakasih