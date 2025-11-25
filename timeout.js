
console.log(![])
console.log(!![])

if({}){
    console.log("I am present")
}else {
    console.log(" I am fake and false")
}

let string = "Narendra";
const string2 = string.split("").reverse().join("");
console.log(string2)
const user = {
  name: "Akash",
  age: 21,
  city: "Mumbai"
};

const product = {
  id: 101,
  title: "Laptop",
  price: 49999
};

const final = {
    ...user,
    ...product
}
console.log(product)
const final2 = Object.assign(product, user);
console.log(final2)