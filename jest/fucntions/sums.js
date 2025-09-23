function sum() {
    return 2 + 3
}

function emptyArray(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        array.pop(); // ya array.splice(i, 1)
    }
    return array.length; // 0
}

function reverseString(str) {
    let value = str.split("");   // convert string to array
    let reverse = "";            // use let instead of const
  
    while (value.length > 0) {
      reverse += value.pop();    // pop last element and append to reverse
    }
  
    return reverse;              // return reversed string
  }
  

module.exports = {
    sum,
    emptyArray,
    reverseString

}