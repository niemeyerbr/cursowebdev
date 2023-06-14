const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)

console.log(Number.isInteger(peso1)) //Number.IsInteger para verificar se aquela variavel possui um valor inteiro
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total/(peso1 + peso2)

console.log(media.toFixed(2)) //media.toFixed é usado para dizer quantas casas decimais você deseja mostrar depois da virgula
console.log(media.toString()) // para converter valores numericos em string usamos o .toString depois da variavel
console.log(media.toString(2)) //para transformar a variavel em numero binario basta colocar 2 
console.log(typeof media)