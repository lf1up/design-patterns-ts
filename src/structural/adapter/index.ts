// Adapter pattern lets you wrap an otherwise incompatible object in an adapter to make it compatible with another class.

// In software engineering, the adapter pattern is a software design pattern that allows the interface of an existing class to be used as another interface.
// It is often used to make existing classes work with others without modifying their source code.

import { WildDog, WildDogAdapter } from './wild-dog';
import { Hunter } from './hunter';

const wildDog = new WildDog();
const wildDogAdapter = new WildDogAdapter(wildDog);

const hunter = new Hunter();

console.log(`Hunting dog: ${hunter.hunt(wildDogAdapter)}`);
