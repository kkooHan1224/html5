/*
    다음 JSON 데이터에는 size 속성이 잘못 들어가 있다.
    size의 값이 values 배열의 길이를 나타내도록 수정하여 출력하시오.
*/

const json = `{
    "size": 0,
    "values": [1, 2, 3, 4]
}`;

let obj = JSON.parse(json);

console.log(obj.size);

obj.size = obj.values.length;

console.log(JSON.stringify(obj, null, 2));
