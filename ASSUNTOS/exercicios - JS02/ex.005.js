/*
[x] Crie 5 objetos nesse formato
{ nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" }
Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo ,a pessoa deve ser maior de idade e brasileira para ser aprovada.
*/
let name1 = {
    name: "victor",
    age: 17,
    sexo: "male",
    profissão:"programador",
    nacionalidade: "frances"

}
let name2 = {
    name: "lara",
    age: 23,
    sexo: "male",
    profissão:"programador",
    nacionalidade: "japonesa"

}
let name3 = {
    name: "rodrigo",
    age: 19,
    sexo: "male",
    profissão:"programador",
    nacionalidade: "argentino"

}
let name4 = {
    name: "pedro",
    age: 18,
    sexo: "male",
    profissão:"programador",
    nacionalidade: "brasileiro"

}
let name5 = {
    name: "rodolf",
    age: 17,
    sexo: "male",
    profissão:"programador",
    nacionalidade: "chines"
}
 if(name3.age >= 18 && (name3.nacionalidade === "brasileiro" || name3.nacionalidade === "brasileira" )) {
     console.log(`${name3.name} foi aprovado`)
 } else {
     console.log(`${name3.name} não foi aprovado`)
 }