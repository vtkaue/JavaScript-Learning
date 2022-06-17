/*
[x] Faça um programa que receba 3 números inteiros, e deve imprimir, qual é o maior, qual é o menor.
*/

let numberOne = 2
let numberTwo = 5
let numberThree= 6

if(numberOne > numberTwo && numberOne > numberThree){
    console.log("O primeiro é o maior")
}else if(numberTwo > numberThree){
    console.log("o segundo é o maior")
}else {
    console.log("o terceiro e o maior")
}
//
if(numberOne < numberTwo && numberOne < numberThree){
    console.log("O primeiro é o menor")
}else if(numberTwo < numberThree){
    console.log("o segundo é o menor")
}else {
    console.log("o terceiro e o menor")
}

