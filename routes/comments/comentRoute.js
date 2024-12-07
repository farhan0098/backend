import express from "express"
import { commentData } from "./commentData.js"
export const commentRoutes=express.Router()
commentRoutes.get("/comment",(req,res)=>{
    res.status(200).send({status:200,msg:"succesful",data:commentData})
})