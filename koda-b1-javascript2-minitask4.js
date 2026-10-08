const PI = 3.14;

function area(r) {
  console.log(`Luas Lingkaran = ${PI * r * r}`);
}

function circumference(r) {
  console.log(`Keliling Lingkaran = ${2 * PI * r}`);
}

function calculate(callback, r) {
  callback(r);
}

calculate(area, 7);
calculate(circumference, 7);
