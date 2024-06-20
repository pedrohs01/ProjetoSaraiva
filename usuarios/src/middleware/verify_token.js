require("dotenv").config();
const { error } = require("console");
const jwt = require("jsonwebtoken");

const verificar = (req,res,next) => {
    // criar uma constante para gurdar o token que o usuario ira enviar 
    // no cabecalho de requisição
    const token_enviado = req.headers.token;
    if(!token_enviado){
        return res.status(401).send({msg:"Não autenticado. Efetue o login"})
    }
    jwt.verify(token_enviado,process.env.JWT_KEY,(error, result)=>{
        if(error){
            return res.status(403).send({msg:"Vocé nao tem autorizaçao para acessar esse conteudo"})
        }
        next();
    })
}

module.exports = verificar;