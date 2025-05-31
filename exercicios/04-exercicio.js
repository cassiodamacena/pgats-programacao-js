/**
  + Calculadora de ração diária
    Crie um script que receba o peso do dog em kg + estoque atual de ração em gramas. 
    Calcule a quantidade diária de ração com base na seguinte fórmula: gramas por dia = Peso x 30 gramas

  Exiba: Nome do dog, Peso, Quantidade de ração recomendada por dia e Quantos dias o estoque atual vai durar
*/

// Simplificado sem função

const nome = `Porkinha`
const peso = 10
const estoque = 5000

const gramasPorDia = peso * 30
const duracaoEstoque = estoque / gramasPorDia
imprimirResultados(nome, peso, gramasPorDia, duracaoEstoque)

// Melhorado com função

function calcularConsumoDeRacao(nome, peso, estoque) {
  const gramasPorDia = peso * 30
  const duracaoEstoque = Math.floor(estoque / gramasPorDia)
  imprimirResultados(nome, peso, gramasPorDia, duracaoEstoque)
}

calcularConsumoDeRacao('Mel', 4.2, 15000)
calcularConsumoDeRacao('Moana', 1, 2000)
calcularConsumoDeRacao('Pandora', 14.5, 5000)


// Função para abstrair a impressão dos resultados
function imprimirResultados(nome, peso, gramasPorDia, duracaoEstoque) {
  console.log(`----------------------`)
  console.log('Estoque de ração atual: ' + estoque + 'g')
  console.log(`Nome do dog: ${nome}`)
  console.log(`Peso: ${peso}kg`)
  console.log(`Gramas por dia: ${gramasPorDia}g`)
  console.log(`O estoque vai durar: ${duracaoEstoque} dias`)
  console.log(`----------------------`)
}