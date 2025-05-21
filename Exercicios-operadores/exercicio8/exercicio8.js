//8. Um produto custa R$ 200, e está com um desconto de 15%. Calcule o valor final do produto com o desconto aplicado.

let produto = 200.00
let desconto = 15 / 100
let descontoProduto = produto * desconto
let valorFinal = produto - descontoProduto

console.log(`Valor original: R$ ${produto}`)
console.log(`Desconto: R$ ${descontoProduto}`)
console.log(`Valor com desconto: R$ ${valorFinal}`)

