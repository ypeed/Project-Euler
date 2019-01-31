let min = 2520;
let result
let divisible = false;

while(!divisible){
    for(let i=1; i<20; i++){
        if(min % i != 0){
            divisible = false;
            break;
        }
        divisible = true;
    }
    if(divisible == true){
        break;
    }
    min += 5;
}

console.log(min)