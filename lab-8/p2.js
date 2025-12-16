const express = require("express")

const app = express()

app.get("/",(req,res)=>{
    res.send("Hello from homepage!!")
})

app.get("/about",(req,res)=>{
    res.send("Hello from about page!!")
})

app.get("/service",(req,res)=>{
    res.send("Hello from service page!!")
})

app.get("/contact",(req,res)=>{
    res.send("Hello from contact page!!")
})

app.get("/profile",(req,res)=>{
    res.send("Hello from profile page!!")
})

app.use((req,res)=>{
    res.status(404).send("404 page not found")
})

app.listen(3000,()=>{
    console.log("server started at 3000")
})