const os=require("os");
console.log("Operating system name :",os.type());

console.log("Release version :",os.version());

console.log("Platform: ",os.platform());

console.log("Architecture: ",os.arch());

let tBytes=os.totalmem();
let tGB=tBytes/(1024*1024*1024);

console.log("total memory: ",tGB);

let fBytes=os.freemem();
let fGB=fBytes/(1024*1024*1024)

console.log("free memory: ",fGB);

console.log("user info: ",os.userInfo());

console.log("running uptime in seconds: ",os.uptime());

console.log("running uptime in hours: ",os.uptime()/3600);

console.log("Number of CPU cores : ",os.cpus());