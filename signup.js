function validateSignUp() {
    // Mendapatkan nilai dari input form
    var nama = document.getElementById('nama').value;
    var nomorIdentitas = document.getElementById('nomor-identitas').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Membuat objek user
    var newUser = {
        nama: nama,
        nomorIdentitas: nomorIdentitas,
        email: email,
        password: password
    };

    // Simpan data user ke dalam array datauser.js
    if (localStorage.getItem('users') === null) {
        // Buat array users jika belum ada
        var users = [];
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
    } else {
        // Ambil array users dari local storage dan tambahkan newUser
        var users = JSON.parse(localStorage.getItem('users'));
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
    }

    // Pindah ke halaman login.html
    window.location.href = 'login.html';

    // Return false agar form tidak di-submit secara default
    return false;
}