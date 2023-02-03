/*
initialize readline sync
greet user
ask for length of room in meters
ask for width of room in meters
calculate the square meters of the room
convert square meters into square footage
return the size of the room in both meters and feet


*/



console.log('***** Welcome to The Room Calculator! *****');

let rlSync = require('readline-sync');
let lengthMetres = rlSync.question("Let's get started!\n Give us a number that represents the length of your room in metres.");
let widthMetres = rlSync.question("Now give us the width of your room in metres.");

let squareMetres = lengthMetres * widthMetres;
let squareFeet = squareMetres * 10.7639

console.log(`Your room is ${squareMetres} square metres in size.`);
console.log(`Your room is ${squareFeet} square feet in size.`);


