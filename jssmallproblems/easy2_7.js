/*

write a function name xor
function takes two arguments
RETURNS true if EXACTLY one of its arguments is truthy
RETURNS false if EXACTLY one of its arguments is false
return MUST be a BOOLEAN value

*/


function xor(value1, value2) {
if ((value1 && !value2) || (value2 && !value1)) {
  return true;
}
return false;
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);

