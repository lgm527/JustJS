// (7)
// Properties

let sherlock = {
  surname: 'Holmes',
  address: { city: 'London' } 
};

let john = {
  surname: 'Watson',
  address: sherlock.address
};

john.surname = 'Lennon';
john.address.city = 'Malibu';

console.log(sherlock.surname); // ? Holmes
console.log(sherlock.address.city); // ? Malibu
console.log(john.surname); // ? Lennon
console.log(john.address.city); // ? Malibu

let sherlock1 = { surname: 'Holmes', age: 64 };
// let propertyName = prompt('What do you want to know?');
// alert(sherlock1[propertyName]); // Read property by its name

let sherlock3 = { surname: 'Holmes', age: 64 };
// console.log(sherlock3.boat); // undefined
// console.log(sherlock3.boat.name); // TypeError!

// Exercises

console.log(' q1 ');

let ship1 = { name: 'Rocinante' }; // ship is obj with prop name with value Rocinante

console.log(' q2 ');

let captain = 'Jim'; // variable captain value Jim
let ship = { captain: captain }; // ship obj with prop captain with value Jim
captain = 'Naomi'; // variable captain value Naomi

console.log(' q3 ');

let turner = { name: 'Alex' };
let kamal = { name: 'Alex' };

console.log(' q4 ');

let ice = { taste: undefined }; // ice obj has prop taste and value undefined 
let sand = {}; // sand is empty obj
let answer = ice.taste === sand.taste; // variable answer is true

console.log(' q5 ');

let ship11 = {
  pilot: { name: 'Jim' }
};

console.log(' q6 ');

let singer1 = { surname: 'Turner' }; // singer obj with prop surname value Turner
let pilot1 = { surname: 'Kamal' }; // pilot obj with prop surname value Kamal
singer1.surname = pilot1.surname; // singer.surname now Kamal
pilot1.surname = singer1.surname; // pilot.surname still Kamal

console.log(' q7 ');
// three lines of code necessary to swap the values of the surname properties of these two objects?

let singer = { surname: 'Turner' };
let pilot = { surname: 'Kamal' };
// 1
let storeSurnames = {
  singers: 'Turner',
  pilots: 'Kamal'
};
// 2
singer.surname = storeSurnames.pilots;
// 3
pilot.surname = storeSurnames.singers;
console.log(singer.surname); // Kamal
console.log(pilot.surname); // Turner

console.log(' q8 ');

let president = {
  name: 'Pooh',
  next: null
};

president.next = {
  name: 'Paddington',
  next: president
};

console.log(president); // Circular

console.log(president.next.next.next.name); // Paddington

console.log(' q9 ');

let pres = {
  name: 'Pooh',
  next: null
};

pres.next = pres;
console.log(pres); // Circular


console.log(' q10 ');

let station = {
  Owner: { name: 'Fred' }
};
let name = station.owner.name;
console.log(name === station.Owner.name); // code crashes, station.owner is undefined so name returns an error

