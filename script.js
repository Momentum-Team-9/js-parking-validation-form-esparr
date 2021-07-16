console.log('Add validation!');

const form = document.querySelector ('#parking-form')
const caryear = document.getElementById('car-year')  

let formIsValid

form.addEventListener('input', function (event){
    console.log('Input submitted')
})

form.addEventListener('submit', function(event){
    event.preventDefault()
    console.log('form submitted')
    // validateCarYear()
})

// ### Step 1
// Make each field required. 
// A message should appear on required fields if they are not filled in when the form is submitted.



// Step 2
// * Car year must be a number. (Consider changing the `type` of the input field.)
// done in html

// * Car year must be after 1900.
// function validateCarYear () {
//     console.log('car year value', caryear.value)
//     if (caryear.value < 1900) {
//         console.log('True')
//     //    caryear.value.   message = 'Year must be 1900 or later'
//        caryear.style.borderStyle = '1px solid red'
//     }  
//     else if (caryear.value === '') {
//         caryear.classList.add('.input-invalid')
//     } else {
//         formIsValid = true
//         caryear.classList.add('.input-valid')
//     } 
// }



// * Number of days must be a number.


// * Number of days must be between 1 and 30.

// Step 3
/* CVV must be a three-digit number. 
This can use the `pattern` attribute, or custom validation with JavaScript.*/


// Step 4
/* Add the ability to show the user the total cost of their parking when 
they click the "Make Reservation" button.
The div with id "total" should be filled with text showing the cost. 
This should only occur if the form is valid.
The cost is $5 per day.*/


// Step 5
// The requirements have changed for calculating cost. 
// The new cost is $5 per weekday, and $7 per weekend day. 
// `.map` and `.reduce` will be very helpful in calculating the total cost, 
// as will [the JavaScript Date object](https://css-tricks.com/everything-you-need-to-know-about-date-in-javascript/).


// Step 6
/* Validate the format of the credit card number. 
The following code will let you know if it is valid:

```js
function validateCardNumber(number) {
    var regex = new RegExp("^[0-9]{16}$");
    if (!regex.test(number))
        return false;

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
    return (sum % 10) == 0;
}
```
This code only works with 16 digit card numbers. 
"4111111111111111" is a valid card number you can use for testing purposes.
If the credit card number is invalid, an error message should 
appear that looks like the rest of the built-in client side validations.*/


//Step 7
/* Add the following validations:
* Expiration date must be a valid month and year and in the correct format.
* Expiration date must not be in the past.
* Car year cannot be in the future.
* Date parking must be in the future.

Each of these should also have client side validation errors.*/





// need custom fuctions to validate 
// you need to 