---
layout: blog
title: "CSS SERIES #2 : TEXT COLOR & BACKGROUND COLOR"
authors:
  - Rizal
draft: false
date: 2020-09-09T00:52:53.850Z
thumbnail: /images/uploads/css-series-2.png
tags:
  - CSS
  - SERIES
---
Halo calon koders, selamat datang di series tutorial kedua dari CSS ini. Sekarang, setelah sekian lama yang kita tunggu, akhirnya kita akan mulai membahas atribut CSS pertama kita dan tema pertama mimin adalah **warna teks (color)** dan **warna latar (background-color)**.

## Color

Untuk mengubah suatu warna teks, kita bisa menggunakan property `color`.

```
<style>
  button{
    color: white;
  }
</style>
```

## background-color

Jika kita ingin merubah warna latar belakang dari suatu element, maka kita bisa menggunakan `background-color`.

```
<style>
  button{
    background-color: blue;
  }
</style>
```

## Macam-macam value dalam property warna

Oiya, kalau belum tau, value warna dalam CSS itu bisa macam-macam lho. Sebelumnya kita menggunakan value default CSS yang sudah tersedia, namun ada cara lain juga yang lebih fleksibel untuk digunakan. Berikut list nya:

* **Warna nama**, seperti `red`, `green`, `blue`, `yellow`, `white`, `black`, `gray`.
* **Warna heksadesimal**, seperti `#FFFFFF`, `#000000`, `#FF0000`.
* **Warna RGB**, yang berarti Red, Green, Blue. Code penggunaannya yaitu `rgb(red value, green value, blue value)`.
* **Warna RGBA**, yang berarti Red, Green, Blue, Alpha (tingkat transparan). Code penggunaannya yaitu `rgba(red value, green value, blue value, alpha value)`
* **Warna HSL**, yang berarti Hue, Saturation, Lightness. code penggunaannya yaitu `hsl(hue value, saturation value, lightness value)`
* **Warna HSLA**, yang berarti Hue, Saturation, Lightness, Alpha. Code penggunaannya yaitu `hsla(hue value, saturation value, lightness value, alpha value)`

Biasanya yang lebih umum digunakan adalah RGB, RGBA, warna nama dan warna heksadesimal. Namun, untuk menggunakan warna RGB, RGBA, dan heksadesimal memerlukan tool palet warna agar bisa menggunakannya secara maksimal. Biasanya mimin pake color pickernya situs w3schools buat cari warnanya. Berikut link-nya <https://www.w3schools.com/colors/colors_picker.asp>.

Untuk value yang sudah di sebutkan di atas sebetulnya tidak sebatas hanya untuk property **color** dan **background-color** saja. Selama sebuah property memiliki opsi untuk memasukkan warna, maka value-nya bisa diisi menggunakan cara-cara tersebut.

## Let’s Code

Okaay, setelah sejauh ini kita belajar tentang penggunaan warna, sekarang kita akan coba terapkan codenya untuk membuat button seperti yang kita lihat pada perkenalan sebelumnya. Untuk code-nya bisa sobat ketik ya, jangan copas biar ingat :grin:.

CSS:

```
<style>
  button{
    color: white;
    Background-color: #8A2BE2;
  }
</style>
```

HTML:

```
<button>Click Me!</button>
```

Kalau sudah sesuai, maka hasilnya akan seperti berikut:

![](/images/uploads/screenshot_3.png)

Akhirnya, sekarang kita bisa mengubah warna teks dan latar sebuah element :smile:.

Untuk tutorial kedua ini mimin cukupkan sampai disini. Selanjutnya, mimin akan perlihatkan macam-macam cara penulisan code CSS. So, stay ‘till the series end :punch:.