// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
//
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
//
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
//
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
//
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
//
// Here are some helpful links:
//
// String.prototype.charCodeAt()
// String.fromCharCode()

// 1. solution, a huge mess
// function rot13(str) {
//   let temp = '';
//   for(let i = 0; i < str.length; i++) {
//     let charCodeLetter = str[i].charCodeAt();
//     if(charCodeLetter < 65 || charCodeLetter > 90) {
//       let encodedLetter = String.fromCharCode(charCodeLetter);
//        temp += encodedLetter;
//     } else {
//       if(charCodeLetter > 77) {
//         charCodeLetter = charCodeLetter - 13;
//       } else if (charCodeLetter < 78) {
//         charCodeLetter = charCodeLetter + 13;
//       }
//        encodedLetter = String.fromCharCode(charCodeLetter);
//        temp += encodedLetter;
//     }
//   }
//   return temp;
// }
// rot13("SERR YBIR?");

// 2. solution a bit nicer
function rot13(str) { 
  let chars = str.split('');

  return chars.map(char => {
    char = char.charCodeAt();

    if(char < 78 && char > 64 ) char += 13;
    else if (char < 91 && char > 77) char -= 13;

    return String.fromCharCode(char);
  }).join('');
}

rot13("SERR PBQR PNZC");
