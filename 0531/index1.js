//1. Switch문
// - 하나 이상의 csse 문으로 구성
// - default가 필수는 아니지만, 사용하길 권장 = if문의 else 같은 존재
// switch문 내 모든 case가 매징 되지 않을 때 실행
// 여러개의 case 문을 묶을 수 있다. 
// breck; (조건 빠져나갈 때 사용)

let a = 3;
switch(a) {
    case 1:
    case 2:
    case 3:
        console.log("a가 1~3 이군요!");
        break;
    case 4:
       console.log("a가 4 이군요!");
    break;
    default:
      console.log("모르겠어요");
    break;
}

let score = 60;
console.log(parseInt(score/10));

switch(parseInt(score/10)) {
    case 10:
    case 9:
        console.log('a');
        break;
    case 8:
        console.log('b');
        break;
    case 7:
        console.log('c');
        break;
    case 6:
        console.log('d');
        break;
    default:
        console.log('f')
    break;
}

//2. 삼항 연산자
//조건식 ? a : b
//조건식이 참이면 'a' 거짓이면 'b'
//if문 간단하게

//일반 if문
let num = 5;

if (num % 2 === 1) {
    console.log("홀수");}
    else{
    console.log("짝수")
}
// 삼황 연산자

num % 2 === 1 ? console.log("홀수") : console.log("짝수");

//(조건)? value1: value2
// 조건이 참이면 1값이 실행 거짓이면 2값이 실행

//3. 반복문
//for(let i = 0; i <10; i++) {
//    console.log('안녕', i);
//}

//for (let i = 5; i>=1; i--) {
//    console.log(i);
//}

//let n = 10; // 어떤 숫자까지 합을 구할지 대한 n
//let sum = 0; // 합을 저장할 변수

//for (let i = 1; i<n; i++){
    //sum 변수에 값을 재할당 (이전 sum 변수의 값+현재 반복 변수)
//sum = sum + i;
//console.log(i, sum);
//}
let sum2 = 0;

for (let i =1;  i<=20; i++) {
    if(i % 2 === 0) {
        sum2 = sum2 + i; // sum2 +=i;
        console.log(i, sum2);
    }
}