const titleEl = document.getElementById('title'); // อ้างอิงผ่าน  id
const contentEl = document.querySelector('.content'); // อ้างอิงผ่าน  class
const allEl = document.querySelectorAll('p'); // อ้างอิงผ่าน  Tag ทุกตัว

const box = document.querySelector('.box')


// function displayText(){
//     // titleEl.style.color = "red";
//     // titleEl.style.backgroundColor = "yellow";
//     // titleEl.style.fontSize = "60px";

//     // contentEl.setAttribute("class","Adisak");
//     box.setAttribute('class','dark');
// }

function lightMode(){
    box.setAttribute('class','light')
}

function darkMode(){
    box.setAttribute('class','dark')
}
