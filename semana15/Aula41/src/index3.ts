//Exercicio3
/*
Considere que você esteja implementando uma rede social
composta por posts de usuários.
Cada um dos posts possui: um autor e um texto.

Observe o seguinte array de posts:
*/
const posts = [
  {
    author: "Alvo Dumbledore",
    text: "Não vale a pena viver sonhando e se esquecer de viver"
  },
  {
    author: "Severo Snape",
    text: "Menos 10 pontos para Grifinória!"
  },
  {
    author: "Hermione Granger",
    text: "É levi-ô-sa, não levio-sá!"
  },
  {
    author: "Dobby",
    text: "Dobby é um elfo livre!"
  },
  {
    author: "Lord Voldemort",
    text: "Avada Kedavra!"
  }
]
/*
a) Copie o código acima para um arquivo.ts
Depois, crie um type para representar um post
e utilize-o para fazer a tipagem do array posts.
*/
type Post = {
    author:string,
    text:string
}
/*
a) Copie o código acima para um arquivo.ts
Depois, crie um type para representar um post
e utilize-o para fazer a tipagem do array posts.
*/
/*
function buscarPostsPorAutor(posts, autorInformado) {
    return posts.filter(
      (post) => {
        return post.autor === autorInformado
      }
    )
  }
*/
/*
Quais são as entradas e saídas dessa função?
Copie a função para o mesmo arquivo.ts do array de posts
e faça a tipagem necessária.
*/
function searchPostsByAuthor(posts: Post[], informedAuthor:string):Post[] {
    return posts.filter(
      (post) => {
        return post.author === informedAuthor
      }
    )
  }
//As entradas são array de Post, e string.
//A saida é um retorno é um array de Post