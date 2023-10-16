const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()_-+={[}],|:;<>.?/".split("");

const passwordOne = document.getElementById("password_one")
const passwordTwo = document.getElementById("password_two")
const slider = document.getElementById("passwordLength");
const output = document.getElementById("length");

function getRandomCharacter() {
    let randomIndex = Math.floor(Math.random() * characters.length)
    return characters[randomIndex]
}

function generatePassword() {
    let randomPassword = ""
    for (let i = 0; i < slider.value; i++) {
        randomPassword += getRandomCharacter()
    }
    return randomPassword
}

function showNewPassword() {
    passwordOne.textContent = generatePassword()
    passwordTwo.textContent = generatePassword()
}

slider.oninput = function() {
    output.innerHTML = this.value;
}

function copyPasswordOne() {
    let passwordToCopy = passwordOne.innerHTML;
    navigator.clipboard.writeText(passwordToCopy);
}

function copyPasswordTwo() {
    let passwordToCopy = passwordTwo.innerHTML;
    navigator.clipboard.writeText(passwordToCopy);
}




