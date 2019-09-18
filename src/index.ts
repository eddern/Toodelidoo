const plus = (num1: number, num2: number): number => {
  return num1 + num2;
};

const showCalculation = (
  func: Function,
  num1: number,
  num2: number
): string => {
  return `The sum of ${num1} and ${num2} is ${func(num1, num2)}`;
};

console.log(plus(1, 2));
console.log(showCalculation(plus, 1, 2));
