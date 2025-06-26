# Instruksi Kerja - Aplikasi Web

Aplikasi web untuk membuat dan mengelola dokumen Instruksi Kerja dengan format profesional yang siap untuk dicetak dalam ukuran A4. **Update terbaru**: Fitur kontrol ukuran gambar dan layout print yang diperbaiki!

## Fitur Utama

### 🖼️ **Manajemen Gambar yang Dioptimasi** ⭐ *BARU*
- **Upload gambar dengan kontrol ukuran**: Pilih gambar dan atur ukuran sesuai kebutuhan
- **Kontrol kualitas**: Atur kualitas kompresi untuk mengoptimalkan ukuran file
- **Pertahankan rasio aspek**: Opsi untuk menjaga proporsi gambar
- **Pratinjau real-time**: Lihat hasil sebelum menerapkan
- **Optimasi otomatis**: Gambar dikompresi untuk mengurangi ukuran file JSON
- **Validasi file**: Maksimal 5MB, mendukung JPG, PNG, GIF, WebP

### 📄 **Layout Print yang Profesional** ⭐ *DIPERBAIKI*
- **Header konsisten**: Header muncul di setiap halaman saat dicetak
- **Format A4 yang tepat**: Layout dioptimalkan untuk pencetakan A4
- **Page break yang cerdas**: Konten tidak terpotong di tengah
- **Format tanggal Indonesia**: Tanggal otomatis diformat dalam bahasa Indonesia saat print

### 💾 **Sistem Penyimpanan**
- **Auto-save**: Dokumen disimpan otomatis setiap 30 detik
- **Export/Import JSON**: Backup dan restore data dengan mudah
- **LocalStorage**: Data tersimpan di browser untuk akses cepat
- **Kompatibilitas mundur**: Mendukung file JSON format lama

### ✅ **Elemen yang Dapat Diedit**
- **Semua teks**: Klik langsung pada teks untuk mengedit
- **Logo**: Dapat diganti dengan kontrol ukuran yang canggih
- **Form fields**: Kode IK, nomor revisi, halaman
- **Konten**: Pengertian, tujuan, kebijakan, prosedur, unit terkait
- **Tanda tangan**: Nama dan NIP untuk semua pihak

## Struktur File

```
├── index.html          # File HTML utama
├── style.css           # File CSS terpisah untuk styling
├── script.js           # File JavaScript untuk fungsionalitas
├── logo-placeholder.svg # Logo placeholder default
└── README.md           # Dokumentasi ini
```

## Cara Menggunakan

### 🖼️ Mengganti Logo (Fitur Baru!)
1. Klik tombol **"Ganti Logo"**
2. Pilih file gambar (maksimal 5MB)
3. **Modal kontrol ukuran** akan muncul:
   - **Lebar dan Tinggi**: Sesuaikan dalam pixel (50-200px)
   - **Pertahankan rasio aspek**: Centang untuk menjaga proporsi
   - **Kualitas**: Geser slider untuk mengatur kompresi (10-100%)
   - **Pratinjau**: Lihat hasil real-time
4. Klik **"Terapkan"** untuk menggunakan gambar

### 🖨️ Mencetak Dokumen
1. Isi semua field yang diperlukan
2. Klik tombol **"Print"**
3. Dokumen akan dicetak dengan:
   - Header yang konsisten di setiap halaman
   - Format tanggal Indonesia otomatis
   - Layout yang dioptimalkan untuk A4

### 💾 Menyimpan dan Memuat Data
- **Simpan Manual**: Klik tombol "Simpan"
- **Auto-save**: Aktif otomatis setiap 30 detik
- **Export JSON**: Klik "Export JSON" untuk backup
- **Import JSON**: Klik "Import JSON" untuk restore data

### ✏️ Mengedit Konten
1. **Klik langsung** pada teks yang ingin diubah
2. **Ketik** konten baru
3. **Klik di luar** untuk menyimpan perubahan
4. **Auto-save** akan menyimpan otomatis

## Spesifikasi Teknis

### 🖼️ Format Gambar yang Didukung
- **Tipe file**: JPG, PNG, GIF, WebP
- **Ukuran maksimal**: 5MB
- **Ukuran output**: 50-200 pixel (lebar/tinggi)
- **Kualitas**: 10-100% (JPEG compression)
- **Optimasi**: Otomatis untuk mengurangi ukuran file

### 🌐 Kompatibilitas Browser
- **Chrome/Edge** (Recommended) ⭐
- **Firefox** ✅
- **Safari** ✅
- **Internet Explorer 11+** ⚠️

