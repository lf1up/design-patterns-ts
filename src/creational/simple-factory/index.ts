// Simple factory simply generates an instance for client without exposing any instantiation logic to the client.

// In object-oriented programming (OOP), a factory is an object for creating other objects –
// formally a factory is a function or method that returns objects of a varying prototype or class from some method call, which is assumed to be "new".

import DoorFactory from './factory';

// Make me a door of 100x200
const door1 = DoorFactory.makeDoor(100, 200);

console.log(`Door 1: ${door1.getWidth()}x${door1.getHeight()}`);

// Make me a door of 50x100
const door2 = DoorFactory.makeDoor(50, 100);

console.log(`Door 1: ${door2.getWidth()}x${door2.getHeight()}`);
