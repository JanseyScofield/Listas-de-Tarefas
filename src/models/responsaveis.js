const database = require("../database/database")
const Sequelize =  require("sequelize")


const Responsavel = database.define("responsaveis",{
    id :{
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : true
    },
    nome: {
        type  : Sequelize.STRING,
        allowNull  : false,
        validate: { 
            notNull : { 
                msg: 'O campo "Nome" é obrigatório.' 
            }, 
            notEmpty : {
                 msg: 'O campo "Nome" é inválido ou vazio.' 
                }
        }
    },
    dataNascimento :{
        type : Sequelize.DATEONLY,
        allowNull : false,
        validate: { 
            notNull : { 
                msg: 'O campo "data de nascimento" é obrigatório.' 
            }, 
            notEmpty : {
                 msg: 'O campo "data de nascimento" é inválido ou vazio.' 
                }
        }
    },

},{timestamp: true
})

module.exports = Responsavel