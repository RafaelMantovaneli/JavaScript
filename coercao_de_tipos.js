
// Coerção (Conversão) de Tipos

// - 1. Coerção Explícita (Manual)
const numero = 10;

console.log(numero, typeof numero)

const numeroEmFormatoDeString = String(numero)
console. log(numeroEmFormatoDeString, typeof numeroEmFormatoDeString)

console.log(Number('1321314'))
console.log(parseFloat('23224.234'))
console.log(parseInt('23224.234'))
console.log(Boolean(1))

console.clear()

// Cooerção Implícita

console.log('10' + 1)
console.log('10' - 1)
console.log(10 * '3')
console.log(10 - 'asasa')