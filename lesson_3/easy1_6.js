/*
We have most of the Munster family in our ages object:

Copy Code
let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
Add entries for Marilyn and Spot to the object:

Copy Code
let additionalAges = { Marilyn: 22, Spot: 237 };
*/

let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };

let additionalAges = { Marilyn: 22, Spot: 237 };

Object.assign(ages, additionalAges);

console.log(ages);