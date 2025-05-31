// Funções de seta / flecha: => 

// Função com parametro, sem retorno
const exibirNomeDoDog = (nome) => {
  console.log(nome)
}

// Função com parametro + valor default, sem retorno
const exibirPorteDoDog = (porte = 'ND') => {
  console.log(porte)
}

// Função com parametro e com retorno
const obterNomeDoDogFormatado = (nome) => {
  return nome.toUpperCase()
}

const obterObjetoDog = () => {
  return {
    nome: 'Bailey Maria',
    peso: 11.5,
    dogIrmao: {
      nome: 'Billy'
    },
    adotado: true
  }
}

const listarObjetosDog = () => {
  return [
    { nome: 'Bailey Maria', peso: 11.5 },
    { nome: 'Tigre branco', peso: 13.8 }
  ]
}

const listarNomesDeDogs = () => {
  const nomes = ['Lessi', 'Bolinha', 'Pituxinha']
  console.log('Passou pela função listarNomesDeDogs')
  return nomes
}

// Arrow function sem bloco + com return 'automatico'
const dobrar = (numero) => numero * 2
const saudacoes = (nome) => 'Olá, ${nome}!'

exibirNomeDoDog("Moana")
exibirPorteDoDog()
console.log(obterNomeDoDogFormatado("Porko loko"))
console.log(obterObjetoDog())
console.log(listarObjetosDog())
console.log(listarNomesDeDogs())

console.log('--------')

listarNomesDeDogs()

const nomesDeDogs = listarNomesDeDogs()



function filtrarNumeros(lista) {
  return lista.filter(item => typeof item === 'number');
}

console.log(filtrarNumeros([1, 'a', 2, 'b', 3])); // [1, 2, 3]


// Mocha 
// it('Nome do teste', { tags: 'critico' }, function () {
//   // implementacao do teste
// })
