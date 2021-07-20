export default class President {
  private static instance: President;
  private name: string;

  constructor() {
    this.name = '';
  }

  public setName(name: string): void {
    this.name = name;
  }

  public static getInstance(): President {
    if (!this.instance) {
      this.instance = new President();
    }

    return this.instance;
  }
}
