const http = require("http")
const url = require("url")
const fs = require("fs")

const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        fs.readFile('home.txt',(err,data)=>{
            if(err){
                res.end('error: ',err)
            }
            else{
                res.end(data.toString())
            }
        })
    }
    else if(req.url === "/contact"){
        fs.readFile('contact.txt',(err,data)=>{
            if(err){
                res.end('error: ',err)
            }
            else{
                res.end(data.toString())
            }
        })
    }
    else if(req.url === "/about"){
        fs.readFile('about.txt',(err,data)=>{
            if(err){
                res.end('error: ',err)
            }
            else{
                res.end(data.toString())
            }
        })
    }
    else if(req.url === "/profile"){
        fs.readFile('profile.txt',(err,data)=>{
            if(err){
                res.end('error: ',err)
            }
            else{
                res.end(data.toString())
            }
        })
    }
    else if(req.url === "/service"){
        fs.readFile('service.txt',(err,data)=>{
            if(err){
                res.end('error: ',err)
            }
            else{
                res.end(data.toString())
            }
        })
    }
    else{
        res.end("404 page not found")
    }
})
server.listen(3000,()=>{
    console.log("server started at 3000 port")
})