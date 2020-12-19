
# Password Generator

## Project:

This is a password generator that anyone can use to generate a unique, random, and secure password based on criteria they’ve selected. This app will run in the browser, and features dynamically updated HTML and CSS powered by JavaScript. It has a clean and polished user interface that is responsive, ensuring that it adapts to multiple screen sizes.

<br>

![Image](https://github.com/RyanKirkland86/password-generator/blob/main/assets/PasswordGenerator.png)

<br>

## Technologies Used:
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript](https://www.javascript.com/)
- [Visual Studio Code](https://code.visualstudio.com/)

## Process:
When the user encounters the page, they click on the big red button that says "Generate Password" to begin the process. When they do, they encounter a series of prompts to set the criteria used to generate the password. The first is the number of characters. The password must be 8 to 128 characters in length. If the user selects any number outside of those parameters, they encounter an alert that notifies them of these parameters.

<br>

![Image](https://github.com/RyanKirkland86/password-generator/blob/main/assets/FirstPrompt.jpg)

```javascript
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
```
<br>

Then the user encounters a series of prompts asking them what sort of character types they would like to include in their password: special, lowercase, uppercase, or numeric. Their answers are added and stored to select from later. If they choose none, they are alerted that they need to select at least ONE character type and the series of prompts is issued again.

<br>

![Image](https://github.com/RyanKirkland86/password-generator/blob/main/assets/CharacterPrompts.jpg)

```javascript
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
```
<br>

The password is then displayed for the user after running a function which randomly selects characters based on the password length and character choices of the user.

<br>

```javascript
function buildPassword(){
    for (var i = 0; i < charNum; i++) {
      var randomChar = charChoice[Math.floor(Math.random() * charChoice.length)];
      randomArray.push(randomChar);
    }
  }
  var final = randomArray.join("");
  return final;
  ```

## Deployed Link:

* [Password Generator](https://ryankirkland86.github.io/password-generator/)


## Authors:
- Ryan Kirkland
- [GitHub](https://github.com/RyanKirkland86)
- [LinkedIn](https://www.linkedin.com/in/ryan-kirkland-619942200/)
- [Contributors](https://bootcamp.berkeley.edu/coding/)

## License:
This project is licensed under the MIT License.

## Acknowledgements:
Thank you to UCB Extension for the help with this project.