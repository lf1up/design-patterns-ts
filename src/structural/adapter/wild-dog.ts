import { Lion } from './lion';

export class WildDog {
  public bark(): string {
    return 'Bark!';
  }
}

export class WildDogAdapter implements Lion {
  protected dog: WildDog;

  constructor(dog: WildDog) {
    this.dog = dog;
  }

  public roar() {
    return this.dog.bark();
  }
}
