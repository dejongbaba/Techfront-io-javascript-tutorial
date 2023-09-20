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
    checkBox.setAttribute('class', 'delete');
    checkBox.setAttribute('type', 'checkbox');
    const spanText = document.createElement('span');
    spanText.innerHTML = inputValue;

    listItem.appendChild(checkBox);
    listItem.appendChild(spanText);
    listItem.appendChild(deleteButton);

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
