'use strict'

/**
 * Pesquisa recursivamente o número da lista
 * @param {*} array Lista onde o alvo será buscado
 * @param {*} alvo  Item a ser pesquisado
 * @returns {*} Número caso o alvo seja encontrado ou Null caso não seja encontrado
*/

function buscaBinaria(array, alvo){
    //min e max servem para delimitar a faixa onde será buscado o alvo

    //menor número (índice inicial da lista) 
    let min = 0;

    //maior número (índice final da lista)
    let max = array.length - 1;

    //Enquanto o min for menor ou igual a max, faça
    while(min <= max){
        //Média entre max e min (essa média será o índice central da faixa)
        const media = Math.floor((max + min) / 2);

        //Pegando o valor central entre min e max
        const chute = array[media];

        //Comparando o índice médio com o valor desejado
        if(chute === alvo){
            return media;
        }else if (chute > alvo){
            //Se o índice médio for maior que o valor desejado, então o valor máximo recebe o valor médio - 1, isso acontece porque o próximo valor máximo não pode ser maior que o anterior 
            max = media - 1;
        }else{
            //Se o índice médio for menor que o valor desejado, então o valor mínimo recebe o valor médio + 1, isso acontece porque o próximo valor mínimo não pode ser menor que o anterior 
            min = media + 1;
        }
    }

    return null;
}

const lista = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

console.log(buscaBinaria(lista, 73));
