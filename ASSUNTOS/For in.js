/*
ESTRUTURAS DE REPETÇÃO - FOR IN
*/

const student = {
    name: "carlos",
    age: 26,
    genre: "male"
}
for(let property in student){
    console.log(`${property} : ${student[property]}`)
}
