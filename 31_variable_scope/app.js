let a = 100; // Global

function display(){
    let a = 50; // Local
    let b = 60; // Local
   
    console.log("A In Function :", a);
    console.log("B In Function :", b);
}

console.log("A Global :", a)
// console.log("B Global :", b) //ไม่สามารถใช้ได้

display();