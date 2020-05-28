const fabricantes = ["Mercedes", "Audi", "BM"];

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`);
}

fabricantes.forEach(imprimir);
fabricantes.forEach(fabricante => console.log(fabricante)); //mesmo que a função abaixo

//fabricantes.forEach(function(fabricante) console.log(fabricante));