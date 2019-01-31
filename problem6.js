let sum_of_squares = 0;
let square_of_sums = 0;
let difference = 0;

for(let i=1; i<=100; i++){
    sum_of_squares += i*i
    square_of_sums += i
}
square_of_sums *= square_of_sums

difference = square_of_sums - sum_of_squares

console.log(difference)