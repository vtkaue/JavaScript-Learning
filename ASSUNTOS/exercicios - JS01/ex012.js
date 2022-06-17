//[x] Faça um programa onde toda vez que ele rodar, coloca na tela um número aleatório entre 1 e 100. 

function getRandomArbitrary(min, max) {
    return Math.random() * (100 - 1) + 1;
  }
  console.log(Math.floor(Math.random() * (100 - 1) + 10)) 