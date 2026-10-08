const round = {
  radius: 7,
  area: function (a, b) {
    return a * b * b;
  },
  circumference: function (a, b) {
    return 2 * a * b;
  },
};

function ringkasan(a, b) {
  console.log(round.area(a, b));
  console.log(round.circumference(a, b));
}

ringkasan(3.14, 7);
