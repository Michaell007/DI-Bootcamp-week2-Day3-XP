// Create an array called colors
let colors = ["White","Black","Yellow","Red","Green"];

// Loop through the array, console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
for (let index = 0; index < colors.length; index++) {
    console.log(`My #${index+1} choice is ${colors[index]}`);
}

// Bonus
for (let index = 0; index < colors.length; index++) {

    let ordinal;
    let suffixes = ["st","nd","rd","th"];

    let indice = Number(index)+1;
    switch (indice) {
        case 1:
            ordinal = suffixes[index];
            break;
        case 2:
            ordinal = suffixes[index];
            break;
        case 3:
            ordinal = suffixes[index];
            break;

        default:
            ordinal = suffixes[3];
            break;
    }
    console.log(`My ${indice+ordinal} choice`);
}
