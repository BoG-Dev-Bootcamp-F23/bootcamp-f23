const inputField = document.querySelector("#input-field");

const ogInputValue = "Search...";
let newInputValue = ogInputValue;

inputField.addEventListener("focus",() => {
    if (inputField.value === ogInputValue) {
        inputField.value = "";
    } else {
        inputField.value = newInputValue;
    }
})

inputField.addEventListener("input", () => {
    newInputValue = inputField.value;
})

inputField.addEventListener("blur", () => {
    if (newInputValue === "") {
        newInputValue = ogInputValue;
    }
    inputField.value = newInputValue;
})