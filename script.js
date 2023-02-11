// Assignment code here
let tinyDigis = '';
for (let i = 97; i <= 122; ++i) {
  tinyDigis += String.fromCharCode(i);
}
let bigDigis = '';
for (let i = 65; i <= 90; ++i) {
  bigDigis += String.fromCharCode(i);
}
let notDigis = '';
for (let i = 33; i <= 47; ++i) {
  notDigis += String.fromCharCode(i);
}
let Digis = '';
for (let i = 48; i <= 57; ++i) {
  Digis += String.fromCharCode(i);
}
let alsoNotDigis = '';
for (let i = 63; i <=64; ++i) {
  alsoNotDigis += String.fromCharCode(i);
}


//let lowercase = (tinyDigis);
//let uppercase = (bigDigis);
//let special = (notDigis);
//let digis = (Digis);
//let extraSpecial = (alsoNotDigis);








function generatePassword() {
  let passwordlength = prompt('Please enter the desired length of your password as a digit between 8 and 128.');
  let tiny = confirm('Would you like for your password to contain any non-capitalized letters? Cancel for No.');
  let big = confirm('Would you like for your password to contain capital letters? Cancel for No.');
  let spec = confirm('Would you like for your password to contain special characters? Cancel for No.');
  let xtspec = confirm('Would you like for your password to contain any extra special characters? Ok for yes.');
  let numbas = confirm('Would you like for your password to contain any numbers? Cancel for No.');

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
   
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
