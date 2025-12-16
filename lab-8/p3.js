const express = require("express")

const fs = require("fs")

const app = express()

app.get("/",(req,res)=>{
    fs.readFile('home.txt',(err,data)=>{
        if(err){
            res.send('error: ',err)
        }
        else{
            res.send(data.toString())
        }
    })
})

app.get("/about",(req,res)=>{
    fs.readFile('about.txt',(err,data)=>{
        if(err){
            res.send('error: ',err)
        }
        else{
            res.send(data.toString())
        }
    })
})

app.get("/service",(req,res)=>{
    fs.readFile('service.txt',(err,data)=>{
        if(err){
            res.send('error: ',err)
        }
        else{
            res.send(data.toString())
        }
    })
})

app.get("/contact",(req,res)=>{
    fs.readFile('contact.txt',(err,data)=>{
        if(err){
            res.end('error: ',err)
        }
        else{
            res.end(data.toString())
        }
    })
})

app.get("/profile",(req,res)=>{
    fs.readFile('profile.txt',(err,data)=>{
        if(err){
            res.send('error: ',err)
        }
        else{
            res.send(data.toString())
        }
    })
})

app.use((req,res)=>{
    res.status(404).send("404 page not found")
})

app.listen(3000,()=>{
    console.log("server started at 3000")
})