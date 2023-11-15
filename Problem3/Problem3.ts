//Prima segi empat (Tanpa Recursive)
function prime(num: number): boolean {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function primaSegiEmpat(wide: number, high: number, start: number): void {
    let result = "";
    let currentNumber = start;
    let totalPrimes = 0;

    for (let i = 0; i < high; i++) {
        let row = "";
        for (let j = 0; j < wide; j++) {
            while (!prime(currentNumber)) {
                currentNumber++;
            }
            row += currentNumber + " ";
            totalPrimes += currentNumber;
            currentNumber++;
        }
        result += row.trim() + "\n";
    }

    result += totalPrimes;
    console.log(result);
}

primaSegiEmpat(2, 3, 13);
/*
13 17
19 23
29 31
132
*/

primaSegiEmpat(5, 2, 1);
/*
2 3 5 7 11
13 17 19 23 29
129
*/
