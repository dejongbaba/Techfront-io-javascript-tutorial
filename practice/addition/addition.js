/*

 any time the submit button is clicked 
 
 we get the value in the form inputs 
 and add them together and display them as a result

*/

const form = document.getElementById('addition-form');
const firstNumber = document.getElementById('first-number').value;
const secondNumber = document.getElementById('second-number').value;

form.addEventListener('submit', function (e) {
  e.preventDefault();
  onSubmit();
});

function onSubmit() {
  if (firstNumber && secondNumber) {
    const result = Number(firstNumber) + Number(secondNumber);
    const resultSpan = document.getElementById('result');
    resultSpan.innerHTML = result;
  }
}
