// 자료형 (date types)
// 데이터 (변수)의 종류가 무엇인가?
// - Primitive 원시 타입: string, number, boolean, undefined, null
// - Objrct 객체 타입 : 원시 타입이 아닌 나머지

//1. string (문자열)
// - 텍스트 정보, 따움표로 감싸야 함.
// - 숫자. 특수믄자도 따움표 안에 포함되어 있다면 문자열

let text = '다람이';
let text2 = '츄리';
console.log(text)
console.log(text2)

//문자 + 변수를 동시에
console.log(text2 + " 는 귀여워" + text + " 똘망똘망");

//ES6과 백틱(')와 달러($), 중괄호 {} 조합하여 사용
// 문자열 내에서 변수와 상수를 표현
//console.log(`${x}는 x, ${y}는 y, ${z}는 z이다. `); 

//2. number (숫자형)
// - 정수, 실수
// - 연산이 가능하다 (+ - * /)
let num = 100;
let num2 = 0.12;
console.log (num, num2)
console.log (num+1)
console.log (num-1)
console.log (num /2)

console.log (num2+1)

//3. booolean(불리언)
// - true, false (참, 거짓) 두 가지 값만 가짐
let isWater = true;
let haveMoney = false;
console.log(isWater, haveMoney)

//4. null (빈 값)
// "값이 없음"을 의도적으로 명시
let temp = null;
console.log(temp)

//5. undefined
// 값도 없고, 타입도 지정되지 않은 상태
let x; // 변수 선언만 했을 때 초기 값으로 할당됨
console.log(x);

// 6. 배열 array
// 배열의 이름: fruits
// 배열의 요소: 배열 안에 있는 데이터 하나하나
// 배열의 위치(인덱스): 0부터 시작
// 배열의 길이(크기) : 요소의 개수와 동일 4개

const fruits = ["Orange", "Pineapple", "Apple", "Banana"]
console.log(fruits)
console.log(fruits[0]) // fruits 배열의 위치가 0인 요소 출력
// js에서는 배열 요소의 자료형이 달라도 된다. js의 동적 타입 특성으로 인한 유연성

const mixedArray = [1, 'down', true, {name: 'daram'}, null] //name: 'daram' > 객체
console.log(mixedArray)

// Array 안에 Array 들어갈 수 있음 (중첩 가능)
const korean =[
['가','나','다'],
['라','마','사'],
['아','자','차']
];

console.log(korean[0][0],korean[2][1]);
console.log(korean[1][2],korean[0][2]);

//3차원 배열에서 숫자 출력
const nums =[
[
    [1, 2, 3],
    [4, 5, 6],
],
[
    [7, 8, 9],
    [10, 11, 12],
],
];
console.log(nums)
console.log(nums[1][0][1]) //8을 출력해보자

// 7. 객채 (object) (Key: value)
// - 프로그래밍에서 실제 존재하는 개체나 개념을 표한하는 데이터 구조.
// - 속성과 메서드로 구성/
// - *속성 키와 값의 쌍으로 이루어져 있다.
// -*메서드 함수를 값으로 가짐(동작이나 행위)
const cat = {
    name: '장화', //"name"이 KeyboardEvent, "장화"가 값
    age: 10, 
    isCute: true,
    mew: function(){
        return '냐옹';
    },

}
console.log(cat)
// 객체(object)의 속성(keey)에 접근하는 방법
//1. 점 표기법 (.)
console.log(cat.name)
console.log(cat.mew()) //()를 넣엉야 리턴값만 가져옴
//2. 대괄호 표기법 ([])
console.log(cat['name'])
//3. key가 변수에 저장되어 있을 때 사용법
const temval = 'name';
console.log(cat[temval])

//8. typeof: 자료형을 확인할 수 있는 키워드
// typeof X 형식
