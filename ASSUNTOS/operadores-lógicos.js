/* OPERADORES LÓGICOS

&&  -> E
    true && true = true
    true && false = false
    false && false = false

||  ->
    true || true = true
    true || false = true
    false || false = false
    
!  ->
   !true = false
   !false = true    
 */

   console.log( !(!(true && true && true) && !(false && true || true)) )