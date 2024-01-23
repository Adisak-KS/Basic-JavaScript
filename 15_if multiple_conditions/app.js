let score = 75;

/*
มากกว่า 40 => D
มากกว่า 50 => C
มากกว่า 60 => B
มากกว่า 70 => A
*/

// ข้อควรระวัง เช็คทุกเงื่อนไข
// if (score > 70){
//     console.log("Grade = A");
// }

// if(score > 60){
//     console.log("Grade = B");
// }

// if(score > 50){
//     console.log("Grade = C");
// }

// if(score > 40){
//     console.log("Grade = D);
// }

// เมื่อเงื่อนไขใดเป็นจริง เงื่อนไขอื่นจะไม่ทำงาน
if (score > 70) {
    console.log("Grade = A");
}
else if (score > 60) {
    console.log("Grade = B");
}
else if (score > 50) {
    console.log("Grade = C");
}
else if (score > 40) {
    console.log("Grade = D");
}
else{
    console.log("Grade = F");
}
