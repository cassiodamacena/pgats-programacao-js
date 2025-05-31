/**
  + Entregador de brinquedos para os dogs
    Dado que você tenha uma lista de brinquedos com: Bola, Osso, Corda, Sino
    Crie um script que passe pela lista de brinquedos e entregue um por vez.
    Exiba o nome de cada brinquedo que for entregue.

  Use a estrutura de repetição forEach.

  Extra: transforme a lógica em uma função (da forma que conseguir)
*/

// Simplificado
const brinquedos = ['Bola', 'Osso', 'Corda', 'Sino']

brinquedos.forEach(brinquedo => {
  console.log(`Entregando o brinquedo - ${brinquedo}`)
})
console.log(`Todos brinquedos foram entregues! \n\n`)


// Com Função
function entregarBrinquedos(brinquedos) {
  brinquedos.forEach((brinquedo, i) => {
    console.log(`Entregando brinquedo ${i + 1}: ${brinquedo}`);
  });
}

entregarBrinquedos(brinquedos)
