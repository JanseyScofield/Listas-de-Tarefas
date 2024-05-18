const services  = require("../services/responsaveis")

function list(req,res){
    services.list(req.query).then((responsavel) => {
      return res.status(200).send({listaResponsaveis : responsavel})
    })
}

function resSemTarefas(req,res){
  services.resSemTarefas().then((responsavelSemTarefas) => {
    return res.status(200).send({listaResponsaveisSemTarefas : responsavelSemTarefas})
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
      return res.send(200).send({message : "Responsável editado!"})
    })
}

function remove(req,res){
     services.remove(req.params.id).then((responsavelExcluido) =>{
      return res.status(200).send({message : "Responsável excluido."})
     })
 }

module.exports =  {list,create, update, remove, resSemTarefas}