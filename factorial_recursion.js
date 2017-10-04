function factorial_of_num(num){
 if((num===1)||(num===0)){ return 1;}
 return num * (factorial_of_num(num-1));
}

console.log(factorial_of_num(5));


//Return the factorial of the provided integer.

//If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

//Factorials are often represented with the shorthand notation n!

//For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
