import Burger from './burger';

export default class BurgerBuilder {
  public size: number;

  public cheese: boolean;
  public pepperoni: boolean;
  public lettuce: boolean;
  public tomato: boolean;

  constructor(size: number) {
    this.size = size;
  }

  public addCheese(): BurgerBuilder {
    this.cheese = true;

    return this;
  }

  public addPepperoni(): BurgerBuilder {
    this.pepperoni = true;

    return this;
  }

  public addLettuce(): BurgerBuilder {
    this.lettuce = true;

    return this;
  }

  public addTomato(): BurgerBuilder {
    this.tomato = true;

    return this;
  }

  public build(): Burger {
    return new Burger(this);
  }
}
