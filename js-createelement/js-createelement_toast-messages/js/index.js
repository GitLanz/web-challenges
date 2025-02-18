console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", (event) => {
  // Exercise: Append a new entry to the toast messages container
  event.preventDefault();
  const newCard = document.createElement("li");
  newCard.classList.add("toast-container__message");
  toastContainer.prepend(newCard);
});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
});
