let testGrades1 = ['A-', 3, 'C', 1, 'B'];
let testGrades2 = [5, 'A', 2, 'C-', 4];
let testGrades3 = ['A','B-',1,4,5,2];

let studentsWhoPass = [];
let studentsWhoFail = [];
let convertedGrades = [];

let allStudents = testGrades3;

const passingGradeNumerical = [3, 4, 5];
const failingGradeNumerical = [1, 2];
const passingGradeLetter = ['A', 'A-', 'B', 'B-', 'C', 'C-'];
const failingGradeLetter = ['D', 'F'];

function convertGrade(grade) {
    //converts letter grades to numerical grades, returns null for invalid input
    if ((typeof grade === 'string') && (passingGradeLetter.includes(grade) || failingGradeLetter.includes(grade))) {
        let gradeCategory = grade[0];
        switch (gradeCategory) {
            case 'A':
                return 5;
            case 'B':
                return 4;
            case 'C':
                return 3;
            case 'D':
                return 2;
            case 'F':
                return 1;
            default:
                console.log('Invalid letter grade');
                return null;
        }
    }
    else {
        console.log(`Invalid conversion, only letter grades are converted to numerical grades. Letter grades must conform to letter grade standards'`);
        return null;
    }
}



for (const grade in allStudents) {
    switch (typeof allStudents[grade]) {
        case 'number':
            if (passingGradeNumerical.includes(allStudents[grade])) {
                studentsWhoPass.push(allStudents[grade]);
                convertedGrades.push(allStudents[grade]);
                break;
            }
            else if 
                (failingGradeNumerical.includes(allStudents[grade])) {
                studentsWhoFail.push(allStudents[grade]);
                convertedGrades.push(allStudents[grade]);
                break;
            }
            else {
                console.log('Invalid grade value');
                break;
            }
        
        case 'string':
            if (passingGradeLetter.includes(allStudents[grade])) {
                studentsWhoPass.push(allStudents[grade]);
                convertedGrades.push(convertGrade(allStudents[grade]));
                break;
            }
            else if (failingGradeLetter.includes(allStudents[grade])) {
                studentsWhoFail.push(allStudents[grade]);
                convertedGrades.push(convertGrade(allStudents[grade]));
                break;
            }
            else {
                console.log('Invalid grade value');
                break;
            }
            
        default:
            console.log('Invalid grade type');
            break;
    }
}

console.log(`${studentsWhoPass.length} students have passed with grades: ${studentsWhoPass.join(', ')}`);
console.log(`${studentsWhoFail.length} students have failed with grades: ${studentsWhoFail.join(', ')}`);
console.log(`Converted grades: ${convertedGrades.join(', ')}`);