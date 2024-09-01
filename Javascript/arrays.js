const myarr = [234, 'good', true, console.log];
console.log(myarr);

console.log("----------------------")

console.log(typeof(myarr)); 

console.log("----------------------")

console.log(Array.isArray(myarr)); // To check if it is array or not

console.log("----------------------")

console.log(myarr.length); 

console.log("----------------------")

const movies = ['The Dark Knight', 'Avengers', 'Predestination', 'Raid', 'Coherence'];

console.log(movies[2]);
console.log(movies[4]);

console.log(movies[-2]); // Negative values don't work
console.log(movies.at(-3)); // Another way to get index value we use .at (it also supports negative values)

console.log(movies);
movies[4] = "Deadpool";
console.log(movies);

// slicing in array
console.log(movies.slice(1,4));
console.log(movies.slice(3,5));
console.log(movies.slice(-2));

// adding elements
movies.push('The Prestige'); //To push elements at last place (supports multiple elements)
movies.unshift('Iron Man'); //To push elements at first place (supports multiple elements)
console.log(movies);

// removing elements
movies.pop(); // remove element from end
console.log(movies);
movies.shift(); // remove element from beginning
console.log(movies);

// movies.splice(2,2); // remove two elements starting from index 2 (first parameter is from which element, second parameter is how many elements)
// movies.splice(2,2, 'Inception', 'Interstellar'); // removes and inserts elements starting from index 2 (first parameter is from which element, second parameter is how many elements, after that what element wwe have to insert)
movies.splice(1, 0, 'Source Code') // Inserts element at index 1 ( Can pass multiple elements)

console.log(movies);