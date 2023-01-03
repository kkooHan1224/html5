const json = `{
	"users": [
		{
			"id": 1,
			"name": "홍길동",
			"joined": "2020-04-28",
			"verified": true
		},
		{
			"id": 2,
			"name": "백소저",
			"joined": "2020-01-12",
			"verified": false
		}
	]
}`;
let obj = JSON.parse(json);
console.log(typeof object);

console.log(JSON.parse("3.14"));
console.log(JSON.parse('"text"'));
console.log(JSON.parse("true"));
console.log(JSON.parse("[1, 2, 3]"));

/* TODO: 홍길동의 가입 날짜 출력 */
console.log(obj.users[0].joined);
//   => json.users로 하면 안되고 obj.users로 해야한다.

/* 이름만 배열로 가져오기 */
console.log(obj.users.map((user) => user.name));

/* 인증된 유저만 가져오기 */
console.log(obj.users.filter((user) => user.verified));
//   => filter는 화살표 함수의 결과가 true인 것만 걸러진다.
