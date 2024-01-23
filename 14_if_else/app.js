let balance = 1000;
let withdraw = 1500;

if (withdraw <= balance){
    //เมื่อเงื่อนไขเป็นจริง
    console.log("ดำเนินการถอนเงิน = ", withdraw);
    balance = balance - withdraw;
    console.log("เหลือเงิน = ", balance);
}else{
    //เมื่อเงื่อนไขเป็นเท็จ
    console.log("ยอดเงินไม่พอ");
}