let prime = 0;
let count = 0;
let num = 2;

function isPrime(n){
    let i = 2;
    while(i*i <= n){
        if(n % i == 0){
            return false;
        }
        i++
    }
    return true;
}

while(count <10001){
    if(isPrime(num)){
        prime = num;
        count++
    }
    num++
}

console.log(prime)