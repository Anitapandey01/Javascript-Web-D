// Assignment 3: Conditional Logic Implementation


// Task: Create a script that evaluates a user's numerical test score using if...else statements, determines a letter grade 
// using a switch statement, and uses a ternary operator to print whether they passed or failed.


let score = 85;
let grade;

// Using if...else to determine the grade
if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 60) {
    grade = "D";
} else {
    grade = "F";
}

// Using switch statement to display the grade
switch (grade) {
    case "A":
        break;
    case "B":
        break;
    case "C":
        break;
    case "D":
        break;
    case "F":
        break;
}

// Using ternary operator to check pass or fail
let status = score >= 40 ? "Passed" : "Failed";

// Display the result
console.log("Score:", score);
console.log("Grade:", grade);
console.log("Status:", status);

