let max = 999;
let min = 100;
let result = 0;

let palindrom = n => {
    for(let i=0; i<(n.toString().length)/2; i++){
        if(n.toString().charAt(i) != n.toString().charAt(5-i)){
            return false;
        }
    }
    return true;
}

for(let i=max; i>=min; i--){
    for(let j = i; j>=min; j--){
        if(i*j > result && palindrom(i*j)){
            result = i*j;
        }
    }
}

console.log(result);

