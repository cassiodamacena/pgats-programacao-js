/**
  + Gerador de tags de identificação
    Crie um script para gerar a etiqueta (tag) de identificação que será presa na coleira de um cachorro no abrigo. 
    O dono irá informar nome, idade, peso, raça e se é adotado ou não.

  A tag deve ter:
    O nome em letras maiúsculas
    A raça com a primeira letra maiúscula
    Peso
*/

const dog = {
  nome: "Moana", raca: "vira-lata",
  idade: 1,
  peso: 10.5,
  adotado: true
}

const dogTag = {
  nome: dog.nome.toUpperCase(),
  raca: dog.raca.slice(0, 1).toUpperCase() + dog.raca.slice(1).toLowerCase(),
  peso: dog.peso
}

console.table(dogTag)
console.log(`Nome: ${dog.nome.toUpperCase()} - Raça ${dog.raca.slice(0, 1).toUpperCase() + dog.raca.slice(1).toLowerCase()} - Peso: ${dog.peso}`)

