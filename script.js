console.log("Add validation!");

const form = document.querySelector("#parking-form");
const caryear = document.querySelector("#car-year");
const numberOfDays = document.querySelector("#days");

let formIsValid;

// sets all inputs as required
document.getElementById("name").required = true;
document.getElementById("car-year").required = true;
document.getElementById("car-make").required = true;
document.getElementById("car-model").required = true;
document.getElementById("start-date").required = true;
document.getElementById("days").required = true;
document.getElementById("credit-card").required = true;
document.getElementById("cvv").required = true;
document.getElementById("expiration").required = true;

// Runs at form submit
form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Form submitted");
});

// Runs at form input
caryear.addEventListener("blur", function (event) {
  event.preventDefault();
  validateCarYear();
});

// Validates that car year is later than 1900.
function validateCarYear() {
  if (caryear.value < 1900) {
    caryear.setCustomValidity("Year must be later than 1900");
  } else {
    formIsValid = true;
    console.log("Car year is valid");
  }
}

numberOfDays.addEventListener("blur", function (event) {
  event.preventDefault();
  validateDays();
});


function validateDays() {
  if (numberOfDays.value < 30 && numberOfDays.value !== "") {
    console.log("Number of Days is valid");
    formIsValid = true;
  } else {
    numberOfDays.setCustomValidity("Maximum Number of days is 30.");
  }
}
