const multiply = (a, b) =>{
    return a * b;
};

const add = (a, b) =>{
    return a + b;
};

const divide = (a, b) =>{
    return a / b;
};

const subtract = (a, b) =>{
    return a - b;
};

const doMath = (num1) =>{
    return(num2, fn) =>{
        return fn(num1, num2);
    };
};

console.log(doMath(10)(5, subtract));
console.log(doMath(10)(5, add));
console.log(doMath(10)(5, multiply));
console.log(doMath(10)(5, divide));

let result = doMath(4);
let result2 = result(4, add);

console.log(result(4, add));
console.log(result2);