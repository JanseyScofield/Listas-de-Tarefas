function checkNome(req,res, next){
    if(!req.body.nome) 
        return res.status(400).send({message: "É necessário enviar um nome."})
    return next()
}

module.exports  = {checkNome}