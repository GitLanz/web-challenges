console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
// --v-- write your code here --v--
const successMessage = document.querySelector('[data-js="success"]');
// --^-- write your code here --^--

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  if (tosCheckbox.checked === false) {
    showTosError();
    return;
  } else {
    hideTosError;
  }
  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  alert("Form submitted");
  // --v-- write your code here --v--
  successMessage.removeAttribute("hidden");
  // --^-- write your code here --^--
});

// --v-- write your code here --v--
tosCheckbox.addEventListener("click", () => {
  if (tosCheckbox.checked) {
    hideTosError();
  } else {
    showTosError();
  }
});
// --^-- write your code here --^--
