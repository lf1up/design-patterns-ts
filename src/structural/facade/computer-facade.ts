import Computer from './computer';

export default class ComputerFacade {
  protected computer: Computer;

  constructor(computer: Computer) {
    this.computer = computer;
  }

  public turnOn(): void {
    console.log(this.computer.getElectricShock());
    console.log(this.computer.makeSound());
    console.log(this.computer.showLoadingScreen());
    console.log(this.computer.bam());
  }

  public turnOff(): void {
    console.log(this.computer.closeEverything());
    console.log(this.computer.pullCurrent());
    console.log(this.computer.sooth());
  }
}
