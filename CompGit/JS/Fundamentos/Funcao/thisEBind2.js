/*function Pessoa(){

    this.idade = 0

    setInterval(function(){ //Funçaõ para executar algum comando em 'X'milesegundos
        this.idade++
        console.log(this.idade)

    }.bind(this), 1000) //Ctrl + Alt + M para a execução 
}

new Pessoa */

function Pessoa(){

    this.idade = 0

    const self = this
    setInterval(function(){ //Funçaõ para executar algum comando em 'X'milesegundos
        self.idade++
        console.log(self.idade)

    }/*bind(this), 1000) Ctrl + Alt + M para a execução */, 1000)
}

new Pessoa 

Teste2