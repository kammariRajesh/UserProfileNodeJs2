const router = require("express").Router();
const register  = require('./register');
const login  = require('./login');
const loggedIn = require("./loggedIn");

router.post("/register",register);
router.post("/login",login);
router.get("/loggedIn",loggedIn);

module.exports = router; 