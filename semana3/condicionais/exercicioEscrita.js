/*EXERCÍCIO 4

Vamos criar programas que lidem com entradas do usuário! Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

1. Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
2. Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
3. Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."


let idadeDoUsuario = prompt("Digite sua idade") // perguntando um numero ao usuario
let numero = Number(idadeDoUsuario) // guardando o numero que o usuario digitou

if(numero >= 18) { //se maior ou igual a 18 imprime na tela que pode dirigir
  console.log("Você pode dirigir.")
} else {
  console.log("Você não pode dirigir.") // se menor que 18 imprime que não pode dirigir
}
*/

/*
EXERCÍCIO 5

Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar **M** (matutino) ou **V** (Vespertino) ou **N** (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco `if/else`

- Exemplo
    Se o usuário digitar "V", a saída deve ser:
    "Boa Tarde!"

//VERIFICAR -- IMPRIMINDO SÓ O BOM DIA
const comprimento = prompt(" Digite: **M** (matutino) ou **V** (Vespertino) ou **N** (Noturno)").toLowerCase()


if(opcao === "M" || "m") { 
  console.log("Bom dia")
} else if (opcao === "V" || "v") {
  console.log("Boa tarde")
}else if (opcao === "N" || "n"){
    console.log("Boa noite")
}else{
    console.log("Digite uma letra valida!")
}
*/


/*
EXERCÍCIO 6
Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

const comprimento = prompt(" Digite: **M** (matutino) ou **V** (Vespertino) ou **N** (Noturno)").toLowerCase()
const condicao = "letra"


 switch (comprimento){
     case "M":
         console.log("Bom dia")
         break
     case "V":
         console.log("Boa tarde")
         break
     case "N":
         console.log("Boa noite")
         break
    
     default:
         console.log("Digite uma letra valida!")
         break
 }*/
