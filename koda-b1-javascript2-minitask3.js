const round = {
  radius: 7,
  area: function (a, b) {
    return a * b * b;
  },
  circumference: function (a, b) {
    return 2 * a * b;
  },
};

const ringkasan = (a, b) => {
  console.log(`Luas Lingkaran = ${round.area(a, b)}`);
  console.log(`Keliling Lingkaran = ${round.circumference(a, b)}`);
};

ringkasan(3.14, 7);
