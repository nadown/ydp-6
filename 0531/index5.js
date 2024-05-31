// 배열에서 반복문 사용하기
// for문
// for of문
// forEach() 메서드

// 배열) for문 사용 이유

const fruits = ['사과','망고','배','포도','바나나'];
console.log(fruits.length);

for(let f = 0; f < fruits.length; f++) {
    console.log(fruits[f]);
}

console.log('------');

const arr = [1, 2, 5, 6, 7];
const alphabes = ['a', 'b', 'c', 'd'];

//1, 기본 for문
for (let a = 0; a < arr.length; a++) {
    console.log(arr[a]);

}

//2. for of문

//3. forEash() 메서드
// 배열의 각 요소에 대해 지정된 함수 실행
// 각 요소에 대해 함수가 호출 될 때마다, 해당 요소가 함수의 인자로 전달

console.log('------');

 //map, filter, find 메서드
 //- 조건에 따라 요소를 변형하거나 선택.
 //1. map() 배열의 각 요소에 대해 지정된 함수를 호출하고, 그 결과로 새로운 배열을 생성

 const number = [1,2,3,4,5];
 const doubleNumbers = number.map(function(){
    return num * 2;
 })
 console.log(doubleNumbers);

 // #2. filter()
 //- 배열의 각 요소에 대해 지정된 함수를 호출하고, 그 결과가 'true'인 요소들로 이루어진 새로운 배열을 생성
 