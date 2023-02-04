/*
leap year = occurs in every year that / 4, unless / 100
if the leap year is / 100, then it is not a leap year, unless /400
return a boolean true or false if it is a leap year

when is it a leap year?
- every year that is /4, but not divisble by /100
- if year is !== / 100, but is /400


when is it not a leap year?


*/

function leapYear(num1) {
  let year = num1
  if (year % 4 === 0 && year % 100 !== 0) {
    console.log('true');
  } else if (year % 100 !== 0 && year % 400 === 0) {
    console.log('true');
  } else {
    console.log('false');
  }
}

leapYear(100);