let reaction = 'yikes';
reaction[0] = 'l';
console.log(reaction); // -> 'yikes'

// * Primitive Values Are Immutable *

// Arrays (Objects) VS Strings

let arr = [212, 8, 506];
let str = 'hello';

console.log(arr[0]); // 212
console.log(str[0]); // "h"
arr[0] = 420;
console.log(arr); // [420, 8, 506]
str[0] = 'j';
console.log(str); // 'hello'

let pet = 'Narwhal';
pet = 'The Kraken';
console.log(pet); // ? -> 'The Kraken'

// Cannot: mutate string that variable is pointing to
// Can: reassign variable to point at different string (or thing altogether)

// The left side of an assignment must be a 'wire'. (variable)
// The right side of an assignment must be an expression.

// Cannot: pass a variable
// Can: pass a value

function double(x) {
  x = x * 2;
}

let money = 10;
double(money);
console.log(money); // 10

// wires:

let x = 10; // x -> 10
let y = x; // y -> 10
x = 0; // x -> 0
console.log(y) // 10

// Recap exercises:
console.log(' q1 ');

let numberOfTentacles = 10;
numberOfTentacles = 'eight';
console.log(typeof(numberOfTentacles)); // string

console.log(' q2 ');

let numberOfTentacles1 = 10;
console.log(typeof(numberOfTentacles1));
numberOfTentacles1 = 'eight';

console.log(' q3 ');

let answer = true;
answer.opposite = false;
console.log(answer.opposite);

console.log(' q4 ');

// null = 10;
// console.log(null); // invalid syntax error
// occured b/c left side of an assignment must be a variable & cannot be a value (like null)

console.log(' q5 ');

let it = 'be'; // it -> 'be'
let them = 'eat cake'; // them -> 'eat cake'
it = them; // it -> (them) -> 'eat cake'

console.log(' q7 ');

let pets = 'Tom and Jerry';
feed(pets);
console.log(pets[0]) // 'T'
// console.log output can be changed by editing the feed function if it mutates the pets variable. ----> NO strings are immutable