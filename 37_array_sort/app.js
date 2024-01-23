let points = [20, -5, -2, 0, 40, 100, -500, 150];
console.log(points);

// น้อยไปมาก
points.sort(function(a,b){
    return a-b;
});
console.log(points);

// มากไปน้อย
points.sort(function(a,b){
    return b-a;
});
console.log(points);
