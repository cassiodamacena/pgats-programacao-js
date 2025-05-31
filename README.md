# pgats-programacao-js

## Atividades

A pasta [`atividades`](atividades/) contém exercícios práticos para reforço dos conceitos de programação em JavaScript, incluindo manipulação de listas, funções e strings.

### Exercícios

- **Remover Strings de uma Lista**  
  Função que recebe uma lista contendo inteiros e strings e retorna uma nova lista apenas com os inteiros.  
  Arquivo: [`lista-inteiros-string.js`](atividades/lista-inteiros-string.js)

- **Contar Vogais em um Texto**  
  Função que retorna o número de vogais (a, e, i, o, u) em um texto fornecido.  
  Arquivo: [`lista-inteiros-string.js`](atividades/lista-inteiros-string.js)

## Trabalho Final

O trabalho final está implementado em [`trabalho.js`](trabalho.js) e testado em [`test/trabalho-final.js`](test/trabalho-final.js).

### Funcionalidades

- **geradorDeTagsDeIdentificacao**  
  Gera uma tag de identificação para o pet, retornando o nome em letras maiúsculas.

- **verificarSePodeSerAdotado**  
  Verifica se um pet pode ser adotado com base na idade e porte.

- **calcularConsumoDeRacao**  
  Calcula o consumo diário de ração de um pet com base no peso.

- **decidirTipoDeAtividadePorPorte**  
  Decide o tipo de atividade adequada para um pet de acordo com o porte.

- **buscarDadoAsync**  
  Função assíncrona que simula a busca de um dado e retorna um valor após um atraso.

### Testes

Os testes automatizados para essas funções estão em [`test/trabalho-final.js`](test/trabalho-final.js), utilizando o framework Mocha e a biblioteca de asserções Node.js `assert`.

Para rodar os testes:

```sh
npm install

npm test
ou
npx mocha
```

Autor: `Cassio P. Damacena`
