// Função nomeada, com parametro, sem retorno
function exibirNomeDoDog(nome) {
  console.log(nome)
}

// Função nomeada, com parametro + valor default, sem retorno
function exibirPorteDoDog(porte = 'ND') {
  console.log(porte)
}

// Função nomeada, com parametro, com retorno
function obterNomeDoDogFormatado(nome) {
  return nome.toUpperCase()
}

function obterObjetoDog() {
  return {
    nome: 'Bailey Maria',
    peso: 11.5,
    dogIrmao: {
      nome: 'Billy'
    },
    adotado: true
  }
}

function listarObjetosDog() {
  return [
    { nome: 'Bailey Maria', peso: 11.5 },
    { nome: 'Tigre branco', peso: 13.8 }
  ]
}

function listarNomesDeDogs() {
  const nomes = ['Lessi', 'Bolinha', 'Pituxinha']
  console.log('Passou pela função listarNomesDeDogs')
  return nomes
}


exibirNomeDoDog("Moana")
exibirPorteDoDog()
console.log(obterNomeDoDogFormatado("Porko loko"))
console.log(obterObjetoDog())
console.log(listarObjetosDog())
console.log(listarNomesDeDogs())

console.log(`--------`)

listarNomesDeDogs()

const nomesDeDogs = listarNomesDeDogs()

