const json = `[1, 2, 3, 4]`;

let array = JSON.parse(json);

// TODO: json 배열의 합을 구하시오.
const result = array.reduce((prev, cur) => prev + cur, 0);
console.log(result);
