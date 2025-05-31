/**
  + Contador de satisfação de passeio
    Crie um script que avise quando o Dog já passeou o suficiente. 
    Para saber, vamos considerar que ele se sentirá satisfeito somente a partir de 5 voltas na quadra.

  Use a estrutura de repetição while.
  Exiba: Qual o número da volta atual e Quando o dog está satisfeito

  Extra: transforme a lógica em uma função (da forma que conseguir)
*/

const voltasParaDogFicarSatisfeito = 5
let volta = 0

while (volta <= voltasParaDogFicarSatisfeito) {
  console.log(`Volta de nº ${volta + 1} com o Pitoco`)
  console.log(`Pitoco ainda não está satisfeito!`)
  volta++
}
console.log(`Acaboooooou o passeio, Pitoco!`)
console.log(`----------------------------`)


// Extra: transformando a lógica em uma função
function verificarSeEstaSatisfeito(pet, voltas = 3) {
  const voltasParaDogFicarSatisfeito = voltas
  let volta = 0
  while (volta < voltasParaDogFicarSatisfeito) {
    console.log(`Volta de nº ${volta + 1} com o ${pet}`)
    console.log(`Pitoco ainda não está satisfeito!`)
    volta++
  }
  console.log(`Acaboooooou o passeio, ${pet}!`)
}

verificarSeEstaSatisfeito('Moana', 10)