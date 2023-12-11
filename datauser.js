// datauser.js

// Array untuk menyimpan data pengguna
const datauser = [
    // Data pengguna bisa ditambahkan di sini dalam format objek
    // { nama: 'Nama', nomorIdentitas: 'Nomor Identitas', email: 'Email', password: 'Password' }
];

// Export array datauser agar bisa diakses dari file lain jika diperlukan
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = datauser;
}