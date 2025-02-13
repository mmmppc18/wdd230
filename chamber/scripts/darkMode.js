const modeSwitch =
    document.getElementById("switch");
const main =
    document.querySelector("main");


modeSwitch.addEventListener("click", () => {
    main.classList.toggle(body.darkMode)

})