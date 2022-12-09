// power() 메소드를 추가한다.
Number.prototype.power = function (n = 2) {
    return Math.pow(this, n);
};

// Number 객체의 power() 메소드를 사용한다.
const a = 12;
console.log('a.power():', a.power());
console.log('a.power(3):', a.power(3));
console.log('a.power(4):', a.power(4));