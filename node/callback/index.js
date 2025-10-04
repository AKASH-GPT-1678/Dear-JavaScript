const fs = require("fs");
const path = require("path");

function test(){
    console.log("I am working under text");
    console.log(test);
    console.log(typeof test)
}


const location = path.join(__dirname, "python.py");

if (!fs.existsSync(location)) {
    fs.writeFileSync(location, "print('Hello World')");
    console.log("File created!");
} else {
    console.log("File already exists!");
}
