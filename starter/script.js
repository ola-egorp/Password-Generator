// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  if (confirm("Do you want to include uppercase characters?")) {
    upperCase = "True";
  } else {
    upperCase = "False";
  }

  if (confirm("Do you want to include lowercase characters?")) {
    lowerCase = "True";
  } else {
    lowerCase = "False";
  }

  if (confirm("Do you want to include numbers?")) {
    numbers = "True";
  } else {
    numbers = "False";
  }

  if (confirm("Do you want to include punctuations characters?")) {
    punc = "True";
  } else {
    punc = "False";
  }

  return options = [upperCase, lowerCase, numbers, punc];
}

// Function for getting a random element from an array
function getRandom(arr) {
  let x = Math.floor((Math.random() * arr.length));
  return x;
}

// Function to generate password with user input
function generatePassword() {
  let passwordLength = prompt("Please enter your desired password length", "0");
  
  let results = getPasswordOptions();
  let genPassword = "";
  for(let i = 0; i < results.length; i++){

    if (genPassword.length == passwordLength){
      break;
    }
    if (results[i] == "True" && i == 0){
      genPassword += upperCasedCharacters[getRandom(upperCasedCharacters)]
    }
    if (results[i] == "True" && i == 1){
      genPassword += lowerCasedCharacters[getRandom(lowerCasedCharacters)]
    }
    if (results[i] == "True" && i == 2){
      genPassword += numericCharacters[getRandom(numericCharacters)]
    }
    if (results[i] == "True" && i == 3){
      genPassword += specialCharacters[getRandom(specialCharacters)]
    }

    if (genPassword.length < passwordLength && i == 3){
      i = 0
    }
  }

  return genPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);