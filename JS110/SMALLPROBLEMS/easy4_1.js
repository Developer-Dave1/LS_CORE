/*
[P]
INPUT
- six numbers from the user
OUTPUT
- a message that describes whether the sixth number appears 
among the first five numbers
EXPLICIT RULES
- ask the user for 6 numbers
- must compare 6th number to the first 5 and see if the
6th number is a duplicate
- output a message that has the comparison answer

IMPLICIT RULES
- the number can have as many digits as desired

[E]
- the test cases demonstrates the above

[D]
- Add the user's first 5 numbers to an array
- Compare the last number(6) to the array elements and see
if it appears in the first five given numbers
- output the last number and the array with a console message
that describes whether or not there is a duplicate of the last number

[A]
- declare and initialize the read-line sync prompt
- declare a function called `prompt` that outputs any message
that is passed as an argument
- use the prompt function to ask the user for 6 seperate numbers
- assign each user number given to a variable
- declare and initialize an empty array called `firstFive`
- for numbers 1 - 5, add each number to the array `firstFive`
- create a function called `findDuplicate` that takes an integer as 
an argument to see if it is a duplicate of any of the elements in the
 `firstFive` array. If it is a duplicate, output a message that displays
 the last number and the `firstFive` array and that the last number is in
 `firstFive` array. Do the opposite if its not.

 [C]
 - see below
*/

const readline = require('readline-sync');

function prompt(msg) {
  console.log(msg);
}

let firstFive = [];

prompt('Enter your first number.');
let number1 = readline.question();
firstFive.push(number1);

prompt('Enter your second number.');
let number2 = readline.question();
firstFive.push(number2);

prompt('Enter your third number.');
let number3 = readline.question();
firstFive.push(number3);

prompt('Enter your fourth number.');
let number4 = readline.question();
firstFive.push(number4);

prompt('Enter your fifth number.');
let number5 = readline.question();
firstFive.push(number5);

prompt('Enter your last number.');
let lastNumber = readline.question();

function findDuplicate(lastNumber) {
  if (firstFive.includes(lastNumber)) {
    console.log(`The number ${lastNumber} appears in ${firstFive}.`);
  } else {
    console.log(`The number ${lastNumber} does NOT appear in ${firstFive}.`);
  }
}

findDuplicate(lastNumber);
