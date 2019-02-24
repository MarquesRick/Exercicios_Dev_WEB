function tratarErroELancar(erro) {
    //throw new error('.....')
    //throw 10
    throw {     //coloca uma info para o usuário
       nome: erro.name,
       msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {

    try {       //código que pode dar erro.

        console.log(obj.name.toUpperCase() + '!!!')

    } catch (e) {       //tratar o erro

        tratarErroELancar(e)

    } finally {         //bloco que será executado tanto erro ou nã
        console.log('\nVolte sempre no nosso Site..')
    }
}

const obj = { name: 'Henrique'}
imprimirNomeGritado(obj)
