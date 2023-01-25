/* Starting with the string:

Copy Code
let famousWords = "seven years ago...";
show two different ways to put the expected "Four score and " in front of it.

*/


// Version 1

let famousWords = "seven years ago...";

let famousWords2 = "Four score and ";

let newQuote = famousWords2 + famousWords

console.log(newQuote);

// Version 2

console.log(famousWords2.concat(famousWords));

