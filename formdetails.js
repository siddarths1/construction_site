let express = require("express");
let app = express();
let path = require("path");
app.use(express.urlencoded({extended:true}))

app.get("/",(req, res) => {
        console.log(__dirname);
        res.sendFile(path.join(__dirname, "contactus.html"));    
    });

app.post("/formdetails",(req,res) => {
    console.log(req)
    let firstname = req.query.fname;
    let lastname = req.query.lname;
    let email = req.query.email;
    let phn = req.query.phone;
    let city = req.query.city;
    let state = req.query.state;
    let interest = req.query.interests;
    res.send("done");
    res.send({firstname})
    res.writeHead("super")
});


app.listen(3000);
