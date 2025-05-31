/**
  + Validador de idade mínima para adoção
    Crie um script que verifique se um dog pode ser adotado com base na idade mínima definida, por exemplo, 2 anos.

  + Use os operadores adequados e exiba:
    Nome do dog, idade, se está apto ou não para adoção

  Extra: aplique uma regra com operador lógico para permitir que 
    se o cão for de pequeno porte, pode ser adotado independente da idade

  Exemplos:
    mínimo = 2

    idade 1 + porte M = nao
    idade 2 + porte M = sim, pela idade
    idade 2 + porte P = sim, pela idade
    idade 1 + porte P = sim, pelo porte
*/

const nome = 'Moana'
const idade = 0
const porte = 'P'

const idadeMinima = 2

var adocao

adocao = idade >= idadeMinima ? 'sim' : porte === 'P' ? 'sim' : 'não'
console.log('Adoção 01: ' + adocao)

adocao = idade >= idadeMinima || porte === 'P'
console.log('Adoção 02: ' + adocao)

function verificarSePodeSerAdotado(idade, porte) {
  const adocao = idade >= idadeMinima ? 'sim' : porte === 'P' ? 'sim' : 'não'
  console.log(`Pedido adoção pet ${idade} anos e porte ${porte}: ` + adocao)
}

console.log('\nVerificando se pode ser adotado:')
verificarSePodeSerAdotado(1, 'M')
verificarSePodeSerAdotado(2, 'M')
verificarSePodeSerAdotado(3, 'P')
verificarSePodeSerAdotado(1, 'P')