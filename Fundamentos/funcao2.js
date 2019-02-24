//Armazenando uma função em uma variável 
const imprimirSoma = function(a,b){
    console.log(a+b)
}

imprimirSoma(2,3)

//Armazena uma função arrow em uma variavel

const soma = (a, b) => {
    return a+b;
}

console.log(soma(2,3));

//retorno implícito

const subtracao = (a, b) => a - b;
console.log(subtracao(2,5))

//const nota1;
//const nota2;

const total = (nota1,nota2) => nota1 + nota2;
console.log(total(3.5,6.5)/2);

const frase = (a,b,c) => console.log(a + b + c)
frase('legal', 'bacana' , 'bacanal');






