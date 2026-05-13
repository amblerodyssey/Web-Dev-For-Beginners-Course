import readline from "readline";

//import shopping items
import { ItemList, DiscountList } from "./Assignment_shopping_item.js";


//create shopping cart object
const shoppingCart = {
    items: [],
    totalPrice: 0,
};

const shoppingIsles = [
    {
        description: "Fresh Groceries",
        items: [ItemList[0], ItemList[1], ItemList[2]],
    },
    {
        description: "Arts and crafts supplies",
        items: [ItemList[3], ItemList[4]],
    },
];

function browseIsle(isle) {
    console.log(`Browsing ${isle.description}...`);
    isle.items.forEach((item, index) => {
        console.log(`Item ${index + 1}: ${item.ProductName} - $${item.ProductUnitPrice}`);
    });
}

function addItemToCart(item) {
    const cartEntry = {
        product: item,
        unitPrice: item.ProductUnitPrice,
        discountApplied: false,
        discountCode: null,
    };

    shoppingCart.items.push(cartEntry);
    shoppingCart.totalPrice += cartEntry.unitPrice;
    console.log(`Added ${item.ProductName} to cart. Current cart total: $${shoppingCart.totalPrice.toFixed(2)}`);
    return cartEntry;
}

function viewCart() {
    if (shoppingCart.items.length === 0) {
        console.log("Your shopping cart is empty.");
        return;
    }

    console.log("\nShopping Cart Contents:");
    shoppingCart.items.forEach((cartItem, index) => {
        const label = cartItem.discountApplied ? " (discount applied)" : "";
        console.log(`${index + 1}. ${cartItem.product.ProductName} - $${cartItem.unitPrice.toFixed(2)}${label}`);
    });
    console.log(`Total Price: $${shoppingCart.totalPrice.toFixed(2)}\n`);
}

function viewItemDetails(item) {
    console.log(`\nItem details for ${item.ProductName}:`);
    console.log(`Description: ${item.ProductDescription}`);
    console.log(`User info: ${item.ProductUserInfo}`);
    console.log(`Price: $${item.ProductUnitPrice.toFixed(2)}`);
    console.log(`Unit Quantity: ${item.ProductUnitQuantityGrams}g`);
    console.log(`Available in store: ${item.ProductAvailability ? "In stock" : "Out of stock"}`);
    console.log(`Stock quantity: ${item.StockQuantity}`);

}

function findDiscountSymbol(codeString) {
    const normalized = codeString.trim().toUpperCase();
    if (normalized === "CHICKEN10") {
        return DiscountList[0];
    }
    return null;
}

function applyDiscountCodeToItem(cartItem, codeString) {
    const codeSymbol = findDiscountSymbol(codeString);
    if (!codeSymbol) {
        console.log("That discount code is invalid.");
        return;
    }

    if (cartItem.product.ProductDiscountCode !== codeSymbol) {
        console.log("This discount code does not apply to that item.");
        return;
    }

    if (cartItem.discountApplied) {
        console.log("A discount has already been applied to this item.");
        return;
    }

    const originalPrice = cartItem.product.ProductUnitPrice;
    const discountAmount = originalPrice * 0.10;
    cartItem.unitPrice = originalPrice - discountAmount;
    cartItem.discountApplied = true;
    cartItem.discountCode = codeSymbol;
    shoppingCart.totalPrice -= discountAmount;

    console.log(`Code applied! ${cartItem.product.ProductName} price drops to $${cartItem.unitPrice.toFixed(2)}.`);
}

async function prompt(question) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            rl.close();
            resolve(answer.trim());
        });
    });
}

function findCartEntryByProduct(item) {
    return shoppingCart.items.find((entry) => entry.product === item) || null;
}

function removeItemFromCart(index) {
    if (index < 0 || index >= shoppingCart.items.length) {
        console.log("Invalid item index.");
        return;
    }

    const cartItem = shoppingCart.items[index];
    shoppingCart.totalPrice -= cartItem.unitPrice;
    shoppingCart.items.splice(index, 1);
    console.log(`Removed ${cartItem.product.ProductName} from cart. New total: $${shoppingCart.totalPrice.toFixed(2)}`);
}

