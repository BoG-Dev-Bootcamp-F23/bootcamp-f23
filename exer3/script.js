const inputField = document.querySelector("#input-field");
const inputSelection = document.querySelector("#options-container");
const selectionButtons = [document.querySelector("#spaghetti"), 
    document.querySelector("#cats"), document.querySelector("#plat")];

const ogInputValue = "Search...";
let newInputValue = ogInputValue;

inputField.addEventListener("focus",() => {
    if (inputField.value === ogInputValue) {
        inputField.value = "";
    } else {
        inputField.value = newInputValue;
    }
    inputSelection.style.visibility = "visible";
})

inputField.addEventListener("input", () => {
    newInputValue = inputField.value;
})

inputField.addEventListener("blur", () => {
    if (newInputValue === "") {
        newInputValue = ogInputValue;
    }
    inputField.value = newInputValue;
    inputSelection.style.visibility = "hidden";
})


