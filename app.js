const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password= document.getElementById("password");
const password2 = document.getElementById("password2");
const captcha = document.getElementById("captcha");

form.addEventListener("submit", (e) => {
 e.preventDefault();
 checkInputs();
});

captcha.addEventListener("input", (e) => {
 const img = document.querySelector("img");
 const text = e.target.value;
 const blurValue = 20 - text.length * 2;
 img.style.filter = `blur (${blurValue}px)`;
 if (blurValue <= 0) {
  setSuccess(captcha);
 } else {
  setError(captcha, "Text is not long enough")
 };
});

function checkInputs() {
 // get users value 
 const usernameVal = username.value.trim();
 const emailVal = email.value.trim();
 const passwordVal = password.value.trim();
 const password2Val = password2.value.trim();
 const captchaVal = captcha.value.trim(); 
 if (usernameVal === "") {
 setError(username, "Username can not be empty");
} else if (usernameVal.length < 5) {
  setError(username, "The minimum username length is 5");
 } else {
  setSuccess(username);
 }
 
 if (emailVal === "") {
  setError(email, "Email can not be empty");
 } else if (!emailVal.includes("@")) {
  setError(email, "Email is Invalid");
 } else {
  setSuccess(email);
 }
 if (passwordVal === "") {
  setError(password, "Password can not be empty");
 } else if (passwordVal.length < 5) {
  setError(password, "the minimum password length is 5");
 } else {
  setSuccess(password);
 }
 if (password2Val === "") {
  setError(password2, "Confirm password can not be empty");
 } else if (passwordVal !== password2Val ) {
  setError(password2, "Password does not match");
 } else {
  setSuccess(password2);
 }
}



function setError(input, msg) {
 const formControl = input.parentElement;
 const small = formControl.querySelector("small");
 formControl.className = "form-control error";
 // formControl.classList.add('error)
 small.innerText = msg;
}
function setSuccess(input) {
 const formControl = input.parentElement;
 formControl.className = "form-control success";
}
