const services  = require("../services/tarefas")

function list(req,res){
  services.list(req.query).then((tarefas) => {
      return res.status(200).send({lista_tarefas:tarefas})
    })
} 

function create(req,res){
  services.create(req.body).then((tarefa) => {
    return res.status(201).send({message : "Nova tarefa adicionada."})
  })
}

 function update(req, res){
    return res.status(200).send(services.update())
}

function remove(req,res){
     return res.status(200).send("Hello, World")
 }

module.exports =  {list,create, update, remove}