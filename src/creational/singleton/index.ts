// Ensures that only one object of a particular class is ever created.

// In software engineering, the singleton pattern is a software design pattern that restricts the instantiation of a class to one object.
// This is useful when exactly one object is needed to coordinate actions across the system.

import President from './president';

// Getting the same instance 2 times
const president1 = President.getInstance();
const president2 = President.getInstance();

// Adding changes by first pointer
president1.setName('Trump');

console.log('Instance 1:');
console.log(president1);

console.log('Instance 2:');
console.log(president2);

console.log(`Instances are the same?: ${president1 === president2}`);
