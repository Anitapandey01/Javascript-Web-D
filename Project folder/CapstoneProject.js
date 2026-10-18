
"use strict";

console.log("--- Initializing Inventory System ---");

// 1. Data initialization
const inventory = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 }
];

// 2. if...else and switch: price-based category
function getCategory(price) {
    let category;

    if (price < 100) {
        category = "Budget";
    } else if (price < 200) {
        category = "Standard";
    } else {
        category = "Premium";
    }

    switch (category) {
        case "Budget":
            return "Budget";
        case "Standard":
            return "Standard";
        case "Premium":
            return "Premium";
        default:
            return "Unknown";
    }
}

// Regular function: calculate total
function calculateTotal(items) {
    let total = 0;

    items.forEach((item) => {
        total += item.price;
    });

    return total;
}

// Arrow functions: tax and discount
const applyTax = (amount, taxPercent) =>
    amount + (amount * taxPercent / 100);

const applyDiscount = (amount, discountPercent) =>
    amount - (amount * discountPercent / 100);

// Search using loop, continue and break
function findProduct(name) {
    for (let i = 0; i < inventory.length; i++) {
        if (!inventory[i].name) {
            continue;
        }

        if (inventory[i].name.toLowerCase() === name.toLowerCase()) {
            return inventory[i];
        }
    }

    return null;
}

// 3. Prompt-based product input
function addProduct() {
    const nameInput = prompt("Enter product name:");

    // User cancelled the prompt
    if (nameInput === null) {
        return;
    }

    const name = nameInput.trim();

    if (name === "") {
        alert("Product name cannot be empty.");
        return;
    }

    const priceInput = prompt("Enter product price:");

    if (priceInput === null) {
        return;
    }

    const price = Number(priceInput);

    if (priceInput.trim() === "" ||
        !Number.isFinite(price) ||
        price <= 0) {
        alert("Please enter a valid price greater than zero.");
        return;
    }

    // Avoid duplicate product names
    if (findProduct(name)) {
        alert("A product with this name already exists.");
        return;
    }

    inventory.push({ name, price });

    console.log(
        `[Prompt executed: User adds "${name}" at "$${price}"]`
    );

    updateDashboard();
    alert(`${name} has been added successfully!`);
}

// 4. Update dashboard cards, table and report
function updateDashboard(searchTerm = "") {
    const total = calculateTotal(inventory);

    // filter()
    const affordableItems = inventory.filter(
        (item) => item.price < 200
    );

    // map()
    const formattedReport = inventory.map(
        (item) => `${item.name.toUpperCase()}: $${item.price}`
    );

    // Unique categories
    const categories = [
        ...new Set(inventory.map((item) => getCategory(item.price)))
    ];

    // Update summary cards
    document.getElementById("totalProducts").textContent =
        inventory.length;

    document.getElementById("inventoryValue").textContent =
        `$${total.toFixed(2)}`;

    document.getElementById("affordableCount").textContent =
        affordableItems.length;

    document.getElementById("totalCategories").textContent =
        categories.length;

    document.getElementById("taxValue").textContent =
        `$${applyTax(total, 10).toFixed(2)}`;

    document.getElementById("discountValue").textContent =
        `$${applyDiscount(total, 5).toFixed(2)}`;

    // forEach(): render product rows
    const table = document.getElementById("productTable");
    table.innerHTML = "";

    const visibleItems = inventory.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    visibleItems.forEach((item) => {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = item.name;

        const priceCell = document.createElement("td");
        priceCell.textContent = `$${item.price.toFixed(2)}`;

        const categoryCell = document.createElement("td");
        const badge = document.createElement("span");

        badge.textContent = getCategory(item.price);
        badge.className =
            `category-badge ${getCategory(item.price).toLowerCase()}`;

        categoryCell.appendChild(badge);
        row.append(nameCell, priceCell, categoryCell);
        table.appendChild(row);
    });

    document.getElementById("emptyMessage").hidden =
        visibleItems.length !== 0;

    // Render transformed report
    const reportList = document.getElementById("reportList");
    reportList.innerHTML = "";

    formattedReport.forEach((report) => {
        const listItem = document.createElement("li");
        listItem.textContent = report;
        reportList.appendChild(listItem);
    });

    // Required console output
    console.log("\n--- Processing Inventory Roster (forEach) ---");

    inventory.forEach((item) => {
        console.log(
            `* Item: ${item.name} ($${item.price}) -> Category: ${getCategory(item.price)}`
        );
    });

    console.log("\n--- Financial Analytics ---");
    console.log(`Total Inventory Value: $${total}`);
    console.log(
        "Filtered Affordable Items (Under $200):",
        JSON.stringify(affordableItems.map((item) => item.name))
    );
    console.log("Formatted Report List:", JSON.stringify(formattedReport));
}

// Connect button and search input
document.getElementById("addProductBtn").addEventListener("click", addProduct);

document.getElementById("searchInput").addEventListener("input", (event) => {
    updateDashboard(event.target.value);
});

// Initial page render
updateDashboard();
