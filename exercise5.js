// Create an object called family with a few key value pairs
const family = {
    language: "French",
    children: 6,
    named: "Yapi"
};

// Using a for in loop, console.log the keys of the object.
for (const key in family) {
    console.log(key);
}

// Using a for in loop, console.log the values of the object.
for (const key in family) {
    console.log(family[key]);
}