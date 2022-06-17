// Classes


class Person {  // FORMA
  constructor(name,age){  // vai ser executado assim que a classe for instanciada
    console.log(`Hllo, I'm ${name}`)
    this.name = name // Deixa disponivel para outros metodos na minha classe
    this.age = age
  }
  talk(){
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`)
  }
}

const newPerson = new Person("Victor", 17) // BOLO
const newPerson2 = new Person("monica", 52) // BOLO
const newPerson3 = new Person("joão", 23) // BOLO
const newPerson4 = new Person("maria", 34) // BOLO
const newPerson5 = new Person("marta", 31) // BOLO


newPerson.talk()
newPerson2.talk()
newPerson3.talk()
newPerson4.talk()
newPerson5.talk()
