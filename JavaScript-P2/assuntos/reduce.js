/*
   REDUCE
    - Retorna um valor ( pode ser um novo array, um objeto, string, number, etc.)
    - Aceita 4 parâmetros :
      - Acumulador
      - Valor Inicial
      - Index
      - Array completo
*/

const list = [1,2,3,4];
               // METODO 1 //
const sum = list.reduce((acc, current) => {
     console.log('acumulador', acc)
     console.log('atual', current)
     return acc + current
},0)

console.log(sum)