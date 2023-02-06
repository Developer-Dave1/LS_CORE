let word1 = "last word of sentence.";
let word2 = "Launch School is great!";
let word3 = "It is a bright and sunny day."

function lastWordExtract(words) {
  let lastWord = words.split(" ").splice(-2, 1);
  console.log(lastWord);
}

lastWordExtract(word3);