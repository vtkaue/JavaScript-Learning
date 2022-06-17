/*
[x] Faça um programa onde, você chame uma função que calcule a taxa mensal de juros de um investimento. 

- Você deve enviar como argumentos da função - Valor inicial investido - Valor atual do investimento 
- Tempo em meses, que o valor está investido
- A função deve RETORNAR a taxa de juros, já formatada. Ex: 2,5%. Siga a formula desse vídeo para te auxiliar com o cálculo.

Cálculo taxa = juros(Valor atual do investimento - Valor inicial investido) / Valor inicial investido * tempo
*/
function valores(){
    let investido = 2000;
    let resgatado = 2600;
    let meses = 12;
    let calq = ( resgatado - investido ) / (investido * 12) * 100
    console.log(`a taxa de juros e ${calq}%`)
    
    return
}
valores()


