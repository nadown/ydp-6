//내장 메서드
//- 프로그래밍 언어나 프레임워크에서 기본적으로 제공되는 메서드
//문자열 관련 내장 멤서드
//- 문자열을 다루는데 유용한 기능

let str = 'Happy Birthday'
let str2 = '     Happy Birthday2'

//문자열 인덱싱
console.log(str[0])
console.log(str[0]+ str[12]);

console.log(str.length); //길이는 1부터 //

//대/소문자
console.log(str.toUpperCase()); //대문자
console.log(str.toLowerCase()); //소문자
console.log(str2.trim()); //공백 제거

//indexOf() 글자 위치 찾기
// 위치(index): 0부터 시작
console.log(str.indexOf('y'));
console.log(str.indexOf('i'));
console.log(str.indexOf('v')); //존재하지 않으면 -1 반환
console.log('------')

console.log(str);
console.log(str2);

console.log(str.replace('p','w'))

let str3 = 'dinner'; //문자열 쪼개기//
console.log(str3.split('e'));

console.log('------')

//배열 내장 메서드
let arr = [1, 2, 3, 4, 5];
let arr2 = ['qiokka', 'dog', 'koala']
// 배열에 값을 추가하려면?
//arr[5] =6; //5번 인덱스에 6번 추가
//console.log(arr);
//arr[8] = 100; //인텍스를 건너뛰면 빈 값이 들어가게 됨
//console.log(arr);

// push(): 맨 끝에 요소 추가
//arr.push(6);
//console.log(arr);

arr.pop();
console.log(arr); // 맨 끝 요소 제거

arr2.unshift('cat');
console.log(arr2);

arr.shift(); //맨 앞에 요소 제거
console.log(arr2);

console.log(arr.includes('apple')); //요소가 있는지 없는지 검사

console.log('------')

console.log(arr2.join('')); // join안에 문자열 기준으로 병함

//메서드 체이닝
console.log('hello'.split(''));
console.log('hello'.split('').reverse());
console.log('hello'.split('').reverse().join(''));

