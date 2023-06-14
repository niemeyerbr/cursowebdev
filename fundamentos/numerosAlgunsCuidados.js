console.log(7 / 0) // em algumas linguagens essa operacao da erro mas em JS ele coloca como infinity
console.log("10" / 2) // JS ele tenta interpretar o conteudo da string e nesse caso ele consegue calcular corretamente (isso porque ela e fracamente tipada)
console.log("Show!" * 2) // Nesse caso ele identificou que nao se trata de um numero dentro da string
console.log(0.1 + 0.7) //tomar cuidado com a imprecisao em calculos de numeros flutuantes faz parte de uma especificacao do IEEE
//console.log(10.toString()) // da erro em valores literais para toString
console.log((10).toFixed(2)) // e possivel chamar o literal dentro de parenteses