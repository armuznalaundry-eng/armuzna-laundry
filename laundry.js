   <script>
    const pilihanLayanan = document.getElementById('pilihanLayanan');
    const inputBerat = document.getElementById('inputBerat');
    const labelInput = document.getElementById('labelInput');
    const hasilHitung = document.getElementById('hasilHitung');

    function kalkulasi() {
        const selectedOption = pilihanLayanan.options[pilihanLayanan.selectedIndex];
        const harga = parseInt(selectedOption.value) || 0;
        const customLabel = selectedOption.getAttribute('data-label');
        
        // Mengubah teks label secara dinamis berdasarkan atribut data-label di HTML
        labelInput.innerText = customLabel;

        // Validasi input agar tidak bernilai negatif atau kosong
        let jumlah = parseInt(inputBerat.value);
        if (isNaN(jumlah) || jumlah < 1) {
            jumlah = 1;
            inputBerat.value = 1;
        }

        const total = harga * jumlah;
        hasilHitung.innerText = 'Rp ' + total.toLocaleString('id-ID');
    }

    pilihanLayanan.addEventListener('change', kalkulasi);
    inputBerat.addEventListener('input', kalkulasi);
</script>
