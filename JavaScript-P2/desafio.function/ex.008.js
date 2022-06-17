/*
[x] Escreva um programa onde, você cria uma função geradora de desconto. 
- A função aceita 4 parâmetros (Nome do cliente, valor total da compra, um booleano que diz se é a primeira compra do cliente ou não, um booleando que diz se o cliente vai pagar a vista ou não)
*/


function  calculateDiscount(name, value, isFirstPurchase, isCashPayment) {
    if(isFirstPurchase && isCashPayment){
          if(value > 1000){
              console.log("Você recebe 30% de desconto")
          }
          else if (value < 500){
              console.log("Você recebe 20% de desconto")
          }
          else{
              console.log("Você recebe 15% de desconto")
          }
    }
    if(isFirstPurchase && !isCashPayment){
        if(value > 1000){
            console.log("Você recebe 30% de desconto")
        }
        else if (value < 500){
            console.log("Você recebe 20% de desconto")
        }
        else{
            console.log("Você recebe 15% de desconto")
        }
    }
    if(!isFirstPurchase && isCashPayment){
        if(value > 1000){
            console.log("Você recebe 30% de desconto")
        }
        else if (value < 500){
            console.log("Você recebe 20% de desconto")
        }
        else{
            console.log("Você recebe 15% de desconto")
        }
    }
    if(!isFirstPurchase && !isCashPayment){
        if(value > 1000){
            console.log("Você recebe 30% de desconto")
        }
        else if (value < 500){
            console.log(Math.floor(Math.random() * (20 - 10) + 1)+'%')
        }
        else{
            console.log("Você recebe 15% de desconto")
        }
    }
    
}

calculateDiscount("victor", 1200, true, true)



