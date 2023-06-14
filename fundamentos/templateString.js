/* para concatenar de uma forma mais prática onde envolve String basta usar o Template String */
const nome = 'Rebeca'

console.log(`Olá ${nome}, tudo bem?`)

//é possível chamar uma funcao dentro de um template string

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}`)
