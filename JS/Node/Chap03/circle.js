const { PI } = Math;

console.log(exports);   // {}

exports.area = (r) => PI * r * r;

exports.circumference = (r) => 2 * PI * r;