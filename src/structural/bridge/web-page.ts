import { Theme } from './theme';

export abstract class WebPage {
  protected theme: Theme;

  constructor(theme: Theme) {
    this.theme = theme;
  }

  public abstract getContent(): string;
}

export class About extends WebPage {
  getContent() {
      return `About page in ${this.theme.getColor()}`;
  }
}

export class Careers extends WebPage {
  getContent() {
    return `Careers page in ${this.theme.getColor()}`;
  }
}
