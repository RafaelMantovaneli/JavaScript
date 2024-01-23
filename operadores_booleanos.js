// Operadores Booleanos

const numero = 10;

console.log(numero == 10)
console.log(numero > 20)

console.log(numero == 10)
console.log(numero == '10')
console.log(numero === '10')

console.clear();

console.log(10 != 10)
console.log(10 != '10')
console.log(10 !== '10')


// Conjunções Lógicas

let idade = 26;
let tenhoCNH = true;

const possoDirigir = idade >= 18 && tenhoCNH === true   // AND => &&

console.log('Posso Dirigir?', possoDirigir)


// Or => ||

idade = 40;

const votoFacultativo = idade < 18 || idade >= 70;

console.log('Voto Facultativo?', votoFacultativo)

// Not => !

const estouGostandoDoCurso = false;

console.log(!estouGostandoDoCurso);