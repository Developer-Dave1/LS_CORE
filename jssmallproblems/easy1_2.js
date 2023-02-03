/*


P
Iterate through numbers 1-99 inclusive
Log odd numbers to console
Log all numbers to seperate line

E
N/A
D
No array or object needed

A
Declare the variable num
Use num in a for loop
When num <= to 99, stop
If num is not divisible by 2, print to console
*/



function isOdd(num) {
for (num = 0; num <= 99; num++) {
  let value = num;
  if (value % 2 !== 0) {
    console.log(num);
  }
}
}

isOdd();