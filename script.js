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
We need to return the user to the beginning to pick a value within our parameters.
STORE THE USER CHOICE - This will be the value we use for how many times we run the function */


function generatePassword() {
  var charNum = prompt("How many characters would you like your password to contain?");
  if (charNum < 8) {
    alert("Password must have 8 or more characters!");
    return null;
  }
  else if (charNum > 128) {
    alert("Password must be 128 characters or less!");
    return null;
  }


/* Then we will issue 4 confirm statements for character types.
1. Special characters
2. Numeric characters
3. Lowercase characters
4. Uppercase characters
IF none are selected, alert that at least one character type must be selected. */

// Create arrays of all four choices for characters, as well as one we can concatenate with the user's choices.

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
      charChoice = charChoice.concat(specialChar);
    }
    if (confirm("Would you like to use lowercase characters in your password?")) {
      charChoice = charChoice.concat(lowChar);
    }
    if (confirm("Would you like to use uppercase characters in your password?")) {
      charChoice = charChoice.concat(upChar);
    }
    if (confirm("Would you like to use number characters in your password?")) {
      charChoice = charChoice.concat(numChar);
    }
    else if (charChoice.length === 0) {
      alert("You must select at least one character choice!");
      generateArray();
    }
  }
  console.log(charChoice);


/* Now we need to take the array we generated and randomly select characters from it.
We should do this however many times the user selected for their password length.
Concatenate these random values into a new array. */  

  var randomArray = [];

  buildPassword();

  function buildPassword(){
    for (var i = 0; i < charNum; i++) {
      var randomChar = charChoice[Math.floor(Math.random() * charChoice.length)];
      randomArray.push(randomChar);
    }
    console.log(randomArray);
  }

//Now take the randomly concatenated array, and join it into a single string.

  var final = randomArray.join("");
  return final;
}



