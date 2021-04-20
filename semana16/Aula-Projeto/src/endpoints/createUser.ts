import {Request, Response} from "express";
import insertUser from "../data/insertUser";

export default async function createUser(
    req:Request,
    res:Response
){
    try{
        //validar entradas da requisicao
        if(
            !req.body.name ||
            !req.body.nickname||
            !req.body.email
            
        ){
            res
            .status(400)
            .send('Preencha os campos "name", "nickname", e "email"')
            
            return
        }
        
        const id: string = Date.now() + Math.random().toString()
        //consultar o banco de dados 
        await insertUser(
            id,
            req.body.name,
            req.body.nickname,
            req.body.email
            )
        //responder a requisicao
        res.status(200).send("Usuario criado com sucesso")

    }catch(error){
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}