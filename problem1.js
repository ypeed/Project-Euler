let sum = 0;
const three = 3;
const five = 5;

for(let i=1; i<=1000; i++){
    if(five*i < 1000){
        sum += five*i;
    }else{
        break;
    }
}
for(let i=1; i<=1000; i++){
    if(three*i < 1000){
        if((three*i) % five !== 0){
            sum += three*i;
        }
    }else{
        break;
    }
}
