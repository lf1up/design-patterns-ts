export interface Door {
  getWidth(): number;
  getHeight(): number;
}

export class WoodenDoor implements Door {
  protected width: number;
  protected height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  public getWidth() {
    return this.width;
  }

  public getHeight() {
    return this.height;
  }
}
