/**
  enquanto (pet não estiver cansado); faca {
      dar uma volta na quadra
    } 

*/

let voltasAteFicarCansado = 5
let quantidadeVoltasAtual = 0

while (quantidadeVoltasAtual < voltasAteFicarCansado) {
  console.log(`Dar uma volta na quadra`)
  console.log(`Voltas dadas: ${quantidadeVoltasAtual + 1}`)
  quantidadeVoltasAtual++
}