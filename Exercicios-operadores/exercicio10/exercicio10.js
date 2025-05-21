//10. Calcule o valor total de uma compra com 3 produtos:
//Produto 1: R$ 45,00
//Produto 2: R$ 30,00
//Produto 3: R$ 25,00
//Adicione 10% de imposto ao valor total.

let produto1= 45
let produto2= 30
let produto3= 25
let imposto = 10/100
let soma = produto1 + produto2 + produto3
let valorFinal = soma + (soma * imposto)

console.log(`Valor total sem imposto: R$ ${soma}`)
console.log(`Valor do imposto (10%): R$ ${(soma * imposto)}`)
console.log(`Valor total com imposto: R$ ${valorFinal}`)