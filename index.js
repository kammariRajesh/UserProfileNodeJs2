const express = require("express");
const db = require("./routes/db-config")
const cookie = require("cookie-parser");
const PORT = process.env.PORT || 5050;
//const path = require("path");

const app = express();


app.use("/js",express.static(__dirname + "/public/js"));
app.use("/css",express.static(__dirname + "/public/css"));

app.set('view engine','ejs');
app.set("views","./views");
app.use(cookie());
app.use(express.json());
db.connect((error) => {
  if(error) throw error;
  console.log("MYSQL Connected...");
});

app.use('/',require('./routes/pages'));
app.use('/api',require('./controllers/auth'))
app.listen(PORT,() => console.log("Server running at http://localhost:5050"));


// Telling to the express server where the static files are present therefore '/filename' can detect file in public folder
// const publicDirectory = path.join(__dirname,'./public');
// app.use(express.static(publicDirectory));

// Parse URL-encoded bodies (as sent by HTML forms) 
//app.use(express.urlencoded({extended:false}));
//Parse JSON bodies (as sent by API clients)
//app.use(express.json());


// Routs Defining
 // express can detect views in project folder automatically

//app.use('/auth',require('./routes/auth'))




//app.listen(5000,() => console.log("Server running at http://localhost:5000"));

