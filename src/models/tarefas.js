const database = require("../database/database")
const Sequelize =  require("sequelize")
const Responsavel = require("./responsaveis")

const Tarefa = database.define("tarefas",{
    id :{
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncremente : true
    },
    titulo: {
        type  : Sequelize.STRING,
        allowNull  : false
    },
    descricao:{
        type : Sequelize.STRING,
        allowNull: true
    },
    dataLimite:{
        type : Sequelize.DATEONLY,
        allowNull : false
    }
},{timestamp: true
})

Tarefa.belongsTo(Responsavel)

module.exports = Tarefa