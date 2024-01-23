// while(condition  = true){
//     //loop
// }

let count = 1; //จำนวนนับรอบ

// while(count <= 3){
//     console.log("Hello World"); // 1, 2, 3,
//     count++; // 1 => 2 => 3
// }

while (count <= 5){
    console.log("ผลิตสินค้าชิ้นที่ = ", count);
    if(count == 3){
        break;
    }
    count++;
}