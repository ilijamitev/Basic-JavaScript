// Write a JavaScript program that will calculate area of Circle
// TIP: area = π * r2

let circleRadius = 10;
console.log("Circle radius:", circleRadius);

let circleArea = circleRadius ** 2 * Math.PI;
console.log("Circle area:", circleArea);


console.log("========================HOMEWORK===============================");


// HOMEWORK
// Write a JavaScript program that will calculate the price of 30 Phones, where the price of one phone is $119.95 and the tax rate is 5 %.

let numberOfPhones = 30;
console.log("Number of phones:", 30);
let priceOfOnePhone = 119.95;
console.log("Price of one phone:", 119.95);
let taxRate = 0.05; // 5% = 0.05
console.log("Tax rate:", 0.05);

let priceOfOnePhonePlusTax = priceOfOnePhone + priceOfOnePhone * taxRate;
console.log("Price of one phone plus tax:", priceOfOnePhonePlusTax);

let priceOfThirtyPhones = priceOfOnePhonePlusTax * numberOfPhones;
console.log("Price of thirty phones (tax included):", priceOfThirtyPhones);