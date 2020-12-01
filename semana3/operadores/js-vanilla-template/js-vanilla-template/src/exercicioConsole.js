/***Exercícios de escrita de código**

1. Faça um programa que:
a. Pergunte a idade do usuário
b. Pergunte a idade do seu melhor amigo ou da sua melhor amiga

    Dica: não se esqueça de converter as respostas para o tipo número

    c. **Imprima na tela** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)
    d. **Imprima na tela** a diferença de idade (não tem problema se sair um número negativo)
 

let idadeUsuario = prompt("qual sua idade?");
let idadeAmigo = prompt("Qual sua idade melhor amigo?");

idadeUsuario = true;
console.log("Sua idade é maior do que a do seu melhor amigo? ", idadeUsuario);

const idades = Number(idadeUsuario) - Number(idadeAmigo);
console.log("A diferença de idades é: ", idades);
 */


/*
 Faça um programa que:
 a. Peça ao usuário que insira um número par.
 Dica: não se esqueça de converter a resposta para o tipo número

 b. Imprima na tela **o resto da divisão** desse número por 2.
 c. Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
 d. O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código


 let NumPar = prompt("Digite um numero PAR");

 let par = Number(NumPar) % 2;
 console.log("O resto da divisão é: ", par);

 // se digitar numero par sempre fica 0valor final.
 // se digitar numero impar sempre fica 1 valor final.
*/

/*
3. Faça um programa, seguindo os passos:
a. Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
b. Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
c. Imprima o array na tela
d. Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
e. Remova da lista o item de índice que o usuário escolheu.
f. Imprima o array na tela

TENTANDO FAZER


let listaDeTarefas = [];


let tarefaUm = prompt("Digite sua primeira tarefa ");
console.log(listaDeTarefas);

let tarefaDois = prompt("Digite sua segunda tarefa ");
console.log(listaDeTarefas);

let tarefaTres = prompt("Digite sua terceira tarefa ");
console.log(listaDeTarefas);

let tarefaRealizada = prompt("Digite sua tarefa realizada");
console.log(listaDeTarefas);
listaDeTarefas.splice();

listaDeTarefas = tarefaRealizada.splice(listaDeTarefas);
console.log(listaDeTarefas);
listaDeTarefas.splice();
*/
/*




/*
Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima na tela a seguinte mensagem:
O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!

const nomeUsuario = prompt("Digite seu nome: ");
console.log(nomeUsuario);

const nomeEmail = prompt("Digite seu E-mail: ");
console.log(nomeEmail);

console.log("O e-mail", nomeEmail, "foi cadastrado com sucesso. Seja bem-vinda(o)," ,nomeUsuario,"!");
*/