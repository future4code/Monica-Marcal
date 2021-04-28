import {Request, Response} from "express";
import updateUser from "../data/updateuser";

export default async function editUser(
    req:Request,
    res:Response
){
    try{
      if(
         req.body.name === '' ||
         req.body.nickname === '' ||
         req.body.email === '' 
      ){
        res.status(400).send({
            message: "Nenhum dos campos podem estar em branco"
        })
        return
      }
      //Se não existir nenhum desses três (!)
      if(!req.body.name && !req.body.nickname && !req.body.email){
        res.status(400).send({
            message: "Escolha ao menos um valor para alterar"
        })
        return
      }
      
      await updateUser(
        req.params.id,
        req.body.name,
        req.body.nickname ,
        req.body.email
      )
      res.status(200).send({
        message:"Usuario atualizado!"
    })

    }catch(error){
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}