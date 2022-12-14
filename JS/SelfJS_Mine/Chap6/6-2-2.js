// contains() 메소드를 추가합니다.
String.prototype.toArray = function () {
    return this.split('');
};

Array.prototype.last = function () {
    return this[this.length - 1];
};

// String 객체의 toArray() 메소드를 사용한다.
const a = '안녕하세요';
console.log(a.toArray());

// Array 객체의 last() 메소드를 사용한다.
const b = [273, 32, 103, 57, 52];
console.log(b.last());