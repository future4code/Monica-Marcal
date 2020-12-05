/*EXERCÍCIO 1

Leia o código abaixo:


const respostaDoUsuario = prompt("Digite o número que você quer testar") //usuario entra com um numero
const numero = Number(respostaDoUsuario) //guaradando esse numero na variavel numero

if(numero % 2 === 0) { //se for igual a zero ou par passou no teste
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.") //se for impar nao passou no teste
}


Explique o que o código faz. Qual o teste que ele realiza? Para que tipos de números ele imprime no console "Passou no teste"? Para que tipos de números a mensagem é "Não passou no teste"?
*/


/*
EXERCÍCIO 2

O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado. Veja abaixo:


let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

a. Para que serve o código acima?
//seria opcoes de frutas e seus valores

b. Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
//sera 5 

c. Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
//acho que vai continuar sendo 5 porque esta especificado no defaut que todos sao 5
*/


/*
EXERCÍCIO 3

Leia o código abaixo:

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)


a. O que a primeira linha está fazendo?
//solicita ao usuario um numero guardando o como um numero

b. Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
//se for maior que zero aparece a mensagem 
//se for numero negativo, acho que nao aparece nada porque nao foi definido outra opcao

c. Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
//havera se o usuario digitar numeros negativos
*/