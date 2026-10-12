
 // 1. Standard function with default parameters
function rectangleArea(length = 5, width = 4) {
    return length * width;
}

console.log(
    "Standard Function Area (Default 5x4):",
    rectangleArea()
);

// 2. Arrow function with default parameters
const calculateArea = (length = 5, width = 4) => {
    return length * width;
};

console.log(
    "Arrow Function Area (Custom 10x3):",
    calculateArea(10, 3)
);

// 3. Demonstrating block scope
{
    let blockVar = "I am inside the block";
}

try {
    console.log(blockVar);
} catch (error) {
    console.log("Scope Test Error:", error.toString());
}
