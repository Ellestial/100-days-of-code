//One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
//A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
//Write a function which takes a ROT13 encoded string as input and returns a decoded string.
//All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) { // LBH QVQ VG!
  var result = [];
  for(var i = 0; i <= str.length; i++) {
    var charCode = str.charCodeAt(i);
    var newCharCode;
    if(/[N-Z]/.test(str[i])) {
      newCharCode = String.fromCharCode(charCode - 13);
    } else if(/[A-M]/.test(str[i])) {
      newCharCode = String.fromCharCode(charCode + 13);
    } else {
      newCharCode = str[i];
    }
    result.push(newCharCode);
  }
  return result.join('');
}

// Change the inputs below to test
rot13("SERR CVMMN!");
