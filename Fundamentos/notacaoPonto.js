console.log(Math.ceil(6.1))
const obj1 = {}
obj1.nome = 'bola'
console.log(obj1.nome)

function Obj(nome)
{
    this.nome = nome;
    this.exec = function()
    {
        console.log(obj1.nome + ' ' + obj2.nome)
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj1)
console.log(obj2)
console.log(obj3.nome)
obj3.exec()

function Carro(marca)
{
    this.marca = marca;
}

const tipo1 = new Carro('Honda')
const tipo2 = new Carro('Mitsu')
const tipo3 = new Carro('Chevrolet')
const tipo5 = new Carro('Honda')
//tipo1.marca = 'Honda'
tipo5.nome = 'Civic'
tipo1.nome = 'City'
tipo2.nome = 'Skyline'
tipo3.nome = 'Celta'
console.log(tipo1)
console.log(tipo2)
console.log(tipo3)
console.log(tipo5)
