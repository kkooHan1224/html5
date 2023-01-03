/* 
    새해가 되어 이름이 '식빵'인 웰시코기도 나이를 한 살 더 먹었다.
    다음과 같은 json 데이터에서 age를 1 증가시키고, 다시 json으로 출력하시오.
*/

const json = `{
    "name": "식빵",
    "family": "웰시코기",
    "age": 1,
    "weight": 2.14
}`;

/* 나의 풀이 */

let obj = JSON.parse(json);

obj.age += 1;

console.log(JSON.stringify(obj, null, 2)); // 2: 들여쓰기
