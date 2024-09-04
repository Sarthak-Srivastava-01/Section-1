
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

const sorted = products.sort((prod1, prod2) => {
    return prod1.price - prod2.price
});
console.log(sorted);