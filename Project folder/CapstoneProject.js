
console.log("--- Initializing Inventory System ---");

// 1. Initial inventory
const inventory = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 }
];

// 2. Take input from the user
const productName = prompt("Enter new product name:");
const priceInput = prompt("Enter product price:");
const productPrice = Number(priceInput);

// Validate input using if...else
if (
    productName === null ||
    productName.trim() === "" ||
    priceInput === null ||
    priceInput.trim() === "" ||
    !Number.isFinite(productPrice) ||
    productPrice <= 0
) {
    console.log("Invalid input. Please enter a valid product name and positive price.");
} else {
    // Add the new product to inventory
    inventory.push({
        name: productName.trim(),
        price: productPrice
    });

    // 3. Function to assign a category using switch
    function getCategory(price) {
        let priceLevel;

        if (price < 50) {
            priceLevel = "budget";
        } else if (price < 200) {
            priceLevel = "standard";
        } else {
            priceLevel = "premium";
        }

        switch (priceLevel) {
            case "budget":
                return "Budget";
            case "standard":
                return "Standard";
            case "premium":
                return "Premium";
            default:
                return "Unknown";
        }
    }

    // 4. Regular function to calculate total inventory value
    function calculateTotal(items) {
        let total = 0;

        for (let i = 0; i < items.length; i++) {
            // Demonstrate continue
            if (!Number.isFinite(items[i].price)) {
                continue;
            }

            total += items[i].price;
        }

        return total;
    }

    // 5. Arrow function with default tax rate
    const calculateTax = (amount, taxRate = 0.10) => {
        return amount * taxRate;
    };

    // 6. Arrow function with default discount rate
    const calculateDiscount = (amount, discountRate = 0) => {
        return amount * discountRate;
    };

    // 7. Search inventory using while and break
    let index = 0;
    let foundProduct = null;

    while (index < inventory.length) {
        if (
            inventory[index].name.toLowerCase() ===
            productName.trim().toLowerCase()
        ) {
            foundProduct = inventory[index];
            break;
        }

        index++;
    }

    if (foundProduct) {
        console.log("\n--- Product Search ---");
        console.log("Found:", foundProduct.name);
    }

    // 8. Display the inventory using forEach
    console.log("\n--- Processing Inventory Roster (forEach) ---");

    inventory.forEach((product) => {
        console.log(
            `* Item: ${product.name} ($${product.price}) -> Category: ${getCategory(product.price)}`
        );
    });

    // 9. Financial analytics
    const totalValue = calculateTotal(inventory);
    const tax = calculateTax(totalValue);
    const discount = calculateDiscount(totalValue);

    console.log("\n--- Financial Analytics ---");
    console.log("Total Inventory Value: $" + totalValue);
    console.log("Tax (10%): $" + tax);
    console.log("Discount: $" + discount);

    // 10. Filter affordable products
    const affordableProducts = inventory
        .filter((product) => product.price < 200)
        .map((product) => product.name);

    console.log(
        "Filtered Affordable Items (Under $200):",
        JSON.stringify(affordableProducts)
    );

    // 11. Create formatted report using map
    const report = inventory.map((product) => {
        return `${product.name.toUpperCase()}: $${product.price}`;
    });

    console.log("Formatted Report List:", JSON.stringify(report));
}
