import KarakTea from './tea';
import TeaMaker from './tea-maker';

export default class TeaShop {
  protected orders: Array<KarakTea>;
  protected teaMaker: TeaMaker;

  constructor(teaMaker: TeaMaker) {
    this.orders = [];
    this.teaMaker = teaMaker;
  }

  public takeOrder(teaType: string, table: number): void {
    this.orders[table] = this.teaMaker.make(teaType);
  }

  public serve(): void {
    this.orders.forEach((order, table) => {
      console.log(`Serving Tea (${order.preference}) to the Table #${table}`)
    });
  }
}
