/*
Primitive Data Types:
- String: Product names, descriptions, user information
- Number: Prices, quantities, tax calculations
- Boolean: Item availability, user preferences, cart status
- Null: Intentionally empty values (like missing discount codes)
- Undefined: Uninitialized values or missing data
- Symbol: Unique identifiers (advanced use)
- BigInt: Large financial calculations (advanced use: integers above 2^53 - 1)

Reference Types:
- Object: Product details, user profiles, cart contents
- Array: List of products, order history, categories

*/

export const ChickenDiscountCode = Symbol("CHICKEN10");
// Symbols are unique and immutable identifiers, often used for private properties or unique keys in objects. 
// In this case, we use a Symbol to represent a discount code for chicken products, ensuring that it cannot be accidentally overwritten or accessed without the correct reference. 


export const carrots = {
    ProductName: "Farmer's Fresh Carrots",
    ProductDescription: "Freshly harvested organic carrots from local farms",
    ProductUserInfo: "Consume raw or use in cooking",
    ProductUnitPrice: 0.99,
    ProductUnitQuantityGrams: 500,
    ProductAvailability: true,
    ProductOldestStockDate: undefined,
    ProductDiscountCode: null,
    StockQuantity: 15,
};

export const milk = {
    ProductName: "Hunter Valley Dairy Milk",
    ProductDescription: "Fresh whole milk delivered daily from Hunter Valley farms",
    ProductUserInfo: "Consume raw or use in cooking",
    ProductUnitPrice: 2.99,
    ProductUnitQuantityGrams: 1500,
    ProductAvailability: true,
    ProductOldestStockDate: "2026-01-09T00:00:00.000Z",
    ProductDiscountCode: null,
    StockQuantity: 23,
};

export const ChickenThigh = {
    ProductName: "Free-Range Chicken Thighs",
    ProductDescription: "Bulk pack of 4 free-range chicken thighs from local butcher",
    ProductUserInfo: "Cook thoroughly before consuming",
    ProductUnitPrice: 17.49,
    ProductUnitQuantityGrams: 1200,
    ProductAvailability: true,
    ProductOldestStockDate: "2026-01-08T23:15:39.000Z",
    ProductDiscountCode: ChickenDiscountCode,
    StockQuantity: 18,
};

export const UraniumPellet = {
    ProductName: "Fissile Uranium Pellet",
    ProductDescription: "Commercial-grade enriched uranium pellets in capsule form for children's science kits",
    ProductUserInfo: "Must be purchased with parental supervision. Graphite rod included. Equivalent yield of 4.3 ton of TNT",
    ProductUnitPrice: 999.00,
    ProductUnitQuantityGrams: 100,
    ProductAvailability: false,
    ProductOldestStockDate: "2022-12-20T17:00:00.000Z",
    ProductDiscountCode: null,
    StockQuantity: 3,
};

export const TwoSidedTape = {
    ProductName: "Two-Sided Tape",
    ProductDescription: "2-pack of 3M branded 100m two-sided tape",
    ProductUserInfo: "Easy to use and provides strong adhesion for most surfaces",
    ProductUnitPrice: 3.99,
    ProductUnitQuantityGrams: 50,
    ProductAvailability: true,
    ProductOldestStockDate: "2024-05-03T21:13:04.285Z",
    ProductDiscountCode: null,
    StockQuantity: 37,
};

export const ItemList = [carrots, milk, ChickenThigh, UraniumPellet, TwoSidedTape];
export const DiscountList = [ChickenDiscountCode];