const value = 600851475143;
let max = 0;
let temp = [];

for(let i=2; i*i<value; i++){
    if(value % i == 0){
        temp[0] = i;
        temp[1] = value/i;
        
        for(let j=0; j<2; j++){
            let isPrime = true;
            for(let k=2; k*k < temp[j]; k++){
                if(temp[j] % k == 0){
                    isPrime = false;
                    break;
                }
            }
            if(isPrime && temp[j] > max){
                max = temp[j];
            }
        }
    }
}
console.log(max);




