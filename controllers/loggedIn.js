const db = require("../routes/db-config");
const jwt = require("jsonwebtoken");


const loggedIn = (req,res) => {
  if(!req.cookies.userRegistered) return res.json({status:"error",error:"Cookie Not Found"});;
  
    const decoded = jwt.verify(req.cookies.userRegistered,process.env.JWT_SECRET);
    db.query("SELECT * FROM users WHERE id = ?",[decoded.id],(err,result) => {
      if(err) throw err;
      return res.json({success:result[0]})
    });
 
}

module.exports = loggedIn;