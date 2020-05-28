// Função sem retorno
function imprimirSoma(a, b)
{
    console.log(a + b)
}

imprimirSoma(2, 3)

// Função com retorno
function soma(a, b = 1)
{
    return a + b
}

console.log(soma(2,3))//Atrinui 2 ao A e 3 ao B
console.log(soma(2))//Atribui o 2 ao valor de A, pois o valor de B ja foi definido na função acima
