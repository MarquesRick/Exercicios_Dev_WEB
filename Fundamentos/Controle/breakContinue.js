//Break atua com o bloco mais proximo (while, for ou switch)

const nums = [1,2,3,4,5,6,7,8,9,10]

for(let x in nums){
    if(x == 5){
        break       //após o indice 5,, ele sai da estrutura de laço. 
    }
    console.log(x + ' = ' + nums[x])
}

for(let y in nums){
    if(y == 5){
        continue    //ao achar o indice 5, ele "Pula" o indice e continua no próximo indice
    }
    console.log(y + ' = ' + nums[y])
}

externo:
for(a in nums){
    for(b in nums){
        if(a == 2 && b == 3){
            break externo   //Ao Achar o indice informado,saíra do la~ço de repetição
        }
        console.log('Par = ', a+','+b)
    }
}

console.log('FIM...')
