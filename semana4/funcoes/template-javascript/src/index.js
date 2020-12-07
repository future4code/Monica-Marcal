/**Exercícios de interpretação de código**

EXERCÍCIO 1

Leia o código abaixo:


function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))


a. O que vai ser impresso no console?
R. Os valores de 2*5 e 10*5 = 10 e 50

b. O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
Não aparecera no console, porque o console é só para os devs, mais esta os valores estão sendo guardados, com a palavra reservada return.

/*
EXERCÍCIO 2
Leia o código abaixo:


let arrayDeNomes = ["Darvas", "Caio", "João", "Paulinha", "Soter"];//declarou cinco items com 4 indices

const outraFuncao = function(array) { // declarando função que começa com 0 e vai até menor que 2
	for (let i = 0; i < 2; i++) { // se fosse <=2 acho que impriria tres nomes
		console.log(array[i])
	}
}

outraFuncao(arrayDeNomes) //chamou a funcao para arrayDeNomes


a. Explicite quais são as saídas impressas no console
R. saira os primeiros dois nomes = Darvas e Caio

b. Se `arrayDeNomes` mudasse de valor para `["Amanda", "Caio"]`, o que vai ser impresso no console?
R. Sairia Amanda e caio.
*/

/*
EXERCÍCIO 3
O código abaixo mostra uma função que recebe um array e devolve outro array. Explique em poucas palavras o que ela faz e sugira um nome melhor para ela!
R. se o numero X for resto zero, será par então fará o numero X vezes numero X
const metodo = (array) => {
    let arrayFinal = [];
  
    for (let num of array) {
          if (num % 2 === 0) {
          arrayFinal.push(num * num)
          }
    }
  
    return arrayFinal;
  }
  

  const metodo = (array) => {
  let arrayFinal = [];

  for (let x of array) {
		if (x % 2 === 0) {
	    arrayFinal.push(x * x)
		}
  }

  return arrayFinal;
}
*/

//EXERCÍCIO 4 
/*
//A.
function dadosMonica(){
        console.log("Olá, sou Mônica, 26 anos, estudante Labenu, morando em Santa Catarina")
}

let dadosUsuario =[];

function dados([nome], [idade], [cidade], [estudante]){
 console.log= prompt("Qual seu nome");


}

*/
/*

//EXERCÍCIO 5
//A.
 function somaDoisNumeros(num1, num2){
     const soma = num1 + num2
     console.log(soma)
 }

 const primeiroNum = Number(prompt("Insira o primeiro numero"))
 const segundoNum = Number(prompt("Insira o segundo numero"))

 somaDoisNumeros(primeiroNum, segundoNum)

*/
/*
//B.
function DoisNumeros(num1, num2){
  let numeros = (num1 >= num2)
  console.log(numeros)
}
const primeiroNum = Number(prompt("Insira o primeiro numero"))
const segundoNum = Number(prompt("Insira o segundo numero"))
DoisNumeros(primeiroNum, segundoNum)
*/
