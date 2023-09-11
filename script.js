// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // printing password in box
  passwordText.value = finalpassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// setting length to base
var length = "";
// setting values to base
var uppercase = false;
var lowercase = false;
var numeric = false;
var special = false;
// all options for password as strings
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var number = "123456789";
var specialoptions = "#$%&!'()*+,-./:;<=>?@[]^_`{|}~";
// converting strings to arrays
var upperarray = upper.split("");
var lowerarray = lower.split("");
var numberarray = number.split("");
var specialarray = specialoptions.split("");
// putting arrays in array
var selectedarray = [upperarray, lowerarray, numberarray, specialarray];
// setting base for final password
var finalpassword = ""

function arraystorage() {
  var criteria = [uppercase, lowercase, numeric, special];
  // resets value of password in case site is used again without refresh
  finalpassword = ""
  // checks if value is true for criteria and if it is adds a random character from that array not to exceed the length the user input
  for (var j = 0; j < length; j++) {
    for (var i = 0; i < criteria.length; i++) {
      if (criteria[i] === true && finalpassword.length < length) {
        var randomchar = Math.floor(Math.random() * selectedarray[i].length);
        finalpassword = finalpassword + selectedarray[i][randomchar];
      };
    };
  };
  return finalpassword;
};
function generatePassword() {
  //reseting array and password if button is clicked again 
  optionsarray = [];
  length = prompt("Enter a length between 8-20");
  if (isNaN(length) === true) {
    // user entered a value that was not a number
    alert("Invalid length. Please try again");
    generatePassword();

  } else if (length >= 8 && length <= 20) {
    // getting user imput on password criteria
    alert("Press 'OK' for yes and 'CANCEL' for no");
    uppercase = confirm("Does your password require uppercase letters?");
    lowercase = confirm("Does your password require lowercase letters?");
    numeric = confirm("Does your password require numbers?");
    special = confirm("Does your password require special characters?");
    if (uppercase === false && lowercase === false && numeric === false && special === false) {
      alert("You did not select any criteria. Try again.");
      generatePassword();
    } else {
      // if all criteria is good call array storage
      return arraystorage();
    };
  } else {
    // user entered a value outside of 8-20
    alert("Invalid length. Please try again");
    generatePassword();

  };
};