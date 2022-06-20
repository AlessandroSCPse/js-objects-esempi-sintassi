const result = sumNumbers(2, 5, 4, 10 ,24, 150, 5);
console.log(result);

function sumNumbers(...numbers) {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
        const thisNumber = numbers[i];
        sum += thisNumber;
    }

    return sum;
}
