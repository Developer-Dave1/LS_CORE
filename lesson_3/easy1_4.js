/* Using the following string, create a new string that contains all lowercase letters,
 except for the first character, which should be capitalized.


let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

*/

let munstersDescription = "the Munsters are CREEPY and Spooky.";

let lowerCase = munstersDescription.toLowerCase()
let upperCase = munstersDescription.charAt(0).toUpperCase() 


console.log(upperCase + lowerCase);

 // munstersDescription.substring(1).toLowerCase();

