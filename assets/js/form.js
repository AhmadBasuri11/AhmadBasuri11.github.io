const form = document.getElementById('daftarForm');
let patientNumber = 1;

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const namaLengkap = document.getElementById('nama_lengkap').value;
    const usia = document.getElementById('usia').value;
    const poli = document.getElementById('poli').value;
    const tanggalPeriksa = document.getElementById('tanggal_periksa').value;

    if (!namaLengkap || !usia || !poli || !tanggalPeriksa) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Harap isi semua field!',
        });
        return;
    }

    try {
        const response = await fetch('https://your-api-endpoint.com/daftar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nomor_urut: patientNumber++,
                nama_lengkap: namaLengkap,
                usia,
                poli,
                tanggal_periksa: tanggalPeriksa,
            }),
        });

        if (!response.ok) {
            throw new Error('Terjadi kesalahan saat mengirim formulir.');
        }

        Swal.fire({
            icon: 'success',
            title: 'Berhasil',
            text: 'Pendaftaran anda berhasil. Nomor urut anda adalah ' + patientNumber + '. Silakan datang ke rumah sakit pada tanggal yang telah dipilih.',
        });

        form.reset();
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Terjadi kesalahan saat mengirim formulir. Silakan coba lagi.',
        });
    }
});