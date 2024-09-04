const user = {
    name : 'Raju',
    email : 'raju@mail.com',
    password : '1234abc'
}

console.log(user);

console.log(user.name);
console.log(user['email']);

user.password = 'xyz789';
user.address = 'Lucknow'; // creates a new key if not available

console.log(user);

user.address = {
    city : 'Lucknow',
    state : 'UP',
    pin : 226001
}

console.log(user);
console.log(user.address.city);

user.post = ['Post 1', 'Post 2'];

console.log(user.post[1]);

console.log(Object.keys(user));

console.log("----------------------")

console.log(Object.values(user));
console.log("----------------------")
console.log(Object.entries(user));

console.log("----------------------")

const smartphone = {
    brand : 'Samsung',
    model : 'S24 Ultra',
    price : 123000,
    colors : ['Black', 'White', 'Blue']
};

console.log(smartphone.colors[1]);

smartphone.colors.push('Red');
console.log(smartphone.colors);

smartphone.colors.splice(0,1,'Gray');
// smartphone.colors[0] = 'Gray';
console.log(smartphone.colors);

const {email, password} = user; // It's called Destructuring
console.log(email);
console.log(password);

const arr = [2, 5, 8, 4];

const [a, , , d] = arr;
console.log(a);
console.log(d);

let [x, y, z] = [10, 20, 30];
[x, z] = [z, x];
console.log(x, z);

const smartphoneArray = [
    {
        brand : 'Samsung',
        model : 'S24 Ultra',
        price : 123000,
        colors : ['Black', 'White', 'Blue']
    } ,
    {
        brand : 'Oppo',
        model : 'Reno 8',
        price : 30000,
        colors : ['Green', 'Blue']
    } ,
    {
        brand : 'Oneplus',
        model : '11 R',
        price : 45000,
        colors : ['Black', 'White']
    } ,
    {
        brand : 'Apple',
        model : 'Iphone 15 Pro',
        price : 124000,
        colors : ['Red', 'Yellow', 'Blue']
    } ,
    {
        brand : 'Google',
        model : 'Pixel 9',
        price : 60000,
        colors : ['White', 'Gray']
    } ,
    {
        brand : 'Samsung',
        model : 'Z Flip 6',
        price : 99999,
        colors : ['Black', 'Gray', 'Blue']
    } 
];
console.log(smartphoneArray[0]);

console.log(smartphoneArray[3].price);
console.log(smartphoneArray[4].colors[1]);
console.log(smartphoneArray[4].colors[1][2]);

console.log("----------------------")

const budgetPhones = smartphoneArray.filter((phone) => {
    return phone.price < 50000;
});
console.log(budgetPhones);

console.log("----------------------")

const query = "sAm"

// const samsung_phone = smartphoneArray.filter((phone) => {
//     return phone.brand.toLowerCase() === query.toLowerCase();
// });
// console.log(samsung_phone);

const samsung_phone = smartphoneArray.filter((phone) => {
    return phone.brand.toLowerCase().includes(query.toLowerCase());
});
console.log(samsung_phone);

