import express from "express"
import { todoData } from "./todoData.js"
export const todoRoutes=express.Router()
todoRoutes.get("/todo",(req,res)=>{
    res.status(200).send({status:200,msg:"succesful",data:todoData})
})