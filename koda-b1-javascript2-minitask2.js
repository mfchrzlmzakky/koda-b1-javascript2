// REFACTOR FUNCTION
function priceTotal(a, b) {
  return (total = a + b);
}

// SOAL NOMOR 1
let dataPembeli = {
  nama: "Gibran",
  email: "fufufafa@merdeka.com",
};
let detailPesanan = {
  item1: {
    nama: "buzzerIg",
    harga: 100000,
  },
  item2: {
    nama: "buzzerFb",
    harga: 100000,
  },
  // totalHarga: 200000,
  totalHarga: priceTotal(100000, 100000),
};
// let totalHarga2 = {
//   totalHarga3: priceTotal(detailPesanan.item1.harga * 2),
// };
// console.log(detailPesanan.item1.harga);
// console.log(totalHarga2.totalHarga3);
// console.log(priceTotal(detailPesanan.item1.harga * 2));



let fakturPembayaran = { ...dataPembeli, ...detailPesanan, statusPembayaran: "Belum Lunas" };

// SOAL NOMOR 2
const { nama, email, totalHarga, statusPembayaran } = fakturPembayaran;

// SOAL NOMOR 3
console.log(`Struk dicetak untuk ${nama} (${email}) dengan total tagihan Rp ${totalHarga} dan status pembayaran ${statusPembayaran}`);
