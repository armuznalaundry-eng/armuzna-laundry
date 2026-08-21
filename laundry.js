  <script>
// Kalkulator Estimasi Armuzna Laundry
(() => {
    'use strict';

    function initKalkulator() {
        const pilihanLayanan = document.getElementById('pilihanLayanan');
        const inputJumlah = document.getElementById('inputBerat');
        const labelInput = document.getElementById('labelInput');
        const hasilHitung = document.getElementById('hasilHitung');
        const tombolWhatsApp = document.getElementById('tombolWhatsApp');

        if (!pilihanLayanan || !inputJumlah || !labelInput || !hasilHitung) {
            console.error('Kalkulator: elemen HTML tidak lengkap.');
            return;
        }

        const formatRupiah = (nilai) =>
            'Rp ' + Math.round(nilai).toLocaleString('id-ID');

        const updateKalkulator = () => {
            const option = pilihanLayanan.options[pilihanLayanan.selectedIndex];
            if (!option) return;

            const tipe = option.dataset.type || 'unit';
            const harga = Number(option.dataset.price ?? option.value);
            let jumlah = Number.parseFloat(inputJumlah.value);

            if (!Number.isFinite(harga) || harga < 0) {
                hasilHitung.textContent = 'Rp 0';
                return;
            }

            if (!Number.isFinite(jumlah) || jumlah < 0) jumlah = 0;
            if (tipe === 'unit') jumlah = Math.floor(jumlah);

            inputJumlah.value = jumlah;
            inputJumlah.step = tipe === 'kilo' ? '0.1' : '1';
            inputJumlah.min = '0';
            labelInput.textContent = tipe === 'kilo'
                ? 'Perkiraan Berat (kg)'
                : 'Jumlah Barang (pcs/set)';

            const total = harga * jumlah;
            hasilHitung.textContent = formatRupiah(total);

            if (tombolWhatsApp) {
                const namaLayanan = option.textContent.trim();
                const satuan = tipe === 'kilo' ? 'kg' : 'pcs/set';
                const pesan = [
                    'Halo Armuzna Laundry, saya ingin memesan:',
                    `Layanan: ${namaLayanan}`,
                    `Jumlah: ${jumlah} ${satuan}`,
                    `Estimasi biaya: ${formatRupiah(total)}`
                ].join('\n');
                tombolWhatsApp.href =
                    'https://wa.me/6285927262579?text=' + encodeURIComponent(pesan);
            }
        };

        pilihanLayanan.addEventListener('change', updateKalkulator);
        inputJumlah.addEventListener('input', updateKalkulator);
        inputJumlah.addEventListener('change', updateKalkulator);
        updateKalkulator();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initKalkulator);
    } else {
        initKalkulator();
    }
})();

</script>
</body>
</html>
