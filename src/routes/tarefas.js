const express  = require("express")
const controllers = require("../controllers/tarefas")
const router  =  express.Router()

router.get("/", controllers.list)
//router.post
// router.put
// router.delete
module.exports = router