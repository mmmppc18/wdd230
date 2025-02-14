const main =
    document.querySelector("main");

const modeSwitch =
    document.querySelector("input[type=checkbox]");

modeSwitch.addEventListener('change', function () {
    if (this.checked) {
        console.log("");
        main.classList.toggle(main.darkMode);
    } else {
        console.log("");
    }
});