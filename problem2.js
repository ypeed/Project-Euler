let sum = 0;
let n = 1;
let m = 2;
let temp;

while(sum < 4000000){
    if((m+n) % 2 == 0){
        sum += (m+n);
    }
    temp=n;
    n = m;
    m = m + temp;
}

console.log(sum)