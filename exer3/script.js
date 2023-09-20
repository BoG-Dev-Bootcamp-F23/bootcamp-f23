const inputField = document.querySelector("#input-field");
const inputButton = document.querySelector("#search-button")

const inputSelection = document.querySelector("#options-container");
const spaghetti = document.querySelector("#spaghetti")
const cats = document.querySelector("#cats")
const plat = document.querySelector("#plat")

const ogInputValue = "Search...";
let toBeInputValue = ogInputValue;

const validInput = [spaghetti.textContent, cats.textContent, plat.textContent];

inputField.addEventListener("focus",() => {
    if (toBeInputValue === ogInputValue) {
        inputField.value = "";
    } else {
        inputField.value = toBeInputValue;;
    }
    inputSelection.style.visibility = "visible";
})

inputField.addEventListener("input", () => {
    toBeInputValue = inputField.value;
    if (toBeInputValue.toLowerCase() === spaghetti.textContent || toBeInputValue.toLowerCase() === cats.textContent || toBeInputValue.toLowerCase() === plat.textContent) {
        inputField.style.color = "black";
    } else {
        inputField.style.color = "rgba(104, 102, 102, 0.661)";
    }
})

inputField.addEventListener("blur", () => {
    if (toBeInputValue === "") {
        inputField.value = ogInputValue;
        inputField.style.color = "rgba(104, 102, 102, 0.661)";
    } else if (validInput.includes(toBeInputValue)) {
        inputField.value = toBeInputValue;
    }
    inputSelection.style.visibility = "hidden";
})
spaghetti.addEventListener("mouseenter", () => toBeInputValue = spaghetti.textContent);

spaghetti.addEventListener("mouseleave", () => {
    toBeInputValue = "";
    inputField.style.color = "black";
});

cats.addEventListener("mouseenter", () => toBeInputValue = cats.textContent);

cats.addEventListener("mouseleave", () => {
    toBeInputValue = "";
    inputField.style.color = "black";
});

plat.addEventListener("mouseenter", () => toBeInputValue = plat.textContent);

plat.addEventListener("mouseleave", () => {
    toBeInputValue = "";
    inputField.style.color = "black";
});

inputButton.addEventListener('click', () => {
    if (inputField.value.toLowerCase() === validInput[0]) {
        window.open("spaghetti.html", "_self")
    } else if (inputField.value.toLowerCase() === validInput[1]) {
        window.open("cats.html", "_self")
    } else if (inputField.value.toLowerCase() === validInput[2]) {
        window.open("platypus.html", "_self")
    } else {
        inputButton.classList.add("shake");
        setTimeout(() => {
            inputButton.classList.remove("shake");
        }, 1000);

    }
})
