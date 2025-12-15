// Write a program to delete a file named temp.txt using fs.unlink() and display success or 
// error. 

const fs=require("fs")

fs.unlink("temp.txt",(err)=>{
    if(err){
        console.log('error: ',err);
    }
    else{
        console.log("file deleted successfully");
        
    }
})