### 📄 Ukuran Print
- **Format**: A4 (210 × 297 mm)
- **Margin**: 15-20mm
- **Orientasi**: Portrait
- **DPI**: Optimized for 300 DPI

## Fitur Baru (Update Terbaru)

### ✨ Kontrol Ukuran Gambar
- Modal interaktif untuk mengatur ukuran gambar
- Pratinjau real-time sebelum menerapkan
- Kontrol kualitas untuk optimasi file size
- Validasi ukuran file (maksimal 5MB)

### 🖨️ Print Layout yang Diperbaiki
- Header tidak terpotong di halaman kedua
- Page break yang lebih baik
- Optimasi untuk printer A4
- Format tanggal otomatis dalam bahasa Indonesia

### 💡 Optimasi Performa
- Kompresi gambar otomatis
- Ukuran file JSON yang lebih kecil
- Loading yang lebih cepat
- Kompatibilitas dengan data lama

## 💡 Tips Penggunaan

### Untuk Hasil Gambar Terbaik:
1. **Kualitas optimal**: Gunakan 70-80% untuk keseimbangan kualitas dan ukuran
2. **Ukuran logo**: 70-80 pixel untuk hasil print yang baik
3. **Format file**: JPEG untuk foto, PNG untuk logo dengan transparansi

### Untuk Print yang Sempurna:
1. **Browser**: Gunakan Chrome atau Edge untuk hasil terbaik
2. **Print preview**: Selalu cek preview sebelum mencetak
3. **Margin printer**: Pastikan minimal 15mm
4. **Kertas**: Gunakan kertas A4 berkualitas baik

### Untuk Backup Data:
1. **Export rutin**: Export JSON secara berkala
2. **Nama file**: Gunakan tanggal dalam nama file backup
3. **Penyimpanan**: Simpan di cloud atau drive eksternal

## 🔧 Troubleshooting

### Gambar terlalu besar atau lambat loading:
- Kurangi kualitas kompresi (50-70%)
- Perkecil ukuran pixel
- Gunakan format JPEG untuk foto

### Header terpotong saat print:
- Pastikan margin printer minimal 15mm
- Gunakan browser Chrome/Edge
- Periksa pengaturan print browser (scale: 100%)

### Data tidak tersimpan:
- Periksa apakah browser mendukung localStorage
- Pastikan tidak dalam mode incognito/private
- Export JSON sebagai backup manual

### Modal tidak muncul:
- Refresh halaman
- Pastikan JavaScript aktif di browser
- Coba browser yang berbeda

## Elemen yang Dapat Diedit

### Header Section
- Nama institusi (Jurusan Keperawatan)
- Detail institusi (Politekkes Semarang, Prodi Tegal)
- Judul utama (INSTRUKSI KERJA)
- Subtitle (Pemeliharaan Nebulizer)
- Kode IK, Nomor Revisi, Halaman

### Content Section
- **Pengertian** - Deskripsi langkah kerja
- **Tujuan** - List tujuan pemeliharaan (format bullet points)
- **Kebijakan** - Kebijakan yang berlaku
- **Prosedur** - Langkah-langkah prosedur (format numbered list)
- **Unit Terkait** - Unit/bagian yang terkait

### Signature Section
- Instruktur (nama dan jabatan)
- Ka. Sub Unit Lab (nama, jabatan, NIP)
- Ketua Jurusan (nama, jabatan, NIP)

## Teknologi yang Digunakan

- **HTML5** - Struktur dokumen
- **CSS3** - Styling dan layout
- **Vanilla JavaScript** - Fungsionalitas interaktif
- **LocalStorage** - Penyimpanan data lokal
- **SVG** - Logo placeholder

## Kustomisasi

### Mengubah Styling
Edit file `style.css` untuk mengubah:
- Warna border dan background
- Font family dan size
- Spacing dan padding
- Layout responsif

### Menambah Fungsionalitas
Edit file `script.js` untuk menambah:
- Validasi input
- Export ke PDF
- Integrasi dengan database
- Fitur kolaborasi

### Mengubah Layout
Edit file `index.html` untuk:
- Menambah/mengurangi field
- Mengubah struktur tabel
- Menambah section baru

## Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## Print Support

Template ini dioptimalkan untuk pencetakan pada kertas A4 dengan:
- Margin yang sesuai
- Font yang mudah dibaca
- Layout yang tidak terpotong
- Sembunyikan elemen kontrol saat print

## Lisensi

Template ini bebas digunakan untuk keperluan pendidikan dan institusi.

---

**Dibuat untuk:** Politekkes Semarang - Jurusan Keperawatan Prodi Tegal
**Format:** Instruksi Kerja Pemeliharaan Alat & Peralatan
