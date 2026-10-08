const round = {
  radius: 7,
  area: function () {
    return 3.14 * this.radius * this.radius;
  },
  circumference: function () {
    return 2 * 3.14 * this.radius;
  },
};

const ringkasan = () => {
  console.log(`Luas Lingkaran = ${round.area()}`);
  console.log(`Keliling Lingkaran = ${round.circumference()}`);
};

ringkasan();
