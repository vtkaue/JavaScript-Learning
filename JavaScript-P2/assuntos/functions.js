/*
 FUNÇÕES / FUNCTIONS
 Type VOID = Quando a função não ter return
*/

 const sum = (number1, number2) => number1 + number2

const firstNumber = 10
const seccondNumber = 49

sum(firstNumber,seccondNumber) 

console.log(`o meu primeiro número é ${firstNumber}`)
console.log(`o meu segundo número é ${seccondNumber}`)
console.log(`o meu resultado da função é ${sum(firstNumber,seccondNumber)}`)

function type (number2, number3){
    console.log(number2 + number3)
    return
}
type()