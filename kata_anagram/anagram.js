// kata Anagram

// alphebetize word

function alphebetize(word) {
  if (!word) {
    return;
  }
  word = word.split('');
  word = word.sort();
  word = word.join('');
  return word;
}

// compare to list of actual words

const words = [];

// generate two word anagrams
