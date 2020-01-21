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

  console.log(text_input.value);
  const x = new Datecalc(text_input.value);
  console.log(x);
  console.log(x.day);

  switch (x.day) {
    case 0:
      result_text.innerHTML = `<span>You were born on a</span> <br> Sunday`;
      break;
    case 1:
      result_text.innerHTML = `<span>You were born on a</span> <br> Monday`;
      break;
    case 2:
      result_text.innerHTML = `<span>You were born on a</span> <br> Tuesday`;
      break;
    case 3:
      result_text.innerHTML = `<span>You were born on a</span> <br> Wednesday`;
      break;
    case 4:
      result_text.innerHTML = `<span>You were born on a</span> <br> Thursday`;
      break;
    case 5:
      result_text.innerHTML = `<span>You were born on a</span> <br> Friday`;
      break;
    case 6:
      result_text.innerHTML = `<span>You were born on a</span> <br> Saturday`;
      break;
    default:
      break;
  }

  text_input.value = "";
  window.setTimeout(hideResult, 5000);
}

/* function hideResult */
function hideResult() {
  result_text.style.display = "none";
  result_text.value = "";
}

/* birthDAY constructor */
function Datecalc(givenDate) {
  this.birthday = new Date(givenDate);
  this.day = this.birthday.getDay();
}
