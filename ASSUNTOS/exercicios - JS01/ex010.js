//[?] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em dois objetos separados. Ex: const object1 = {name:"João"}, object1 = {name:"Maria"}. João e João, imprime true. João e Maria, imprime false.

let victor = {
    name : "victor",
    age : 17,
    sex : "male",
    height : 1.76,
    city : "the"
}
let titan = {
    name : "titan",
    age : 12,
    sex : "male",
    height : 1.69,
    city : "the"
}
console.log(titan.name === victor.name)

