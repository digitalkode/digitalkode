---
layout: blog
title: "CSS SERIES #3 : MACAM-MACAM LETAK PENULISAN CSS"
authors:
  - Rizal
draft: false
date: 2020-09-10T15:52:17.720Z
thumbnail: /images/uploads/css-series-3.png
tags:
  - CSS
  - SERIES
---
Hello para calon koders, selamat datang kembali di series CSS ini. Seperti yang mimin pernah janjikan pada seri sebelumnya, mimin akan membahas tentang macam-macam letak kita bisa menuliskan code CSS.

CSS sebetulnya dibagi menjadi tiga cara penulisan, yakni internal, eksternal, dan *inline*.

## Internal

Penulisan internal tempat letaknya berada dalam tag `<style></style>`. Ya, penggunaannya seperti yang sudah kita gunakan dalam tutorial-tutorial sebelumnya jadi tidak perlu dibahas panjang-panjang.

```
<style>
  button{
    color: white;
    background-color: #8A2BE2;
  }
</style>
```

## Eksternal

Berbeda dengan Internal, kalau cara Eksternal berarti kita menuliskan code CSS di luar file `.html`. Code-nya akan kita simpan ke dalam file yang berformat `.css`. Dengan cara ini, kita tidak perlu lagi menambah tag style dalam HTML maupun CSS-nya, karena tag tersebut khusus untuk penulisan Internal saja.

Agar file tersebut dapat digunakan oleh HTML yang kita buat, maka kita bisa mereferensikannya dengan menggunakan tag `<link/>`. Penempatannya juga umumnya disimpan di tag head seperti halnya tag style. Sebagai contoh, sobat bisa buat file bernama `css-saya.css` dan masukan code berikut.

```
/* kita tidak perlu menambah tag style lagi */
button{
  color: white;
  background-color: #8A2BE2;
}
```

Sekarang kita buat file HTML dengan nama `view.html`. ingat, kita buat dalam satu root path (satu folder) ya dengan css. Kemudian, sobat tambahkan code berikut.

```
<head>
  <link rel=”stylesheet” type=”text/css” href=”css-saya.css”/>
</head>
<button>Click Me!</button>
```

Ada tiga attribute dalam tag tersebut, penjelasannya sebagai berikut:

* **rel**, menentukan bagaimana relasinya antara file HTML kita dengan file yang akan digunakan. Dalam hal ini, stylesheet berarti kita import stylesheet;
* **type**, berfungsi untuk memberitahukan bagaimana browser sebaiknya mengenali file yang akan digunakan. dalam kasus CSS, kita bisa menghilangkannya dari tag link karena saat atribut **rel** memiliki value stylesheet, maka tag link akan otomatis menganggap bahwa file tersebut CSS, hingga akhirnya code akan menjadi `<link rel=”stylesheet” type=”text/css” href=”css-saya.css”/>`;
* **href,** berarti link yang digunakan untuk mengambil file CSS yang kita buat.

Maka saat sobat membuka `view.html`, tampilannya pasti masih sama dengan yang kita kerjakan sebelumnya.

## Inline

Kalau inline lebih spesifik lagi. Kita menuliskan code CSS di dalam element yang digunakan secara langsung. Penulisan code-nya bisa dimasukkan ke dalam atribut style.

```
<button style=”color:white; background-color: #8A2BE2;”>
  Click Me!
</button>
```

## Best Practice untuk menuliskan code CSS?

Okee, setelah kita mengetahui macam-macam cara kita bisa menulis CSS, pasti muncul sebuah pertanyaan di benak sobat: **“Kira-kira cara mana yang lebih baik dipakai untuk menuliskan code CSS?”**

Untuk preferensi mimin sendiri, menuliskan code CSS akan jauh lebih efisien jika kita menggunakan cara eksternal, mentok-mentok paling campur internal. Mengapa? Akan mimin jelaskan alasannya.

### Eksternal VS Internal

Untuk awalan, kita bisa bandingkan dulu kelebihan Eksternal daripada Internal.

* Ukuran file HTML menjadi lebih kecil;
* Jika kita ingin menggunakan CSS di halaman yang berbeda, kita tinggal import ulang saja tanpa perlu mengetik ataupun copas CSS lagi.

Namun, Eksternal pun mempunyai kelemahan yang bisa ditangani oleh Internal.

Saat setiap view memiliki sebuah CSS yang tidak digunakan oleh view lain, akhirnya akan banyak code CSS yang tidak terpakai menjadi menumpuk pada file Eksternal tersebut hingga akhirnya membuat load terasa lebih lama. Maka kita bisa menulisnya secara Inline.

### Eksternal & Internal VS Inline

Kenapa Eksternal dan Internal digabung? Karena penggunaannya kurang lebih sama, tapi saat berhadapan dengan Inline, bentuknya sudah berbeda.

Mimin tidak akan menulis kelebihan dari Inline. karena secara pribadi, mimin tidak menyarankan untuk menggunakan Inline karena berikut alasannya:

* Apabila suatu code yang sama digunakan dalam banyak element, maka kita akan kesulitan saat ingin mengubahnya karena harus pindah dari satu element ke element lain dan pastinya memakan ekstra waktu. Padahal udah diberi kemudahan biar bisa mengubah banyak element hanya dengan satu CSS saja. Nikmat apa lagi yang mau kalian dustakan? :smile:
* Code-nya pasti terlihat buruk karena kita menyatukan code CSS dengan code HTML, apalagi kalo CSS-nya panjang + di banyak HTML. Kasihan banget, kalo sobat mau ngelamar kerja jadi web developer di suatu tempat tapi ternyata saat checking suatu file HTML, code CSS-nya ditulis langsung dalam HTML. Waaahhh, kelar aja hidup sobat sebagai web developer :rofl:

Jelas kan? Jadi untuk best practice-nya sobat bisa menggunakan CSS secara Eksternal. Atau sobat juga bisa gunakan internal untuk code CSS yang hanya dibutuhkan dalam satu file saja, agar tidak memenuhi size yang eksternal. Sebisa mungkin hindari inline agar tidak membuat kesulitan dalam mengubah code-nya dan menjadi lebih predictable.

Okeee, cukup sekian dari penjelasan tentang letak penyimpanan CSS, selanjutnya kita akan mulai terjun kembali ke dalam tutorial code CSS kita yang kedua. Jadi tetap ikuti tutorial ini dan semangat.