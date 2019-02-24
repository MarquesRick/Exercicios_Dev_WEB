function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min 
    return Math.floor(valor)
}

let opcao = 0

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log('Opcao escolhida foi %d ...', opcao)
} while (opcao != -1)

const user = {
    nome:'Henrique',
    idade: 23,
    sobrenome: 'Marques'
}
console.log('Ate a Proxima Sr. %s!', user.nome +' '+ user.sobrenome + '\n' + 
'Cuja idade é de: ' + user.idade)