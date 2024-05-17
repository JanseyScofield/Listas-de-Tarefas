const Tarefas = require("../models/tarefas")

async function list(queryParams){
   return await Tarefas.findAll({where: queryParams})
}

async function create(dados){
    const novaTarefa = await Tarefas.create(dados)
}

async function update(idTarefa,novosDados){
    const tarefaEncontrada = await Tarefas.findByPk(idTarefa)
    
    tarefaEncontrada.titulo = novosDados.titulo
    tarefaEncontrada.descricao = novosDados.descricao
    tarefaEncontrada.dataLimite = novosDados.dataLimite
    await tarefaEncontrada.save()
}
module.exports = {list, create,update}