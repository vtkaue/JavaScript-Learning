/*
 - FUNCTION
 - CALCULADORA
 
 */

 const calculete = (number1, number2, operation) => {
     let result
     switch (operation) {
         case "+":
             result = number1 + number2
            break;
        case "-":
             result = number1 - number2
            break;
        case "*":
             result = number1 * number2
            break;
        case "/":
             result = number1 / number2
            break;
         default:
             result = number1 + number2
             break;

        
     }
     return result
 }
      console.log(calculete(2,3,"+"))