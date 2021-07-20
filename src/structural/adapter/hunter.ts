import { Lion } from './lion';

export class Hunter {
  public hunt(lion: Lion): string {
    return lion.roar();
  }
}
