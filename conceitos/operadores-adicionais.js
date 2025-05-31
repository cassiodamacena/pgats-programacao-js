/**
  -- decremento
  ++ incremento
  ?  ternário
*/

// Incremento
let pesoDoDog = 10
console.log(pesoDoDog)

pesoDoDog++
console.log(pesoDoDog)

// Decremento
let pesoDoTutor = 100
console.log(pesoDoTutor)

pesoDoTutor--
console.log(pesoDoTutor)

// ternário
// const porte = pesoDoDog <= 10 ? 'pequeno' : 'médio' 

const pesoDoDogOperadorTernario1 = 10
const pesoDoDogOperadorTernario2 = 20
const pesoDoDogOperadorTernario3 = 21
let porte
{/* <condicao> ? <acao se verdadeiro> : <acao se falso> */ }
//       if (pesoDoDogOperadorTernario <= 10) = Pequeno -- else if pesoDoDogOperadorTernario <= 20 = Medio -- else = Grande
porte = pesoDoDogOperadorTernario1 <= 10 ? 'Pequeno' : pesoDoDogOperadorTernario1 <= 20 ? 'Médio' : 'Grande'
console.log(`O porte do dog é ${porte}`)

porte = pesoDoDogOperadorTernario2 <= 10 ? 'Pequeno' : pesoDoDogOperadorTernario2 <= 20 ? 'Médio' : 'Grande'
console.log(`O porte do dog é ${porte}`)

porte = pesoDoDogOperadorTernario3 <= 10 ? 'Pequeno' : pesoDoDogOperadorTernario1 <= 20 ? 'Médio' : 'Grande'
console.log(`O porte do dog é ${porte}`)