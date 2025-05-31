
// Tentativas de fazer algo que resultar em falhas devem ser tratadas
try {
  console.log('Tentando alimentar o Pet...')
  throw new TypeError('pet nao quis alimento')
  // Tentativa de fazer uma conexão com o banco de dados
  // Execução de uma query SQL
} catch (excecao) {

  // Realizar o tratamento da exceção
  // Exibir/registrar o melhor descrição possível do erro
  console.log('')
  console.log('Exception: ' + excecao.name)
  console.log('Message  : ' + excecao.message)
  console.log('')
  // Capturar o erro e realizar uma ação alternativa 

} finally {
  console.log('Trecho que sempre será executado')

  // Fechar conexões com banco de dados (garantir que recursos sejam liberados)
}