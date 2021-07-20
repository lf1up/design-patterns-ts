import { Employee } from './employee';

export class Organization {
  protected employees: Array<Employee> = [];

  public addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }

  public getNetSalaries(): number {
    let netSalary = 0;

    this.employees.forEach((employee) => {
      netSalary += employee.getSalary();
    });

    return netSalary;
  }
}
