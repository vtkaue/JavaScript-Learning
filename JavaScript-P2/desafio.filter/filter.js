/*
  FILTER
    - Cria um novo array, a partir do array percorrido (array original);

    - Cria um novo array APENAS com os elementos filtrados

    - Aceita 3 Parâmetros 
       - Itens do array
       - Index
       - Array completo
*/
             // DESAFIO 1 //

const list = [20,3,234,12,17,541,6,87,275,1000]

; // APENAS PARES E DIVISIVEIS POR 5

const newList = list.filter((lista) => {

    const filter = lista % 2 === 0 && lista % 5 === 0

    return filter
})
console.log(newList)






            // DESAFIO 2 //

const companies = [ // APENAS DEPOIS DE 1975

{ name:'Samsung',marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },

{ name: 'Microsoft',marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },

{ name: 'Intel',marketValue: 117, CEO:'Brian Krzanich', foundedOn: 1968 },

{ name: 'Facebook',marketValue: 383, CEO:'Mark Zuckerberg', foundedOn: 2004 },

{ name: 'Spotify',marketValue: 30, CEO:'Daniel Ek', foundedOn: 2006 },

{ name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 }

];


const newCompanies = companies.filter(dates => dates.foundedOn > 1975 && dates.marketValue >= 200)

console.log(newCompanies)