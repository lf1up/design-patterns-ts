import { Door } from './door';

export default class SecuredDoor {
  protected door: Door;

  constructor(door: Door) {
    this.door = door;
  }

  public open(password: string) {
    if (this.authenticate(password)) {
      this.door.open();

    } else {
      console.log("Big no! It ain't possible.");
    }
  }

  public authenticate(password: string) {
    return password === '$ecr@t';
  }

  public close() {
    this.door.close();
  }
}
