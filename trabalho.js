/**
 * Função que recebe o nome de um pet e retorna uma tag de identificação
 * com o nome em letras maiúsculas.
 * @param {string} nome - Nome do pet.
 * @returns {string} - Nome do pet em letras maiúsculas.
 */
function geradorDeTagsDeIdentificacao(nome) {
  return nome.toUpperCase()
}


/**
 * Função que verifica se um pet pode ser adotado com base na idade e porte.
 * @param {number} idade - Idade do pet.
 * @param {string} porte - Porte do pet ('P', 'M', 'G').
 * @returns {boolean} - Retorna true se o pet pode ser adotado, caso contrário false.
 */
function verificarSePodeSerAdotado(idade, porte) {
  // Para ser adotado, o pet deve ter idade igual a 1 e porte igual a 'M'
  // Não foi aplicada uma regra geral como no exercício (demais situações não especificadas conforme a descrição do teste, retornam false)
  return idade === 1 && porte === 'M';
}

/**
 * Função que calcula o consumo diário de ração de um pet com base no peso.
 * @param {string} pet - Nome do pet (não utilizado no cálculo, mas pode ser usado para identificação).
 * @param {number} idade - Idade do pet (não utilizado no cálculo, mas pode ser usado para identificação).
 * @param {number} peso - Peso do pet em kg.
 * @returns {number} - Retorna o consumo diário de ração em gramas.
 * @throws {Error} - Lança um erro se o peso for menor ou igual a zero.
 */
function calcularConsumoDeRacao(pet, idade, peso) {
  // A fórmula para calcular o consumo diário de ração é: peso * gramasPorKg
  // O resultado deve ser retornado em gramas
  const gramasPorKg = 300; // 300 gramas por kg
  if (peso <= 0) {
    throw new Error('Peso deve ser maior que zero');
  }
  const gramasPorDia = peso * gramasPorKg;
  return Math.round(gramasPorDia);
}

/**
 * Função que decide o tipo de atividade adequada para um pet com base no porte.
 * @param {string} porte - Porte do pet ('pequeno', 'médio', 'grande').
 * @returns {string} - Retorna a atividade adequada para o porte do pet.
 */
function decidirTipoDeAtividadePorPorte(porte) {
  switch (porte) {
    case 'pequeno':
      return 'brincar dentro de casa';
    case 'médio':
      return 'caminhada no quarteirão';
    case 'grande':
      return 'correr no parque';
    default:
      return 'porte inválido';
  }
}

/** 
 * Função assíncrona que simula a busca de um dado e retorna um valor após um atraso.
 * @returns {Promise<string>} - Retorna uma Promise que resolve com o valor 'Pipoca'.
 */
function buscarDadoAsync() {
  // Retorna uma Promise que resolve com o valor 'Pipoca' de forma assíncrona
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Pipoca');
    }, 1000); // Simula um atraso de 1 segundo
  });
}


export {
  geradorDeTagsDeIdentificacao,
  verificarSePodeSerAdotado,
  calcularConsumoDeRacao,
  decidirTipoDeAtividadePorPorte,
  buscarDadoAsync
}