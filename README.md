# KeDaTech_JrProgrammerTest_Client


### Teknologi yang digunakan & Alasan:

1. Vue.js: simpel dan terdapat rambu-rambu yang jelas & tegas. Sangat cocok bagi yang menginginkan kepraktisan dan keteraturan, teruatam di level prototyping. Fitur-gitur utama yang digunakan:
- Vuex
- Store
- Router
- Responsive
2. JSON Server: paket mockup server dari JavaScript. Cocok untuk keperluan simulasi ditahap prototyping.
   Dalam kasus assignment ini, saya gunakan untuk simulasi fitur login.
3. Vue-Responsive: paket Vue.js untuk menjadikan laman responsive.
4. jQuery: prasyarat untuk menggunakan Bootstrap di Vue.js
5. Bootstrap-Vue: Bootstrap untuk Vue. Sengaja saya pilih dibandingkan framework visual lain karena paling jelas dokumentasinya & fitur termasuk lengkap, juga enak dilihat. Fitur-fitur utama yang digunakan:
- Navbar
- Button
- Table


### Routing Tersedia
1. Landing: halaman utama saat user belum register/login
Landing terdiri dari 3 sub-route:
- About
- Pricing
- Contact
- Login (merujuk ke login form)
Mengikuti spec yang menghendaki scroll-down, maka penggunaan router-view menjadi redundant.
Namun, saya tetap menyiapkan display model router-view (rendering komponen setiap klik link) namun di-comment (di page `../views/NavLanding`).

Disediakan login form untuk login.


2. Home: halaman setelah user login. Disediakan tombol logout.
