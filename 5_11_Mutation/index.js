// declare sherlock variable

let sherlock = {
  surname: 'Holmes',
  address: { city: 'London' }
};

// declare john

let john = {
  surname: 'Watson',
  address: sherlock.address
};

// john.surname = 'Lennon';
// john.address.city = 'Malibu';

console.log(sherlock.surname); // "Holmes"
console.log(sherlock.address.city); // "Malibu"
console.log(john.surname); // "Lennon"
console.log(john.address.city); // "Malibu"



// Possible Solution, since john & sherlocks address point to the same object, when john moves to Malibu a new object is created for his address to point at

john.surname = 'Lennon';
john.address = { city: 'Malibu' };

console.log(sherlock.surname); // "Holmes"
console.log(sherlock.address.city); // "Malibu"
console.log(john.surname); // "Lennon"
console.log(john.address.city); // "Malibu"

// Another Solution, without mutation. assign john variable to point at "new version" / new object for john's data

// instead of doing:
john.surname = 'Lennon';
john.address = { city: 'Malibu' };

// do:
john = {
  surname: 'Lennon',
  address: { city: 'Malibu' }
};

// There’s now an old version of the John object on our diagram. JavaScript will eventually automatically remove it from memory if there are no wires pointing at it / variables assigned to it.

// Let VS Const

const shrek = { species: 'ogre' };
let fiona = { species: 'princess' };
// shrek = fiona // TypeError

// Const: read-only variable, cannot reassign value of shrek, but CAN mutate the object it points to:

shrek.species = 'human';
console.log(shrek.species); // 'human'

// const prevents variable reassignment — not object mutation

// Exercises

console.log(' q1 ');

const spreadsheet = { title: 'Sales' };
const copy = spreadsheet;
copy.title = copy.title + ' (Copy)';

console.log(spreadsheet.title); // 'Sales (Copy)'

console.log(' q2 ');

let batman = {
  address: { city: 'Gotham' }
};

let robin = {
  address: batman.address
};

batman.address = { city: 'Ibiza' };

console.log(robin.address.city); // 'Gotham'

console.log(' q3 ');

let chip = {
  address: { city: 'Disneyland' }
};

let dale = {
  address: {
    city: chip.address.city
  }
}

chip.address = { city: 'Tokyo' };

console.log(dale.address.city); // 'Disneyland'

console.log(' q4 ');

// console.log(music.taste); // 'classical'
// onion.taste = 'unami';
// console.log(music.taste); // 'unami'

console.log(' q5 ');

let ilana = {
  address: { city: 'New York' }
};

let place = ilana.address;
place = { city: 'Boulder' };
let abbi = {
  address: place,
}

console.log(ilana.address.city); // 'New York'

console.log(' q6 ');

let rick = {
  address: { city: 'C-137' }
};

let morty = {
  address: rick.address
}

rick.address = { city: '35C' };

console.log(morty.address.city); // 'C-137'

console.log(' q7 ');

// console.log(burger.beef); // veggie
// burger = rapper;
// console.log(burger.beef); // legit

console.log(' q8 ');

let daria = {
  address: { city: 'Lawndale' }
};

let place1 = daria.address;

place1.city = 'L.A.';

let jane = {
  address: place1
};

console.log(daria.address.city); //  'L.A.'

console.log(' q9 ');

let walter = {
  address: { city: 'Albuquerque' }
};

let gustavo = {
  address: walter.address,
}

walter = {
  address: { city: 'Crawford' }
};

console.log(gustavo.address.city); // 'Albuquerque'

console.log(' q10 ');

let dipper = {
  address: {
    city: { name: 'Gravity Falls' }
  }
};

let mabel = {
  address: dipper.address
};

dipper.address.city = {
  name: 'Land of Ooo'
}

console.log(mabel.address.city.name); // 'Land of Ooo'

console.log(' q11 ');

// console.log(charlotte.mother.age); // 20
// console.log(charlotte.child.age); // 20

// charlotte.mother.age = 21;

// console.log(charlotte.mother.age); // 21
// console.log(charlotte.child.age); // 21
