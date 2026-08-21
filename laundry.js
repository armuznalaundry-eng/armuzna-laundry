<!-- Script Kalkulator -->
<script>
    document.addEventListener('DOMContentLoaded', function () {
        const pilihanLayanan = document.getElementById('pilihanLayanan');
        const inputBerat = document.getElementById('inputBerat');
        const labelInput = document.getElementById('labelInput');
        const hasilHitung = document.getElementById('hasilHitung');

        function kalkulasi() {
            if (!pilihanLayanan || !inputBerat || !labelInput || !hasilHitung) return;

            const selectedOption = pilihanLayanan.options[pilihanLayanan.selectedIndex];
            const harga = parseInt(selectedOption.value) || 0;
            const customLabel = selectedOption.getAttribute('data-label') || 'Jumlah';
            
            // Perbarui label input secara dinamis
            labelInput.innerText = customLabel;

            // Validasi input angka agar tidak kurang dari 1
            let jumlah = parseInt(inputBerat.value);
            if (isNaN(jumlah) || jumlah < 1) {
                jumlah = 1;
            }

            const total = harga * jumlah;
            hasilHitung.innerText = 'Rp ' + total.toLocaleString('id-ID');
        }

        pilihanLayanan.addEventListener('change', kalkulasi);
        inputBerat.addEventListener('input', kalkulasi);

        // Jalankan sekali saat halaman dimuat untuk inisialisasi awal
        kalkulasi();
    });
</script>
