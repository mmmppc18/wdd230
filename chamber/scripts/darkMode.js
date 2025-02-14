const main = document.querySelector("main");
const modeSwitch = document.querySelector("input[type=checkbox]");

modeSwitch.addEventListener('change', function () {
    if (this.checked) {
        main.classList.add("darkMode");
        document.body.classList.add("darkMode");
    } else {
        main.classList.remove("darkMode");
        document.body.classList.remove("darkMode");
    }
});