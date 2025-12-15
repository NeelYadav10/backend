// Create a program that writes the text into a file named output.txt.

const fs=require("fs")

fs.writeFile('output.txt','hello from output.txt!!',(err)=>{
    if(err){
        console.log('error: ',err);
    }
    else{
        console.log("file created or updated successfully");
        
    }
})