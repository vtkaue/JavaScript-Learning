/*
    For each
-CEITA 3 PARAMETROS
-Student = nome dado ao item
-index = Mostra a posição que ta dentro do array
-array = Mostra o array completo
*/

const students = [
    {name: "rodolfo", age: 25},
    {name: "maria", age: 34},
    {name: "joão", age: 21},
    {name: "Bruno", age: 43},
    {name: "carla", age: 13},
    {name: "ana", age: 20},
    {name: "julio", age: 26},
    {name: "ronaldo", age: 58}
];

let allStudentsAge = 0

students.forEach((student, index) => {
    console.log(`O aluno chama-se ${student.name}, tem ${student.age} anos e está na posição ${index} do array`)
})










/* MÉDIA DOS ALUNOS
let allStudentsAge = 0

students.forEach((student, index) => {
    allStudentsAge += student.age
})
const avarageAge = allStudentsAge / students.length

console.log(`A média de alunos é ${avarageAge.toFixed(0)}`)*/