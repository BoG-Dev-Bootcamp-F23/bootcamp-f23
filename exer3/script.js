const inputField = document.querySelector("#input-field");
const inputButton = document.querySelector("#search-button")

const inputSelection = document.querySelector("#options-container");
const spaghetti = document.querySelector("#spaghetti")
const cats = document.querySelector("#cats")
const plat = document.querySelector("#plat")

const ogInputValue = "Search...";
let toBeInputValue = ogInputValue;

const validInput = [spaghetti.textContent, cats.textContent, plat.textContent];

//When user clicks input field display list of options. When user clicks an option that option fills the input with the option and turns the text black.
//User can still type in input field. If typed input (non-case sensitive) does not match one of the options, it is left gray. If it is, the input turns black.
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
spaghetti.addEventListener("mouseenter", () => {
    toBeInputValue = spaghetti.textContent;
});
spaghetti.addEventListener("mouseleave", () => {
    toBeInputValue = "";
    inputField.style.color = "black";
});

cats.addEventListener("mouseenter", () => {
    toBeInputValue = cats.textContent;
});
cats.addEventListener("mouseleave", () => {
    toBeInputValue = "";
    inputField.style.color = "black";
});

plat.addEventListener("mouseenter", () => {
    toBeInputValue = plat.textContent;
});
plat.addEventListener("mouseleave", () => {
    toBeInputValue = "";
    inputField.style.color = "black";
});

inputButton.addEventListener('click', () => {
    if (inputField.value === validInput[0]) {
        window.open("spaghetti.html", "_self")
    } else if (inputField.value === validInput[1]) {
        window.open("cats.html", "_self")
    } else if (inputField.value === validInput[2]) {
        window.open("platypus.html", "_self")
    } else {
        inputButton.classList.add("shake");
        setTimeout(() => {
            inputButton.classList.remove("shake");
        }, 1000);

    }
})
