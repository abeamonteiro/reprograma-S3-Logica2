//Usando os conceitos que estudamos, vamos criar um programa que funcionará como um sinal de trânsito.

//quando a cor for vermelho > mostre PARE!
//quando a cor for amarelo > mostre NÃO ACELERE!
//quando a cor for verde > mostre PODE IR!

//const cor = 'verde'

//if (cor == 'vermelho') {
//  console.log('PARE!')
// } else if (cor == 'amarelo') {
//  console.log('Atenção, NÃO ACELERE!')
// } else if (cor == 'verde') {
//  console.log('PODE IR!')
// } else {
//  console.log('Ish, desculpe! Essa informação não me diz nada.')
// }

function informaTransito(corSemaforo) {
    switch(corSemaforo) {
        case 'vermelho':
            return 'Pare'
        case 'amarelo':
            return 'Atenção'
        case 'verde':
            return 'Siga'
        default :
            return 'Não existe'
    }
}        
console.log(informaTransito('preto'))