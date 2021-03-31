---
layout: blog
title: "CSS SERIES #6 : FONT-SIZE & FONT-WEIGHT"
authors:
  - Rizal
draft: false
date: 2021-03-31T00:35:32.477Z
thumbnail: /images/uploads/css-series-6.png
tags:
  - CSS
  - SERIES
---
Halo koders, selamat datang kembali. Kali ini mimin akan membahas tentang property yang digunakan untuk mengatur ukuran dan ketebalan font pada teks, yaitu **font-size** dan **font-weight**.

## font-size

font-size biasa kita gunakan untuk mengatur ukuran dari suatu font. Untuk setiap ukuran, sobat bisa gunakan value yang sudah di set seperti **xx-small**, **x-small**, **small**, **medium**, atau sobat juga bisa set value nya sendiri menggunakan **px**, **em**, **rem**, dan lainnya seperti yang bisa dilihat di website [w3school ini](https://www.w3schools.com/cssref/pr_font_font-size.asp).

```css
button{
  font-size: xx-small;
}
```

## font-weight

saat sobat ingin membuat sebuah teks seperti header terlihat lebih mencolok dibandingkan teks yang lain, sobat bisa menebalkan teksnya dengan menggunakan font-weight.

```css
button{
  font-weight: bold;
}
```

ada beberapa value yang bisa sobat pakai dalam font-weight. Dalam bentuk nama diantaranya:

* **normal**, ini adalah value default nya dan ketebalan font nya standar;
* **lighter**, dengan lighter teks menjadi lebih tipis dibandingkan normalnya;
* **bold**, dengan bold teks menjadi lebih tebal dibandingkan normalnya;
* **bolder**, kalau bold masih dirasa kurang, sobat bisa gunakan value ini yang mana lebih tebal dari bold.

Selain dalam bentuk nama, sobat juga bisa gunakan value dari font-weight dengan menggunakan angka yang sudah di set sebagai semacam code untuk value nya si font-weight. Dimulai dari yang terkecil yang paling tipis adalah **1** hingga terbesar yang paling tebal adalah **1000**, namun yang paling umum digunakan biasanya berada diantara kelipatan ratusan seperti **100**, **200**, **300**, dan seterusnya hingga **950** seperti yang terlihat di tabel ini. Dari jarak tersebut, angka **400** sama dengan **normal** dan **700** sama dengan **bold**.

Namun, untuk menggunakan value angka tersebut, font yang sobat gunakan harus memiliki level ketebalan yang menyesuaikan dengan kodenya. Jadi apabila sobat ingin menggunakan font yang super tebal, sobat harus install dulu font nya. Dan perlu diketahui juga untuk value angka tidak di support di internet explorer, jadi jaga jaga kalau sobat mau bikin web pake pengaturan font angka tapi ternyata klien targetnya pengguna internet explorer, bisa rusak tuh web :cry:.

Contoh penggunaan valuenya bisa sobat tulis seperti ini.

```css
button{
  font-weight: 700; /* sama dengan font-weight: bold; */
}
```

## Let’s Code

Dengan kita memahami fungsi dari keduanya, sobat bisa menerapkan fungsinya di code yang kita sedang buat.

CSS:

```html
<style>
button{
  width: 200px;
  height: 60px;
  color: white;
  background-color: #8A2BE2;
  font-size: 20px;
}
</style>
```

HTML:

```html
<button>click me!</button>
```

dan hasilnya bisa dilihat seperti berikut:

![button css series 6](/images/uploads/screenshot_button.png "button css series 6")

Selanjutnya kita akan belajar bagaimana kita menebalkan sisi dari sebuah element html dengan **border** dan membuat sudutnya menjadi lebih bulat dengan **border-radius**, jadi tetap ikuti tutorial ini.