/*Agora, vamos criar um novo endpoint,
que busque todos os usuários que tenham uma propriedade
`type` específica, recebendo apenas um `type` por vez.

Após isso, responda:
a. Como você passou os parâmetros de type para a requisição? Por quê?
Resposta - Passei por uma variavel

b. Você consegue pensar em um jeito de garantir que apenas
`types` válidos sejam utilizados?
*/

//importando express com Request e Response e cors
import express, {Request, Response} from 'express';
import cors from 'cors';

//extra opcional: importando configuração de rede do node
import { AddressInfo } from "net";

//iniciando a aplicação web com express
const app = express();

//ativando os módulos de Bodyparser e cors
app.use(express.json());
app.use(cors());

//criando o type
type user = {
    id: number,
    name: string,
    email: string,
    type: UserType,
    age: number
}

enum UserType {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}
//Dessa forma podemos
//restringir os tipos a apenas os tipos acima e atirar um erro,
// caso o dado esteja fora do esperado.


let users: user[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: "ADMIN",
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: "NORMAL",
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: "NORMAL",
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: "NORMAL",
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: "ADMIN",
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: "ADMIN",
        age: 60
    }
    
]

//Pega usuarios
app.get("/users", (req:Request, res:Response) => {
let errorCode: number = 400;

    try{
        //buscando por usuario
        const name = req.query.name as string;
        const myUsers = users;
        const myUser = myUsers.find((user) => {return user.name === name});
        
        //caso não encontre o usuario
        if (!myUser){
            errorCode = 404;
        //mostra novo erro em mensagem
            throw new Error("User not found")
        }



        res.status(200).send({user:myUser});
        

     //caso der erro mostra mensagem   
    }catch(error){
        res.status(errorCode).send ({message: error.message});
    }

})



//Pega por id de usuario
app.get("/users/:id", (req:Request, res:Response) => {
    let errorCode: number = 400;

    try{
        //buscando por id
        const id: number = Number(req.params.id);
        //se id não for um numero mostra mensagem de erro
        if(isNaN(id)){
            errorCode = 422; //unprocessable entity
            throw new Error("Invalid value for id")
        }
        const myUsers = users;
        const myUser = myUsers.find((user) => {return user.id === id});
        
        //caso não encontre o usuario
        if (!myUser){
            errorCode = 404;
        //mostra novo erro em mensagem
            throw new Error("User not found")
        }



        res.status(200).send({user:myUser});
        

     //caso der erro mostra mensagem   
    }catch(error){
        res.status(errorCode).send ({message: error.message});
    }

})


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
  });
