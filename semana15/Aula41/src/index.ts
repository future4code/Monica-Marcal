//Exercício 1
/*
a) Crie uma variável **minhaString**
do tipo `string` e atribua um valor a ela.
Tente atribuir um número a esta variável. O que acontece?
*/
let myString: string = 2;
//No typescript não permite nenhum tipo de valor que seja uma string.

/*
b) Crie uma variável **meuNumero**
do tipo `number` e atribua um valor numérico.
*/
let myNumber: number = 10;
//Como podemos fazer para que essa variável também aceite strings?
let myNum: number | string;
myNum = 5;
myNum = "ten"
//colocar o operador bitwise OR | (bit-a-bit Ou)

/*
c) Agora crie um novo objeto.
Este objeto é uma pessoa, e deve possuir três propriedades:
`nome`, que é uma string;
`idade`, que é um número;
`corFavorita`, que é uma string.
*/
let newObject: {
    name:string,
    age:number,
    favouriteColour:string
}

/*
Crie mais três objetos,
que também precisam ter apenas os campos definidos acima.
Crie um **tipo** `Pessoa` para garantir que todos os objetos tenham os mesmos campos.
 */
type People = {
    name:string,
    age:number,
    favouriteColour:string
}
const harry: People = {
    name: "Harry Potter",
    age: 19,
    favouriteColour: "red"
}
const Hermione: People = {
    name: "Hermione Granger",
    age: 19, 
    favouriteColour: "violet"
}
const Ronald: People = {
    name: "Ronald Weasley",
    age: 19,
    favouriteColour: "orange"}
//type facilita o reuso das propriedades

/*
d) Modifique o tipo de objeto para que possamos apenas escolher entre as cores do arco-íris.
Utilize um `enum` para isso.
*/
enum COLOR_RAINBOW {
    YELLOW = "yellow",
    BLUE = "blue",
    ORANGE = "orange",
    GREEN = "green",
    VIOLET = "violet",
    RED = "red",
    DARKBLUE = "darkblue"
}
type PeopleTwo = {
    name: string,
    age: number,
    favouriteColour:COLOR_RAINBOW
};
const harry2: PeopleTwo = {
    name: "Harry Potter",
    age: 19,
    favouriteColour:COLOR_RAINBOW.RED
}
const Hermione2: PeopleTwo = {
    name: "Hermione Granger",
    age: 19, 
    favouriteColour: COLOR_RAINBOW.VIOLET
}
const Ronald2: PeopleTwo = {
    name: "Ronald Weasley",
    age: 19,
    favouriteColour: COLOR_RAINBOW.ORANGE
}
