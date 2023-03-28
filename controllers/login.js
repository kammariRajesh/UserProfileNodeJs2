const db = require("../routes/db-config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");



const login = (req,res) => {
  const {email,password} = req.body;
db.query("SELECT * FROM users WHERE Email = ?", [email], async (err,result) =>{
      if(err) throw err;
      const isPasswordMatched = await bcrypt.compare(password,result[0].Password);
      //console.log(isPasswordMatched);
      if(!result[0] || isPasswordMatched === false){
        //res.render("login",{isLoggedin:"Login Success"});
        return res.json({status:"error",error:"Incorrect Email or Password"});
      }else{
        const token = jwt.sign({id:result[0].id},process.env.JWT_SECRET,{
          expiresIn:process.env.JWT_EXPIRES
        });
       const cookieOptions = {
        expiresIn:new Date(Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000)
       }
       res.cookie("userRegistered",token,cookieOptions);
       return res.json({status:"success",success:"User has been loggedin"});
       //return res.redirect("../public/loggedin.ejs");
      }
  });
}

module.exports = login;