// Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
//TODO: write a generatePassword function x
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
//TODO: ask the user how many characters they want in the password --> use a prompt --> make
// sure the information is correct --> number --> 8+ or 128- x
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//TODO: write a series of 4 confirms to check if the user wants x
//TODO: write 4 arrays--> set these to be a var --> one for uppercase, one upper, numbers, and special characters x
//TODO: check the prompts to make sure it's true or false --> using above var for this -->
// add corresponding arrays to an "holding array" upperConfirm --> true --> upperCase --> add to holding array x
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
//TODO: check that we have at least one of the types
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
//TODO: check our holding array and randomize the characters --> adding to a second array
//TODO: take the randomized characters and select the amount that the users has chosen for the password length
//--> add these to a "return array" --> for loop
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
//TODO: take our return array and use array methods to convert to a string and return string

var capLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowerLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "~"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

function generatePassword() {
  var element = document.querySelector("#generate");
  element.addEventListener("click", function () {
    var pwLength = prompt(
      "How long do you want your password?(8-128 characters)"
    );
    console.log(pwLength);
    //if userchoice is between 8 and 128 characters then acceptable)
    //less than 8 or more than 128 characters, please select again)
    if (pwLength < 8) {
      alert("Has to be longer than 8 characters");
    } else if (pwLength > 128) {
      alert("Password cannot be no longer than 128 characters");
    } else {
      // confirm("Do you want to include special characters?");
      var myAnswerToSpecialCharacters = confirm(
        "Do you want to include special characters?"
      );
      console.log("special characters?" + myAnswerToSpecialCharacters);
      var myAnswerToNumbers = confirm("Do you want to include numbers?");
      console.log("numbers?" + myAnswerToNumbers);
      var myAnswerToCapLetters = confirm(
        "Do you want to include upper case letters?"
      );
      console.log("upper case?" + myAnswerToCapLetters);
      var myAnswerToLowerLetters = confirm(
        "Do you want to include lower case letters?"
      );
      console.log("lower case?" + myAnswerToLowerLetters);

      //associated user answers to the avaiable characters to choose from
      var holdingArray = [];
      console.log(holdingArray);

      // User is require to choose at least one special type
      if (myAnswerToSpecialCharacters === true) {
        holdingArray.push(specialChar);
      }
      if (myAnswerToNumbers === true) {
        holdingArray.push(numbers);
      }
      if (myAnswerToCapLetters === true) {
        holdingArray.push(capLetters);
      }
      if (myAnswerToLowerLetters === true) {
        holdingArray.push(lowerLetters);
      }
      console.log(holdingArray);

      // console.log(x);
      if (
        myAnswerToSpecialCharacters == false &&
        myAnswerToNumbers == false &&
        myAnswerToCapLetters == false &&
        myAnswerToLowerLetters == false
      ) {
        alert("One special type is required");
      }

      // function writePassword() {
      var PW = "";

      console.log("Password length", pwLength);
      //NEED TO ADD A PROMPT ALLOWING THE USER TO BACK TO SPECIAL CHARACTER SELECTION
      for (var i = 0; i < pwLength; i++) {
        var randomChar = getRandomCharFromArray(holdingArray);
        PW = PW + randomChar;
      }

      console.log("GENERATED PW", PW);
      var passwordText = document.querySelector("#password");
      passwordText.value = PW;
    }
  });
}

function getRandomCharFromArray(arr) {
  //1. Get a random number from the holding array
  //2. get random number from length of array
  var randomIndexOnArray = getRandomInt(arr.length);
  console.log("random number here " + randomIndexOnArray);
  // 3. use random number to access array
  var characterGroup = arr[randomIndexOnArray];
  var randonIndexOnCharacterGroup = getRandomInt(characterGroup.length);
  var randomChar = characterGroup[randonIndexOnCharacterGroup];
  return randomChar;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
generatePassword();
