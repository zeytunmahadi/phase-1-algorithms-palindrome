// This function is called isPalindrome and it takes one parameter, which is 'word'
function isPalindrome(word) {
  
  // Convert the word to lowercase to make sure we're comparing the same letters regardless of capitalization
  word = word.toLowerCase();

    // Remove all spaces from the word
    word = word.replace(/\s+/g, '');
  
  // Create a new variable called 'reversed' to store the reversed version of the input word
  let reversed = '';

  // Start a loop that goes through each letter of the input word, starting from the last one
  for (let i = word.length - 1; i >= 0; i--) {
    // Add each letter to the 'reversed' variable in reverse order
    reversed += word[i];
  }

  // After the loop, check if the original word is the same as the reversed 
  // If they are the same, it means the word is a palindrome, so return true
  // Otherwise, return false
  return word === reversed;
}

  


/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
// To determine if a word is a palindrome, we need to check if it reads the same forward and backward. 
  We can do this by reversing the word and comparing it with the original word. If both are identical, 
  the word is a palindrome; otherwise, it is not  */

// You can run node index.js to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("raceCar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}
console.log("=>", isPalindrome("lavel"));
console.log("=>", isPalindrome("level"));
module.exports = isPalindrome;