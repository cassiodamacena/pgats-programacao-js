import assert from 'node:assert';

import {
    geradorDeTagsDeIdentificacao,
    verificarSePodeSerAdotado,
    calcularConsumoDeRacao,
    decidirTipoDeAtividadePorPorte,
    buscarDadoAsync
} from '../trabalho.js';

describe('Testes da disciplina - fundamentos JS', () => {

    it('QUANDO informar um nome para o Pet, DEVE ser impresso na tag com letras maiúsculas', () => {
        assert.strictEqual(geradorDeTagsDeIdentificacao('Pantera'), 'PANTERA');
        assert.strictEqual(geradorDeTagsDeIdentificacao('Moana'), 'MOANA');
        assert.strictEqual(geradorDeTagsDeIdentificacao('PITUXITA'), 'PITUXITA');
        assert.strictEqual(geradorDeTagsDeIdentificacao('pIPOK'), 'PIPOK');
    });

    it('QUANDO a idade = 1 + porte M, DEVE ser permitida a adoção', () => {

        assert.strictEqual(verificarSePodeSerAdotado(1, 'M'), true)
        assert.strictEqual(verificarSePodeSerAdotado(0, 'M'), false)
        assert.strictEqual(verificarSePodeSerAdotado(1, 'P'), false)
        assert.strictEqual(verificarSePodeSerAdotado(1, 'G'), false)
        assert.strictEqual(verificarSePodeSerAdotado(2, 'M'), false)
    })

    it('QUANDO o peso = 14.5, DEVE ser retornado 4350 gramas para o consumo diário', () => {
        assert.strictEqual(calcularConsumoDeRacao('Pitoco', 1, 14.5), 4350)
        assert.strictEqual(calcularConsumoDeRacao('Pitoco', 1, 1), 300)
        assert.strictEqual(calcularConsumoDeRacao('Pitoco', 1, 0.5), 150)
        assert.strictEqual(calcularConsumoDeRacao('Pitoco', 1, 0.1), 30)
    });

    it('QUANDO o porte = pequeno, DEVE ser retornada a atividade adequada', () => {
        assert.strictEqual(decidirTipoDeAtividadePorPorte('pequeno'), 'brincar dentro de casa')
        assert.notStrictEqual(decidirTipoDeAtividadePorPorte('medio'), 'brincar dentro de casa')
        assert.notStrictEqual(decidirTipoDeAtividadePorPorte('grande'), 'brincar dentro de casa')
    });

    it('QUANDO buscar dado de exemplo, DEVE retornar um valor de forma assíncrona', async () => {
        const resultado = await buscarDadoAsync();
        assert.strictEqual(resultado, 'Pipoca');
    });

});