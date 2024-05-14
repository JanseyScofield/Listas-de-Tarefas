const express  = require("express")
const controllers = require("../controllers/tarefas")
const router  =  express.Router()
const middlawares = require("../middlewares/middlewares")

router.get("/", controllers.list)
router.post("/", middlawares.checkNome,controllers.create)
// router.put("/",controllers.update)
// router.delete
module.exports = router