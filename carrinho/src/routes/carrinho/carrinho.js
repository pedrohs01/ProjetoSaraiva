const express = require("express");
const route_carrinho = express.Router();
const data = require("../../database/config.js")

route_carrinho.get("/listar",(req,res)=>{
    data.query("Select * from carrinho",(error, dados)=>{
        if(error){
            return res.status(500).send({msg:"erro ao carregar os dados"})
        }
        res.status(200).send({msg:"ok",payload:dados})
    })
})

route_carrinho.get("/listar/:id", (req, res) => {
    data.query(`SELECT foto.foto1,titulo.nometitulo,titulo.autor,carrinho.quantidade,
    preco.precoatual,titulo.idtitulos,carrinho.total
    FROM saraivalivrodb.fotos foto INNER JOIN saraivalivrodb.titulos titulo
    ON foto.idfotos=titulo.idfoto INNER JOIN saraivacarrinhodb.carrinho carrinho
    ON titulo.idtitulos=carrinho.idproduto INNER JOIN saraivalivrodb.precos preco 
    ON preco.idpreco = titulo.idpreco WHERE carrinho.idusuario=1;`, req.params.id, (error, dados) => {
        if (error) {
            return res.status(500).send({ msg: "Erro ao carregar os dados" })
        }
        res.status(200).send({ msg: "Ok", payload: dados })
    })
})

route_carrinho.post("/cadastrar",(req,res)=>{
    data.query("Insert into carrinho set ?",req.body,(error,result)=>{
        if(error){
            return res.status(500).send({msg:"Erro ao tentar incluir no carrinho"+error})
        }
        res.status(201).send({msg:"ok",payload:result})
    })
})

module.exports = route_carrinho;

