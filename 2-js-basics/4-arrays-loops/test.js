const testArray = [1, 2, 3, 4, 5];
let squaredArray = [];

// forEach is a method that executes a provided function once for each array element. It is often used for side effects, such as displaying items or modifying an external variable (like squaredArray in this case).
//it does not return a new array, so we need to push the squared values into the squaredArray manually within the callback function. 
testArray.forEach((num) => {
    squaredArray.push(num ** 2);
});

//map is a method that creates a new array populated with the results of calling a provided function on every element in the calling array. 
//It is used when you want to transform each element of an array and get a new array with the transformed values.
let mappedArray = testArray.map((num) => {
    return num ** 2; //without return keyword, the function will return undefined for each element, resulting in an array of undefined values.
});

//console.log(squaredArray);
//console.log(mappedArray);


const studentGrades = {'Jonah': 4, 'Emily': 1, 'Michael': 2, 'Sarah': 3, 'David': 5, 'Anna': 4, 'James': 2, 'Laura': 3, 'Robert': 1, 'Jessica': 5};

//math.max and math.min do not work directly on objects or arrays, so we need to use the ... spread operator to get an series of grade values that the max/min functions can process.
const highestGrade = Math.max(...Object.values(studentGrades)); 
const lowestGrade = Math.min(...Object.values(studentGrades));


//the reduce method works by applying a function against an accumulator and each element in the array (from left to right) to reduce it to a single value. 
//the reduce method parameters array.reduce((accumulator, currentValue, currentIndex, array) => { ... }, initialValue);
const averageGrade = Object.values(studentGrades).reduce((sum, grade) => sum + grade, 0) / Object.values(studentGrades).length;

//the filter method creates a new array with all elements that pass the test implemented by the provided function.
const averagePassingGrade = Object.values(studentGrades).filter(grade => grade >= 3).reduce((sum, grade) => sum + grade, 0) / Object.values(studentGrades).filter(grade => grade >= 3).length;

//object.entries returns an array of arrays containing a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop.
//filter method is used to create a new array from Object.entries' array of arrays that meets the condition of having a grade above 3.
//map method is then used to create a new array that contains only the student names (the keys) from the filtered array of arrays.
const gradeAbove3 = Object.entries(studentGrades).filter(([student, grade]) => grade > 3).map(([student, grade]) => student);

console.log(Object.entries(studentGrades));
console.log(gradeAbove3);
console.log(Object.values(studentGrades));
console.log(...Object.values(studentGrades));

//student is the key, studentGrades[student] is the value.
//for..of in this case is not suitable because it is used for iterating over iterable objects like arrays, strings, maps, sets, etc. 
//It does not work with plain objects like studentGrades.
for (const student in studentGrades) {
    console.log(student);
    console.log(studentGrades[student]);
}
