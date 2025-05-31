

// async - Assíncrono
async function exibirNomeDogFormatado(nome) {
    return nome.toUpperCase()
}

// await - Esperar
console.log(
    await exibirNomeDogFormatado('Pipoca')
)
