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


