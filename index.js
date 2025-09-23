"use strict";


const values = ["Mayank", "Virat", "Dhoni", "Sunil", "Shivam"];
console.log(Array.isArray(values));
console.log(Array.toString(values));
console.log(Array.prototype);
Array.prototype.sayHi = function () {
  console.log("Hi!");
}

values.sayHi();

values.unshift("Sheetal");
console.log(values);
console.log(values.indexOf("Mayank"));
delete values[5];
console.log(values);
function makeLogging() {
  console.log("Deewana hu Deewana");
  return "Akash Gupta";
}

try {
  const value = makeLogging();
  console.log("Deewana hai Deewana" + value + "Chin ka deewana");

} catch (error) {

} finally {
  console.log("Kaam Khatam Paisa Hajam");

}

console.log("My Directory" , __dirname);
console.log("My File" , __filename);