"use strict";

const values = ["Mayank" , "Virat" , "Dhoni" , "Sunil" , "Shivam"];
console.log(Array.isArray(values));
console.log(Array.toString(values));
console.log(Array.prototype)
Array.prototype.sayHi = function() {
    console.log("Hi!");
  }
  
values.sayHi();
  
values.unshift("Sheetal");
console.log(values);
console.log(values.indexOf("Mayank"));
delete values[5];
console.log(values);