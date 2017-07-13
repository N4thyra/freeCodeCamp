// Return the length of the longest word in the provided sentence.
//
// Your response should be a number.
//
// Remember to use Read-Search-Ask if you get stuck. Write your own code.
//
// Here are some helpful links:
//
// String.prototype.split()
// String.length

function findLongestWord(str) {
  let temp = '';
  str = str.split(" ");

  for (let i = 0; i < str.length; i++) {
    if (temp.length < str[i].length) {
      temp = str[i];
    }
  }
  return temp.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
