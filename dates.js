let dates = new Date();
console.log(dates.toUTCString());
console.log(dates.toJSON());
console.log(dates.getFullYear() + 2);
console.log(dates.getMonth());
console.log(dates.getDate());
console.log(dates.getDay());
console.log(dates.getTime());
const now = new Date();
console.log(now.toString()); // full date and time object

const words = "Akash";
console.log(words.padStart(10, "#"));
console.log(words.padEnd(10, "#"));