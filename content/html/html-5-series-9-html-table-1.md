---
layout: blog
title: "HTML 5 SERIES #9 : HTML Table"
authors:
  - Fliw
draft: false
date: 2020-08-28T15:05:11.696Z
thumbnail: /images/uploads/instagram-post-2-6-.jpg
tags:
  - HTML
  - SERIES
---
Halo sobat Digitalkode! di tutorial kali ini, mimin akan menyampaikan salah satu materi yang paling sulit dalam HTML.

Walau Table ini tingkatannya lumayan sulit, tapi percaya deh semua akan menjadi mudah ketika kalian terbiasa.

> Every mastah start from noob.

seperti judulnya, kali ini kita akan membahas tabel! Why tabel? karna tabel ini adalah salah satu bentuk penyajian data yang paling mudah untuk dibaca, layaknya MS-Excel.

### Tag HTML Table[](https://www.digitalkode.com/html/html-5-series-9-html-table/#tag-html-table)

Si HTML udah siapin banyak bgt alat tempur untuk kita membuat tag, let’s see :

* tag `<table>` untuk membungkus table HTML.
* tag `<thead>` adalah singkatan dari *table head* yang berarti tag ini akan membungkus judul table.
* tag`<tbody>`adalah singkatan dari *table body* yang berarti tag ini akan membungkus body / badan table.
* tag `<tr>`adalah singkatan dari *table row* yang berarti baris.
* tag `<td>`adalah singkatan dari *table data* yang berarti data dalam *cell.*
* tag `<th>`adalah singkatan dari table head yang berarti judul dalam header

wahh banyak bgt ya! santuy gaes, kalian gaperlu hafalin semuanya kok. cukup tag `<table>,<tr>,<td>`saja yang perlu diingat diluar kepala, sisanya opsional.

contoh tag html sederhana :

```html
<html>
  <head>
    <title>Belajar HTML Lists Digitalkode</title>
  </head>
  <body>
    <h1>Belajar HTML Table bersama digitalkode!</h1>
    <p>Tempat berbagai macam <b>tutorial</b> <i>pemograman</i> secara <u>gratis!</u></p>
    <!--atribut border ada untuk memberi garis batas antar baris dan kolom-->
    <table border="1">
      <!-- membuat baris baru -->
        <tr>
          <!-- membuat kolom-->
            <td>kolom 1 baris 1</td>
            <td>kolom 2 baris 1</td>
        </tr>
      <!-- membuat baris baru -->
        <tr>
            <td>kolom 1 baris 2</td>
            <td>kolom 2 baris 2</td>
        </tr>
    </table>
  </body>
</html> 
```

hasilnya seperti berikut :

![](/images/uploads/annotation-2020-08-28-221150.png)

### Advanced Mode 🕶[](https://www.digitalkode.com/html/html-5-series-9-html-table/#advanced-mode-sunglasses)

* **Menambahkan warna pada cell**

  > Min! aku maunya pake warna.

  wojelas bisa, kalian dapat menambahkan warna pada tabel kalian dengan menggunakan atribut `bgcolor`dengan valuenya dapat berisi heksadesimal atau warna dalam bahasa inggris (red,blue dll)

  contoh :

  ```html
  <html>
    <head>
      <title>Belajar HTML Lists Digitalkode</title>
    </head>
    <body>
      <h1>Belajar HTML Table bersama digitalkode!</h1>
      <p>Tempat berbagai macam <b>tutorial</b> <i>pemograman</i> secara <u>gratis!</u></p>
      <!--atribut border ada untuk memberi garis batas antar baris dan kolom-->
      <table border="1">
        <!-- membuat baris baru sekaligus menambah warna darkslateblue-->
          <tr bgcolor="darkslateblue">
            <!-- membuat kolom-->
              <td>kolom 1 baris 1</td>
              <td>kolom 2 baris 1</td>
          </tr>
        <!-- membuat baris baru -->
          <tr>
            <!-- membuat hanya 1 cell yang berwarna -->
              <td bgcolor="skyblue">kolom 1 baris 2</td>
              <td>kolom 2 baris 2</td>
          </tr>
      </table>
    </body>
  </html> 
  ```

  output :

  ![](/images/uploads/annotation-2020-08-28-221432.png)


* menambah ukuran baris maupun kolom

  selain mengubah warna, kalian dapat juga menggabungkan cell dalam tabel html kalian, ingatlah 2 biji atribut ini :

  1. `rowspan` untuk menggabungkan baris.
  2. `colspan` untuk menggabungkan kolom.

  kedua atribut ini berlaku pada tag `<td> dan <th>`

  contoh penggunaan rowspan dan colspan :

  ```html
  <html>
    <head>
      <title>Belajar HTML Lists Digitalkode</title>
    </head>
    <body>
      <h1>Belajar HTML Table bersama digitalkode!</h1>
      <p>Tempat berbagai macam <b>tutorial</b> <i>pemograman</i> secara <u>gratis!</u></p>
      <table border="1">
          <tr>
            <!-- menggabungkan baris dan kolom-->
              <th rowspan="2" bgcolor="darkslateblue">Merk</th>
              <th colspan="2" bgcolor="skyblue">Laptop</th>
          </tr>
          <tr>
              <th>Low End</th>
              <th>High End</th>
          </tr>
          <tr>
              <td>Asus</td>
              <td>3.000.000</td>
              <td>40.000.000</td>
          </tr>
          <tr>
              <td>HP</td>
              <td>2.000.000</td>
              <td>50.000.000</td>
          </tr>
          <tr>
              <td>MSi</td>
              <td>12.000.000</td>
              <td>90.000.000</td>
          </tr>
      </table>
    </body>
  </html> 
  ```

  setelah dijalankan, outputnya seperti ini :

  ![](/images/uploads/annotation-2020-08-28-221533.png)



sekian tutorial cara membuat HTML table di digitalkode kali ini, terimakasih telah mengikuti materi seri HTML ke #9!

\#keepNgoding_keepLearning