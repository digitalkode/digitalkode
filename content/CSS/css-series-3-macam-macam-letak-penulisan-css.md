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
Hello para calon koders, selamat datang kembali di series CSS ini. Seperti yang mimin pernah janjikan pada seri [sebelumnya](https://www.digitalkode.com/css/css-series-2-text-color-background-color/), mimin akan membahas tentang macam-macam letak kita bisa menuliskan code CSS.

CSS sebetulnya dibagi menjadi tiga cara penulisan, yakni **internal**, **eksternal**, dan **inline**.

## Internal

Penulisan internal tempat letaknya berada dalam tag `<style></style>`. Ya, penggunaannya seperti yang sudah kita gunakan dalam tutorial-tutorial sebelumnya jadi tidak perlu dibahas panjang-panjang.

```html
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

```css
/* kita tidak perlu menambah tag style lagi */
button{
  color: white;
  background-color: #8A2BE2;
}
```

Sekarang kita buat file HTML dengan nama `view.html`. ingat, kita buat dalam satu *root path* atau satu folder ya dengan css. Kemudian, sobat tambahkan code berikut.

```html
<head>
  <link rel=”stylesheet” type=”text/css” href=”css-saya.css”/>
</head>
<button>Click Me!</button>
```

Ada tiga atribut dalam tag `<link/>` tersebut, penjelasannya sebagai berikut:

* **rel**, menentukan bagaimana relasinya antara file HTML kita dengan file yang akan digunakan. Dalam hal ini, stylesheet berarti kita import stylesheet;
* **type**, berfungsi untuk memberitahukan bagaimana browser sebaiknya mengenali file yang akan digunakan. dalam kasus CSS, kita bisa menghilangkannya dari tag link karena saat atribut **rel** memiliki value stylesheet, maka tag link akan otomatis menganggap bahwa file tersebut CSS, hingga akhirnya code bisa menjadi `<link rel=”stylesheet” href=”css-saya.css”/>`;
* **href,** berarti link yang digunakan untuk mengambil file CSS yang kita buat.

Apabila sudah dibuat, maka saat sobat membuka `view.html`di browser, tampilannya pasti masih sama dengan yang kita kerjakan sebelumnya.

## Inline

Kalau inline lebih spesifik lagi. Kita menuliskan code CSS di dalam element yang digunakan secara langsung. Penulisan code-nya bisa dimasukkan ke dalam atribut **style**.

```html
<button style=”color:white; background-color: #8A2BE2;”>
  Click Me!
</button>
```

## Best Practice untuk menuliskan code CSS?

Okee, setelah kita mengetahui macam-macam cara kita bisa menulis CSS, pasti muncul sebuah pertanyaan di benak sobat: **“Kira-kira cara mana yang lebih baik dipakai untuk menuliskan code CSS?”**

Untuk preferensi mimin sendiri, menuliskan code CSS akan jauh lebih efisien jika kita menggunakan cara eksternal, mentok-mentok paling campur internal. Mengapa? Akan mimin jelaskan alasannya.

### Eksternal VS Internal

Sebagai awalan, kita bisa bandingkan dulu kelebihan Eksternal daripada Internal.

* Ukuran file HTML menjadi lebih kecil;
* Jika kita ingin menggunakan CSS yang sama di halaman yang berbeda, kita tinggal import ulang saja tanpa perlu mengetik ataupun copas CSS lagi.

Namun, Eksternal pun mempunyai kelemahan yang bisa ditangani oleh Internal.

Saat setiap view memiliki sebuah CSS yang tidak digunakan oleh view lain, akhirnya akan banyak code CSS yang tidak terpakai menjadi menumpuk pada file Eksternal tersebut hingga akhirnya membuat load terasa lebih lama. Maka kita bisa menulisnya secara Inline.

### Eksternal & Internal VS Inline

Kenapa Eksternal dan Internal digabung? Karena penggunaannya kurang lebih sama, tapi saat berhadapan dengan Inline, bentuknya sudah berbeda.

Kelebihan Inline yakni kita bisa menulisnya langsung di dalam HTML tanpa perlu scrolling sana sini atau menumpuk selector baru (ini menurut mimin sendiri :sweat_smile:). Tapi untuk preferensi secara pribadi, mimin tidak menyarankan untuk menggunakan Inline karena alasan berikut:

* Kita tidak bisa menuliskan code berbentuk pseudo class seperti penggunaan `:hover`, `:focus`, `:active`, dll. Ini akan kita bahas di tutorial selanjutnya nanti.
* Code-nya pasti terlihat buruk dan menyulitkan karena kita menyatukan style dengan tag-nya. Tapi yang paling parah itu, **code CSS-nya ditulis semua dalam HTML-nya langsung + kebanyakan code-nya sama dalam setiap tag + CSS-nya panjang + kalau ganti satu, harus di ganti juga di HTML lain.**

  Di saat kita bisa menuliskan code sesimpel ini:

  ```html
  <style>
    li{
      color: yellow;
      background-color: red;
      font-size: 20px;
      font-weight: bold;
      display: block;
      list-style-type: square;
    }
    
    a{
      text-decoration: none;
    }
  <style>

  <ul>
    <li>ini nomor 1</li>
    <li>ini nomor 2</li>
    <li>ini nomor 3</li>
    <li>ini nomor 4</li>
    <li>ini nomor 5</li>
    <li>ini nomor 6</li>
    <li>ini nomor 7</li>
    <li>ini nomor 8</li>
  </ul>
  ```

  Kita malah mempersulitnya menjadi seperti ini:

  ```html
  <ul>
    <li style="color: yellow; background-color: red; font-size: 20px; font-weight: bold; display: block; list-style-type: square;">
      <a href="#" style="text-decoration: none;">
        ini nomor 1
      </a>
    </li>
    <li style="color: yellow; background-color: red; font-size: 20px; font-weight: bold; display: block; list-style-type: square;">
      <a href="#" style="text-decoration: none;">
        ini nomor 2
      </a>
    </li>
    <li style="color: yellow; background-color: red; font-size: 20px; font-weight: bold; display: block; list-style-type: square;">
      <a href="#" style="text-decoration: none;">
        ini nomor 3
      </a>
    </li>
    <li style="color: yellow; background-color: red; font-size: 20px; font-weight: bold; display: block; list-style-type: square;">
      <a href="#" style="text-decoration: none;">
        ini nomor 4
      </a>
    </li>
    <li style="color: yellow; background-color: red; font-size: 20px; font-weight: bold; display: block; list-style-type: square;">
      <a href="#" style="text-decoration: none;">
        ini nomor 5
      </a>
    </li>
    <li style="color: yellow; background-color: red; font-size: 20px; font-weight: bold; display: block; list-style-type: square;">
      <a href="#" style="text-decoration: none;">
        ini nomor 6
      </a>
    </li>
    <li style="color: yellow; background-color: red; font-size: 20px; font-weight: bold; display: block; list-style-type: square;">
      <a href="#" style="text-decoration: none;">
        ini nomor 7
      </a>
    </li>
    <li style="color: yellow; background-color: red; font-size: 20px; font-weight: bold; display: block; list-style-type: square;">
      <a href="#" style="text-decoration: none;">
        ini nomor 8
      </a>
    </li>
  </ul>
  ```

  Kalo udah liat ini dan disuruh ganti sama atasan, waaahhh, kelar aja hidup sobat sebagai web developer :rofl:

Jelas kan? Jadi untuk *best practice*-nya sobat bisa menggunakan CSS secara Eksternal. Atau sobat juga bisa gunakan internal untuk code CSS yang hanya dibutuhkan dalam satu file saja, agar tidak memenuhi size yang eksternal. Sebisa mungkin hindari inline agar tidak membuat kesulitan dalam mengubah code-nya.

Okeee, cukup sekian dari penjelasan tentang letak penyimpanan CSS, selanjutnya kita akan mulai terjun kembali ke dalam tutorial code CSS kita yang kedua. Jadi tetap ikuti tutorial ini dan semangat :muscle: