const nums = [2, 5, 1, 4, 9, 3];
for(let i=0; i<nums.length; i++){
    console.log(nums[i]);
}

console.log("----------------------")

for(let n of nums){
    console.log(n);
}

console.log("----------------------")

nums.forEach( (n, i, b) => {  // First parameter defines variable in which array values will be stored, Second parameter returns index of array element, Third parameter returns whole array irrespective of any conditions
    console.log(n, i, b);
})

console.log("----------------------")

// Print all even numbers from the array
nums.forEach( (n) => {
    if(n % 2 === 0) {
        console.log(n);
    }
});