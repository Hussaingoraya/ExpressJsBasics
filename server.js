const expressServer = require("express");
const app = expressServer();
const router = require("./router/auth-router")

app.use("/admin" , router)


app.get("/", (req, res) => {
  res.status(200).send("My First express server");
});

app.get("/register", (req , res) =>{
    res.status(200).send("My register page")
})
const Port = 5000;

app.listen(Port, () => {
  console.log(`This is running server ${Port}`);
});
