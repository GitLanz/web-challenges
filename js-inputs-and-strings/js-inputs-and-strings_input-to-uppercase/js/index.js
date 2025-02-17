console.clear();
// const input = document.querySelector(`[data-js="first-input"]`);
// const button = document.querySelector(`[data-js="button-uppercase"]`);
// button.addEventListener("click", function () {
//   console.log("clicked");
//   input.value = input.value.toUpperCase();
// });

const input = document.querySelector(`[data-js="first-input"]`);
const button = document.querySelector(`[data-js="button-uppercase"]`);
button.addEventListener("click", () => {
  input.value = input.value.toUpperCase();
});
