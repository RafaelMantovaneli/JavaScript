// Funções

// Definição da função
function saudacao() {
    console.log('Olá, seja bem-vinda(o) ao nosso curso de JavaScript!')
}

saudacao()

// Como enviar parâmetros para as funções

function saudacao(nome, curso='JavaScript') {
    console.log(`Olá ${nome}, seja bem-vindo(a) ao nosso curso de ${curso}!`)
}

saudacao('Rafael')

// Retorno da função

function soma(numero1, numero2){
    return numero1 + numero2
}

const resultado = soma(10, 20)

console.log(resultado / 2)

