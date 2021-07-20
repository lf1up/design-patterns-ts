// A factory of factories; a factory that groups the individual but related/dependent factories together without specifying their concrete classes.

// The abstract factory pattern provides a way to encapsulate a group of individual factories that have a common theme without specifying their concrete classes.

import { WoodenDoorFactory, IronDoorFactory } from './factory';

// Wooden factory
const woodenFactory = new WoodenDoorFactory();

const door1 = woodenFactory.makeDoor();
const expert1 = woodenFactory.makeFittingExpert();

console.log(`Door 1: ${door1.getDescription()}`); // Output: I am a wooden door!
console.log(`Expert 1: ${expert1.getDescription()}`); // Output: I can only fit wooden doors!

// Iron factory
const ironFactory = new IronDoorFactory();

const door2 = ironFactory.makeDoor();
const expert2 = ironFactory.makeFittingExpert();

console.log(`Door 2: ${door2.getDescription()}`); // Output: I am an iron door!
console.log(`Expert 2: ${expert2.getDescription()}`); // Output: I can only fit iron doors!
