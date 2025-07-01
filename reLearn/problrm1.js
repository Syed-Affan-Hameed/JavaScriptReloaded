function FilterEven(arr) {
for(const num of arr) {
    if (num % 2 === 0) {
        console.log(num);
    }
}
}

function FilterOdd(arr) {
   for(const num of arr) {
        if (num % 2 !== 0) {
            console.log(num);
        }
    }
}

const randomNumbersArray= Array.from({ length: 20 }, () => Math.floor(Math.random() * 100));
console.log("Even numbers:");

FilterEven(randomNumbersArray);
console.log("Odd numbers:");
FilterOdd(randomNumbersArray);
