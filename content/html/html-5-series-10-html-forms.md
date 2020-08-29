---
layout: blog
title: "HTML 5 SERIES #10 : HTML Form"
authors:
  - Fliw
draft: true
date: 2020-08-29T14:15:20.684Z
thumbnail: /images/uploads/instagram-post-2-7-.jpg
tags:
  - HTML
  - SERIES
---
Halo Sobat digitalkode! kembali lagi sama mimin di pembahasan Tutorial HTML 5 series yang ke #10! kali ini mimin akan membuat sebuah materi yg teramat sangat penting dalam HTML. Sesuai judulnya kalian bisa nebak ya, isinya adalah Formulir.

langsung ke pembahasan materi :

jadi form ini secara singkat adalah cara untuk mengambil informasi dari pengguna, layaknya ketika kalian mengisi formulir.

ngutip tulisan di wikipedia nih, HTML Forms adalah (maaf ya pake inggris, biar terbiasa juga :sunglasses: ):

> A **webform**, **web form** or **HTML form** on a [web page](https://en.wikipedia.org/wiki/Web_page "Web page") allows a user to enter data that is sent to a [server](https://en.wikipedia.org/wiki/Server_(computing) "Server (computing)") for processing.

seperti yang kalian baca, jadi HTML form ini adalah cara untuk membuat user mengirim data ke server.

**"server? apaan lagi dah?"** nanti kita kupas lebih lanjut deh. :satisfied:

### Sintaksis form di HTML

Form di HTML dapat dibuat dengan tag `<Form>`

si form ini punya 2 atribut yang wajib hukumnya untuk diberikan yakni:

`action`dan `method`

* `action`adalah atribut untuk menentukan kemana data formulir ini akan dikirim.
* `method`adalah bentuk metode dalam pengirimannya (nanti kita kupas lebih lanjut di Series PHP)

jadi si form ini minimal wajib punya 2 biji atribut ini. contoh sederhana form :

```html
<form action="process.php" method="POST">
</form>
```

perhatikan kode diatas, atribut action mengarah ke halaman process.php, kok **PHP?** dan method = **POST** apaan itu **POST?.**  sabar dulu boiis, nanti kita belajar PHP kok, erat kaitannya dengan HTML.

BTW ketika kalian jalankan kode diatas, dia tidak merender apa apa, cuma blank dan kosong <del> kayak hidupku </del>.

itu karena kita belum menambahkan field input, apa itu field input?

field input adalah bagian yang dapat diisi dengan data formulir.

field memiliki 2 atribut yang wajib diberikan, yakni : `type`dan `name` . 

* `type`adalah jenis tipe inputan dari user.
* `name`adalah nama utama dari field yang mana nanti akan berperan menjadi nama variabel di program.

### Let's Ngoding

tulislah kode berikut di code editor kalian :

```django
<html>
  <head>
    <title>Belajar HTML Forms Digitalkode</title>
  </head>
  <body>
    <h1>Belajar HTML Forms bersama digitalkode!</h1>
    <p>Tempat berbagai macam <b>tutorial</b> <i>pemograman</i> secara <u>gratis!</u></p>
    <form action="login.php" method="POST">
      <!--field set untuk membungkus field yang ada di form-->  
      <fieldset>
        
        <legend>Login user</legend>
        <p>
            <label>Username:</label>
            <input type="text" name="username" placeholder="Masukkan username" />
        </p>
        <p>
            <label>Password:</label>
            <input type="password" name="password" placeholder="Masukkan password" />
        </p>
        <p>
            <input type="submit" name="submit" value="Login" />
        </p>
      </fieldset>
    </form>
  </body>
</html> 
```

berikut outputnya :

![](/images/uploads/annotation-2020-08-29-214427.png)