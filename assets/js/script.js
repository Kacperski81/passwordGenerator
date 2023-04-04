const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const generatePassword = document.getElementById('generate-password');
const firstPasswordElement = document.getElementById('first-password');
const secondPasswordElement = document.getElementById('second-password');

function randomCharacters() {
    let randomPassword = ""
    for(let i = 0; i < 15; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomPassword += characters[randomIndex]
    }
    return randomPassword
}


generatePassword.addEventListener('click', () => {
    const firstPassword = randomCharacters();
    const secondPassword = randomCharacters();
    firstPasswordElement.innerText = firstPassword;
    secondPasswordElement.innerText = secondPassword;
});