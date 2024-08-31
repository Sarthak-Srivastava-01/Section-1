function addNums(a, b) {
    var c = a + b;
    console.log(c);
}

addNums(23, 92);
// console.log("Automatically declared variables are global in JS");
// console.log(c);

console.log("----------------------")

const getAvg = function (m1, m2, m3) {
    const avg = (m1 + m2 + m3) / 3;
    // console.log(avg);
    return avg;
}

const result = getAvg(25, 50, 30);
console.log(result);

console.log("----------------------")

const fact = (n) => {
    let f = 1;
    for(let i = 1; i <= n; i++) {
        f *= i;
    }
    return f;
}

let ans = fact(6);
console.log(ans);

console.log("----------------------")

// WAP to check prime number
let num = 11;
let prime = true;
for(let i = 2; i<num; i++) {
    if (num % i === 0) {
        console.log("Not a Prime");
        prime = false;
        break;
    }
}
if(prime) {
    console.log("Prime Number");
}