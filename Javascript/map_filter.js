const nums = [2, 3, 4, 5, 6, 7];
const cubes = [];
// const cubes2 = [];
nums.forEach((n, i) => {
    cubes.push(n ** 3);
    // cubes2.splice(i, 0 , n**3); // with splice
});
console.log(cubes);
// console.log(cubes2);

console.log("----------------------")

// Store all even numbers in a new array
const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const even = [];
nums2.forEach((n) => {
    if (n % 2 === 0) {
        even.push(n);
    }
});
console.log(even);

console.log("----------------------")

// Map Function
const newEven = nums.map((n) => {
    return n ** 3;
});
console.log(newEven);

console.log("----------------------")

const prices = [230, 4500, 6799, 2730, 8889, 990];
const withGst = prices.map((n) => { return n + n * 0.18; });
console.log(withGst);

console.log("----------------------")

const prices2 = ['₹450.45', '₹230.122', '₹997.7', '₹349.99', '₹450.45'];
const textIn = prices2.map((p) => {
    return parseInt(p.slice(1))
});
console.log(textIn);

console.log("----------------------")

const newNums2 = nums.filter((n) => { return n % 2 === 0 })
console.log(newNums2);

console.log("----------------------")

const names = ['raju', 'pinki', 'ramesh', 'suresh', 'kaaliya'];
const lenName = names.filter((name) => {
    return name.length >= 6;
})
console.log(lenName);

console.log("----------------------")

// Filter all perfect square numbers
const nums3 = [2, 4, 7, 9, 16, 18, 36];
const perfectsqr = nums3.filter((n) => {
    return Number.isInteger(n ** 0.5);
})
console.log(perfectsqr);

console.log("----------------------")

// Filter all name including a

const incName = names.filter((name) => {
    return name.toLowerCase().includes("a"); // use toLowercase to convert input to lowercase
})
console.log(incName);

console.log("----------------------")

