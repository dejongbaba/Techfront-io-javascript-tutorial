let isTrue = false; // global scope
let result;

myFunction();

function myFunction() {
  let carName = 'Volvo';
  let isTrue = true; // local scope
  isTrue = false;
  console.log('istrue local', isTrue);
  // document.getElementById("demo1").innerHTML = typeof carName + " " + carName;
}
console.log('istrue global', isTrue);

if (isTrue == true) {
  const text = 'Hi'; // block scope
  result = 'the condition is true';
} else {
  result = 'the condition is false';
}

console.log('result', result);
