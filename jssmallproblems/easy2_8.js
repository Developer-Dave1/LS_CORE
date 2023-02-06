/*

write a function
returns an array that contains every other element an array that is passed as argument
values returned should be in index 0, 2, 4

*/

let listOne = [2, 3, 4, 5, 6]
let listTwo = [1, 2, 3, 4, 5, 6]
let listThree = ["abc", "def"]
let listFour = [123]


function everyOther(array) {
  let oddElements = [];
  for (i = 0; i < array.length; i += 2) {
    oddElements.push(array[i]);
  }
  return oddElements;
 }

console.log(everyOther(listFour));
