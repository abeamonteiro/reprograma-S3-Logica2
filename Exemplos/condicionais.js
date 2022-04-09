// function comprovaMaiorIdade(idade) {
//if (idade >= 18 ) {
  //console.log('maior de idade')
    // } else { 
    //     console.log('menor de idade')
    // }
// }

// console.log(comprovaMaiorIdade(6)) //menor
// console.log(comprovaMaiorIdade(46)) //maior

// media e título

function resultadoBoletim (nota1, nota2, nota3, nota4) {
        const media = (nota1 + nota2 + nota3 + nota4)/4

        if (media >= 7 && media <= 10) {
            return `Aprovada, sua média é ${media}.`
       } else if (media >=4 && media < 7) {
            return `Recuperação, sua média é ${media}.`
       } else if (media < 4 && media >= 0) {
            return `Reprovada, sua média é ${media}.`
       }
            }
    
console.log(resultadoBoletim(6,8,8.8,5))