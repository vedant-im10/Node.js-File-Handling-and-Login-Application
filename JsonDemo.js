var express = require('express')
var fs = require('fs')

var app = express()

var myObj = {
    name: 'car',
    type: 'santro',
    company: 'hyundai'
}

app.get("/writefile", (req,res)=>{
    fs.writeFile('jsondata', JSON.stringify(myObj), function(err){
        console.log("File has been written.")
    })
    res.send("File has been written.")
})

app.get("/readfile", function(req,res){
    fs.readFile("jsondata", function(err,data){
        res.setHeader("Content-type", "application/json")
        res.send(data)
        console.log(JSON.parse(data))
    })
})

app.listen(5000)