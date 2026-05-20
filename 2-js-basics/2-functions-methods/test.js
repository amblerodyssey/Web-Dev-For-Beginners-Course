function random() {
  setTimeout(() => {
    console.log("nothing happened"); // fat arrow 'anonymous' function, defining a function without a name and using the "this" context of the surrounding code
  }, 3000);
  return null;
}

function displayGreeting(name) {
    const messsage = `Hello, ${name}! Welcome to JavaScript programming.`;
    console.log(messsage);
}

displayGreeting(3);
displayGreeting(true);
displayGreeting(null);
displayGreeting(undefined);
displayGreeting({ name: "Alice" });
displayGreeting([1, 2, 3]);
displayGreeting(() => console.log("This is a function"));

displayGreeting();
displayGreeting('a', 'b', 'c');
console.log((a) => {return a**2},(5));