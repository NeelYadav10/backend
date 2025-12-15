// 4) Create a program that appends the text into a file named output.txt. (A) 

const fs=require("fs")

fs.appendFile("output.txt","appended",(err)=>{
    if(err){
        console.log('error: ',err);
    }
    else{
        console.log("file updated successfully");
        
    }
})