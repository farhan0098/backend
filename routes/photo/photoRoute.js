import express from "express"
import { photoData } from "./photoData.js"
export const photoRoutes=express.Router()
photoRoutes.get("/photo",(req,res)=>{
    res.status(200).send({status:200,msg:"succesful",data:photoData})
})