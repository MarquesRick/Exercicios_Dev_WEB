//calculando area de uma circunferencia
//criando exponenciação com Math

const raio = 5.6
//Math.PI usa atomaticamente o valor de PI (3,1416)
//Math.pow (power) calcula a potencia. neste caso foi informamos que seria o valor de raio sobre 2(raio, 2)
const area = Math.PI * Math.pow(raio, 2)
console.log(area)
console.log(typeof Math)//Math é um objeto