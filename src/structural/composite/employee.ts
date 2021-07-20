export abstract class Employee {
  protected name: string;
  protected salary: number;
  protected roles: Array<string>;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
    this.roles = [];
  }

  abstract getName(): string;
  abstract setSalary(salary: number): void;
  abstract getSalary(): number;
  abstract getRoles(): Array<string>;
}

export class Developer extends Employee {
  public getName() {
    return this.name;
  }

  public setSalary(salary: number) {
    this.salary = salary;
  }

  public getSalary() {
    return this.salary;
  }

  public getRoles() {
    return this.roles;
  }
}

export class Designer extends Employee {
  public getName() {
    return this.name;
  }

  public setSalary(salary: number) {
    this.salary = salary;
  }

  public getSalary() {
    return this.salary;
  }

  public getRoles() {
    return this.roles;
  }
}
