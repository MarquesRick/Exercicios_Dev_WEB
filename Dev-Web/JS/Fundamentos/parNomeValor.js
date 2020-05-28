const saudacao = 'opa'; //contexto léxico 1

function exec() {
    const saudacao = 'Fala' //contexto léxico 2
    return saudacao;
}

//Objetos são grupos aninhads de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereço: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);
