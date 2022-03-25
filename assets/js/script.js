// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

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

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
