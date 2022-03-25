// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var uppercase = [
  "A", "B", "C", "D", "E", "F", "G", "H",
  "I", "J", "K", "L", "M", "N", "O", "P", 
  "Q", "R", "S", "T", "U", "V", "W", "X", 
  "Y", "Z"
]

var lowercase = [
  "a", "b", "c", "d", "e", "f", "g", "h", 
  "i", "j", "k", "l", "m", "n", "o", "p", 
  "q", "r", "s", "t", "u", "v", "w", "x", 
  "y", "z"
]

var special = [
  "/", "[", "!", "@", "#", "$", "%", "^",
  "&", "*", "(", ")", "_", "+", , "-","=",
  "[", "]", "{", "}", ";", ":", "|", ",", 
  ".", "<", ">", "?", "]", "+","~"
]

var numeric = [
  "0", "1", "2", "3", "4", "5", "6", "7",
  "8", "9"
 ]

var numOfChar = function(){
  var num = prompt("How long would you like your password to be? Select a number between 8 and 128");
  
  num = parseInt(num);

  isNum = isNaN(num); 

  if (num < 7 || num > 129 || isNum ){
    alert("Type a valid number");
    return numOfChar();
  } else {
    return num;
  }
}

var num = numOfChar();
console.log(num);

var typeOfChar = function() {
  uppercaseChar = confirm("Do you want uppercase letters in your password?");
  lowercaseChar = confirm("Do you want lowercase letters in your password?");
  specialChar = confirm("Do you want special characters in your password?");
  numericChar = confirm("Do you want numbers in your password?");


  var charType = {
    uppercaseCon: uppercaseChar,
    lowercaseCon: lowercaseChar,
    specialCon: specialChar,
    numericCon: numericChar
  }
  return charType;

}

var mergeArrays = function(){
  charOptions = [];
  
  var charType = typeOfChar();
  
  if (charType.uppercaseCon){
    charOptions = charOptions.concat(uppercase);
    console.log(charOptions);
  }

  if (charType.lowercaseCon){
    charOptions = charOptions.concat(lowercase);
    console.log(charOptions);
  }

  if (charType.specialCon){
    charOptions = charOptions.concat(special);
    console.log(charOptions);
  }

  if (charType.numericCon){
    charOptions = charOptions.concat(numeric);
    console.log(charOptions);
  }

  return charOptions;
}

var abc = mergeArrays();
console.log(abc);


var generatePassword = function(){

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
