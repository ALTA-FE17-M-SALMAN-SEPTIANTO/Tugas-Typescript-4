// Prima ke X ( Tanpa Recursive)
function isPrime(num: number): boolean {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function primeX(number: number): number | string {
    if (number <= 0) {
        return "Input harus lebih besar dari 0";
    }

    let primes: number[] = [];
    let currentNumber: number = 2;

    while (primes.length < number) {
        if (isPrime(currentNumber)) {
            primes.push(currentNumber);
        }
        currentNumber++;
    }

    return primes.pop() || 0;
}

console.log(primeX(1)); // 2
console.log(primeX(5)); // 11
console.log(primeX(10)); // 29
console.log(primeX(15)); // 47
console.log(primeX(28)); // 107
