const circle = require('./circle.js');

console.log(`지름이 4인 원의 면적: ${circle.area(4)}`);
console.log(`지름이 4인 원의 둘레: ${circle.circumference(4)}`);

// 구조분해할당
const {area, circumference} = require('./circle');

console.log(`지름이 10인 원의 면적: ${area(10)}`);
console.log(`지름이 10인 원의 둘레: ${circumference(10)}`);