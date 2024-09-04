const fruits = ['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', "strawberry"];

fruits.splice(fruits.length - 3, 3);
console.log(fruits);

const upper_fruits = fruits.map((fruit) => { return fruit.toUpperCase() });
console.log(upper_fruits);

const without_a = fruits.filter((fruit) => { if(fruit.includes("a") === false) return fruit });
console.log(without_a);

fruits.splice(1, 0, "mango", "peach");
console.log(fruits);

const userArray = [
    { name: 'John', age : 25, email : "john@mail.com"} ,
    { name: 'Jane', age : 28, email : "jane@mail.com"} ,
    { name: 'Tom', age : 32, email : "tom@mail.com"} ,
    { name: 'Alice', age : 35, email : "alice@mail.com"} ,
]

// console.log("-------------");
// const updatedUsers = userArray.map((user) => {
//     user.email.replace('mail.com', 'gmail.com');
//     return user;
// })
// console.log(updatedUsers);

console.log("-------------");
const updatedUsers2 = userArray.map((user) => {
    return {...user , email: user.email.replace('mail', 'gmail')};
});
console.log(updatedUsers2);
console.log("-------------");

const young = userArray.filter((user) => { return user.age <30 });
console.log(young);

const sortedUserName = userArray.sort((user1, user2) => {
    return user1.name .localeCompare(user2.name);
});
console.log(sortedUserName);

const sortedUserAge = userArray.sort((user1, user2) => {
    return user1.age - user2.age;
});
console.log(sortedUserAge);