const database = require("../database/database")
const Sequelize =  require("sequelize")


const Responsavel = database.define("responsaveis",{
    id :{
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncremente : true
    },
    nome: {
        type  : Sequelize.STRING,
        allowNull  : false
    },
    dataNascimento :{
        type : Sequelize.DATEONLY,
        allowNull : false
    },

},{timestamp: true
})

module.exports = Responsavel