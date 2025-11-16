


const user = new Object();
user.name = "akash";
user.place = "Delhi";


console.log(user);
delete user.name;

console.log(user);
const mapping = new Map();
let users = {
  name: "John",
  age: 30,
  "likes birds": true  // multiword property name must be quoted
};

console.log(users["likes birds"]);
console.log(users["name"]);


let obj1 = {
    karma : "Deepesh",
    age : 23
};

obj1.__proto__ = "Deepesh Singh";
console.log(obj1);