function dapatkanPasaran(tanggal) {
    const daftarPasaran = ["Wage", "Kliwon", "Legi", "Paing", "Pon"];
    // 1 Januari 1970 adalah Kamis Wage
    const selisihHari = Math.floor(tanggal.getTime() / (24 * 60 * 60 * 1000));
    return daftarPasaran[selisihHari % 5];
}

function perbaruiJam() {
    const sekarang = new Date();

    // -- BAGIAN JAM --
    let h = String(sekarang.getHours()).padStart(2, '0');
    let m = String(sekarang.getMinutes()).padStart(2, '0');
    let s = String(sekarang.getSeconds()).padStart(2, '0');
    
    document.getElementById("jam").textContent = `${h}:${m}:${s}`;

    // -- BAGIAN TANGGAL & PASARAN --
    const namaHari = sekarang.toLocaleDateString('id-ID', { weekday: 'long' });
    const tgl = sekarang.getDate();
    const namaBulan = sekarang.toLocaleDateString('id-ID', { month: 'long' });
    const tahun = sekarang.getFullYear();
    const pasaran = dapatkanPasaran(sekarang);

    // Hasil format: Selasa Wage, 7 April 2026
    const formatTanggal = `${namaHari} ${pasaran}, ${tgl} ${namaBulan} ${tahun}`;
    document.getElementById("tanggal").textContent = formatTanggal;
}

// Jalankan fungsi setiap 1 detik
setInterval(perbaruiJam, 1000);

// Panggil langsung agar tidak kosong saat pertama kali dibuka
perbaruiJam();
