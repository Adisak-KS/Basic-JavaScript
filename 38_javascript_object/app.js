// Object
let product = {
    name : "Mouse",
    price : 1500,
    color : "Black",
    category : "Computer",
    size : "M",
    displayProduct:function(){
        return  "Product Name :" + this.name + " Price :" + this.price + " Category :" + this.category
    },
    discount:function(){
        return this.price - 1000;
    },
    getColor:function(){
        return this.color;
    }

}        


// console.log("Product Name :", product.name);
// console.log("Price :", product.price);
// console.log("Category :", product["category"]);

// เรียกใช้ Method 
console.log(product.displayProduct());
// document.write(product.displayProduct());
console.log(product.discount());
console.log(product.getColor());

//////////////////////////////////////////////////

// Array 
let item = ["Mouse", 1500, "Black", "Computer", "M"];
// console.log("Product Name :", item[0]);
// console.log("Price :", item[1]);
// console.log("Category :", item[2]);

// JavaScript Objet (Method)