async function itemLayer(item) {
    while (true) {
        console.log(`\nItem: ${item.ProductName}`);
        console.log("a. Add to cart");
        console.log("d. View details");
        console.log("c. Apply discount code");
        console.log("Press Enter to return to the isle menu");

        const itemOption = await prompt("Select an action: ");
        if (itemOption === "") {
            break;
        }

        const normalized = itemOption.toLowerCase();
        const existingCartEntry = findCartEntryByProduct(item);

        if (normalized === "a") {
            const cartEntry = addItemToCart(item);
            const applyDiscount = await prompt("Would you like to apply a discount code to this item? (y/n): ");
            if (applyDiscount.toLowerCase() === "y") {
                const code = await prompt("Enter discount code: ");
                applyDiscountCodeToItem(cartEntry, code);
            }
        } else if (normalized === "d") {
            viewItemDetails(item);
        } else if (normalized === "c") {
            if (existingCartEntry) {
                const code = await prompt("Enter discount code: ");
                applyDiscountCodeToItem(existingCartEntry, code);
            } else {
                console.log("This item has not been added to your cart yet. Add it first to apply a discount.");
            }
        } else {
            console.log("Invalid option. Please enter 'a', 'd', 'c', or press Enter to return.");
        }
    }
}

async function isleLayer(isle) {
    while (true) {
        browseIsle(isle);
        console.log("Press Enter to return to shopping isles.");

        const itemChoice = await prompt("Select an item number for more actions: ");
        if (itemChoice === "") {
            break;
        }

        const itemIndex = Number(itemChoice) - 1;
        if (!Number.isNaN(itemIndex) && isle.items[itemIndex]) {
            await itemLayer(isle.items[itemIndex]);
        } else {
            console.log("Invalid item selection.");
        }
    }
}

async function shoppingIslesLayer(isles) {
    while (true) {
        console.log("\nShopping Isles:");
        isles.forEach((isle, index) => {
            console.log(`${index + 1}. ${isle.description}`);
        });
        console.log("Press Enter to return to the main menu.");

        const isleChoice = await prompt("Select an isle to browse: ");
        if (isleChoice === "") {
            break;
        }

        const isleIndex = Number(isleChoice) - 1;
        if (!Number.isNaN(isleIndex) && isles[isleIndex]) {
            await isleLayer(isles[isleIndex]);
        } else {
            console.log("Invalid isle selection.");
        }
    }
}

async function cartLayer() {
    while (true) {
        viewCart();
        console.log("r. Remove an item");
        console.log("Press Enter to return to the main menu.");
        const input = await prompt("Select an action: ");
        
        if (input === "") {
            break;
        }

        const normalized = input.toLowerCase();
        
        if (normalized === "r") {
            if (shoppingCart.items.length === 0) {
                console.log("Your cart is empty. Nothing to remove.");
                continue;
            }

            const itemNumStr = await prompt("Enter the item number to remove (or press Enter to cancel): ");
            if (itemNumStr === "") {
                console.log("Cancelled.");
                continue;
            }

            const itemIndex = Number(itemNumStr) - 1;
            if (!Number.isNaN(itemIndex)) {
                removeItemFromCart(itemIndex);
            } else {
                console.log("Invalid item number.");
            }
        } else {
            console.log("Invalid option. Enter 'r' to remove an item or press Enter to return.");
        }
    }
}

async function main() {
    console.log("Welcome to the interactive shopping cart demo!");

    const isles = shoppingIsles;

    while (true) {
        console.log("\nMain menu:");
        console.log("1. View shopping isles");
        console.log("2. View cart");
        console.log("3. Checkout and exit");

        const choice = await prompt("Select an option (1-3): ");

        switch (choice) {
            case "1":
                await shoppingIslesLayer(isles);
                break;
            case "2":
                await cartLayer();
                break;
            case "3":
                viewCart();
                console.log("Thank you for shopping! Exiting program.");
                return;
            default:
                console.log("Invalid option. Please enter 1 through 3.");
                break;
        }
    }
}

if (typeof process !== "undefined" && process.stdin && process.stdout) {
    main().catch((error) => {
        console.error("An error occurred:", error);
    });
}

