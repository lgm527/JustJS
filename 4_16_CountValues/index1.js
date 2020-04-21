// Count the Values PART 2

// BigInts: represent large integers w/ precision (recent addition to JS)
let alot = 9007199254740991n; // Notice n at the end
console.log(alot + 1n); // 9007199254740992n
console.log(alot + 2n); // 9007199254740993n

// string: text ('', "", ``) not objects, but have built in properties
let cat = 'Cheshire';
console.log(cat.length); // 8
console.log(cat[0]); // "C"
// primitive = immutable & cannot reassign:
cat[0] = "L"
console.log(cat); // Cheshire

let answer = prompt('Enter your name');
console.log(answer);

// symbols: (recent addition to JS)
let alohomora = Symbol();
console.log(typeof(alohomora)); // "symbol"

// ojbects: arrays, dates, RegExps, & other non-primitive values
console.log(typeof({})); // "object"
console.log(typeof([])); // "object"
console.log(typeof(new Date())); // "object"
console.log(typeof(/\d+/)); // "object"
console.log(typeof(Math)); // "object"

// by default they are mutable & access properties with . or []
let rapper = { name: 'Malicious' };
rapper.name = 'Malice'; // Dot notation
rapper['name'] = 'No Malice'; // Bracket notation

// Primitive values: already defined and exist in JS
// Non-primitives: we can create brand new objects

// JS is garbage collected language: we cannot destroy objects, but they might eventually disappear

// functions: are values.

for (let i = 0; i < 7; i++) {
  console.log(2);
} // prints the same value (2) 7 times 

for (let i = 0; i < 7; i++) {
  console.log({});
} // prints a newly created object 7 times

for (let i = 0; i < 7; i++) {
  console.log(function() {});
} // prints a newly created function 7 times

let countDwarves2 = function() { return 7; };
let dwarves2 = countDwarves2;
console.log(dwarves2); // prints the definition of the function, it does not run the function

// Exercises

console.log(' q1 ');

let dwarves = 7; // dwarves is 7
let continents = '7'; // continents is 7 string
let worldWonders = 3 + 4; // wW is 7

console.log(' q2 ');

let bees = {}; // bees is new obj
let peas = bees; // peas is the bees obj
let knees = {}; // knees is new obj

console.log(' q3 ');

let banana = function() { return 2 + 2; }; // banana is a function
let result = banana; // result is also the banana function

console.log(' q4 ');

let ask = function() { return 2; }; // ask is a function
let havles = ask(); // halves is 2
let weeks = ask(); // weeks is 2

console.log(' q5 ');

let plant = function() { return {}; }; // plant is a function
let tree = plant(); // tree is an obj
let flower = plant(); // flower is another obj

console.log(' q6 ');

let cook = function() { return 'tofu'; }; // cook is a function
let make = function() { return 'tofu'; }; // make is a function
let food = cook(); // food is tofu
let fuel = make(); // fuel is tofu

console.log(' q7 ');

let spaghetti = function() { return 2 + 2; }; // spaghetti is a function
let fettuccine = spaghetti; // fettuccine is the spaghetti function
let gnoochi = function() { return 2 + 2; }; // gnoochi is a function

