// Vamos criar uma função que calcule o IMC  
// de uma pessoa, dado a altura em mea massa em kg.

function calcularIMC(peso, altura){
    const alturaAoQuadrado = Math.pow(altura, 2)
    const valorIMC = peso / alturaAoQuadrado

    return `O resultado do IMC é ${valorIMC.toFixed(2)}`
}

console.log(calcularIMC(65.5, 1.74))