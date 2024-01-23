// console.log("Hello World");
// console.log("Hello World");

function print(){
    console.log("Hello World");
}

function message(){
    alert("Notify Transfer");
}

function displayName(){
    document.write("Adisak");
}

function plusNumber(x){
    console.log("เลขที่ส่งมา คือ",x);
}
// plusNumber(5);
// plusNumber(10);

// let number = "Adisak";
// plusNumber(number);

function fullName(fname, lname, city){
    console.log("First Name :",fname, " Last Name :", lname, "City :",city);
}

fullName("Adisak", "Khongsuk");
fullName ("Sommay","Jaidee");
// ไม่มีการส่งข้อมูล จะได้ค่า Undefined
fullName ("Jojo");


// + เลข
function summation(x, y){
    let total = x + y ;
    console.log(x, "+", y, "Total :" ,total);
}

summation (10, 50);
summation (500, 1000);
