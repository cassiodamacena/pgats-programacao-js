/**
  &&  - E / AND
  ||  - OU / OR
  !   - NÃO / NOT
*/

console.log('&& - E / AND')
const nomeDog = "Pipoca abc"
const nomePossuiApenasUmaPalavra = nomeDog.split(" ").length === 2
const nomePossuiAteDezCaracteres = nomeDog.length <= 10
console.log(nomePossuiApenasUmaPalavra && nomePossuiAteDezCaracteres) // true

console.log('|| - OU / OR')
const dog = { adotado: false, peso: 5.3 }
console.log(dog.adotado || dog.peso < 10) // verdadeiro
console.log(true || true)     // verdadeiro
console.log(true || false)    // verdadeiro
console.log(false || true)    // verdadeiro
console.log(false || false)   // falso

console.log('!   - NÃO / NOT')
console.log(true)   // verdadeiro
console.log(!true)  // falso