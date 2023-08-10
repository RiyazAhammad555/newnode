const express = require('express')
const fs = require('fs')

const app = express()
const port = 3000
app.get('/', (req, res) => {
    fs.writeFile('hello.txt', 'Hello World!', function (err) {
    res.send('File is being created')
})})
app.get('/read',(req,res)=>{
    fs.readFile('hello.txt','utf8',(err,data)=>{
        if(err){
            res.send(err)
        }
        res.send(data)
    })
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})