var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

  var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var lowerChars = "abcdefghijklmnopqrstuvwxyz".split("");
  var numberChars = "0123456789".split("");
  var passwordLength = "8-128"
  var specialChars = "!@#$%^&*()".split("");
  var selectedChars = [];

  function generatePassword() {
    var password="";
    passwordLength = prompt("Please enter the number of characters you want in your password. It must be more than 8 and less than 128.")
    if(+passwordLength<8 || +passwordLength > 128){
      alert("You must select a number between 8 and 128");
      
      return generatePassword;
  }
    var upperCharsC = confirm("Do you want uppercases in your password?");
    var lowerCharsC = confirm("Do you want lowercases in your password?");
    var numberCharsC = confirm("Do you want numbers in your password?");
    var specialCharsC = confirm("Do you want special characters in your password?");

    if(upperCharsC){
      selectedChars=selectedChars.concat(upperChars)
    }

    if(lowerCharsC){
      selectedChars=selectedChars.concat(lowerChars)
    }

    if(numberCharsC){
      selectedChars=selectedChars.concat(numberChars)
    }

  
    if(specialCharsC){
      selectedChars=selectedChars.concat(specialChars)
    }

    for(var i = 0; i < parseInt(passwordLength); i++) {
      var randomIndex = Math.floor(Math.random()*selectedChars.length);
      password+=selectedChars[randomIndex]
    }

    return password;
};

  generateBtn.addEventListener("click", writePassword);

