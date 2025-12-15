const child_process=require("child_process")
const { stdout, stderr } = require("process")

child_process.exec("node --version",(err,stdout,stderr)=>{
    if(err){
        console.log("error: ",{error})
    }
    if(stdout){
        console.log("output: ",{stdout})
    }
    if(stderr){
        console.log("stderror: ",{stderr})
    }
})