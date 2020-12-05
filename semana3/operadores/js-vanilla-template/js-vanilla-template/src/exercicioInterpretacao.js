/*1. Leia o código abaixo. Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.
*/
const bool1 = true // bool1 verdadeiro
const bool2 = false //bool2 falso
const bool3 = !bool2 //bool3 diferente de bool2

let resultado = bool1 && bool2 // resultado recebe a bool1 e bool2
console.log("a. ", resultado) // a. false

resultado = bool1 && bool2 && bool3 //resultado recebe bool1 e bool2 e boll3
console.log("b. ", resultado)//b. false

resultado = !resultado && (bool1 || bool1) //resultado recebe diferente resultado e bool1 ou boll1
console.log("c. ", resultado)//c.true

console.log("e. ", typeof resultado) //false



//2.  Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.


let array //variavel array
console.log('a. ', array) //imprime undefined

array = null // variavel recebe nulo
console.log('b. ', array) //imprime undefined

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] // recebe arrays numeros
console.log('c. ', array.length) // imprime tamanho desse array c. 11

let i = 0 //variavel i recebe 0
console.log('d. ', array[i]) // imprime d. 0

array[i+1] = 19 // variavel array recebe 19 +1
console.log('e. ', array) //imprime e. 20

const valor = array[i+6] // variavel valor recebe array 19 + 6
console.log('f. ', valor) //imprime f.25
