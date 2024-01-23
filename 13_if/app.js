age = 26;

// if(เงื่อนไขเป็นจริง){
//     // คำสั่งให้ทำอะไร
// }

// let result = (age >= 15 && age <= 25);
// if(result){
//     console.log("MR / Miss")
// }

let balance = 1000;
let withdraw = 500;

if (withdraw <= balance){
    console.log("ดำเนินการถอนเงิน = ", withdraw);
    balance = balance - withdraw;
    console.log("เหลือเงิน = ", balance);
}