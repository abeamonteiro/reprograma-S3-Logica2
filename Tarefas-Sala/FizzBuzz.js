// Usando os conceitos que estudamos, vamos criar um programa que irá imprimir 'FizzBuzz' 
// para números divisíveis por 3 e 5, para números divisíveis por 3 irá imprimir 'Fizz' 
// e para números divisíveis por 5 irá imprimir 'Buzz' e por fim,
// se não cumpre nenhum dos casos acima imprime o próprio número.
//divisível >  resto = 0

const numero = 4 //10//9//7//15

if (numero % 3 == 0 && numero % 5 == 0) {
    console.log('FizzBuzz')
}   else if (numero % 3 == 0) {
    console.log('Fizz')
}   else if (numero % 5 == 0) {
    console.log('Buzz')
}   else {
    console.log(numero)
    }

    