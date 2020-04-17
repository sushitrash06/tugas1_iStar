function cetakAlamat({ namaJalan, nomorRumah, kota }) {
    return `${namaJalan} No. ${nomorRumah}, ${kota}`;
}
  
var alamat = cetakAlamat({ namaJalan: 'Jalan Permai', nomorRumah: '25', kota: 'Kota Tangerang' });
    
console.log(alamat);