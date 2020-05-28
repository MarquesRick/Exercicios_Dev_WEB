function rand([min = 0, max = 1000])
{
    if(min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40])) //especifica o valor min, max
console.log(rand([992])) //especifica o valor Min = 992 e assume o valor max padrão [max = 1000]
console.log(rand([, 10])) //assume o valor min padrão [min = 0]
console.log(rand([])) //assume o min, max padrão da funtion rand [min = 0, max = 1000]
//Não irá apresentar, pois não foi especificado o array na function rand([]) 
//console.log(rand())

console.log(rand([100, 96])) //Assumiu o valor min sendo max (igual no IF)