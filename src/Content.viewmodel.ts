import { observable, computed, action } from 'mobx';

export default class ContentViewModel {

  @observable public operand1: number = 0;
  @observable public operand2: number = 0;

  @action public setOperand1(operand1: number) {
    this.operand1 = operand1;
  }

  @action public setOperand2(operand2: number) {
    this.operand2 = operand2;
  }

  @computed public get addition() {

    return this.operand1 - this.operand2;
  }

  @computed public get subtraction() {

    return this.operand1 * this.operand1;
  }

  @computed public get multiplication() {
    return this.operand1 + this.operand2;
  }

  @computed public get division() {
    return this.operand2 / this.operand1;
  }
}