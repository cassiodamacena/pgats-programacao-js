/**
  + Validador de nomes para as tags
    Alguns donos estão registrando os dogs com nomes mal formatados. 
    Crie um script para limpar e padronizar os nomes.

  + Aplique as formatações e exiba:
    O nome original, como foi cadastrado
    O nome formatado

Extra: aplique uma regra que confira se o nome informado possui apenas uma palavra. Exiba se o nome é válido ou não.

Exemplos:
  - nomes válidos: Pipoca, Guaraná, Paçoca
  - nomes inválidos: Peggy Carter, Pantera Negra
*/

const listaDogs = ["tH   oR@!%  ", '   Ba!ley Mari@    ', 'Doguinho123', 'Pipoca', 'Guaraná', 'Paçoca', 'Peggy Carter', 'Pantera Negra']

listaDogs.forEach((dog, i) => {
  dog = dog.trim()
  dog = removerCaracteresEspeciais(dog)
  dog = tornarAPrimeiraLetraMaiuscula(dog)
  console.log("-------------------------")
  console.log(`Dog ${i + 1}: ${dog}`);
  verificarSeONomeEValido(dog) ? console.log(`Status: é um nome válido`) : console.log(`Status: não é um nome válido`)

  dog = removerEspacosEntreAPalavra(dog)
  console.log(`Nome formatado: ${dog}`);
});

// Funções auxiliares
function removerCaracteresEspeciais(nome) {
  return nome.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
}

function removerEspacosEntreAPalavra(nome) {
  return nome.replace(/\s+/g, "")
}

function tornarAPrimeiraLetraMaiuscula(nome) {
  return nome.charAt(0).toUpperCase() + nome.slice(1, nome.length).toLowerCase()
}

function verificarSeONomeEValido(nome) {
  return nome.split(" ").length === 1
}