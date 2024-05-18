const express  = require("express")
const controllers = require("../controllers/responsaveis")
const middlewares = require("../middlewares/middlewares")
const router  =  express.Router()

router.get("/", controllers.list)
router.post("/", middlewares.checkNome, middlewares.checkIdade,controllers.create)
router.put("/:id",middlewares.checkNome, middlewares.checkIdade, controllers.update)
router.delete("/:id", controllers.remove)
module.exports = router