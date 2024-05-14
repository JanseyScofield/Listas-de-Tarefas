const database = require("../database/database")
const Sequelize =  require("sequelize")

const Tarefas = database.define("tarefas",{
    id :{
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncremente : true
    },
    titulo: {
        type  : Sequelize.STRING,
        allowNull  : false
    },
    responsavel: {
        type  : Sequelize.STRING,
        allowNull : false

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

module.exports = Tarefas