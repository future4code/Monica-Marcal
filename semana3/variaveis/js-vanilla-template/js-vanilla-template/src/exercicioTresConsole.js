/*3. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:

    a) Imprima na tela o array completo

    b) Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.

    c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima na tela a nova lista
*/



   
let comidas = ["Lasanha", "Espaghetti", "Pizza", "Creme de milho", "Batata frita"];
console.log(comidas); 

console.log("Essas são as minhas comidas preferidas: " );
console.log(comidas[0])
console.log(comidas[1])
console.log(comidas[2])
console.log(comidas[3])
console.log(comidas[4])

let usuario = prompt("Qual sua comida preferida?")
console.log(usuario);



/*
shift() remove o primeiro elemento de um array e retorna esse elemento.

var myArray = new Array('1', '2', '3');
var primeiro = myArray.shift(); 
let array = [1, 2, 3, 4, 5, 6]

console.log(array[0], array[2], array[5]) // 1 3 6

array[0] = 2
array[2] = 6
array[4] = 10

console.log(array)*/