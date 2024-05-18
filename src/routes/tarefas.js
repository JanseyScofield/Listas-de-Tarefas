const express  = require("express")
const controllers = require("../controllers/tarefas")
const router  =  express.Router()
const middlawares = require("../middlewares/middlewares")

router.get("/", controllers.list)
router.get("/tarefasde/:id", controllers.tarefasDe)
router.post("/", controllers.create)
router.put("/:id",controllers.update)
router.delete("/:id", controllers.remove)

module.exports = router