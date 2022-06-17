


const list = [
    { name: "Rodolfo", vip: true },
    { name: "Maria", vip: false },
    { name: "João", vip: true },
    { name: "Bruno", vip: true },
    { name: "Carla", vip: false },
    { name: "Ana", vip: true },
    { name: "Julio", vip: false },
];
const list2 = [
    { name: "Rodolfo", vip: true, sector: "Black" },
    { name: "Maria", vip: false, sector: "Green" },
    { name: "João", vip: true, sector: "Black" },
    { name: "Bruno", vip: true, sector: "Black" },
    { name: "Carla", vip: false, sector: "Green" },
    { name: "Ana", vip: true, sector: "Black" },
    { name: "Julio", vip: false, sector: "Green" },
];
    
   const newList = list.map((lista) => {

    const newlista = {
        name: lista.name,
        vip: lista.vip,
        sector: lista.vip ? 'black' : 'Green'
    }
    return newlista
   })
 
console.log(newList)
//               //                   //
const students = [
    { name: "Rodolfo", testGrade: 7},
    { name: "Maria", testGrade: 5},
    { name: "João", testGrade: 8 },
    { name: "Bruno", testGrade: 9},
    { name: "Carla", testGrade: 3 },
    { name: "Ana", testGrade: 2 },
    { name: "Julio", testGrade: 10 },
];
/*const studentss = [
    { name: "Rodolfo", finalResult: "approved"},
    { name: "Maria", finalResult: "disapproved"},
    { name: "João", finalResult: "approved" },
    { name: "Bruno", finalResult: "approved"},
    { name: "Carla", finalResult: "disapproved"},
    { name: "Ana", finalResult: "disapproved" },
    { name: "Julio", finalResult: "approved"},
];*/

const resultStudents = students.map((student) =>{
      const newtest = student.testGrade >= 7 ?  ( "approved") : ( "disapproved")
      
    const studentsResult = {
        name: student.name,
        finalResult: newtest
    }
    return studentsResult
})
console.log(resultStudents)
