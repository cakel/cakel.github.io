const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");

/**
 * @type HTMLInputElement
 */
const greeting = document.querySelector("#greeting")
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const savedUserName = localStorage.getItem(USERNAME_KEY);

/**
 * @param {String} username
 */
function paintGreeting(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

/**
 * @param {Event} event
 */
function handleLoginButtonSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting(username);
}

if(savedUserName == null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", handleLoginButtonSubmit);
} else {
    paintGreeting(savedUserName);
}