const pessoa = {
    saudacao: "Bom dia!",
    nome: "Henrique",
    sobrenome: "Marques",
    falar(){
        console.log(this.saudacao)
    },
    fnome(){
        console.log(this.nome + " " + this.sobrenome)
    }
}

pessoa.falar()
pessoa.fnome()
const falar = pessoa.falar
falar() //Conflito entre paradigmas: funcional e POO

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

const fnome = pessoa.fnome.bind(pessoa)
fnome()

