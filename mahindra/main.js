const signInBtn = document.getElementById("signUp");
const signUpBtn = document.getElementById("signIn");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

signInBtn.addEventListener("click", () => {
    container.classList.remove("right-panel-active")
})

signUpBtn.addEventListener("click", () => {
    container.classList.add("right-panel-active")
})

fistForm.addEventListener("submit", (e) => e.preventDefault())
secondForm.addEventListener("submit", (e) => e.preventDefault())