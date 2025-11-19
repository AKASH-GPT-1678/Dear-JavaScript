const word5 = /^a{2,5}ryan$/;
console.log(word5.test("aaaaaaryan"));   // false, 6 a's → too many
console.log(word5.test("aaaaaaaaryan")); // false, 8 a's → too many
console.log(word5.test("aaaaryan"));     // true, 4 a's → ok
const word6 = /^r{2,5}n$/
console.log(word6.test("rrrrrn")); // true, 5 r's → ok
console.log(word6.test("royaln")); // false, 7 r's → too many
const word7  = /^ko.*y$/
console.log(word7.test("koly")); // true, 3 characters → ok
console.log(word7.test("kojson"))
console.log(word7.test("kojsony"))

const allAkash = /^a.{2,3}h$/;
console.log(allAkash.test("akassh"));

const worda = /^pa?k$/
console.log(worda.test("pk"));
console.log(worda.test("paaak"));
console.log(worda.test("parmpk"));
console.log(worda.test("nak"));

const wordr = /[xyz]/
wordr.test("jhatu");

const onlyfans = /^[amdev]+$/
console.log(onlyfans.test("devam"));

const emails = /^[a-z,1-9]*@gmail.com$/


const valid = /akash|abid|sanchita/
console.log(valid.test("I am freind with akash"));
console.log(valid.test("I am freind with abid"));
console.log(valid.test("I am freind with sanchita"));
console.log(valid.test("I am freind with diva"));