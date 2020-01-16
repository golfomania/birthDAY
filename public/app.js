/* element selectors */
const submit_btn = document.getElementById("submit_btn");
const text_input = document.querySelector("input");
const result_text = document.getElementById("result_text");

/* add event listeners */
submit_btn.addEventListener("click", checkInput);
text_input.addEventListener("keydown", checkKey);

/* function checkInput */
function checkInput() {
  if (text_input.value !== "") {
    displayWeekday();
    e.preventDefault();
  } else if (text_input.value === "") {
    alert("Add your birthday");
  }
}

/* function checkKey & input*/
function checkKey(e) {
  if (e.which === 13 && text_input.value !== "") {
    displayWeekday();
    e.preventDefault();
  } else if (e.which === 13 && text_input.value === "") {
    alert("Add your birthday");
  }
}

/* function displayWeekday */
function displayWeekday(e) {
  result_text.style.display = "block";

  const x = new calc(text_input.value);

  result_text.innerHTML = x.birthday;
  text_input.value = "";
  window.setTimeout(hideResult, 5000);
}

/* function hideResult */
function hideResult() {
  result_text.style.display = "none";
  result_text.value = "";
}

/* birthDAY constructor */
function calc(givenDate) {
  this.birthday = new Date(givenDate);
  return this.birthday;
}
