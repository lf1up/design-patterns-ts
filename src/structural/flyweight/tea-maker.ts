import KarakTea from './tea';

export default class TeaMaker {
  protected availableTea: Array<KarakTea>;

  constructor() {
    this.availableTea = [];
  }

  public make(preference: string): KarakTea {
    if (this.availableTea[preference] === undefined) {
      this.availableTea[preference] = new KarakTea(preference);
    }

    return this.availableTea[preference];
  }
}
