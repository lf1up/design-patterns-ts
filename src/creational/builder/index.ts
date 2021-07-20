// Allows you to create different flavors of an object while avoiding constructor pollution.
// Useful when there could be several flavors of an object. Or when there are a lot of steps involved in creation of an object.

// The builder pattern is an object creation software design pattern with the intentions of finding a solution to the telescoping constructor anti-pattern.

import BurgerBuilder from './burger-builder';

const burger = new BurgerBuilder(14)
  .addCheese()
  .addPepperoni()
  .addLettuce()
  .addTomato()
  .build();

console.log('Building result:');
console.log(burger);
