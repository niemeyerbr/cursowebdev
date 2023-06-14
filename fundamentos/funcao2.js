//ARMAZENANDO UMA FUNCAO EM UMA VARIAVEL
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

//ARMAZENANDO UMA FUNCAO ARROW EM UMA VARIAVEL
const soma = (a, b) => {
    return a + b
}
console.log(soma(2, 5))

//como utilizar o return de forma implícita
const subtracao = (a, b) => a - b //automaticamente quando não tenho chaves signfica que tenho uma funcao de uma unica linha

console.log(subtracao(2, 3))

const imprimir = a => console.log(a)

imprimir(2)