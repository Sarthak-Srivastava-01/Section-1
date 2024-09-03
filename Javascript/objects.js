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

console.log("---------------------- \n Assignment \n----------------------")

const products = [
    {
        title: "Samsung Galaxy S21",
        category: "Electronics",
        type: "Smartphone",
        price: 799.99,
        brand: "Samsung",
        model: "Galaxy S21"
    },
    {
        title: "Apple iPhone 13",
        category: "Electronics",
        type: "Smartphone",
        price: 999.99,
        brand: "Apple",
        model: "iPhone 13"
    },
    {
        title: "Sony WH-1000XM4",
        category: "Electronics",
        type: "Headphones",
        price: 349.99,
        brand: "Sony",
        model: "WH-1000XM4"
    },
    {
        title: "Dell XPS 13",
        category: "Computers",
        type: "Laptop",
        price: 1199.99,
        brand: "Dell",
        model: "XPS 13"
    },
    {
        title: "Nike Air Max 270",
        category: "Fashion",
        type: "Shoes",
        price: 150.00,
        brand: "Nike",
        model: "Air Max 270"
    },
    {
        title: "Samsung QLED TV",
        category: "Electronics",
        type: "Television",
        price: 1299.99,
        brand: "Samsung",
        model: "QLED TV"
    },
    {
        title: "Apple MacBook Pro",
        category: "Computers",
        type: "Laptop",
        price: 2399.99,
        brand: "Apple",
        model: "MacBook Pro"
    },
    {
        title: "Adidas Ultraboost",
        category: "Fashion",
        type: "Shoes",
        price: 180.00,
        brand: "Adidas",
        model: "Ultraboost"
    }
];

// console.log(products);
//  Ques 1. Filter using category
console.log("ques. 1 \n----------------------");

const prod_cat = "Electronics";
const fil_cat = products.filter((product) => {
    return product.category.toLowerCase().includes(prod_cat.toLowerCase());
});
console.log(fil_cat);
console.log("----------------------");

// Ques 2. filter using type
console.log("ques. 2 \n----------------------");
const prod_type = "Headphones";
const fil_type = products.filter((product) => {
    return product.type.toLowerCase().includes(prod_type.toLowerCase());
});
console.log(fil_type);
console.log("----------------------");

// Ques 3. filter using min and max price
console.log("ques. 3 \n----------------------");
const min_price = 800;
const max_price = 1200;
const fil_price = products.filter((product) => {
    return (product.price >= min_price && product.price <= max_price);
});
console.log(fil_price);
console.log("----------------------");

// Ques 4. filter using brand
console.log("ques. 4 \n----------------------");
const brand = "Nike";
const prod_brand = products.filter((product) => {
    return product.brand.toLowerCase().includes(brand.toLowerCase());
});
console.log(prod_brand);