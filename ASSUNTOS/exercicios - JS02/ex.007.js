/*
[x] Faça um programa onde leia um numero e diga se ele é par ou impar.
*/

let n = 26;
let total = n/2;

if(n & 1){
    console.log("impar")
} else {
    console.log("par");
}
console.log(total)

// OU //

const number = 2

if(number % 2 === 0)console.log("o número e par")
else console.log("o numero e impar")
