require("dotenv").config();
const JWT = require("jsonwebtoken");

const verify = (req,res,next) =>{
    const tk = req.headers.token;

    if(!tk){
        return res.status(401).send({msg:"Por favor faça o login"});
    }
    JWT.verify(tk,process.env.JWT_KEY,{expires:process.env.JWT_EXPIRES},(error,dados)=>{
        if(error){
            return res.status(401).send({msg:"Sessão finalizada. efetue o login novamente"})
        }
        next();
    })
}

module.exports = verify;