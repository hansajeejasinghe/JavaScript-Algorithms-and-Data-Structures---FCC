function findLongestWordLength(str) {
  let longsetWord = "";
  let words = str.split(" ");
  // console.log(words)

  for (let i = 0; i < words.length; i++) {
    let individualWord = words[i];
    // console.log(individualWord)

    if (individualWord.length > longsetWord.length) {
      longsetWord = individualWord;
    }
  }
  return longsetWord.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");