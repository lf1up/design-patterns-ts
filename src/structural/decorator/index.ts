// Decorator pattern lets you dynamically change the behavior of an object at run time by wrapping them in an object of a decorator class.

// In object-oriented programming, the decorator pattern is a design pattern that allows behavior to be added to an individual object,
// either statically or dynamically, without affecting the behavior of other objects from the same class.
// The decorator pattern is often useful for adhering to the Single Responsibility Principle, as it allows functionality to be divided between classes with unique areas of concern.

import { SimpleCoffee, MilkCoffee, WhipCoffee, VanillaCoffee } from './coffee';

let someCoffee = new SimpleCoffee();
console.log(someCoffee.getDescription()); // Output: Simple Coffee
console.log(`Cost: ${someCoffee.getCost()}`); // Output: 10

someCoffee = new MilkCoffee(someCoffee);
console.log(someCoffee.getDescription()); // Output: Simple Coffee, milk
console.log(`Cost: ${someCoffee.getCost()}`); // Output: 12

someCoffee = new WhipCoffee(someCoffee);
console.log(someCoffee.getDescription()); // Output: Simple Coffee, milk, whip
console.log(`Cost: ${someCoffee.getCost()}`); // Output: 17

someCoffee = new VanillaCoffee(someCoffee);
console.log(someCoffee.getDescription()); // Output: Simple Coffee, milk, whip, vanilla
console.log(`Cost: ${someCoffee.getCost()}`); // Output: 20
