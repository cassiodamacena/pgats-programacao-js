
const peso = 31

switch (peso) {
  case 10:
    console.log('P')
    break
  case 20:
    console.log('M')
    break
  case 30:
    console.log('G')
    break
  case 40:
    console.log('G')
    break
  default:
    console.log('ND')
}

// Forçar o uso do switch com true:
switch (true) {
  case peso <= 10:
    console.log('P');
    break;
  case peso <= 20:
    console.log('M');
    break;
  case peso <= 30:
    console.log('G');
    break;
  case peso <= 35:
    console.log('GG');
    break;
  default:
    console.log('ND');
}