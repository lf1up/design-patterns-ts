import BurgerBuilder from './burger-builder';

export default class Burger {
  protected size: number;

  protected cheese: boolean;
  protected pepperoni: boolean;
  protected lettuce: boolean;
  protected tomato: boolean;

  constructor(builder: BurgerBuilder) {
    this.size = builder.size;

    this.cheese = builder.cheese;
    this.pepperoni = builder.pepperoni;
    this.lettuce = builder.lettuce;
    this.tomato = builder.tomato;
  }
}
