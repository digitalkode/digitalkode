---
layout: blog
title: "HTML 5 SERIES #10 : HTML Form"
authors:
  - Fliw
draft: false
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

### jenis jenis type dan aturan form

ada banyak gaes jenis jenis type dalam form HTML, kuy kenalan satu persatu:

* **text** : yaitu input yg bertipe text satu baris.
* **password** : yaitu input yg bertipe password (disamarkan dengan bintang)
* **submit** : yaitu input untuk mengirim formulir dan diproses.
* **number**  : yaitu input yang hanya dapat diisi oleh angka.
* **reset** : yaitu input untuk menghapus semua field formulir yang sudah diisi dan digantikan dengan blank.
* **radio** : yaitu input yang menyuruh user **MEMILIH SATU** pilihan saja dari beberapa pilihan.
* **checkbox** : yaitu user bisa memilih **NOL** atau **LEBIH** pilihan dari beberapa pilihan.
* **button** : yaitu input yg bertipe tombol (Button)
* **color** : yaitu input dengan tipe warna, berguna saat pemilihan warna.
* **date** : yaitu input untuk memilih tanggal seperti kalendar.
* **email** : yaitu input yang hanya dapat diisi oleh email.
* **file** : yaitu input type jika kita ingin mengupload sebuah file ke HTML Forms
* **textarea** : yaitu input ketika kita akan mengisi tulisan yang sangat panjang seperti alamat rumah dll.

selain itu, ada juga atribut yang dapat diaplikasikan untuk memberi **aturan** pada HTML Forms, Yaitu :

* **checked** : yaitu atribut yang berguna untuk menceklis secara default sebuah form saat pertama di load.
* **disabled** : yaitu atribut yang berguna untuk menonaktifkan input sehingga tidak bisa diisi.
* **max** : yaitu atribut untuk memberi batasan maksimal input.
* **maxlength** : yaitu atribut untuk memberi batasan maksimal **KARAKTER HURUF/ANGKA** di input.
* **min** : yaitu atribut untuk memberi batasan minimal input.
* **minlength** : yaitu atribut untuk memberi batasan minimal **KARAKTER HURUF/ANGKA** di input.
* **readonly** : yaitu atribut yang membuat field hanya dapat di read saja, tidak dapat diubah, mirip seperti disabled.
* **required** : yaitu atribut untuk membuat field form menjadi wajib diisi.
* **placeholder** : yaitu atribut untuk menampilkan teks sementara, ketika field belum diisi oleh user.
* **value** : yaitu atribut untuk mengisi nilai si field secara default.

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
    <form action="daftar.php" method="POST">
        <fieldset>
        <legend>Daftar user</legend>
        <p>
            <label>Username:</label>
            <input type="text" name="username" placeholder="Masukkan username" />
        </p>
        <p>
            <label>Password:</label>
            <input type="password" name="password" placeholder="Masukkan password" />
        </p>
        <p>
            <input type="submit" name="submit" value="Daftar" />
        </p>
        </fieldset>
    </form>
  </body>
</html> 
```

berikut outputnya :

![](/images/uploads/annotation-2020-08-29-214427.png)

sekarang coba fokus ke code diatas, dapat dilihat bahwa kita membuat 3 biji form, yaitu :

* username yang bertipe text dan nama variabelnya yaitu username.
* password yang bertipe password dan nama variabelnya yaitu password.
* submit yang bertipe submit.

semua field diatas dibungkus dalam tag `fieldset` yang mana `fieldset`itu sendiri diberi judul oleh `<legend>`

dan kedua field input disana diberi 2 atribut yaitu placeholder dan value.

### advanced mode :sunglasses:

berikut adalah contoh form HTML yang termasuk kompleks :

```html
<html>
  <head>
    <title>Belajar HTML Forms Digitalkode</title>
  </head>
  <body>
    <h1>Belajar HTML Forms bersama digitalkode!</h1>
    <p>Tempat berbagai macam <b>tutorial</b> <i>pemograman</i> secara <u>gratis!</u></p>
    <form action="regist.php" method="POST">
      <!--mengumpulkan semua field dalam 1 fieldset-->
      <fieldset>
        <!-- memberi judul fieldset -->
        <legend>Registrasi</legend>
        <!-- input type text -->
        <p>
            <label>Nama:</label>
            <input type="text" name="nama" placeholder="tulis nama..." />
        </p>
        <!-- input type text -->
        <p>
            <label>Username:</label>
            <input type="text" name="username" placeholder="tulis username..." />
        </p>
        <!-- input type email -->
        <p>
            <label>Email:</label>
            <input type="email" name="email" placeholder="tulis email..." />
        </p>
        <!-- input type nomor -->
        <p>
          <label>nomor telepon:</label>
          <input type="number" name="telepon" placeholder="tulis nomor..." />
        </p>
        <!-- input type tanggal -->
        <p>
            <label>tanggal lahir:</label>
            <input type="date" name="date" placeholder="tulis tanggal..." />
        </p>
        <!-- input type password -->
        <p>
            <label>Password:</label>
            <input type="password" name="password" placeholder="tulis password..." />
        </p>
        <!-- input type radio -->
        <p>
            <label>Jenis kelamin:</label>
            <label><input type="radio" name="jenkel" value="laki-laki" /> Laki-laki</label>
            <label><input type="radio" name="jenkel" value="perempuan" /> Perempuan</label>
        </p>
        <!-- input type select -->
        <p>
            <label>Agama:</label>
            <select name="agama">
                <option value="islam">Islam</option>
                <option value="kristen">Kristen</option>
                <option value="hindu">Hindu</option>
                <option value="budha">Budha</option>
            </select>
        </p>
        <!-- input type text area -->
        <p>
            <label>Biografi:</label>
            <textarea name="biografi"></textarea>
        </p>
        <!-- input type file -->
        <p>
          <label>Foto KTP :</label>
          <input type="file" name="foto">
        </p>
        <!-- input type checkbox -->
        <p>
          <label>saya ingin pemberitahuan via email :</label>
          <input type="checkbox" name="pemberitahuan_email" value="Email_notif">
        </p>
        <!-- input type checkbox -->
        <p>
          <label>saya ingin pemberitahuan via nomor telepon :</label>
          <input type="checkbox" name="pemberitahuan_telepon" value="telepon_notif">
        </p>
        <!-- input type reset -->
        <p>
            <input type="reset">
        </p>
        <!-- input type submit -->
        <p>
            <input type="submit" name="submit" value="Daftar" />
        </p>
        </fieldset>
    </form>
  </body>
</html> 
```

output nya :

![](/images/uploads/annotation-2020-08-30-221636.png)

hampir semua tag sudah kita include disana, termasuk juga penambahan seperti tag `<select>.` tag `<select>` mirip seperti radio hanya saja bentuknya dropdown, untuk fungsionalitas tetep saja sama, yaitu hanya dapat memilih 1 opsi.

demikian tutorial HTML Series ke #10, terimakasih telah mengikuti tutorial digitalkode! keepSpiritNgodingGaes!



**\#keepLearning_keepNgoding**