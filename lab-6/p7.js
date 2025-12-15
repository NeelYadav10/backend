// Write a program to list all files in a folder called documents/ using fs.readdir() and print the 
// file names one by one.

const fs=require("fs")

fs.readdir('.',(err,data)=>{
    if(err){
        console.log('error: ',err);
    }
    else{
        console.log(data);
        
    }
})