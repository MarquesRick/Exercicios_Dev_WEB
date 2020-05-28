/*for(let i = 0; i< 11; i++)
{
    console.log(i);
}

console.log('i =', i);
*/

/* const funcs = []

for(var i = 0; i < 10; i++)
{
    funcs.push(function()
    {
        console.log(i);
    })
}

funcs[2]();
funcs[8](); //Imprimiu valor : 10. 10. */

const funcs = []

for(let i = 0; i < 10; i++)
{
    funcs.push(function()
    {
        console.log(i);
    })
}

funcs[2]();
funcs[8](); 


