const Tarefas = require("../models/tarefas")
const Responsavel = require("../models/responsaveis")
const Sequelize = require("sequelize")

async function list(queryParams){
   return await Tarefas.findAll({where: queryParams})
}

async function tarefasDe(idResponsavel){
    return await Tarefas.findAll({
        include: [{
          model: Responsavel,
          where: {
            respnsaveiId: Sequelize.col('Tarefas.id')
          }
        }]
      })
}

async function create(dados){
    const novaTarefa = await Tarefas.create(dados)
    return novaTarefa
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
module.exports = {list, create,update, remove, tarefasDe}