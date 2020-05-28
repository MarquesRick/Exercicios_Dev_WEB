let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 0
console.log(!!isAtivo)/*transformar o valor em boolean
*uma negação (!) será o contrario do que é real
*duas negações (!!) o que é real
*/
console.log('os verdadeiros...')
console.log(!!3)
console.log(!!1)
console.log(!!-1)
console.log(!!'')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)//Not a Number
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Pra finalizar...')
console.log(!!('' || null || 0 || ''))

let nome = 'Henrique'
console.log(nome || 'Desconhecido')
