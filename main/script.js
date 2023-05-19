
var passwordLength;
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "-", "_", "+", "=", "<", ">", ".", "?"];

//present prompts at the click of the button


//select criteria to include
("Waht criteria wuld you like to include in your password?")

//select length of password
passwordLength = ("What length would you like for your password?")
//select character types to include
("What character types are needed in your password?")

//validate input & select needed character type

//generate password matching criteria


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword()

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//display password
requestedPassword = "";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);