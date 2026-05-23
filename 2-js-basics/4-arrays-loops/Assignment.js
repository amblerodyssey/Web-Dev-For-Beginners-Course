//Exercise 1

/**
 * Generates a list of numbers between minNum and maxNum, spaced by Nth.
 * @param {number} minNum 
 * @param {number} maxNum 
 * @param {number} Nth 
 * @returns {array} an array of numbers between minNum and maxNum (inclusive of minNum and maxNum), spaced by Nth, or null if input is invalid.
 */
function generateNthNumber (minNum, maxNum, Nth) {
    if (typeof minNum !== 'number' || typeof maxNum !== 'number' || typeof Nth !== 'number') {
        console.log('Invalid input, all parameters must be numbers.');
        return null;
    }

    else if (Nth <= 0) {
        console.log('Invalid input, Nth must be a positive integer.');
        return null;
    }

    else if (maxNum - minNum < Nth) {
        console.log('Invalid input, the range must be at least as large as Nth to generate that many numbers between min and max.');
        return null;
    }
    
    else {
        let numList = [];
        for (let i = minNum; i <= maxNum; i += Nth) {
            numList.push(i);
        }
        return numList;
    }
}

const output = generateNthNumber(0, 20, 4);
console.log(output);




//Exercise 2

function generateRandomArray (length) {
    if (typeof length !== 'number' || length <= 0) {
        console.log('Invalid input, length must be a positive integer.');
        return null;
    }
    else {
        let randomArray = [];
        for (let i = 0; i < length; i++) {
            randomArray.push(Math.floor(Math.random() * 100) + 1);
        }
        return randomArray;
    }
}

/**
 * Finds the maximum number in an array of numbers.
 * @param {array} arr - array of numbers to find the maximum value from.
 * @returns {number} the maximum number in the array, or null if input is invalid.
 */
function findMaximum(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        console.log('Invalid input, please provide a non-empty array.');
        return null;
    }
    else {
        let maxNum = Math.max(...arr);
        return maxNum;
    }
}   

/**
 * Finds the second maximum number in an array of numbers.
 * @param {array} arr - array of numbers to find the second maximum value from.
 * @returns {number} the second maximum number in the array, or null if input is invalid.
 */
function findSecondMaximum(arr) {
    if (!Array.isArray(arr) || arr.length < 2) {
        console.log('Invalid input, please provide an array with at least two numbers.');
        return null;
    }
    else {
        let maxNum = Math.max(...arr);
        let maxRemovedArr = arr.filter(num => num !== maxNum);
        let secondMaxNum = Math.max(...maxRemovedArr);
        return secondMaxNum;
    }
}

/**
 * Finds the minimum number in an array of numbers.
 * @param {array} arr - array of numbers to find the minimum value from.
 * @returns {number} the minimum number in the array, or null if input is invalid.
 */
function findMinimum(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        console.log('Invalid input, please provide a non-empty array.');
        return null;
    }
    else {
        let minNum = Math.min(...arr);
        return minNum;
    }
}

/**
 * Calculates the sum of all numbers in an array.
 * @param {array} arr - array of numbers to sum.
 * @returns {number} the sum of all numbers in the array, or null if input is invalid.
 */
function calculateSum(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        console.log('Invalid input, please provide a non-empty array.');
        return null;
    }
    else {
        let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        return sum;
    }
}

const numbers = generateRandomArray(15);
console.log(numbers);
console.log(findMaximum(numbers));
console.log(findMinimum(numbers));
console.log(calculateSum(numbers));
console.log(findSecondMaximum(numbers));



//Exercise 3

const stringArray = ['Project Hail Mary', 'The Martian', 'Dune', 'Ender\'s Game', 'Interstellar', 'Gravity'];

for (let i = 0; i < stringArray.length; i++) {
    console.log(`${i+1}: ${stringArray[i]}`);
}

for (const str of stringArray) {
    console.log(str.toUpperCase());
}

let stringArrayLength = 0;
stringArray.forEach(item => {
    stringArrayLength += item.length;
    }
);

