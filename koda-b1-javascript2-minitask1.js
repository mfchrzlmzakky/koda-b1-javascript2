let angka1 = [1, 2, 3, 4];
let angka2 = [5, 6, 7];
let angka = [...angka1, ...angka2];
let panjangArray = 0;
let totalArray = 0;
let max = 1;
let min = 1;
let average = 1;

console.log(`Semua Nilai = ${angka}`);

// MAX
let i = 0;
while (angka[i] !== undefined) {
  if (angka[i] > max) {
    max = angka[i];
  }
  i++;
}
console.log(`Nilai max = ${max}`);

// MIN
let j = 0;
while (angka[j] !== undefined) {
  if (angka[j] < min) {
    min = angka[j];
  }
  j++;
}
console.log(`Nilai min = ${min}`);

// AVERAGE
let k = 0;
while (angka[k] !== undefined) {
  panjangArray += 1;
  totalArray += angka[k];
  k++;
}
average = totalArray / panjangArray;
console.log(`Nilai average = ${average}`);
