/*
PSEUDO  CODE
Greet the user.
Ask for total mortage amount.
Verify the number.
Ask for interest rate.
Verify the number.
Ask for loan duration in years.
Verify the the number.

Functions:
Calculate the monthly interest rate.
Calculate the loan duration in months.

Calculate the monthly mortage payment.
Convert value to dollars.
Return the result to user with dollar sign.
Ask if they would like to do another calculation.

FORMAL PSEUDO CODE
START
PRINT "Welcome to Dave's Loan Calculator"

GET "How much money are you looking to borrow?"
SET loanAmount = answer1

GET "Enter the interest rate percentage."
SET annualInterestRate = answer2

GET "Enter the loan duration in months?"
SET loanLength = answer3


SET monthlyInterestRate = annualInterestRate / loanLengthMonths 
SET monthlyPayment = loanAmount * (interestRate / (1 - Math.pow((1 + monthlyInterestRate), (-loanLength))))

PRINT montlyPayment 

END

*/

const readline = require('readline-sync');
function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

prompt("Welcome to Dave's Loan Calculator");

///

prompt("How much money are you looking to borrow?");
let loanAmount = readline.question();

while (invalidNumber(loanAmount) || (loanAmount < 0)) {
  prompt("Hmmmm...that doesn't look like a valid number.");
  loanAmount = readline.question();
}

console.clear();

///

prompt("Enter your interest rate in %: ");
let annualInterestRate = readline.question();

while (invalidNumber(annualInterestRate) || (annualInterestRate <= 0) || (annualInterestRate >= 100)) {
  prompt("Hmmmm...that doesn't look like a valid number.");
  annualInterestRate = readline.question();
}

annualInterestRate /= 100;

let monthlyInterestRate = (annualInterestRate / 12);

console.clear();
///

prompt("Enter the loan duration in years.");
let annualLoanLength = readline.question();

while (invalidNumber(annualLoanLength)) {
  prompt("Hmmmm...that doesn't look like a valid number.");
  annualLoanLength = readline.question();
}

let monthlyLoanLength = annualLoanLength * 12;

console.clear();

///

function displayResults() {
  console.log("In summary:");
  console.log(`Loan Requested: $${loanAmount}`);
  console.log(`Annual Interest Rate: ${annualInterestRate}`);
  console.log(`Loan duration in years: ${annualLoanLength}`);
  console.log(`Loan duration in months: ${monthlyLoanLength}`);
}

displayResults();

let monthlyPayment = loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (- monthlyLoanLength)))).toFixed(2);
console.log(`==> Your monthly loan payment is $${monthlyPayment}\n\nThanks for using Dave's Calculator! Props!\n`);


