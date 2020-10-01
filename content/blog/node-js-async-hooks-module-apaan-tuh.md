---
layout: blog
title: Node.js Async Hooks Module. Apaan tuh?
authors:
  - Fliw
draft: true
date: 2020-10-01T11:10:53.156Z
thumbnail: /images/uploads/download.png
tags:
  - Node
  - Async
  - JS
---
Halo Sobat Digitalkode! Ketemu lagi sama mimin. Today Mimin akan share salah satu module yang keren di node js. yaitu Async Hooks Module. Pernah denger? kalau belum pernah maka kalian harus cepet cepet familiar sama module yang satu ini.

walaupun module ini masih muda (rilis barengan sama node js) walaupun si module masih dalem experimental mode tapi bukan berarti ini ga recommended buat production.

singkatnya, si async hooks module ini memberikan API untuk track resource async yang bersih dan mudah dipakai.

includenya gimana? Ez, pakai `require` javascript pun bisa. contohnya:

`const async_hooks = require('async_hooks');`

sebelumnya nih, udah pada tau asinkronus? sinkronus dan asinkronus merupakan fundamental yang cukup penting di JS, kalian bisa pelajari di tutorial lain mengenai asinkronus, karna mimin anggap kalian semua sudah paham asinkronus (sebagai prequisite belajar si module async hooks ini). oke langsung skip ya, go to materi.

### Async Resources

async resources? apa artinya? di js sendiri kan banyak tuh asinkronus yang terjadi, ketika kita masuk ke node JS, akan lebih banyak.

dan async resources yang mimin bahas sekarang bukan async js murni, kita ngebahas tentang objek yang dibuat oleh node yang memiliki callback terkait, terlepas dari berapa kalipun callback dapat dipanggil. ada banyak diluaran sana contohnya: **Promise,Action of creating a server, timeouts, dll**.

jangan lupa bahwa resources, mirip seperti kebanyakan bahasa lainnya, ada kemungkinan closed. beberapa dari mereka emg udah di closed dari kontainer, ada juga yang dari bahasanya sendiri. jadi ada kemungkinan fungsi callback kalian ga kepanggil di akhir. tapi santuy aja, si async hooks ini ga ngebedain 2 skenario ini dan nganggap sebagai 1 skenario yang sama.