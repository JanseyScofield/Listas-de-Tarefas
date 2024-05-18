const express  = require("express")
const controllers = require("../controllers/responsaveis")
const router  =  express.Router()

router.get("/", controllers.list)
router.post("/",controllers.create)
router.put("/:id",controllers.update)
router.delete("/:id", controllers.remove)
module.exports = router