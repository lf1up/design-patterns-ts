// Composite pattern lets clients treat the individual objects in a uniform manner.

// In software engineering, the composite pattern is a partitioning design pattern.
// The composite pattern describes that a group of objects is to be treated in the same way as a single instance of an object.
// The intent of a composite is to "compose" objects into tree structures to represent part-whole hierarchies.
// Implementing the composite pattern lets clients treat individual objects and compositions uniformly.

import { Designer, Developer } from './employee';
import { Organization } from './organization';

// Prepare the employees
const john = new Developer('John Doe', 12000);
const jane = new Designer('Jane Doe', 15000);

// Add them to organization
const organization = new Organization();
organization.addEmployee(john);
organization.addEmployee(jane);

console.log(`Net salaries: ${organization.getNetSalaries()}`); // Net Salaries: 27000
