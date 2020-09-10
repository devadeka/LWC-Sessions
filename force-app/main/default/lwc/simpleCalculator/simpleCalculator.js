import { LightningElement, track } from "lwc";

export default class SimpleCalculator extends LightningElement {
  @track currentResult = "Try it out";
  @track previousResults = [];
  @track showPreviousResults = false;

  firstNumber;
  secondNumber;

  handleNumberChange(event) {
    const inputName = event.target.name;

    if (inputName === "firstNumber") {
      this.firstNumber = event.target.value;
    } else if (inputName === "secondNumber") {
      this.secondNumber = event.target.value;
    } else {
    }
  }

  handleAdd() {
    const first = parseInt(this.firstNumber);
    const second = parseInt(this.secondNumber);
    this.currentResult = `Result of ${this.firstNumber} + ${
      this.secondNumber
    } is ${first + second}`;
  }

  handleSubtract() {
    const first = parseInt(this.firstNumber);
    const second = parseInt(this.secondNumber);
    this.currentResult = `Result of ${this.firstNumber} - ${
      this.secondNumber
    } is ${first - second}`;
    this.previousResults.push(this.currentResult);
  }

  handleMultiply() {
    const first = parseInt(this.firstNumber);
    const second = parseInt(this.secondNumber);
    this.currentResult = `Result of ${this.firstNumber} * ${
      this.secondNumber
    } is ${first * second}`;
    this.previousResults.push(this.currentResult);
  }

  handleDivide() {
    const first = parseInt(this.firstNumber);
    const second = parseInt(this.secondNumber);
    this.currentResult = `Result of ${this.firstNumber} / ${
      this.secondNumber
    } is ${first / second}`;
    this.previousResults.push(this.currentResult);
  }

  handleShowPreviousResults(event) {
    console.log(event.target);
    this.showPreviousResults = event.target.checked;
  }
}
