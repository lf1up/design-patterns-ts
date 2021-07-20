// Facade pattern provides a simplified interface to a complex subsystem.

// A facade is an object that provides a simplified interface to a larger body of code, such as a class library.

import Computer from './computer';
import ComputerFacade from './computer-facade';

const computer = new ComputerFacade(new Computer());
console.log('Turning ON:')
computer.turnOn(); // Output: Ouch! Beep beep! Loading... Ready to be used!
console.log('Turning OFF:')
computer.turnOff(); // Output: Bup bup buzzz! Haah! Zzzzz!
