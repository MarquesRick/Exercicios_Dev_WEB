//for In usado para mostrar o incdice de cada array.

const notas = [6.9, 7.6, 9.6, 10.0, 2.6]

for(let i in notas){
    console.log(i, notas[i])
}

//For In mostrando os atributos de um objeto

const pessoa = {
    Nome: 'Henrique',
    Sobrenome: 'Marques',
    Idade: 23, 
    Profissão: 'Analista de Sistemas'
};

for(let atributo in pessoa){
    console.log(atributo +' = '+ pessoa[atributo])
}

