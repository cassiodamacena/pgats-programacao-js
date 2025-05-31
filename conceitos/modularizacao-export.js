/** 
  Sintaxe CommonJS (commonjs) (até 2019 ~ 2020):
    module.exports = {} / require('') 
  
  ESM (module) - Ecmascript Standard Modules (> 2019)
    export {} / import 
*/

// const nomePet1 = `Moana`
// console.log(`O nome do pet é ${nomePet1}`)

// const nomePet2 = `Magali`
// console.log(`O nome do pet é ${nomePet2}`)

// const nomePet3 = `Abel`
// console.log(`O nome do pet é ${nomePet3}`)

const BRINQUEDOS = ['Osso', 'Peteca', 'Chocalho', 'Bola', 'Corda']

function exibirNomePet(paramNomePet = 'Sem nome') {

  if (paramNomePet === undefined) {
    console.log()
    return
  }
  console.log(`O nome do pet é ${paramNomePet}`)
}

function exibirIdade(paramIdadePet) {
  console.log(`Idade do Pet é ${paramIdadePet}`)
}

//  export {} / import 
export { exibirNomePet, exibirIdade, BRINQUEDOS }