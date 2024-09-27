var fs = require('fs')

fs.readFile("text1.txt", {encoding:'utf-8'}, (err,data)=>{
    console.log(data)
})

var data = fs.readFileSync("text2.txt", {encoding:'utf-8'})
console.log(data)