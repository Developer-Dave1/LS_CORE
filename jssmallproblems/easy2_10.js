let prompt = require('readline-sync');

let age = prompt.question('How old are you?');

let retireAge = prompt.question('What age would you like to retire at?');

let workYears = (retireAge - age)

let d = new Date();
let currentYear = d.getFullYear();

function retireYear() {
  let retirementDate = currentYear + workYears
  console.log(`"It's currently ${currentYear}. You will retire in ${retirementDate}.\n You only have ${workYears} years left to go!"`);

}
retireYear();