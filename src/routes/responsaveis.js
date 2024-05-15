const express  = require("express")
const controllers = require("../controllers/responsaveis")
const router  =  express.Router()
const middlawares = require("../middlewares/middlewares")

router.get("/", controllers.list)
router.post("/", middlawares.checkNome,controllers.create)
router.put("/",controllers.update)
router.delete("/:d", controllers.remove)
module.exports = router