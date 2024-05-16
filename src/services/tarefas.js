const Tarefas = require("../models/tarefas")

async function list(queryParams){
   return await Tarefas.findAll({where: queryParams})
}

async function create(dados){
    const novaTarefa = await Tarefas.create(dados)
}

function update(id, req){
    lista[id-1] = req;
}

function remove(){

}
module.exports = {list, create,update}