console.log(`Total characters across all strings: ${stringArrayLength}`);

const totalCharacters = stringArray.reduce((accumulator, currentValue) => accumulator + currentValue.length, 0);
console.log(`Total characters across all strings using reduce method: ${totalCharacters}`);


//Exercise 4
const students = [{name: 'Jonah', age: 16, grade: 95}, 
    {name: 'Emily', age: 17, grade: 82}, 
    {name: 'Michael', age: 18, grade: 76}, 
    {name: 'Sarah', age: 15, grade: 88}, 
    {name: 'David', age: 16, grade: 92}, 
    {name: 'Anna', age: 18, grade: 85}, 
    {name: 'James', age: 16, grade: 79}, 
    {name: 'Laura', age: 15, grade: 91}, 
    {name: 'Robert', age: 16, grade: 68}, 
    {name: 'Jessica', age: 19, grade: 94},
    {name: 'Gertrude', age: 71, grade: 35}];


/**
 * Finds students by their age or age range (age range input are inclusive).
 * @param {array} students - an array of student objects containing keys of name, age and grade
 * @param {number|string} age - the age or age range to search for, can be a number for exact age match, or a string with "+" or "-" suffix for age range (e.g. "16+" for 16 and above, "18-" for 18 and below)
 * @returns {array} an array of student objects that match the specified age or age range, or null if input is invalid.
 */
function findStudentByAge(students, age) {
    if (!Array.isArray(students)) {
        console.log('Invalid input, please provide an array of students');
        return null;
    }
    switch (typeof age) {
        case 'number':
            return students.filter(student => student.age === age);
        case 'string':
            switch (age.at(-1)) {
                case '+':
                    const ageNumPlus = parseInt(age.slice(0, -1), 10);
                    if (isNaN(ageNumPlus)) {
                        console.log('Invalid age format, please provide a number followed by a "+" for age ranges.');
                        return null;
                    }
                    return students.filter(student => student.age >= ageNumPlus);
                case '-':
                    const ageNumMinus = parseInt(age.slice(0, -1), 10);
                    if (isNaN(ageNumMinus)) {
                        console.log('Invalid age format, please provide a number followed by a "-" for age ranges.');
                        return null;
                    }
                    return students.filter(student => student.age <= ageNumMinus);
                default:
                    console.log('Invalid age format, please provide a number or a number followed by "+" or "-" for age ranges.');
                    return null;
            }
        default:
            console.log('Invalid input type for age, please provide a number or a string with "+" or "-" for age ranges.');
            return null;
    }


}

/**
 * Calculates the average grade of a list of students.
 * @param {array} students - an array of student objects containing keys of name, age and grade.
 * @returns {number} the average grade of the students, or null if input is invalid.
 */
function calculateAverageGrade(students) {
    if (!Array.isArray(students) || students.length === 0) {
        console.log('Invalid input, please provide a non-empty array of students');
        return null;
    }
    const totalGrade = students.reduce((accumulator, currentValue) => accumulator + currentValue.grade, 0);
    return totalGrade / students.length;
}

/**
 * Finds students who have passed based on a given passing grade.
 * @param {array} students - an array of student objects containing keys of name, age and grade.
 * @param {number} passingGrade - the minimum grade required to pass.
 * @returns {array} an array of student objects who have passed, or null if input is invalid.
 */
function findPassingStudents(students, passingGrade) {
    if (!Array.isArray(students) || students.length === 0) {
        console.log('Invalid input, please provide a non-empty array of students');
        return null;
    }
    if (typeof passingGrade !== 'number' || passingGrade < 0 || passingGrade > 100) {
        console.log('Invalid input, please provide a valid passing grade between 0 and 100.');
        return null;
    }
    return students.filter(student => student.grade >= passingGrade);
}

const studentsAbove16 = findStudentByAge(students, '18-');
console.log(studentsAbove16);

const averageGrade = calculateAverageGrade(students);
console.log(`Average grade of all students: ${averageGrade.toFixed(2)}`);

const passingStudents = findPassingStudents(students, 85);
console.log(passingStudents);