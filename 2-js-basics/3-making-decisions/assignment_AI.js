let testGrades1 = ['A-', 3, 'C', 1, 'B'];
let testGrades2 = [5, 'A', 2, 'C-', 4];
let testGrades3 = ['A','B-',1,4,5,2];

let studentsWhoPass = [];
let studentsWhoFail = [];
let convertedGrades = [];

let allStudents = testGrades3;

// Use Sets for constant-time membership checks instead of repeated array.includes()
const passingGradeNumerical = new Set([3, 4, 5]);
const failingGradeNumerical = new Set([1, 2]);
const passingGradeLetter = new Set(['A', 'A-', 'B', 'B-', 'C', 'C-']);
const failingGradeLetter = new Set(['D', 'F']);

// Map letter grades directly to their numeric equivalents for fast conversion.
const gradeValueMap = {
    A: 5,
    'A-': 5,
    B: 4,
    'B-': 4,
    C: 3,
    'C-': 3,
    D: 2,
    F: 1,
};

function convertGrade(grade) {
    // Convert a letter grade using the direct lookup map; return null for invalid letters.
    if (typeof grade === 'string' && gradeValueMap.hasOwnProperty(grade)) {
        return gradeValueMap[grade];
    }

    console.log(`Invalid conversion, only recognized letter grades are converted to numerical grades.`);
    return null;
}



// Iterate over actual grade values (using for.. of) instead of array indices (for.. in) for clearer code.
for (const grade of allStudents) {
    if (typeof grade === 'number') {
        // Numeric grades are already in their converted form.
        if (passingGradeNumerical.has(grade)) {
            studentsWhoPass.push(grade);
            convertedGrades.push(grade);
        } else if (failingGradeNumerical.has(grade)) {
            studentsWhoFail.push(grade);
            convertedGrades.push(grade);
        } else {
            console.log('Invalid numeric grade value');
        }
    } else if (typeof grade === 'string') {
        const numericGrade = convertGrade(grade);

        if (numericGrade === null) {
            continue; // Skip invalid letter grades.
        }

        if (passingGradeLetter.has(grade)) {
            studentsWhoPass.push(grade);
            convertedGrades.push(numericGrade);
        } else if (failingGradeLetter.has(grade)) {
            studentsWhoFail.push(grade);
            convertedGrades.push(numericGrade);
        } else {
            console.log('Invalid letter grade value');
        }
    } else {
        console.log('Invalid grade type');
    }
}

console.log(`${studentsWhoPass.length} students have passed with grades: ${studentsWhoPass.join(', ')}`);
console.log(`${studentsWhoFail.length} students have failed with grades: ${studentsWhoFail.join(', ')}`);
console.log(`Converted grades: ${convertedGrades.join(', ')}`);