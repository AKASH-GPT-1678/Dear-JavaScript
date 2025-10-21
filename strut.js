const lordify = ({ firstname }) => {
 console.log(`${firstname} of Canterbury`);
};
const regularPerson = {
 firstname: "Bill",
 lastname: "Wilson",
 rohan: "Lord of the Rings"
};
lordify(regularPerson);

const fetchData = async () => {
 new Promise((resolve, reject) => {
    const results = fetch("https://swapi.dev/api/planets/1/")
     .then((res) => res.json())
     .then((data) => resolve(data))
     .catch((err) => reject(err));

 });
};