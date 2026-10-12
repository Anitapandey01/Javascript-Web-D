
// Task: Use prompt() to capture a user's bill amount and tip percentage. 
// Perform explicit type conversion (e.g., using Number()), 
// compute the total using arithmetic and assignment operators, and log a formatted string.



let subtotal = Number(prompt("Enter your bill amount:"));
let tipPercentage = Number(prompt("Enter tip percentage:"));

// Calculate the tip
let tip = subtotal * tipPercentage / 100;

// Calculate the total amount
let totalAmount = subtotal;
totalAmount += tip;

// Display the result
console.log("Subtotal: $" + subtotal);
console.log("Tip Percentage: " + tipPercentage + "%");
console.log("Calculated Tip: $" + tip);
console.log("Total Amount to Pay: $" + totalAmount);
