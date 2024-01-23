let colors = ["Red", "White", "Blue", "Yellow", "Purple"];
console.log("Before :", colors);

// นับจำนวนข้อมูล
let count = colors.length;
console.log(count);

// เรียงลำดับสมาชิกใน Array ตาม A-Z
let result = colors.sort();
console.log("After A-Z :",result);

// เรียงลำดับสมาชิกใน Array ตาม Z-A
let result2 = colors.reverse();
console.log("After Z-A :",result2);

// แสดงสมาชิกใน Array ตัวแรก
console.log("First :",colors[0]);

// แสดงสมาชิกใน Array ตัวสุดท้่ย
console.log("Last :", colors[colors.length -1]);

// Add item Array 
colors.push("gray");
console.log(colors);
