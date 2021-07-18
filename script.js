console.log("Add validation!");

const form = document.querySelector("#parking-form");
const caryear = document.querySelector("#car-year");
const numberOfDays = document.querySelector("#days");
const cvv = document.querySelector("#cvv");
const totalDiv = document.querySelector('#total')

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
  totalCost()
});

// Runs at Car Year input change
caryear.addEventListener("change", function (event) {
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

// Runs at Number of Days input change
numberOfDays.addEventListener("change", function (event) {
  event.preventDefault();
  validateDays();
});

// Validates number of days
function validateDays() {
  if (numberOfDays.value < 30 && numberOfDays.value !== "") {
    console.log("Number of Days is valid");
    formIsValid = true;
  } else {
    numberOfDays.setCustomValidity("Maximum Number of days is 30.");
  }
}

// Runs at CVV input change
cvv.addEventListener("change", function (event) {
  event.preventDefault();
  validateCvv();
});

// Validates CVV
function validateCvv() {
  if (cvv.value > 999 || cvv.value < 100) {
    cvv.setCustomValidity("CVV must be three digits.");
  } else {
    formIsValid = true;
    console.log("CVV is valid");
  }
}

// Calculates total cost when form is submitted
function totalCost() {
  if (formIsValid = true) {
    const cost = (5 * numberOfDays.value)
    console.log(cost)
    totalDiv.innerText = 'Total is $' + cost
  } else {
    totalDiv.innerText = 'Unable to calculate total.'
  }
}
