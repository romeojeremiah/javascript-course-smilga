//create car object

const car = {
  // add make, model, year, colors (array)
  make: "Land Rover",
  mode: "Range Rover",
  year: 2008,
  colors: ["red", "blue", "green"],
  hybrid: true,
  drive() {
    console.log("driving");
  },
  stop: function () {
    console.log("stoping");
  },
};

console.log(car.make);
console.log(car.colors[0]);
car.drive();
car.stop();
