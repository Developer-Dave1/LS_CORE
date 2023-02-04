let prompt = require('readline-sync');
let name = prompt.question('What is your name?');

console.log(`Hello, ${name}.`)

if (name.includes('!')) {
  console.log(`HELLO ${name.toUpperCase()}! WHY ARE WE SCREAMING?!`)
}




