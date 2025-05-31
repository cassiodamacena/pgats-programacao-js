/*
    + Trabalho para Ponto Adicional
        Exercício Individual valendo 2pts extra
        Orientações:

    1) Programa sobre função:
        - Crie uma função que pega uma lista de inteiros e strings e retorna uma nova lista sem as strings.

    2) Programa Retornando Número de Vogais:
        - Retorne o número de vogais no texto fornecido. 
        Consideraremos a, e, i, o e u como vogais para este Kata. 
        O texto de entrada conterá apenas letras minúsculas e/ou espaços. 
        Letras acentuadas não fazem parte desse desafio.

    Envie seus código pelo link abaixo:
    https://forms.gle/9LJHfr2putBAy8LNA
*/


// 1) Função que remove strings de uma lista
function removeStringsFromList(lista) {
    return lista.filter(item => typeof item === 'number' && Number.isInteger(item));
}

// 2) Função que conta o número de vogais em um texto
function contarVogais(texto) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    let contador = 0;
    texto.forEach(item => {
        if (vogais.includes(String(item).toLowerCase()))
            contador++;
    });
    return contador;
}

const listaOriginal = [10, 'a', -1, 'b', 15, ' ', 25, 'c', -30, 'd', 10, 'Cassio', 'U', 10.5, 'e', 'O'];

console.log(
    '\nNa lista orinal: ' + listaOriginal +
    '\n\nOs número inteiros são: ' + removeStringsFromList(listaOriginal) +
    '\n\nE o número de vogais é: ' + contarVogais(listaOriginal)
);