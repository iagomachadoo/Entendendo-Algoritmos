"use strict"

//Função para criar arrays
function createArray(start, end, passo){
    //Iniciando a variável que será o array
    let array = [];

    //Se o valor inicial for maior que o final, retornar null
    if(start > end ){
        return null
    }

    //A variável i recebe o valor inicial, enquanto o valor inicial for menor ou igual ao valor final, o valor inicial será incrementado em 1
    for(let i = start; i <= end; i+=passo){
        //Adicionando cada valor de i ao final do array
        array.push(i)
    }

    //Retornando o array preenchido com os valores gerado do loop for
    return array;
}

function pesquisaBinaria(array, alvo){
    //Calculando a quantidade máxima de iterações
    let n = 0;
    let base = 0;
    while(n < array.length){
        base++;
        n = 2 ** base;
    }

    //menor valor
    let min = 0;

    //maior valor
    let max = array.length - 1;

    //Verificando o tempo de execução do algoritmo
    let tempoExec = [];

    //enquanto menor valor for menor ou igual ao maior valor, faça 
    while(min <= max){
        //valor central/medio entre o maior e menor valor
        const media = Math.floor((max + min) / 2);
        
        //Criando objeto com as informações da pesquisa binária
        let obj = {
            min: min,
            max: max,
            media: media,
            posição: media,
            alvo: alvo,
            bigO: base
        };

        //Adicionando as informações da pesquisa binária a cada iteração
        tempoExec.push(obj);

        //se o item medio na faixa min e max for igual ao alvo, retorne a posição do alvo 
        if(array[media] === alvo){
            return tempoExec
        
        //se o item medio na faixa min e max for maior que o alvo, o valor max passa a ser o valor medio menos 1 
        }else if(array[media] > alvo){
            max = media - 1;

        //se o item medio na faixa min e max for menor que o alvo, o valor min passa a ser o valor medio mais 1 
        }else{
            min = media + 1;
        }
    }

    //se o alvo não existir dentro do array, retorne null
    return null;
}

console.table(pesquisaBinaria(createArray(1, 10, 1), 10));
console.table(pesquisaBinaria(createArray(1, 20, 1), 20));
console.table(pesquisaBinaria(createArray(1, 40, 1), 40));
console.table(pesquisaBinaria(createArray(1, 80, 1), 80));
console.table(pesquisaBinaria(createArray(1, 160, 1), 160));