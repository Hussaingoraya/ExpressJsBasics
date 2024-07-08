const expressRouter = require("express")
const router = expressRouter.Router()
const Controllers = require ("../Controllers/auth-controller")

// router.get("/",(req,res)=>{
// res.status(200).send("This is in working stage")
// })
// router.route("/").get((req,res)=>{
// res.status(200).send("This is in working stage")
// })
router.route("/").get(Controllers.Home)
router.route("/signup").get(Controllers.signup)
module.exports = router
