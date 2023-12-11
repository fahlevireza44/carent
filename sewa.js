function validateSewa() {
    // Mendapatkan nilai dari input form
    var pilihMobil = document.getElementById('pilihMobil').value;
    var durasiSewa = document.getElementById('durasiSewa').value;
    var hargaSewa = document.getElementById('hargaSewa').value;
    var tanggalSewa = document.getElementById('tanggalSewa').value;

    // Mendapatkan informasi email pengguna yang sedang login dari localStorage
    var userEmail = localStorage.getItem('loggedInUserEmail');

    if (!userEmail) {
        // Lakukan penanganan jika email pengguna tidak tersedia
        alert('Tidak ada pengguna yang login!');
        return false;
    }

    // Membuat objek sewa termasuk informasi email pengguna
    var newSewa = {
        emailPengguna: userEmail,
        pilihMobil: pilihMobil,
        durasiSewa: durasiSewa,
        hargaSewa: hargaSewa,
        tanggalSewa: tanggalSewa
    };

    // Simpan data sewa ke dalam array laporansewa di localStorage
    if (localStorage.getItem('laporanSewa') === null) {
        // Buat array laporansewa jika belum ada
        var laporanSewa = [];
        laporanSewa.push(newSewa);
        localStorage.setItem('laporanSewa', JSON.stringify(laporanSewa));
    } else {
        // Ambil array laporansewa dari local storage, tambahkan newSewa, dan simpan kembali
        var laporanSewa = JSON.parse(localStorage.getItem('laporanSewa'));
        laporanSewa.push(newSewa);
        localStorage.setItem('laporanSewa', JSON.stringify(laporanSewa));
    }

    // Tampilkan notifikasi
    alert('Proses sewa berhasil, silakan cek email.');

    // Redirect ke halaman index.html setelah penyimpanan data
    window.location.href = 'index.html';

    // Mengembalikan nilai boolean
    return false;
}