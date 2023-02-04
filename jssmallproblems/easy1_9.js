

function leapYearGeorgian(num1) {
  let year = num1
  if (year % 4 === 0 && year % 100 !== 0) {
    console.log('true');
  } else if (year % 100 !== 0 && year % 400 === 0) {
    console.log('true');
  } else {
    console.log('false');
  }
}


function leapYearJulian(num1) {
  let year = num1
  if (year % 4 === 0) {
    console.log('true');
  } else {
    console.log('false');
  }
}

function britishLeapYear(year) {
 if (year > 1752) {
  leapYearGeorgian(year);
 } else {
  leapYearJulian(year);
 }
}

britishLeapYear(400);
