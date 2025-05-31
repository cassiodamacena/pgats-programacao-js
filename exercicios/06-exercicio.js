/**
  + Plano de atividades para o Pet
    Crie um script que defina o plano de atividades para os dogs durante a estadia. 
    O script vai receber o porte (pequeno, médio ou grande)
    E o tempo disponível para a atividade representado em minutos. 
    Exemplo: Pantera - Médio - 45

  + Use uma condicional para decidir o tipo de atividade com base no porte: 
  pequeno -> brincar dentro de casa
  médio -> caminhada no quarteirão
  grande -> correr no parque
  qualquer outro -> porte inválido

  + Depois, uma condicional para ajustar a mensagem de acordo com o tempo: 
    menor que 15 -> "atividade rápida: [atividade]"
    de 15 a 30 -> "tempo ideal: [atividade]"
    acima de 30 -> "hora da diversão: [atividade] 
*/

const pets = [
  { nome: 'Pantera', porte: 'médio', tempo: 14 },
  { nome: 'Rex', porte: 'grande', tempo: 15 },
  { nome: 'Fifi', porte: 'pequeno', tempo: 30 },
  { nome: 'Fifo', porte: 'pequeno', tempo: 31 }
]

// Decidir o tipo de atividade com base no porte
let atividade
let mensagem

function definirAtividade(porte) {
  switch (porte) {
    case 'pequeno':
      return `brincar dentro de casa`
    case 'médio':
      return `caminhada no quarteirão`
    case 'grande':
      return `correr no parque`
    default:
      return `porte inválido`
  }
}

function definirMensagem(tempo) {
  if (tempo < 15) {
    return `atividade rápida`
  } else if (tempo <= 30) {
    return `tempo ideal`
  } else {
    return `hora da diversão`
  }
}

function exibirAtividade(pet) {
  atividade = definirAtividade(pet.porte)
  mensagem = definirMensagem(pet.tempo)
  console.log('---------------------------------')
  console.log(`Pet: ${pet.nome} \nTempo: ${pet.tempo} min - ${mensagem} \nAtividade: ${atividade}`)
}


exibirAtividade(pets[0])
exibirAtividade(pets[1])
exibirAtividade(pets[2])
exibirAtividade(pets[3])