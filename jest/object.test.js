const {deepMerger} = require("./fucntions/deepMerger");


let person = {
    name: "Acash",
    age: 23,
    city: "Delhi",
    country: "India",
    occupation: "Student",
    language: "English",
    hobby: "Reading",
    height: 170,
    weight: 65,
    married: false
};

let Car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "White",
    doors: 4,
    fuel: "Petrol",
    mileage: 18,
    owner: "First",
    insurance: true,
    registration: "DL01AB1234",
    serviceDue: "2025-12-01",
    parked: false
};


test('Object Test ', () => {
    expect(deepMerger(person,Car)).toBe(12);
  
})
