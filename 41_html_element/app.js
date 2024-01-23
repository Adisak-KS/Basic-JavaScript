// let a = document.getElementsByTagName('p');
// let a = document.getElementById('demo'); // อ้างอิง
const a = document.querySelector('#demo'); // อ้างอิงผ่าน  id
// let b = document.getElementsByTagName('p');
const b = document.querySelector('.myjs'); // อ้างอิงผ่าน  class
// let c = document.querySelector('p'); // อ้างอิงผ่าน  Tag ตัวเดียว
const c = document.querySelectorAll('p'); // อ้างอิงผ่าน  Tag ทุกตัว


// console.log(a);
// console.log(b);

// let x = 10;
// let y = 20;

// function displayText(){
//     // a.innerHTML = "แสดงข้อมูลในตัวแปร X : " + x + " และตัวแปร Y : " + y; //แสดงผล
//     a.innerHTML = `แสดงข้อมูลตัวแปร x = ${x} และตัวแปร y = ${y}`; //แสดงผล
// }

///////////////////////////////////////////

// console.log(a);
// console.log(b);
console.log(c);