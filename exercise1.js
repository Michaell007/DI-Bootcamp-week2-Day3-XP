const people = ["Greg", "Mary", "Devon", "James"];

// remove Greg
people.splice(0,1);

// replace “James” to “Jason”
people[2] = 'Jason';

// add my name to end
people.push("Michael");

// Write code that console.logs Mary’s
console.log(people[0]);

// Write code to make a copy of the people array using the slice method
let newArray = [...people.slice(1, 4)];
console.log('Array copy', newArray);

// Get index of "Foo"
console.log(people.indexOf("Foo")); // Return -1 because Foo not exist in this array


// Part II

// Using a loop, iterate through the people array
for (person of people) {
    console.log(person);
}

// Using a loop, iterate through the people array and exit the loop after you console.log “Jason”
for (const person of people) {
    if (person === "Jason") {
        break;
    }
    console.log(person);
}