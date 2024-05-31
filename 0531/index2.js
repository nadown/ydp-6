// while문
//let idx = 0;
//while (idx < 3) {
//    console.log('안녕', idx);
//    idx = idx +1;
//}

//let idx2 = 0;
//while(true) {
//    console.log('와일, udx2');
//    idx2 = idx2 +1;
    //무한 루프를 빠져나오는 조건//
//    if (idx2 === 10) {
//        break;
//    }
//}

//let i=1;
//while(i<9) {
//    i++
//    let j=1;
//    while(j <10){console.log(i + '*' + j + '=' + (i*j));
//    j++;}
//    }
//    console.log('\n');

    //////// do while문
/**
 * 자바 스크립트에서 사용되는 반복문 중 하나로,
 * 조건이 참인지 여부에 상관없이 코드 블록을 최소 한 번 실행한 후 조건을 검사한다.
 * 항상 코드 블록을 한 번 실행한 다음, 조건이 참인 동안 반복을 계속
 */

//do {
    //실행할 코드
// }while(조건);


// let g = 1;
// do {
//    console.log(g);
//    g++
// } while(g <= 5);

// break (반복문을 중단하고 나옴)


//for (let i = 1; i<=10; i++){
//    if(i===5){
//        break;
//    }
//    console.log(i)
//}

// continue 현재 반복을 빼버림
for (let i =1; i<=5; i++){
    if (i === 3) {
        continue;
    }
    console.log(i);
}