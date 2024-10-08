export function calculate(num1, num2, operator){
    const firstNumber = parseFloat(num1);
    const secondNumber = parseFloat(num2);
    let result;
    switch (operator){
        case "+":
            result = firstNumber + secondNumber;
            break;
        case "-":
            result = firstNumber - secondNumber;
            break;
        case "*":
            result = firstNumber * secondNumber;
            break;
        case "/":
            if (secondNumber === 0 || firstNumber === 0) {
                return "cannot dive by zero";
            }
            result = firstNumber / secondNumber;
            break;
            default:
                throw new Error("invalid operator");
    }
    return result;
}