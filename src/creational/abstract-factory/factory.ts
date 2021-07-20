import { Door, WoodenDoor, IronDoor } from './door';
import { DoorFittingExpert, Welder, Carpenter } from './expert';

export interface DoorFactory {
  makeDoor(): Door;
  makeFittingExpert(): DoorFittingExpert;
}

// Wooden factory to return carpenter and wooden door
export class WoodenDoorFactory implements DoorFactory {
  public makeDoor() {
    return new WoodenDoor();
  }

  public makeFittingExpert() {
    return new Carpenter();
  }
}

// Iron door factory to get iron door and the relevant fitting expert
export class IronDoorFactory implements DoorFactory {
  public makeDoor() {
    return new IronDoor();
  }

  public makeFittingExpert() {
    return new Welder();
  }
}
