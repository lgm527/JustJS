// Equality of Values

// Same value equality: 
let a = 1;
let b = 1;
console.log(Object.is(a, b)); // true
console.log(Object.is(2, 2)); // true
console.log(Object.is({}, {})); // false

let dwarves = 7;
let continents = '7';
let worldWonders = 3 + 4;

console.log(Object.is(dwarves, continents)); // ? false
console.log(Object.is(continents, worldWonders)); // ? false
console.log(Object.is(worldWonders, dwarves)); // ? true

let banana = {}; // banana is obj
let cherry = banana; // cherry is banana obj
let chocolate = cherry; // chocolate is banana obj
cherry = {}; // cherr is new obj

console.log(Object.is(banana, cherry)); // ? false
console.log(Object.is(cherry, chocolate)); // ? false
console.log(Object.is(chocolate, banana)); // ? true

// Strict Equals:

console.log(2 === 2); // true
console.log({} === {}); // false

// behaves the same way as Object.is(), except for 2 cases...

// 1 - NaN === NaN is false, although they are the same value:

let size = NaN;
console.log(Number.isNaN(size)); // true
console.log(Object.is(size, NaN)); // true
console.log(size !== size); // true because NaN === NaN is false

let whyNaNStrictEqualsFalse = 'https://stackoverflow.com/questions/1565164/what-is-the-rationale-for-all-comparisons-returning-false-for-ieee754-nan-values/1573715#1573715';

// 2 -  === 0 and 0 === -0 are true, although they are different values.

let width = 0; // 0
let height = -width; // -0
console.log(width === height); // true
console.log(Object.is(width, height)); // false

// Loose Equality: produces many WTF JS moments, not used in modern codebases

let waitWhat = 'https://dorey.github.io/JavaScript-Equality-Table/?ck_subscriber_id=805917372';
console.log([[]] == ''); // true
console.log(true == [1]); // true
console.log(false == [0]); // true

let x = 42;

if (x == null) {
  // ...
} // -> controversial
// This code is equivalent to writing:
if (x === null || x === undefined) {
  // ...
}

// Exercies

console.log(' q1 ');

let fingernails = 'mustache'; // fingernails is 'mustache'
let toes = fingernails; // toes is 'mustache'
let nose = 'must' + 'ache'; // nose is 'mustache'

console.log(fingernails === toes); // true
console.log(toes === nose); // true
console.log(nose === fingernails); // true

console.log(' q2 ');

let tomato = {}; // tomato is obj
let oregano = tomato; // oregano is tomato obj
let potato = {}; // potato is obj
tomato = {}; // tomato is new obj

console.log(tomato === oregano); // false
console.log(oregano === potato); // false
console.log(potato === tomato); // false

console.log(' q5 ');

let tree = {};
let stone = {};
let water = tree;

console.log(' q6' );

let ticket = { id: 0 };
if (ticket === { id: 0 }) {
  console.log('Bad ticket');
} // will always be false and skip console.log();
// they are different objects, but happen to have the same inside value


console.log(' q7' );

let ticketId = 0;
if (ticketId === 0) {
  console.log('Bad ticket');
} // will print since it the same zero is under comparison (will always be one zero in existence)

console.log(' q8' );

let ticketID = -0;
if (ticketID === 0) {
  console.log('Bad ticket');
}

console.log(' q9' );

let tea = function() { return 0 / 0; }; // tea is function
let coffee = function() { return 0 / 0; }; // coffee is function
let matcha = tea(); // matcha is tea function
let latte = coffee(); // latte is coffee function

console.log(tea === coffee); // false 
console.log(Object.is(tea, coffee)); // false 
console.log(matcha === latte); // false 
console.log(Object.is(matcha, latte)); // true