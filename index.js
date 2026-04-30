const textareaE1 = document.getElementById("textarea");
const totalCounterE1 = document.getElementById("total-counter");
const RemainingCounterE1 = document.getElementById("Remaining-counter");

textareaE1.addEventListener("keyup", () => {
    updateCounter();
});

updateCounter();

function updateCounter() {
    totalCounterE1.innerText = textareaE1.value.length;
    RemainingCounterE1.innerText =
        textareaE1.getAttribute("maxlength") - textareaE1.value.length;
}

console.log("POC-19 loaded");
``