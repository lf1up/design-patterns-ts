export interface Theme {
  getColor(): string;
}

export class DarkTheme implements Theme {
  public getColor() {
    return 'Dark Blue';
  }
}

export class LightTheme implements Theme {
  public getColor() {
    return 'Off White';
  }
}

export class AquaTheme implements Theme {
  public getColor() {
    return 'Light Blue';
  }
}
