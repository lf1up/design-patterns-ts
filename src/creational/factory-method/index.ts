// It provides a way to delegate the instantiation logic to child classes.

// In class-based programming, the factory method pattern is a creational pattern that uses factory methods
// to deal with the problem of creating objects without having to specify the exact class of the object that will be created.
// This is done by creating objects by calling a factory method—either specified in an interface and implemented by child classes,
// or implemented in a base class and optionally overridden by derived classes—rather than by calling a constructor.

import { DevelopmentManager, MarketingManager } from './hiring-manager';

const devManager = new DevelopmentManager();
console.log(`Development Manager: ${devManager.takeInterview()}`); // Output: Asking about design patterns!

const marketingManager = new MarketingManager();
console.log(`Marketing Manager: ${marketingManager.takeInterview()}`); // Output: Asking about community building!
