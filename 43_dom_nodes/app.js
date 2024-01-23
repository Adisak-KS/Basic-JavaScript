// const textAll = document.querySelectorAll('p');
// let message = textAll[1].innerHTML;
// console.log(message);

// const menu = document.getElementById('menu');
// let count = 1;

// function addItem() {
//     const item = document.createElement('li'); //Create li
//     item.innerText = "Item " + (count++);
//     menu.appendChild(item);
// }

/////////////// Delete //////////
// const menu = document.getElementById('menu');
// const item = document.getElementById('item-3');

// function deleteItem(){
//     menu.removeChild(item);
// }

////////////////// Replace ///////////////
const menu = document.getElementById('menu');
const item = document.getElementById('item-3');
const itemB = document.getElementById("item-2") 

const newItem = document.createElement("li");
newItem.innerText = "X";


function deleteItem(){
    menu.removeChild(item);
}

function replaceItem(){
    menu.replaceChild(newItem, itemB);
}

