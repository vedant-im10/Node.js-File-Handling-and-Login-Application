const express = require('express');
const fs = require('fs');
const bp = require('body-parser');

const app = express()
app.use(bp.urlencoded({extended:true}));

app.get("/", (req,res)=>{
    fs.readFile("login.html", (err,data)=>{
        res.writeHead(200, {"Content-type": "text/html"});
        res.write(data);
        res.end()
    });
});

app.post('/login', (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;

    const userObj = {
        username,
        password
    }

    fs.writeFile(username, JSON.stringify(userObj), (err=>{
        if(!err){
            res.send("User has been Created.");
        }
    }));
});

app.listen(3000)