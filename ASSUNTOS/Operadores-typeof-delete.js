/* Operadores typeof e delete

 */
const myNumber = 20

const myString = "victor"

const myObject = {
    name: "victor",
    age: 300,
    sex: "male"
}

const people = [{
    name:"victor",
    age: 16,
    sex: "male",
    height: 1.7
},
{
    name:"joão",
    age: 12,
    sex: "male",
    height: 1.5
},
{
    name:"Ana",
    age: 20,
    sex: "feme",
    height: 1.6
},
]
delete myObject.name
console.log(typeof myObject)