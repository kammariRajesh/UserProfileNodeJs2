const db = require("../routes/db-config");
const bcrypt = require("bcryptjs");

const register =  (req,res) =>{
  const {name,email,password} = req.body;

  db.query("SELECT * FROM users WHERE Email = ?",[email],async (err,result) =>{
       if(err) throw err; 
       if(result.length > 0){
         return res.json({status:"error",error:"Email has already been registered"});
       }else{
           const hashedPassword = await bcrypt.hash(password,8);
           db.query("INSERT INTO users SET ?",{Name:name, Email:email, Password:hashedPassword},(error,result) =>{
             if(error) console.log(error);
             return res.json({status:"success",success:"User has been registered"});
           })
     }
     });
};

module.exports = register;