/*
[x] Escreva um programa onde, você chame uma função mandando dois argumentos, 2 números, e a função responde qual número é maior
*/
let comparing = (number1, number2) => {
    if(number1 > number2){
        console.log(`o número ${number1} e maior que o número ${number2}`)
    } else {
        console.log(`o número ${number2} e maior que o número ${number1}`)
    }
    return
}
comparing(2000,1000)