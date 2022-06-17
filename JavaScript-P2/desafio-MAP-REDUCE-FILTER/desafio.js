
const list = [20,3,234,12,17,541,6,87,275,1000]

const companies = [ // acicionar 10% no valor de mercado

{ name:'Samsung',marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },

{ name: 'Microsoft',marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },

{ name: 'Intel',marketValue: 117, CEO:'Brian Krzanich', foundedOn: 1968 },

{ name: 'Facebook',marketValue: 383, CEO:'Mark Zuckerberg', foundedOn: 2004 },

{ name: 'Spotify',marketValue: 30, CEO:'Daniel Ek', foundedOn: 2006 },

{ name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 }

];
 
const add10Porcent = company => {
    company.marketValue = company.marketValue + company.marketValue / 10

    return company
}

const oldCompanies = company => {
   const companiesOld = company.foundedOn < 2000
    return companiesOld
} 
const sumValueCompany = (acc, courent) => acc + courent.marketValue

const Newcompanies = companies.map(add10Porcent).filter(oldCompanies).reduce(sumValueCompany,0)

console.log(Newcompanies)