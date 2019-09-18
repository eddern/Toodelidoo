"use strict";
const plus = (num1, num2) => {
    return num1 + num2;
};
const showCalculation = (func, num1, num2) => {
    return `The sum of ${num1} and ${num2} is ${func(num1, num2)}`;
};
console.log(plus(1, 2));
console.log(showCalculation(plus, 1, 2));
//# sourceMappingURL=index.js.map