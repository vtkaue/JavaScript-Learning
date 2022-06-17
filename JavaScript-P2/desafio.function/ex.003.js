/*
[x] Escreva um programa onde, você chame uma função, e ela diga a hora exata!
*/ 

 function time(){
     today=new Date();
     h=today.getHours();
     m=today.getMinutes()
     s=today.getSeconds();
     console.log(h+":"+m+":"+s)
     return
 }
 time()

 /* METODO 2
  HORARIO LOCAL =>  console.log(new Date().toLocaleTimeString("pt-BR"))
 MES => console.log(new Date().getMonth()+1)
 
 */