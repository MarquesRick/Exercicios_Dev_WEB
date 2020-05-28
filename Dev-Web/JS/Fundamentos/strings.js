const escola ="Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(2))
console.log(escola.charCodeAt(3))//Retorna o valor em Unicode
console.log(escola.indexOf('3'))//Retorna em qual indice esta o caracter 3
console.log(escola.substring(1))//Retorna as letras apartir do primeiro indice(od3r)
console.log(escola.substring(0, 3))//Retorna as letras do indice 0 ao indice 3, porém sem retornar o indice 3 e sim o 2
//valor literal = valor que não foi atribuida em constante ou variavel
console.log('Escola '.concat(escola).concat('!'))//Retorna o valor literal somado com o valor da variavel informada + outro valor literal
console.log(escola.replace(3, 'e'))//substitui o '3' pela letra 'e'     
console.log(escola.replace(/\d/, 'e'))//se usar /\d/ = substitui todos os numeros pela letra informada ('e')
console.log(escola.replace(/\w/g, 'e'))//Se usar '/\w/g' substitui tudo pela lera informada ('e')
console.log('Ana, Victor, José'.split(','))//Split utiliza agrupa os valores em Arrays (',') parametro que será utilizada para montar as separações para os Arrays



