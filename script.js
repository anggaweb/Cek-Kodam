document.getElementById('cekKodamForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nama = document.getElementById('nama').value;
    const tanggalLahir = document.getElementById('tanggalLahir').value;

    // Array nama-nama kodam yang unik dan lucu
    const namaKodam = [
        "Kodam Ganteng",
        "Ratu Centil",
        "Si Kocak",
        "Dewi Manja",
        "Pendekar Nyengir",
        "Jagoan Kocak",
        "Malaikat Usil",
        "Si Misterius",
        "Dewa Santai",
        "Kodam Kece",
        "Pangeran Lucu",
        "Putri Tertawa",
        "Raja Heboh",
        "Dewi Ceria",
        "Pendekar Gombal",
        "Nona Ngocol",
        "Tuan Jenaka",
        "Dewa Garing",
        "Si Tukang Tidur",
        "Kodam Jagoan",
        "Harimau putih",
        "Ular naga",
        "Buaya putih",
        "Bhatara karang",
        "Sulaiman"
    ];

    // Pilih nama kodam secara acak
    const kodamAcak = namaKodam[Math.floor(Math.random() * namaKodam.length)];

    // Simpan data ke LocalStorage
    const kodamData = { nama, tanggalLahir, kodam: kodamAcak };
    localStorage.setItem('kodamData', JSON.stringify(kodamData));

    // Tampilkan hasil di halaman
    document.getElementById('hasil').innerText = `Halo ${nama}, berdasarkan tanggal lahir Anda (${tanggalLahir}), Anda memiliki kodam yang bernama ${kodamAcak}!`;
});

    document.addEventListener('DOMContentLoaded', function() {
        const savedData = JSON.parse(localStorage.getItem('kodamData'));
        if (savedData) {
            document.getElementById('hasil').innerText = `Halo ${savedData.nama}, berdasarkan tanggal lahir Anda (${savedData.tanggalLahir}), Anda memiliki kodam yang bernama ${savedData.kodam}!`;
        }
    });
