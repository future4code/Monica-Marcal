//Exercício2
//a. Quais são as entradas e saídas dessa função?
// Copie a função para um arquivo .ts e faça a tipagem desses parâmetros
/*
function obterEstatisticas(numeros) {
    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )
    let soma = 0

    for (let num of numeros) {
        soma += num
    }
    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }
    return estatisticas
}
*/
function obterEstatisticas(numeros: number[]) {

    const numerosOrdenados: number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}
//as entradas dessa função são um array de números.

/*
b. Que outras variáveis compõem essa função?
Explicite a tipagem de todas elas 
*/
type estatistica = {
    maior: number,
    menor: number,
    media: number
}
/*
numerosOrdenados é um array de numeros
soma é um número
estatísticas pode ter um type próprio, com 3 numeros, maior, menor e média
*/

/*
c.Crie um type para representar uma amostra de dados,
isto é, um objeto com as chaves numeros e obterEstatisticas.
Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript:

const amostraDeIdades = {
    numeros: [21, 18, 65, 44, 15, 18],
    obterEstatisticas: (numeros) => {...}
}
*/
type amostraDeDados = {
    numeros: number[],
    obterEstatisticas:(numeros: number[]) => estatistica
}
//a criação de um type que possui um array de numeros
// e seus calculos a partir da amostra