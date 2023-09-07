Untuk membuat proyek Express.js dengan TypeScript, Anda dapat mengikuti langkah-langkah berikut:

1. **Persiapkan Lingkungan Kerja:**

   Pastikan Anda telah menginstal Node.js dan npm (Node Package Manager) di komputer Anda. Anda juga mungkin ingin menggunakan manajer proyek seperti Yarn.

2. **Buat Proyek Baru:**

   Buat direktori untuk proyek Anda dan navigasikan ke dalamnya melalui terminal.

   ```bash
   mkdir nama-proyek-express-ts
   cd nama-proyek-express-ts
   ```

3. **Inisialisasi Proyek Node.js:**

   Jalankan perintah `npm init` atau `yarn init` untuk menginisialisasi proyek Anda. Ikuti instruksi yang muncul untuk mengisi informasi proyek seperti nama, deskripsi, versi, dan lain-lain.

4. **Instalasi Express dan TypeScript:**

   Instal Express.js dan TypeScript serta modul-modul terkait dengan menjalankan perintah berikut:

   ```bash
   npm install express typescript @types/express @types/node ts-node
   ```

5. **Konfigurasi TypeScript:**

   Buat berkas `tsconfig.json` di dalam direktori proyek Anda dan konfigurasi TypeScript Anda seperti ini:

   ```json
   {
     "compilerOptions": {
       "target": "ES6",
       "module": "CommonJS",
       "outDir": "./dist",
       "rootDir": "./src",
       "strict": true,
       "esModuleInterop": true,
       "skipLibCheck": true
     }
   }
   ```

6. **Buat Struktur Direktori:**

   Buat struktur direktori dengan direktori `src` sebagai tempat untuk kode sumber TypeScript Anda. Anda dapat membuat direktori `src` dan file `index.ts` di dalamnya sebagai titik awal.

   ```bash
   mkdir src
   touch src/index.ts
   ```

7. **Kode Sumber Awal:**

   Buka berkas `src/index.ts` dan tambahkan kode awal untuk membuat server Express.js sederhana:

   ```typescript
   import express from 'express';

   const app = express();
   const port = process.env.PORT || 3000;

   app.get('/', (req, res) => {
     res.send('Hello, World!');
   });

   app.listen(port, () => {
     console.log(`Server is running on port ${port}`);
   });
   ```

8. **Menjalankan Proyek:**

   Tambahkan skrip dalam berkas `package.json` untuk menjalankan proyek Anda. Anda dapat menambahkan skrip berikut:

   ```json
   "scripts": {
     "start": "ts-node src/index.ts"
   }
   ```

9. **Menjalankan Server:**

   Sekarang, Anda dapat menjalankan server Express.js Anda dengan perintah:

   ```bash
   npm start
   ```

   Server akan berjalan pada port yang telah Anda tentukan (3000 jika tidak ada PORT yang ditentukan dalam environment variable).

10. **Cek Server:**

    Buka peramban web dan kunjungi `http://localhost:3000` (atau port yang Anda tentukan) untuk melihat pesan "Hello, World!" yang dikirim oleh server Anda.

Selamat, Anda telah berhasil membuat proyek Express.js dengan TypeScript! Anda dapat mulai mengembangkan aplikasi Anda dari sini dan menambahkan rute, middleware, dan logika lain sesuai kebutuhan Anda.