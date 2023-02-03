/*
create a tip calculator
declare a variable called billAmount
declare a variable called tipRate
declare a variable called tipAmount
declare a variable called totalAmount
greet user
request a bill amount
request a tip rate
return tip amount
return total cost
*/

// let billAmount 
// let tipRate 

let rlSync = require('readline-sync');

let billAmount = rlSync.question('How much is your bill?');

let tipRate = rlSync.question('What is the tip percentage?')/ 100;

let tipAmount = (tipRate * billAmount).toFixed(2);
let totalAmount = (billAmount * (tipRate + 1)).toFixed(2);

console.log(`Your tip amount is $${tipAmount}.`);
console.log(`Your total bill amount is $${totalAmount}.`);




