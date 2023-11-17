// preload all the elements

const list = document.getElementById('task-list');
const input = document.getElementById('input-box');
const todoArr = [];
const listItemElements = [];

// program to generate random strings

// we want to have a function that would run when the add button is clicked

const onClickAdd = () => {
  const inputValue = input.value;
  if (inputValue) {
    // todoArr.push(inputValue);
    const listItem = document.createElement('li');
    const randomId = generateString(5);
    listItem.setAttribute('id', randomId);
    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('class', 'delete');
    deleteButton.setAttribute('type', 'button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.addEventListener('click', function () {
      onClickDelete(randomId);
    });
    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.addEventListener('change', function () {
      onCheckTodo(randomId);
    });
    const listText = document.createElement('p');
    const dateText = document.createElement('span');
    const listDiv = document.createElement('div');
    listText.innerHTML = inputValue;
    dateText.innerHTML = new Date();
    listText.setAttribute('class', 'text');
    dateText.setAttribute('class', 'date');
    //append the text information
    listDiv.appendChild(listText);
    listDiv.appendChild(dateText);
    //append the list item
    listItem.appendChild(checkBox);
    listItem.appendChild(listDiv);
    listItem.appendChild(deleteButton);

    //append the list item
    list.appendChild(listItem);
    list.appendChild(listItem);
    input.value = '';
  }

  // if (todoArr.length) {
  //   for (let i = 0; i < todoArr.length; i++) {
  //     const listItem = document.createElement('li');
  //     listItem.innerHTML = todoArr[i];
  //     list.appendChild(listItem);
  //     // listItem.innerHTML = todoArr[i];
  //     // listItemElements.push(listItem);
  //   }
  //   console.log('listItemElements', listItemElements);
  // }
};
const onClickDelete = (id) => {
  // get the list item with that button the button clicked
  // remove it from the list
  const listItem = document.getElementById(id);
  listItem.parentNode.removeChild(listItem);
};

const onCheckTodo = (id) => {
  const listItem = document.getElementById(id);
  const input = listItem.firstChild;
  const span = listItem.querySelector('p.text');
  if (input.checked) {
    span.setAttribute('style', 'text-decoration:line-through');
  } else {
    span.setAttribute('style', 'text-decoration:none');
  }
  console.log('input', input);
};
// helper functions
function generateString(length) {
  // declare all characters
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
