const imprimirResultado = function(nota) {
    if(nota >= 7){
        console.log('Aprovado')
        if(nota <= 4){
            console.log('Reprovadissimo')
        }
    } else {
        console.log('Reprovado')
    }
}

imprimirResultado(10)
imprimirResultado(5)
imprimirResultado(3)
