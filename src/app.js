require("dotenv").config({path:".env"})
require("./database/database")
const express  =  require("express")
const routerTarefas = require("./routes/tarefas")
const routerResponsaveis  = require("./routes/responsaveis")
const app = express()
app.use(express.json())
app.use("/tarefas", routerTarefas)
app.use("/responsaveis", routerResponsaveis)

app.listen(process.env.PORTA, console.log(`Está escutando na porta ${process.env.PORTA}.`))

module.exports = app