const router = require("express").Router();
const loggedIn = require("../controllers/loggedIn");


router.get("/",(req,res) => {
  //res.send("<h1>Welcome to Node.Js</h1>");
  if(req.user){
    res.render("index",{status:"loggedIn",user:req.user});
  }else{
    res.render("index",{status:"no",user:"nothing"});
  }
});
router.get("/register",(req,res) => {
  //res.send("<h1>Welcome to Node.Js</h1>");
  res.sendFile("register.html",{root:"./public"});
});
router.get("/login",(req,res) => {
  //res.send("<h1>Welcome to Node.Js</h1>");
  res.sendFile("login.html",{root:"./public"});
});
router.get("/loggedIn",(req,res) => {
  //res.send("<h1>Welcome to Node.Js</h1>");
  res.sendFile("loggedIn.html",{root:"./public"});
});
router.get("/logout",(req,res) => {
  //res.send("<h1>Welcome to Node.Js</h1>");
  res.render("index");
});


module.exports = router;