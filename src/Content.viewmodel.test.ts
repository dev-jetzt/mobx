import ContentViewModel from './Content.viewmodel';


describe('ContentViewModel', () => {

  it('2 + 3 = 5', () => {

    const vm = new ContentViewModel();
    vm.operand1 = 2;
    vm.operand2 = 3;

    expect(vm.addition).toBe(5);
  });

  it('5 -3 = 2', () => {

    const vm = new ContentViewModel();
    vm.operand1 = 5;
    vm.operand2 = 3;

    expect(vm.subtraction).toBe(2);
  });

  it('6 * 7 = 42', () => {
    const vm = new ContentViewModel();
    vm.operand1 = 6;
    vm.operand2 = 7;

    expect(vm.multiplication).toBe(42);
  });

  it('256 / 8 = 32', () => {
    const vm = new ContentViewModel();
    vm.operand1 = 256;
    vm.operand2 = 8;

    expect(vm.division).toBe(32);
  });

  it('5 / 0 = +Infinity', () => {

    const vm = new ContentViewModel();
    vm.operand1 = 5;
    vm.operand2 = 0;
    expect(vm.division).toBe(+Infinity);

  });
});