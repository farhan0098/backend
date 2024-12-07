import express from "express"
import { albumData } from "./albumData.js"
export const albumRoutes=express.Router()
albumRoutes.get("/album",(req,res)=>{
    res.status(200).send({status:200,msg:"succesful",data:albumData})
})