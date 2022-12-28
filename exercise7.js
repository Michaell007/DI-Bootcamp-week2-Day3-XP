const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// Console.log the name of their secret society.
const orderNames = [...names.sort()];
let secret = "";
for (const name of orderNames) {
    secret += name.charAt(0);
}

console.log(secret);