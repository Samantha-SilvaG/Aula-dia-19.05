//13. Um trabalhador recebe R$ 1.500,00 por mês e trabalha 8 horas por dia, 22 dias pormês. Calcule o valor recebido por hora trabalhada. 

let salarioMensal = 1500
let horasPorDia = 8
let diasPorMes = 22
let totalHorasPorMes = horasPorDia * diasPorMes
let valorPorHora = salarioMensal / totalHorasPorMes

console.log(`Salário mensal: R$ ${salarioMensal}`)
console.log(`Horas trabalhadas no mês: ${totalHorasPorMes}`)
console.log(`Valor por hora: R$ ${valorPorHora.toFixed(2)}`)