---
layout: blog
title: "HTML 5 SERIES #8 : HTML Lists"
authors:
  - Fliw
draft: false
date: 2020-08-26T14:00:43.083Z
thumbnail: /images/uploads/instagram-post-2-5-.jpg
tags:
  - HTML
  - SERIES
---
Halo Sobat Digitalkode!, kembali lagi sama mimin, kali ini mimin akan bahas tentang HTML Lists. Dari judulnya udah ketauan nih, pasti isinya tentang *Daftar*, Yoi Masbro! isinya emang tentang daftar, ketika kalian buat Daftar di HTML pasti ada salah satu yg *barbar* Diantara kalian dengan menuliskan seperti ini :

```html
<h3>list pesanan bu tedjo</h3>
<p> -Jahe </p>
<p> -kacang Panjang </p>
<p> -Lengkuas </p>
```

Dan akhirnya akan mendapat output seperti ini:

<hr><hr>

<h3>list pesanan bu tedjo</h3>
<p> -Jahe </p>
<p> -kacang Panjang </p>
<p> -Lengkuas </p>

<hr><hr>

work sih, tapi...

aslinya nih, HTML sangat gak merekomendasikan kalian untuk menulis daftar *barbar* seperti itu.

si HTML ini kasih 2 opsi buat bikin Lists, yaitu :

* **OL** (Ordered Lists)
* **UL** (Unordered Lists)

### Si OL dan si UL

Langsung bahas ya.

> OL / Ordered Lists adalah bentuk daftar yang berisi urutan daftar, seperti 1,2,3 atau A,B,C bahkan angka romawi seperti i,ii,iii,iv.

sedangkan kawannya :

> UL / Unordered Lists adalah bentuk daftar yang berisi daftar namun tidak berurutan, dan menggunakan simbol untuk penomorannya. seperti kotak,bulat dll

### Sintaksis List OL dan UL

kalian langsung saja tulis kode dibawah ini :

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Belajar HTML Lists Digitalkode</title>
  </head>
  <body>
    <h1>Selamat Datang Di Situs Digitalkode!</h1>
    <p>Tempat berbagai macam <b>tutorial</b> <i>pemograman</i> secara <u>gratis!</u></p>
    <h3> Pesanan bu Tedjo </h3>
    <!-- tag ul diberikan untuk menandai tipe dari Lists -->
    <ul>
      <!-- tag li adalah isi satuan dari list yang dibuat -->
      <li>Jahe</li>
      <li>Kacang Panjang</li>
      <li>Lengkuas</li>
    </ul>
    
    <!-- tag ol diberikan untuk menandai tipe dari Lists -->
    <ol>
      <!-- tag li adalah isi satuan dari list yang dibuat -->
      <li>Kunyit</li>
      <li>Gula</li>
      <li>Garam</li>
    </ol>
  </body>
</html> 
```

### Output

berikut output ketika kode diatas dijalankan : 

<hr><hr>

<h1>Selamat Datang Di Situs Digitalkode!</h1>
    <p>Tempat berbagai macam <b>tutorial</b> <i>pemograman</i> secara <u>gratis!</u></p>
    <h3> Pesanan bu Tedjo </h3>
    <!-- tag ul diberikan untuk menandai tipe dari Lists -->
    <ul>
      <!-- tag li adalah isi satuan dari list yang dibuat -->
      <li>Jahe</li>
      <li>Kacang Panjang</li>
      <li>Lengkuas</li>
    </ul>
    <ol>
      <!-- tag li adalah isi satuan dari list yang dibuat -->
      <li>Kunyit</li>
      <li>Gula</li>
      <li>Garam</li>
    </ol>

<hr><hr>

secara default untuk UL akan diberi bentuk penomoran titik bulat, dan untuk OL akan diberi angka.

### Tapi min..

Kalau UL hanya titik bulat dan OL hanya angka, kata mimin tadi bisa penomoran abc, romawi dll? gimana caranya?

EZ kok, **Si UL** ini punya atribut yang bernama *type* yang dimana dia bisa diisi 4 nilai, yaitu :

* Square untuk Kotak
* Circle untuk bulat
* none untuk kosong
* disc untuk piringan

Kalau **si OL** Bagaimana? sama seperti UL, namun bedanya si OL ini cuma punya 2 nilai, yaitu :

* A untuk A,B,C dll / a untuk a,b,c dll
* I untuk I,II,III dll / i untuk i,ii,iii dll

Sini mimin kasih codingnya :

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Belajar HTML Lists Digitalkode</title>
  </head>
  <body>
    <h1>Selamat Datang Di Situs Digitalkode!</h1>
    <p>Tempat berbagai macam <b>tutorial</b> <i>pemograman</i> secara <u>gratis!</u></p>
    <h3> Pesanan bu Tedjo </h3>
    <!--Unordered Lists-->
    <h3> UL Square </h3>
    <ul type="square">
      <li>Jahe</li>
      <li>Kacang Panjang</li>
      <li>Lengkuas</li>
    </ul>
    <h3> UL Circle </h3>
    <ul type="circle">
      <li>Jahe</li>
      <li>Kacang Panjang</li>
      <li>Lengkuas</li>
    </ul>
    <h3> UL None </h3>
    <ul type="none">
      <li>Jahe</li>
      <li>Kacang Panjang</li>
      <li>Lengkuas</li>
    </ul>
    <h3> UL Disc </h3>
    <ul type="disc">
      <li>Jahe</li>
      <li>Kacang Panjang</li>
      <li>Lengkuas</li>
    </ul>
    
    <!--Ordered Lists-->
    <h3> OL Kapital </h3>
    <ol type="A">
      <li>Kunyit</li>
      <li>Gula</li>
      <li>Garam</li>
    </ol>
    <h3> OL Kecil </h3>
    <ol type="a">
      <li>Kunyit</li>
      <li>Gula</li>
      <li>Garam</li>
    </ol>
    <h3> OL Romawi Besar </h3>
    <ol type="I">
      <li>Kunyit</li>
      <li>Gula</li>
      <li>Garam</li>
    </ol>
    <h3> OL Romawi Kecil </h3>
    <ol type="i">
      <li>Kunyit</li>
      <li>Gula</li>
      <li>Garam</li>
    </ol>
  </body>
</html> 
```

