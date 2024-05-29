//8. typeof: 자료형을 확인할 수 있는 키워드
// typeof X 형식
//console.log(typeof '문자');
//console.log(typeof 12345);
//console.log(typeof 3.24);


//let matScore = prompt('수학 점수 입력')
//let engScore = prompt('영어 점수 입력')

//let avg = (matScore + engScore) /2;
//console.log('수학, 영어 평균 점수는 ${avg}점 입니다.')

//9. 형변환
// #1. String(): 문자로 형변환
let str1 = true;
let str2 = 123;
let str3 = undefined;

console.log(String(str1), typeof String(str1));
console.log(String(str2), typeof String(str2));
//값을 문자열로 변환

//#2. Number(): 숫자로 형변환
let n1 = true;
let n2 = false;
let n3 = 123.9;

console.log(n1);
console.log(Number(n1), typeof Number(n1));
console.log(Number(n2), typeof Number(n2));
console.log(Number(n3), typeof Number(n3));

console.log(parseInt(n3)); // n3의 값을 정수로 바꾸겠다.
console.log(parseFloat(n3)); // n3의 값을 실수로 바꾸겠다.

// +)null, undefined를 숫자로 바꾼다면
console.log(Number(undefined), typeof Number(undefined)); 