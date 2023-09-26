/*

 any time the button is clicked 
 
 we get the value in the form inputs 
 and add them together and display them as a result

*/

const body = document.querySelector('body');
console.log('body', body);
// body.setAttribute('style', 'background-color:black');
const button = document.getElementById('add-button');
console.log('button', button);
button.addEventListener('click', function () {
  addValues();
});

function addValues() {
  const firstNumber = document.getElementById('first-number').value;
  const secondNumber = document.getElementById('second-number').value;
  if (firstNumber && secondNumber) {
    const result = Number(firstNumber) * Number(secondNumber);
    const resultSpan = document.getElementById('result');
    resultSpan.innerHTML = result;
  }
}
