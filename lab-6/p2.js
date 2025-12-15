//  Use fs.readFileSync() to read info.txt and print the content, Compare execution with the 
// asynchronous version.

const { log } = require("console");
const fs=require("fs")

console.log("start");

try{
    data=fs.readFileSync('demo.txt')
    console.log(data.toString())
}
catch(err){
    console.log('error: ',err);
}
console.log("end");