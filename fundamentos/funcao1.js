//FUNCAO SEM RETORNO
function imprimirSoma(a, b) {
    console.log(a + b)
}


imprimirSoma(3, 2)
imprimirSoma(2)
imprimirSoma(92, 3, 4, 5, 6, 8)

//FUNCAO COM RETORNO
function soma(a, b = 0) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))