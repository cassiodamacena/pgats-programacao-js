/**
  + adição
  - subtração
  * multiplicação
  / divisão
  % resto
  ** exponencial
*/

console.log(1 + 1)  // 2
console.log(10 - 7) // 3
console.log(2 * 2)  // 4

console.log(11 / 2) // 5.5
console.log(11 % 2) // 1 - resto da divisao

console.log(4 ** 4) // 256 - exponencial

console.log(2 + 3 * 4)    //  Precedencia - multiplicao, adicao
console.log((2 + 3) * 4)  //  Precedência - dentro do parenteses, depois o que está fora

console.log(11 / 2)             // 5.5
console.log(parseInt(11 / 2))   // 5.5 -> 5

// Arredondamentos:
console.log('Arredonda para baixo: 5.8')
console.log(Math.floor(5.8))

console.log('Arredonda para cima: 5.8')
console.log(Math.ceil(5.8))

console.log('Arredonda para o mais próximo: 5.8, 5.4, 5.5')
console.log(Math.round(5.8))
console.log(Math.round(5.4))
console.log(Math.round(5.5))

console.log('Truncamento com toFixed decimal: 2.123123')
const valorDecimal = 2.123123
console.log(valorDecimal.toFixed(3))
