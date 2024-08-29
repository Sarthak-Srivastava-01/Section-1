for (let i = 1; i <=10; i++) {
    console.log(i)
}

console.log("--------------------")

for (let n = 1; n <=5; n++) {
    console.log(n , ": Sarthak")
}

console.log("--------------------")

for (let b = 5; b >=1; b--) {
    console.log(b)
}

console.log("--------------------")

let a = ""
for (let i = 0; i <=10; i++) {
    a = a + i + " "
}
console.log(a)

console.log("--------------------")

let count = 0
while (count <= 10) {
    console.log("count : " + count)
    count++
}

console.log("--------------------")

for (let num = 0; num <= 20 ; num++) {
    if(num % 2 != 0) {
        console.log(num , "Is Odd")
    }
}

console.log("--------------------")

let sum = 0;
for (let num = 0; num <= 10 ; num++) {
    sum += num;
}
console.log(sum);

console.log("--------------------")

let num = 15;
for (let i = 1; i <= 10; i++) {
    // console.log(num + " x " + i + " = " + (num*i) )
    console.log(`${num} * ${i} = ${num*i}`)
}

console.log("--------------------")

fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"]
console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log("--------------------")

const person = {
    name: "John",
    age: 25,
    city: "New York"
};
for (let key in person) {
    console.log(key + " : " + person[key])
}

console.log("--------------------")

for (let fruit of fruits) {
    console.log(fruit)
}