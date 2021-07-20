import { LabDoor } from './door';
import SecuredDoor from './secure-door';

const door = new SecuredDoor(new LabDoor());

door.open('invalid'); // Output: Big no! It ain't possible.

door.open('$ecr@t'); // Output: Opening lab door.

door.close(); // Output: Closing lab door.
