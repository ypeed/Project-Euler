let sum = 0;
let n = 0;
let m = 1;
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