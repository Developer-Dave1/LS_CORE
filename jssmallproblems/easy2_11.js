/*

write a function
take a string
return the middle characters
if the string's length is odd, return one character
if the string is even in length, return two characters

*/


function centerOf(string) {
  if (string.length % 2 === 1) {
    let centerIndex = (string.length - 1) / 2;
    return string[centerIndex];
  } else {
    let leftIndex = string.length / 2 - 1;
    return string.substring(leftIndex, leftIndex + 2);
  }
}