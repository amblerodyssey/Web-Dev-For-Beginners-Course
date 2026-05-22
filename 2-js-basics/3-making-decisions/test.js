const day = 'Monday';
const day2 = 'Tuesday';

switch (day) {
    case 'Monday':
        console.log('Start of the week');
        // No break here, so it will continue to the next case
        // Switch executes conditions sequentially until it finds a match, and then it executes all the code from that point until it encounters a break statement.
    case 'Tuesday':
        console.log('Second day of the week');
        break;
    case 'Wednesday':
        console.log('Midweek');
        break;
    default:
        console.log('Another day');
        break;
}

day === 'Monday' ? console.log(`true`) : console.log('false');
day === 'Monday' && day2 === 'Tuesday' ? console.log(`true`) : console.log('false');
day === 'Monday' || day2 === 'Wednesday' ? console.log(`true`) : console.log('false');
day !== 'Monday' ? console.log(`true`) : console.log('false');