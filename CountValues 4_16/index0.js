// Counting the Values PART 1

// undefined: unintentionally missing value
console.log(typeof(undefined)); // "undefined" -> only value

// null: not an object, intentionally missing value
console.log(null); // null -> only value
console.log(typeof(null)); // "object" (a lie! / bug in JS)

// boolean: true & false
console.log(typeof(true)); // "boolean"
console.log(typeof(false)); // "boolean"

let isSad = true; // isSad is true
let isHappy = !isSad; // isHappy is false
let isFeeling = isSad || isHappy; // should return true...
let isConfusing = isSad && isHappy; // should return false...
console.log(isSad) // T
console.log(isHappy) // F
console.log(isFeeling) // T
console.log(isConfusing) // F

// numbers: floating point math (18 quintillion, not infinite numbers), move away from 0 = lose precision. includes special numbers (NaN, Infinity, -Infinity, and -0)
console.log(typeof(28)); // "number"
console.log(typeof(3.14)); // "number"
console.log(typeof(-140)); // "number"
let scale = 0;
let a = 1 / scale; // Infinity
let b = 0 / scale; // NaN
let c = -a; // -Infinity
let d = 1 / c; // -0
console.log(typeof(NaN)); // "number" ... numeric value technically

// Exercises

console.log(' q1 ');

let meals = 4; // meals is 4
let wheels = meals; // wheels is 4
let eels = 2 + 2; // eels is 4

console.log(' q2 ');

let price = 100; // price is 100
let offer = price + 1; // offer is 101
price = 200; // price is 200

console.log(' q3 ');

let shampoo; // shampoo is undefined
let soap = null; // soap is null
soap = shampoo; // soap is undefined;

console.log(' q4 ');

let isSad = false; // isSad is false
let isHappy = !isSad; // isHappy is true
let isFeeling = isSad || isHappy; // should return true...
let isConfusing = isSad && isHappy; // should return false...
isSad = true;