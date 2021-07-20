// It is used to minimize memory usage or computational expenses by sharing as much as possible with similar objects.

// In computer programming, flyweight is a software design pattern.
// A flyweight is an object that minimizes memory use by sharing as much data as possible with other similar objects;
// it is a way to use objects in large numbers when a simple repeated representation would use an unacceptable amount of memory.

import TeaMaker from './tea-maker';
import TeaShop from './tea-shop';

const teaMaker = new TeaMaker();
const shop = new TeaShop(teaMaker);

shop.takeOrder('less sugar', 1);
shop.takeOrder('more milk', 2);
shop.takeOrder('without sugar', 5);

shop.serve();

// Output:
// Serving Tea (less sugar) to the Table #1
// Serving Tea (more milk) to the Table #2
// Serving Tea (without sugar) to the Table #5
