// run this fuction using "npm run fun" in command line.

function factorial(num) {
    if (num == 0) return 1;
    return num * factorial(num - 1);
}

const fact = factorial(10);
console.log(fact);