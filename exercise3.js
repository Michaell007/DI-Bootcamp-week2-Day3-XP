// Prompt the user for a number.
let value = prompt("Enter a value");
console.log(typeof(value));

while (Number(value)<10) {
    value = prompt("Enter a value");
}