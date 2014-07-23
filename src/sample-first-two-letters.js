var words = ["bla", "muu", "tatta"];

function first(word, num) {
  if(word.length >= num) {
    return word.substring(0, num);
  }
  return word;
}

function firstTwoLetters(words) {
  for (var i = 0; i < words.length; i++) {
    console.log(first(words[i], 2));
  }
}

firstTwoLetters(words);