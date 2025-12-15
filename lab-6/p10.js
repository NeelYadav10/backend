// Write a program using fs.watch() to monitor changes in watchme.txt. Whenever file content 
// changes, print: “File Changed”

const fs=require("fs")

fs.watch('.',(event,file)=>{
    console.log('event: ',event,' file: ',file);
})