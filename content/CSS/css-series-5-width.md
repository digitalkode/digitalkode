---
layout: blog
title: "CSS SERIES #5 : WIDTH"
authors:
  - Rizal
draft: false
date: 2020-10-09T02:05:52.366Z
tags:
  - CSS
  - SERIES
---
Halo koders, selamat datang kembali. Seperti yang mimin bahas pada tutorial sebelumnya, kali ini mimin akan membahas tentang width.

Width sebetulnya memiliki kesamaan dengan height, kita bisa menggunakan property **width**, **min-width**, dan **max-width** untuk mengatur width dari suatu element. Oleh karena itu, kalo sobat sudah mengerti semua konsep height di tutorial sebelumnya sobat bisa skip aja ke bagian Let’s Code karena ini cuma pengulangan, selain itu kita bisa langsung ke pembahasan.

## Width

width merupakan property yang berfungsi untuk mengatur ketinggian dari suatu element.

```css
button{
  width: 20px;
}
```

## min-width

Jika sobat ingin set tinggi minimal dari suatu element HTML, maka kita bisa menggunakan property min-width.

```css
button{
  min-width: 20px;
}
```

Dalam penggunaannya, ada dua hal yang perlu di ingat:

* Jika content lebih kecil dari min-width, maka property min-width akan bekerja;
* Jika content lebih besar dari min-width, maka property min-width akan diabaikan.

\## max-width

Berlawanan dengan min-width, jika sobat ingin tinggi suatu element HTML tidak melebihi batas yang di tentukan, maka sobat bisa menggunakan max-width.

\`\``

button{

max-width: 20px;

}

\`\``

Dalam penggunaannya, ada empat hal yang perlu di ingat:

<!--\[if !supportLists]-->· <!--\[endif]-->Jika sobat menggunakan max-width, maka property width akan diabaikan;

<!--\[if !supportLists]-->· <!--\[endif]-->Jika content lebih kecil dari max-width, maka property max-width tidak akan bekerja;

<!--\[if !supportLists]-->· <!--\[endif]-->Jika content lebih besar dari max-width, maka property max-width akan bekerja.;

<!--\[if !supportLists]-->· <!--\[endif]-->Cara kerja max-width bergantung pada property overflow yang akan kita bahas nanti.

\## Let’s Code

Baiklah, dengan kita memahami width, sekarang kita bisa langsung terapkan codenya.

CSS:

<style>

button{

width: 200px;

height: 60px;

color: white;

background-color: #8A2BE2;

}

</style>

HTML:

```

```

Hasilnya akan terlihat seperti berikut:

![](/images/uploads/css_button_4.png)

Okay, dengan begini mimin harap sobat bisa paham bagaimana cara menggunakan width dan height dengan baik karena keduanya merupakan salah satu property yang wajib dipahami dalam membangun sebuah halaman web.

Untuk selanjutnya kita akan menelusuri bagaimana kita bisa mengatur ukuran dari sebuah teks, jadi tetap update :fire: