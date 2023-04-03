/*

[P]
INPUT
- string
OUTPUT
- boolean value
EXPLICIT RULES
- a palindrome reads the same forwards and backwards
- write a function called `isPalindrome` that returns true if string argument is a palindrome
- case sensitivity matters
- all characters matter
IMPLICIT RULES
- the string does not have to contain just letters
- if the string has a character with a unique case sensitivity compared to other
characters, it's void
- minimum length of substring or palindrome is 2 characters

[E]
- test cases show a boolean value returned 
- returns false when case sensitivity isn't met
- spaces and symbols are taken into account
- numbers are valid within a string

[D]
- the data structure I plan on using are strings and arrays. 
- convert the string into array to loop through the characters

[A]
- create an empty array called `result` that will contain all required substrings
- create a `starting index` variable (value '0') for the starting index of a substring
- start a loop that uses `startingIndex` to iterate over `string` from 0
to the length of the string -2
- create a `numChars` variable (value `2`) for the length of substring
- start an inner loop that uses `numChars` to iterate over `string` from `2`
to `string.length - startingindex`
  - extract a substring of length `numChars` from `string` starting at `startingIndex`
  - append the extracted substring to the `result` array
  - increment the `numChars` variable by `1`
  - end the loop
- increment the `startingIndex` variable by `1`
- end the outer loop
- return the `result` array
- write a function called `isPalindrome` that takes a string has a parameter
- inside the function body, use the strict equality operator to compare
a substring with the original string

[C]

*/

function isPallindrome(string) {
  return string === string.split('').reverse().join('');
}

console.log(isPallindrome('Madam'));



