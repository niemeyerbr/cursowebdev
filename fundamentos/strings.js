const escola = "Coder"
console.log(escola.charAt(4))
console.log(escola.charAt(5)) // nesse caso mesmo nao existindo o script vai rodar, JS não vai dar erro nesse caso
console.log(escola.indexOf('o')) // para descobrir qual é a posição do que você quer encontrar dentro da variável
console.log(escola.substring(0, 3)) //mesma coisa que dizer "me mostre 3 itens a partir do indice 0"
console.log(escola.replace(3, 'e')) // substitua o que está no indice 3 pela letra e

//Array é uma estrutura linear, como se fosse um agrupador de variaveis 

console.log('Ana, Maria, Pedro'.split( ',')) // split vai colocar esses valores da string dentro do array separando pelo o que eu mandei, no caso a virgula
