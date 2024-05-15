const services  = require("../services/responsaveis")

function list(req,res){
    return res.status(200).send(services.list())
}

function create(req,res){
  return res.status(201).send(services.create(req.body.nome))
}

 function update(req, res){
    return res.status(200).send(services.update())
}

function remove(req,res){
     return res.status(200).send("Hello, World")
 }

module.exports =  {list,create, update, remove}