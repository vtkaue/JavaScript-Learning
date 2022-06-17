/*
[x] Escreva um programa onde, você chame uma função, e ela diga que ano estamos!
*/
function year(){
    today = new Date();
    y=today.getFullYear();
    console.log("estamos no ano " +y)
    return
}
year()