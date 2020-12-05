// a) Declare uma variável para armazenar um nome, sem atribuir um valor.
// b) Declare uma variável para armazenar uma idade, sem atribuir um valor.
//c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando `typeof`.
//d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.

let nome = "";
let idade = "";
console.log(typeof nome, typeof idade ); 
//Imprimiu so tipo string, porque atribui entre aspas duplas.


//d) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.

let nome = prompt ("Qual seu nome:");
let idade = prompt("Qual sua idade");
console.log(nome, idade );
//

//e) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.
let nome = prompt("Qual seu nome:");
let idade = prompt("Qual sua idade");
console.log(typeof nome, typeof idade );
//Continuan sendo do tipo string


//f) Para finalizar, imprima na tela a mensagem: "Olá `nome`,  você tem `idade` anos". Onde `nome` e `idade` são os valores que o usuário inseriu

let nome = prompt("Qual é seu nome?");
let idade = prompt("Qual sua idade?");
console.log("Olá" + nome,  "você tem" + idade  + "anos");
//Usei o um atriubuto de soma +, para concatenar as variaveis.