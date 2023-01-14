// What can the user do ?

const generateButtonEl = document.getElementById('generate');
const passwordEl = document.getElementById('password');
// 2. When user clicks on the button.

// if is NaN = not number, not(!) NaN = A number

function numberCheck(data){
  return !isNaN(Number(data));
}

function askPasswordLength(){ 
  const passwordLenght = prompt('How long do you want the password to be ? (8 - 128 characters)');

  console.log(passwordLenght);

  // character types to include in the password.
  if (!numberCheck(passwordLenght)){ 
      return askPasswordLength(); 
    } 

  const length = Number(passwordLenght);

  if (length < 8 || length > 128){
      return askPasswordLength(); 
    }
  return length;
}


// CONFIRM if he wants to include :
        //lowercase
        //uppercase
        //numeric
        //or special character.
function askQuestions(){

  const lowercase = confirm('Do you want lowercase ?');
  const uppercase = confirm('Do you want uppercase ?');
  const numeric = confirm ('Do you want to be numeric ?');
  const specialCharacters = confirm ('Do you want special characters (symbols) ?');

  if (!lowercase && !uppercase && !numeric && !specialCharacters){ //if user cancel out all of the options, return the function.
    return askQuestions();
  }

  return { //returning the object as a boolean 
    lowercase: lowercase,
    uppercase,
    numeric,
    specialCharacters, 
  }

}


const lower = "abcdefghijklmnopqrstuvxwyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVXWYZ";
const number = "0123456789";
const symbol = " !'()*+#$%&',-./:;<=>?@[\]^_`{|}~";


generateButtonEl.addEventListener('click', function(e) { 
  
  // 3- He's presented with a series of prompts asking him the :
    // length of the password (8-128)
    const passwordLength = askPasswordLength();
    const questions = askQuestions();

    console.log(questions);
  
    let store = "";

   // If the user selected (yes/true) for any of the questions. 
   // return that into the "store".

    if (questions.lowercase) {
      store = store + lower;
    }

    if (questions.uppercase) {
      store = store + upper;
    }

    if (questions.numeric) {
      store = store + number;
    }

    if (questions.specialCharacters) {
      store = store + symbol;
    }

    //variable password 
    let password = ""; 

    // A loop so that it can pick a random number in the object (store) using the method Math.random and rounding that number  -->>
    // using Math.floor and ultimately multiplying the store.lengh.
    for (let index = 0; index < passwordLength; index++) {

      const randomNumber = Math.floor(Math.random() * store.length);
      //random number from the store, inside a random character variable
      const randomCharacter = store[randomNumber];  
      //putting that number inside the variable password 
      password = password + randomCharacter;

    }
    
    passwordEl.textContent = password;

  })
