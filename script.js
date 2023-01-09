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

console.log(specialCharacters);
// Array of numeric characters to be included in password
var numericCharacters = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9'
];

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

let array = upperCasedCharacters + lowerCasedCharacters + numericCharacters + specialCharacters;

// Function to prompt user for password options
function getPasswordOptions() {
  let passPrompt = prompt("How many characters would you like your password to be?");
  let upperChar = confirm("Would you like to include Uppercase Characters in your password?"); 
  let lowerChar = confirm("Would you like to include Lowercase Characters in your password?"); 
  let numChar = confirm("Would you like to include Numbers in your password?"); 
  let specialChar = confirm("Would you like to include Special Characters in your password?"); 

  while (isNaN(passPrompt) || passPrompt < 10 || passPrompt > 65) {
    if (passPrompt === null || passPrompt < 10 || passPromt > 65) {
      return;
    }
    alert("Please enter a password length between 10 and 64 characters using numbers only.");
    passPrompt = prompt("How many characters you want your password to be?");
  }

  if (!upperChar && !lowerChar && !numChar && !specialChar) {
    alert("Please select at least one character type.");
  }
}
getPasswordOptions();


// Function for getting a random element from an array
function getRandom(arr) {
 

}

// Function to generate password with user input
function generatePassword() {

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