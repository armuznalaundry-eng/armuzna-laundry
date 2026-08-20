document.addEventListener('DOMContentLoaded', () => {
    const pilihanLayanan = document.getElementById('pilihanLayanan');
    const inputBerat = document.getElementById('inputBerat');
    const labelInput = document.getElementById('labelInput');
    const hasilHitung = document.getElementById('hasilHitung');
    
    function kalkulasi() {
        if (!pilihanLayanan || !inputBerat || !labelInput || !hasilHitung) return;
        
        const selectedOption = pilihanLayanan.options[pilihanLayanan.selectedIndex];
        const harga = parseInt(selectedOption.value) || 0;
        const tipe = selectedOption.getAttribute('data-type');
        const jumlah = parseInt(inputBerat.value) || 0;
        
        if (tipe === 'kilo') {
            labelInput.innerText = 'Perkiraan Berat (kg)';
        } else {
            labelInput.innerText = 'Jumlah Barang / Satuan (pcs/meter/set)';
        }
        
        const total = harga * jumlah;
        hasilHitung.innerText = 'Rp ' + total.toLocaleString('id-ID');
    }
    
    pilihanLayanan.addEventListener('change', kalkulasi);
    inputBerat.addEventListener('input', kalkulasi);
    
    // Jalankan kalkulasi awal saat halaman dimuat
    kalkulasi();
});
