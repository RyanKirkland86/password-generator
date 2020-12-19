// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// When you click the button, it should issue a series of prompts.

function generatePassword() {
  var charNum = prompt("How many characters would you like your password to contain?");
  if (charNum < 8) {
    alert("Password must have 8 or more characters!");
    generatePassword();
  }
  else if (charNum > 128) {
    alert("Password must be 128 characters or less!");
    generatePassword();
  }

  var charChoice = [];
  var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "{", "}", "~"];
  var lowChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numChar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  console.log(specialChar);
  console.log(lowChar);
  console.log(upChar);
  console.log(numChar);

  generateArray();

  function generateArray() {
    if (confirm("Would you like to use special characters in your password?")) {
      charChoice.push(specialChar);
    }
    if (confirm("Would you like to use lowercase characters in your password?")) {
      charChoice.push(lowChar);
    }
    if (confirm("Would you like to use uppercase characters in your password?")) {
      charChoice.push(upChar);
    }
    if (confirm("Would you like to use number characters in your password?")) {
      charChoice.push(numChar);
    }
    else {
      alert("You must select at least one character choice!");
      generateArray();
    }
  }
  console.log(charChoice);

}


/* First, how many characters would you like the password to contain?
The password must be 8 <= password length <= 128.
IF it is not, THEN we must alert the user with two separate alerts.
One needs to be that the password needs to be 8 or more characters.
The other needs to be that the password 128 or less characters. 
STORE THE USER CHOICE - This will be the value we use for how many times we run the function */


/* Then we will issue 4 confirm statements for character types.
1. Special characters
2. Numeric characters
3. Lowercase characters
4. Uppercase characters
IF none are selected, alert that at least one character type must be selected. */


