require("dotenv").config({path:".env"})
const express  =  require("express")
const router = require("./routes/tarefas")
const app = express()
app.use(express.json())
app.use("/tarefas", router)


app.listen(process.env.PORTA, console.log(`Está escutando na porta ${process.env.PORTA}.`))

module.exports = app