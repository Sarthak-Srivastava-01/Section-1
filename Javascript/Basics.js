console.log("Hello World");
console.log("This is a JavaScript file");

// Types od variable
// 1. var
// 2. let
// 3. const

var a = 10;
console.log(a);
let b = 20;
console.log(b);
const c = 30;
console.log(c);

// Using let we can change the value of any variable
b = 30;
console.log(b);

// Using const we can not change the value of any variable
// c = 30; This will give error
// console.log(c); 

var x = 20;
// Redeclaration of variable
var x = 30;
// Reassignment of variable
x = 40;
console.log("x:",x);

let y = 20;
// Redeclaration of variable is not possible
// let y = 20;
// Reassignment of variable
y = 40;
console.log("y:",y);

const z = 20;
// Redeclaration of variable is not possible
// const z = 20;
// Reassignment of variable is not possible
// z = 40;
console.log("z:",z);

// let has function scope
let num = 10;
console.log(num);

if (true) {
    let num = 20;
    console.log(num);
}

console.log(num, "\n");

// var has global scope
var num2 = 10;
console.log(num2);

if (true) {
    var num2 = 20;
    console.log(num2);
}

console.log(num2);