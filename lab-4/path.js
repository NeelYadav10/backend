const path=require("path");

const diractory=path.dirname("D:\\neel\\back end\\lab-4\\darshan.txt")
console.log("directory name: ",diractory);

const fileName=path.basename("D:\\neel\\back end\\lab-4\\darshan.txt");
console.log("file name: ",fileName);

const extName=path.extname("D:\\neel\\back end\\lab-4\\darshan.txt");
console.log("file name: ",extName);

console.log("full path: ",path.resolve("darshan.txt"));

const joinPath=path.join("users", "arjun", "documents", "project")
console.log("joined path: ",joinPath);

const nomPath=path.normalize("//folder//subfolder////file.txt");
console.log("normlize path: ",nomPath);

const pathType=path.isAbsolute("D:\\neel\\back end\\lab-4\\darshan.txt");
if(pathType){
    console.log("Given path is absolute");
}
else{
    console.log("Given path is relative");
}

const resPath=path.resolve("folder", "subfolder", "app.js");
console.log("resolve path: ",resPath);