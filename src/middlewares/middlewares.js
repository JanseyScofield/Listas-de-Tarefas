function checkNome(req,res, next){
    if(req.body.nome.length < 3) 
        return res.status(400).send({message: "É necessário enviar um nome com mais de 3 caracteres."})
    return next()
}

function checkIdade(req,res,next){
    var dataNascimento = new Date(req.body.dataNascimento)
    var dataMinima = new Date('2014-05-18')
    if(dataNascimento > dataMinima)
        return res.status(400).send({message : "Um responsável não pode ter menos de 10 anos"})
    return  next()
}

module.exports  = {checkNome,checkIdade}