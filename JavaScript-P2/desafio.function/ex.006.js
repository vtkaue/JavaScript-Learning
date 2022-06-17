/*
[ ] A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e número de filhos. 
A prefeitura deseja saber: 
- média do salário da população; 
- média do número de filhos; 
- maior salário; 
- O final da leitura de dados se dará com a entrada de um salário negativo. 
- Faça isso usando uma função!
*/

const people = [{
    numberOfChildren: 2,
    salary: 1250
}, {
    numberOfChildren: 4,
    salary: 1550,
}, {
    numberOfChildren: 3,
    salary: 1900,
}, {
    numberOfChildren: 3,
    salary: -1900,
}]

const average = (peopleInformation) => {
    let averageSalary = 0
    let averageChildren = 0
    let hightSalary = 0

    for (let i = 0; i < peopleInformation.length; i++) {

        const salary = peopleInformation[i].salary


        const children = peopleInformation[i].numberOfChildren

        if (salary > hightSalary) hightSalary = salary

        if (salary < 0) {
            console.log(`média de sálario R$${(averageSalary / i).toFixed(0)}`)

            console.log(`Média de filhos ${(averageChildren / i).toFixed(0)}`)

            console.log(`Maior Salário R${hightSalary}`)
            break
        } else {
            averageSalary = averageSalary + salary;
            averageChildren += children
        }
    }
}
average(people)


/*// METODO 2
function findAverageAndHighestSalary(peopleInformation){
    let i = 0;
    let averageSalary = 0
    let averageChildren = 0
    let highestSalary = 0

    while (peopleInformation[i].salary > 0) {
        averageSalary = averageSalary + peopleInformation[i].salary
        averageChildren += peopleInformation[i].numberOfChildren
        peopleInformation[i].salary > highestSalary ? highestSalary = peopleInformation[i].salary : highestSalary = highestSalary
        i++
    }

    console.log(`Média de sálario R$${(averageSalary / i).toFixed(0)}`)
    console.log(`Média de filhos ${(averageChildren / i).toFixed(0)}`)
    console.log(`Maior sálario R$${highestSalary}`)
}    
findAverageAndHighestSalary(people)*/