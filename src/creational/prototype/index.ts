// Create object based on an existing object through cloning.

// The prototype pattern is a creational design pattern in software development.
// It is used when the type of objects to create is determined by a prototypical instance, which is cloned to produce new objects.

import Sheep from './sheep';

const original = new Sheep('Jolly');
console.log(`Original: ${original.getName()} - ${original.getCategory()}`) // Output: Jolly - Mountain Sheep

// Clone and modify what is required
const cloned = original.clone();
cloned.setName('Dolly');
console.log(`Cloned: ${cloned.getName()} - ${cloned.getCategory()}`) // Output: Dolly - Mountain Sheep
