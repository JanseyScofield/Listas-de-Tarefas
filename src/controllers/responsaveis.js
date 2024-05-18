const services  = require("../services/responsaveis")

function list(req,res){
    services.list(req.params.id).then((responsavel) => {
      return res.status(200).send({listaResponsaveis : responsavel}, {responsavel})
    })
}

function create(req,res){
  services.create(req.body).then((novoResponsavel) => {
    return res.status(201).send({
      message : "Responsável cadastrado!",
      responsavel : novoResponsavel
    })
  })
}

 function update(req, res){
    services.update(req.params.id, req.body).then((responsavelEditado) => {
      return res.send(200).send({message : "Tarefa editada!"})
    })
}

function remove(req,res){
     return res.status(200).send("Hello, World")
 }

module.exports =  {list,create, update, remove}