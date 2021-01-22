/*
* The Recursion file reverses a word and prints it
* out to the user.
* 
* @author  Wajd Mariam
* @version 1.0
* @since   2021/01/04
*/

function reverseString(string) {
  if (string.length == 0) {
    return string;
  } else {
    return reverseString(string.substring(1)) + string.charAt(0);
  }
}

// Assigning string.
let recursionWord = "recursion";
// Printing the original string.
console.log(`The original string is ${recursionWord}`);
// Calling reverseString function to reverse recursionWord.
let newWord = reverseString(recursionWord);
// Printing the new reversed string.
console.log(`The reversed string (using recursion) is: ${newWord}`);
