const valores = [7.7, 8.9, 6.3, 9.2]
console.log('Resultados = ' + valores[0] + ' | ' + valores[3])

valores[4] = 10 //atribuição de valor no indice 4
console.log(valores)
console.log(valores.length)//retorna a qt de indices que tem no array

valores.push(false, null)//coloca valores no array
console.log(valores)

console.log(valores.pop())//exclui o ultimo valor de um array
console.log(valores)

delete valores [0]
console.log(valores)

console.log(typeof valores)
console.log('hello')
