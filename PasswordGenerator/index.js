const inputDisplay = document.getElementById("password-display");
const copybtn = document.getElementById("copy");

const sliderValue = document.getElementById("slider-value");
const slider = document.getElementById("slider");

const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

const generatebtn = document.getElementById("generate");

slider.addEventListener("input", () => {
  sliderValue.innerText = slider.value;
});

//generate password

// when user clicks on the generate button
// we need to generate a password which should have uppercase letters lower case number symbols
// and the password length should be equals to slider.value
generatebtn.addEventListener("click", () => {
  generatePassword();
});

const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const nums = "0123456789";
const symb = "!@#$%^&*()";


const charTypes = [
    {chars:uppercaseLetters , checkbox:uppercase},
    {chars:lowercaseLetters , checkbox:lowercase},
    {chars:nums , checkbox:numbers},
    {chars:symb , checkbox:symbols}
]

function generatePassword() {
  let combinedString = "";
  let password = "";

  charTypes.forEach((item)=>{
      if(item.checkbox.checked){
        combinedString += item.chars;
        password +=
          item.chars[Math.floor(Math.random() * item.chars.length)];
      }
  })

  if(combinedString === ""){
    alert("Please select at atleast one character type");
    return;
  }

  console.log("initial pass :", password);
  while (password.length < slider.value) {
    let randomIdx = Math.floor(Math.random() * combinedString.length);
    console.log("randomIdx: ", randomIdx);
    let newChar = combinedString[randomIdx];
    password += newChar;
    console.log(password);
  }


  inputDisplay.value = password;

}


copybtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(inputDisplay.value);
    copybtn.innerText = "copied";
    setTimeout(()=>{
        copybtn.innerText = "copy";
    },2000);
})

