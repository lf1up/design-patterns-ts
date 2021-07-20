export interface Door {
  getDescription(): string;
}

export class WoodenDoor implements Door {
  public getDescription() {
    return 'I am a wooden door!';
  }
}

export class IronDoor implements Door {
  public getDescription() {
    return 'I am an iron door!';
  }
}
