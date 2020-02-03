// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:
// For a given number num, write a function to test if it's a numerical palindrome or not and return a boolean (true if it is and false if not). Return "Not valid" if the input is not an integer or less than 0.
function palindrome(num) {
  return (typeof num == "number" && num > 0) ? num == (num+"").split("").reverse().join("") :
  "Not valid";
}
