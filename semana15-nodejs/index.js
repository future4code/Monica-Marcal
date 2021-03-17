//Exercício 01
/*
a) process.argv

*/
//b) 
//"Olá, (Nome)! Você tem (sua idade) anos."
//console.log(`hello,${process.argv[2]},"voce tem",${process.argv[3]},"anos"`)
//c)
//"Olá, (Nome)! Você tem (sua idade) anos. Em sete anos você terá (nova idade)"
//console.log(`hello,${process.argv[2]},"voce tem",${process.argv[3]},"anos", "em sete anos voce terá, ${process.argv[4]}`)

const nome = process.argv[2]
const idade = Number(process.argv[3])
console.log(`hello,${nome},"voce tem",${idade},"anos"`)