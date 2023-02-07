/*

write a function
takes a number as an argument
if number is positive, return the negative
if number is negative, return it as-is


*/

function negative(num) {
  let number = Math.sign(num)
  if (number = 1) {
  console.log(-Math.abs(num));
  } else {
    console.log(num);
  }
}

negative(-7);