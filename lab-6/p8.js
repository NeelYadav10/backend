// Write a program that copies a file named source.txt to a new file named backup.txt using 
// fs.copyFile(). 

const fs=require("fs")

fs.copyFile('source.txt','backup.txt',(err)=>{
    if(err){
        console.log('error: ',err);
    }
    else{
        console.log("file copied successfully");
        
    }
})