console.log("Add validation!");

const form = document.querySelector("#parking-form");
const caryear = document.querySelector("#car-year");
const date = document.querySelector("#start-date");
const numberOfDays = document.querySelector("#days");
const cvv = document.querySelector("#cvv");
const totalDiv = document.querySelector("#total");
const creditCard = document.querySelector("#credit-card");
const expiration = document.querySelector("#expiration");
const startDate = document.querySelector('#start-date')

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
  totalCost();
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

// Calculates total cost at $5/day when form is submitted
function totalCost() {
  if ((formIsValid = true)) {
    const cost = 5 * numberOfDays.value;
    console.log(cost);
    totalDiv.innerText = "Total is $" + cost;
  } else {
    totalDiv.innerText = "Unable to calculate total.";
  }
}

// let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   let dayOfWeek = startDate.getDay();
//   console.log(dayOfWeek)
// });

// function totalWithWeekends() {
//   let isWeekend = dayOfWeek === 6 || dayOfWeek === 0; // 6 = Saturday, 0 = Sunday
//   let isWeekDay = dayOfWeek !== 6 && dayOfWeek !== 0;
//   let startDate = new Date(date);
//   let dayOfWeek = startDate.getDay();
//   if (startDate )
// }


// const days = [Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday];
// const checkDay = days.reduce(
//   function (result, element) {
//     result[element] = element.index;
//     return result;
//   },
//   { startDate }
// );
// console.log(element.index);


// Runs at credit card number input
creditCard.addEventListener("input", function (event) {
  event.preventDefault();
  if (validateCardNumber(creditCard.value) === false) {
    creditCard.setCustomValidity("Credit card number not valid.");
  } else {
    formIsValid = true;
    console.log("Credit card number is valid.");
  }
});

// Validates credit card number
function validateCardNumber(number) {
  var regex = new RegExp("^[0-9]{16}$");
  if (!regex.test(number)) return false;

  return luhnCheck(number);
}

function luhnCheck(val) {
  var sum = 0;
  for (var i = 0; i < val.length; i++) {
    var intVal = parseInt(val.substr(i, 1));
    if (i % 2 == 0) {
      intVal *= 2;
      if (intVal > 9) {
        intVal = 1 + (intVal % 10);
      }
    }
    sum += intVal;
  }
  return sum % 10 == 0;
}

expiration.addEventListener("input", function (event) {
  event.preventDefault();
  if (validateExpirationDate(expiration.value) === false) {
    expiration.setCustomValidity("Date not valid.");
  } else {
    formIsValid = true;
    console.log("Expiration Date is valid.");
  }
});

function validateExpirationDate(number) {
  var regexExpire = new RegExp('^(0[1-9]|1[0-2])\/?([0-9]{2})$');
  if (!regexExpire.test(number)) return false;
}

startDate.addEventListener('input', function(event){
  event.preventDefault()
  validateParkingDateInFuture()
})

function validateParkingDateInFuture (){
  let today = new Date()
  let startDateNewFormat = new Date(starDate)
  const year = startDateNewFormat.getFullYear()
  const month = startDateNewFormat.getMonth()
  const date = startDateNewFormat.getDate()
  return year + '/' + month + '/' + date
  console.log(todayNewFormat)
  console.log(startDate.value)
//   if (today > startDate.value) {
//     startDate.setCustomValidity("Date not valid.");
//   } else {
//     console.log('Start date is valid.')
//   }
}