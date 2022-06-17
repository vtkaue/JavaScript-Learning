/* OPERADOR TERNARIO
 
?  => SE
:  => SE NÃO

 */

const balance = false
const isNotBlocked = true
const accounttExist = true

const transferOk = balance && isNotBlocked && accounttExist ? "TRANSFERENCIA REALIZADA" : "TRANSFERENCIA NEGADA"

console.log(transferOk)