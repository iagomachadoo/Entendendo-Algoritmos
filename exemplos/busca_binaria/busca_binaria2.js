"use strict"

/**
 * Na busca binária separamos os valores possíveis em faixas
 * Dentro dessas faixas buscamos o valor médio e usamos ele como resultado
 * Para isso precisamos sempre de um valor mínimo e um valor máximo, para então chegarmos ao valor médio entre os dois extremos
 * Para acharmos a posição de um determinado valor dentro de uma lista ordenado, podemos criar o seguinte algoritmo
 */

function pesquisaBinaria(array, alvo){
    //Quantidade de iterações
    let i = 0;

    //Valor mínimo 
    let valoMin = 0;

    //Valor máximo
    let valorMax = array.length - 1;

    //Enquanto o valor mínimo for menor ou igual ao valor máximo, faça
    while(valoMin <= valorMax){
        //Incrementando +1 a variável i a cada iteração do loop
        i++;
        
        //Calculando o valor médio/central entre o valor máximo e mínimo
        let valorCentral = Math.floor((valorMax + valoMin) / 2);

        //Pegando o valor médio dentro da faixa min e max através do índice médio
        let chute = array[valorCentral];

        //Se o valor médio for igual ao alvo, retorna a posição do alvo
        if(chute === alvo){
            return `O número ${alvo} está na posição ${valorCentral} e foi necessário ${i} iterações`;

        //Senão, se o valor médio for maior que o alvo, o valor máximo recebe o valor médio - 1, essa subtração acontece porque não podemos pegar nenhum valor igual ou maior ao valor máximo anterior
        }else if(chute > alvo){
            valorMax = valorCentral - 1;

        //Senão, se o valor médio for menor que o alvo, o valor mínimo recebe o valor médio + 1, essa adição acontece porque não podemos pegar nenhum valor igual ou menor ao valor mínimo anterior
        }else{
            valoMin = valorCentral + 1;
        }
    }

    //Se o valor mínimo for maior que o valor máximo, a média resultará em -1, ou seja, o número não existe dentro da lista
    return `O número ${alvo} não existe na lista`;
}


const lista = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29];

console.log(pesquisaBinaria(lista, 7));
console.log(pesquisaBinaria(lista, 15));
console.log(pesquisaBinaria(lista, 5));
