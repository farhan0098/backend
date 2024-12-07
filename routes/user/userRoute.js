import express from "express"
import { userData } from "./userData.js"
export const userRoutes=express.Router()
userRoutes.get("/user",(req,res)=>{
    res.status(200).send({status:200,msg:"succesful",data:userData})
})