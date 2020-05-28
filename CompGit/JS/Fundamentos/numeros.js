const peso1 = 1.0
const peso2 = Number('2.0')//função NUMBER declara em formato de String porém é uma forma de declarar var/const tambem

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) //compara se o valor da constante é realmente um inteiro e informa True or False
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
console.log(total)

const media = total / (peso1 + peso2)
console.log(media.toFixed(2))//Fixa o tanto de casas decimais que vc quer representar o numero
console.log(media.toString())//Converte a constante em String
console.log(media.toString(2))//Converte a constante em binario
console.log(typeof media)