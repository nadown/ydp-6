// 함수 : 특정 작업을 수행하기 위해 독립적으로 설계된 코드 집합...

function helloWorld() {
    //return은 키워드 생략 가능
    console.log("hello, world");
}
helloWorld();

function helloWorld2() {
    return 'Hello, world! 2' //리턴은 반환값 함수 내부 
}

console.log(helloWorld2());

//#2. 함수 표현식 - 변수에 익명 함수를 할당(저장)하는 형태.
// - 변수가 선언된 이후에만 호출 할 수 있다.
// * 익명함수
// - 말 그대로 이름이 없는 함수

// - 이름을 지정할 수도 있음.
// - 이 경우 함수 이름은 내부에서만 사용 가능!

const sayHello = function hello() {
console.log("안녕 월드3");
}
sayHello();

const helloWorld3 = function()
{
    console.log("안녕 월드ㅎㅎㅎ");
}
const helloWorld4 = function()
{
    return "월드 4";
}
helloWorld3()
console.log(helloWorld4());

function food(text) {
    return text;
}
console.log(food("제육"));

const pizza = "마시땅";
console.log(food("pizza"));

const col = 2000;
console.log(food(col));

// 매개 변수는 어떤 데이터 타입이든 노상관

// 매개변수 2개
function music(name, title) {
    return `${name} - ${title} `
}
console.log(music('아이유', '잔소리'));

// #3. 화살표 함수

// 일반형 (여러줄)
function triangle(base, heigth) {
    const area = (base * heigth) /2
    return area;
}

console.log(triangle(3, 4)) 