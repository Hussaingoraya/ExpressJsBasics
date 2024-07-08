const expressRouter = require("express")
const router = expressRouter.Router()

// router.get("/",(req,res)=>{
// res.status(200).send("This is in working stage")
// })
router.route("/").get((req,res)=>{
res.status(200).send("This is in working stage")
})
module.exports = router
