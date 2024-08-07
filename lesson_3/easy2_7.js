/* Consider the following object:

let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

Create an array from this object that contains only two elements: Barney's name and Barney's number:

[ 'Barney', 2 ]

*/

let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

// My solution:

console.log(Object.entries(flintstones)[2]);
console.log(flintstones);

// LS' Solution:

Object.entries(flintstones).filter(pair => pair[0] === "Barney").shift();