const http = require("http")
const url = require("url")

const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.end("Home page")
    }
    else if(req.url === "/contact"){
        res.end("contact page")
    }
    else if(req.url === "/about"){
        res.end("about page")
    }
    else if(req.url === "/profile"){
        res.end("profile page")
    }
    else if(req.url === "/service"){
        res.end("service page")
    }
    else{
        res.end("404 page not found")
    }
})
server.listen(3000,()=>{
    console.log("server started at 3000 port")
})