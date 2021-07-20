export interface DoorFittingExpert {
  getDescription(): string;
}

export class Welder implements DoorFittingExpert {
  public getDescription() {
    return 'I can only fit iron doors!';
  }
}

export class Carpenter implements DoorFittingExpert {
  public getDescription() {
    return 'I can only fit wooden doors!';
  }
}
