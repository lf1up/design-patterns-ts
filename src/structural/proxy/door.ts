export interface Door {
  open(): void;
  close(): void;
}

export class LabDoor implements Door {
  public open() {
    console.log("Opening lab door.");
  }

  public close() {
    console.log("Closing the lab door.");
  }
}
