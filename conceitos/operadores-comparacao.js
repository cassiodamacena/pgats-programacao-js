/*
  >   - maior que
  >=  - maior ou igual que
  <   - menor que
  <=  - menor ou igual que
  ==  - igualdade somente de valores
  !=  - diferença somente de valores
  === - igualdade de valores e tipo de dado
*/

// console.log(`10 > 5 = ${ 10 > 5 }`) // verdadeiro = true
// console.log("10 > 5 = ${ 10 > 5 }") // verdadeiro = true

console.log('Maior que')
console.log(10 > 5)   // verdadeiro
console.log(10 > 20)  // falso

console.log('Maior ou igual')
console.log(10 >= 10) // verdadeiro
console.log(10 >= 9)  // verdadeiro

console.log('Menor que')
console.log(10 < 5)   // falso
console.log(10 < 20)  // verdadeiro

console.log('Menor ou igual')
console.log(10 <= 10) // verdadeiro
console.log(10 <= 9)  // falso

console.log('Igualdade somente de valores')
console.log(1 == '1')           // verdadeiro
console.log(true == 1)          // verdadeiro
console.log(false == 1)         // falso
console.log(null == undefined)  // verdadeiro
console.log('' == 0)            // verdadeiro

console.log('Igualdade de valores e tipo de dado')
console.log(1 === '1')    // falso
console.log(true === 1)   // falso
console.log(false === 1)  // falso

console.log('Diferença de valores')
console.log(1 != 2)   // verdadeiro
console.log(1 !== 2)  // verdadeiro