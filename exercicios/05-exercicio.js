/**
  + Classificador de porte automático
    Muitos tutores não fazem ideia do porte de seu Dog. 
    Crie um script que classifique o porte com base no peso de forma simplificada, sendo:
    Até 10kg -> Pequeno; acima disso -> Médio

  Use o operador ternário para determinar o porte. 
  Exiba: Nome, Peso e Porte classificado

  Extra: transforme a lógica em uma função (da forma que conseguir)
  Extra: adicionar mais condições exemplo: >= 50 -> porte grande
*/

const nome = `Mel`
const peso = 11

const porte = peso <= 10 ? 'pequeno' : 'médio'
imprimirResultados(nome, peso, porte)

// ALTERNATIVA com a função (Extra)
function classificarPortePorPeso(nome, peso) {
  const porte = peso <= 10 ? 'Pequeno' : peso <= 50 ? 'Médio' : 'Grande'
  imprimirResultados(nome, peso, porte)
}

classificarPortePorPeso('Vulcano', 10)
classificarPortePorPeso('Roberval', 11)
classificarPortePorPeso('Moana', 51)
classificarPortePorPeso('Panqueca', 50)


// Função para abstrair a impressão dos resultados
function imprimirResultados(nome, peso, porte) {
  console.log(`------`)
  console.log(`Nome: ${nome}`)
  console.log(`Peso: ${peso}`)
  console.log(`Porte: ${porte}`)
  console.log(`------`)
}