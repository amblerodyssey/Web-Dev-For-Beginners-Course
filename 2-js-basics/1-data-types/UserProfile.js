// ========================================
// USER PROFILE OBJECT & OPERATIONS DEMO
// ========================================

// Create a user profile object with various data types
const userProfile = {
  // String data type
  name: "Alex Johnson",
  
  // Number data type
  age: 22,
  
  // Boolean data type
  isStudent: true,
  
  // Array data type
  favoriteColors: ["blue", "green", "purple"],
  
  // Nested object with properties
  address: {
    street: "123 Learning Lane",
    city: "Tech City",
    zipCode: "12345"
  }
};

Object.defineProperty(userProfile, 'ID',{
    value: 'USER-001',
    writable: false,
    enumerable: true,
    configurable: false
  }
);

// ========================================
// FUNCTION 1: Display Profile Information
// ========================================
function displayProfile(profile) {
  console.log("\n=== USER PROFILE ===");

  // Accessing non-writable property
  console.log(`ID: ${profile.ID}`); 
  
  // String concatenation (traditional)
  console.log("Name: " + profile.name);
  
  // Template literals for cleaner string interpolation
  console.log(`Age: ${profile.age} years old`);
  
  // Arithmetic operations with age
  const nextYearAge = profile.age + 1;
  const birthYear = new Date().getFullYear() - profile.age;
  console.log(`Next year, ${profile.name} will be ${nextYearAge} years old`);
  console.log(`${profile.name} was born around ${birthYear}`);
  
  // Boolean logic for student status
  if (profile.isStudent) {
    console.log(`${profile.name} is currently a student`);
    console.log("Benefits: Access to student discounts and resources");
  } else {
    console.log(`${profile.name} is no longer a student`);
  }
  
  // Array display
  console.log(`Favorite colors: ${profile.favoriteColors.join(", ")}`);
  
  // Nested object display with template literals
  console.log("\nAddress Information:");
  console.log(`  Street: ${profile.address.street}`);
  console.log(`  City: ${profile.address.city}`);
  console.log(`  Zip Code: ${profile.address.zipCode}`);
  
  // Complete address using string concatenation
  const fullAddress = 
    profile.address.street + ", " + 
    profile.address.city + ", " + 
    profile.address.zipCode;
  console.log(`  Full Address: ${fullAddress}`);
}

// ========================================
// FUNCTION 2: Update Individual Fields
// ========================================
function updateProfile(profile, fieldName, newValue) {
  // Boolean check to determine if update is valid
  const isValidField = fieldName in profile;
  
  if (!isValidField) {
    console.log(`\n❌ Error: "${fieldName}" is not a valid profile field.`);
    return false;
  }
  
  else if (fieldName === "ID") {
    console.log(`\n❌ Error: "${fieldName}" is a read-only field and cannot be updated.`);
    return false;
  }

  const oldValue = profile[fieldName];
  profile[fieldName] = newValue;
  
  // Template literal for confirmation message
  console.log(`\n✓ Updated ${fieldName}: "${oldValue}" → "${newValue}"`);
  return true;
}

// ========================================
// FUNCTION 3: Update Nested Address
// ========================================
function updateAddress(profile, addressField, newValue) {
  const validFields = ["street", "city", "zipCode"];
  
  if (!validFields.includes(addressField)) {
    console.log(`\n❌ Error: Address field must be one of: ${validFields.join(", ")}`);
    return false;
  }
  
  const oldValue = profile.address[addressField];
  profile.address[addressField] = newValue;
  
  console.log(`\n✓ Updated address.${addressField}: "${oldValue}" → "${newValue}"`);
  return true;
}

// ========================================
// FUNCTION 4: Add Favorite Color
// ========================================
function addFavoriteColor(profile, color) {
  // Check if color is already in the array
  if (profile.favoriteColors.includes(color)) {
    console.log(`\n✓ "${color}" is already in favorite colors!`);
    return false;
  }
  
  profile.favoriteColors.push(color);
  console.log(`\n✓ Added "${color}" to favorite colors`);
  console.log(`Total favorite colors: ${profile.favoriteColors.length}`);
  return true;
}

// ========================================
// FUNCTION 5: Calculate Age Info
// ========================================
function getAgeInfo(profile) {
  const age = profile.age;
  const ageGroup = age < 18 ? "Minor" : age < 25 ? "Young Adult" : age < 65 ? "Adult" : "Senior";
  
  console.log("\n=== AGE INFORMATION ===");
  console.log(`Current age: ${age}`);
  console.log(`Age category: ${ageGroup}`);
  console.log(`Age doubled: ${age * 2}`);
  console.log(`Age in months: ${age * 12}`);
  console.log(`Age in days (approximate): ${age * 365}`);
}

// ========================================
// FUNCTION 6: Get Student Status Summary
// ========================================
function getStudentSummary(profile) {
  console.log("\n=== STUDENT STATUS SUMMARY ===");
  
  // Boolean logic with ternary operator
  const status = profile.isStudent ? "Yes" : "No";
  console.log(`Is a student: ${status}`);
  
  // Compound boolean logic
  const isYoungStudent = profile.isStudent && profile.age < 18;
  const isAdultStudent = profile.isStudent && profile.age >= 18;
  
  if (isYoungStudent) {
    console.log(`${profile.name} is a young student (under 18)`);
  } else if (isAdultStudent) {
    console.log(`${profile.name} is an adult student`);
  } else if (!profile.isStudent) {
    console.log(`${profile.name} is not a student, but can pursue education`);
  }
}

// ========================================
// DEMONSTRATION: Run all functions
// ========================================

console.log("🎓 JAVASCRIPT DATA TYPES & OPERATIONS DEMO");
console.log("==========================================");

// Display initial profile
displayProfile(userProfile);

// Get age information with arithmetic operations
getAgeInfo(userProfile);

// Display student status
getStudentSummary(userProfile);

// Update individual fields
updateProfile(userProfile, "name", "Alex Taylor Johnson");
updateProfile(userProfile, "age", 23);
updateProfile(userProfile, "ID", "USER-002")

// Update boolean status
updateProfile(userProfile, "isStudent", false);

// Update nested address fields
updateAddress(userProfile, "city", "Innovation Hub");

// Add favorite colors to array
addFavoriteColor(userProfile, "orange");
addFavoriteColor(userProfile, "red");
addFavoriteColor(userProfile, "blue"); // Already exists

// Display updated profile
displayProfile(userProfile);

// Display final student summary
getStudentSummary(userProfile);

// ========================================
// BONUS: Summary Statistics
// ========================================
console.log("\n=== PROFILE SUMMARY ===");
console.log(`Total fields in profile: ${Object.keys(userProfile).length}`);
console.log(`Favorite color count: ${userProfile.favoriteColors.length}`);
console.log(`Profile data types used: String, Number, Boolean, Array, Object`);
