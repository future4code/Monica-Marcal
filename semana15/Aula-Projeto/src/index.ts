import express, { Express,Request, Response } from "express";
import cors from "cors";
import {accounts} from './accounts'

const app: Express = express();
app.use(express.json());
app.use(cors());


//5. Crie um endpoint  que utilize o método `POST`
// da entidade `users` que será responsável por cadastrar
// um usuário em um array de usuários.
// Neste momento, não se preocupe, com as validações descritas nas funcionalidades.
app.post("/users/create", (req:Request, res:Response) => {
   try{
      const {name, CPF, dateOfBirthAsString} = req.body
      //formatando a data de nascimento para o formato
      //dia,mes e ano
      const [day,month,year] = dateOfBirthAsString.split("/") 
      const dateOfBirth: Date = new Date(`${year}-${month}-${day}`)
    
      //validar as entradas da requisicao
      //7. Adicione, uma validação no item 1 (Criar conta):
      //o usuário deve possuir mais do que 18 anos para conseguir se cadastrar.
      // Caso não possua, exiba uma mensagem de erro.
      // a data vem em milisegundos
      const ageInMilisseconds:number = Date.now() - dateOfBirth.getTime()
      //Temos que passar ela para anos, a logica é divisões sucessivas:
      //milessecondos = 1000, divide por 60 para  passar para minutos
      //divide por 60 para passar para hora
      //divide por 24 para passar para dias
      //divide por 365 para passar para anos
      const ageInYears: number = ageInMilisseconds / 1000 / 60 / 60 / 24 / 365
      if(ageInYears < 18 ){
         res.statusCode = 406
         throw new Error("Idade deve ser maior que 18 anos")
      }
    //consultar ou alterar a base de dados
      accounts.push({
         name:name,
         CPF: CPF,
         dateOfBirth: dateOfBirth,
         balance: 0 ,
         statement:[]
      })
      //enviar a resposta
      res.status(201).send("Conta criada com sucesso")
  
   }catch(error){
      res.send(error.message)
      console.log(error)
   }
})
 
//6. Crie um método `GET` na entidade `users`
// função que será responsável por pegar
// TODOS os usuários existentes no array de usuários.
app.get("/users/all", (req: Request, res: Response) => {
   try{
      //se nosso array de contas estiver vazio, podemos trocar a mensagem para 404
      //isso é validar o status da consulta
      if(!accounts.length){
         res.statusCode = 404
         throw new Error("Nenhuma conta encontrada")
      }
      res.status(200).send(accounts)

   }catch(error){
      res.send(error.message)
   }
})



app.listen( 3003, () => {
    console.log("servidor rodando 3003")
   
});