import { Door, WoodenDoor } from './door';

export default class DoorFactory {
  public static makeDoor(width: number, height: number): Door {
    return new WoodenDoor(width, height);
  }
}
