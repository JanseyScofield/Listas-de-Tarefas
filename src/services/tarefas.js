const Tarefas = require("../models/tarefas")

async function list(queryParams){
   return await Tarefas.findAll({where: queryParams})
}

async function create(dados){
    const novaTarefa = await Tarefas.create(dados)
}

async function update(idTarefa,novosDados){
    const tarefaEncontrada = await Tarefas.findByPk(idTarefa)
    
    tarefaEncontrada.titulo = novosDados.titulo ??  tarefaEncontrada.titulo
    tarefaEncontrada.descricao = novosDados.descricao ??  tarefaEncontrada.descricao
    tarefaEncontrada.dataLimite = novosDados.dataLimite ??  tarefaEncontrada.dataLimite
    await tarefaEncontrada.save()
}

async function remove(idTarefa){
    const tarefaExcluida = await Tarefas.findByPk(idTarefa)
    await tarefaExcluida.destroy()
}
module.exports = {list, create,update, remove}