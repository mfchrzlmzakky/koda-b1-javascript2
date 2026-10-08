// Function Deklaratif
function buatProfile(nama, umur) {
  return {
    namaLengkap: nama,
    usia: umur,
    kategori: umur >= 18 ? "Dewasa" : "Anak",
  };
}
console.log(buatProfile("Budi", 20));

// Anonymous Function
const buatProfile2 = function (nama, umur) {
  return {
    namaLengkap: nama,
    usia: umur,
    kategori: umur >= 18 ? "Dewasa" : "Anak",
  };
};
console.log(buatProfile("Budi", 17));

// Arrow Function
const buatProfile3 = (nama, umur) => {
  return { namaLengkap: nama, usia: umur, kategori: umur >= 18 ? "Dewasa" : "Anak" };
};
console.log(buatProfile("Budi", 21));
