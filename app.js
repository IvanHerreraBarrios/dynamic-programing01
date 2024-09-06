/*function hi() {
    hi()
}

hi()*/

/*
function print(x) {
    console.log(x)
    if (x < 10) {
        print(x + 1)
    }
}


print(1)
*/

//factorial
/*
function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }

    return fact
}
*/
function factorial(n) {
    if (n === 1) {
        return 1
    }
    return n * factorial(n - 1)
}

console.log(factorial(5))