---
layout: blog
title: "CSS SERIES #4 : HEIGHT"
authors:
  - Rizal
draft: false
date: 2020-10-08T02:17:42.604Z
thumbnail: /images/uploads/css-series-4.png
tags:
  - CSS
  - SERIES
---
Halo koders, selamat datang kembali. Setelah mimin membahas tentang letak penulisan CSS secara panjang lebar sekarang mimin akan terjun kembali ke tutorial property CSS kita yang selanjutnya. Untuk tema sekarang mimin akan membahas tentang **height**, **min-height**, dan **max-height**.

## Height

Height merupakan property yang berfungsi untuk mengatur ketinggian dari suatu element.

```css
button{
  height: 20px;
}
```

## min-height

Jika sobat ingin set tinggi minimal dari suatu element HTML, maka kita bisa menggunakan property min-height.

```css
button{
  min-height: 20px;
}
```

ada beberapa hal yang perlu dipahami:

* Jika content lebih kecil dari min-height, maka property min-height akan bekerja;
* Jika content lebih besar dari min-height, maka property min-height akan diabaikan.

## max-height

Berlawanan dengan min-height, jika sobat ingin tinggi suatu element HTML tidak melebihi batas yang di tentukan, maka sobat bisa menggunakan max-height.

```css
button{
  max-height: 20px;
}
```

Dalam penggunaannya pun ada beberapa hal yang perlu dipahami:

* Jika sobat menggunakan max-height, maka property height akan diabaikan;
* Jika content lebih kecil dari max-height, maka property max-height tidak akan bekerja;
* Jika content lebih besar dari max-height, maka property max-height akan bekerja.;
* Cara kerja max-height bergantung pada property overflow yang akan kita bahas nanti.

## Let’s Code

Kita sudah mengerti bagaimana cara menggunakan height, sekarang kita bisa menerapkannya pada button kita yang sebelumnya.

CSS:

```html
<style>
  button{
    height: 60px;
    color: white;
    background-color: #8A2BE2;
  }
</style>
```

HTML:

```html
<button>Click Me!</button>
```

Hasilnya akan terlihat seperti berikut:

![]()

Okay, sejauh ini kita sudah belajar bagaimana menambahkan tinggi dari suatu element, selanjutnya kita akan belajar bagaimana menambahkan lebar dari suatu element jadi tetap ikuti tutorial ini.