// Assignment code here
/*
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
*/
//THEN I am presented with a series of prompts for password criteria

function generatePassword() {
  var character_pool = [];
  var rngpassword = "";
  var password_length = 0;

  var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var numbers = ["0","1","2","3","4","5","6","7","8","9"];
  var special = ["!","@","#","$","%","^","&","*","(",")"];

  while(character_pool.length === 0){
    if(character_pool.length === 0){
      alert("Please select at least 1 of the following conditions");
    }
    var lowercase_flag = confirm("Do you want your password to contain lowercase flags?");
    if(lowercase_flag){
      character_pool = character_pool.concat(lowercase);
    }
    var uppercase_flag = confirm("Do you want your password to contain uppercase flags?");
    if(uppercase_flag){
      character_pool = character_pool.concat(uppercase);
    }
    var numeric_flag = confirm("Do you want your password to contain numeric flags?");
    if(numeric_flag){
      character_pool = character_pool.concat(numbers);
    }
    var special_flag = confirm("Do you want your password to contain special flags?");
    if(special_flag){
      character_pool = character_pool.concat(special);
    }
  
  }

  while(password_length < 8 || password_length > 128){
    password_length = (prompt("How long do you want your password to be? Choose between 8-128"));
    if(password_length !== null){
      password_length = parseInt(password_length);
    }    
  }

  for(var i=0; i<password_length; i++){
    var random_index = Math.floor(Math.random()*character_pool.length);
    rngpassword = rngpassword.concat(character_pool[random_index]);
  }
  return rngpassword;
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
