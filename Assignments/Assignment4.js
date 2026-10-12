// Assignment 4: Loop Control Structures


// Task: Write a for loop to print a multiplication table up to 5.
//  Use a while loop with a break statement to find the first number 
// greater than 10 that is divisible by 6, and a do...while loop that skips numbers using continue.
// Expected Output:


// -- Multiplication Table of 5 --
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// 5 x 4 = 20
// 5 x 5 = 25

// -- First number > 10 divisible by 6 --
// Found: 12


for(let i=1;i<=5;i++){
    console.log("5 x " + i + " = " + (5*i));
}

// 2. Find the first number greater than 10 divisible by 6
console.log("\n-- First number > 10 divisible by 6 --");

let num = 11;

while (true) {
    if (num > 10 && num % 6 === 0) {
        console.log("Found:", num);
        break;
    }
    num++;
}

// 3. Skip numbers using do...while and continue
let count = 0;

do {
    count++;

    if (count === 3) {
        continue;
    }

    console.log("Count:", count);

} while (count < 5);