Berikut hasilnya :

<hr><hr>

<h1>Selamat Datang Di Situs Digitalkode!</h1>
    <p>Tempat berbagai macam <b>tutorial</b> <i>pemograman</i> secara <u>gratis!</u></p>
    <h3> Pesanan bu Tedjo </h3>
    <!--Unordered Lists-->
    <h3> UL Square </h3>
    <ul type="square">
      <li>Jahe</li>
      <li>Kacang Panjang</li>
      <li>Lengkuas</li>
    </ul>
    <h3> UL Circle </h3>
    <ul type="circle">
      <li>Jahe</li>
      <li>Kacang Panjang</li>
      <li>Lengkuas</li>
    </ul>
    <h3> UL None </h3>
    <ul type="none">
      <li>Jahe</li>
      <li>Kacang Panjang</li>
      <li>Lengkuas</li>
    </ul>
    <h3> UL Disc </h3>
    <ul type="disc">
      <li>Jahe</li>
      <li>Kacang Panjang</li>
      <li>Lengkuas</li>
    </ul>
    <h3> OL Kapital </h3>
    <ol type="A">
      <li>Kunyit</li>
      <li>Gula</li>
      <li>Garam</li>
    </ol>
    <h3> OL Kecil </h3>
    <ol type="a">
      <li>Kunyit</li>
      <li>Gula</li>
      <li>Garam</li>
    </ol>
    <h3> OL Romawi Besar </h3>
    <ol type="I">
      <li>Kunyit</li>
      <li>Gula</li>
      <li>Garam</li>
    </ol>
    <h3> OL Romawi Kecil </h3>
    <ol type="i">
      <li>Kunyit</li>
      <li>Gula</li>
      <li>Garam</li>
    </ol>

<hr><hr>

### Ingin Lists didalam Lists?

List didalem list? bisa dong!, teknik ini disebut : **Nested Lists,** Kamu bisa tambahkan struktur list seperti ini :

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Belajar HTML Lists Digitalkode</title>
  </head>
  <body>
    <h1>Selamat Datang Di Situs Digitalkode!</h1>
    <p>Tempat berbagai macam <b>tutorial</b> <i>pemograman</i> secara <u>gratis!</u></p>
    <h3>Tipe Laptop Gaming ASUS</h3>
    <ol>
      <li>ROG
        <ul>
          <li>ROG STRIX G </li>
          <li>ROG Zepyrus </li>
        </ul>
      </li>
      <li>TUF
        <ul>
          <li>TUF FX504</li>
          <li>TUF FX505</li>
        </ul>
      </li>
    </ol>
  </body>
</html> 
```

hasilnya seperti ini :

<hr><hr>

<h1>Selamat Datang Di Situs Digitalkode!</h1>
    <p>Tempat berbagai macam <b>tutorial</b> <i>pemograman</i> secara <u>gratis!</u></p>
    <h3>Tipe Laptop Gaming ASUS</h3>
    <ol>
      <li>ROG
        <ul>
          <li>ROG STRIX G </li>
          <li>ROG Zepyrus </li>
        </ul>
      </li>
      <li>TUF
        <ul>
          <li>TUF FX504</li>
          <li>TUF FX505</li>
        </ul>
      </li>
    </ol>

<hr><hr>

Demikian tutorial Cara membuat Lists HTML di Series HTML 5 Digitalkode! Terimakasih telah mengikuti tutorial ini!

**\#KeepLearning_KeepNgoding**