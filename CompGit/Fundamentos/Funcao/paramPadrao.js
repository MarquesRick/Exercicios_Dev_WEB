// Estrategia 1 para gerar valor padrão

function soma1(a, b, c){
    a = a || 1;
    b = b || 1; 
    c = c || 1;
    return a + b + c;
}

console.log(soma1())

console.log(soma1(), soma1(3), soma1(1, 2, 3) ,soma1(0, 0 , 0))

// Estrategia 2,3 e 4 para gerar valor padrão

function soma2(a, b, c){
    /*Segunda estrategia*/ a = a !== undefined ? a : 1 /**Caso a função também pegar o valor de NULL passar o parametro "!=" */
    /*Terceira estrategia*/ b = 1 in arguments ? b : 1 /*Alterar o valor do indice, conforme a posição do seu argumento*/
    /*Quarta estrategia*/ c = isNaN(c) ? 1 : c  /*Estrategia mais recomendável dentro as 4*/
    return a + b + c

}

console.log(soma2(), soma2(3), soma2(1, 2, 3) ,soma2(0, 0 , 0))

//valor padão ES2015 - mais recomendável e a menor forma

function soma3( a = 1, b = 1, c = 1){
    return a + b + c
}
console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0 ,0))


