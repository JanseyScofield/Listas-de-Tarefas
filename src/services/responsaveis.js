const Responsaveis = require("../models/responsaveis")

async function list(queryParams){
    return await Responsaveis.findAll({where : queryParams})
}

async function create(dados){
    const novoResponsavel = await Responsaveis.create(dados)
    return novoResponsavel
}

async function update(idResponsavel, novosDados){
    const responsavelEncontrado = await Responsaveis.findByPk(idResponsavel)

    responsavelEncontrado.nome = novosDados.nome ?? responsavelEncontrado.nome
    responsavelEncontrado.dataNascimento = novosDados.dataNascimento ??  responsavelEncontrado.dataNascimento
    await responsavelEncontrado.save()
}

module.exports = {list, create,update}