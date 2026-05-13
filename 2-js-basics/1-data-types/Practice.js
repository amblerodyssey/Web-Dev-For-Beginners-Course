/*
console.log(myThirdVariable);

let myVariable = 42;
console.log(typeof myVariable); // Output: "number"

const mySecondVariable = "Hello, World!";
console.log(typeof mySecondVariable); // Output: "string"

var myThirdVariable = true;
console.log(typeof myThirdVariable); // Output: "boolean"

let myFourthVariable = null;
console.log(typeof myFourthVariable); // Output: "object" (this is a known quirk in JavaScript)

const myFifthVariable = undefined;
console.log(typeof myFifthVariable); // Output: "undefined"

var mySixthVariable = { name: "Alice", age: 30 };
console.log(typeof mySixthVariable); // Output: "object"

let mySeventhVariable = [1, 2, 3, 4, 5];
console.log(typeof mySeventhVariable); // Output: "object" (arrays are also considered objects in JavaScript)

const myEighthVariable = function() {
    console.log("This is a function");
}
console.log(typeof myEighthVariable); // Output: "function"

*/

let FalsyValue1 = 0;
let FalsyValue2 = "false";
let FalsyValue3 = "0";
let FalsyValue4 = [ ];
let FalsyValue5 = [];
let FalsyValue6 = "";



console.log(Boolean(FalsyValue1)); // Output: false
console.log(Boolean(FalsyValue2)); // Output: true
console.log(Boolean(FalsyValue3)); // Output: true
console.log(Boolean(FalsyValue4)); // Output: true
console.log(Boolean(FalsyValue5)); // Output: true
console.log(Boolean(FalsyValue6)); // Output: false




