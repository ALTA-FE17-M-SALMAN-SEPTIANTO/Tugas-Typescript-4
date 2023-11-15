// Fibonacci (Recursive) 
function fibonacci(number: number): number {
    if (number <= 1) {
        return number;
    } else {
        return fibonacci(number - 1) + fibonacci(number - 2);
    }
}

console.log(fibonacci(0)); // 0
console.log(fibonacci(2)); // 1
console.log(fibonacci(9)); // 34
console.log(fibonacci(18)); // 2584
console.log(fibonacci(12)); // 144