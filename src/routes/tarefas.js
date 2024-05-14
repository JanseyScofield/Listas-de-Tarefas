const express  = require("express")
const controllers = require("../controllers/tarefas")
const router  =  express.Router()

router.get("/", controllers.list)
router.post("/", controllers.create)
// router.put("/",controllers.update)
// router.delete
module.exports = router