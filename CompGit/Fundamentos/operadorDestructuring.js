//Operador introduzido na versão de 2015(ES 2015)
//Operador que extrai algo de um objeto/array etc..
//forma 1 de classe/objeto usa {}
//Forma 2 array usa []

const pessoa = 
{
    nome: 'Ana',
    idade: 15,
    endereço: 
    {
        logradouro: 'Rua ABC',
        numero: 1800
    }
}

const { nome, idade } = pessoa; //Representa o operador destructuring
console.log(nome, idade);

const { nome: n, idade: i} = pessoa; //Forma para se tirar dois atributos e renomear a variavel. ex: nome = n, idade = i;
console.log(n, i);

const { sobrenome = null, bemHumorado = true} = pessoa; //Tirando atributo que nao tem dentro do objeto; Atribuido o valor padrão = true, para nao retornar undefined
console.log(sobrenome, bemHumorado);

const { endereço: { logradouro, numero, cep = null}} = pessoa;
console.log(logradouro, numero, cep);//CEP não existe e vai constar Undefined
