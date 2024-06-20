require("dotenv").config();
const express = require("express")
const router_personal = express.Router();
const data = require("../../database/config.js");
const { param } = require("../users/users");

router_personal.get("/listar",(req,res)=>{
    data.query("selct * from dadospessoais",(error,result)=>{
        if(error){
            return res.status(500).send({msg:"Erro ao carregar os dados"})
        }
        res.status(200).send({msg:"ok",payload:result});
    })
})

router_personal.get("/listar/:cpf",(req,res)=>{
    data.query("selct * from dadospessoais where iddadospessoais=?",req.params.cpf,(error,result)=>{
        if(error){
            return res.status(500).send({msg:"erro ao tentar cadastrar os dados"})
        }
        res.status(200).send({msg:"ok",payload:result});
    })
})

router_personal.post("/cadastrar",(req,res)=>{
    data.query("insert into dadospessoais set ?",req.body,(error,result)=>{
        if(error){
            return res.status(500).send({msg:"erro ao tentar cadastrar"})
        }
        res.status(201).send({msg:"ok",payload:result})
    })
})