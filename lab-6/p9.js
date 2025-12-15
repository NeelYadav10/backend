//  Write a program that checks if the file config.json exists in the current directory using 
// fs.existsSync() and prints the result.

const fs=require("fs")

if(fs.existsSync("config.json")){
    console.log("file founded!!");
}
else{
    console.log("file not found!!");
}