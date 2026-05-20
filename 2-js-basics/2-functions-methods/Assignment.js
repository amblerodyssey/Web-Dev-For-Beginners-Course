function sayHello (){
    console.log("Hello!");
}

function introduceYourself (name) {
    console.log(`Hi, my name is ${name}.`);
}

function greetPerson (name, greeting = "Hello") {
    console.log(`${greeting}, ${name}!`);
}

function addNumbers (num1, num2) {
    return num1 + num2;
}

function createFullName (firstName, lastName) {
    const fullName = firstName + " " + lastName;
    const fullNameTemplate = `${firstName} ${lastName}`;
    return [fullName, fullNameTemplate];
}

function calculateTip (billAmount, tipPercentage = 15) {
    const tipAmount = billAmount * (tipPercentage / 100);
    return tipAmount;
}

sayHello();
introduceYourself("Ben");
greetPerson("Ben2");
greetPerson("Ben3", "Hi");

const sum = addNumbers(5, 3);
console.log (`The sum is: ${sum}`);

const fullName = createFullName("Ben", "Dover");
console.log(`Full name (concatenation): ${fullName[0]}`);
console.log(`Full name (template literal): ${fullName[1]}`);

const tip = calculateTip(50,10);
console.log(`Tip for $50 bill: $${tip}`);


const added = (a=1, b=2) => {console.log(a + b)};
added(2,3);

setTimeout(added, 2000);