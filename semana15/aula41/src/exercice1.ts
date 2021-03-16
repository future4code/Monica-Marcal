/*a) Crie uma variável minhaString do tipo string
e atribua um valor a ela.
Tente atribuir um número a esta variável. O que acontece?
*/
//Causa erro sem as aspas
//const minhaString: string  = 5;
//console.log(minhaString)

const minhaString: string  = "5";
console.log(minhaString)

/*b) Crie uma variável meuNumero do tipo number
e atribua um valor numérico.
Como podemos fazer para que essa variável também aceite strings?
*/
//colocando o( OU |) e a palavra (STRING)
const meuNumero: Number | String  = 5;
console.log(meuNumero)

/*c) Agora crie um novo objeto.
Este objeto é uma pessoa, e deve possuir três propriedades:
`nome`, que é uma string;
`idade`, que é um número;
`corFavorita`, que é uma string.

Crie mais três objetos,
que também precisam ter apenas os campos definidos acima.
Crie um **tipo** `Pessoa` para garantir que todos os objetos
tenham os mesmos campos.
*/
enum Pessoa{
    NOME = "NOME", 
    IDADE = "IDADE",
    CORFAVORITA = "CORFAVORITA"
   
 }
 type TipoPessoa = {
    nome: string,
    idade: number,
    corFavorita: string
 }

const Pessoa1: TipoPessoa = {nome: "Maria", idade: 65, corFavorita: "Laranja"}
const Pessoa2: TipoPessoa = {nome: "Marinete", idade: 75, corFavorita: "Rosa"}
const Pessoa3: TipoPessoa = {nome: "Marilu", idade: 80, corFavorita: "Azul"}

/*d) Modifique o tipo de objeto para que possamos apenas
escolher entre as cores do arco-íris. Utilize um enum para isso. */