/*
    다음 JSON 데이터에서 모든 유저의 풀네임을 출력하시오.
    (한 줄에 하나씩, 영문 이름과 성은 띄어쓰기)
*/

const json = `{
    "users": [
        {
            "firstName":"Ray",
            "lastName":"Villalobos"
        },
        {
            "firstName":"John",
            "lastName":"Jones"
        },
        {
            "firstName":"Ashley",
            "lastName":"Allen"
        }
    ]
}`;

let obj = JSON.parse(json);
console.log(obj.users.map((user) => user.firstName + " " + user.lastName)[0]);
console.log(obj.users.map((user) => user.firstName + " " + user.lastName)[1]);
console.log(obj.users.map((user) => user.firstName + " " + user.lastName)[2]);
