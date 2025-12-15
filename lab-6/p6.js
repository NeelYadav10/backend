// Write a program that creates a folder named my-data using fs.mkdir(). If the folder already 
// exists, show an appropriate message

const fs=require("fs")

fs.mkdir("my-data",(err)=>{
    if(err){
        if(err.code=='EEXIST'){
            console.log('folder already exist');
        }
        else{
            console.log('error: ',err); 
            return     
        }
    }
    else{
        console.log("folder created successfully");
    }
})