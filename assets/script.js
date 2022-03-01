var generateBtn = document.querySelector("#generate")

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

  var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerChars = "abcdefghijklmnopqrstuvwxyz";
  var numberChars = "0123456789";
  var passwordLength = "12-128"
  var specialChars = "!@#$%^&*()";
  var selectedChars = "";

  function generatePassword() {
    var password="";
    passwordLength = prompt("Please enter the number of characters you want in your password. It must be more than 12 and less than 128.")
    if(+passwordLength<12 || +passwordLength > 128){
      alert("You must select a number between 12 and 128");
      return;
  }
    upperChars = confirm("Do you want uppercases in your password?");
    lowerChars = confirm("Do you want lowercases in your password?");
    numberChars = confirm("Do you want numbers in your password?");
    specialChars = confirm("Do you want special characters in your password?");

    if(upperChars){
      selectedChars+=upperChars
    }

    if(lowerChars){
      selectedChars+=lowerChars
    }

    if(numberChars){
      selectedChars+=numberChars
    }

  
    if(specialChars){
      selectedChars+=specialChars
    }

    //Math.floor(Math.random()*passwordLength)

    for(i=0;i<passwordLength;i++){
      selectedChars[Math.floor(Math.random()*passwordLength)]
    }

    return password
}

 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
