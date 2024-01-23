let status = 1; // 0 = off, 1 = on
let light;

// if(status == 0){
//     light = "Off"
// }else if(status == 1){
//     light = "On";
// }else{
//     light = "Not found";
// }

switch (status) {
    case 0: light = "OFF";
        break;
    case 1: light = "ON";
        break;
    default: light = "Not Found";
}

console.log(light);

//Month
let month = 5;
let name;

switch (month) {
    case 1: name = "January";
        break;
    case 2: name = "February";
        break;
    case 3: name = "March";
        break;
    case 4: name = "April";
        break;
    default: name = "Not Found";
}

console.log(name);