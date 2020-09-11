---
layout: blog
title: "CSS SERIES #1 : SINTAKSIS CSS"
authors:
  - Rizal
draft: false
date: 2020-09-08T02:27:55.302Z
thumbnail: /images/uploads/css-series-1.png
tags:
  - CSS
  - SERIES
---
Halo calon koders, dalam tutorial bagian pertama ini mimin akan membahas tentang hal paling dasar dari CSS, yaitu cara penggunaan sintaksis-nya. Tunggu apa lagi? Let’s straight to the point.

## Penyimpanan kode CSS

Agar kode CSS dapat dikenali oleh browser, sobat harus menyimpan kodenya ke dalam tag HTML `<style></style>` karena tag tersebut digunakan khusus untuk menyimpan seluruh kode CSS.

Biasanya, para programmer menyimpan tag `<style></style>` di dalam tag `<head></head>` karena beberapa alasan, salah satunya adalah karena tag head tersebut berfungsi sebagai tempat menyimpan metadata.

## Penulisan sintaks CSS

Seperti yang mimin pernah bilang sebelumnya, CSS umumnya memiliki aturan penulisan sintaks yang sama.

![css selector image](/images/uploads/css-code-selector.png "css selector image")

Penulisannya terbagi menjadi tiga blok:

* **Selector**, yang berupa tag HTML yang dipilih;
* **Property**, yaitu atribut pada HTML;
* **Value**, yaitu nilai yang diberikan untuk mengubah suatu property.

Sebagai contoh, mimin akan mengganti nilai dalam setiap tag `<li></li>` menjadi berwarna merah, mimin bisa menambahkan kode seperti berikut:

CSS:

```html
<style>
  li {
    color: red;
  }
</style>
```

Dalam kode di atas, **li** adalah apa yang bisa kita panggil dengan selector, sementara **color** adalah property dan **red** sebagai nilainya. Kemudian, kita akan menambahkan HTML nya.

HTML:

```html
<ul>
  <li>pertama</li>
  <li>kedua</li>
  <li>ketiga</li>
</ul>
```

Dan hasilnya akan menjadi seperti ini.

![html li result](/images/uploads/screenshot_2.png "html li result")

Simpel kan? Dengan mengerti sintaks di atas, sobat sudah mengerti cara membuat kode CSS secara hampir keseluruhan. Oleh karena itu, selamat! sobat sudah memahami CSS walaupun baru tiba di tutorial pertama :laugh:.

Untuk selanjutnya kita akan mempelajari bagaimana kita bisa mengganti warna pada beberapa bagian CSS yang umum dipakai, jadi stay update dari tutorial ini.