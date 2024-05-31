b = 0
for (let i = 0 ; i <= 100 ; i++) {
    if (i % 2 == 0 || i % 5 == 0) {
        b += i;
    }
}
console.log(b)

let number = 10000;
for(let i = 0; i <= number; i++){
if( i%13==0 && i%2==1 )
    {console.log(i);
}
}