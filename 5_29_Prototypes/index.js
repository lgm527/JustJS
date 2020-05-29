let pizza = {};
console.log(pizza.taste); // 'pineapple'

//possible ? yes, with protoypes

let human1 = {
  teeth: 32
};

let gwen1 = {
  age: 19
};

console.log(gwen1.teeth); // undefined

let human = {
  teeth: 32
};

let gwen = {
  // add this line:
  __proto__: human,
  age: 19
};

console.log(gwen.teeth); // now -> 32

console.log(human.age); // undefined
console.log(gwen.age); // 19

console.log(human.teeth); // 32
console.log(gwen.teeth); // 32

console.log(human.tail); // undefined
console.log(gwen.tail); // undefined

const PrototypeChain = 'relationship';
// object is proto of object2 is proto of object3.. etc..
// cannot be circular

let mammal = {
  brainy: true,
};

let human2 = {
  __proto__: mammal,
  teeth: 32
};

let gwen2 = {
  __proto__: human2,
  age: 19
}

console.log(gwen2.brainy); // true

const Shadowing = 'when 2 objects in a prototype chain have the same property';

let human3 = {
  teeth: 32
};

let gwen3 = {
  __proto__: human3,
  //gwen has its own teeth property:
  teeth: 31
};

console.log(human3.teeth); // 32
console.log(gwen3.teeth); // 31

// can check which object (the one called in the expression or one of the protoypes the object inherits from) contains the property in the expression:

console.log(human3.hasOwnProperty('teeth'));
console.log(gwen3.hasOwnProperty('teeth'));

// if object does not contain property, search up prototype chain of objects until property is found
// if property is never found, return undefined
// when we write a property that does not exist on an object, it will be created on assignment

let obj = {};
console.log(obj.__proto__); // -> Object Prototype

let weirdo = {
  __proto__: null
}
console.log(weirdo.hasOwnProperty); // undefined
console.log(weirdo.toString); // undefined

let sherlock = {
  address: {
    city: 'London'
  }
};
let watson = {
  address: sherlock.address
};

const PrototypePollution = 'mutate a shared prototype, avoid when possible'

obj.__proto__.smell = 'banana'; // mutated the Object Prototype

console.log(sherlock.smell); // banana
console.log(watson.smell); // banana

// dealy directly with prototypes is unusual
// __proto__ syntax is discouraged

// Exercises

console.log(' q1 ');

let lie = {
  taste: 'bitter'
};
let cake = {
  __proto__: lie
}

console.log(cake === lie); // false
console.log(cake.taste === lie.taste) // true
console.log(cake.hasOwnProperty('taste') === lie.hasOwnProperty('taste')); // false

console.log(' q2 ');

let lie1 = {
  taste: 'bitter'
};
let cake1 = {
  __proto__: lie1
}
lie1.taste = 'butter';

console.log(lie1.taste); // 'butter';
console.log(cake1.taste); // 'butter';

console.log(' q3 ');

let spider = {
  legs: 8
};
let miles = {
  __proto__: spider
};
miles.legs = 2;

console.log(spider.legs); // 8
console.log(miles.legs); // 2

console.log(' q4 ');

let spider4 = {
  legs: 8
};
let miles4 = {
  __proto__: spider4
}
let gwen4 = {
  __proto__: spider4
}

miles4.legs = 2;
spider4.legs = gwen4.legs * 2;
console.log(gwen4.legs); // 16

console.log(' q5 ');

let goose = {
  location: 'heaven'
};
// let cheese = ?
let cheese = {
  __proto__: goose
}

console.log(cheese === goose); // false
console.log(cheese.location); // 'heaven'

goose.location = 'hell';
console.log(cheese.location); // 'hell'
