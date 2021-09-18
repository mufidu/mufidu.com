---
title: "Rangkuman CS50x Bahasa Indonesia"
date: "2021-02-09"
category: "devs"
tags:
  - "learning"
  - "programming"
  - "course"
coverImage: "/img/this-is-cs50.webp"
permalink: /cs50x/
layout: post-id
lang: id
translation: /cs50x-en/
---

![](/img/this-is-cs50.webp)

CS50x adalah sebuah online course yang disediakan oleh Harvard melalui platform edX. Course ini bisa menjadi bahan pertama sebelum mendalami programming lebih lanjut, karena di sini dipelajari bagaimana komputer bekerja, kita juga belajar beberapa bahasa pemrograman, yaitu C (yang utama), Python, SQL, dan sedikit JavaScript. Flask, sebuah library untuk web development juga dibahas di sini.

Saya mengikuti kelas [CS50x](https://learning.edx.org/course/course-v1:HarvardX+CS50+X) ini mulai tanggal 6 Januari 2021. Dan selesai 9 Februari 2021.

Saya memutuskan mengikutinya untuk memperdalam pemahaman saya tentang dasar-dasar Computer Science, bagaimana sebuah komputer bisa bekerja dan berkomunikasi dengan kita para programmer.

Sebelumnya saya sudah menyelesaikan kelas [2021 Complete Python Bootcamp](https://www.udemy.com/course/complete-python-bootcamp/), sehingga saya seharusnya sudah cukup menguasai Python, tapi saya merasa harus memperdalam dulu pemahaman dasarnya sebelum melangkah lebih jauh.

Kelas ini diajar oleh salah satu professor Harvard yang sudah bertahun-tahun mengajar materi ini, yaitu David J. Malan. Di akhir kelas, diberikan sertifikat untuk yang mengerjakan semua Problem Sets dengan nilai minimal 70% di setiap set.

Saya menulis ini sebagai untuk mencatat apa-apa yang sudah saya pelajari di kelas ini sebagai refleksi setiap ada pelajaran yang bisa saya ambil. Kelas ini berbentuk video rekaman yang berdurasi sekitar dua jam per minggunya, ditambah beberapa video pendek.

## [Week 0](https://cs50.harvard.edu/x/2021/notes/0/)

Di minggu pertama ini David menjelaskan dasar-dasar cara komputer berkomunikasi dengan programmer.

Programmer memang menulis program seperti Python, Java, C, dan lain-lain untuk menugasi komputer dengan berbagai task yang diperlukan, tapi komputer sebenarnya masih tidak mengerti bahasa pemrograman yang kita tulis itu.

Lalu, bahasa pemrograman yang ditulis programmer dicompile atau diterjemahkan menjadi satu-satunya bahasa yang dimengerti oleh komputer, yaitu binary.

### Binary

Binary adalah angka 0 dan 1. **0 menunjukkan off dan 1 menunjukkan on**. Komputer bisa mengerti bahasa binary karena dalam kelistrikan, kita bisa menyalakan dan mematikan sesuatu, seperti menekan saklar untuk menyalakan dan mematikan lampu.

Komputer bisa memahami ribuan kombinasi 0 dan 1 yang merepresentasikan berbagai huruf, angka, warna, atau apapun yang ditampilkan di layar. Satu angka 0 atau satu inilah yang biasa kita sebut **bit**.

Satu kelompok bits berjumlah 8 bits, dan biasa kita sebut **byte**.

Apa bedanya 32-bit dan 64-bit? Sistem 32-bit berarti sistem tersebut merepresentasikan sesuatu per 32 bits, dan sistem 64-bit berarti sistem yang merepresentasikan sesuatu per 64 bits.

### Binary ke Text

Kita bisa merepresentasikan binary ke teks menggunakan kombinasi angka yang telah semua manusia sepakati bersama. Misalnya kita menggunakan angka "65" untuk merepresentasikan huruf A, dan "66" untuk merepresentasikan huruf B.

Total kombinasi yang dihasilkan dari satu byte atau 8 bit adalah 2 pangkat 8, yaitu **256 kombinasi**.

Semua kombinasi itu telah dipetakan oleh kita manusia puluhan tahun lalu dan biasa disebut [ASCII](https://en.wikipedia.org/wiki/ASCII), American Standard Code for Information Interchange.

### Binary ke Warna

Kita juga bisa merepresentasikan bit ke warna dengan sistem **RGB**. Satu pixel mengandung kombinasi byte untuk warna merah, satu byte untuk hijau, dan satu byte untuk biru. Maka satu pixel mengandung 3 byte.

Satu byte memiliki rentang dari 0 sampai 255 (total 256 karena mulai dari 0). Misalnya 72, 73, dan 33 berarti warnanya adalah sekitar sepertiga merah, sepertiga hijau, dan sedikit biru. Hasilnya adalah warna di bawah.

![](/img/72_73_33.png)

Resolusi gambar bergantung ke jumlah pixel yang dikandung suatu gambar, maka semakin jelas suatu gambar, maka makin besar resolusinya ,makin besar bytes yang dikandungnya, dan makin besar juga sizenya.

### Algoritma

Algoritma adalah step-by-step melakukan sesuatu. Kita sering memakai algoritma di kehipan sehari-hari, misalnya ketika mengikuti resep, wikihow, dan lain-lain.

Kita bisa menyelesaikan masalah menggunakan komputer dengan cara memasukkan suatu **input**, lalu komputer akan mengolahnya dengan algoritma yang telah kita buat, dan komputer akan mengeluarkan hasilnya atau **output**.

Algoritma biasanya ditulis menggunakan bahasa pemrograman seperti Python dan kawan-kawan, kemudian dicompile agar bisa dimengerti oleh komputer. Kita harus menulis algoritama dengan jelas tanpa ambigu supaya tidak menyebabkan bug/error pada program.

### Scratch

Terakhir, David mendemonstrasikan sebuah aplikasi simple yang menggunakan konsep algoritma di pemrograman, yaitu [Scratch](https://scratch.mit.edu/) yang dikembangkan oleh MIT.

David menjelaskan beberapa konsep yang biasa digunakan di pemrograman, yaitu functions, conditions, Boolean expressions, loops, variables, events, dan threads.

Ada satu konsep yang cukup menarik yaitu **abstraction**, yaitu membuat simpel sesuatu yang kompleks. Manfaatnya adalah kita tidak perlu tahu bagaimana suatu function di program dibuat asalkan kita mengerti bagaimana menggunakannya.

## [Week 1](https://cs50.harvard.edu/x/2021/notes/1/)

Di Week 1 David menjelaskan bahasa pemrograman pertama di CS50, bahasa C. Secara garis besar, kita tinggal menerjemahkan apa yang di Scratch ke C. Struktur dan konsepnya sama, cuman sekarang kita hanya bisa menggunakan keyboard saja, tidak bisa lagi drop n drag seperti di Scratch.

Interface di C juga jauh kurang menarik dibandingkan Scratch, karena hanya ada terminal dan tempat menulis code nya yang hampir semuanya berwarna hitam.

Dalam menuliskan code, kita harus memerhatikan 3 poin, yaitu,

1. **Correctness**, yaitu apakah kode kita sudah benar dan menghasilkan output yang kita inginkan.
2. **Design,** kita harus menulis code dengan efisien dan elegan agar lebih mudah dibaca, tanpa ada repetisi yang tidak diperlukan.
3. **Style**, code kita juga harus estetik, mengikuti peraturan yang ada tentang indentasi dan simbol-simbol lain yang biasa dipakai. Memang tidak memengaruhi output code kita, tapi sangat membantu kita untuk membacanya dan menganalisisnya bila nanti ada kesalahan.

Sisanya, David menjelaskan step-by-step penulisan code dalam bahasa C di Integrated Development Environment (IDE) yang khusus dibuat untuk CS50, yaitu [CS50 IDE](https://ide.cs50.io).

Mulai dari cara menulis boilerplate, mengcompile code agar komputer bisa mengerti program kita, dan tools serta library yang sudah disediakan staff CS50 untuk mempermudah kita.

Syntax dan logic di C sangat mirip dengan Python. Saya tidak akan menulis tentang itu panjang-panjang di sini karena bisa ditemukan di tempat lain yang lebih baik.

Satu hal yang mungkin menarik, yaitu 1/10 di C bila kita menggunakan variabel bertipe float, maka hasilnya adalah 0.10000000149011611938476562500000000000000000000000, ini karena keterbatasan kemampuan komputasi komputer sehingga tidak bisa sempurna presisi.

Keterbatasan bits juga akan menyebabkan kita kehabisan bits tidak lama lagi. Puluhan tahun lalu para ilmuwan komputer menyepakati untuk menggunakan sistem 32-bit untuk menghitung detik terhitung mulai tanggal 1 Januari 1970, yang bila dihitung, akan habis di 19 Januari 2038.

## [Week 2](https://cs50.harvard.edu/x/2021/notes/2/#arrays)

Kali ini kita memperdalam Array, masih di bahasa C. Sebelumnya David menjelaskan lebih lanjut tentang compile mengcompile di C, yang di minggu lalu kita menggunakan `make`. Ternyata `make` ini hanyalah salah satu dari penerapan konsep Abstraction, jadi make itu mengautomasi langkah-langkah mengcompile code.

Bila dilakukan secara manual, bukan menggunakan make, maka kita harus menggunakan command `clang`. Selebihnya bisa dicek [di sini](https://cs50.harvard.edu/x/2021/notes/2/).

Lalu kita juga dijelaskan tentang debugging dan penggunaan memory masing-masig variabel.

Baru kemudian pembahasan utama yaitu array. Array di C sangat mirip dengan di python hanya saja syntaxnya agak lebih ribet. Konsep string keduanya juga sama, jadi kita bisa mengakses satu per satu karakter di string dengan indexing.

Satu hal yang menarik yang dijelaskan Mr. Malan, kita bisa bisa mengetahui panjang suatu string dengan menggunakan function `strlen()`, atau dengan cara manualnya yaitu melakukan iterasi sampai ditemukan char yang mempunyai value 0.

Jadi di C, ketika kita membuat sebuah string, maka C akan otomatis menambahkan satu byte di akhir yang isinya 0 semua (8 bits). Itu untuk menandai bahwa disitulah akhir sebuah string.

Uniknya, tidak seperti di Python, kita bisa mengakses memori yang berada di luar jangkauan index string kita. Misalnya jika kita membuat string bernama str dan berisi "Hi!", kita bisa mengakses `str[3]` dan bahkan `str[1000]`. Lalu kita akan melihat simbol-simbol atau value yang berada di memori tersebut. C memang memberikan kita kemampuan untuk melakukan itu.

## [Week 3](https://cs50.harvard.edu/x/2021/notes/3/)

Kali ini kita banyak membahas tentang **algoritma**. Ada dua jenis algoritma yang dibahas, yaitu **searching algorithm** dan **sorting algorithm**.

Setiap algoritma memiliki kelebihan dan kekurangannya masing-masing, ada yang lebih cepat tapi boros memori, dan ada yang jauh lebih lambat tapi cenderung ringan dijalankan.

Kecepatan suatu algoritma biasa disimbolkan dengan big O (banyak langkah di kemungkinan terburuk), omega (banyak langkah di kemungkinan terbaik), dan theta (jika big O dan omeganya sama).

### Searching Algorithm

Adalah algoritma yang digunakan untuk mencari sesuatu dalam kumpulan objek yang ada. Komputer tidak seperti manusia yang bisa melihat banyak objek secara sekilas dan langsung menemukan apa yang dicari. Komputer hanya bisa melihat satu demi satu anggota dari kumpulan objek, misalnya array.

Oleh karena itu, kita membutuhkan algoritma yang menentukan step by step apa saja yang akan dilakukan komputer untuk menemukan yang ingin kita cari. Ada dua algoritma yang bisa kita coba, yaitu,

#### Linear Search

Di sini kita melihat objeknya satu per satu, sampai kita menemukan apa yang kita cari.
Kecepatan algoritma ini Big O(n) di mana kita harus menyusuri semua objek bila objek yang ingin kita cari ternyata ada di urutan terakhir, dan Omega(1) bila ternyata objeknya ada di urutan pertama sehingga kita hanya perlu melihat satu objek.

#### Binary Search

Bisa dibilang algortima ini lebih baik karena kita tidak perlu melihat satu per satu objeknya. Pertama kita mulai dari tengah, bila valuenya ternyata lebih kecil dari yang kita cari, maka kita cari lagi dari bagian tengah dari setengah bagian kanan. Kalau valuenya lebih besar, maka carinya dari bagian tengah dari setengah bagian kiri. Begitu seterusnya sampai ketemu.

Ada satu syarat sebelum bisa melakukan algoritma binary search ini, yaitu kumpulan objek yang ingin kita telusuri harus sudah berurutan.

Kecepatan algoritma ini adalah Big O(log n) dan Omega(1).

### Sorting Algoritm

Kita bisa mengurutkan suatu kumpulan objek dengan menggunakan sorting algorithm. Ada 3 yang dibahas di minggu ini, yaitu,

#### Selection Sort

Dengan algoritma ini kita mencari objek terkecil dan menukar posisinya dengan yang ada di posisi pertama, seterusnya sampai semua terurut.
Kecepatan algoritma ini adalah Theta(n kuadrat).

#### Bubble Sort

Di algoritma ini kita menukar dua pasangan objek yang bersebelahan jika yang kanan lebih besar dari yang kiri (belum terurut).
Kecepatan algoritma ini adalah Big O(n kuadrat) dan Omega(n)

#### Merge Sort

Ini algoritma yang cukup unik karena di dalamnya ada fungsi yang memanggil fungsi itu sendiri, atau yang biasa disebut rekursif.

### Structs

Di C, selain menggunakan data type yang sudah ada seperti int, string, float, dan lainnya, kita juga bisa membuat data type atau data structure kita sendiri.

Kita bisa membuat struktur yang mendefinisikan data type atau data structure baru. Structure tersebut harus mempunyai satu atau lebih value. Misalnya kita bisa membuat data type person, yang isinya ada nama orang dan nomor teleponnya, semuanya dikumpulkan di satu data bernama person.

## [Week 4](https://cs50.harvard.edu/x/2021/notes/4/)

Di minggu ini David banyak menjelaskan tentang bagaimana cara kerja memori di komputer kita, pemosisian dan hubungannya dengan kode yang kita buat.

### Hexadecimal

Dalam pembahasan memori, kita tidak lagi menggunakan binary digit atau bit, tapi hexadecimal, atau bilangan basis 16. Terdiri dari 16 digit, yaitu 0-9 dan 6 digit tambahan dari alfabet, A-F.

Yang spesial dari hexadecimal adalah karena berbasis 16, **satu digit hexadecimal bisa merepresentasikan semua value yang mungkin direpresentasikan oleh 4 bits**, karena sama-sama berjumlah 16 value.

Ini sangat mempermudah kita dalam membaca bits yang asalnya hanya sebuah deretan 0 dan 1 yang sangat panjang jadi bisa diringkas 4 kali lipat.

Kalau kita perhatikan, sistem pewarnaan RGB menggunakan hexadecimal. Per dua digitnya merepresentasikan satu warna. FF0000 berarti full warna merah, 00FF00 full warna hijau, dan 0000FF full warna biru. Dengan demikian, berarti 000000 akan menghasilkan hitam dan FFFFFF menghasilkan putih.

Sebagai pembeda, penulisan hexadecimal menggunakan prefix 0x, misalnya 0x0000FF.

### Address

Kita bisa mengakses lokasi suatu variabel dengan menambahkan & di depan variabel tersebut. Untuk mendeklarasikan variabel berisi address, kita bisa menulis tipe data yang ada di address itu dan ditambah `*`.

Misal,

```js
int *p = &n;
```

berarti kita mengisikan variabel p dengan address n yang merupakan sebuah integer.

Dalam hal ini, p bisa kita sebut **pointer**.

Kita juga bisa mengakses suatu address dengan menambahkan —sayangnya— `*` juga ke depan address itu.

Dari minggu lalu, kita tahu bahwa string hanyalah array, dan ternyata variabel array yang kita deklarasikan selama ini adalah sebuah pointer yang menuju ke address objek yang menjadi anggota array, atau stringnya.

Dan karena objek dalam suatu array selalu berurutan, maka selain menggunakan bracket (string[0]) kita juga bisa menggunakan **pointer arithmetic** (string + 1) untuk melakukan indexing di array.

### Local & Global

Seperti yang kita tahu, ketika kita mendeklarasikan sebuah variabel di luar fungsi dan mengubah isinya di dalam sebuah fungsi, maka variabel itu aslinya tidak berubah atau hanya berubah di fungsinya saja, setelah fungsi selesai maka kembali lagi ke nilai awal.

Ini karena apa yang terjadi di fungsi, tetap di fungsi. Kecuali bila yang diubah di fungsi adalah variabel aslinya, jadi yang digunakan bukan lagi nilai yang di copy dari variabel asli, tapi address variabel tersebut.

Jadi ketika diubah di dalam fungsi, variabel itu beneran berubah karena kita menggunakan addressnya langsung.

### File Manipulation

Seperti di bahasa pemrograman lain, di C pun kita bisa mengakses dan memodifikasi file yang tersimpan di komputer kita. File yang disimpan di komputer kita berada di harddisk atau SSD dalam bentuk bits. Maka, semua file juga memiliki addressnya masing-masing.

Dengan mengaksesnya, ada banyak yang bisa kita lakukan terhadap file yang kita buka. Kita bisa memperbesar volume suara audio dengan mengalikan value per 2-byte.

Kita juga bisa merestore file yang sudah kita hapus, karena sebenarnya file yang kita hapus biasanya masih akan tetap ada di memori sampai digantikan oleh memori yang lain. Maka jika kita tahu addressnya, kita bisa dengan mudah merestorenya dengan menyimpannya di file baru.

Ada banyak hal menarik lain yang bisa dilakukan, misalnya dengan file image. Kita bisa membuat filter seperti yang ada di Instagram atau bawaan dari handphone kita, dengan memanipulasi byte di dalam file itu. Misalnya,

1. Grayscale

   Kita bisa membuat gambar berwarna menjadi hitam putih dengan merata-ratakan value Red, Green, dan Blue di setiap bit. Sehingga didapatkan tingkat shadow yang bisa merepresentasikan keseluruhan gambar.

2. Sepia

   Sama dengan grayscale, kita bisa mengubah gambar menjadi sepia atau bernuansa vintage dengan mengubah value warna dengan rumus berikut.

   ```js
   sepiaRed = .393 * originalRed + .769 * originalGreen + .189 * originalBluesepiaGreen = .349 * originalRed + .686 * originalGreen + .168 * originalBluesepiaBlue = .272 * originalRed + .534 * originalGreen + .131 * originalBlue
   ```

3. Reflection

   Untuk mencerminkan suatu gambar, kita bisa menukar pixel yang berada di kanan menjadi berada di kiri dan sebaliknya.

4. Blur

   Salah satu cara membuat sebuah gambar menjadi blur yaitu dengan mengubah tiap value yang ada di pixel dengan rata-rata value yang berada di sekelilingnya.

### Stack Overflow

Penamaan "stack overflow" untuk forum yang menjadi tempat para programmer saling membahas masalah bukanlah tanpa alasan. Stack overflow sendiri merupakan salah satu masalah yang belum ada solusi konkretnya sampai sekarang.

Itu terjadi ketika kita terlalu banyak menggunakan rekursi sehingga memakan memori yang terlalu banyak sampai kita kehabisan memori dan program menembus memori yang seharusnya tidak kita sentuh (maaf kebanyakan "memori" :)). Program akan crash dan terjadilah segmentation fault.

Satu solusinya adalah jangan pernah melakukan itu. Hindari sebisa mungkin.

## [Week 5](https://cs50.harvard.edu/x/2021/notes/5/)

Kali ini kita mempelajari hal yang penting bagi programmer, dimana semuanya mulai kerasa pusing haha. Data structure. Bagaimana kita menyimpan data yang ada sedemikian rupa sehingga program kita menjadi seefisien mungkin, dalam waktu dan memori, baik ketika menyimpan, mencari, atau menghapus data tersebut.

Kita sudah mengenal data structure yang paling simple yaitu array, dimana kita bisa mengakses data cukup dengan menggunakan indexing. Tapi kita akan menemui kesulitan di array ketika menghapus atau menambahkan data di posisi tengah. Walaupun mudah untuk diurutkan atau biasanya sudah terurut, objek-objek yang ada di array sudah fix jumlahnya, tidak ada fleksibilitas untuk mengubah jumlah anggota array setelah mendeklarasikannya pertama kali.

Untuk mengatasi kekurangan-kekurangan array, kita bisa menggunakan data structure yang lain. Berikut beberapa data structure yang bisa digunakan,

### Linked List

Adalah struktur yang memungkinkan kita mengaitkan semua data satu sama lain, dengan cara menambahkan pointer di dalam setiap data yang menunjuk ke data selanjutnya, seperti bergandengan tangan.

Menambahkan data ke linked list akan lebih mudah karena kita tinggal menyusupkan data ke tengah, lalu mengaitkannya dengan yang lain. Begitu juga kalau kita ingin menghapus datanya. Hanya masalahnya ketika mencari data, kita harus menyusurinya satu per satu karena komputer tidak bisa langsung melihat keseluruhan data seperti manusia, kecuali data yang sudah diakses satu per satu itu.

Kita juga kehilangan kemampuan untuk mengurutkan data karena linked list biasanya memasukkan data baru ke awal list, demi mempermudah inserting.

### Hash Table

Struktur ini seperti dictionary, dimana semua data memiliki kunci dan data disimpan di kunci tersebut. Kita menuliskan sebuah fungsi yang mereturn hash code datanya, dan tinggal menyimpan data di kunci itu. Dengan begitu juga proses mencari dan menghapus data di hash table akan mudah dilakukan dan waktunya relatif kecil.

Apa yang terjadi kalau satu data mempunyai key yang sama? Ada beberapa cara untuk mengatasinya, tapi yang paling efektif adalah kita mengubah key jadi bukan hanya menyimpan sebuah data, melainkan sebuah linked list. Jadi kita menggabungkan dua data structure di sini, hash table dan linked list.

Sayangnya, sama seperti linked list, kita tidak bisa mengurutkan data di hash table.

### Trie

Mungkin ini adalah data structure terbaik di list ini kalau kita memandang dari fungsionalitasnya. Untuk menyimpan data dalam sebuah [trie](https://en.wikipedia.org/wiki/Trie), misalnya data yang ingin kita simpan adalah sebuah string, maka kita menyimpan huruf per huruf dari string tersebut sehingga membentuk sebuah pohon yang memiliki root.

Dengan begitu, kita bisa mendapatkan kecepatan yang optimal saat menginput, mencari, dan menghapus data di trie. Semua data juga sudah terurut karena kita bisa mengurutkan data seiring dengan membuatnya, seperti di array.

Namun, untuk semua fitur dan fungsionalitas yang kita dapatkan dalam apapun di programming, selalu ada yang harus kita bayar, bisa waktu kita sebagai manusia, waktu jalannya program, memori di komputer yang terkuras, kompleksitas, uang, dan lainnya.

Dalam trie, harganya adalah space yang cukup banyak. Trie memakan space yang tidak sedikit bahkan jika data yang kita simpan hanya sedikit. Maka, kalau space diutamakan, kita sebaiknya menggunakan data structure yang lain.

## [Week 6](https://cs50.harvard.edu/x/2021/notes/6/)

Di minggu ini kita menconvert semua yang sudah kita pelajari di C ke bahasa Python. Sekilas, hampir semua syntax di Python memiliki struktur yang sama dengan syntax di C. Hanya saja di Python banyak yang menjadi lebih singkat.

Python lebih banyak menggunakan syntax bahasa Inggris daripada menggunakan simbol, seperti or, and, while, if, dsb.

Di Python juga sudah tidak ada lagi syntax yang terkesan seperti formalitas dan hanya sering membuat code jadi typo, seperti titik koma di akhir statement dan kurung siku di setiap condition. Syntax yang aneh itu digantikan oleh indentasi, yang sebenarnya juga membantu code agar lebih mudah dibaca. Namun, ingat bahwa indentasi styling di Python hukumnya mutlak, code akan error kalau kita lupa.

Perbedaannya lagi adalah ketika menjalankan code Python, kita tidak perlu lagi mengcompile setiap ada perubahan baru karena Python menggunakan interpreter, yang menerjemahkan code Python yang kita tulis ke bahasa binary agar bisa dimengerti oleh komputer.

Sayangnya, karena menggunakan interpreter setiap menjalankan program, baris per baris, Python bisa jadi memiliki waktu running time yang lebih panjang dibandingkan C. Seperti yang sudah kita bahas sebelumnya, setiap fitur dan fungsionalitas yang kita gunakan pasti ada harganya.

Karena simplenya coding di Python, sekarang Python termasuk bahasa pemrograman yang paling sering digunakan dalam dunia modern, seperti machine learning, data science, artificial intelligence, dan lainnya. C sudah mulai ditinggalkan karena Python jauh lebih efisien dan efektif.

## [Week 7](https://cs50.harvard.edu/x/2021/notes/7/)

Di minggu ini kita mempelajari bahasa baru yang khusus untuk mengolah relational database yang berbentuk table. SQL.

Dalam mengolah tabel, ternyata akan jauh lebih efisien dan lebih mudah bila menggunakan SQL dibanding Python, karena syntax di SQL lebih cocok untuk pengolahan relational database itu.

SQL punya 4 tipe operasi syntax, yaitu,

- `CREATE`
- `READ`
- `UPDATE`
- `DELETE`

Biasa disingkat CURD, tapi READ di SQL syntaxnya diganti dengan SELECT. Simple tapi fungsional. Pengolahan tabel yang awalnya bisa makan belasan baris di Python jadi bisa sebaris saja di SQL.

Di minggu ini baru difokuskan untuk membaca data menggunakan SELECT, dengan menggabungkan tabel-tabel yang ada di satu data agar bisa mengolah keseluruhan data di semua tabel secara serentak dengan mengambil informasi yang diinginkan setelah data difilter.

Sebelumnya data dinormalize atau dibersihkan dengan menghilangkan semua redundant atau data-data yang tidak dibutuhkan.

Untuk melihat semua tabel dalam suatu data, bisa menggunakan syntax .schema di command line. Outputnya adalah semua command yang digunakan untuk membuat tabel-tabel di data.

Kalau nau membuat atau menambahkan data ke tabel, kita bisa menambah row untuk menambah data, dan menambah column untuk menambahkan atribut / properti ke data di tabel.

## [Week 8](https://cs50.harvard.edu/x/2021/notes/8/)

Setelah sebelumnya mempelajari beberapa bahasa pemrograman, sekarang kita mulai merepresentasikan semuanya ke bentuk yang bisa dirasakan panca indra, dimulai dari web programming.

Pertama kita harus memahami terlebih dulu bagaimana cara kerja internet.

## Internet

Sebenarnya internet bukanlah sesuatu yang menghubungkan semuanya, tapi internet adalah jaringan itu sendiri, yang terdiri dari semua komputer yang terhubung di dalamnya. Berkomunikasi satu sama lain, saling berbagi data dalam bentuk 0 dan 1.

### Routers

Untuk menghubungkan semua komputer ini, dibutuhkan alat yang merupakan sebuah komputer yang juga memiliki CPU dan memori tapi bertujuan khusus untuk mentransmisikan data melalui kabel atau wireless. Semua aliran data terjadi di sini.

### Protocols

Untuk menjamin orisinalitas data yang dikirim dan diterima, ada konvensi standar yang berlaku yang mengatur semuanya dalam suatu **protocol**. Protocol bisa mengatur kemana router seharusnya mengirim data agar data bisa sampai ke tujuan.

### IP Address

Semua komputer memiliki address masing-masing yang berbeda satu sama lain, seperti alamat rumah. Terdiri dari 4 x 8 bits (32 bits), yang menghasilkan sekitar 4 miliar IP Address, dikenal dengan IPv4.

Tapi itu tidak cukup, maka diciptakan IPv6 yang terdiri dari 8 x 16 bits (128 bits) yang bisa menghasilkan 3.4 x 10^38 address yang berbeda.

### DNS

Akan sulit bila kita harus mengetikkan alamat IP komputer yang kita tuju, maka diciptakanlah DNS agar kita bisa menuliskan URL seperti yang biasa kita lakukan. DNS akan mengkonversi URL yang kita ketik ke IP address komputer yang kita tuju.

Tidak ada DNS pusat yang menyimpan semua URL dan IP address di dunia. Semuanya tersebar di DNS-DNS lokal, sebagaimana tidak ada buku telepon yang menyimpan semua nomor telepon di dunia.

### TCP

Transmission Control Protocol memastikan semua data yang diminta sampai ke tujuan. Bila data tidak sempurna, maka TCP bisa meminta server untuk mengirim ulang bagian data yang hilang.

Sebelumnya, data yang dikirim umumnya telah dibagi ke beberapa packet. Kalau filenya besar, net neutrality secara otomatis akan memutuskan untuk memecahnya menjadi beberapa paket kecil.

Lalu TCP menyediakan port yang bisa diisi dengan service yang dipakai oleh data itu, misalnya 25 untuk email dan 80 untuk web HTTP.

Setelah semua paket sampai dan datanya komplit, TCP menyusun ulang data sesuai urutan yang ditulis di data itu.

Karena hampir selalu berjalan bersamaan, penulisan TCP biasanya dibarengi dengan IP menjadi TCP/IP.

Kita mungkin pernah mendengar ada layanan yang bisa memprioritaskan kita dalam suatu jaringan, dan itu bisa terjadi karena net neutrality juga bisa memprioritaskan pelanggan yang membayar lebih.

## Web Development

Dalam mengakses web, kita sebenarnya melakukan HTTP request.

HTTP atau Hypertext Transfer Protocol adalah salah satu cara bagaimana web browser dan web server bisa berkomunikasi lewat TCP/IP.

HTTPS adalah versi secure / aman dari HTTP. Untuk bisa mendapatkan sertifikat SSL dan memperoleh HTTPS, pemilik website harus mengajukan beberapa hal untuk verifikasi. Web yang sudah mendukung HTTPS biasanya akan langsung mengalihkan kita kesana walau yang kita akses adalah HTTP.

Ada dua command di HTTP; GET yaitu meminta data ke server, dan POST yang berarti server mengirimkan data yang diminta.

Contoh HTTP request:

`HTTP/1.1 200 OKContent-Type: text/html...`

Kalau berjalan lancar, maka server akan membalas dengan:

`HTTP/1.1 200 OKContent-Type: text/html...`

200 adalah kode yang menunjukkan kalau semuanya lancar. Data yang diminta ada dan berhasil dikirimkan. Ada beberapa kode lain yang menunjukkan macam-macam alasan kenapa data gagal diberikan, yaitu:

- `301 Moved Permanently`
- `304 Not Modified`
  - Ini mengizinkan browser untuk menggunakan cache (local copy), dari beberapa file seperti gambar, daripada mengirimnya lagi dari server.
- `307 Temporary Redirect`
- `401 Unauthorized`
- `403 Forbidden`
- `404 Not Found`
- `418 I'm a Teapot`
- `500 Internal Server Error`
  - Buggy code on a server might result in this status code.
- `503 Service Unavailable`

## HTML

Hypertext Markup Language (HTML) bukanlah suatu bahasa pemrograman, karena tidak ada pendeklarasian variabel, conditioning, dan lainnya yang seharusnya bisa kita temukan di bahasa pemrograman.

Kalau kita melakukan HTTP request, data yang kita terima berbentuk HTML, yang memberitahu browser kita apa saja konten yang ada dan bagaimana menampilkannya.

## CSS

Cascading Stylesheet juga bukan bahasa pemrograman, ini bisa disebut pelengkap untuk HTML yang bisa meningkatkan keestetikan web. Tersedia banyak syntax yang bisa menampilkan konten dengan berbagai style.

Ada juga framework yang cukup terkenal di CSS yaitu [Bootstrap](https://getbootstrap.com/), yang menyediakan berbagai template untuk komponen-komponen di HTML, CSS, dan Javascript.

## JavaScript

Untuk membuat web responsif dan bisa berinteraksi dengan pengguna, dibutuhkan suatu bahaas pemrograman yang bisa bekerja sama dengan HTML, yaitu JavaScript.

Javascript termasuk Clientside Programming, yang berarti programnya dijalankan menggunakan resource user. Bukan di cloud. User menerima filenya, lalu mengolahnya di device yang digunakan dan menampilkan hasilnya di browser.

Seperti CSS, JavaScript juga melengkapi HTML. Bisa ditulis satu file dengan HTML, atau dengan file terpisah lalu dilink di tag, dibungkus tag .

JavaScript bisa membungkus keseluruhan web ke dalam satu objek, yaitu DOM, Document Object Model, lalu kita bisa memanipulasi objek yang ada, tanpa harus mengubah langsung dari HTMLnya.

Pengubahan ini bisa diatur berdasarkan aktivitas pengguna, misalnya kalau tombol ini diklik, akan memunculkan sebuh prompt. Ini bisa menjadi dasar awal responsivitas website.

## [Week 9](https://cs50.harvard.edu/x/2021/notes/9/)

Minggu ini adalah saatnya menggabungkan semua yang sudah kita pelajari ke satu pengaplikasian. Sekarang kita mulai mengenal satu library yang biasa digunakan untuk web development, yang berbasis Python, yaitu Flask. Flask juga merupakan sebuah framework, jadi library ini punya beberapa aturan yang menjelaskan bagaimana seharusnya ini ditulis.

Di Flask, pengorganisasian file adalah sebagai berikut.

`application.py requirements.txt static/ templates/`

- `application.py` akan punya kode Python untuk server web kita.
- `requirements.py` berisi library yang diperlukan untuk web app kita.
- `static/` adalah folder berisi file static, seperti CSS dan JavaScript.
- `templates/` adalah folder yang berisi template yang digunakan untuk membuat file HTML kita nanti.

Flask mengimplementasikan suatu konsep design pattern yaitu MVC (Model View Controller) yang mengatur bagaimana code dan program berjalan.

![](/img/mvc.png)

Secara umum, kita menuliskan code yang berisi aplikasi web kita di `application.py`. Lalu kita mengatur apa saja yang ditampilkan dan dilakukan program per page nya. Misalnya index akan menampilkan index.html bila requestnya GET dan akan mengirim dan menyimpan suatu form kalau requestnya POST.

Kita bisa mensinergikan SQL di `application.py` dan fungsi-fungsi Python di HTML yang merepresentasikan page website kita. Tapi Python di Flask dalam bentuk [Jinja](https://jinja.palletsprojects.com/).

Untuk menyimpan suatu sesi, sehingga website bisa berinteraksi dengan user yang sudah register/login, kita bisa memakai variabel Session yang sudah disediakan. Ini akan menyimpan data user di cookies sehingga user bisa mengakses konten khusus yang disediakan bagi yang sudah login dan tidak perlu login lagi.

Kita juga bisa menggunakan AJAX untuk mengupdate sebagian web kita tanpa merefresh seluruh page, sesuai dengan interaksi yang dilakukan user, atau jika memang diperlukan. Seperti misalnya live score pertandingan sepakbola di suatu situs berita.

Ini semua adalah dasar web development yang diperlukan untuk membangun suatu web yang responsif dan fungsional.

Setelah menyelesaikan semua Lab dan Problem Set dengan minimal nilai 70% di setiap tugas, saya mendapatkan sertifikat yang bisa dilihat [di sini](https://certificates.cs50.io/eb995a53-6bd5-461b-b88a-3decd3365027.pdf?size=A4).
