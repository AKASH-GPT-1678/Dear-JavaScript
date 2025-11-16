const car = {}; // empty object

Object.defineProperty(car, "brand", {
  value: "Tesla",
  writable: false,
  configurable: false,
  enumerable: true
});

Object.defineProperty(car, "model", {
  value: "Model S",
  writable: false,
  configurable: false,
  enumerable: true
});

Object.defineProperty(car, "year", {
  value: 2025,
  writable: false,
  configurable: false,
  enumerable: true
});

Object.defineProperty(car, "color", {
  value: "Red",
  writable: false,
  configurable: false,
  enumerable: true
});

Object.defineProperty(car, "price", {
  value: 90000,
  writable: false,
  configurable: false,
  enumerable: true
});

console.log(car);
console.log(car.sandbox);
car.sandbox;
for (let key in car) {
  console.log(`${key}: ${car[key]}`);
};
Object.seal(car);
// Object.defineProperty(car, "price", {
//   value: 100000,
//   set(value) {
      
//   },
//   writable: false,
//   configurable: false,
//   enumerable: true
// });

console.log("price" in car);
const state = ("price" in car);
console.log(state);
Object.getOwnPropertyNames(car);
const numbers = [10, 20, 30, 40, 50];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
for(let vals of numbers){
    console.log(vals);
}