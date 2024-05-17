const database = require("../database/database")
const Sequelize =  require("sequelize")
const Responsavel = require("./responsaveis")

const Tarefa = database.define("tarefas",{
    id :{
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    titulo: {
        type  : Sequelize.STRING,
        allowNull  : false,
        validate: { 
            notNull : { 
                msg: 'O campo "Título" é obrigatório.' 
            }, 
            notEmpty : {
                 msg: 'O campo "Título" é inválido ou vazio.' 
                }
        }
    },
    descricao:{
        type : Sequelize.STRING,
        allowNull: true
    },
    dataLimite:{
        type : Sequelize.DATEONLY,
        allowNull : false,
        validate: { 
            notNull : { 
                msg: 'O campo "data limite" é obrigatório.' 
            }, 
            notEmpty : {
                 msg: 'O campo "data limite" é inválido ou vazio.' 
                }
        }
    }
},{timestamp: true
})

Tarefa.belongsTo(Responsavel)

module.exports = Tarefa