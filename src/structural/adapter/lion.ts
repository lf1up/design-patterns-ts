export interface Lion {
  roar(): string;
}

export class AfricanLion implements Lion {
  public roar() {
    return 'Roar!';
  }
}

export class AsianLion implements Lion {
  public roar() {
    return 'Roar!';
  }
}
