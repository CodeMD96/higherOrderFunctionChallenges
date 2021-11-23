let sum = (a, b) =>{
    return a + b;
};

let hoSum = (c, d, fn) =>{
    let num = 0;
    for (let i = 0; i < 5; i++) {
        num += sum(c, d);
    };
    return num;
};

console.log(hoSum(1,2,sum));